import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./pages/App";


const Root = () => (
 
      
        <Router>
          <Switch>
              <Route exact path="/" component={App} />
              </Switch>
          </Router>
  
);


export default Root