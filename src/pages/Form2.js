import React from 'react'

const Form2 = (props) => {
	console.log("wim", props)
	return(
		<div>
			<form className="tc" name="generalEnquiry" method="POST" action="http://free.allforms.mailjol.net/u/422a2f17.php" autoComplete="on">
				<h1 className="formh1" id="generalInquiryForm">General Inquiry Form</h1>
				<h2 className="formh2">Please complete all the fields.</h2>
				<h4 className="formh4">* = Required field</h4>  
				<ol>
					<li>
						<label htmlFor="namese">Name*:</label> 
						<input 
							type="text" 
							name="fullName" 
							placeholder="First Name And Last Name"
							required />
					</li>
					<li>
						<label htmlFor="email">E-mail*:</label>
						<input type="email" name="email" placeholder="Example@example.co.za" id="email" required />
					</li>
					<li>
						<label htmlFor="contactNumber">Contact Number*:</label>
						<input type="text" name="Contact Number"  placeholder="Cell Phone is Prefered" id="contactNumber" required />
					</li>
					<br />
					<li>
						<label htmlFor="typeOfEnquiry">Type of enquiry?*:</label>
							<select name="typeOfEnquiry" required>
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
						<textarea name="comment" rows="5" cols="40"placeholder="Your full query. Please give as much detail as posible." 
							id="comment" required />
					</li>
					<li>
						<label htmlFor="hearAboutUs">How did you hear about us?</label>
							<select name="HowDidYouHearAboutUs" id="hearAboutUs" required>
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

// <p>First Name</p>
// 					<input 
// 					type="text" 
// 					name="firtsName" 
// 					value={ props.data.firtsName } 
// 					placeholder="Firts Name" 
// 					onChange={ props.handleChange } 	
// 					/>
// <hr />
// 			<p>Your name: { props.data.fullName }</p>