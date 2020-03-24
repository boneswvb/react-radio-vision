import React  from 'react'
import services5 from '../images/services5.png';
import services1 from '../images/services1.png';
import services6 from '../images/services6.png';
import services7 from '../images/services7.png';
import services8 from '../images/services8.png';

const Index = () => {
	return(
			<div className="tc container" id="container">
				<div className="content" id="content">
					<h1>Servicing of house hold goods.</h1>
					<p>For service on most major brands Radio Vision is the right place to contact. </p>
				<p>We service most electronic and major appliances. </p>
				<p>We can come to your house to service your major appliances, or you can bring it to our workshop.</p>
				<p>Electronic equipment include - TV's (not box TV's), Vcr's, Dvd's, Hi-Fi's, Microwaves, Ice makers, 
					Coffee makers etc.</p>
				<p>Major Appliances include - Washing machines, Tumble driers, Dishwashers, Fridges and freezers.</p>
				<h2>Insurance assessments</h2>
				<p>We are well known to most of the insurance companies around and do work for them on a regular basis.</p>
				<p>Have a look at our services page for more info.</p>
					<img alt="pic" className="pic" src={services5} />
					<img alt="pic" className="pic" src={services1} />
					<img alt="pic" className="pic" src={services6} />
					<img alt="pic" className="pic" src={services7} />
					<img alt="pic" className="pic" src={services8} />
				<h2>Call out to your house or business</h2>
				<p>You can book a call out by sending us an e-mail for attention Elize to 
				<a title="email adress for house calls" href="mailto:elize@radiovision.co.za"> elize@radiovision.co.za</a>
					, or complete the service call form under the forms tab.</p>
				<p>Have a look at our services page for more info.</p>
				<h1>Service agent for most brands</h1>
				<p>For service calls have a look at our contacts page for more information.</p>
				<p>For under warantee service calls we need the proof of purchase to verify that the unit is still under warrantee.</p>
				<p>TV's, Dvd's hi-fi's and electronic equipment are carry in and will be repaired in our shop.</p>
				<h2>Brands that we can repair.</h2>
				<p>We repair a variety of brands that is out of warrantee. See list below.</p>
				<p>We can also help on a wide range of brands that are not listed below</p>
			<div className="brandsContainer">
				<div className="listleft">		
					<ul>
						<li>LG</li>
						<li>Samsung</li>
						<li>Defy</li>
						<li>Electrolux</li>
						<li>Kelvinator</li>
					</ul>
				</div>
				<div className="listright">
					<ul>
						<li>AEG</li>
						<li>Bosch</li>
						<li>Siemens</li>
						<li>Miele</li>
						<li>Smeg</li>
					</ul>	
				</div>	
			</div>
			<br />
		</div>
	</div>
)}

export default Index