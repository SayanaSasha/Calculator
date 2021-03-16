import React from 'react';
import {Link} from 'react-router-dom'

class Expenses extends React.Component {
    constructor() {
        super();
        this.state = {
            expenses: [],
            typeOfExp: '',
            amountOfExp: '',
            total: 0,
        };
    }

    render() {
        return (
            <div className="Expenses">

                <h2>Enter all types of your expenses here</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Name of Expenses"
                        value={this.state.typeOfExp}
                        onChange={(event) => this.setState({typeOfExp: event.target.value})}
                    />

                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amountOfExp}
                        onChange={(event) =>
                            this.setState({amountOfExp: event.target.value})
                        }
                    />

                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            this.setState({
                                expenses: [
                                    ...this.state.expenses,
                                    ...[[this.state.typeOfExp, this.state.amountOfExp]],
                                ],
                            });
                            this.setState({
                                total:
                                    Number(this.state.total) + Number(this.state.amountOfExp),
                            });
                            this.setState({typeOfExp: '', amountOfExp: 0});
                        }}
                    >
                        Ok
                    </button>
                </form>

                <h3>All your expenses</h3>
                {this.state.editing ? (
                    <li style={{listStyleType: 'none'}}>
                        {this.state.expenses.map((type, index) => {
                            return (
                                <ul key={index}>
                                    <input type="text"
                                           defaultValue={type [0]}
                                           onChange={(event) => {
                                               const newExpenses = this.state.expenses.map((el, i) => {
                                                   if (i === index) el = [event.target.value, type[1]];
                                                   return el;
                                               });
                                               this.setState({expenses: newExpenses});
                                           }}
                                    />
                                    <input type="number"
                                           defaultValue={type[1]}
                                           onChange={(event) => {
                                               const newExpenses = this.state.expenses.map((el, i) => {
                                                   if (i === index) el = [type[0], event.target.value];
                                                   return el;
                                               });
                                               this.setState({expenses: newExpenses});
                                           }}
                                    />
                                </ul>
                            );
                        })}
                    </li>
                ) : (
                    <li style={{listStyleType: 'none'}}>
                        {this.state.expenses.map((type, index) => {
                            return (
                                <ul key={index}>
                                    <h4>{type[0]} -${type[1]}</h4>
                                    <button onClick={() => this.setState({
                                        expenses: this.state.expenses.filter(
                                            (el, i) => i !== index
                                        ),
                                    })
                                    }
                                    >Remove
                                    </button>
                                </ul>
                            );
                        })}
                    </li>
                )}
                {this.state.editing ? (
                    <button onClick={() => {
                        this.setState({editing: false});
                        this.setState({
                            total: this.state.expenses.reduce((sum, el) => {
                                return sum + Number(el[1]);
                            }, 0)
                        });
                    }}
                    > Save</button>
                ) : (
                    <button onClick={() => this.setState({editing: true})}
                    >Edit</button>
                )}
                <hr/>
                <h4>Total: {this.state.total}</h4>
                <Link to="/savings">
                    <button>Next</button>
                </Link>
            </div>
        );
    }
}

export default Expenses;
