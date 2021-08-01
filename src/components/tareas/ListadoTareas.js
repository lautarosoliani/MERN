// 201.
// Listado que va a contener todas las tareas de ese proyecto especifcio
// Creo un array con 'nombre' y 'estado' que luego voy a usar
// Creo Fragment con 'H2' y 'tareasProyecto.length' con 'operador ternario'
// para cuando no haya 'tareasProyecto' y para cuando si los haya

import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado:
  if (!proyecto) return <h2>Select a project</h2>;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  //Eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Project: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminar}
        >
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};
export default ListadoTareas;
