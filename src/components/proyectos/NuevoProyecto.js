//196 ish. Aca va el formulario + button para agregar proyectos nuevos
//197.
// Creo el useState para el proyecto "const [proyecto , guardarProyecto] = useState"
// Creo la 'const onChangeProyecto'
// Agrego 'value' y onChange' al primer input + Destructuring
// Falta el 'form' para cuando el usuario haga 'submit' asi que agrego 'onSubmit en el form

import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const proyectosContext = useContext(proyectoContext);
  const { formulario } = proyectosContext;

  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  //Destructuring nombre de proyecto
  const { nombre } = proyecto;

  //Lee los contenidos del input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();
  };

  //Aca falta: 1)Validar el proyecto 2)Agregar el State 3)Reiniciar el form

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Add Project
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Name your project"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
