import React from 'react'
import services5 from '../images/services5.png';
import services1 from '../images/services1.png';
import services6 from '../images/services6.png';
import services7 from '../images/services7.png';
import services8 from '../images/services8.png';

const Services = () => {
	return(
		<div className="tc container">
		<h1>Services offered by Radio Vision</h1>
		<p>For service on most major brands Radio Vision is the right place to contact. </p>
		<h2>Insurance assessments</h2>
		<img alt="pic" className="pic" src={services5} />
		<img alt="pic" className="pic" src={services1} />
		<img alt="pic" className="pic" src={services6} />
		<img alt="pic" className="pic" src={services7} />
		<img alt="pic" className="pic" src={services8} />
		<p>We work with almost all of the insurance companies in our area and is up to date with their requirements 
			for quotes.</p>
		<p className="under">We will assess the unit and provide you with a quote stating the below.</p>
		<ul className="repairs">
		<li>Cost to repair the unit if repairable</li>
		<li>Is it power surge/lightning damage</li>
		<li>Is it impact damage</li>
		<li>Normal failure</li>
		<li>Any other special requirements if needed</li>
		<li>All relevant detail of the unit. I.e.. model, serial, make etc.</li>
		</ul>
		<h2>Call out to your house or business</h2>
		<p>You can book a call out by sending us an e-mail for attention Elize to
		<a title="email adress for call outs" href="mailto:elize@radiovision.co.za"> elize@radiovision.co.za</a>, or
		complete the online booking form.</p>
		<p>We do calls to houses and businesses in the Nelspruit and White River areas.</p>
		<p>We can also arrange for units to be picked up for larger repairs.</p>
		<p>Call outs are only for large items like washing machines, tumble driers etc.</p>
		<p>For small items like micro waves, TV' (all sizes), hi-fi's etc. you will have to bring the units to our shop
			 for assessment.</p>
		<h1>Electronic repairs</h1>
		<p>We are able to repair most of the electronic items in your house.</p>
		<p>Due to the complexity of these repairs the units need to come to or workshop for assessments and repairs.</p>
		<p>You are welcome to bring your ice makers, coffee makers and converters for us to have look at them.</p>
		<p>Electronic repairs to small items like toasters and irons etc. is in most cases not economical to repair. 
			Items that is more expensive can be looked at.</p>
		<p>If you are not sure if it will be cost effective to repair a unit, you can call us and we will gladly 
			try to assist you with advice.</p>
		<p>Electronic goods that should be brought to our shop will include DVD's, TV's, Hi-Fi's, Amplifiers, etc.</p>
		<h1>LG in warrantee service agent.</h1>
		<p>We are the only service agents for Lg in and around the Nelspruit area.</p>
		<p>If you need to have a LG unit inspected that is still under warrantee you can call us directly and we will 
			log the call on your behalf.</p>
		<p>We will need the proof of purchase to verify that the unit is still under warrantee.</p>
		<p>For TV's, Dvd's hi-fi's etc. you will have to bring the unit to our store, but for washing machines, 
		tumble driers etc. we can come to your house if you reside in Nelspruit or White River.</p>
		</div>     
	)
}

export default Services