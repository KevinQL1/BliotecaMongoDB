import React from "react";
import { Link } from "react-router-dom";


export const NavBarAdmin = () => {
  return (
    <div className="fixed z-50">
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1">
          <button href="#" className="btn btn-primary normal-case text-xl">
            <Link to={"/admin"}>La Biblioteca</Link>
          </button>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
          <li tabIndex="0">
        <p>
          Datos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </p>
        <ul className="p-2 bg-base-100">
          <li><Link to={"/TablaAutores"}>Autores</Link></li>
          <li><Link to={"/TablaLibros"}>Libros</Link></li>
          <li><Link to={"/TablaUsuarios"}>Usuarios</Link></li>
        </ul>
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
