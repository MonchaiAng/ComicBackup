import React from 'react';
import './dropListEpisodes.css';
import logo from '../img/0_1_1.svg';	
import logo1 from '../img/0_1_2.svg';	
import logo2 from '../img/0_1_3.svg';
// var imageName = require('../img/page1.svg')
let dir = '../img';

// const dropListEpisodes = ({id, ep}) => {
class dropListEpisodes extends React.Component {
	constructor(props) {
		super(props);
  	}

  	render(){
	const { id ,ep } = this.props;
	let b = JSON.stringify({id}.id)
	b = JSON.parse(b);
	let c = JSON.stringify({ep}.ep)
	let a = b+'_'+c+'_';
	a = a+'1.svg';    
	a = a.toString();
	let z = '../img/'+a;
	var imageName = require('../img/'+a);
    return(
    	<div >
    	<div class="all">
    		<h1>Demo Name Cartoon</h1>	
    		<ul>
	    		<li class="name"><h3>Read</h3></li>
			    <li>
			        <ul class="dropdown name" >
					  <li class="dropbtn" >Nidome</li>
					  <li class="dropdown-content">
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					    <a href="#">Nidome</a>
					    <a href="#">One piece</a>
					    <a href="#">One punch man</a>
					  </li>
					</ul>
				</li>
			</ul>
			<ul class="dropdown">
			    <li class="dropbtn">Ep.1:Start </li>
			    <li class="dropdown-content">
			      <a href="#">Ep.1:Start</a>
			      <a href="#">Ep.2:middle</a>
			      <a href="#">Ep.3:End</a>
			    </li>
		    </ul>
		</div>
			<div className="tc">
			    <h3 align="center">All page</h3>
			    <img src={imageName}/>
			    <p className="page">1/30</p>
			    <img src={imageName} />
			    <p className="page">2/30</p>
			    <img src={imageName} />
			    <p className="page">3/30</p>
			</div>
		</div>
    );
};
}
export default dropListEpisodes;