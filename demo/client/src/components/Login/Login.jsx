import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Login.scss';
import {login} from "../../actions/authActions";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: '',
    };
  }

  login = (e) => {
    this.setState({loading: true});
    const {username, password} = e.target;
    e.preventDefault();
    this.props.login(username.value, password.value)
      .then(() => this.setState({loading: false }))
      .catch((err) => this.setState({loading: false, error: err.message }))
  }

  render() {
    const {loading, error} = this.state;
    return (
      <div className="login-wrapper">
        <form onSubmit={this.login}>
          <div className="flex">
            <label htmlFor="username">Email:</label>
            <input type="text" id="username" name="username"/>
          </div>
          <div className="flex">
            <label htmlFor="password">Lozinka:</label>
            <input type="password" id="password" name="password"/>
          </div>
          <div className="flex">
            <div/>
            <button type="submit" disabled={loading}>Prijavi se</button>
          </div>
          {
            error && (<div className="error">{error.toString()}</div>)
          }
        </form>
      </div>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
