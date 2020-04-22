import React from 'react'
import {Link} from 'react-router-dom'

const MainMenu = () => {
	return(
		<div className="topnav">	
			<div className="subbanner" id="subbanner">
				<h3>Digital Electronics</h3>
			</div> 
			<div>
	      <Link to="/"><button className="navbutton">Welcome</button></Link>    	
				<Link to="/about"><button className="navbutton">About</button></Link>
				<div className="dropdown">
	        <Link to="/products"><button className="navbutton">Products</button></Link>
		      <div className="dropdown-content">
		        <Link  to="/DomesticFridgesContent">Domestic Fridges</Link>
		        <Link  to="/DomesticFreezersContent">Domestic Freezers</Link>
		        <Link  to="/CommercialFridgesContext">Commercial Fridges</Link>
		        <Link  to="/CommercialFreezersContent">Commercial Freezers</Link>
		        <Link  to="/CommercialDeepFreezersContext">Commercial Deep Freezers</Link>
		        <Link  to="/IcecreamFreezersContent">Icecream Freezers</Link>
		        <Link  to="/BackOfBarFridgesContent">Back Of Bar Fridges</Link>
	      	</div>                      
	      </div>            
	      <Link to="/services"><button className="navbutton">Services</button></Link>
	      <Link to="/contacts"><button className="navbutton">Contact</button></Link>            
		    <div className="dropdown">
	      	<Link to="/ServiceCallForm"><button className="navbutton">Forms</button></Link>                
			    <div className="dropdown-content">        
			      <Link to="/ServiceCallForm">Service Call</Link>
			      <Link to="/GeneralInquiryForm">General Inquiry Form</Link>
			      <Link to="/FridgeFreezerEnquiry">Product Quote Form</Link>       
			    </div>                
			  </div> 
			</div>
		</div>
	)
}

export default MainMenu