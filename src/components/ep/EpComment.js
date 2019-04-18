import React from 'react';
import Epdata from './EpData';
import Comment from '../Comment';

const EpComment = ({data, dataEp, onRouteChange, email}) => {
		return (
			<div>
				<tbody>
					<tr>
						<td>
							<Epdata data = {data} dataEp = {dataEp} onRouteChange={onRouteChange}/>
						</td>
						<td>
							<Comment data={data} email={email} onRouteChange={onRouteChange}/>
						</td>
					</tr>
				</tbody>
			</div>
	);
};

export default EpComment;