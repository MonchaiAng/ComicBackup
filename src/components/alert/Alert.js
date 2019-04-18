import React, { Component } from 'react';
import Alert1 from './Alert1';
import Update from '../Update';
import DropListEpisodes from '../dropdown/dropListEpisodes';
import AllEp from '../AllEp';
class Alert extends Component{
	constructor(props){	
		super(props)
		this.state={
			comicFavorites:[],
			haveAlert:0,
			route:'sort',
			epAlert:[],
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
		fetch('http://localhost:3000/findFavorites', {		//post history from user
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        email: this.props.user
	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	    	if(data === 0){
	    		console.log(data)
	    		this.setState({haveAlert:0})
	    	}else{
		    	this.setState({comicFavorites:data})
		    	this.nexttofindUpdate()
	    	}
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
	nexttofindUpdate(){
		fetch('http://localhost:3000/findFavoritesUpdate', {		//post history from user
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	      body: JSON.stringify({
	        favoritesComic: this.state.comicFavorites
	      })
	    })
	    .then(response => response.json())
	    .then(data => {
	    	this.setState({EpAlert:data})
	    	this.setState({haveAlert:1})
	    })
	}
	componentWillReceiveProps(nextProps,nextState) {
		this.setState({route: 'sort'});
	}
	render(){
		const { user } = this.props;
		const { comicFavorites, haveAlert, EpAlert,comic, route, idComic, allepcomic, idEp, sortcomic, sort  } = this.state;
		// console.log({comicFavorites})
		console.log("alert")
		console.log(comic[idComic])
		console.log(idComic.id)
		return(
			<div className ="tc">
			<br/><br/>
			{
					haveAlert === 1 && route === 'sort'?
					(
						<Update>
							<Alert1 data={EpAlert} onRouteChange={this.onRouteChange}/> 
						</Update>
					):haveAlert === 1 && route === 'allep'?
					(
						<div>
							<br/><br/><br/>
							<AllEp data={comic[idComic.id]} dataEp={allepcomic} onRouteChange={this.onRouteChange} user ={user}/>
						</div>
					):haveAlert === 1 && route === 'ep'?
					(
						<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
					):
						<h1>No data alert</h1>
				}
			</div>
		);
	}
} 
export default Alert;