import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import rgb from "../assets/rgb.jpg"
import rgb2 from "../assets/rgb2.jpg"
import rgb3 from "../assets/rgb3.png"

export const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item className='main_item'>
       <img className='im_g w-100' src={rgb} alt="" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='main_item'>
    <img className='im_g w-100' src={rgb2} alt="" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='main_item'>
    <img className='im_g w-100' src={rgb3} alt="" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
