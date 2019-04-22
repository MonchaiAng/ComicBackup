import React from 'react';
import '../../containers/BoxEp.css';


class Ep extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({ch},{id},{_id}){
  		this.props.onRouteChange('ep',{ch},{id},{_id});
  	}
  	render(){
  		const {_id, id , count,name, namebook , img, view, ch} = this.props;
  		const a = require('../../img/'+img);
		return(
			<div>
				<div className='table_div' onClick={() => this.onClickAllEp({ch},{id},{_id})}>
					<table className ='asd ' width = '350px'>
						<tbody>
							<tr className = 'trEp'>
								<td width = '15%'>
									<img alt='comics' src= {a} width = '70px' height='70px' />
								</td>
								<td width = '85%'>
									<p className = 'tl'>{namebook} Ch.{ch} {name}</p>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default Ep;