import React from 'react';
import EpList from '../components/EpList';

const TopManga =({data}) => {
	return(
		<div>
			<h1>Top Manga</h1>
			<EpList data={data}/>
		</div>
	);
}
export default TopManga;