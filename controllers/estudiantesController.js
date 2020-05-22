const estudiantesModel=require('../models/estudiantesModel');
const cursosModel=require('../models/cursosModel');
exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;
//exports.getAllCursos=getAllCursos;
exports.createCurso=createCurso;
exports.deleteCurso=deleteCurso;
exports.getLista=getLista;

function deleteEstudiante (req,res) {
    if(estudiantesModel.erase(req.params.matricula)){
        res.status(200).json({msg:`matricula: ${req.params.matricula} deleted succesfully`})
    } else {
        res.status(500). json({error:`could not delete matricula: ${req.params.matricula}`})
    }
};

function createEstudiante(req,res){
    estudiantesModel.add(req.body.nombre,req.body.matricula,req.body.semestreIngreso,req.body.creditosCursados).then((estudiante)=>{
        res.status(200).send('Estudiante registrado correctamente');
    }).catch(err=>{
        res.status(400).send(err);
    });
};

function getAllEstudiantes(req,res){
    estudiantesModel.findAll().then((estudiantes)=>{
        res.status(200).json(estudiantes);
    }).catch(err=>{
        res.status(400).json(err);
    });
};

function getEstudiante(req,res){
    if (req.params.matricula) {
        estudiantesModel.findByMatricula(req.params.matricula).
            then(estudiante => {
                res.status(200).
                    send(estudiante);
            }).catch(err => {
                res.status(400).
                    send(err);
            });
    } else {
        res.status(400).send(err);
    }
};

function updateEstudiante(req,res){
    if (estudiantesModel.save(req.body)) {
        res.status(200). json(req.body);
    } else {
        res.status(400).json({ error: 'YA EXISTENTE' });
    }
};


function createCurso (req, res) {//inscribir restudiante
    if (estudiantesModel.findByMatricula(req.body.estudianteMatricula) && cursosModel.findByClave(req.body.cursoClave)) {
        if (estudiantesModel.addCurso(req.body.estudianteMatricula, req.body.cursoClave)) {
            res.status(200).
                json(req.body);
        } else {
            res.status(400).
                json({ error: 'Ya existe' });
        }
    } else {
        res.status(400).
            json({ error: 'No encontrado' });
    }
}

function deleteCurso (req, res) {// dar de baja estudiante
    if (estudiantesModel.deleteCurso(req.params.matricula, req.body.cursoClave)) {
        res.status(200).
            json(req.body);
    } else {
        res.status(400).
            json({ error: 'Error' });
    }
}

function getLista(req,res){

}
// function getAllCursos (req, res) {
//     if (estudiantesModel.findByMatricula(req.params.matricula)) {
//         estudiantesModel.getCursos(req.params.matricula).
//             then(cursos => {
//                 res.status(200).
//                     json(cursos);
//             }).catch(err => {
//                 res.status(400).
//                 json(err);
//             });
//     } else {
//         res.status(400).
//             json({ error: ' id no encontrado' });
//     }
// }