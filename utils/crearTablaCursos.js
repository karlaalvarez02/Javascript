const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'escolar',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect:'mysql'
    });

const Curso = sequelize.define('cursos', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clave: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    creditos: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Curso.sync({force:true});