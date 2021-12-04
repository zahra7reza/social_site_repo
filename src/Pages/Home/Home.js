import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../Components/Header/Header";
import NewHome from "../NewHome/NewHome";
import Look from "../Look/Look";
import Profile from "../../Profile/Profile";

const Home = (handleLogged) => {
  return (
    <div>
      <Header isLogged={handleLogged} />
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/look" component={Look} />
        <Route path="/:username" component={Profile} />
      </Switch>
    </div>
  );
};

export default Home;
