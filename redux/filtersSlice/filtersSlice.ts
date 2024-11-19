import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface FiltersState {
  query?: string;
  logoColor?: string;
  backgroundColor?: string;
  full?: boolean;
  tabColor?: string;
  status?: string;
  resultsNumber?: number;
}

const initialState: FiltersState = {
  query: '',
  logoColor: '',
  backgroundColor: '',
  tabColor: '',
  full: false,
  status: '',
  resultsNumber: 0
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<FiltersState>) {
      state.query = action?.payload.query;
    },
    setLogoColor(state, action: PayloadAction<FiltersState>) {
      state.logoColor = action?.payload.logoColor;
    },
    setBackgroundColor(state, action: PayloadAction<FiltersState>) {
      state.backgroundColor = action?.payload.backgroundColor;
    },
    setResultsNumber(state, action: PayloadAction<FiltersState>) {
      state.resultsNumber = action?.payload.resultsNumber;
    },
    setFull(state, action: PayloadAction<FiltersState>) {
      state.full = action?.payload.full
    },
    setTabColor(state, action: PayloadAction<FiltersState>) {
      state.tabColor = action?.payload.tabColor
    },
    setStatus(state, action: PayloadAction<FiltersState>) {
      state.status = action?.payload.status
    }
  }
})

export const { setQuery, setBackgroundColor, setLogoColor, setResultsNumber, setFull, setTabColor, setStatus } = filtersSlice.actions
export default filtersSlice.reducer
