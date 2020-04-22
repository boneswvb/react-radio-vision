import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
	return (
		<div className="tc footer-container">
			<div className="footer">
	      <div>
	        <Link to="/"><button>Home Page</button></Link>
	      </div>
				<p>&copy;Designed by Wim von Benecke - 071  099 2811. Email: 
					<a href="mailto:info@lesawi.co.za"> Wim von Benecke</a>
				</p>		
			</div>        
		</div>
	)
}

export default Footer