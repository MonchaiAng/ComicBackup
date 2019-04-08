import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Sort from "./Sort";
import List from "./List";
import AllEp from "./AllEp";
import Profile from '../components/Profile';
import './Navigation.css';

import Autosuggest from 'react-autosuggest';


	const languages = [
	  {
	    name: 'Nidome',
	    year: 1972
	  },
	  {
	    name: 'Martial',
	    year: 1972
	  },
	  {
	    name: 'Dr. Stone',
	    year: 1972
	  },
	  {
	    name: 'Solo Leveling',
	    year: 2000
	  },
	  {
	    name: 'Eden zero',
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




class Navigation extends Component{
	constructor(props){	
		super(props)
			this.state ={
				// robots: [],
				recommend: '',
				value: '',
	      		suggestions: [],
				searchfield: '',
				nameComic:[]
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
		const { value, suggestions } = this.state;
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
				      	<Route path="/sort" component={Sort}/>
				    </div>
				</Router>
			</div>
		);
	}	
}
export default Navigation;	