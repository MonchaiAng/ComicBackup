import React from 'react';
import './dropListEpisodes.css';
import Page from './Page';
// import logo from '../img/0_1_1.svg';	
// import logo1 from '../img/0_1_2.svg';	
// import logo2 from '../img/0_1_3.svg';
// var imageName = require('../img/page1.svg')
let dir = '../img';

// const dropListEpisodes = ({id, ep}) => {
class dropListEpisodes extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({ep},{id}){
  		this.props.onRouteChange('allep',{ep},{id});
  	}
  	render(){
	const { id ,ep } = this.props;
    return(
    	<div >
    	<div class="tl all">
    		<h1 className="tl Link_name" onClick={() => this.onClickAllEp({ep},{id})}>Solo Leveling</h1>	
    		<ul>
	    		<li class="name"><h3>Read</h3></li>
			    <li>
			        <ul class=" tl dropdown name" >
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
			<ul class="tl dropdown">
			    <li class="dropbtn">Ep.1:Start </li>
			    <li class="dropdown-content">
			      <a href="#">Ep.1:Start</a>
			      <a href="#">Ep.2:middle</a>
			      <a href="#">Ep.3:End</a>
			    </li>
		    </ul>
		</div>
			<div className="tc">
				<Page id={id} ep={ep}/>
			</div>
		</div>
    );
};
}
export default dropListEpisodes;