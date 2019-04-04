import React from 'react';
import Page from '../components/Page';
class PageList extends React.Component {
	constructor(props) {
		super(props);
  	}
  	render(){
  		const { src } = this.props;
		return(	
			<div>	
				{
					src.map((user, i) =>{
						return (
							<Page 
								key ={i}
								src={src[i]} 
							/>
						);
					})
				}
			</div>
		);
	}
}
export default PageList;