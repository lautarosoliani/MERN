import { PROPERTY_TYPES } from "@babel/types";
import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Choose Platform", estado: true, proyectoId: 1 },
      { nombre: "Choose Colors", estado: false, proyectoId: 2 },
      { nombre: "Choose Payment Method", estado: true, proyectoId: 3 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { nombre: "Choose Hosting", estado: false, proyectoId: 4 },
    ],
  };

  //Crear dispatch y State
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
