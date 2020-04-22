import React from 'react'

import { Helmet } from 'react-helmet';

const Form2 = (props) => {
	return(
		<div>
		<Helmet>
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="keywords" content="service of fridges, service of washing machines,service of dish washer, service of tv, service of hi-fi, 
        service of dvd, service of ice maker, service of inverters, service of tumble drier, insurance assessments, 
        lg, samsung, defy, electrolux, kelvinator, aeg, bosch, siemens, miele, smeg" />
      <meta name="description" content="Agents for LG household appliences and electronics - Radio Vision" />
      <meta name="description" content="A React.js application" />
      <meta name="subject" content="Repairs to digital goods" />
      <meta name="copyright"content="Lesawi Services CC" />
      <meta name="Classification" content="Business" />
      <meta name="author" content="Wim von Benecke, info@lesawi.co.za" />
      <meta name="designer" content="Wim von Benecke" />
      <title>General Inquiry Form - Radio Vision</title>
    </Helmet>
			<form className="tc" 
				name="generalEnquiry" 
				method="POST" 
				action="http://free.allforms.mailjol.net/u/422a2f17.php" 
				autoComplete="on"
			>
				<h1 className="formh1" id="generalInquiryForm">General Inquiry Form</h1>
				<h2 className="formh2">Please complete all the fields.</h2>
				<h4 className="formh4">* = Required field</h4>  

				<ol>
					<li>
						<label htmlFor="namese">Name*:</label> 
								<input 
									type="text" 
									name="fullName" 
									value={ props.data.fullName } 
									placeholder="First Name And Last Name"
									onChange={ props.handleChange }
									required />
					</li>
					<li>
						<label htmlFor="email">E-mail*:</label>
						<input 
							type="email" 
							name="email" 
							value={ props.data.email } 
							placeholder="Example@example.co.za" 
							onChange={ props.handleChange }
							required />
					</li>
					<li>
						<label htmlFor="contactNumber">Contact Number*:</label>
						<input 
							type="text" 
							name="contactNumber"  
							value={ props.data.contactNumber }
							placeholder="Cell Phone is Prefered"
							onChange={ props.handleChange } 
							required />
					</li>
					<br />
					<li>
						<label htmlFor="typeOfEnquiry">Type of enquiry?*:</label>
							<select 
								name="typeOfEnquiry"
								value={ props.data.typeOfEnquiry } 
								onChange={ props.handleChange }
								required>
								<option value="selectOne">--Select One--</option>
								<option value="General">General</option>
								<option value="Product">Product</option>
								<option value="CallOut">Call Out</option>
								<option value="Insurance">Insurance</option>
								<option value="New Fridges">New Fridges</option>
								<option value="New Freezers">New Freezers</option>
								<option value="Other">Other</option>
							</select>
					</li>
					<br />
					<li>
						<label htmlFor="comment">Comment*:</label>
						<textarea 
						name="comment" 
						value={ props.data.comment } 
						rows="5" 
						cols="40"
						placeholder="Your full query. Please give as much detail as posible."
						onChange={ props.handleChange }  
						required />
					</li>
					<li>
						<label htmlFor="hearAboutUs">How did you hear about us?</label>
							<select 
								name="HowDidYouHearAboutUs" 
								value={ props.data.comment }
								onChange={ props.handleChange } 
								required>
								<option value="selectOne">--Select One--</option>
								<option value="Long standing customer">Long standing customer</option>
								<option value="Facebook">Facebook</option>
								<option value="Word of mouth">Word of mouth</option>
								<option value="Internet">Internet</option>
								<option value="Other">Other</option>
						</select>
					</li>
					<li>
						<input type="submit" className="submit" id="submit" name="submit" value="Submit" />
					</li> 
				</ol> 
			</form>	
		</div>
	)	 
}

export default Form2