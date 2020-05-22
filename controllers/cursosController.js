const cursosModel=require('../models/cursosModel');
exports.getAllCursos = getAllCursos;
exports.getCurso = getCurso;
exports.createCurso= createCurso;
exports.updateCurso = updateCurso;
exports.deleteCurso = deleteCurso;
exports.getLista= getLista;


function deleteCurso (req,res) {
    if(cursosModel.erase(req.params.clave)){
        res.status(200).json({msg:`clave: ${req.params.clave} deleted succesfully`})
    } else {
        res.status(500). json({error:`could not delete clave: ${req.params.clave}`})
    }
};

function createCurso(req,res){
    cursosModel.add(req.body.nombre,req.body.clave,req.body.creditos).then((cursos)=>{
        res.status(200).send('Curso registrado correctamente');
    }).catch(err=>{
        res.status(400).send(err);
    });
};

function getAllCursos(req,res){
    cursosModel.findAll().then((cursos)=>{
        res.status(200).json(cursos);
    }).catch(err=>{
        res.status(400).json(err);
    });
};

function getCurso(req,res){
    if (req.params.clave) {
        cursosModel.findByClave(req.params.clave).
            then(cursos => {
                res.status(200).
                    send(cursos);
            }).catch(err => {
                res.status(400).
                    send(err);
            });
    } else {
        res.status(400).send(err);
    }
};

function updateCurso(req,res){
    if (cursosModel.save(req.body)) {
        res.status(200). json(req.body);
    } else {
        res.status(400).json({ error: 'YA EXISTENTE' });
    }
};

// function getLista (req, res) {
//     if (req.query.clave) {
//         console.log(" hola entre al get lista controller");
//         cursosModel.getListaEstudiantes(req.query.clave).
//             then((estudiante) => {
//                 res.status(200).
//                     json(estudiante);
//             }).catch(err => {
//                 res.status(400).
//                     json(err)
//             });
//      } else {
//         cursosModel.getListaEstudiantes(req.query.clave).
//             then((Cursos) => {
//                 console.log("entrogetlista en else controller");
//                 res.status(200).
//                     json(Cursos);
//             }).catch(err => {
//                 res.status(400).
//                     json(err);
//             });
//     }
// }

function getLista (req, res) {
    // if (req.query.clave) {
    //     cursosModel.getListaEstudiantes().
    //         then((estudiante) => {
    //             res.status(200).
    //                 json(estudiante);
    //         }).catch(err => {
    //             res.status(400).
    //                 json(err)
    //         });
    // } else {
        console.log(req.params.clave+"antes");
        cursosModel.getListaEstudiantes(req.params.clave).
            then((Cursos) => {
                console.log(req.params.clave);
                res.status(200).
                    json(Cursos);
            }).catch(err => {
                res.status(400).
                    json(err);
            });
    // }
}