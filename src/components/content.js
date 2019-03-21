import React from 'react';
import Slideshow from './Slideshow';
import Scroll from './Scroll';
const content = ({ data }) => {
	return (
		<div className='pa2 tr' >
			<Slideshow/>
			<br/>
			<Scroll>
				<Push data={data}/>
			</Scroll>
		</div>
	);
}

export default content;