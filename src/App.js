import React from 'react';
import Main from "./containers/Main/main";
import Model from "./containers/Model/Model";
import {Route, Switch,withRouter} from 'react-router-dom';

function App() {
  return (
    <div>
    <Switch>
      <Route path="/model" component={Model} />
      <Route path="/" component={Main} />
    </Switch>
    </div>
  );
}

export default withRouter(App);
