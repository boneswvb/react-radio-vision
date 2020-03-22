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
		        <a href="products.html#DomesticFridges">Domestic Fridges</a>
		        <a href="products.html#DomesticFreezers">Domestic Freezers</a>
		        <a href="products.html#CommercialFridges">Commercial Fridges</a>
		        <a href="products.html#CommercialFreezers">Commercial Freezers</a>
		        <a href="products.html#CommercialDeepFreezers">Commercial Deep Freezers</a>
		        <a href="products.html#IcecreamFreezers">Icecream Freezers</a>
		        <a href="products.html#BackOfBarFridges">Back Of Bar Fridges</a>
	      	</div>                      
	      </div>            
	      <Link to="/services"><button className="navbutton">Services</button></Link>
	      <Link to="/contacts"><button className="navbutton">Contacts</button></Link>            
		    <div className="dropdown">
	      	<Link to="/forms"><button className="navbutton">Forms</button></Link>                
			    <div className="dropdown-content">        
			      <Link to="/forms">Service Call</Link>
			      <Link to="/form2">General Inquiry Form</Link>
			      <Link to="/form3">Product Quote Form</Link>       
			    </div>                
			  </div> 
			</div>
		</div>
	)
}

export default MainMenu