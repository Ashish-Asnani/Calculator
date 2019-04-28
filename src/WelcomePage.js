import React, { Component } from "react";
import CalculatorApp from "./App";
import LoanCalculator from "./components/LoanCalculator";
//import AdvancedCalculator from "./components/AdvancedCalculator";
import Navbar from "./components/Navigation";
import ConverterNavigation from "./components/converter/converterNavigation";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class WelcomeApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={CalculatorApp} />
            <Route to path="/LoanCalculator" component={LoanCalculator} />
            <Route to path="/Convertor/Money" component={ConverterNavigation} />
          </Switch>
       
        </div>
       
      </BrowserRouter>
    );
  }
}

export default WelcomeApp;
