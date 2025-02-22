import {Component, h, State, Prop} from '@stencil/core';
import {
  Facet,
  buildFacet,
  FacetState,
  FacetOptions,
  FacetValue,
  FacetSortCriterion,
  SpecificFacetSearchResult,
  SearchStatus,
  SearchStatusState,
  buildSearchStatus,
} from '@coveo/headless';
import {
  Bindings,
  BindStateToController,
  BindStateToI18n,
  InitializableComponent,
  InitializeBindings,
} from '../../../utils/initialization-utils';
import {FacetValue as FacetValueComponent} from '../facet-value/facet-value';
import {
  BaseFacet,
  BaseFacetController,
  BaseFacetState,
} from '../base-facet/base-facet';
import {
  FacetSearch,
  FacetSearchComponent,
  FacetSearchStrings,
} from '../facet-search/facet-search';
import {FacetPlaceholder} from '../atomic-facet-placeholder/atomic-facet-placeholder';

/**
 * A facet component. It is displayed as a facet in desktop browsers and as
 * a button which opens a facet modal in mobile browsers.
 *
 * @part facet - The wrapper for the entire facet
 * @part close-button - The button to close the facet when displayed modally (mobile only)
 * @part clear-button - The button that resets the actively selected facet values
 *
 * @part search-input - The search input
 * @part search-icon - The magnifier icon of the input
 * @part search-input-clear-button - The clear button of the input
 * @part search-results - The list of search results
 * @part search-result - A search result
 * @part active-search-result - The currently active search result

 * @part placeholder - The placeholder shown before the first search is executed.
 * @part value - A single facet value
 * @part value-label - The facet value label
 * @part value-count - The facet value count
 * @part show-more - The show more results button
 * @part show-less - The show less button
 *
 */
@Component({
  tag: 'atomic-facet',
  styleUrl: 'atomic-facet.pcss',
  shadow: true,
})
export class AtomicFacet
  implements InitializableComponent, FacetSearchComponent, BaseFacetState {
  @InitializeBindings() public bindings!: Bindings;
  public facet!: Facet;
  public searchStatus!: SearchStatus;
  private facetSearch?: FacetSearch;

  @BindStateToController('facet', {subscribeOnConnectedCallback: true})
  @State()
  public facetState!: FacetState;
  @BindStateToController('searchStatus')
  @State()
  private searchStatusState!: SearchStatusState;
  @State() public error!: Error;

  @BindStateToI18n()
  @State()
  public strings: FacetSearchStrings = {
    clear: () => this.bindings.i18n.t('clear'),
    searchBox: () =>
      this.bindings.i18n.t('facetSearch', {label: this.strings[this.label]()}),
    placeholder: () => this.bindings.i18n.t('search'),
    querySuggestionList: () => this.bindings.i18n.t('querySuggestionList'),
    showMore: () => this.bindings.i18n.t('showMore'),
    showLess: () => this.bindings.i18n.t('showLess'),
    facetValue: (variables) => this.bindings.i18n.t('facetValue', variables),
  };

  @State() public isExpanded = false;
  @State() public facetSearchQuery = '';
  @State() public showFacetSearchResults = false;

  @Prop({mutable: true, reflect: true}) public facetId = '';
  /**
   * The field whose values you want to display in the facet.
   */
  @Prop() public field = '';
  /**
   * The non-localized label for the facet.
   */
  @Prop() public label = 'noLabel';
  /**
   * The character that separates values of a multi-value field.
   */
  @Prop() public delimitingCharacter = ';';
  /**
   * The number of values to request for this facet. Also determines the number of additional values to request each time this facet is expanded, and the number of values to display when this facet is collapsed.
   */
  @Prop() public numberOfValues = 10;
  /**
   * Whether this facet should contain a search box.
   */
  @Prop() public enableFacetSearch = true;
  /**
   * The sort criterion to apply to the returned facet values. Possible values are 'score', 'numeric', 'occurrences', and 'automatic'.
   */
  @Prop() public sortCriteria: FacetSortCriterion = 'automatic';

  public initialize() {
    this.searchStatus = buildSearchStatus(this.bindings.engine);
    const options: FacetOptions = {
      field: this.field,
      delimitingCharacter: this.delimitingCharacter,
      numberOfValues: this.numberOfValues,
      sortCriteria: this.sortCriteria,
    };
    this.facet = buildFacet(this.bindings.engine, {options});
    this.strings[this.label] = () => this.bindings.i18n.t(this.label);
    if (this.enableFacetSearch) {
      this.facetSearch = new FacetSearch(this);
    }
    this.facetId = this.facet.state.facetId;
    this.bindings.store.state.facets[this.facetId] = {
      label: this.label,
    };
  }

  private get values() {
    return this.facetState.values.map((listItem) =>
      this.buildListItem(listItem)
    );
  }

  private buildListItem(item: FacetValue) {
    const isSelected = this.facet.isValueSelected(item);
    return (
      <FacetValueComponent
        label={`${item.value}`}
        ariaLabel={this.strings.facetValue(item)}
        isSelected={isSelected}
        numberOfResults={item.numberOfResults.toLocaleString(
          this.bindings.i18n.language
        )}
        facetValueSelected={() => {
          this.facet.toggleSelect(item);
        }}
      />
    );
  }

  private get showMoreButton() {
    if (!this.facetState.canShowMoreValues) {
      return;
    }

    return (
      <button
        class="value-button text-primary"
        part="show-more"
        onClick={() => this.facet.showMoreValues()}
      >
        {this.strings.showMore()}
      </button>
    );
  }

  private get showLessButton() {
    if (!this.facetState.canShowLessValues) {
      return;
    }

    return (
      <button
        class="value-button text-primary"
        part="show-less"
        onClick={() => this.facet.showLessValues()}
      >
        {this.strings.showLess()}
      </button>
    );
  }

  public renderSearchResult(searchResult: SpecificFacetSearchResult) {
    return (
      <div class="flex" aria-hidden>
        <span
          part="value-label"
          class="ellipsed"
          innerHTML={FacetSearch.highlightSearchResult(
            searchResult.displayValue,
            this.facetSearchQuery
          )}
        />
        <span part="value-count" class="value-count">
          {searchResult.count.toLocaleString(this.bindings.i18n.language)}
        </span>
      </div>
    );
  }

  public ariaLabelForSearchResult(searchResult: SpecificFacetSearchResult) {
    return this.strings.facetValue({
      numberOfResults: searchResult.count,
      value: searchResult.displayValue,
    });
  }

  public componentDidRender() {
    this.facetSearch?.updateCombobox();
  }

  public render() {
    if (this.searchStatusState.hasError) {
      return;
    }

    if (!this.searchStatusState.firstSearchExecuted) {
      return (
        <FacetPlaceholder
          numberOfValues={this.numberOfValues}
        ></FacetPlaceholder>
      );
    }

    if (this.facetState.values.length === 0) {
      return;
    }

    return (
      <BaseFacet
        controller={new BaseFacetController(this)}
        label={this.strings[this.label]()}
        hasActiveValues={this.facetState.hasActiveValues}
        clearAll={() => this.facet.deselectAll()}
      >
        {this.facetState.canShowMoreValues && this.facetSearch?.render()}
        <div class="mt-1">
          <ul>{this.values}</ul>
          <div class="flex flex-col items-start space-y-1">
            {this.showLessButton}
            {this.showMoreButton}
          </div>
        </div>
      </BaseFacet>
    );
  }
}
