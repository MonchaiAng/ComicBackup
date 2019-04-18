import React from 'react';
import Slideshow3 from './Slideshow3';
const Slideshow2  =({history, onRouteChange}) => {
	return(
		<div>
			{
				history.map((user, i) =>{
					return (
						<Slideshow3 
							key ={i}
							id = {history[i]._id}
							namebook = {history[i].namebook}
							imgrec = {history[i].imgrec}
							onRouteChange= {onRouteChange}
						/>
					);
				})
			}
		</div>
	);
}
export default Slideshow2;