import React from 'react';
import './../estilos/DatosPersonales.css';

const DatosPersonales = () => {
  return (
    <div>
      <h1>Datos Personales</h1>
      <img src="/imagenes2/yo.png" className="yo" alt="Yo" />
      <p><strong>Nombre:</strong> Nicolás Chiguano</p>
      <p><strong>Dirección:</strong> Quito-La Tola</p>
      <p><strong>Teléfono:</strong> +593 984427131</p>
      <p><strong>Correo Electrónico:</strong> nicolas.chiguano@epn.edu.ec</p>
    </div>
  );
};

export default DatosPersonales;
