import React from "react";
import { Link } from "react-router-dom";

function FormUpdateUser() {
  return (
    <div className="flex m-auto justify-center mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body border border-indigo-500/100">
          <h2 className="card-title justify-center font-bold">
            Actualizar usuario
          </h2>
          <form>
            <div className="py-4">
              <label>
                Ingrese nuevo usuario:
                <input
                  type="text"
                  placeholder="Ingrese usuario nuevo"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese nueva contraseña:
                <input
                  type="password"
                  placeholder="Ingrese contraseña nueva"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
          </form>
          <div className="card-actions justify-center">
            <button value="Submit" className="btn btn-primary">
              Confirmar
            </button>
            <button value="Submit" className="btn btn-error">
              <Link to={"/TablaUsuarios"}>Cancelar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUpdateUser;
