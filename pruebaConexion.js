const Sequelize=require('sequelize');

const sequelize=new Sequelize(
    'escolar',
    'backenduser',
    'superpassword',
    {
        host:'localhost',
        dialect:'mysql'
    });

sequelize
.authenticate()
.then(()=>{
    console.log('Se conecto exitosamente');
})
.then(()=>{
    cierra();
})
.catch(err=>{
    console.error('Error al conectarse a la BD:',err);
});

const cierra =async function(){
    await sequelize.close();
}