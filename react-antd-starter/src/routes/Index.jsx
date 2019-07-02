import React from 'react';
import { Switch, Route } from "react-router-dom";
import Async from 'components/Async';


const routes = () => (
  <Switch>
    <Route path="/" exact component={Async(() => import('pages/Home'))}/>
    <Route path="/home" component={Async(() => import('pages/Home'))}/>
    <Route path="/list" component={Async(() => import('pages/List'))}/>
  </Switch>
)

export default routes;