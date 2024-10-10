import React from 'react';
import './mycarrousel.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function MyCarousel() {
  const items = [
    {
      imgSrc: "https://elordenmundial.com/wp-content/uploads/2020/10/NBA-logo-baloncesto-historia-deporte-estados-unidos.jpg",
      title: "La cuenta regresiva comienza.",
      description: "El arranque de la temporada está a la vuelta de la esquina. Analizamos qué esperar de los primeros enfrentamientos y cómo llegan los equipos al inicio del año.",
    },
    {
      imgSrc: "https://media3.s-nbcnews.com/i/newscms/2020_04/3203206/200126-kobe-bryant-cs-551p_94a33c06ae6c4bbebaf59985de472c42.jpg",
      title: "Kobe Bryant Tributo",
      description: "Un momento para recordar el legado de Kobe.",
    },
    {
      imgSrc: "https://e00-xlk-ue-marca.uecdn.es/uploads/2024/10/07/670369b5546b7.jpeg",
      title: "El rey y su hijo",
      description: "Bronny y su padre ya mostraron sus primeros minutos en cancha juntos",
    },
  ];

  return (
    <div className='dynamic-cards-container'>
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imgSrc} alt={item.title} className="card-img" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyCarousel;





/*
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
*/