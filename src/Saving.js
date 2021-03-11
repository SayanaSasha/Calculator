import React from 'react';
import {Link} from 'react-router-dom';

class Saving extends React.Component {
  constructor() {
    super();
    this.state = {
      saving: [],
      typeOfSaving: '',
      amountOfSaving: '',
      total: 0,
      editing: false,
      haveSavings: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.haveSavings ? (
          <div>
            <form>
              <p> Please enter here all type of Savings</p>
              <input
                type="text"
                placeholder={'Type of saving'}
                value={this.state.typeOfSaving}
                onChange={(event) =>
                  this.setState({typeOfSaving: event.target.value})
                }
              />

              <input
                type="number"
                placeholder="Amount"
                value={this.state.amountOfSaving}
                onChange={(event) =>
                  this.setState({amountOfSaving: event.target.value})
                }
              />
              <button>Ok</button>
            </form>
            <Link to="/debt">
              <button>Next</button>
            </Link>
          </div>
        ) : (
          <div>
            <h3>Do you have any savings?</h3>
            <button onClick={() => this.setState({haveSavings: true})}>YES</button>
            <Link to="/debt">
              <button>No, go to the next step!</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default Saving;
