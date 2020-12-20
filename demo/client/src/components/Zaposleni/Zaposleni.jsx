import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Zaposleni.scss';
import {getZaposleni} from "../../actions/zaposleniActions";
import {Link} from "react-router-dom";

class Zaposleni extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getZaposleni();
  }

  render() {
    const {zaposleni} = this.props;
    return (
      <div className="zaposleni-wrapper">
        {
          zaposleni.map((z) => (
            <div className="zaposleni" key={z.ime_prezime}>
              <h3>{z.ime_prezime}</h3>
              <h4>{z.zaposlenje}</h4>
            </div>
          ))
        }
        <Link to="/kreiraj-nalog" className="button kreiraj">Kreiraj nalog</Link>
      </div>
    );
  }
}

Zaposleni.propTypes = {};

Zaposleni.defaultProps = {};

const mapStateToProps = ({ podaci }) => ({
  zaposleni: podaci.zaposleni,
});

const mapDispatchToProps = {
  getZaposleni,
};

export default connect(mapStateToProps, mapDispatchToProps)(Zaposleni);
