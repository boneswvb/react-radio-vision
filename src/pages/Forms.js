import React from 'react'

const Forms = () => {
	return(
		<div>
			<form className="tc" name="serviceCall" method="POST" action="http://free.allforms.mailjol.net/u/422a2f17.php" autocomplete="on">
				<h1 className="formh1">Log a service call Form</h1>
				<h2 className="formh2">Please complete all the fields.</h2>
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
				<li><label htmlFor="address2">Address 2*:</label>
				<input type="text" name="address2"  placeholder="Street name and number" id="address2" required /></li>
				<li><label htmlFor="address3">Address 3:</label>
				<input type="text" name="address3"  placeholder="Extention number or Suburb name" id="address3" /></li>
				<li><label htmlFor="address4">Address 4*:</label>
				<input type="text" name="address4"  placeholder="Town"id="address4"  required /></li>
				<br /><br />
				<li><label htmlFor="faultyUnit">What type of unit is faulty?*:</label>
				<select name="typeofunit" required>
				<option value="Washing Mashine" selected>Washing Mashine</option>
				<option value="Dishwasher">Dishwasher</option>
				<option value="Tumble drier">Tumble drier</option>
				<option value="Flat screen TV">Flat screen TV</option>
				<option value="Hi-FI">Hi-FI</option>
				<option value="DVD player">DVD player</option>
				<option value="Other">Other</option>
				</select></li>
				<li><label htmlFor="typeOfUnit">What make is the faulty unit?*:</label>
				<select name="typeofunit" required>
				<option value="LG" selected>LG</option>
				<option value="Samsung">Samsung</option>
				<option value="Speedqueen">Speedqueen</option>
				<option value="Whirlpool">Whirlpool</option>
				<option value="Defy">Defy</option>
				<option value="Other">Other</option>
				</select></li>
				<br />
				<li><label htmlFor="inWarrantee">In Warrantee Yes:</label>
				<input type="radio" name="In Warrantee" /></li>
				<li><label htmlFor="outOfWarrantee">In Warrantee No:</label>
				<input type="radio" name="Out of Warrantee"/></li>
				<br />
				<li><label htmlFor="insuranceYes">Insurance claim Yes:</label>
				<input type="radio" name="Insurance claim" /></li>
				<li><label htmlFor="InsuranceNo">Insurance claim No:</label>
				<input type="radio" name="Insurance claim" /></li>
				<br />
				<li><label htmlFor="comment">Comment*:</label>
				<textarea name="comment" rows="5" cols="40"placeholder="Please give us a full description of your unit. I.e. Make, 
					Model, Type and what is the fault. We will call you to make an appointment." id="comment" required /></li>
				<li><label htmlFor="hearAboutUs">How did you hear about us?</label>
				<select name="How did you hear about us" id="hearAboutUs" required>
				<option value="Long standing customer" selected>Long standing customer</option>
				<option value="Facebook">Facebook</option>
				<option value="Word of mouth">Word of mouth</option>
				<option value="Internet">Internet</option>
				<option value="Other">Other</option>
				</select></li>
				<li><input type="submit" className="submit" id="submit" name="submit" value="Submit" /></li> 
				</ol>  
			</form>
		</div>       
	)
}

export default Forms