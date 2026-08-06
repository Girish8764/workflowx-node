import { Pencil, Trash2 } from "lucide-react";

function EmployeeTable({
  employees,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">Code</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Designation</th>
            <th className="p-4 text-left">Salary</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Action</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr
              key={emp.id}
              className="border-b border-slate-800 hover:bg-slate-800 transition"
            >

              <td className="p-4">{emp.employee_code}</td>

              <td className="p-4 font-semibold">
                {emp.full_name}
              </td>

              <td className="p-4">{emp.email}</td>

              <td className="p-4">{emp.designation}</td>

              <td className="p-4">
                ₹ {emp.salary}
              </td>

              <td className="p-4">

                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">

                  {emp.status}

                </span>

              </td>

              <td className="p-4">

                <div className="flex justify-center gap-5">

                  <button
                    onClick={() => onEdit(emp)}
                  >

                    <Pencil
                      size={18}
                      className="text-yellow-400 hover:text-yellow-300"
                    />

                  </button>

                  <button
                    onClick={() => onDelete(emp.id)}
                  >

                    <Trash2
                      size={18}
                      className="text-red-500 hover:text-red-400"
                    />

                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;
