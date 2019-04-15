import React from 'react';

class ShowComment2 extends React.Component {
	constructor(props) {
		super(props);
  	}
  	render(){
  		const { email, comment } = this.props;
		return(		//decorate
			<div className ='ma1'>	
				<table className ='asd ' width = '350px'>
					<tr className = 'trEp'>
						<td width = '30%'>
							<p className = 'tc'>{email}</p>
						</td>
						<td width = '30%'>
							<p className = 'tc'>{comment}</p>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
export default ShowComment2;