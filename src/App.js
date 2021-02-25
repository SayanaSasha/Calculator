import './App.css';
import React from 'react';
import Saving from './Saving';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      income: [],
      typeOfIncome: '',
      amountOfIncome: 0,
      total: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Financial Calculator</h1>
        <hr />
        <h2>Enter your income here</h2>
        <form>
          <input
            type="text"
            placeholder="Name of Income"
            value={this.state.typeOfIncome}
            onChange={(event) =>
              this.setState({typeOfIncome: event.target.value})
            }
          />

          <input
            type="number"
            placeholder="Amount"
            value={this.state.amountOfIncome}
            onChange={(event) =>
              this.setState({amountOfIncome: event.target.value})
            }
          />

          <button
            onClick={(event) => {
              event.preventDefault();
              this.setState({
                income: [
                  ...this.state.income,
                  ...[[this.state.typeOfIncome, this.state.amountOfIncome]],
                ],
              });
              this.setState({
                total:
                  Number(this.state.total) + Number(this.state.amountOfIncome),
              });
              this.setState({typeOfIncome: '', amountOfIncome: 0});
            }}
          >
            Ok
          </button>
        </form>

        <h3>All type of income</h3>
        <li style={{listStyleType: 'none'}}>
          {this.state.income.map((type, index) => {
            return (
              <ul key={index}>
                <h4>
                  {type[0]} - {type[1]}
                </h4>
              </ul>
            );
          })}
        </li>
        <hr />
        <h4>Total: {this.state.total}</h4>
        <Saving />
      </div>
    );
  }
}

export default App;
