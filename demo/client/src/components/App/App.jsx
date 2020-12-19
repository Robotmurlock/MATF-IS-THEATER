import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux'
import './App.scss'
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Create from "../Create/Create";

class App extends Component {
  render() {
    const { account } = this.props;
    return (
      <div>
        <div className="header-wrapper">
          <span>MATF Pozorište</span>
          <span>{account}</span>
        </div>
        <div className="content-wrapper">
          {
            account
            ? (
              <>
                <Nav />
                <div className="content-inner-wrapper">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Create} />
                  </Switch>
                </div>
              </>
            )
            : <Login />
          }
        </div>
      </div>
    );
  }
}

export default connect(
  ({general}) => ({
    account: general.account
  }),
  {}
)(App)
