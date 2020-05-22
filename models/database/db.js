const Sequelize=require('sequelize');
const sequelize=new Sequelize(
    'escolar',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect:'mysql'
    });

const Estudiante=sequelize.define('estudiante',{
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    matricula:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    semestreIngreso:{
        type:Sequelize.STRING,
        allowNull:true
    },
    creditosCursados:{
        type:Sequelize.INTEGER,
        allowNull: true,
        defaultValue:0
    }
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

exports.Estudiante=Estudiante;
exports.Curso=Curso;
exports.CursoEstudiante=CursoEstudiante;
exports.sequelize=sequelize;
exports.Sequelize=Sequelize;