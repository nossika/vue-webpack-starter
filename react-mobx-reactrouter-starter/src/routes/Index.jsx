import React from 'react';
import { Switch, Route } from "react-router-dom";
import Async from 'components/Async';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Async(() => import('pages/home'))}/>
    <Route path="/home" component={Async(() => import('pages/home'))}/>
    <Route path="/mobx-example" component={Async(() => import('pages/mobx-example'))}/>
  </Switch>
)

export default routes;