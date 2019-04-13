import React, { Component } from "react";
var convert = require('convert-units');

 class LengthConverter extends Component {
  state = {
    category:[],
    categorySelected:'length',
    result: null,
    fromMeasurement: "mm",
    toMeasurement: "cm",
    measurement: 1,
    listOfmeasures: [],
    showLabels:false,
    oldValue:null
};
componentWillMount(){
  var listOfCategory=convert().measures();
  var listOfmeasures=convert().possibilities('length');
  console.log(listOfmeasures);
  this.setState({
    listOfmeasures,
    category:listOfCategory
  })
  
}
// Initializes the currencies with values from the api

// Event handler for the conversion
convertHandler = () => {
  this.setState({oldValue:this.state.measurement,showLabels:true})
    if (this.state.fromMeasurement !== this.state.toMeasurement) {
   let convertedValue= convert(this.state.measurement).from(this.state.fromMeasurement).to(this.state.toMeasurement);
   this.setState({
     measurement:convertedValue
   })
    } 
    else {
        this.setState({ result: "You cant convert the same currency!" })
    }
};

// Updates the states based on the dropdown that was changed
selectHandler = (event) => {
  this.setState({
    showLabels:false
})
    if (event.target.name === "from") {
        this.setState({ fromMeasurement: event.target.value })
    }
    if (event.target.name === "to") {
        this.setState({ toMeasurement: event.target.value })
    }
    if (event.target.name === "category") {
      let listOfCategorys=convert().measures();
  let listOfmeasuress=convert().possibilities(event.target.value);
  
      this.setState({ categorySelected: event.target.value, fromMeasurement:listOfmeasuress[0],toMeasurement:listOfmeasuress[1], listOfmeasures:listOfmeasuress,category:listOfCategorys})
  }
}

render() {
  var shown = {
    display: this.state.showLabels===true ? "block" : "none"
};
    return (
        <div className="Converter">
            <h2><span>Unit </span> Converter  </h2>
            <div className="Form">
            <select
                        name="category"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.categorySelected}
                    >
                        {this.state.category.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                <input
                id='valueToConvert'
                    name="measurement"
                    type="text"
                    value={this.state.measurement}
                    onChange={event =>
                        this.setState({ measurement: event.target.value })
                    }
                />
           
           <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromMeasurement}
                    >
                        {this.state.listOfmeasures.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toMeasurement}
                    >
                        {this.state.listOfmeasures.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Convert</button>
                </div>
                {this.state.result && 
                    <h3>{this.state.result}</h3>
                }

<h6 style={shown} >The conversion of <b>{this.state.oldValue} {this.state.fromMeasurement}  </b> is <b> {this.state.measurement} {this.state.toMeasurement}</b></h6>
           
            </div>
    );
}
}


export default LengthConverter;
