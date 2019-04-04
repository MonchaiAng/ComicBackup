import React, { Component } from 'react';
import EpList from '../components/EpList';


class TopManga extends React.Component{
	constructor(){
		super();
		this.state ={
			comic:[]
		}
	}
	componentWillMount() {
		 fetch('http://localhost:3000/topmanga', {
	      method: 'get',
	      headers: {'Content-Type': 'application/json'},
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({comic:data})
	    })
	}
	render(){
		const { comic } = this.state;
	return(
		<div>
			<h1>Top Manga</h1>
			<EpList data={comic}/>
		</div>
		);
	}
}
export default TopManga;