//Formulario para agregar nuevas tareas

import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  //Si no hay proyecto seleccionado:
  if (!proyecto) return null;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar

    //Pasar la validacion

    //Agregar la nueva tarea al state de tareas

    //Reiniciar al form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Name your Task..."
            name="nombre"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit "
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
