import React, { Component } from 'react';
import Form3 from '../pages/Form3';

class FridgeFreezerEnquiry extends Component {
	constructor() {
		super();
		this.state = {
			fullName: "",
			email: "",
			contactNumber: "",
			address1: "",
			address2: "",
			address3: "",
			address4: "",
			typeOfUnit: "",
			comment: "",
			hearAboutUs: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  	
	render() {
		return(
			<Form3
			data={ this.state }
			handleChange={ this.handleChange} />
		)}
	}

export default FridgeFreezerEnquiry;






// fridgeFreezerEnquiry