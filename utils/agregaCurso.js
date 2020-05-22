const db= require('../models/database/db');

db.Curso.create({
    nombre: 'Sistemas Operativos',
    clave: 1234566,
    creditos:200
}).then(()=>{
    console.log('Curso creado');
}).catch(err=>{
    console.log(err);
}).then(()=>{
    console.log('Cerrando conexion');
    db.sequelize.close();
});