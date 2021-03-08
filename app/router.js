const express = require('express');
const router = express.Router();

const defaultController = require('./controllers/defaultController');
const promoController = require('./controllers/promoController');
const studentController = require('./controllers/studentController');
const adminController = require('./controllers/adminController');

router.get("/", defaultController.homepage);
router.get("/promos", promoController.list);
router.get("/promos/:id", promoController.view);
router.get("/promos/:id/students", promoController.listStudents);
router.get("/students", studentController.list);
router.get("/students/:id", studentController.view);
router.get("/admin/addstudent", adminController.showAddStudentForm);
router.post("/admin/addstudent", adminController.addStudent);
module.exports = router;
