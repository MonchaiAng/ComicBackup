import React, { Component } from 'react';
import Alert1 from './Alert1';
import Update from '../Update';
import DropListEpisodes from '../dropdown/DropListEpisodes';
import AllEp from '../AllEp';
import Search from '../search/Search'
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

			testhistory:[],
			teststorehistory:{},
			testnumberhistory:[],
			storeNohistory:[],
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

		    let ch1 = id.ch
	    	let id1 = id_comic.id 
		    this.gettesthistory(ch1,id1)
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
	gettesthistory = (ch, id) =>{
	    fetch('http://localhost:3000/setep', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		       body: JSON.stringify({
			        ch: ch,
			        id: id
		      })
		    })
		    .then(response => response.json())
		    .then(data => {
		    	// console.log(data)
		    	this.setState({testidspecific:data._id})
		    	this.setState({teststorehistory:data})
		    	this.addhistory()
			    this.addview()
		})
	}
	addhistory = () =>{
		console.log(this.state.teststorehistory)
		fetch('http://localhost:3000/addhistory', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		       body: JSON.stringify({
			       	email: this.props.user,
			        idSpecific: this.state.testidspecific,
			        test:this.state.teststorehistory
		      })
		})
		.then(response => response.json())
		.then(data => {
		    	console.log(data)
		})
	}
	addview = () =>{
		fetch('http://localhost:3000/addview', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		       body: JSON.stringify({
			       	id:this.state.idComic.id
		      })
		})
		.then(response => response.json())
		.then(data => {
		    	console.log(data)
		})
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

	    fetch('http://localhost:3000/getnumberhistory', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	       body: JSON.stringify({
		       	email: this.props.user,
	      })
		})
		.then(response => response.json())
	    .then(data => {
	      this.setState({testnumberhistory:data})
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
		this.componentWillMount();
	}
	render(){
		const { user } = this.props;
		const { comicFavorites, haveAlert, EpAlert,comic, route, idComic, allepcomic, idEp, sortcomic, sort, testnumberhistory  } = this.state;
		return(
			<div className ="tr">
				<Search data={comic} value={this.props.value} onRouteChange={this.onRouteChange}/>
				<div className = "tc">
				
				{
						haveAlert === 1 && route === 'sort'?
						(
							<Update>
								<br/>
								<Alert1 data={EpAlert} onRouteChange={this.onRouteChange}/> 
							</Update>
						):haveAlert === 1 && route === 'allep'?
						(
							<div>
								<br/><br/>
								<AllEp data={comic[idComic.id]} dataEp={allepcomic} history={testnumberhistory} onRouteChange={this.onRouteChange} user ={user}/>
							</div>
						):haveAlert === 1 && route === 'ep'?
						(
							<div>
								<br/>
								<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
							</div>
						):
							<div>
								<br/>
								<h1>No data alert</h1>
							</div>
				}
				</div>
			</div>
		);
	}
} 
export default Alert;