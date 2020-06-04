import { combineReducers } from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleRedux from '../billingCycle/billingCycleRedux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleRedux,
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer
})

export default rootReducer
