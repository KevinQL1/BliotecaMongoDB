import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogIn from "./Components/FormLogIn";
import { NavBarAdmin } from "./Components/NavBarAdmin";
import { NavBarEmpleado } from "./Components/NavBarEmpleado";
import TableAdminAutor from "./Components/TableAdminAutor";
import TableAdminLibro from "./Components/TableAdminLibro";
import TableAdminUser from "./Components/TableAdminUser";
import TableEmple from "./Components/TableEmple";
import FormUpdateUser from "./Components/ComponentsUser/FormUpdateUser";
import FormCreateUser from "./Components/ComponentsUser/FormCreateUser";
import FormUpdateBook from "./Components/ComponentsBook/FormUpdateBook";
import FormCreateBook from "./Components/ComponentsBook/FormCreateBook";
import FormUpdateAuthor from "./Components/ComponentsAuthor/FormUpdateAuthor";
import FormCreateAuthor from "./Components/ComponentsAuthor/FormCreateAuthor";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormLogIn />} />
            <Route path="/empleado" element={<NavBarEmpleado />} />
            <Route path="/tablaEmpleado" element={<TableEmple />} />
            <Route path="/salir" element={<FormLogIn />} />
            <Route path="/navBarUser" element={<NavBarEmpleado />} />
            <Route path="/navBarAdmin" element={<NavBarAdmin />} />
            <Route path="/TablaAutores" element={<TableAdminAutor />} />
            <Route path="/TablaLibros" element={<TableAdminLibro />} />
            <Route path="/TablaUsuarios" element={<TableAdminUser />} />
            <Route path="/ActualizarUsuario" element={<FormUpdateUser />} />
            <Route path="/CrearUsuario" element={<FormCreateUser />} />
            <Route path="/ActualizarLibro" element={<FormUpdateBook />} />
            <Route path="/CrearLibro" element={<FormCreateBook />} />
            <Route path="/ActualizarAutor" element={<FormUpdateAuthor />} />
            <Route path="/CrearAutor" element={<FormCreateAuthor />} />
            <Route path="/admin" element={<NavBarAdmin />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
