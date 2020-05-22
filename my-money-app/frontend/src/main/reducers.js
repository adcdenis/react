import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleRedux from '../billingCycle/billingCycleRedux'
//import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleRedux,
  //form: formReducer 
})

export default rootReducer
