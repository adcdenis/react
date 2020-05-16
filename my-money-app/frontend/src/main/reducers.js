import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  dashboard: () => ({ summary: { credit: 100, debt: 100 } }),
})

export default rootReducer
