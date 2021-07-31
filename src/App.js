//191. react-router-dom es para 'rutear' la app (cambiar de paginas),
//lo que este dentro de 'switch' esta en esa pagina especifica mientras que lo que esta afuera estara en todas.
//1.Login va a ser la pagina principal // 2.Nueva-Cuenta para darse de alta
//3.Proyectos (el usuario debe estar 'autenticado' y puede ver sus proyectos)
//Luego hago los 'import' en esta misma hoja
//Luego creo las paginas '.JS' de cada 'componente'

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
