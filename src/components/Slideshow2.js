import React from 'react';
import Slideshow3 from './Slideshow3';
const Slideshow2  =({history}) => {
	return(
		<div>
			{
				history.map((user, i) =>{
					return (
						<Slideshow3 
							key ={i}
							namebook = {history[i].namebook}
							img = {history[i].img}
						/>
					);
				})
			}
		</div>
	);
}
export default Slideshow2;