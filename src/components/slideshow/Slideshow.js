import React from 'react';
import Slideshow2 from './Slideshow2';
// import { Fade } from 'react-slideshow-image';
import './Slideshow.css';

// const fadeImages = [   
//   'https://www.barnesandnoble.com/blog/sci-fi-fantasy/wp-content/uploads/sites/4/2017/07/onepiece2.jpg',
//   'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg',
//   'https://upload.wikimedia.org/wikipedia/el/d/dc/Naruto_Character.jpg'
// ];
 
// const fadeProperties = {
//   duration: 5000,
//   transitionDuration: 1000,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   scale:0.2
// }
 
class Slideshow extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const { history, onRouteChange} = this.props;
    // console.log({history})
    return (
      <div className='tc'>
        <Slideshow2 history={history} onRouteChange={onRouteChange} />
      </div>
    );
  }
}
export default Slideshow;