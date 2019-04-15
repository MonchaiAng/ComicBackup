import React from 'react';

class DropComic2 extends React.Component {
	constructor(props) {
		super(props)
  	}
  	onClickSelectComic({_id}){
  		this.props.onRouteChange('ep',1,{_id});
  	}

  	render(){
  		const { _id, key, name } = this.props;
		return(
			<div onClick={() => this.onClickSelectComic({_id})}>
				<a>{name}</a>
			</div>
		);
	}
}
export default DropComic2;