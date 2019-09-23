import React from "react";
import ReactDOM from "react-dom";
 

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "FormContainer Component"
    };
     // this.handleChange = this.handleChange.bind(this);
  }
  /*
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  */

  render() {     
    return <h3> Hello from {this.state.title} </h3>;
  
}}


export default FormContainer;
const wrapper = document.getElementById("main-container");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;