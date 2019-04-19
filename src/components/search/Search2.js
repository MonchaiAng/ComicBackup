import React, { Component } from 'react';
import './Search.css';

class Search2 extends Component{
	constructor(props){	
		super(props)
		this.state={
			count:0
		}
	}
	onClickAllEp({id}){
		// console.log("12313123")
		let ch = 1 
		// console.log({ch})
		// console.log({id})
  		this.props.onRouteChange('allep',{ch},{id});
  	}
  	// componentDidMount(){
  	// 	let id = 0
  	// 	let ch = 1 
  	// 	this.props.onRouteChange('allep',{ch},{id});
  	// }
  	componentWillReceiveProps(nextProps) {
  		let value = nextProps.value
  		let name = nextProps.name
		let id = nextProps.id

  		if(value == name){
			let size = this.state.count
			size++
			this.setState({count:size})
			if(size%15 == 0){
				console.log(this.state.count)
				this.onClickAllEp({id})
			}
  		}
  	}
	render(){
		const {id, name, value, author} = this.props
	
		// console.log({author})
		return (
			<div>
			</div>
		);
	};
}
export default Search2;