//Listado que va a contener todas las tareas de ese proyecto especifcio
//
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
      </ul>
    </Fragment>
  );
};
export default ListadoTareas;
// 201
