import React from 'react';
import Epdata from './EpData';
import Comment from '../Comment';

const EpComment = ({data, dataEp, history, onRouteChange, email}) => {
		return (
			<div>
				<tbody>
					<tr>
						<td valign="top">
							<Epdata data = {data} dataEp = {dataEp} history={history} onRouteChange={onRouteChange}/>
						</td>
						<td valign="top">
							<Comment data={data} email={email} onRouteChange={onRouteChange}/>
						</td>
					</tr>
				</tbody>
			</div>
	);
};

export default EpComment;