import React from 'react';

class Sort3 extends React.Component {
	constructor(props) {
		super(props);
  	}
  	onClickAllEp({_id}){
  		this.props.onRouteChange('allep',0,_id);
  	}
  	render(){
  		const { _id, name ,img ,brief } = this.props;
		return(		//decorate
			<div className ='tc asd dib br3 pa2 ma2 grow bw2 shadow-5 container' style = {{ width:'200px', height:'280px'}}>	
				<img alt='comics' src= {img} width = '185px' height='265px' />
				<p>{name}</p>
					<div>
						<div onClick={() => this.onClickAllEp({_id})}>
							<div className="overlay">					
							    <div className="text">
							    	 Short {name} 	
							    </div>
							</div>			 
						</div>	
		      		</div>	
			</div>
		);
	}
}
export default Sort3;