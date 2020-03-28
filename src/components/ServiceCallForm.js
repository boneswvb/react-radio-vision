import React, { Component } from 'react';
import Forms from '../pages/Forms.js';

class ServiceCallForm extends Component {
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
			faultyUnit: "",
			typeofunit: "",
			warrantee: "",
			insurance: "",
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
			<Forms 
			data={ this.state }
			handleChange={ this.handleChange} />
		)}
	}

export default ServiceCallForm;