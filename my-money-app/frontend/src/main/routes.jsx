import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import DashBoard from "../dashboard/dashboard"
import BillingCycle from "../billingCycle/billingCycle"

export default (props) => (
  <Router>
    {props.children}
    <Switch>
      <Route path="/dashboard" component={DashBoard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Route component={BillingCycle} />
    </Switch>
  </Router>
)
