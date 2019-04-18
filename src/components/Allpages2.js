import React from 'react';
// import './Card.css';

class Allpages2 extends React.Component {
	constructor(props) {
		super(props);
  	}
  	render(){
  		const { count, page, size } = this.props;
  		const a = require('../img/'+page);
		return(		//decorate
			<div>	
				<img src={a}/>
				<p className="page">{count}/{size}</p>
			</div>
		);
	}
}
export default Allpages2;