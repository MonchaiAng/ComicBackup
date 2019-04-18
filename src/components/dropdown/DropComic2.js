import React from 'react';

class DropComic2 extends React.Component {
	constructor(props) {
		super(props)
  	}
  	onClickSelectComic({_id, name}){
  		let ch = 1
  		let id = _id
  		this.props.onRouteChange('ep',{ch},{id});
  		// console.log("onClicks")
  		// console.log(name)
  	}

  	render(){
  		const { _id, name } = this.props;
		return(
			<div onClick={() => this.onClickSelectComic({_id, name})}>
				<a>{name}</a>
			</div>
		);
	}
}
export default DropComic2;