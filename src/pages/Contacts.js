import React from 'react'

import contacts from '../images/contacts.png';

const Contacts = () => {
	return(
		<div className="tc content" id="content">
			<div id="Contact-details">
				<h1>Where Is Radio Vision?</h1>
			</div>
			<div id="contact">
				<h2>DIRECTIONS</h2>
				<p>From the R 40 turn on to Piet Retief street and continue till you get to the circle.</p>
				<p>Drive half way thru the circle and exit.</p>
				<p>Continue for +- 600m and you will find us on the left hand side.</p>
				<p>We are the second building from the corner.</p>
			</div>
			<div id="maps">
				<img className="map" id="map" alt="directions to Radio Vision" src={contacts} />
				<form className="tc" action="http://maps.google.com/maps" method="get" target="_blank">
					<label htmlFor="saddr">Enter your location. Street and town. Then click "Get directions"</label>
					&nbsp;
					<input type="hidden" name="daddr" value="40 Mostart street, Nelspruit, 1200" />
					<br />
					<input type="text" name="saddr" />
					<input className="submit" type="submit" value="Get directions" />
				</form>
			</div> 
			<div id="adress">       			
				<h2>Physical Address:</h2>
				<p>RADIO VISION NELSPRUIT</p>
				<p>40 Mostert Street</p>
				<p>Sonheuwel</p>
				<p>Nelspruit</p>
				<p>1200</p>
				<h2>Contact Details</h2>
				<p>Phone: 013 752 7460&nbsp; /&nbsp; 013 755 4727</p>
				<p>Fax: 086 502 6716 / 086 502 0425</p>
				<p>Email: 
					<a title="contact email for radio vision" href="mailto:elize@radiovision.co.za">elize@radiovision.co.za</a>
				</p>
				<p>Email: 
					<a title="contact email for radio vision" href= "mailto:admin@radiovision.co.za">admin@radiovision.co.za</a>
				</p>
			</div>
			<br /><br />
		</div>
	)
}

export default Contacts