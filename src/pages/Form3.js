import React from 'react'

const Form3 = () => {
	return(
		<div>
			<form className="tc" name="fridgeFreezerEnquiry" method="POST" action="http://free.allforms.mailjol.net/u/422a2f17.php" 
				autocomplete="on">
				<h1 className="formh1" id="productQuoteForm">Price enquiry form</h1>
				<h2 className="formh2">Please complete all the fields.</h2> 
				<p className="formp">We will send you a full quote on receipt of this price enquiry form.
					<br/>
					Quote need to be accepted before any orders will be processed.<br />Term and conditions apply.</p>
				<h4 className="formh4">* = Required field</h4>  
					<ol>
					<li>
						<label htmlFor="name">Name*:</label> 
						<input type="text" name="name" placeholder="First Name And Surname" id="name" required />
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
						<label htmlFor="adress1">Address 1:</label>
						<input type="text" name="address1"  placeholder="Complex name and number" id="address1" />
					</li>
					<li>
						<label htmlFor="address2">Address 2*:</label>
						<input type="text" name="address2"  placeholder="Street name and number" id="address2" required />
					</li>
					<li>
						<label htmlFor="address3">Address 3:</label>
						<input type="text" name="address3"  placeholder="Extention number or Suburb name" id="address3" />
					</li>
					<li>
						<label htmlFor="address4">Address 4*:</label>
						<input type="text" name="address4"  placeholder="Town"id="address4"  required />
					</li>
					<br />
					<li>
						<label htmlFor="typeOfUnit">Select type of unit*:</label>
							<select name="typeofunit" required>
							<option value="Domestic Fridge" selected>Domestic Fridge</option>
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
					<textarea name="comment" rows="5" cols="40"placeholder="Please give us full directions to your delivery 
						adress or any info you think we should know. Make sure to add model number and quantity of units required. 
						Deliveries only in Nelspruit and White River area." id="comment" required />
					</li>
					<li>
						<label htmlFor="hearAboutUs">How did you hear about us?</label>
							<select name="How did you hear about us" id="hearAboutUs" required>
							<option value="Long standing customer" selected>Long standing customer</option>
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

export default Form3