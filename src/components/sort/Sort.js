import React,  { Component }  from 'react';
import Update from '../Update';
import Sort2 from './Sort2';
import Search from '../search/Search';
import AllEp from '../AllEp';
import DropListEpisodes from '../dropdown/dropListEpisodes';

class Sort extends Component{
	constructor(props){
		super(props)	
		this.state={
			sortcomic:[],
			recommend: '',
			value: '',
      		suggestions: [],
			searchfield: '',
	      	route: 'sort',
	      	comic:[],
	      	epcomic:[],
	      	allepcomic:[],
	      	history:1,
	      	history1:1,
	      	history2:[],
	      	history3:[],
	      	storehistory:[],
      		isSignedIn: false,
      		idComic:0,
      		idEp:0,
			items: [],
		}
	}
	onRouteChange = (route,id,id_comic,_id) => {
		if(route === 'home'){
			this.setState({route: route});
		}
	    else if(route === 'allep'){
	    	this.setState({route: route});
	    	this.setState({idComic:id_comic})
	    	this.setState({idEp:id})
	    	if(typeof(this.state.idComic) == 'object'){
	    		this.setState({idComic:id_comic.id})
	    	}
		    fetch('http://localhost:3000/allepbook', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
				idComic:id_comic
			  })
		    })
		    .then(response => response.json())
		    .then(data => {
		    	console.log(data)
		      this.setState({allepcomic:data})
		    })

	    }else if(route === 'ep'){
	    	this.setState({route: route});
		    this.setState({idEp:id});
		    this.setState({idComic:id_comic})

		    // let a = {_id}._id._id;
		    // fetch('http://localhost:3000/storehistory', {
		    //   method: 'post',
		    //   headers: {'Content-Type': 'application/json'},
		    //    body: JSON.stringify({
			   //     	user: this.props.user,
			   //      storehistory: a
		    //   })
		    // })
		}
	}
	componentWillMount() {
		fetch('http://localhost:3000/sortbook', {
	      method: 'get',
	      headers: {'Content-Type': 'application/json'},
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({sortcomic:data})
	    })

	    fetch('http://localhost:3000/book', {
	      method: 'get',
	      headers: {'Content-Type': 'application/json'},
	    })
	    .then(response => response.json())
	    .then(data => {
	      this.setState({comic:data})
	    })
	}
	render(){
		const { comic, route, idComic, allepcomic, idEp, sortcomic } = this.state;
		const { user, value } = this.props;
		console.log("sort")
		console.log(this.props.user)
		console.log(this.props.value)
		return(
			<div className="tc">
			<Search data={comic} value={this.props.value} onRouteChange={this.onRouteChange}/>
				{	
					route === 'sort'?
					(
						<Update>
							<Sort2 data={sortcomic} onRouteChange={this.onRouteChange}/> 
						</Update>
					):route === 'allep'?
					(
						<div>
							<br/><br/><br/>
							<AllEp idComic ={idComic} data={comic[idComic]} dataEp={allepcomic} onRouteChange={this.onRouteChange} user ={user}/>
						</div>
					):route === 'ep'?
					(
						<div>
							<br/><br/>	
							<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
						</div>
					):
						<h1>else</h1>
				}
			</div>
		);
	
	}
}
export default Sort;