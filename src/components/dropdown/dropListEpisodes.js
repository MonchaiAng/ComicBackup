import React from 'react';
import './dropListEpisodes.css';
import Page from '../Page';
import DropComic from './DropComic';

class dropListEpisodes extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			comic:{},
			namebook:'',
			nameEpisode:'',
			nameep:[]
		}
  	}
  	onClickAllEp({ep},{id}){
  		this.props.onRouteChange('allep',{ep},{id});
  	}
  	componentWillMount() {
		 fetch('http://localhost:3000/ep', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        ch: this.props.ep,
	        id: this.props.id

	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({comic:data})
	      this.setState({namebook:data.namebook})
	      this.setState({nameEpisode:data.name})
	    })

	    fetch('http://localhost:3000/epother', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	      	 id: this.props.id
	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	     	this.setState({nameep:data})
	    })
	}
	componentWillReceiveProps(nextProps) {
		fetch('http://localhost:3000/ep', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        ch: nextProps.ep,
	        id: nextProps.id

	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({comic:data})
	      this.setState({namebook:data.namebook})
	      this.setState({nameEpisode:data.name})
	    })

	    fetch('http://localhost:3000/epother', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	      	 id: nextProps.id
	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	     	this.setState({nameep:data})
	    })
	}
  	render(){
		const { id , ep, data } = this.props;
		const { nameep, namebook, nameEpisode } = this.state;
	    return(
	    	<div >
		    	<div className="tl all">
		    		<br/>
		    		<h1 className="tl Link_name" onClick={() => this.onClickAllEp({ep},{id})}>{namebook}</h1>	
		    		<DropComic id={id} ep={ep} data={data} nameep={nameep} namebook={namebook} 
		    		nameEpisode={nameEpisode} onRouteChange={this.props.onRouteChange} />
				</div>
				<br/>
				<div className="tc">
					<Page id={id} ep={ep}/>
				</div>
			</div>
	    );
	}
}
export default dropListEpisodes;