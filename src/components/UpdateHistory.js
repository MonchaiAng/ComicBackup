import React from 'react';
import Update from '../components/Update';
import BoxEp from '../containers/BoxEp';
import TopManga from '../containers/TopManga';
import Push from '../data/Push';

const UpdateHistory = ({data,history, onRouteChange}) => {
	return (
		<div>
			<table>
				<tr>
					<td valign='top' width='880px'>
						<Update>
							<Push data={data} onRouteChange={onRouteChange}/> 
						</Update>
					</td>
					<td valign='top' width='30opx'>
						<BoxEp data={history} />
						<TopManga/>
					</td>
				</tr>

			</table>
		</div>
	);
};

export default UpdateHistory;