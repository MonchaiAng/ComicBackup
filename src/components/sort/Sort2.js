import React from 'react';
import Sort3 from './Sort3';

const Sort2 = ({ data, onRouteChange }) => {
	return (
		<div>
			<br/><br/><br/>
			<h1>Sort</h1>
			{
				data.map((user, i) =>{
					return (
						<Sort3 
							key ={i}
							_id={data[i]._id}
							tag={data[i].tag}
							name={data[i].name} 
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

export default Sort2;