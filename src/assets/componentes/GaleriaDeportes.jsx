import React from 'react';
import '../estilos/GaleriaDeportes.css';
import ecu from '../imagenes2/ecuavoly.jpg';
import fut from '../imagenes2/futbol.avif';

const GaleriaDeportes = () => {
  return (
    <div>
      <h2>Galería de Deportes Favoritos</h2>
      <div>
        <div>
          <p>Fútbol</p>
          <img src={fut} className="futbol" alt="Deporte 1" />
        </div>
        <div>
          <p>Ecuavoley</p>
          <img src={ecu} className="ecua" alt="Deporte 2" />
        </div>
        <div>
          <p>Basket</p>
          <img src="/imagenes2/basquet.jpeg" className="basq" alt="Deporte 3" />
        </div>
      </div>
    </div>
  );
};

export default GaleriaDeportes;
