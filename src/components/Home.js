import React, { Component } from 'react';
import Slideshow from '../components/slideshow/Slideshow';
import UpdateHistory from './UpdateHistory';
import AllEp from '../components/AllEp';
import DropListEpisodes from '../components/dropdown/DropListEpisodes';
import Update from './Update';
import EpList from '../components/ep/EpList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sort from '../components/sort/Sort';
import Search from './search/Search';

class Home extends Component{
	constructor(props){	
		super(props)
		this.state ={
			// robots: [],
			recommend: '',
			value: '',
      		suggestions: [],
			searchfield: '',
	      	route: 'home',
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

			testidspecific:0
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
	    	console.log("allepcomic")
	    	console.log(data)
	      this.setState({allepcomic:data})
	    })

    }else if(route === 'ep'){
    	console.log("iN EP")
    	this.setState({route: route});
	    this.setState({idEp:id});
	    this.setState({idComic:id_comic})
	   
	    	let ch1 = id.ch
	    	let id1 = id_comic.id 
		    this.gettesthistory(ch1,id1)

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
	 fetch('http://localhost:3000/book', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      this.setState({comic:data})
    })

     fetch('http://localhost:3000/epbook', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      this.setState({epcomic:data})
    })

    //test
    fetch('http://localhost:3000/gethistory', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
	       	email: this.props.user,
      })
	})
	.then(response => response.json())
    .then(data => {
      this.setState({testhistory:data})
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
      this.recommend();
    })

    //end test
    fetch('http://localhost:3000/nohistory', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      this.setState({storeNohistory:data})
    })

}
recommend (){
	fetch('http://localhost:3000/recommend', {		//find ep from history
      method: 'post',
      headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
        history1: this.state.testnumberhistory
      })
    })
    .then(response => response.json())
    .then(data => {
    	this.setState({recommend:data});
    	this.getTypeRecommend();
    })
}
getTypeRecommend (){
	fetch('http://localhost:3000/getTypeRecommend', {		//find ep from history
      method: 'post',
      headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
        recommend: this.state.recommend
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({history3:data})
    })
}
componentWillReceiveProps(nextProps,nextState) {
	this.setState({route: 'home'})
	this.componentWillMount()
}
	render(){
		const { isSignedIn, searchfield, data, route, dataEp, idComic, idEp, 
			comic, epcomic, allepcomic, history, history3, testhistory, storeNohistory, testnumberhistory } = this.state;
		const { user ,enter  } = this.props;
		const filteredData = epcomic.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filteredData3 = history3.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filteredData4 = storeNohistory.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		const size = filteredData3.length
		console.log(testhistory)
		return(
				<div>
					<Search className ="tr" data={comic} value={this.props.value} onRouteChange={this.onRouteChange}/>
					{
						route === 'home'?
						(
							<div>
								<br/>
								<h1 className ='tc'>Recommend</h1>
								<Update>
								{
									size === 1 ?
									(
										<Slideshow style={{width: '1000px'}} history={filteredData3}  onRouteChange={this.onRouteChange}/>
									):
									(
										<Slideshow style={{width: '1000px'}} history={filteredData4}  onRouteChange={this.onRouteChange}/>
									)
								}
								</Update>
								<UpdateHistory data = {filteredData} history={testhistory} onRouteChange={this.onRouteChange}/>
							</div>
						):route === 'allep'?
						(
							<div>
								<br/><br/>
								<AllEp data={comic[idComic.id]} dataEp={allepcomic} history={testnumberhistory} onRouteChange={this.onRouteChange} user ={user}/>
							</div>
						):route === 'ep'?
						(
							<div>
								<br/>
								<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
							</div>
						):
							<h1>else</h1>
					}
				</div>
		);
	}
}
export default Home;