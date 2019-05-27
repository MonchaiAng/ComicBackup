import React,  { Component }  from 'react';
import Update from '../Update';
import Sort2 from './Sort2';
import Search from '../search/Search';
import AllEp from '../AllEp';
import DropListEpisodes from '../dropdown/DropListEpisodes';

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

			testhistory:[],
			teststorehistory:{},
			testnumberhistory:[],
			storeNohistory:[],
		}
	}
	onRouteChange = (route,id,id_comic,_id) => {
		if(route === 'sort'){
			this.setState({route: route});
		}
	    else if(route === 'allep'){
	    	console.log("allep")
	    	console.log(id_comic)
	    	this.setState({route: route});
	    	this.setState({idComic:id_comic})
	    	this.setState({idEp:id})

	    	if(typeof(this.state.idComic) == 'object'){
	    		this.setState({idComic:id_comic.id})
	    	}
	    	if(typeof(id_comic.id) == 'undefined'){
	    		this.setState({idComic:id_comic})
	    	}
	    	console.log(this.state.idComic)
		    fetch('http://localhost:3000/allepbook', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
				idComic:id_comic
			  })
		    })
		    .then(response => response.json())
		    .then(data => {
		    	console.log("data")
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
		// console.log("addhistory")
		// fetch('http://localhost:3000/book', {
	 //      method: 'get',
	 //      headers: {'Content-Type': 'application/json'},
	 //    })
	 //    .then(response => response.json())
	 //    .then(data => {
	 //      this.setState({comic:data})
	 //    })

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
	componentWillReceiveProps(nextProps,nextState) {
		this.setState({route: 'sort'});
	}
	render(){
		const { comic, route, idComic, allepcomic, idEp, sortcomic, testnumberhistory } = this.state;
		const { user, value } = this.props;
		// console.log("sort")
		// console.log(this.props.user)
		// console.log(this.props.value)
		// console.log(testnumberhistory)

		return(
				<div className="tr">
					<Search data={comic} value={this.props.value} onRouteChange={this.onRouteChange}/>
						<div className="tc">
							{	
								route === 'sort'?
								(
									<Update>
										<Sort2 data={sortcomic} onRouteChange={this.onRouteChange}/> 
									</Update>
								):route === 'allep' && typeof(idComic)=='object'?
								(
									<div>
										<br/><br/>
										<AllEp idComic ={idComic} data={comic[idComic.id]} dataEp={allepcomic} history= {testnumberhistory} onRouteChange={this.onRouteChange} user ={user}/>
									</div>
								):route === 'allep'?
								(
									<div>
										<br/><br/>
										<AllEp idComic ={idComic} data={comic[idComic]} dataEp={allepcomic} history= {testnumberhistory} onRouteChange={this.onRouteChange} user ={user}/>
									</div>
								):
								route === 'ep'?
								(
									<div>
										<br/>
										<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
									</div>
								):
									<h1>else</h1>
							}
						</div>
				</div>
		);
	
	}
}
export default Sort;