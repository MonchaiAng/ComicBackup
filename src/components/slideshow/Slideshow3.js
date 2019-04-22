import React from 'react';
import './Slideshow.css';

class Slideshow3 extends React.Component {
// =({id, namebook, imgrec}) => {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({id}){
  		let ch = 1
  		this.props.onRouteChange('allep',{ch},{id});
  	}
  	render(){
  		const { id, namebook, imgrec} = this.props
  		const a = require('../../img/'+imgrec);
		return(
			<div className='table_div cursor' onClick={() => this.onClickAllEp({id})}>
			  <h1>{namebook}</h1>
			  <div className="asd dib br3 pa2 ma2 grow bw2 shadow-5 container">
	          	<img alt = {namebook} src={a} width = '520px' height='310px'/>
	          </div>
			</div>
		);
	}
}
export default Slideshow3;