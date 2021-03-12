import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addIncome, editIncome, removeIncome} from './store'

class Income extends React.Component { 
  constructor (props) {
    super(props)
    this.state = {
      typeOfIncome: '',
      amountOfIncome: '',
      editing: false
    };
  }
  
  render() {

    const incomes = this.props.incomes
    const total = incomes.reduce((sum, el) => {
      return sum + Number(el[1]);
    }, 0)
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
              this.props.addIncome(this.state.typeOfIncome, this.state.amountOfIncome)
              this.setState({typeOfIncome: '', amountOfIncome: ''});
            }}
          >
            Ok
          </button>
        </form>
        <h3>All type of income</h3>
        {this.state.editing ? (
          <li style={{listStyleType: 'none'}}>
            {incomes.map((type, index) => {
              return (
                <ul key={index}>
                  <input
                    type="text"
                    defaultValue={type[0]}
                    onChange={(event) => {
                      this.props.editIncome(index, event.target.value, type[1])
                    }}
                  />
                  <input
                    type="number"
                    defaultValue={type[1]}
                    onChange={(event) => {
                      this.props.editIncome(index, type[0], event.target.value)
                    }}
                  />
                </ul>
              );
            })}
          </li>
        ) : (
          <li style={{listStyleType: 'none'}}>
            {incomes.map((type, index) => {
              return (
                <ul key={index}>
                  <h4>
                    {type[0]} - ${type[1]}
                  </h4>
                  <button
                    onClick={() =>
                      this.props.removeIncome(index)
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
            }}
          >
            Save
          </button>
        ) : (
          <button onClick={() => this.setState({editing: true})}>Edit</button>
        )}
        <hr />
        <h4>Total: ${total}</h4>
        <hr />
        <Link to="/expenses"><button>Next</button></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incomes: state.incomes
})

const mapDispatchToProps = dispatch => ({
  addIncome: (type, amount) => dispatch(addIncome(type, amount)),
  removeIncome: (index) => dispatch(removeIncome(index)),
  editIncome: (idx, type, amount) => dispatch(editIncome(idx, type, amount))
})

const ConnectedIncome = connect(mapStateToProps, mapDispatchToProps)(Income)

export default ConnectedIncome