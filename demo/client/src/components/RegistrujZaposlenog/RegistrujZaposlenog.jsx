import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './RegistrujZaposlenog.scss';
import {sacuvajPredstavu} from "../../actions/predstaveActions";
import {kreirajZaposlenog} from "../../actions/zaposleniActions";

class RegistrujZaposlenog extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  sacuvaj = (e, skica = false) => {
    if (e) e.preventDefault();
    const data = {
      ime_prezime: document.getElementById('ime').value + ' ' + document.getElementById('prezime').value,
      ime: document.getElementById('ime').value,
      prezime: document.getElementById('prezime').value,
      jmbg: document.getElementById('jmbg').value,
      email: document.getElementById('email').value,
      zaposlenje: document.getElementById('zaposlenje').value,
    }
    this.props.kreirajZaposlenog(data)
      .then(() => {
        alert('Nalog uspešno kreiran. Zaposleni je obavešten emailom.');
        this.props.history.push('/zaposleni');
      })
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <div className="registruj-zaposlenog-wrapper">
        <form onSubmit={this.sacuvaj}>
          <h2>Kreiranje naloga za zaposlenog</h2>
          <div className="flex">
            <label htmlFor="ime">Ime:</label>
            <input type="text" id="ime" name="ime"/>
          </div>
          <div className="flex">
            <label htmlFor="prezime">Prezime:</label>
            <input type="text" id="prezime" name="prezime"/>
          </div>
          <div className="flex">
            <label htmlFor="jmbg">JMBG:</label>
            <input type="text" id="jmbg" name="jmbg"/>
          </div>
          <div className="flex">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"/>
          </div>
          <div className="flex">
            <label htmlFor="zaposlenje">Zaposlenje:</label>
            <select name="zaposlenje" id="zaposlenje">
              <option value="organizator" label="Organizator" />
              <option value="glumac" label="Glumac" />
              <option value="reditelj" label="Reditelj" />
              <option value="ostalo" label="Ostalo" />
            </select>
          </div>
          <br/>
          <div className="flex">
            <div/>
            <div className="flex-end">
              <button type="submit">Kreiraj nalog</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

RegistrujZaposlenog.propTypes = {};

RegistrujZaposlenog.defaultProps = {};

const mapStateToProps = ({ general, podaci }) => ({
  predstave: podaci.predstave,
  account: general.account,
});

const mapDispatchToProps = {
  sacuvajPredstavu,
  kreirajZaposlenog,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrujZaposlenog));
