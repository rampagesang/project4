import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Students from "./pages/Students";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Splash from "./pages/Splash";
import Nominated from "./pages/Nominated";
import History from "./pages/History";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Splash}/>
        <Route exact path="/nominated" component={Nominated} />
        <Route exact path="/nominate" component={Students} />
        <Route exact path="/history" component={History} />
        <Route exact path="/students/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
