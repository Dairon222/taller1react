import React, { useState } from "react";
import PropTypes from "prop-types";

//No se que tan buena prática sea agregar todos los componentes en un solo archivo,
//Pero, a mi parecer me parecio mas cómodo y fácil hacerlo así
//Por lo menos para realizar este taller, me imagino que en un proyecto más grande y con muchas más cosas,
//sera más fácil y cómodo separarlo

const Hola = ({
  nombre,
  idioma,
  children = "Gracias por preferirnos nuevamente",
}) => {
  const [contador, vistaContador] = useState(0);

  const saludos = {
    en: `${nombre}, Welcome!`,
    fr: `${nombre}, Bonjour!`,
  };

  const cambioIdioma = (idioma) => saludos[idioma] || `${nombre}, ¡Bienvenido!`;

  const contanding = () => {
    vistaContador(contador + 1);
  };

  return (
    <div className="card">
      <h1>{cambioIdioma(idioma)}</h1>
      <div className="container">
        <h2>{children}</h2>
      </div>
      <div className="contador">
        <button onClick={contanding}>{contador}</button>
      </div>
    </div>
  );
};

Hola.propTypes = {
  nombre: PropTypes.string.isRequired,
  idioma: PropTypes.string,
  children: PropTypes.string,
};

export default Hola;
