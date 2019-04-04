import React from 'react';
import InfoData from '../components/InfoData';
import EpComment from '../components/EpComment';

const AllEp = ({data ,dataEp, onRouteChange}) => {	
	console.log("AllEp")
	console.log({dataEp})
	return (
		<div>
			<InfoData data = {data}/>
			<EpComment data = {data} dataEp = {dataEp} onRouteChange={onRouteChange}/>
		</div>
	);
};

export default AllEp;