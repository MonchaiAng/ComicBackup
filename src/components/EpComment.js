import React from 'react';
import Epdata from './EpData';
import Comment from './Comment';

const EpComment = ({data}) => {
		return (
			<div>
				<tr>
					<td>
						<Epdata data = {data}/>
					</td>
					<td>
						<Comment/>
					</td>
				</tr>
			</div>
	);
};

export default EpComment;