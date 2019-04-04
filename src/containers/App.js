import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import Navigation2 from '../components/Navigation2';
import Signin from '../Signin/Signin';
import Register from '../Register/Register';
import Slideshow from '../components/Slideshow';
import UpdateHistory from '../components/UpdateHistory';
import DropListEpisodes from '../components/dropListEpisodes';
import AllEp from '../components/AllEp';
import Home from '../components/Home';
import { createBrowserHistory } from 'history';
import './App.css';


// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import InfoData from '../components/InfoData';
// import EpComment from '../components/EpComment';
// import Push from '../data/Push';
// import Autosuggest from 'react-autosuggest';
// import Scroll from '../components/Scroll';
// import SearchBox from '../components/SearchBox';
// import CardList from '../components/CardList';
// import Sort from '../components/Sort';

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
	      	route: 'signin',
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
		// fetch('http://localhost:3000')
		// 	.then(response => response.text())
		// 	.then(console.log)
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
		// const filteredData = data.filter(detail =>{
		// 	return detail.name.toLowerCase().includes(searchfield.toLowerCase());
		// })
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
	      	{/*<Navigation/>
<SearchBox searchChange={this.onSearchChange}/>
	      	*/}
	      	{/*<Autosuggest 
		        suggestions={suggestions}
		        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
		        getSuggestionValue={getSuggestionValue}
		        renderSuggestion={renderSuggestion}
		        inputProps={inputProps} 
			/>*/}
	        {
	        	(
	             route === 'signin'
	             ? <div>
             	      <Particles className='particles'
			             params={particlesOptions}
		               />
	             		{/*<Navigation2 isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>*/}
	             		<Signin isSignedIn={isSignedIn} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
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