import React, { useEffect, useState } from "react";
import { getAllStudents } from "../services/apiFetch";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate()

  const loadStudents = () => {
    const aux = getAllStudents();
    setStudents(aux);
  }

  const goToCreateStudent = () => {
    navigate("/create")
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <div>
        <h2>Lista de alumnos</h2>
        <hr />
        <button onClick={() => {goToCreateStudent()}}>Añadir nuevo alumnos</button>
        <hr />
        {students.length === 0 ? (
          <p>No hay alumnos registrados</p>
        ) : (
          students.map((st, idx) => {
            <div key={idx}>
                <p>Nombre: {st.name}</p>
                <hr />
                <p></p>
            </div>
          })
        )}
        <div></div>
      </div>
    </>
  );
};

export default HomePage;
