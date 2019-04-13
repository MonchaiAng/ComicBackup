import React, { Component } from 'react';
import Slideshow from './Slideshow';
import UpdateHistory from './UpdateHistory';
import AllEp from '../components/AllEp';
import DropListEpisodes from '../components/dropListEpisodes';
import Update from './Update';
import EpList from '../components/EpList';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sort from './Sort';
import List from './List';
import Search from './Search';

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
			user: {
		       	id: '',
		        name: '',
				email: '',
		        entries: 0,
		        joined: ''
		      },
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


    fetch('http://localhost:3000/history', {		//post history from user
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user: this.props.user
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({history:data})
      this.waithistory();
      this.recommend();
    })
}
waithistory(){
	fetch('http://localhost:3000/history2', {		//find ep from history
      method: 'post',
      headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
        history1: this.state.history
      })
    })
    .then(response => response.json())
    .then(data => {
      this.setState({history2:data})
    })
}
recommend (){
	fetch('http://localhost:3000/recommend', {		//find ep from history
      method: 'post',
      headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
        history1: this.state.history
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

	render(){
		const { isSignedIn, searchfield, data, route, dataEp, idComic, idEp, 
			comic, epcomic, allepcomic, history, history2, history3 } = this.state;
		const { user } = this.props;
		const filteredData = epcomic.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filteredData2 = history2.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		const filteredData3 = history3.filter(detail =>{ // follow date
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		{/*<AllEp data={data[idComic.id]} dataEp={dataEp[idComic.id]} onRouteChange={this.onRouteChange}/>
						*/}

		
		return(
				<div>
					<br/><br/>
					<Search data={comic} value={this.props.value} onRouteChange={this.onRouteChange}/>
					{	
						route === 'home'?
						(
							<div>
								<h1 className ='tc'>Recommended Manga</h1>
								<Update>
									<Slideshow style={{width: '1000px'}} history={filteredData3}/>
								</Update>
								<UpdateHistory data = {filteredData} history={filteredData2} onRouteChange={this.onRouteChange}/>
							</div>
						):route === 'allep'?
						(
							<div>
								<AllEp data={comic[idComic.id]} dataEp={allepcomic} onRouteChange={this.onRouteChange} user ={user}/>
							</div>
						):route === 'ep'?
						(
							<DropListEpisodes data={comic} id={idComic.id} ep={idEp.ch} onRouteChange={this.onRouteChange}/>
						):
							<h1>else</h1>
					}
				</div>
		);
	}
}
export default Home;