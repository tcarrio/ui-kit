/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CategoryFacet, CategoryFacetState, Engine, Facet, FacetState, LogLevel, Result, ResultTemplateCondition } from "@coveo/headless";
import { Bindings } from "./utils/initialization-utils";
import { i18n } from "i18next";
import { InitializationOptions } from "./components/atomic-search-interface/atomic-search-interface";
export namespace Components {
    interface AtomicBreadcrumbManager {
        "categoryDivider": string;
        "collapseThreshold": number;
    }
    interface AtomicCategoryFacet {
        "facetId": string;
        "field": string;
        "label": string;
    }
    interface AtomicComponentError {
        "element": HTMLElement;
        "error": Error;
    }
    interface AtomicDateFacet {
        "facetId": string;
        "field": string;
        "label": string;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        "facetId": string;
        "field": string;
        "label": string;
    }
    interface AtomicFacetManager {
    }
    interface AtomicFieldCondition {
        "conditions": ResultTemplateCondition[];
        "getFields": () => Promise<string[]>;
        "ifDefined"?: string;
        "ifNotDefined"?: string;
    }
    interface AtomicFrequentlyBoughtTogether {
    }
    interface AtomicHistory {
    }
    interface AtomicNumericFacet {
        "facetId": string;
        "field": string;
        "label": string;
    }
    interface AtomicPager {
        /**
          * Specifies whether the **Previous** and **Next** buttons should appear at each end of the pager when appropriate.
         */
        "enableNavigationButtons": boolean;
        /**
          * Specifies how many page buttons to display in the pager.
         */
        "numberOfPages": number;
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
    }
    interface AtomicRelevanceInspector {
        "bindings": Bindings;
    }
    interface AtomicResult {
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultLink {
    }
    interface AtomicResultList {
        /**
          * Whether to automatically retrieve an additional page of results and append it to the current results when the user scrolls down to the bottom of element
         */
        "enableInfiniteScroll": boolean;
        "fieldsToInclude": string;
        /**
          * Css class for the list wrapper
         */
        "listClass": string;
        /**
          * Css class for a list element
         */
        "listElementClass": string;
    }
    interface AtomicResultTemplate {
        "conditions": ResultTemplateCondition[];
        "fieldsToInclude"?: string;
        "getConditions": () => Promise<ResultTemplateCondition[]>;
        "getFields": () => Promise<string[]>;
    }
    interface AtomicResultValue {
        "value": string;
    }
    interface AtomicResultsPerPage {
        /**
          * List of possible results per page choices, separated by commas.
         */
        "choicesDisplayed": string;
        /**
          * Initial choice for the number of result per page. Should be part of the `choicesDisplayed` option.
         */
        "initialChoice": number;
    }
    interface AtomicSearchBox {
        "_id": string;
        /**
          * Whether the submit button should be placed before the input
          * @default false
         */
        "leadingSubmitButton": boolean;
        /**
          * Maximum number of suggestions to display
          * @default 5
         */
        "numberOfSuggestions": number;
        /**
          * The placeholder for the search box input
          * @default ''
         */
        "placeholder": string;
    }
    interface AtomicSearchInterface {
        "engine"?: Engine;
        "executeFirstSearch": () => Promise<void>;
        "i18n": i18n;
        "initialize": (options: InitializationOptions) => Promise<void>;
        "language": string;
        "logLevel"?: LogLevel;
        "pipeline": string;
        "reflectStateInUrl": boolean;
        "searchHub": string;
    }
    interface AtomicSortCriteria {
        /**
          * The non-localized caption to display for this criteria.
         */
        "caption": string;
        /**
          * The sort criterion/criteria the end user can select/toggle between.  The available sort criteria are: - `relevancy` - `date ascending`/`date descending` - `qre` - `field ascending`/`field descending`, where you must replace `field` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).  You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"` ).
         */
        "criteria": string;
    }
    interface AtomicSortDropdown {
    }
    interface AtomicTab {
        "expression": string;
        "isActive": boolean;
    }
    interface AtomicText {
        /**
          * Count value used for plurals
         */
        "count"?: number;
        /**
          * String key value
         */
        "value": string;
    }
    interface BaseFacet {
        "hasActiveValues": boolean;
        "label": string;
    }
    interface FacetSearch {
        "_id": string;
        "facet": Facet | CategoryFacet;
        "facetState": FacetState | CategoryFacetState;
    }
    interface FacetValue {
        "isSelected": boolean;
        "label": string;
        "numberOfResults": number;
    }
}
declare global {
    interface HTMLAtomicBreadcrumbManagerElement extends Components.AtomicBreadcrumbManager, HTMLStencilElement {
    }
    var HTMLAtomicBreadcrumbManagerElement: {
        prototype: HTMLAtomicBreadcrumbManagerElement;
        new (): HTMLAtomicBreadcrumbManagerElement;
    };
    interface HTMLAtomicCategoryFacetElement extends Components.AtomicCategoryFacet, HTMLStencilElement {
    }
    var HTMLAtomicCategoryFacetElement: {
        prototype: HTMLAtomicCategoryFacetElement;
        new (): HTMLAtomicCategoryFacetElement;
    };
    interface HTMLAtomicComponentErrorElement extends Components.AtomicComponentError, HTMLStencilElement {
    }
    var HTMLAtomicComponentErrorElement: {
        prototype: HTMLAtomicComponentErrorElement;
        new (): HTMLAtomicComponentErrorElement;
    };
    interface HTMLAtomicDateFacetElement extends Components.AtomicDateFacet, HTMLStencilElement {
    }
    var HTMLAtomicDateFacetElement: {
        prototype: HTMLAtomicDateFacetElement;
        new (): HTMLAtomicDateFacetElement;
    };
    interface HTMLAtomicDidYouMeanElement extends Components.AtomicDidYouMean, HTMLStencilElement {
    }
    var HTMLAtomicDidYouMeanElement: {
        prototype: HTMLAtomicDidYouMeanElement;
        new (): HTMLAtomicDidYouMeanElement;
    };
    interface HTMLAtomicFacetElement extends Components.AtomicFacet, HTMLStencilElement {
    }
    var HTMLAtomicFacetElement: {
        prototype: HTMLAtomicFacetElement;
        new (): HTMLAtomicFacetElement;
    };
    interface HTMLAtomicFacetManagerElement extends Components.AtomicFacetManager, HTMLStencilElement {
    }
    var HTMLAtomicFacetManagerElement: {
        prototype: HTMLAtomicFacetManagerElement;
        new (): HTMLAtomicFacetManagerElement;
    };
    interface HTMLAtomicFieldConditionElement extends Components.AtomicFieldCondition, HTMLStencilElement {
    }
    var HTMLAtomicFieldConditionElement: {
        prototype: HTMLAtomicFieldConditionElement;
        new (): HTMLAtomicFieldConditionElement;
    };
    interface HTMLAtomicFrequentlyBoughtTogetherElement extends Components.AtomicFrequentlyBoughtTogether, HTMLStencilElement {
    }
    var HTMLAtomicFrequentlyBoughtTogetherElement: {
        prototype: HTMLAtomicFrequentlyBoughtTogetherElement;
        new (): HTMLAtomicFrequentlyBoughtTogetherElement;
    };
    interface HTMLAtomicHistoryElement extends Components.AtomicHistory, HTMLStencilElement {
    }
    var HTMLAtomicHistoryElement: {
        prototype: HTMLAtomicHistoryElement;
        new (): HTMLAtomicHistoryElement;
    };
    interface HTMLAtomicNumericFacetElement extends Components.AtomicNumericFacet, HTMLStencilElement {
    }
    var HTMLAtomicNumericFacetElement: {
        prototype: HTMLAtomicNumericFacetElement;
        new (): HTMLAtomicNumericFacetElement;
    };
    interface HTMLAtomicPagerElement extends Components.AtomicPager, HTMLStencilElement {
    }
    var HTMLAtomicPagerElement: {
        prototype: HTMLAtomicPagerElement;
        new (): HTMLAtomicPagerElement;
    };
    interface HTMLAtomicQueryErrorElement extends Components.AtomicQueryError, HTMLStencilElement {
    }
    var HTMLAtomicQueryErrorElement: {
        prototype: HTMLAtomicQueryErrorElement;
        new (): HTMLAtomicQueryErrorElement;
    };
    interface HTMLAtomicQuerySummaryElement extends Components.AtomicQuerySummary, HTMLStencilElement {
    }
    var HTMLAtomicQuerySummaryElement: {
        prototype: HTMLAtomicQuerySummaryElement;
        new (): HTMLAtomicQuerySummaryElement;
    };
    interface HTMLAtomicRelevanceInspectorElement extends Components.AtomicRelevanceInspector, HTMLStencilElement {
    }
    var HTMLAtomicRelevanceInspectorElement: {
        prototype: HTMLAtomicRelevanceInspectorElement;
        new (): HTMLAtomicRelevanceInspectorElement;
    };
    interface HTMLAtomicResultElement extends Components.AtomicResult, HTMLStencilElement {
    }
    var HTMLAtomicResultElement: {
        prototype: HTMLAtomicResultElement;
        new (): HTMLAtomicResultElement;
    };
    interface HTMLAtomicResultLinkElement extends Components.AtomicResultLink, HTMLStencilElement {
    }
    var HTMLAtomicResultLinkElement: {
        prototype: HTMLAtomicResultLinkElement;
        new (): HTMLAtomicResultLinkElement;
    };
    interface HTMLAtomicResultListElement extends Components.AtomicResultList, HTMLStencilElement {
    }
    var HTMLAtomicResultListElement: {
        prototype: HTMLAtomicResultListElement;
        new (): HTMLAtomicResultListElement;
    };
    interface HTMLAtomicResultTemplateElement extends Components.AtomicResultTemplate, HTMLStencilElement {
    }
    var HTMLAtomicResultTemplateElement: {
        prototype: HTMLAtomicResultTemplateElement;
        new (): HTMLAtomicResultTemplateElement;
    };
    interface HTMLAtomicResultValueElement extends Components.AtomicResultValue, HTMLStencilElement {
    }
    var HTMLAtomicResultValueElement: {
        prototype: HTMLAtomicResultValueElement;
        new (): HTMLAtomicResultValueElement;
    };
    interface HTMLAtomicResultsPerPageElement extends Components.AtomicResultsPerPage, HTMLStencilElement {
    }
    var HTMLAtomicResultsPerPageElement: {
        prototype: HTMLAtomicResultsPerPageElement;
        new (): HTMLAtomicResultsPerPageElement;
    };
    interface HTMLAtomicSearchBoxElement extends Components.AtomicSearchBox, HTMLStencilElement {
    }
    var HTMLAtomicSearchBoxElement: {
        prototype: HTMLAtomicSearchBoxElement;
        new (): HTMLAtomicSearchBoxElement;
    };
    interface HTMLAtomicSearchInterfaceElement extends Components.AtomicSearchInterface, HTMLStencilElement {
    }
    var HTMLAtomicSearchInterfaceElement: {
        prototype: HTMLAtomicSearchInterfaceElement;
        new (): HTMLAtomicSearchInterfaceElement;
    };
    interface HTMLAtomicSortCriteriaElement extends Components.AtomicSortCriteria, HTMLStencilElement {
    }
    var HTMLAtomicSortCriteriaElement: {
        prototype: HTMLAtomicSortCriteriaElement;
        new (): HTMLAtomicSortCriteriaElement;
    };
    interface HTMLAtomicSortDropdownElement extends Components.AtomicSortDropdown, HTMLStencilElement {
    }
    var HTMLAtomicSortDropdownElement: {
        prototype: HTMLAtomicSortDropdownElement;
        new (): HTMLAtomicSortDropdownElement;
    };
    interface HTMLAtomicTabElement extends Components.AtomicTab, HTMLStencilElement {
    }
    var HTMLAtomicTabElement: {
        prototype: HTMLAtomicTabElement;
        new (): HTMLAtomicTabElement;
    };
    interface HTMLAtomicTextElement extends Components.AtomicText, HTMLStencilElement {
    }
    var HTMLAtomicTextElement: {
        prototype: HTMLAtomicTextElement;
        new (): HTMLAtomicTextElement;
    };
    interface HTMLBaseFacetElement extends Components.BaseFacet, HTMLStencilElement {
    }
    var HTMLBaseFacetElement: {
        prototype: HTMLBaseFacetElement;
        new (): HTMLBaseFacetElement;
    };
    interface HTMLFacetSearchElement extends Components.FacetSearch, HTMLStencilElement {
    }
    var HTMLFacetSearchElement: {
        prototype: HTMLFacetSearchElement;
        new (): HTMLFacetSearchElement;
    };
    interface HTMLFacetValueElement extends Components.FacetValue, HTMLStencilElement {
    }
    var HTMLFacetValueElement: {
        prototype: HTMLFacetValueElement;
        new (): HTMLFacetValueElement;
    };
    interface HTMLElementTagNameMap {
        "atomic-breadcrumb-manager": HTMLAtomicBreadcrumbManagerElement;
        "atomic-category-facet": HTMLAtomicCategoryFacetElement;
        "atomic-component-error": HTMLAtomicComponentErrorElement;
        "atomic-date-facet": HTMLAtomicDateFacetElement;
        "atomic-did-you-mean": HTMLAtomicDidYouMeanElement;
        "atomic-facet": HTMLAtomicFacetElement;
        "atomic-facet-manager": HTMLAtomicFacetManagerElement;
        "atomic-field-condition": HTMLAtomicFieldConditionElement;
        "atomic-frequently-bought-together": HTMLAtomicFrequentlyBoughtTogetherElement;
        "atomic-history": HTMLAtomicHistoryElement;
        "atomic-numeric-facet": HTMLAtomicNumericFacetElement;
        "atomic-pager": HTMLAtomicPagerElement;
        "atomic-query-error": HTMLAtomicQueryErrorElement;
        "atomic-query-summary": HTMLAtomicQuerySummaryElement;
        "atomic-relevance-inspector": HTMLAtomicRelevanceInspectorElement;
        "atomic-result": HTMLAtomicResultElement;
        "atomic-result-link": HTMLAtomicResultLinkElement;
        "atomic-result-list": HTMLAtomicResultListElement;
        "atomic-result-template": HTMLAtomicResultTemplateElement;
        "atomic-result-value": HTMLAtomicResultValueElement;
        "atomic-results-per-page": HTMLAtomicResultsPerPageElement;
        "atomic-search-box": HTMLAtomicSearchBoxElement;
        "atomic-search-interface": HTMLAtomicSearchInterfaceElement;
        "atomic-sort-criteria": HTMLAtomicSortCriteriaElement;
        "atomic-sort-dropdown": HTMLAtomicSortDropdownElement;
        "atomic-tab": HTMLAtomicTabElement;
        "atomic-text": HTMLAtomicTextElement;
        "base-facet": HTMLBaseFacetElement;
        "facet-search": HTMLFacetSearchElement;
        "facet-value": HTMLFacetValueElement;
    }
}
declare namespace LocalJSX {
    interface AtomicBreadcrumbManager {
        "categoryDivider"?: string;
        "collapseThreshold"?: number;
    }
    interface AtomicCategoryFacet {
        "facetId"?: string;
        "field"?: string;
        "label"?: string;
    }
    interface AtomicComponentError {
        "element": HTMLElement;
        "error": Error;
    }
    interface AtomicDateFacet {
        "facetId"?: string;
        "field"?: string;
        "label"?: string;
    }
    interface AtomicDidYouMean {
    }
    interface AtomicFacet {
        "facetId"?: string;
        "field"?: string;
        "label"?: string;
    }
    interface AtomicFacetManager {
    }
    interface AtomicFieldCondition {
        "conditions"?: ResultTemplateCondition[];
        "ifDefined"?: string;
        "ifNotDefined"?: string;
    }
    interface AtomicFrequentlyBoughtTogether {
    }
    interface AtomicHistory {
    }
    interface AtomicNumericFacet {
        "facetId"?: string;
        "field"?: string;
        "label"?: string;
    }
    interface AtomicPager {
        /**
          * Specifies whether the **Previous** and **Next** buttons should appear at each end of the pager when appropriate.
         */
        "enableNavigationButtons"?: boolean;
        /**
          * Specifies how many page buttons to display in the pager.
         */
        "numberOfPages"?: number;
    }
    interface AtomicQueryError {
    }
    interface AtomicQuerySummary {
    }
    interface AtomicRelevanceInspector {
        "bindings": Bindings;
    }
    interface AtomicResult {
        "engine": Engine;
        "result": Result;
    }
    interface AtomicResultLink {
    }
    interface AtomicResultList {
        /**
          * Whether to automatically retrieve an additional page of results and append it to the current results when the user scrolls down to the bottom of element
         */
        "enableInfiniteScroll"?: boolean;
        "fieldsToInclude"?: string;
        /**
          * Css class for the list wrapper
         */
        "listClass"?: string;
        /**
          * Css class for a list element
         */
        "listElementClass"?: string;
    }
    interface AtomicResultTemplate {
        "conditions"?: ResultTemplateCondition[];
        "fieldsToInclude"?: string;
    }
    interface AtomicResultValue {
        "value"?: string;
    }
    interface AtomicResultsPerPage {
        /**
          * List of possible results per page choices, separated by commas.
         */
        "choicesDisplayed"?: string;
        /**
          * Initial choice for the number of result per page. Should be part of the `choicesDisplayed` option.
         */
        "initialChoice"?: number;
    }
    interface AtomicSearchBox {
        "_id"?: string;
        /**
          * Whether the submit button should be placed before the input
          * @default false
         */
        "leadingSubmitButton"?: boolean;
        /**
          * Maximum number of suggestions to display
          * @default 5
         */
        "numberOfSuggestions"?: number;
        /**
          * The placeholder for the search box input
          * @default ''
         */
        "placeholder"?: string;
    }
    interface AtomicSearchInterface {
        "engine"?: Engine;
        "i18n"?: i18n;
        "language"?: string;
        "logLevel"?: LogLevel;
        "pipeline"?: string;
        "reflectStateInUrl"?: boolean;
        "searchHub"?: string;
    }
    interface AtomicSortCriteria {
        /**
          * The non-localized caption to display for this criteria.
         */
        "caption": string;
        /**
          * The sort criterion/criteria the end user can select/toggle between.  The available sort criteria are: - `relevancy` - `date ascending`/`date descending` - `qre` - `field ascending`/`field descending`, where you must replace `field` with the name of a sortable field in your index (e.g., `criteria="size ascending"`).  You can specify multiple sort criteria to be used in the same request by separating them with a comma (e.g., `criteria="size ascending, date ascending"` ).
         */
        "criteria": string;
    }
    interface AtomicSortDropdown {
    }
    interface AtomicTab {
        "expression"?: string;
        "isActive"?: boolean;
    }
    interface AtomicText {
        /**
          * Count value used for plurals
         */
        "count"?: number;
        /**
          * String key value
         */
        "value": string;
    }
    interface BaseFacet {
        "hasActiveValues": boolean;
        "label": string;
        "onDeselectAll"?: (event: CustomEvent<void>) => void;
    }
    interface FacetSearch {
        "_id"?: string;
        "facet": Facet | CategoryFacet;
        "facetState": FacetState | CategoryFacetState;
    }
    interface FacetValue {
        "isSelected": boolean;
        "label": string;
        "numberOfResults": number;
        "onFacetValueSelected"?: (event: CustomEvent<void>) => void;
    }
    interface IntrinsicElements {
        "atomic-breadcrumb-manager": AtomicBreadcrumbManager;
        "atomic-category-facet": AtomicCategoryFacet;
        "atomic-component-error": AtomicComponentError;
        "atomic-date-facet": AtomicDateFacet;
        "atomic-did-you-mean": AtomicDidYouMean;
        "atomic-facet": AtomicFacet;
        "atomic-facet-manager": AtomicFacetManager;
        "atomic-field-condition": AtomicFieldCondition;
        "atomic-frequently-bought-together": AtomicFrequentlyBoughtTogether;
        "atomic-history": AtomicHistory;
        "atomic-numeric-facet": AtomicNumericFacet;
        "atomic-pager": AtomicPager;
        "atomic-query-error": AtomicQueryError;
        "atomic-query-summary": AtomicQuerySummary;
        "atomic-relevance-inspector": AtomicRelevanceInspector;
        "atomic-result": AtomicResult;
        "atomic-result-link": AtomicResultLink;
        "atomic-result-list": AtomicResultList;
        "atomic-result-template": AtomicResultTemplate;
        "atomic-result-value": AtomicResultValue;
        "atomic-results-per-page": AtomicResultsPerPage;
        "atomic-search-box": AtomicSearchBox;
        "atomic-search-interface": AtomicSearchInterface;
        "atomic-sort-criteria": AtomicSortCriteria;
        "atomic-sort-dropdown": AtomicSortDropdown;
        "atomic-tab": AtomicTab;
        "atomic-text": AtomicText;
        "base-facet": BaseFacet;
        "facet-search": FacetSearch;
        "facet-value": FacetValue;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atomic-breadcrumb-manager": LocalJSX.AtomicBreadcrumbManager & JSXBase.HTMLAttributes<HTMLAtomicBreadcrumbManagerElement>;
            "atomic-category-facet": LocalJSX.AtomicCategoryFacet & JSXBase.HTMLAttributes<HTMLAtomicCategoryFacetElement>;
            "atomic-component-error": LocalJSX.AtomicComponentError & JSXBase.HTMLAttributes<HTMLAtomicComponentErrorElement>;
            "atomic-date-facet": LocalJSX.AtomicDateFacet & JSXBase.HTMLAttributes<HTMLAtomicDateFacetElement>;
            "atomic-did-you-mean": LocalJSX.AtomicDidYouMean & JSXBase.HTMLAttributes<HTMLAtomicDidYouMeanElement>;
            "atomic-facet": LocalJSX.AtomicFacet & JSXBase.HTMLAttributes<HTMLAtomicFacetElement>;
            "atomic-facet-manager": LocalJSX.AtomicFacetManager & JSXBase.HTMLAttributes<HTMLAtomicFacetManagerElement>;
            "atomic-field-condition": LocalJSX.AtomicFieldCondition & JSXBase.HTMLAttributes<HTMLAtomicFieldConditionElement>;
            "atomic-frequently-bought-together": LocalJSX.AtomicFrequentlyBoughtTogether & JSXBase.HTMLAttributes<HTMLAtomicFrequentlyBoughtTogetherElement>;
            "atomic-history": LocalJSX.AtomicHistory & JSXBase.HTMLAttributes<HTMLAtomicHistoryElement>;
            "atomic-numeric-facet": LocalJSX.AtomicNumericFacet & JSXBase.HTMLAttributes<HTMLAtomicNumericFacetElement>;
            "atomic-pager": LocalJSX.AtomicPager & JSXBase.HTMLAttributes<HTMLAtomicPagerElement>;
            "atomic-query-error": LocalJSX.AtomicQueryError & JSXBase.HTMLAttributes<HTMLAtomicQueryErrorElement>;
            "atomic-query-summary": LocalJSX.AtomicQuerySummary & JSXBase.HTMLAttributes<HTMLAtomicQuerySummaryElement>;
            "atomic-relevance-inspector": LocalJSX.AtomicRelevanceInspector & JSXBase.HTMLAttributes<HTMLAtomicRelevanceInspectorElement>;
            "atomic-result": LocalJSX.AtomicResult & JSXBase.HTMLAttributes<HTMLAtomicResultElement>;
            "atomic-result-link": LocalJSX.AtomicResultLink & JSXBase.HTMLAttributes<HTMLAtomicResultLinkElement>;
            "atomic-result-list": LocalJSX.AtomicResultList & JSXBase.HTMLAttributes<HTMLAtomicResultListElement>;
            "atomic-result-template": LocalJSX.AtomicResultTemplate & JSXBase.HTMLAttributes<HTMLAtomicResultTemplateElement>;
            "atomic-result-value": LocalJSX.AtomicResultValue & JSXBase.HTMLAttributes<HTMLAtomicResultValueElement>;
            "atomic-results-per-page": LocalJSX.AtomicResultsPerPage & JSXBase.HTMLAttributes<HTMLAtomicResultsPerPageElement>;
            "atomic-search-box": LocalJSX.AtomicSearchBox & JSXBase.HTMLAttributes<HTMLAtomicSearchBoxElement>;
            "atomic-search-interface": LocalJSX.AtomicSearchInterface & JSXBase.HTMLAttributes<HTMLAtomicSearchInterfaceElement>;
            "atomic-sort-criteria": LocalJSX.AtomicSortCriteria & JSXBase.HTMLAttributes<HTMLAtomicSortCriteriaElement>;
            "atomic-sort-dropdown": LocalJSX.AtomicSortDropdown & JSXBase.HTMLAttributes<HTMLAtomicSortDropdownElement>;
            "atomic-tab": LocalJSX.AtomicTab & JSXBase.HTMLAttributes<HTMLAtomicTabElement>;
            "atomic-text": LocalJSX.AtomicText & JSXBase.HTMLAttributes<HTMLAtomicTextElement>;
            "base-facet": LocalJSX.BaseFacet & JSXBase.HTMLAttributes<HTMLBaseFacetElement>;
            "facet-search": LocalJSX.FacetSearch & JSXBase.HTMLAttributes<HTMLFacetSearchElement>;
            "facet-value": LocalJSX.FacetValue & JSXBase.HTMLAttributes<HTMLFacetValueElement>;
        }
    }
}
