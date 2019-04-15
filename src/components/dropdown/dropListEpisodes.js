import React from 'react';
import './dropListEpisodes.css';
import Page from '../Page';
import DropEp from './DropEp';
import DropComic from './DropComic';
// import logo from '../img/0_1_1.svg';	
// import logo1 from '../img/0_1_2.svg';	
// import logo2 from '../img/0_1_3.svg';
// var imageName = require('../img/page1.svg')
let dir = '../img';

// const dropListEpisodes = ({id, ep}) => {
class dropListEpisodes extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			comic:{},
			namebook:'',
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

  	render(){
	const { id , ep, data } = this.props;
	const { nameep, namebook } = this.state;
    return(
    	<div >
	    	<div class="tl all">
	    		<br/>
	    		<h1 className="tl Link_name" onClick={() => this.onClickAllEp({ep},{id})}>{namebook}</h1>	
	    		<DropComic id={id} ep={ep} data={data} nameep={nameep} onRouteChange={this.props.onRouteChange}/>
			</div>

			<div className="tc">
				<Page id={id} ep={ep}/>
			</div>
		</div>
    );
	};
}
export default dropListEpisodes;