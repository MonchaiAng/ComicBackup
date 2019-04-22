import React from 'react';

class DropComic2 extends React.Component {
	constructor(props) {
		super(props)
    this.state={
      idEp:''
    }
  	}
  	onClickSelectComic({_id}){
  		let ch = 1
  		let id = _id
      this.props.onRouteChange('ep',{ch},{id});

  	}

  	render(){
  		const { _id, name } = this.props;
		return(
			<div onClick={() => this.onClickSelectComic({_id})}>
				<a>{name}</a>
			</div>
		);
	}
}
export default DropComic2;