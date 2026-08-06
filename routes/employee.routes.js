const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employee.controller");

// Create Employee
router.post("/", employeeController.createEmployee);

// Get All Employees
router.get("/", employeeController.getAllEmployees);

// Get Employee By ID
router.get("/:id", employeeController.getEmployeeById);

// Update Employee
router.put("/:id", employeeController.updateEmployee);

// Delete Employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
