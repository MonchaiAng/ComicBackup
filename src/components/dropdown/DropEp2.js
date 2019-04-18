import React from 'react';

class DropEp2 extends React.Component {
	constructor(props) {
		super(props)
  	}
// =({name, count, onRouteChange}) => {
	// console.log({name})
	onClickSelectComic({id, ch}){
		console.log("click")
		console.log(id)
		console.log(ch)
  		// let ch = 1
  		// let id = _id
  		this.props.onRouteChange('ep',{ch},{id});
  	}
  	render(){
  		const { count, name, id , ch } = this.props
  		// console.log("ตอน")
  		// console.log(id)
  		// console.log(ch)
		return(
			<div>
				<a onClick={() => this.onClickSelectComic({ id, ch })}>Ep.{count}:{name}</a>
			</div>
		);
	}
}
export default DropEp2;