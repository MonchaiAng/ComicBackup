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
							_id={data[i]._id}
							id={data[i].id} 
							ch={data[i].ch}
							name={data[i].name} 
							namebook ={data[i].namebook}
							img={data[i].img}
							brief={data[i].brief}
							onRouteChange={onRouteChange}
						/>
					);
				})
			}
		</div>
	);
}

export default Push;