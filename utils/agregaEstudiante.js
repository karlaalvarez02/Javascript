const db= require('../models/database/db');

db.Estudiante.create({
    nombre: 'Alain Pereida',
    matricula: 13453675,
    semestreIngreso:'2016-2',
    creditosCursados:200
}).then(()=>{
    console.log('Estudiante creado');
}).catch(err=>{
    console.log(err);
}).then(()=>{
    console.log('Cerrando conexion');
    db.sequelize.close();
});