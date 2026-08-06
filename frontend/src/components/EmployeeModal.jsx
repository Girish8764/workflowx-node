import { useState, useEffect } from "react";

function EmployeeModal({
  isOpen,
  onClose,
  onSave,
  employee,
}) {
  const [form, setForm] = useState({
    employee_code: "",
    full_name: "",
    email: "",
    phone: "",
    designation: "",
    salary: "",
    joining_date: "",
    status: "Active",
  });

  useEffect(() => {
    if (employee) {
      setForm(employee);
    }
  }, [employee]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-slate-900 p-8 rounded-2xl w-[550px]">

        <h2 className="text-2xl font-bold mb-6 text-white">

          {employee ? "Edit Employee" : "Add Employee"}

        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            name="employee_code"
            placeholder="Employee Code"
            value={form.employee_code}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

          <input
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

          <input
            name="designation"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

          <input
            name="salary"
            placeholder="Salary"
            value={form.salary}
            onChange={handleChange}
            className="p-3 rounded bg-slate-800 text-white"
          />

        </div>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-3 bg-gray-600 rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(form)}
            className="px-5 py-3 bg-blue-600 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EmployeeModal;
