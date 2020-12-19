import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Create.scss';
import {sacuvajPredstavu} from "../../actions/predstaveActions";

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      glumci: [
        {},
      ],
    };
  }

  dodajGlumca = () => {
    const glumci = [...this.state.glumci];
    glumci.push({});
    this.setState({ glumci });
  }

  sacuvaj = (e, skica = false) => {
    if (e) e.preventDefault();
    const data = {
      naziv: document.getElementById('naziv').value,
      reditelj: document.getElementById('reditelj').value,
      opis: document.getElementById('opis').value,
      glumci: [],
    }
    this.state.glumci.forEach((_, i) => {
      data.glumci.push(document.getElementById(`glumac_${i}_ime`).value + ' ' + document.getElementById(`glumac_${i}_prezime`).value)
    })
    if (this.props.match.params.id) {
      data.id = parseInt(this.props.match.params.id);
    }
    data.organizator = this.props.account;
    data.status = skica ? 'skica' : 'prijavljena';
    console.log(data);
    this.props.sacuvajPredstavu(data)
      .then(() => this.props.history.push('/'))
      .catch((err) => alert(err.message));
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      const predstava = this.props.predstave.find(({ id }) => id == this.props.match.params.id);
      if (!predstava) return;
      document.getElementById('naziv').value = predstava.naziv;
      document.getElementById('reditelj').value = predstava.reditelj;
      document.getElementById('opis').value = predstava.opis;
      const glumci = [];
      predstava.glumci.forEach(g => {
        glumci.push({
          ime: g.substr(0, g.indexOf(' ')),
          prezime: g.substr(g.indexOf(' ') + 1),
        })
      });
      this.setState({ glumci });
    }
  }

  render() {
    return (
      <div className="create-wrapper">
        <form onSubmit={this.sacuvaj}>
          <h2>Kreiranje predstave</h2>
          <div className="flex">
            <label htmlFor="naziv">Naziv:</label>
            <input type="text" id="naziv" name="naziv"/>
          </div>
          <div className="flex">
            <label htmlFor="reditelj">Reditelj:</label>
            <input type="text" id="reditelj" name="reditelj"/>
          </div>
          <div className="flex">
            <label htmlFor="password">Opis:</label>
            <textarea id="opis" name="opis"/>
          </div>
          <div className="flex">
            <div></div>
            <div>Glumci:</div>
          </div>
          {
            this.state.glumci.map((glumac, i) => (
              <div className="flex" key={glumac}>
                <div></div>
                <div className="inner-flex">
                  <input type="text" name={`glumac_${i}_ime`} id={`glumac_${i}_ime`} placeholder="Ime" defaultValue={this.state.glumci[i].ime}/>
                  <input type="text" name={`glumac_${i}_prezime`} id={`glumac_${i}_prezime`} placeholder="Prezime" defaultValue={this.state.glumci[i].prezime}/>
                </div>
              </div>
            ))
          }
          <div className="flex">
            <div></div>
            <div className="flex-end">
              <a className="dodaj-glumca" onClick={this.dodajGlumca}>+</a>
            </div>
          </div>
          <br/>
          <div className="flex">
            <div/>
            <div className="flex-end">
              <button type="button" onClick={() => this.sacuvaj(null, true)}>Sačuvaj prijavu</button>
              <button type="submit">Pošalji prijavu</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Create.propTypes = {};

Create.defaultProps = {};

const mapStateToProps = ({ general, podaci }) => ({
  predstave: podaci.predstave,
  account: general.account,
});

const mapDispatchToProps = {
  sacuvajPredstavu,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Create));
