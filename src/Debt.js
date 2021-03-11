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
            {this.state.haveDebt ?
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


