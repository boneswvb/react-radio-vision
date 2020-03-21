import React from 'react'

const MainMenu = () => {
	return(
		<div className="topnav">	
      <button className="navbutton">
      	<a href="index.html">Welcome</a>
    	</button>
			<button className="navbutton">
				<a href="about.html">About</a>
			</button>
			<div className="dropdown">
        <button className="navbutton">
        	<a href="products.html">Products</a>
      	</button>
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
      <button className="navbutton">
      	<a href="services.html">Services</a>
      </button>
      <button className="navbutton">
      	<a href="contacts.html">Contacts</a>
      </button>            
	    <div className="dropdown">
	      <button className="navbutton">
	      	<a href="forms.html">Forms</a>
	      </button>                
	    <div className="dropdown-content">        
	      <a href="forms.html#serviceCall">Service Call</a>
	      <a href="form2.html#generalInquiryForm">General Inquiry Form</a>
	      <a href="form3.html#productQuoteForm">Product Quote Form</a>        
	    </div>                
	  </div> 
	</div>
	)
}

export default MainMenu