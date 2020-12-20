import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Nav.scss';
import {Link, withRouter} from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <div className="nav-wrapper">
        <Link to="/" className={path === '/' ? 'active' : ''}>Predstave</Link>
        {
          this.props.accountType === 'supervizor' && (
            <Link to="/zaposleni" className={path === '/zaposleni' ? 'active' : ''}>Zaposleni</Link>
          )
        }
        <a>Repertoar</a>
        <a>Karte</a>
      </div>
    );
  }
}

Nav.propTypes = {};

Nav.defaultProps = {};

const mapStateToProps = ({ general, podaci }) => ({
  accountType: general.accountType,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
