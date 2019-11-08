import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProfileDetails from "./components/pages/profile/ProfileDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/profile/:id" component={ProfileDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
