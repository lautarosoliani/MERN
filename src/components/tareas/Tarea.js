// 202. Para que cada tarea esté en su propio componente
// A cada componente le paso una 'tarea'

import React from "react";

const Tarea = ({ tarea }) => {
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-secundario">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Tarea;
