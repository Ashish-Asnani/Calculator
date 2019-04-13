import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCalculation, clearCalculation } from "../actions";
import CalcButton from "./CalcButton";

class CalculatorComponent extends Component {
  componentDidMount() {
    // Force scroll on the display
    // I do this on mount in case reducer is already populated
    this._forceScrollOnDisplay();
  }

  componentDidUpdate() {
    // Force scroll on the display
    // this function gets called on component update
    this._forceScrollOnDisplay();
  }

  // Replace the operator chars add a span for styling
  // and replace division and multiplication symbols
  _replaceChars(value) {
    value = value.join("");
    value = value.replace(/&#8730/g,'<span class="operatorStyle">&#8730</span>');
    value = value.replace(/&#960/g, '<span class="operatorStyle">&#960</span>');
    value = value.replace("^", '<span class="operatorStyle">^</span>');
    value = value.replace("e", '<span class="operatorStyle">e</span>');
    return value;
  }

  _forceScrollOnDisplay() {
    // Force scroll on div, put a value in here
    // instead of calculating the offset
    // This keeps the latest numbers in display
    this.refs.calculationDisplay.scrollLeft = 10000;
    this.refs.resultDisplay.scrollLeft = 10000;
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-results">
          <div
            ref="calculationDisplay"
            className="calculationDisplay"
            dangerouslySetInnerHTML={{
              __html: this.props.calculation.length
                ? this._replaceChars(this.props.calculation)
                : 0
            }}
          />
          <div ref="resultDisplay" className="resultDisplay">
            {this.props.result}
          </div>
        </div>

        <button
          className="cyan accent-4 clear"
          onClick={() => this.props.clearCalculation()}
        >
          Clear
        </button>
        <div className="calculator-inputs-row">
          <CalcButton value={7} />
          <CalcButton value={8} />
          <CalcButton value={9} />
          <CalcButton
            value="&#8730"
            htmlCode="8730"
            additionalClass="operator"
          />
        </div>

        <div className="calculator-inputs-row">
          <CalcButton value={4} />
          <CalcButton value={5} />
          <CalcButton value={6} />
          <CalcButton value="&#960" htmlCode="960" additionalClass="operator" />
        </div>
        <div className="calculator-inputs-row">
          <CalcButton value={1} />
          <CalcButton value={2} />
          <CalcButton value={3} />
          <CalcButton value="^" htmlCode="94" additionalClass="operator" />
        </div>
        <div className="calculator-inputs-row">
          <CalcButton value={0} additionalClass="zero" />
          <CalcButton value="e" htmlCode="101" additionalClass="operator" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCalculation: (inputValue, currentState, currentResult) =>
    dispatch(updateCalculation(inputValue, currentState, currentResult)),
  clearCalculation: () => dispatch(clearCalculation())
});

const mapStateToProps = state => ({
  calculation: state.calculation,
  result: state.result
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorComponent);
