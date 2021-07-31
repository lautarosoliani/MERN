import { PROPERTY_TYPES } from "@babel/types";
import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [],
  };

  //Crear dispatch y State
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  return <TareaContext.Provider>{props.children}</TareaContext.Provider>;
};

export default TareaState;
