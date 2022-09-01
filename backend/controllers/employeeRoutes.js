const express = require("express");

const Employee = require("../models/employeeModel");

// Creating a Router
const router = express.Router();

// ADD EMPLOYEE TO EMPLOYEE'S TABLE
router.post('/employees/new', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save()
      .then(() => res.json(newEmployee));
  } catch (error) {
    res.send('error');
  }
});

// FIND ALL EMPLOYEES
router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.send("error");
  }
});

// FIND EMPLOYEE BY ID
// edit-button onClick GETs this employee.
router.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findOne({ _id: req.params.id });
    res.json(employee);
  } catch (error) {
    res.send("error");
  }
});

// UPDATE EMPLOYEE
// update-button onClick POSTs this employee.
router.post("/employees/edit", async (req, res) => {
  try {
    await Employee.updateOne({ _id: req.body._id }, req.body, { new: true });
  } catch (error) {
    res.send("error");
  }
});

// DELETE EMPLOYEE
router.get("/employees/delete/:id", async (req, res) => {
  try {
    const employee = await Employee.deleteOne({ _id: req.params.id });
    res.json(employee);
  } catch (error) {
    res.send("error");
  }
});

//
module.exports = router;
