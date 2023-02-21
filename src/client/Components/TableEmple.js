import React from "react";
import { Link } from "react-router-dom";

function TableEmple() {
  return (
    <div className="flex justify-center mt-40">
      <div className="overflow-x-auto">
        <table className="table w-96">
          <thead>
            <tr>
              <th className="border border-indigo-500/100"></th>
              <th className="border border-indigo-500/100">Autores</th>
              <th className="border border-indigo-500/100">Libros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-indigo-500/100">1</th>
              <td className="border border-indigo-500/100">Cy Ganderton</td>
              <td className="border border-indigo-500/100">Quality Control Specialist</td>
            </tr>
            <tr>
              <th className="border border-indigo-500/100">2</th>
              <td className="border border-indigo-500/100">Hart Hagerty</td>
              <td className="border border-indigo-500/100">Desktop Support Technician</td>
            </tr>
            <tr>
              <th className="border border-indigo-500/100">3</th>
              <td className="border border-indigo-500/100">Brice Swyre</td>
              <td className="border border-indigo-500/100">Tax Accountant</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button value="Submit" className="btn btn-primary">
            <Link to={"/navBarUser"}>Atras</Link>
          </button>
        </div>
      </div>
    </div>

  );
}

export default TableEmple;
