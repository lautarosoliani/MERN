//Aca va el formulario + button para agregar proyectos nuevos

import React, { Fragment } from "react";

const NuevoProyecto = () => {
  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Add Project
      </button>

      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Name your project"
          name="nombre"
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Add Project"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
