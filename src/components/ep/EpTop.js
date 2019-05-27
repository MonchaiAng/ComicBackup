import React from 'react';
import '../../containers/BoxEp.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Ep extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({_id}){
  		let ch = 1
  		let id = _id
  		this.props.onRouteChange('allep',{ch},{id});
  	}
  	render(){
  		const {_id, name , img, view} = this.props;
  		const a = require('../../img/'+img);
		return(
			<div>
				<Router>
					<Link to = {name} >
						<div className='table_div' onClick={() => this.onClickAllEp({_id})}>
							<table className ='asd ' width = '350px'>
								<tbody>
									<tr className = 'trEp'>
										<td width = '15%'>
											<img alt='comics' src= {a} width = '70px' height='70px' />
										</td>
										<td width = '40%'>
											<p className = 'tl'>{name}</p>
										</td>
										<td width = '30%'>
											<p className = 'tr'>{view} views</p>
										</td>
										<td width = '5%'>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						</Link>
		      	</Router>	
			</div>
		);
	}
}
export default Ep;