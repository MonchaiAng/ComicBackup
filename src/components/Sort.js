import React,  { Component }  from 'react';
import Update from './Update';
import Sort2 from './Sort2';

class Sort extends Component{
	constructor(props){
		super(props)	
		this.state={
			comic:[]
		}
	}
	componentWillMount() {
		fetch('http://localhost:3000/sortbook', {
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
			<div className="tc">
				<Update>
					<Sort2 data={comic}/> 
				</Update>
			</div>
		);
	
	}
}
export default Sort;