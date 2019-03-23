import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Sort from "./Sort";
import List from "./List";
const Navigation = () => {
	return (
		<div className='pa2 tr' >
		<Router>
			<div>
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
		      	<Route exact={true} path="/" component={Home}/>
		      	<Route path="/sort" component={Sort}/>
		      	<Route path="/list" component={List}/>
		    </div>
		</Router>
		</div>
	);
}	
export default Navigation;	