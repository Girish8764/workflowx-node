import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeModal from "../components/EmployeeModal";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../services/employee.service";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleSave = async (employee) => {
    try {
      if (selectedEmployee) {
        await updateEmployee(selectedEmployee.id, employee);
      } else {
        await createEmployee(employee);
      }

      setShowModal(false);
      setSelectedEmployee(null);
      loadEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete Employee?")) return;

    await deleteEmployee(id);

    loadEmployees();
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Employees
        </h1>

        <button
          onClick={() => {
            setSelectedEmployee(null);
            setShowModal(true);
          }}
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          + Add Employee
        </button>

      </div>

      <EmployeeTable
        employees={employees}
        onEdit={(emp) => {
          setSelectedEmployee(emp);
          setShowModal(true);
        }}
        onDelete={handleDelete}
      />

      <EmployeeModal
        isOpen={showModal}
        employee={selectedEmployee}
        onClose={() => {
          setShowModal(false);
          setSelectedEmployee(null);
        }}
        onSave={handleSave}
      />
    </DashboardLayout>
  );
}

export default Employees;
