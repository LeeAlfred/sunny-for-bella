import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function Slide (){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <div >
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect} variant="dark" interval="1000">
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/Love-YOU3116dec1d91957b7.webp"
      alt="Love you"
    />
    <Carousel.Caption>
      <h1 className='slide-h1'>Love You</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/To28d26a7514a1e210.webp" 
      alt="To"
    />

    <Carousel.Caption>
      <h1 className='slide-h1'>To</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/The0623e11b50a8af7c.webp"
      alt="The"
    />

    <Carousel.Caption>
      <h1 className='slide-h1'>The</h1>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/Moonef365f9e65b04d55.png"
      alt="Moon"
    />
    <Carousel.Caption>
      <h1 className='slide-h1'>...</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/And1ecf84cd23e4249e.webp"
      alt="And"
    />

    <Carousel.Caption>
      <h1 className='slide-h1'>Moon!</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-100"
      src="https://s6.gifyu.com/images/Back9526b4f14c8e2de6.webp"
      alt="Back"
    />

    <Carousel.Caption>
      <h1 className='slide-h1'>And Back <br/>X O X</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

</div>
    );
}

export default Slide