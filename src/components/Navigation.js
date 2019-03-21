import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navigation = () => {
	return (
		<div className='pa2 tr' >
		<Router>
			<ul>
			  <li className='li_Na'>
			  	<Link to = "" className= 'active f3'>Comic E-book</Link>
			  </li>
			  <li className='li_Na'>
			  	<Link to ="/Sort" className= 'f3'>Sort</Link>
			  </li>
			  <li className='li_Na'>
			  	<Link to ="/List" className= 'f3'>List</Link>
			  </li>
			</ul>
		</Router>
		</div>
	);
}	
export default Navigation;	