import React from "react";
import { Link } from "react-router-dom";

function TableAdminLibro() {
  return (
    <div className="flex justify-center mt-40">
      <div className="overflow-x-auto">
        <table className="table w-96">
          <thead>
            <tr>
              <th className="border border-indigo-500/100"></th>
              <th className="border border-indigo-500/100">ISBN</th>
              <th className="border border-indigo-500/100">Editorial</th>
              <th className="border border-indigo-500/100">Género</th>
              <th className="border border-indigo-500/100">
                Año de publicación
              </th>
              <th className="border border-indigo-500/100">Autor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-indigo-500/100">1</th>
              <td className="border border-indigo-500/100">Cy Ganderton</td>
              <td className="border border-indigo-500/100">
                Quality Control Specialist
              </td>
              <td className="border border-indigo-500/100">Blue</td>
              <td className="border border-indigo-500/100">Blue</td>
              <td className="border border-indigo-500/100">Blue</td>
            </tr>
            <tr>
              <th className="border border-indigo-500/100">2</th>
              <td className="border border-indigo-500/100">Hart Hagerty</td>
              <td className="border border-indigo-500/100">
                Desktop Support Technician
              </td>
              <td className="border border-indigo-500/100">Purple</td>
              <td className="border border-indigo-500/100">Blue</td>
              <td className="border border-indigo-500/100">Blue</td>
            </tr>
            <tr>
              <th className="border border-indigo-500/100">3</th>
              <td className="border border-indigo-500/100">Brice Swyre</td>
              <td className="border border-indigo-500/100">Tax Accountant</td>
              <td className="border border-indigo-500/100">Red</td>
              <td className="border border-indigo-500/100">Blue</td>
              <td className="border border-indigo-500/100">Blue</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button value="Submit" className="btn btn-primary m-4">
            <Link to={"/CrearLibro"}>Crear</Link>
          </button>
          <button value="Submit" className="btn btn-primary m-4">
            <Link to={"/ActualizarLibro"}>Actualizar</Link>
          </button>
          <button value="Submit" className="btn btn-error m-4">
            Eliminar
          </button>
          <button value="Submit" className="btn btn-warning m-4">
            <Link to={"/navBarAdmin"}>Atras</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableAdminLibro;
