// 201.
// Listado que va a contener todas las tareas de ese proyecto especifcio
// Creo un array con 'nombre' y 'estado' que luego voy a usar
// Creo Fragment con 'H2' y 'tareasProyecto.length' con 'operador ternario'
// para cuando no haya 'tareasProyecto' y para cuando si los haya

import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Choose Platform", estado: true },
    { nombre: "Choose Colors", estado: false },
    { nombre: "Choose Payment Method", estado: true },
    { nombre: "Choose Hosting", estado: false },
  ];

  return (
    <Fragment>
      <h2>Project: Online Shop</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>There are no Tasks</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
        <button type="button" className="btn btn-eliminar">
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};
export default ListadoTareas;
