import React, { Component } from 'react';
import Form2 from '../pages/Form2';

class GeneralInquiryForm extends Component {
	constructor() {
		super();
		this.state = {
			Fullname: "",
			email: "",
			contactNumber: "",
			typeOfEnquiry: "",
			comment: "",
			HowDidYouHearAboutUs: ""
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  	
	render() {
		return(
			<Form2 
			data={ this.state }
			handleChange={ this.handleChange} />
		)}
	}

export default GeneralInquiryForm;