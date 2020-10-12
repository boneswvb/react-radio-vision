import React from 'react'

import { Helmet } from 'react-helmet';

const About = () => {
	return(
		<div className="tc container">
		<Helmet>
      <meta name="robots" content="INDEX, FOLLOW" />
      <meta name="keywords" content="service of fridges, service of washing machines,service of dish washer, service of tv, 
      	service of hi-fi, service of dvd, service of ice maker, service of inverters, service of tumble drier, insurance assessments, 
				lg, samsung, defy, electrolux, kelvinator, aeg, bosch, siemens, miele, smeg" />
			<meta name="description" content="Agents for LG household appliences and electronics - Radio Vision" />
      <title>About Radio Vision</title>
    </Helmet>
			<div className="content">
				<h1>About Radio Vision.</h1>
				<p>We service most electronic and major appliances.</p>
				<p>The company was started in 1984 By Deon Schoültz in Voortrekker street Nelspruit where the company operated for 
					two years.</p>
				<p>In 1986 the company moved premises to Louise Trichardt street for 12 years.</p>
				<p>In 1998 the company moved to the old Pretoria road and was there for 6 years before moving to Mostert street 
					no 40 where it is now operating.</p>
				<p>The customer base that was build up during the years is loyal and still growing due to the quality of work.</p>
				<p>Every effort is made to fix a unit at a reasonable price. The technicians will even try to fix a unit at 
					component level if a pc board is no longer available.</p>
			</div>	
				<br /><br />
		</div> 
	)
}

export default About