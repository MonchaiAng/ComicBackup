import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import Sort from "../sort/Sort";
import Alert from "../alert/Alert";
import AllEp from "../AllEp";
import Profile from '../Profile';
import './Navigation.css';
import Bell from '../../img/bell.svg'
import Autosuggest from 'react-autosuggest';
import Search from '../search/Search';

	const languages = [
	  {
	    name: 'Fantasia tales',
	  },
	  {
	    name: 'Fate of Destiny',
	  },
	  {
	    name: 'Hele x Buster',
	  },
	  {
	    name: 'Idol Fantasy',
	  },
	  {
	    name: 'Kisune no miko',
	  },
	  {
	    name: 'Zero legendary',
	  },
	  {
	    name: 'Tales of tomorrow',
	  },
	  {
	    name: 'World of music',
	  },
	  {
	    name: 'Sora no hikari',
	  },
	  {
	    name: 'SSS online',
	  },
	  {
	    name: 'Night of star',
	  },
	  {
	    name: 'School of Love',
	  },
	  {
	    name: 'Miko Maiden',
	  },
	  {
	    name: 'Memory of heart',
	  },
	  {
	    name: 'Majo no monogatari',
	  },
	  {
	    name: 'Knight of flame',
	  },
	  //author
	  {
	    name: 'Jang sung-lak',
	  },
	  {
	    name: 'JUJU',
	  },
	  {
	    name: 'author Dr. stone',
	  },
	  {
	    name: 'author Eden zero',
	  },
	  {
	    name: 'author martial',
	  },
	  {
	    name: 'Monchai',
	  },
	  {
	    name: 'Nattapass',
	  },
	  {
	    name: 'Minus Jung',
	  },
	  {
	    name: 'Cookies',
	  },
	  {
	    name: 'Nami',
	  },
	  {
	    name: 'Namba',
	  },
	  {
	    name: 'Takaeshi',
	  },
	  {
	    name: 'Kenkung',
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
				comic:[],
				enter: '',
			}
	}

	onChange = (event, { newValue, method }) => {
	    this.setState({
	      value: newValue
	    });
	    this.setState({enter:''})
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

	onEnter = (event) =>{
		var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	      this.setState({enter:'enter'})
	    }
	}

	refreshPage = () =>{ 
    	window.location.reload(); 
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
		const { value, suggestions, nameComic, enter } = this.state;
		const { comic, onChange } =this.props;
	    const inputProps = {
	      placeholder: "search comics",
	      value,
	      onChange: this.onChange,
	      onKeyPress:this.onEnter
	    };
		

		return (
			<div className='pa2 tr fix_div'>
				<Router>
					<div >
						<ul>
						  <li className='li_Na'>
						  	<Link to = "/" className= 'asd f3'>Comic E-book</Link>
						  </li>
						  <li className='li_Na'>
						  	<Link to ="/Sort" className= 'f3'>Sort</Link>
						  </li>
						   <li className='li_Na'>
						  	<Link to ="/Alert" className= 'f3'><img alt='comics' 
						  	src= {Bell} 
						  	width = '33px' height='33px'/></Link>
						  </li>
						  <li className='li_Na'>
						   <a href="http://localhost:3001/" className='f3'>Logout</a>
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
				      	<Route exact={true} path="/" render={(props) => <Home {...props} user={comic} value={value} enter={enter}/>}/>
				      	{/*<Route exact={true} component={Home}/>*/}
				      	<Route path="/sort" render={(props) => <Sort {...props} user={comic} value={value}/>}/>
				      	<Route path="/alert" render={(props) => <Alert {...props} user={comic} value={value}/>}/>
				    </div>
				</Router>
			</div>
		);
	}	
}
export default Navigation;	