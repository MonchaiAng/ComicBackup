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
		const {_id, id, ch, img, date ,name ,namebook , history} = this.props;
		const a = require('../../img/'+img);
		// console.log(history)
		// console.log(_id)
		// console.log(id)
		// console.log(ch)
		return(	
			<div>
			{
				history.includes(_id) ?
				(
					<div>
						
								<div className='table_div' onClick={() => this.onClickAllEp({ch},{id})}>
									<table className ='asd2' width = '700px'>
										<tbody>
											<tr className = 'trEp'>
												<td width = '10%'>
													<img alt='comics' src= {a} width = '70px' height='70px' />
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
										</tbody>
									</table>
								</div>
												</div>
				):
				(
					<div>
					
								<div className='table_div' onClick={() => this.onClickAllEp({ch},{id})}>
									<table className ='asd ' width = '700px'>
										<tbody>
											<tr className = 'trEp'>
												<td width = '10%'>
													<img alt='comics' src= {a} width = '70px' height='70px' />
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
										</tbody>
									</table>
								</div>
							
					</div>
				)
			}
			</div>
		);
	}
}
export default EpDataList;