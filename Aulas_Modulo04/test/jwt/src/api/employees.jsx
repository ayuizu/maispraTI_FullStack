const express = require('express')
const router = express.Router()
const employeesController = require('../controllers/employeesController')
// const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
// .get(verifyJWT,employeesController.getAllEmployees) protege só essa pagina, geral -> ver server.js
.get(employeesController.getAllEmployees)
.post(employeesController.createNewEmployee)
.put(employeesController.updateEmployee)
.delete(employeesController.deleteAllEmployee)

router.route('/:id')
.get(employeesController.getEmployee)

module.exports=router