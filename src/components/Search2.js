import React, { Component } from 'react';

class Search2 extends Component{
	constructor(props){	
		super(props)
	}
	onClickAllEp({_id}){
		let id = _id;
		console.log("seach2");
		console.log({id});
  		this.props.onRouteChange('allep',1,{id});
  	}
	render(){
		const {_id, name, value, author} = this.props;
		return (
			<div>
			{
				value == name || value == author?
				(	
					<div>
					<br/>
					<button type="button" onClick={() => this.onClickAllEp({_id})}>Submit</button>
					</div>	
					// <h1 onClick={() => this.onClickAllEp({_id})}>{name}</h1>
				):
					<p></p>
			}
			</div>
		);
	};
}
export default Search2;