import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Home.scss';
import {getPredstave} from "../../actions/predstaveActions";
import {Link} from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getPredstave();
  }


  render() {
    const { predstave, account } = this.props;
    return (
      <div className="home-wrapper">
        {
          predstave.map((predstava) => (
            <div className={`predstava ${predstava.status}`} key={predstava.ime}>
              <h3>{predstava.naziv}</h3>
              <h4>Organizator: {predstava.organizator}</h4>
              <h4>Reditelj: {predstava.reditelj}</h4>
              <h4>Glumci: {predstava.glumci?.join(', ')}</h4>
              <div className="status">{predstava.status}</div>
              {
                predstava.organizator === account &&
                predstava.status === 'skica' &&
                <Link to={`/edit/${predstava.id}`}>Izmeni prijavu</Link>
              }
            </div>
          ))
        }
        <Link to="/create" className="kreiraj">Kreiraj predstavu</Link>
      </div>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = ({ podaci, general }) => ({
  account: general.account,
  predstave: podaci.predstave
});

const mapDispatchToProps = {
  getPredstave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
