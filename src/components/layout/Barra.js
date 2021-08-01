import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        <span>Welcome</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Log Out</a>
      </nav>
    </header>
  );
};

export default Barra;
