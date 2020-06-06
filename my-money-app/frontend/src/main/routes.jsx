import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import DashBoard from "../dashboard/dashboard"
import BillingCycle from "../billingCycle/billingCycle"

export default (props) => (
  <Router>
    {props.children}
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Route path="/dashBoard" component={DashBoard} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
)
