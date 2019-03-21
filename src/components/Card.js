import React from 'react';
import './Card.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllEp from '../components/AllEp';

class Card extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({id}){
  		this.props.onRouteChange('allep',{id});
  	}
  	render(){
  		const { id ,name ,img } = this.props;
		return(		//decorate
			<div className ='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 container' style = {{ width:'200px', height:'280px'}}>	
				<img alt='comics' src= {img} width = '185px' height='265px' />
				<Router>
					<Link to = {name} className= 'active f3'>
						<div onClick={() => this.onClickAllEp({id})}>
							<div className="overlay">					
							    <div className="text">
							    	 Short {name} 	
							    </div>
							</div>			 
						</div>	
					</Link>
				</Router>	
			</div>
		);
	}
}
export default Card;