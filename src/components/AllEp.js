import React from 'react';
import InfoData from '../components/InfoData';
import EpComment from './ep/EpComment';

const AllEp = ({ idComic, data , dataEp, history, onRouteChange, user }) => {	
	return (
		<div>
			<InfoData data = {data} user={user} />
			<EpComment data = {data} dataEp = {dataEp} history={history} onRouteChange={onRouteChange} email={user}/>
		</div>
	);
};

export default AllEp;