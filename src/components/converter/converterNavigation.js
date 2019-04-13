import React from "react";
import NavbarConverter from "./navigatorConverter";
import MoneyConverter from "./moneyConverter";
import LengthConverter from "./lengthConverter";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ConverterNavigation = () => {
  return (
    <BrowserRouter>
      <div>
        <NavbarConverter />
        <Switch>
          <Route to path="/Convertor/Money" component={MoneyConverter} />
          <Route to path="/Convertor/Length" component={LengthConverter} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ConverterNavigation;
