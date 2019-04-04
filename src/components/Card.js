import React from 'react';
import './Card.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sort from './Sort';
import AllEp from "./AllEp";
import List from "./List";
class Card extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({ch},{id},{_id}){
  		this.props.onRouteChange('ep',{ch},{id},{_id});
  	}
  	render(){
  		const { _id,id ,name ,img ,brief,ch } = this.props;
  		console.log({img})
		return(		//decorate
			<div className ='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 container' style = {{ width:'200px', height:'280px'}}>	
				<img alt='comics' src= {img} width = '185px' height='265px' />
					<div>
						<div onClick={() => this.onClickAllEp({ch},{id},{_id})}>
							<div className="overlay">					
							    <div className="text">
							    	 Short {name} 	
							    </div>
							</div>			 
						</div>	
		      		</div>	
			</div>
		);
	}
}
export default Card;