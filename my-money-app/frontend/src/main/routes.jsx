import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import DashBoard from "../dashboard/dashboard"
import BillingCycle from "../billingCycle/billingCycle"

export default (props) => (
  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route path="/billingCycles" component={BillingCycle} />
    <Route path="/dashBoard" component={DashBoard} />
    <Redirect from='*' to='/' />
  </Switch>
)
