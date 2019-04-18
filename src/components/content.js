import React from 'react';
import Slideshow from './slideshow/Slideshow';
import Scroll from './Scroll';
import Push from '../data/Push';
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