// 201.
// Listado que va a contener todas las tareas de ese proyecto especifcio
// Creo un array con 'nombre' y 'estado' que luego voy a usar
// Creo Fragment con 'H2' y 'tareasProyecto.length' con 'operador ternario'
// para cuando no haya 'tareasProyecto' y para cuando si los haya

import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado:
  if (!proyecto) return <h2>Select a project</h2>;

  //Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Project: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
