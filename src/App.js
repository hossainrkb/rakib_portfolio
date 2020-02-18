import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavTop from './components/navtop'
import Education from './components/eductaions'
import Framework from './components/framework'
import Introduction from './components/Introduction'
import Programming_languague from './components/programming_languague'
import Project from './components/projects'
import Project_details from "./components/pro_details";
import Experience from "./components/experience";
import { Redirect } from "react-router-dom";
function App() {
  if (window.location.href !== "http://localhost:3000/rakib_portfolio/") {
return (
  <BrowserRouter>
    <Redirect to="/rakib_portfolio/" />
    <div className="container">
      <NavTop />
      <Switch>
        <Route path="/rakib_portfolio/" exact component={Introduction} />
        <Route path="/rakib_portfolio/edu/" exact component={Education} />
        <Route path="/rakib_portfolio/frmwrk/" exact component={Framework} />
        <Route
          path="/rakib_portfolio/pro_lan/"
          exact
          component={Programming_languague}
        />
        <Route path="/rakib_portfolio/proj/" exact component={Project} />
        <Route path="/rakib_portfolio/exp/" exact component={Experience} />
        <Route
          path="/rakib_portfolio/pro/details/:pd_id/"
          exact
          component={Project_details}
        />
      </Switch>
    </div>
  </BrowserRouter>
);
    
  }
  return (
    <BrowserRouter>
      <div className="container">
        <NavTop />
     
        <Switch>
          <Route path="/rakib_portfolio/" exact component={Introduction} />
          <Route path="/rakib_portfolio/edu/" exact component={Education} />
          <Route path="/rakib_portfolio/frmwrk/" exact component={Framework} />
          <Route
            path="/rakib_portfolio/pro_lan/"
            exact
            component={Programming_languague}
          />
          <Route path="/rakib_portfolio/proj/" exact component={Project} />
          <Route path="/rakib_portfolio/exp/" exact component={Experience} />
          <Route
            path="/rakib_portfolio/pro/details/:pd_id/"
            exact
            component={Project_details}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
