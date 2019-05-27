import React from 'react';
import '../Card.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Sort from '../Sort';
// import AllEp from "../AllEp";

class Alert2 extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({ch},{id},{_id}){
  		this.props.onRouteChange('ep',{ch},{id},{_id});
  	}
  	render(){
  		const { _id,id ,name ,img , ch, namebook } = this.props;
  		const a = require('../../img/'+img);
		return(		//decorate
			<div className ='tc asd dib br3 pa2 ma2 grow bw2 shadow-5 container' style = {{ width:'200px', height:'280px'}}>
				<Router>
					<Link to = {name} >	
						<img alt='comics' src= {a} width = '185px' height='265px' />
						<p>{namebook}</p>
						<p>Ch.{ch}</p>
							<div>
								<div onClick={() => this.onClickAllEp({ch},{id},{_id})}>
									<div className="overlay">					
									    <div className="text">
									    	 Short {name} 	
									    </div>
									</div>			 
								</div>	
				      		</div>	
		      		</Link>
		      	</Router>	
			</div>
		);
	}
}
export default Alert2;