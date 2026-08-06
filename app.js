const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: [
        "http://13.234.225.41:5173",
        "http://localhost:5173"
    ],
    credentials: true
}));

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/employees", require("./routes/employee.routes"));
app.use("/api/departments", require("./routes/department.routes"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "WorkFlowX Backend Running"
    });
});

module.exports = app;
