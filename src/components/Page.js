import React from 'react';

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			size:3
		}
  	}
  	onClickPage(){
  		this.setState({size: 1});
  	}
  	render(){
  	const { id ,ep } = this.props;
  	const { size } = this.state;
  	console.log("id"+{id})
  	console.log("ep"+{ep})
  	console.log("size"+{size})
	// let b = JSON.stringify({id}.id)
	// b = JSON.parse(b);
	// let c = JSON.stringify({ep}.ep)
	// let a = b+'_'+c+'_';
	// var src = new Array({size}.size);
	// for(let i=1;i<={size}.size;i++){
	// 	let src_require =(a+i+'.svg').toString();
	// 	src[i-1] = require('../img/'+src_require);
	// }
		return(		//decorate
			<div>	
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
				<img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/02_141748_1366_1961.webp"  height="900px"/>
				<p className="page">1/30</p>
				<img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/03_425726_2732_1961.webp"  height="900px"/>
			    <p className="page">2/30</p>
			    <img src="https://xy-10-w.mangapark.net/9a/40/5c503ecb9264df59a25f04a9/04_206024_1366_1961.webp"  height="900px"/>
			    <p className="page">3/30</p>
			    
			</div>
		);
	}
}
export default Page;