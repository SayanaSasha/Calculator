import React from 'react';
import {Link} from 'react-router-dom'


class Debt extends React.Component {
    constructor() {
        super();
        this.state = {
            debt: [],
            typeOfDebt: '',
            amountOfDebt: '',
            total: 0,
            editing: false,
            haveDebt: false
        };
    }

    render() {
        return (
            <div>
                <h2>Enter your debts here</h2>
                {this.state.haveDebt ?
                    <div>
                        <form>
                            <input type="text"
                                   placeholder='Type of debt'
                                   value={this.state.typeOfDebt}
                                   onChange={(event) =>
                                       this.setState({typeOfDebt: event.target.value})
                                   }
                            />

                            <input
                                type="number"
                                placeholder="Amount"
                                value={this.state.amountOfDebt}
                                onChange={(event) =>
                                    this.setState({amountOfDebt: event.target.value})
                                }
                            />
                            <button
                                onClick={(event => {
                                    event.preventDefault();
                                    this.setState({
                                        debt: [
                                            ...this.state.debt,
                                            ...[[this.state.typeOfDebt, this.state.amountOfDebt]],
                                        ],
                                    });
                                    this.setState({
                                        total:
                                            Number(this.state.total) + Number(this.state.amountOfDebt),
                                    });
                                    this.setState({typeOfDebt: '', amountOfDebt: ''});
                                })}
                            >Ok
                            </button>
                        </form>
                        <h3>All type of debt</h3>
                        {this.state.editing ? (
                            <li style={{listStyleType: 'none'}}>
                                {this.state.debt.map((type, index) => {
                                    return (
                                        <ul key={index}>
                                            <input type="text"
                                                   defaultValue={type[0]}
                                                   onChange={(event => {
                                                       const newDebt = this.state.debt.map((el, i) => {
                                                           if (i === index) el = [event.target.value, type[1]];
                                                           return el;
                                                       });
                                                       this.setState({debt: newDebt});
                                                   })}/>
                                            <input type="number"
                                                   defaultValue={type[1]}
                                                   onChange={(event => {
                                                       const newDebt = this.state.debt.map((el, i) => {
                                                           if (i === index) el = [type[0], event.target.value];
                                                           return el;
                                                       });
                                                       this.setState({debt: newDebt});
                                                   })}/>
                                        </ul>
                                    );
                                })}
                            </li>
                        ) : (
                            <li style={{listStyleType: 'none'}}>
                                {this.state.debt.map((type, index) => {
                                    return (
                                        <ul key={index}>
                                            <h4>
                                                {type[0]} -${type[1]}
                                            </h4>
                                            <button
                                                onClick={() => this.setState({
                                                    debt: this.state.debt.filter(
                                                        (el, i) => i !== index
                                                    ),
                                                })}
                                            >Remove
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
                                        total: this.state.debt.reduce((sum, el) => {
                                            return sum + Number(el[1]);
                                        }, 0),
                                    });
                                }}
                            >Save</button>
                        ) : (
                            <button onClick={() => this.setState({editing: true})}
                            >Edit</button>
                        )}
                        <hr/>
                        <h4>Total: ${this.state.total}</h4>
                        <hr/>
                        {/* need to know next component that we will see in browser, tabs with all info */}
                        {/* <Link to="/"> */}
                        <button>Next</button>
                        {/* </Link> */}
                    </div> :
                    <div>
                        <h3>Do you have any debt?</h3>
                        <button onClick={() => this.setState({haveDebt: true})}>YES</button>
                        {/* need to know next component that we will see in browser, tabs with all info */}
                        {/* <Link to="/"> */}
                        <button>No, go to the next step!</button>
                        {/* </Link> */}
                    </div>
                }

            </div>
        )
    }
}

export default Debt;


