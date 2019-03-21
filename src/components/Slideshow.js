import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slideshow.css';

const fadeImages = [   
  'https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2017/07/onepiece2.jpg',
  'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg',
  'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  scale:0.2
}
 
const Slideshow = () => {
  return (
    <div className='tc'>
      <Fade {...fadeProperties} className = "beauty">
        <div className="each-fade beauty">
          <div className="image-container">
            <img alt = 'one piece' src={fadeImages[0]} width = '600px' height='250px' />
          </div>
        </div>
        <div className="each-fade beauty">
          <div className="image-container">
            <img alt = 'naruto' src={fadeImages[1]} width = '600px' height='250px'/>
          </div>
        </div>
        <div className="each-fade beauty">
          <div className="image-container">
            <img alt = 'naruto2' src={fadeImages[2]} width = '600px' height='250px'/>
          </div>
        </div>
      </Fade>
    </div>
  );
}
export default Slideshow;