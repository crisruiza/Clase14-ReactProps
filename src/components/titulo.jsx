//importaciones
import PropTypes from "prop-types";

// function Título(props) {
//   return (
//     <h1>
//       Hola {props.nombre} {props.apellido}
//     </h1>
//   );
// }

// Función destructurada
function Título({ nombre, apellido }) {
  return (
    <h1>
      Hola {nombre} {apellido}
    </h1>
  );
}

// propTypes es para definir el tipo de contenido que tiene que haber, y si son requeridos.
Título.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
};

export default Título;
