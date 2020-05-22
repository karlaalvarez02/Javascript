const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'escolar',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect:'mysql'
    });

const CursoEstudiante = sequelize.define('cursoEstudiante', {
    cursoClave: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        reference : {
            model: 'Cursos',
            key: 'clave'
        }
    },
    estudianteMatricula: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        reference : {
            model: 'Estudiantes',
            key: 'matricula'
        }
    }
});

CursoEstudiante.sync({force:true});