exports.findByClave = findByClave;
exports.findAll = findAll;
exports.add = add;
exports.save = save;
exports.erase = erase;
exports.getListaEstudiantes=getListaEstudiantes;
const db= require('../models/database/db');

async function erase (clave1) {
   let curso= await db.Curso.destroy({
        where: {
            clave: clave1
        }
    });
    return curso;
};

async function add(nombre1,clave1,creditos1){
    let curso=await db.Curso.create({
        nombre:nombre1,
        clave:clave1,
        creditos:creditos1
    });
    return curso;
}

async function findAll(){
    let cursos=await db.Curso.findAll();
    return cursos;
}

async function findByClave(clave2){
    let curso=await db.Curso.findAll({
        where: {
            clave: clave2
        }
    });
    return curso[0];
} 

async function save (body) {
    //console.log(body);
    let curso= await db.Curso.update({
        nombre: body.nombre,
        clave: body.clave,
        creditos: body.creditos
    }, {
        where: {
            clave:body.clave
        }
    });
    return curso;
}



async function getListaEstudiantes(clave6) {
    console.log(clave6+" verga");
    let cursos = await db.Curso.findOne({
        where:{
            clave:clave6
        }
    });
    console.log(cursos);
        let estudiantes = await db.CursoEstudiante.findAll({
            where: {
                cursoClave: cursos.clave
            }
        });
        let urlEstudiantes = estudiantes.map((estudiante) => {
            return  estudiante.estudianteMatricula
        });
        agregarListaEstudiantes(cursos, urlEstudiantes);
    return cursos;
}


function agregarListaEstudiantes(curso, urlEstudiantes) {
    curso["dataValues"].estudiantes = urlEstudiantes;
}

// async function getListaEstudiantes(clave3){
//     let lista = await db.CursoEstudiante.findAll({
//         where:{
//             cursoClave: clave3
//         }
//     });
//     return lista;
