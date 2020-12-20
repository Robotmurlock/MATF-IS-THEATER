import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Predstava.scss';
import {sacuvajPredstavu, getPredstave} from "../../actions/predstaveActions";

class Predstava extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getPredstave();
  }

  odbij = () => {
    const { accountType, predstave } = this.props;
    const predstava = predstave.find(({ id }) => id == this.props.match.params.id);
    predstava.razlog = prompt('Razlog odbijanja:');
    if (!predstava.razlog) return;
    predstava.status = 'odbijena';
    this.props.sacuvajPredstavu(predstava)
      .then(() => this.props.history.push('/'))
      .catch((err) => alert(err.message));
  }

  odobri = () => {
    const { accountType, predstave } = this.props;
    const predstava = predstave.find(({ id }) => id == this.props.match.params.id);
    predstava.status = 'u pripremi';
    this.props.sacuvajPredstavu(predstava)
      .then(() => this.props.history.push('/'))
      .catch((err) => alert(err.message));
  }

  render() {
    const { account, accountType, predstave } = this.props;
    const predstava = predstave.find(({ id }) => id == this.props.match.params.id);

    if (!predstava) {
      return (<div className="predstava-wrapper">Predstava nije pronađena</div>)
    }

    return (
      <div className="predstava-wrapper">
        <div className="info-wrapper">
          <h3>{predstava.naziv}</h3>
          <h4>Opis: {predstava.opis}</h4>
          <h4>Organizator: {predstava.organizator}</h4>
          <h4>Reditelj: {predstava.reditelj}</h4>
          <h4>Glumci: {predstava.glumci?.join(', ')}</h4>
          <h4>Status: {predstava.status}</h4>
          {
            account === predstava.organizator &&
            predstava.status === 'odbijena' && (
              <h4>Razlog odbijanja: {predstava.razlog}</h4>
            )
          }
        </div>
        {
          accountType === 'supervizor' &&
          predstava.status === 'prijavljena' && (
            <div className="buttons-wrapper">
              <button className="odbij" onClick={this.odbij}>Odbij</button>
              <button className="odobri" onClick={this.odobri}>Odobri</button>
            </div>
          )
        }
      </div>
    );
  }
}

Predstava.propTypes = {};

Predstava.defaultProps = {};

const mapStateToProps = ({ general, podaci }) => ({
  predstave: podaci.predstave,
  account: general.account,
  accountType: general.accountType,
});

const mapDispatchToProps = {
  sacuvajPredstavu,
  getPredstave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Predstava);
