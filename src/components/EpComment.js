import React from 'react';
import Epdata from './EpData';
import Comment from './Comment';

const EpComment = ({data, dataEp, onRouteChange}) => {
		return (
			<div>
				<tr>
					<td>
						<Epdata data = {data} dataEp = {dataEp} onRouteChange={onRouteChange}/>
					</td>
					<td>
						<Comment/>
					</td>
				</tr>
			</div>
	);
};

export default EpComment;