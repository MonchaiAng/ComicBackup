import React from 'react';
import Search2 from './Search2';

const Search = ({data, value, onRouteChange}) => {	
	return (
		<div>
			<br/>
			{
				data.map((user, i) =>{
					return (
						<Search2 
							key ={i}
							id = {data[i]._id}
							name={data[i].name} 
							value = {value}
							author = {data[i].author}
							onRouteChange = {onRouteChange}
							// img={data[i].img}
							// brief={data[i].brief}
							// onRouteChange={onRouteChange}
						/>
					);
				})
			}
		</div>
	);
};

export default Search;