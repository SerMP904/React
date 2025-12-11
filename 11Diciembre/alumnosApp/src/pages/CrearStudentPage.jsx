import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/apiFetch";

const ERROR_MESSAGE = "Este campo no puede estar vacío";

const CrearStudentPage = () => {
  const navigate = useNavigate();
  const [newStudent, setNewStudent] = useState({});
  const [errorMessageState, setErrorMessageState] = useState({});

  const studentHandler = (propName, propValue) => {
    setNewStudent({
      ...newStudent,
      [propName]: propValue,
    });
  };

  const checkFields = () => {
    let isError = false;
    if (!newStudent.name || newStudent.name === "") {
      setErrorMessageState({
        ...errorMessageState,
        name: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.lastName || newStudent.lastName === "") {
      setErrorMessageState({
        ...errorMessageState,
        lastName: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.email || newStudent.email === "") {
      setErrorMessageState({
        ...errorMessageState,
        email: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.boughtCourse || newStudent.boughtCourse === "") {
      setErrorMessageState({
        ...errorMessageState,
        boughtCourse: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.username || newStudent.username === "") {
      setErrorMessageState({
        ...errorMessageState,
        username: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (isError) {
      return false;
    } else {
      return true;
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  const saveStudent = () => {
    const check = checkFields();
    if (check) {
      createStudent(newStudent);
    }
    console.log(newStudent);
  };

  return (
    <>
      <div>
        <h2>Crear nuevo alumno</h2>
        <div>
          <div>
            <span>
              Nombre: <span className="redText">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                studentHandler("name", e.target.value);
              }}
            />
            {errorMessageState.name && (<span className="redText">{errorMessageState}</span>)}
          </div>
          <div>
            <span>
              Apellidos: <span className="redText">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                studentHandler("lastName", e.target.value);
              }}
            />
          </div>
          <div>
            <span>
              Correo: <span className="redText">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                studentHandler("email", e.target.value);
              }}
            />
          </div>
          <div>
            <span>
              Curso que compra: <span className="redText">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                studentHandler("boughtCourse", e.target.value);
              }}
            />
          </div>
          <div>
            <span>
              Nombre usuario: <span className="redText">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                studentHandler("username", e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <button onClick={saveStudent}>Guardar</button>
          <button onClick={backToHome}>Cancelar</button>
        </div>
      </div>
    </>
  );
};

export default CrearStudentPage;
