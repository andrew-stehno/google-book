import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Search}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
