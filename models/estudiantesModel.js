exports.findByMatricula = findByMatricula;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
exports.addCurso=addCurso;
exports.deleteCurso=deleteCurso;
//exports.getCursos= getCursos;
const db= require('../models/database/db');

async function erase (matricula1) {
   let estudiante= await db.Estudiante.destroy({
        where: {
            matricula: matricula1
        }
    });
    return estudiante;
};

async function add(nombre1,matricula1,semestreIngreso1,creditosCursados1){
    let estudiante=await db.Estudiante.create({
        nombre:nombre1,
        matricula:matricula1,
        semestreIngreso:semestreIngreso1,
        creditosCursados:creditosCursados1
    });
    return estudiante;
}

async function findAll(){
    let estudiantes=await db.Estudiante.findAll();
    return estudiantes;
}

async function findByMatricula(matricula2){
    let estudiante=await db.Estudiante.findAll({
        where: {
            matricula: matricula2
        }
    });
    return estudiante[0];
} 

async function save (body) {
    console.log(body);
    let estudiante= await db.Estudiante.update({
        nombre: body.nombre,
        matricula: body.matricula,
        semestreIngreso: body.semestreIngreso,
        creditosCursados: body.creditosCursados
    }, {
        where: {
            matricula:body.matricula
        }
    });
    return estudiante;
}

async function addCurso  (estudianteMatricula1, cursoClave1) {
    // console.log(estudianteMatricula1 + 'Hola');
    // console.log(estudianteMatricula1);
    let cursoEstudiante=await db.CursoEstudiante.create({
        cursoClave: cursoClave1,
        estudianteMatricula: estudianteMatricula1,
    });
    return cursoEstudiante;
}

async function deleteCurso(estudianteMatricula2, cursoClave2) {
   let cursoEstudiante= await db.CursoEstudiante.destroy({
        where: {
            cursoClave: cursoClave2,
            estudianteMatricula: estudianteMatricula2
        }
    });
    return cursoEstudiante;
}

// async function getCursos (matricula3) {
//     let estudiante = await db.Estudiante.findAll({
//         where: {
//             matricula: matricula3
//         }
//     });
//     let cursos = await db.CursoEstudiante.findAll({
//         where: {
//             estudianteMatricula: matricula3
//         }
//     });
//     let cursosPath = cursos.map((curso) => {
//         return "http://localhost:4000/cursos/" + curso.cursoClave;
//     });
//     agregarCursos(estudiante, cursosPath);
//     return estudiante;
// }
