import {Component, h, Prop, State} from '@stencil/core';
import {SearchBox, SearchBoxState, buildSearchBox} from '@coveo/headless';
import {
  Bindings,
  BindStateToController,
  BindStateToI18n,
  I18nState,
  InitializeBindings,
} from '../../utils/initialization-utils';
import {randomID} from '../../utils/utils';
import {Combobox} from '../../utils/combobox';
import ClearIcon from 'coveo-styleguide/resources/icons/svg/clear.svg';
import SearchIcon from 'coveo-styleguide/resources/icons/svg/search.svg';

/**
 * A search box with built in support for query suggestions.
 *
 * @part submit-button - The search box submit button
 * @part input - The search box input
 * @part clear-button - The search box input's clear button
 * @part suggestions - The list of suggestions
 * @part suggestion - The suggestion
 * @part active-suggestion - The currently active suggestion
 */
@Component({
  tag: 'atomic-search-box',
  styleUrl: 'atomic-search-box.pcss',
  shadow: true,
})
export class AtomicSearchBox {
  @InitializeBindings() public bindings!: Bindings;

  @BindStateToI18n()
  @State()
  public strings: I18nState = {
    clear: () => this.bindings.i18n.t('clear'),
    search: () => this.bindings.i18n.t('search'),
    searchBox: () => this.bindings.i18n.t('searchBox'),
    querySuggestionList: () => this.bindings.i18n.t('querySuggestionList'),
  };
  /**
   * Maximum number of suggestions to display
   * @default 5
   */
  @Prop() numberOfSuggestions = 5;
  /**
   * The placeholder for the search box input
   * @default ''
   */
  @Prop() placeholder = '';
  /**
   * Whether the submit button should be placed before the input
   * @default false
   */
  @Prop() leadingSubmitButton = false;
  @Prop({reflect: true, attribute: 'data-id'}) public _id = randomID(
    'atomic-search-box-'
  );

  private searchBox!: SearchBox;
  private inputRef!: HTMLInputElement;
  private valuesRef!: HTMLElement;
  private containerRef!: HTMLElement;
  private combobox!: Combobox;

  @BindStateToController('searchBox')
  @State()
  private searchBoxState!: SearchBoxState;
  @State() public error!: Error;

  constructor() {
    this.combobox = new Combobox({
      id: this._id,
      strings: this.strings,
      containerRef: () => this.containerRef,
      inputRef: () => this.inputRef,
      valuesRef: () => this.valuesRef,
      onChange: (value) => {
        this.searchBox.updateText(value);
      },
      onSubmit: () => {
        this.searchBox.submit();
        this.searchBox.hideSuggestions();
      },
      onSelectValue: (element) => {
        this.searchBox.selectSuggestion(
          this.searchBoxState.suggestions[(element as HTMLLIElement).value]
            .rawValue
        );
      },
      onBlur: () => {
        setTimeout(() => this.searchBox.hideSuggestions(), 100);
      },
      activeClass: 'active',
      activePartName: 'active-suggestion',
    });
  }

  public componentDidRender() {
    this.combobox.updateAccessibilityAttributes();
  }

  public initialize() {
    this.searchBox = buildSearchBox(this.bindings.engine, {
      options: {
        numberOfSuggestions: this.numberOfSuggestions,
        highlightOptions: {
          notMatchDelimiters: {
            open: '<strong>',
            close: '</strong>',
          },
          correctionDelimiters: {
            open: '<i>',
            close: '</i>',
          },
        },
      },
    });
  }

  private onInputFocus() {
    this.searchBox.showSuggestions();
  }

  private get submitButton() {
    return (
      <button
        type="button"
        part="submit-button"
        class={
          'submit-button bg-transparent border-0 focus:outline-none bg-primary p-0 ' +
          (this.leadingSubmitButton ? ' rounded-l-lg' : 'rounded-r-lg')
        }
        aria-label={this.strings.search()}
        onClick={() => this.searchBox.submit()}
      >
        <div
          innerHTML={SearchIcon}
          class="search mx-auto w-3.5 h-3.5 text-on-primary fill-current"
        />
      </button>
    );
  }

  private get clearButton() {
    if (this.searchBoxState.value === '') {
      return;
    }

    return (
      <button
        type="button"
        part="clear-button"
        class="clear-button bg-transparent border-none outline-none mr-2"
        aria-label={this.strings.clear()}
        onClick={() => {
          this.searchBox.clear();
          this.inputRef.focus();
        }}
      >
        <div
          innerHTML={ClearIcon}
          class="w-2.5 h-2.5 text-on-background fill-current"
        />
      </button>
    );
  }

  private get input() {
    return (
      <input
        part="input"
        ref={(el) => (this.inputRef = el as HTMLInputElement)}
        onFocus={() => this.onInputFocus()}
        // onBlur={() => this.combobox.onInputBlur()}
        onInput={(e) => this.combobox.onInputChange(e)}
        onKeyUp={(e) => this.combobox.onInputKeyup(e)}
        onKeyDown={(e) => this.combobox.onInputKeydown(e)}
        type="text"
        class={
          'input mx-2 my-0 text-base placeholder-on-background outline-none flex-grow flex-row items-center '
        }
        placeholder={this.placeholder}
        value={this.searchBoxState.value}
      />
    );
  }

  private get suggestions() {
    return this.searchBoxState.suggestions.map((suggestion, index) => {
      return (
        <li
          onClick={() => {
            this.searchBox.selectSuggestion(suggestion.rawValue);
          }}
          onMouseDown={(e) => e.preventDefault()}
          part="suggestion"
          class="suggestion h-9 px-2 cursor-pointer text-left text-sm bg-transparent border-none shadow-none  flex flex-row items-center"
          innerHTML={suggestion.highlightedValue}
          value={index}
        />
      );
    });
  }

  public render() {
    return (
      <div>
        <div class="search-box box-border w-full lg:w-80 flex flex-row align-items-center">
          {this.leadingSubmitButton && this.submitButton}
          <div
            class={
              'input-wrapper flex flex-row flex-grow align-items-center apply-border-on-background ' +
              (this.leadingSubmitButton
                ? 'border-l-0 rounded-r-lg'
                : 'border-r-0 rounded-l-lg')
            }
            ref={(el) => (this.containerRef = el as HTMLElement)}
          >
            {this.input}
            {this.clearButton}
          </div>
          {!this.leadingSubmitButton && this.submitButton}
        </div>

        <ul
          part="suggestions"
          class="empty:border-none box-border w-full lg:w-80 p-0 my-0 flex flex-col apply-border-on-background border-t-0 rounded-b list-none"
          ref={(el) => (this.valuesRef = el as HTMLElement)}
        >
          {this.suggestions}
        </ul>
      </div>
    );
  }
}
