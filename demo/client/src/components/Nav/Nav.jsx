import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Nav.scss';
import {Link} from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="nav-wrapper">
        <Link to="/" className="active">Predstave</Link>
        <a>Repertoar</a>
        <a>Karte</a>
      </div>
    );
  }
}

Nav.propTypes = {};

Nav.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
