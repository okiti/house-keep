import React from 'react';
import {}
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Register from "./components/pages/Register";
  import SignIn from "./components/pages/Sign In";
  import Terms from "./components/pages/Terms";
  import User from "./components/pages/User";
  import Worker from "./components/pages/Worker";
  import Home from "./components/pages/Home";
  import Contact from "./components/pages/Contact";
  import Help from "./components/pages/Help";
  

export default function Routes() {
    return (
        <div>
        <Router>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/register/user" component={User} />
            <Route exact path="/register/worker" component={Worker} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/help" component={Help} />
          </Switch>
        </Router> 
        </div>
    )
}
