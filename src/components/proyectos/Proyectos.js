//195. Creo esta pagina + Creo 'Sidebar.js'
//196.

import React from "react";
import Sidebar from "../layout/Sidebar";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <main>
          <div className="contenedor-tareas"></div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
