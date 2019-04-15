import React from 'react';
import Alert2 from './Alert2'
const Alert1 = ({ data, onRouteChange}) => {
	return (
		<div>
			<h1 className = ''>Alert Now</h1>	
			{
				data.map((user, i) =>{
					return (
						<Alert2 
							key ={i}
							_id={data[i]._id}
							id={data[i].id} 
							ch={data[i].ch}
							name={data[i].name} 
							namebook ={data[i].namebook}
							img={data[i].img}
							// brief={data[i].brief}
							onRouteChange={onRouteChange}
						/>
					);
				})
			}
		</div>
	);
}

export default Alert1;