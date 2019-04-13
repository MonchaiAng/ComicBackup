import React from 'react';
import ShowComment2 from './ShowComment2';

const ShowComment = ({ data }) => {
	console.log("1111111111111111")
	console.log({data})
	return (
		<div>
			{
				data.map((user, i) =>{
					return (
						<ShowComment2 
							key ={i}
							email ={data[i].email}
							comment={data[i].comment} 
						/>
					);
				})
			}
		</div>
	);
}

export default ShowComment;