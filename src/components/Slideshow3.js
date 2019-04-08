import React from 'react';

const Slideshow3 =({namebook, img}) => {
	return(
		<div>
		  <h1>{namebook}</h1>
          <img alt = 'naruto2' src={img} width = '400px' height='200px'/>
		</div>
	);
}
export default Slideshow3;