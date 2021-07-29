//193.
//Creo useState para iniciar sesion. Lo creo como 'objeto', compuesto por "email" y "password" vacios
//Creo 'const' para extraer del usuario "email" y "password" y agrego 'value{}' en cada 'input'
//Para guardar el usuario uso 'onChange = (e)'
//En este punto puedo lo que se tipee se debe ver en el browser en Inspect/Components
//Agrego onSubmit={onSubmit} al 'form' y creo la 'const con 'e.prevent.default()'
//Agrego el 'import {Link}' y el 'link' debajo del 'form' para que el usuario pueda crear una cuenta
//de esta manera es redirigido a Nueva Cuenta. Si hago click debe funcionar.

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  //extraer de usuario (dentro de los input pongo value="email" & value="password")
  const { email, password } = usuario;

  //Guardar ususario
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el ususario quiere iniciar sesion (clickea Submit/ click en boton)
  const onSubmit = (e) => {
    e.preventDefault();

    //falta validar que no haya campos vacios
    //falta 'pasarlo al action'
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
