const express = require("express")
const router = express.Router()
const EmployeeController = require("../controllers/EmployeeController")
router.get("/", EmployeeController.getAllEmployee)
//router.get("/admin", EmployeeController.getAllEmployee)
router.get("/:id", EmployeeController.getEmployeeById)
router.post("/", EmployeeController.addEmployee)
router.put("/", EmployeeController.updateEmployee)
router.delete("/", EmployeeController.deleteEmployee)

module.exports = router