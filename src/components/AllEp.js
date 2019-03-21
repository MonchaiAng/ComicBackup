import React from 'react';
import InfoData from '../components/InfoData';
import EpComment from '../components/EpComment';

const AllEp = ({data ,dataEp}) => {
	return (
		<div>
			<InfoData data = {data}/>
			<EpComment data = {dataEp}/>
		</div>
	);
};

export default AllEp;