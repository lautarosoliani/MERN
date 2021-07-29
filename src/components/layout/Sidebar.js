import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NuevoProyecto />
      <div className="proyectos"></div>
      <h2>Your Projects</h2>
    </aside>
  );
};

export default Sidebar;
