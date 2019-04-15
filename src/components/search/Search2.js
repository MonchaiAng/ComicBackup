import React, { Component } from 'react';
import './Search.css';

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
		console.log({value})
		return (
			<div>
			{
				value == name || value == author?
				(	
					<div>
						<br/>
						<button type="Submit" onClick={() => this.onClickAllEp({_id})}>
							Search
         				</button>
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