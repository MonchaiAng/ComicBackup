import React, { Component } from 'react';
// import CardList from '../components/CardList';
import Particles from 'react-particles-js';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import Navigation from '../components/Navigation';
import Navigation2 from '../components/Navigation2';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Slideshow from '../components/Slideshow';
// import Push from '../data/Push';
import UpdateHistory from '../components/UpdateHistory';
import Autosuggest from 'react-autosuggest';
import DropListEpisodes from '../components/dropListEpisodes';
// import InfoData from '../components/InfoData';
// import EpComment from '../components/EpComment';
import AllEp from '../components/AllEp';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../components/Home';
import Sort from '../components/Sort';
import { createBrowserHistory } from 'history';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
const languages = [
  {
    name: 'One piece',
    year: 1972
  },
  {
    name: 'Solo Leveling',
    year: 2000
  },
  {
    name: 'Dr.Stone',
    year: 2000
  },
];
function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}
class App extends Component{
	constructor(){
		super()
		this.state ={
			// robots: [],
			value: '',
      		suggestions: [],
			searchfield: '',
	      	route: 'home',
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
			data: [
				{
					id: '0',
					img: 'http://www.box-manga.com/uploads/833e8e71b5e96aa3c084714c7a9b45c4.jpg',
					name: 'Solo Leveling',
					author:'author solo',
					artist:'author solo',
					view: '20032',
					status: 'Ongoing',
					tag: 'Drama',
					brief: 'short Solo Lorem ipsum is a pseudo-Latin text used in web design asjndanska sndoansdnas akdnoansdlnasn dnasasnd onncjans jndasnd n kdnasndn sdna Lorem ipsum is a pseudo-Latin text used in web design asjndanska sndoansdnas akdnoansdlnasn dnasasnd onncjans jndasnd n kdnasndn sdna',
				},
				{
					id: '1',
					img: 'http://www.box-manga.com/uploads/c28b63deddae3bc2859647c6e9d43af3.jpg',
					name: 'Nidome',
					author:'author nidome',
					artist:'author nidome',
					view: '34332',
					status: 'Ongoing',
					tag: 'Comedy',
					brief: 'short Nidome',
				},
				{
					id: '2',
					img: 'http://www.box-manga.com/uploads/4c3b75c14ee541fdd7f565a6380fea94.jpg',
					name: 'Dr. Stone',
					author:'author Dr. stone',
					artist:'author Dr. stone',
					view: '23434',
					status: 'Ongoing',
					tag: 'Drama',
					brief: 'short Dr. Stone',
				},
				{
					id: '3',
					img: 'http://www.box-manga.com/uploads/14ca8c2ff1fcb291469699cbef9a2edf.jpg',
					name: 'Eden zero',
					author:'author Eden zero',
					artist:'author Eden zero',
					view: '466354',
					status: 'Ongoing',
					tag: 'horror',
					brief: 'short Eden zero',
				},
				{
					id: '4',
					img: 'http://www.box-manga.com/uploads/1f77b5e2795c952396f9dce158fe95f9.jpg',
					name: 'Martial',
					author:'author martial',
					artist:'author martial',
					view: '231423',
					status: 'Ongoing',
					tag: 'Drama',
					brief: 'short Martial',
				},
			],
			dataEp: [
			[
				{
					ch: 1,
					img: 'http://www.box-manga.com/uploads/833e8e71b5e96aa3c084714c7a9b45c4.jpg',
					date: '01 Mar 2562',
					name: 'Start',
				},
				{
					ch: 2,
					img: 'http://www.box-manga.com/uploads/833e8e71b5e96aa3c084714c7a9b45c4.jpg',
					date: '02 Mar 2562',
					name: 'middle',
				},
				{
					ch: 3,
					img: 'http://www.box-manga.com/uploads/833e8e71b5e96aa3c084714c7a9b45c4.jpg',
					date: '03 Mar 2562',
					name: 'End',
				},
			],
			[
				{
					ch: 1,
					img: 'http://www.box-manga.com/uploads/c28b63deddae3bc2859647c6e9d43af3.jpg',
					date: '01 Mar 2562',
					name: 'Start',
				},
				{
					ch: 2,
					img: 'http://www.box-manga.com/uploads/c28b63deddae3bc2859647c6e9d43af3.jpg',
					date: '02 Mar 2562',
					name: 'middle',
				},
				{
					ch: 3,
					img: 'http://www.box-manga.com/uploads/c28b63deddae3bc2859647c6e9d43af3.jpg',
					date: '03 Mar 2562',
					name: 'End',
				},
			],
		],
	}
}


