import React from 'react';
import EpListTop from '../components/ep/EpListTop';


class TopManga extends React.Component{
	constructor(props){
		super(props);
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
		const { onRouteChange } = this.props;
	return(
		<div>
			<h1>Top</h1>
			<EpListTop data={comic} onRouteChange={onRouteChange}/>
		</div>
		);
	}
}
export default TopManga;