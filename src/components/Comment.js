import React from 'react';

const Comment =() =>{
	return(	
		<div className = 'ma4' >
			<h1>Comment</h1>
			<div>
				<tr>
					<td width='300px' className='tr'>
						<textarea rows="4" cols="45"></textarea>
						<button>Post</button>
					</td>
				</tr>
			</div>
		</div>
	);
}
export default Comment;