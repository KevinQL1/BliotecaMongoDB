import React from "react";

function FormCreateBook() {
  return (
    <div className="flex m-auto justify-center mt-20">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body border border-indigo-500/100">
          <h2 className="card-title justify-center font-bold">
            Actualizar libros
          </h2>
          <form>
            <div className="py-4">
              <label>
                Ingre el nuevo ISBN:
                <input
                  type="number"
                  placeholder="Ingre el nuevo ISBN"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese la nueva editorial:
                <input
                  type="text"
                  placeholder="Ingrese la nueva editorial"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese el nuevo género:
                <input
                  type="text"
                  placeholder="Ingrese el nuevo género"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese el nuevo año de publicación:
                <input
                  type="number"
                  placeholder="Ingrese el nuevo año de publicación"
                  className="input input-bordered input-primary w-full max-w-xs"
                />
              </label>
            </div>
            <div className="py-4">
              <label className="py-3">
                Ingrese el nuevo autor:
                <input
                  type="text"
                  placeholder="Ingrese el nuevo autor"
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
              <Link to={"/TablaLibros"}>Cancelar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCreateBook;
