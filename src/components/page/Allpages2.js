import React from 'react';
import './Page.css';

class Allpages2 extends React.Component {
	constructor(props) {
		super(props);
  	}
  	rigthClick = (e) => {
  		e.preventDefault();
  	}
  	render(){
  		const { count, page, size } = this.props;
  		const a = require('../../img/'+page);
		return(		//decorate
			<div>	
				<img src={a} onContextMenu={this.rigthClick}/>
				<p className="page">{count}/{size}</p>
			</div>
		);
	}
}
export default Allpages2;