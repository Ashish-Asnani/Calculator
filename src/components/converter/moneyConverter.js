import React, { Component } from "react";

import './Converter.css';
import Axios from "axios";
class MoneyConverter extends Component {
  
  state = {
    result: null,
    fromCurrency: "USD",
    toCurrency: "INR",
    amount: null,
    oldAmount:null,
    currencies: ['INR','USD','EUR','JPY','GBP','CHF','CAD'],
    conversionRateList:[],
    showLabels:false
};

// Initializes the currencies with values from the api
 
componentWillMount(){
  Axios.get('https://ratesapi.io/api/latest?base='+this.state.fromCurrency)
.then(res =>{
console.log(res)
this.setState({
  conversionRateList:res.data.rates
})
console.log(this.state)
}).catch(err=>{
  console.log(err)
})
}
// Event handler for the conversion
convertHandler = () => {
    this.setState({oldAmount:this.state.amount})
    if (this.state.fromCurrency !== this.state.toCurrency) {
    let toConvertRateList=this.state.conversionRateList;
     let conversionRate=toConvertRateList[this.state.toCurrency];
     console.log(conversionRate)
    let valueconverted=conversionRate*this.state.amount;
    this.setState({
      amount:valueconverted,
      showLabels:true
    })
    console.log(this.state)
  
    } else {
        this.setState({ result: "You cant convert the same currency!" })
    }
};


// Updates the states based on the dropdown that was changed
selectHandler = (event) => {
    this.setState({
        showLabels:false
    })
    if (event.target.name === "from") {
        this.setState({ fromCurrency: event.target.value })
        Axios.get('https://ratesapi.io/api/latest?base='+this.state.fromCurrency)
        .then(res =>{
          this.setState({
            conversionRateList:res.data.rates
          })
        console.log(res)
        }).catch(err=>{
          console.log(err)
        })
    }
    if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value })
    }
}

render() {
    var shown = {
        display: this.state.showLabels===true ? "block" : "none"
    };
    
   
    return (
        <div className="Converter">
            <h2><span>Money </span> Converter  </h2>
            <div className="Form">
         
                <input
            id='valueToConvert'
                    name="amount"
                    type="number"
                    value={this.state.amount}
                   
                    onChange={event =>
                        this.setState({ amount: event.target.value })
                    }
                />
           
           <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Convert</button>
                </div>
                {this.state.result && 
                    <h3>{this.state.result}</h3>
                }

                <h6 style={shown} >The conversion of <b>{this.state.fromCurrency} {this.state.oldAmount} </b> is <b>{this.state.toCurrency} {this.state.amount}</b></h6>
            </div>
    );
}
}


export default MoneyConverter;
