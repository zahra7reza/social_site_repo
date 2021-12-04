import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/404Page/404Page";
class App extends React.Component {
  state = {
    isLog: false,
  };

  handleLogin = (isLog) => this.setState({ isLog });
  render() {
    const { isLog } = this.setState;
    return (
      <div>
        <Switch>
          {!isLog ? (
            <Route
              exact
              path="/"
              render={() => <Login isLog={this.handleLogin} />}
            />
          ) : (
            <Route
              path="/"
              render={() => <Home handleLogged={this.handleLogin} />}
            />
          )}
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
