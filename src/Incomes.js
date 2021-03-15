import React from 'react';
import {Link} from 'react-router-dom';
import App from "./App.css";

class Income extends React.Component {
  constructor() {
    super();
    this.state = {
      income: [],
      typeOfIncome: '',
      amountOfIncome: '',
      total: 0,
      editing: false
    };
  }

  render() {
    return (
      <div>
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
              this.setState({typeOfIncome: '', amountOfIncome: ''});
            }}
          >
            Ok
          </button>
        </form>
        <h3>All type of income</h3>
        {this.state.editing ? (
          <li style={{listStyleType: 'none'}}>
            {this.state.income.map((type, index) => {
              return (
                <ul key={index}>
                  <input
                    type="text"
                    defaultValue={type[0]}
                    onChange={(event) => {
                      const newIncome = this.state.income.map((el, i) => {
                        if (i === index) el = [event.target.value, type[1]];
                        return el;
                      });
                      this.setState({income: newIncome});
                    }}
                  />
                  <input
                    type="number"
                    defaultValue={type[1]}
                    onChange={(event) => {
                      const newIncome = this.state.income.map((el, i) => {
                        if (i === index) el = [type[0], event.target.value];
                        return el;
                      });
                      this.setState({income: newIncome});
                    }}
                  />
                </ul>
              );
            })}
          </li>
        ) : (
          <li style={{listStyleType: 'none'}}>
            {this.state.income.map((type, index) => {
              return (
                <ul key={index}>
                  <h4>
                    {type[0]} -${type[1]}
                  </h4>
                  <button
                    onClick={() =>
                      this.setState({
                        income: this.state.income.filter(
                          (el, i) => i !== index
                        ),
                      })
                    }
                  >
                    Remove
                  </button>
                </ul>
              );
            })}
          </li>
        )}
        {this.state.editing ? (
          <button
            onClick={() => {
              this.setState({editing: false});
              this.setState({
                total: this.state.income.reduce((sum, el) => {
                  return sum + Number(el[1]);
                }, 0),
              });
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => this.setState({editing: true})}>Edit</button>
        )}
        <hr />
        <h4>Total: ${this.state.total}</h4>
        <hr />
        <Link to="/expenses"><button>Next</button></Link>
      </div>
    );
  }
}


export default Income