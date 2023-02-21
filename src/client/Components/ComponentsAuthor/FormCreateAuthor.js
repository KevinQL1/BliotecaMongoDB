import React from "react";

function FormCreateAuthor() {
  return (
    <div className="flex m-auto justify-center mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body border border-indigo-500/100">
          <h2 className="card-title justify-center font-bold">
            Actualizar autor
          </h2>
          <form>
            <div className="py-4">
              <label>
                Ingrese la cédula:
                <input
                  type="number"
                  placeholder="Ingrese la cédula del autor"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label>
                Ingrese el nuevo nombre:
                <input
                  type="text"
                  placeholder="Ingrese el nuevo nombre del autor"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese la nueva nacionalidad:
                <input
                  type="text"
                  placeholder="Ingrese la nueva nacionalidad del autor"
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
              <Link to={"/TablaAutores"}>Cancelar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCreateAuthor;
