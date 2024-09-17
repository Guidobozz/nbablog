import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Navbar/mycarrousel.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCarousel() {
  return (
    <Carousel className='carouzel'> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bleepstatic.com/content/hl-images/2023/03/17/NBA_headpic.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/01/kobe-bryant-1852515.jpg?tf=3840x"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjAyMzQ2MTQyMDc0MTUyMDA0/usatsi_21939650.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
