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
                            <button onClick={(event) => {
                                event.preventDefault();
                                this.setState({
                                    saving: [
                                        ...this.state.saving,
                                        ...[[this.state.typeOfSaving, this.state.amountOfSaving]],
                                    ],
                                });
                                this.setState({
                                    total: Number(this.state.total) + Number(this.state.amountOfSaving),
                                });
                                this.setState({typeOfSaving: '', amountOfSaving: ''});
                            }}>Ok
                            </button>
                        </form>
                        <h3>All type of Savings</h3>
                        {this.state.editing ? (
                            <li style={{listStyleType: 'none'}}>
                                {this.state.saving.map((type, index) => {
                                    return (
                                        <ul key={index}>
                                            <input type="text"
                                                   defaultValue={type [0]}
                                                   onChange={(event) => {
                                                       const newSaving = this.state.saving.map((el, i) => {
                                                           if (i === index) el = [event.target.value, type[1]];
                                                           return el;
                                                       });
                                                       this.setState({saving: newSaving});
                                                   }}/>
                                            <input type='number'
                                                   defaultValue={type[1]}
                                                   onChange={(event) => {
                                                       const newSaving = this.state.saving.map((el, i) => {
                                                           if (i === index) el = [type[0], event.target.value];
                                                           return el;
                                                       });
                                                       this.setState({saving: newSaving});
                                                   }}
                                            />
                                        </ul>
                                    );
                                })}
                            </li>
                        ) : (
                            <li style={{listStyleType: 'none'}}>
                                {this.state.saving.map((type, index) => {
                                    return (
                                        <ul key={index}>
                                            <h4>
                                                {type[0]} -${type[1]}
                                            </h4>
                                            <button
                                                onClick={() =>
                                                    this.setState({
                                                        saving: this.state.saving.filter(
                                                            (el, i) => i !== index
                                                        ),
                                                    })
                                                }
                                            > Remove
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
                                    total: this.state.saving.reduce((sum, el) => {
                                        return sum + Number(el[1]);
                                    }, 0),
                                });
                            }}> Save</button>
                        ) : (
                            <button onClick={() => this.setState({editing:true})}>Edit</button>
                        )}
                        <hr/>
                        <h4>Total: ${this.state.total}</h4>
                        <hr/>
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
