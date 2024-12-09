import {ReduxState} from "@/redux/store";

export const selectFilters = (state:ReduxState) => state.filters

export const selectQuery = (state:ReduxState) => state.filters.query

export const selectLogoColor = (state:ReduxState) => state.filters.logoColor

export const selectBackgroundColor = (state:ReduxState) => state.filters.backgroundColor

export const selectResultsNumber = (state:ReduxState) => state.filters.resultsNumber

export const selectFull = (state:ReduxState) => state.filters.full

export const selectTabColor = (state:ReduxState) => state.filters.tabColor

export const selectCollection = (state:ReduxState) => state.filters.collection

export const selectStatus = (state:ReduxState) => state.filters.status
