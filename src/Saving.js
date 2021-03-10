import React from 'react';

class Saving extends React.Component {
    constructor() {
        super();
        this.state = {
            saving: [],
            typeOfSaving: '',
            amountOfSaving: '',
            total: 0,
            editing: false
        };
    }
    render() {
        return (
            <div>
                <form>
                    <p> Please enter here all type of Savings</p>
                    <input type="text"
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
            </div>
        )
    }
}
export default Saving;
