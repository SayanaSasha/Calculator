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

                <h3>All type of expenses</h3>
                <li style={{listStyleType: 'none'}}>
                    {this.state.expenses.map((type, index) => {
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
                <Link to="/savings"><button>Next</button></Link>
            </div>
        );
    }
}

export default Expenses;
