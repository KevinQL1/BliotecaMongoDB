import React from "react";
import { Link } from "react-router-dom";


export const NavBarEmpleado = () => {
  return (
    <div className="fixed z-50">
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1">
          <button href="#" className="btn btn-primary normal-case text-xl">
            <Link to={"/empleado"}>La Biblioteca</Link>
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
            <Link to={"/tablaEmpleado"}>Datos</Link>
            </li>
            <li>
            <Link to={"/salir"}>Salir</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
