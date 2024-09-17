// src/footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
import '../footer/footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre nosotros</h5>
            <p>
              Bienvenido a NBA Blog, el rincón de la web creado por y para los verdaderos aficionados al baloncesto. 
              Esta página surge del entusiasmo y la pasión de un fan de la NBA que deseaba ofrecer algo más que 
              el típico contenido que se encuentra en los medios tradicionales.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces rápidos</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/category/teams">Equipos</Link></li>
              <li><Link to="/category/players">Jugadores</Link></li>
              <li><Link to="/category/draft">Draft</Link></li>
              <li><Link to="/category/stats">Stats</Link></li>
              <li><Link to="/category/opinion">Opinión</Link></li>
              <li><Link to="/category/history">Historia</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: nbablog1714@gmail.com</p>
           
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>&copy; 2024 NBA Blog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
