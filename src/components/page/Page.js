import React from 'react';
import Allpages from './Allpages';
import Update from '../Update'
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			allpages:{},
			size:0
		}
  	}
  	// onClickPage(){
  	// 	this.setState({size: 1});
  	// }
  	componentWillMount() {
	  	// var abc = "0_1_1.svg"
	  	// const a = require("../img/"+abc)
	  	
	  	// const b = require(test);
	  	// const c = require('../img/0_1_3.svg');
	  	// const { id ,ep } = this.props;
	  	// const { size } = this.state;
	  	// console.log("page")
	  	// console.log(ep)
	  	// console.log(id)

		fetch('http://localhost:3000/getpages', {
	      method: 'post',
	      headers: {'Content-Type': 'application/json'},
	       body: JSON.stringify({
		       	id:this.props.id,
		       	ep:this.props.ep
	      })
		})
		.then(response => response.json())
	    .then(data => {
	      this.setState({allpages:data})
	      this.setState({size:this.state.allpages.length})
	    })
	}
	componentWillReceiveProps() {
		this.componentWillMount()
	}
  	render(){
  		const { allpages, size } = this.state
		// console.log("Page")
		// console.log(this.props.id)
		// console.log(this.props.ep)
  // 		var src = new Array(allpages.length)
		// for(let i=0;i<allpages.length;i++){
  // 			src[i] = require('../img/'+allpages[i]);
  // 		}

		return(		//decorate
			<div>	
				<Update>
					<Allpages data={allpages} size={size}/>
				</Update>
				{/*<h3 align="center" className="Link_name" onClick={() => this.onClickPage()}>One Page</h3>
				{
					size===1?
					(
					<div>
						
			   			<p className="page">1/30</p>
			   		</div>
					):
					<div>
					    <p className="page">1/30</p>
					    <p className="page">2/30</p>
					    <p className="page">3/30</p>
					</div>
				}*/}
				<br/>
				{/*<img src={src[0]}/>*/}
				{/*<img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/02_141748_1366_1961.webp"  height="900px"/>
				<p className="page">1/30</p>
				<img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/03_425726_2732_1961.webp"  height="900px"/>
			    <p className="page">2/30</p>
			    <img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/04_206024_1366_1961.webp"  height="900px"/>
			    <p className="page">3/30</p>*/}
			    
			</div>
		);
	}
}
export default Page;