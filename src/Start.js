import React from 'react';
import {Link} from 'react-router-dom'

class Start extends React.Component {
  constructor() {
    super();
    this.state = {
      learnMore: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.learnMore ? (
          <div>
            <h3>
              It's our pleasure to tell you mode about our Financial Calculator!
            </h3>
            <p>some info about this web application .... </p>
            <button onClick={() => this.setState({learnMore: false})}>Go back</button>
          </div>
        ) : (
          <div>
            <h3>Hey, Ready To Start ?</h3>
            <Link to='/incomes'><button>YES!</button></Link>
            <button onClick={() => this.setState({learnMore: true})}>Learn more about "Claculator"</button>
          </div>
        )}
      </div>
    );
  }
}

export default Start;
