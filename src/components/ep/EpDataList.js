import React from 'react';
import '../slideshow/Slideshow.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class EpDataList extends React.Component {
	constructor(props) {
		super(props);
  	}
	onClickAllEp({ch},{id}){
  		this.props.onRouteChange('ep',{ch},{id});
  	}
	render(){
		const {id, ch, img, date ,name, onRouteChange} = this.props;
		return(	
			<div>
				<Router>
					<Link to = {name} >
						<div className='table_div' onClick={() => this.onClickAllEp({ch},{id})}>
							<table className ='asd ' width = '700px'>
								<tr className = 'trEp'>
									<td width = '10%'>
										<img alt='comics' src= {img} width = '70px' height='70px' />
									</td>
									<td width = '35%'>
										<p className = 'tl'>Episodes{ch}: {name}</p>
									</td>
									<td width = '30%'>
										<p className = 'tr'>{date}</p>
									</td>
									<td width = '5%'>
									</td>
								</tr>
							</table>
						</div>
					</Link>
				</Router>
			</div>
		);
	}
}
export default EpDataList;