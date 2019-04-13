import React from 'react';
import Epdata from './EpData';
import Comment from './Comment';

const EpComment = ({data, dataEp, onRouteChange, email}) => {
		return (
			<div>
				<tr>
					<td>
						<Epdata data = {data} dataEp = {dataEp} onRouteChange={onRouteChange}/>
					</td>
					<td>
						<Comment data={data} email={email}/>
					</td>
				</tr>
			</div>
	);
};

export default EpComment;