import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Choose Platform", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Choose Colors", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Choose Payment Method", estado: true, proyectoId: 3 },
      { id: 4, nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { id: 5, nombre: "Choose Hosting", estado: false, proyectoId: 4 },
      { id: 6, nombre: "Choose Hosting", estado: false, proyectoId: 3 },
      { id: 7, nombre: "Choose Hosting", estado: false, proyectoId: 2 },
      { id: 8, nombre: "Choose Hosting", estado: false, proyectoId: 1 },
    ],
    tareasproyecto: null,
    errortarea: false,
  };

  //Crear dispatch y State
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un poryecto especifcio
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  //Valida y muestra un error en caso de que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Eliminar tarea por ID
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
