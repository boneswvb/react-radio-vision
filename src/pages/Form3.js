import React from 'react'

const Form3 = (props) => {
		console.log("wim", props)
	return(
		<div>
			<form className="tc" name="fridgeFreezerEnquiry" method="POST" action="http://free.allforms.mailjol.net/u/422a2f17.php" 
				autoComplete="on">
				<h1 className="formh1" id="productQuoteForm">Price enquiry form</h1>
				<h2 className="formh2">Please complete all the fields.</h2> 
				<p className="formp">We will send you a full quote on receipt of this price enquiry form.
					<br/>
					Quote need to be accepted before any orders will be processed.<br />Term and conditions apply.</p>
				<h4 className="formh4">* = Required field</h4>  
					<ol>
					<li>
					<label htmlFor="fullName">Name*:</label>
						<input 
							type="text" 
							name="fullName" 
							placeholder="First Name And Surname" 
							value={ props.data.fullName }
							onChange={ props.handleChange}
							required />
				</li>
				<li>
					<label htmlFor="email">E-mail*:</label>
						<input 
							type="email" 
							name="email" 
							placeholder="Example@example.co.za" 
							value={ props.data.email }
							onChange={ props.handleChange} 
							required />
				</li>
				<li>
					<label htmlFor="contactNumber">Contact Number*:</label>
						<input 
							type="text" 
							name="contactNumber"  
							placeholder="Cell Phone is Prefered" 
							value={ props.data.contactNumber }
							onChange={ props.handleChange}
							required />
				</li>
					<br />
				<li>
					<label htmlFor="adress1">Address 1:</label>
						<input 
							type="text" 
							name="address1"  
							placeholder="Complex name and number" 
							value={ props.data.address1 }
							onChange={ props.handleChange} />
				</li>
				<li>
					<label htmlFor="address2">Address 2*:</label>
					<input 
						type="text" 
						name="address2"  
						placeholder="Street name and number" 
						value={ props.data.address2 }
						onChange={ props.handleChange}
						required />
				</li>
				<li>
					<label htmlFor="address3">Address 3:</label>
					<input 
						type="text" 
						name="address3"  
						placeholder="Extention number or Suburb name" 
						value={ props.data.address3 }
						onChange={ props.handleChange} />
				</li>
				<li>
					<label htmlFor="address4">Address 4*:</label>
					<input 
						type="text" 
						name="address4"  
						placeholder="Town"
						value={ props.data.address4 }
						onChange={ props.handleChange}
						required />
				</li>
					<br />
					<li>
						<label htmlFor="typeOfUnit">Select type of unit*:</label>
							<select 
							name="typeOfUnit" 
							value={ props.data.typeOfUnit }
							onChange={ props.handleChange}
							required>
							<option value="selectOne">--Select one--</option>
							<option value="Domestic Fridge">Domestic Fridge</option>
							<option value="Domestic freezer">Domestic freezer</option>
							<option value="Commercial fridge">Commercial fridge</option>
							<option value="Commercial freezer">Commercial freezer</option>
							<option value="Commercial deep freezer">Commercial deep freezer</option>
							<option value="Icecream freezer">Icecream freezer</option>
							<option value="Back of bar fridge">Back of bar fridge</option>
					</select>
					</li>
					<br />
					<li>
					<label htmlFor="comment">Comment*:</label>
					<textarea 
					name="comment" 
					rows="5" 
					cols="40"
					placeholder="Please give us a full description of your unit. I.e. Make, 
						Model, Type and what is the fault. We will call you to make an appointment." 
					value={ props.data.comment }
					onChange={ props.handleChange} 
					required />
				</li>
				<li>
					<label htmlFor="hearAboutUs">How did you hear about us?</label>
						<select 
							name="hearAboutUs" 
							value={ props.data.hearAboutUs }
							onChange={ props.handleChange}>
							<option value="selectOne">--Select one--</option>
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
			<hr />
			<p>Your fullName: { props.data.fullName }</p>
			<p>Your email: { props.data.email }</p>
			<p>Your contactNumber: { props.data.contactNumber }</p>
			<p>Your address1: { props.data.address1 }</p>
			<p>Your address2: { props.data.address2 }</p>
			<p>Your address3: { props.data.address3 }</p>
			<p>Your address4: { props.data.address4 }</p>
			<p>The typeOfUnit: { props.data.typeOfUnit }</p>
			<p>Your comment: { props.data.comment }</p>
			<p>Your hearAboutUs: { props.data.hearAboutUs }</p>
		</div>   
	)
}

export default Form3