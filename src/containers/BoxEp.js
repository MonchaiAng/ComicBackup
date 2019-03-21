import React from 'react';
import EpList from '../components/EpList';

const BoxEp =({data}) => {
	return(
		<div>
			<h1>History</h1>
			<EpList data={data}/>
		</div>
	);
}
export default BoxEp;