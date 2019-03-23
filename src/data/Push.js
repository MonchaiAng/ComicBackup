import React from 'react';
import Card from '../components/Card';

const Push = ({ data, onRouteChange}) => {
	return (
		<div>
			<h1 className = ''>New Update</h1>	
			{
				data.map((user, i) =>{
					return (
						<Card 
							key ={i}
							id={data[i].id} 
							name={data[i].name} 
							img={data[i].img}
							onRouteChange={onRouteChange}
						/>
					);
				})
			}
		</div>
	);
}

export default Push;