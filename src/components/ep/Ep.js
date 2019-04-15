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
  		const {_id, id , name, namebook , img, view, ch} = this.props;
		return(
			<div>
				<div className='table_div' onClick={() => this.onClickAllEp({ch},{id},{_id})}>
					<table className ='asd ' width = '350px'>
						<tr className = 'trEp'>
							<td width = '15%'>
								<img alt='comics' src= {img} width = '70px' height='70px' />
							</td>
							<td width = '40%'>
								<p className = 'tl'>{namebook} {name}</p>
							</td>
							<td width = '30%'>
								<p className = 'tr'>{view}</p>
							</td>
							<td width = '5%'>
							</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}
export default Ep;