import React, { Component } from 'react';

class Search2 extends Component{
	constructor(props){	
		super(props)
		this.state={
			count:0
		}
	}
	onClickAllEp({id}){
		let ch = 1 
  		this.props.onRouteChange('allep',{ch},{id});
  	}
  // 	componentWillReceiveProps(nextProps) {
  // 		let value = nextProps.value
  // 		let name = nextProps.name
		// let id = nextProps.id
		// console.log("In Search2")
		// // console.log()
  // 		if(value == name){
		// 	let size = this.state.count
		// 	size++
		// 	this.setState({count:size})
		// 	if(size%15 == 0){
		// 		console.log(this.state.count)
		// 		this.onClickAllEp({id})
		// 	}
  // 		}
  // 	}
	render(){
		const {id, name, value, author} = this.props
		return (
			<div>
			{
				name === value && name === 'Fantasia tales'?
				(
					<div>
						<br/><br/>
						<button onClick={() => this.onClickAllEp({id})}>search</button>
					</div>
				):name === value?
				(
					<div>
						<br/>
						<button onClick={() => this.onClickAllEp({id})}>search</button>
					</div>
				):value === author?
				(
					<div>
						<br/>
						<button onClick={() => this.onClickAllEp({id})}>Go to {name}</button>
					</div>
				):
				<p></p>
			}
			</div>
		);
	};
}
export default Search2;