	loadUser = (data) => {
	    this.setState({user: {
	      id: data.id,
	      name: data.name,
		  email: data.email,
	      entries: data.entries,
	      joined: data.joined
	    }})
	}
	
	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users => this.setState({robots: users}))
		fetch('http://localhost:3000')
			.then(response => response.text())
			.then(console.log)
	}

	onSearchChange = (event) => {		
		this.setState({ searchfield: event.target.value})
	}
	//route signin and signup
	onRouteChange = (route,id) => {
	    if (route === 'signout') {
	      this.setState({isSignedIn: false})
	    } else if (route === 'home') {
	      this.setState({isSignedIn: true})
	    }
	    this.setState({route: route});
	    if(route === 'allep'){
	    	this.setState({idComic:id})
	    }else if(route === 'ep'){
	    	this.setState({idEp:id})
	    }

    }

	  onChange = (event, { newValue, method }) => {
	    this.setState({
	      value: newValue
	    });
	  };
	  
	  onSuggestionsFetchRequested = ({ value }) => {
	    this.setState({
	      suggestions: getSuggestions(value)
	    });
	  };

	  onSuggestionsClearRequested = () => {
	    this.setState({
	      suggestions: []
	    });
	  };
	render() {		
		
		const { isSignedIn, searchfield, data, route, dataEp, idComic, idEp } = this.state;
		// const filteredRobots = robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		// })
		const filteredData = data.filter(detail =>{
			return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		const { value, suggestions } = this.state;
	    const inputProps = {
	      placeholder: "search comics",
	      value,
	      onChange: this.onChange
	    };
	    const history = createBrowserHistory();
	    const location = history.location;

		// Listen for changes to the current location.
		const unlisten = history.listen((location, action) => {
		  // location is an object like window.location
		  console.log(action, location.pathname, location.state);
		});
		return(
	      <div>   
	      	<Navigation/>
	      	<Autosuggest 
		        suggestions={suggestions}
		        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
		        getSuggestionValue={getSuggestionValue}
		        renderSuggestion={renderSuggestion}
		        inputProps={inputProps} 
			/>
	        { route === 'home'?
				(
					<div>
						{/*<SearchBox searchChange={this.onSearchChange}/>*/}
					    <br/><br/><br/><br/> 
						<h1 className ='tc'>Recommendation</h1>
						<Slideshow style={{width: '1000px'}}/>
						<UpdateHistory data = {filteredData} onRouteChange={this.onRouteChange}/>
					</div>
				)
	        	:route === 'allep'?
				(
					<div>
					        <br/><br/><br/><br/> 
						<AllEp data={data[idComic.id]} dataEp={dataEp[idComic.id]} onRouteChange={this.onRouteChange}/>
					</div>
				)
				:route === 'ep'?
				(
					<div>
						<DropListEpisodes id={idComic.id} ep={idEp.ch}/>
					</div>
				)
				:
	        	(
	             route === 'signin'
	             ? <div>
             	      <Particles className='particles'
			             params={particlesOptions}
		               />
	             		<Navigation2 isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
	             		<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
	             	</div>
	             : 
	             	<div>
	             	<Particles className='particles'
			             params={particlesOptions}
		               />
			             <Navigation2 isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
			             <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
		            </div>
	            )
	        }
	      </div>
	    );
	}
}


export default App;