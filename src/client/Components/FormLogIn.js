import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function FormLogIn() {
  const [user, setUser] = useState({
    nombre_user: "",
    contraseña: "",
    tipo: `${(e) => cambioTipo(e)}`,
  });

  const logIn = () => {
    fetch("/biblioteca/api/userAdmin/", {
      method: "POST",
      body: JSON.stringify(() => this.useState),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then( res => console.log(res))
    .then(data => console.log(data))
    .catch(err => console.log(err))
    console.log(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Link to={"/"}>
      <div className="flex m-auto justify-center mt-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body border border-indigo-500/100">
            <h2 className="card-title justify-center font-bold">
              Iniciar sesión
            </h2>
            <form>
              <div className="py-4">
                <label>
                  Seleccione una opcion:
                  <select
                    name="tipo"
                    onChange={(e) => handleChange(e)}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option defaultValue>Elija una opcion...</option>
                    <option>Empleado</option>
                    <option>Administrador</option>
                  </select>
                </label>
              </div>
              <div className="py-4">
                <label>
                  Usuario:
                  <input
                    name="nombre_user"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder="Ingrese su usuario"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </label>
              </div>
              <div className="py-4">
                <label className="py-3">
                  Contraseña:
                  <input
                    name="contraseña"
                    onChange={(e) => handleChange(e)}
                    type="password"
                    placeholder="Ingrese su contraseña"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </label>
              </div>
            </form>
            <div className="card-actions justify-center">
              <button onClick={() => logIn()} className="btn btn-primary">
                Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FormLogIn;
