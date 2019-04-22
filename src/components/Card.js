import React from 'react';
import './Card.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Sort from '../components/sort/Sort';
// import AllEp from "./AllEp";

class Card extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({ch},{id},{_id}){
  		this.props.onRouteChange('ep',{ch},{id},{_id});
  	}
  	render(){
  		const { _id, id, name, img, brief, ch, namebook } = this.props;
  		const a = require('../img/'+img);
		return(		//decorate
			<div className ='tc asd dib br3 pa2 ma2 grow bw2 shadow-5 container' style = {{ width:'200px', height:'280px'}}>	
				<img alt='comics' src= {a} width = '185px' height='265px'/>
				<p>{namebook}</p>
				<p>Ch.{ch}</p>
					<div onClick={() => this.onClickAllEp({ch},{id},{_id})}>
						<div className="overlay">					
						    <div className="text">
						    	 {brief}
						    </div>
						</div>			 
					</div>	
			</div>
		);
	}
}
export default Card;