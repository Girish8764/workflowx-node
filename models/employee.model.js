const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    employee_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.STRING,
    },

    designation: {
      type: DataTypes.STRING,
    },

    salary: {
      type: DataTypes.DECIMAL(10, 2),
    },

    joining_date: {
      type: DataTypes.DATEONLY,
    },

    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
  },
  {
    tableName: "employees",
    timestamps: false,
  }
);

module.exports = Employee;
