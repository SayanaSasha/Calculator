import React from 'react';


class Debt extends React.Component {
    constructor() {
        super();
        this.state = {
            debt: [],
            typeOfDebt: '',
            amountOfDebt: '',
            total: 0,
            editing: false
        };
    }


    render() {
        return (
            <div>
                <form>
                    <p> Please enter here all loans, credit cards and debts</p>
                    <input type="text"
                           placeholder={'Type of debt'}
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
                    <button>Ok</button>
                </form>
            </div>
        )
    }
}
export default Debt;


