import React from 'react';
import EpList from '../components/ep/EpList';

const BoxEp =({data, onRouteChange}) => {
	return(
		<div>
			<h1>History</h1> 
			<EpList data={data} onRouteChange={onRouteChange}/>
		</div>
	);
}
export default BoxEp;