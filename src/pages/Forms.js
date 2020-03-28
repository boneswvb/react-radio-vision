import React from 'react'

const Forms = (props) => {
	return(
		<div>
			<form className="tc" name="serviceCall" method="POST" action="http://free.allforms.mailjol.net/u/422a2f17.php" autoComplete="on">
				<h1 className="formh1">Log a service call Form</h1>
				<h2 className="formh2">Please complete all the fields.</h2>
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
				<br /><br />
				<li>
					<label htmlFor="faultyUnit">What type of unit is faulty?*:</label>
						<select 
							name="faultyUnit"
							value={ props.data.faultyUnit }
							onChange={ props.handleChange} 
							required>
							<option value="selectOne">--Select one--</option>
							<option value="Washing Mashine">Washing Mashine</option>
							<option value="Dishwasher">Dishwasher</option>
							<option value="Tumble drier">Tumble drier</option>
							<option value="Flat screen TV">Flat screen TV</option>
							<option value="Hi-FI">Hi-FI</option>
							<option value="DVD player">DVD player</option>
							<option value="Other">Other</option>
						</select>
				</li>
				<li>
					<label htmlFor="typeOfUnit">What make is the faulty unit?*:</label>
						<select 
							name="typeofunit" 
							value={ props.data.typeOfUnit }
							onChange={ props.handleChange}
							required>
							<option value="selectOne">--Select one--</option>
							<option value="LG">LG</option>
							<option value="Samsung">Samsung</option>
							<option value="Speedqueen">Speedqueen</option>
							<option value="Whirlpool">Whirlpool</option>
							<option value="Defy">Defy</option>
							<option value="Other">Other</option>
					</select>
				</li>
				<br />
				<li>
					<label htmlFor="inWarrantee">In Warrantee Yes:</label>
						<input 
							type="radio" 
							name="warrantee"
							value="InWarrantee"
							checked={ props.data.warrantee === "InWarrantee" }
							onChange={ props.handleChange} />
				</li>
				<li>
					<label htmlFor="outOfWarrantee">In Warrantee No:</label>
					<input 
						type="radio" 
						name="warrantee"
						value="OutOfWarrantee"
						checked={ props.data.warrantee === "OutOfWarrantee" }
						onChange={ props.handleChange} />
				</li>
				<br />
				<li>
					<label htmlFor="insuranceYes">Insurance claim Yes:</label>
					<input 
						type="radio" 
						name="insurance"
						value="Yes"
						checked={ props.data.insurance === "Yes" }
						onChange={ props.handleChange} />
				</li>
				<li>
					<label htmlFor="InsuranceNo">Insurance claim No:</label>
					<input 
						type="radio" 
						name="insurance"
						value="No"
						checked={ props.data.insurance === "No" }
						onChange={ props.handleChange} />
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
				<li><input type="submit" className="submit" id="submit" name="submit" value="Submit" /></li> 
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
			<p>Your typeofunit: { props.data.typeofunit }</p>
			<p>Your typeofunit: { props.data.faultyUnit }</p>			
			<p>Your inWarrantee: { props.data.warrantee }</p>
			<p>Your insuranceYes: { props.data.insurance }</p>
			<p>Your comment: { props.data.comment }</p>
			<p>Your hearAboutUs: { props.data.hearAboutUs }</p>
		</div>       
	)
}

export default Forms