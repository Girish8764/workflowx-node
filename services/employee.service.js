const Employee = require("../models/employee.model");

exports.createEmployee = async (data) => {
  return await Employee.create(data);
};

exports.getAllEmployees = async () => {
  return await Employee.findAll({
    order: [["id", "DESC"]],
  });
};

exports.getEmployeeById = async (id) => {
  return await Employee.findByPk(id);
};

exports.updateEmployee = async (id, data) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  await employee.update(data);

  return employee;
};

exports.deleteEmployee = async (id) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  await employee.destroy();

  return true;
};
