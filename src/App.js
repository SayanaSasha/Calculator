// import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Debt from './Debt';
import Expenses from './Expenses';
import Saving from './Saving';
import ConnectedIncome from './Incomes';
import Start from './Start';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            {/* {/* header, stick it to the top} */}
            <h1>Financial Calculator</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/incomes" component={ConnectedIncome} />
            <Route path="/expenses" component={Expenses} />
            <Route path="/savings" component={Saving} />
            <Route path="/debt" component={Debt} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
