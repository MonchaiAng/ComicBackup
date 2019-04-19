import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import Sort from "../sort/Sort";
import Alert from "../alert/Alert";
import AllEp from "../AllEp";
import Profile from '../Profile';
import './Navigation.css';

import Autosuggest from 'react-autosuggest';


	const languages = [
	  {
	    name: 'Nidome',
	  },
	  {
	    name: 'Martial',
	  },
	  {
	    name: 'Dr. Stone',
	  },
	  {
	    name: 'Solo Leveling',
	  },
	  {
	    name: 'Eden zero',
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




class Navigation extends Component{
	constructor(props){	
		super(props)
			this.state ={
				// robots: [],
				recommend: '',
				value: '',
	      		suggestions: [],
				searchfield: '',
				nameComic:[],
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
	componentWillMount() {
		// fetch('http://localhost:3000/getname', {
	 //      method: 'get',
	 //      headers: {'Content-Type': 'application/json'},
	 //    })
	 //    .then(response => response.json())
	 //    .then(data => {
	 //      this.setState({nameComic:data})
	 //    })
	}
	componentDidMount() {

		// fetch('http://localhost:3000/book', {
	 //      method: 'get',
	 //      headers: {'Content-Type': 'application/json'},
	 //    })
	 //    .then(response => response.json())
	 //    .then(data => {
	 //    	console.log({data})
	 //    	console.log(55555555)
	 //      this.setState({comic:data})
	 //    })
	}	
	render(){
		const { value, suggestions, nameComic } = this.state;
	    const inputProps = {
	      placeholder: "search comics",
	      value,
	      onChange: this.onChange
	    };
		const { comic } =this.props;

		return (
			<div className='pa2 tr'>
				<Router>
					<div>
						<ul>
						  <li className='li_Na'>
						  	<Link to = "" className= 'asd f3'>Comic E-book</Link>
						  </li>
						  <li className='li_Na'>
						  	<Link to ="/Sort" className= 'f3'>Sort</Link>
						  </li>
						   <li className='li_Na'>
						  	<Link to ="/Alert" className= 'f3'>Alert</Link>
						  </li>
						</ul>
						<Autosuggest 
					        suggestions={suggestions}
					        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					        getSuggestionValue={getSuggestionValue}
					        renderSuggestion={renderSuggestion}
					        inputProps={inputProps} 
						/>
				      	<Route exact={true} path="/" render={(props) => <Home {...props} user={comic} value={value}/>}/>
				      	{/*<Route exact={true} component={Home}/>*/}
				      	<Route path="/sort" render={(props) => <Sort {...props} user={comic} value={value}/>}/>
				      	<Route path="/alert" render={(props) => <Alert {...props} user={comic}/>}/>
				    </div>
				</Router>
			</div>
		);
	}	
}
export default Navigation;	