const express = require('express');
const router = express.Router();
const estudiantesController =require('../controllers/estudiantesController');
const cursosController= require('../controllers/cursosController')

router.use(express.json());

router.get('/estudiantes/', estudiantesController.getAllEstudiantes);
router.get('/estudiantes/:matricula', estudiantesController.getEstudiante);
router.post('/estudiantes', estudiantesController.createEstudiante);
router.put('/estudiantes/',estudiantesController.updateEstudiante);
//router.patch('/estudiantes/:matricula',estudiantesController.updateEstudiante);
router.delete('/estudiantes/:matricula',estudiantesController.deleteEstudiante);


router.get('/cursos/', cursosController.getAllCursos);
router.post('/cursos', cursosController.createCurso);
router.get('/cursos/:clave', cursosController.getCurso);
router.delete('/cursos/:clave',cursosController.deleteCurso);
router.put('/cursos/',cursosController.updateCurso);

router.post('/estudiantes/cursos', estudiantesController.createCurso);
router.post('/estudiantes/:matricula', estudiantesController.deleteCurso);
//router.get('/estudiantes/:matricula/cursos', estudiantesController.getAllCursos);
router.get('/cursos/:clave/estudiantes',cursosController.getLista);

module.exports = router;