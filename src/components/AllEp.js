import React from 'react';
import InfoData from '../components/InfoData';
import EpComment from './ep/EpComment';

const AllEp = ({idComic, data ,dataEp, onRouteChange, user}) => {	
	console.log("allep")
	console.log(idComic)
	console.log(data)
	return (
		<div>
			<br/><br/>
			<InfoData data = {data} user={user} />
			<EpComment data = {data} dataEp = {dataEp} onRouteChange={onRouteChange} email={user}/>
		</div>
	);
};

export default AllEp;