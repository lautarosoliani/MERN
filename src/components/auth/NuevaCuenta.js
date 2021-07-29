//194.
// Copio todo desde Login hacia aca y reemplazo "Login" por "NuevaCuenta" (las dos veces)
// Habra 3 campos --> contrasena, repetirla y nombre de usuario (no puede haber dos iguales)
// Clono dos inputs para "nombre" y para "repetir contrasenia". Con cambios.
// El mas importante es ' name="nombre" ' y ' name="confirmar" ' deben coincidir porque los agrego al useState Y a la const siguiente
// Asi se los paso al 'value={nombre}' y 'value={confirmar}'
//

import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  //State para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer de usuario (dentro de los input pongo value="email" & value="password")
  const { email, password, nombre, confirmar } = usuario;

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
        <h1>Crea una cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Volver a pagina principal
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
