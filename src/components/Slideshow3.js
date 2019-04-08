import React from 'react';
import './Slideshow.css';

const Slideshow3 =({namebook, imgrec}) => {
	return(
		<div>
		  <h1>{namebook}</h1>
		  <div className="asd dib br3 pa2 ma2 grow bw2 shadow-5 container">
          	<img alt = 'naruto2' src={imgrec} width = '700px' height='320px'/>
          </div>
		</div>
	);
}
export default Slideshow3;