//import '/estudiantes.js'
const r ={
    findById,
    findByMatricula,
    findAll,
}=require('./estudiantes.js');

const express=require('express');
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('Acceder al API /estudiantes');
    
});
app.get('/estudiantes',(req,res)=>{
    //res.send('Consultando todos los registros de estudiantes');
   let registro=r.findAll();
    res.status(200).json(registro);
});
// app.get('/estudiantes/:id',(req,res)=>{
//    // res.send('Consultando el registro del estudiante '+req.params.id);
//    let registro=r.findById(req.params.id);
//    if(registro){
//     res.status(200).json(registro);
//    }
// });
app.get('/estudiantes/:matricula',(req,res)=>{
    let registro=r.findByMatricula(req.params.matricula);//params
    if(registro){
     res.status(200).json(registro);
    }
});
// app.put('/estudiantes/:id',(req,res)=>{
//     res.send('Modificando el registro del estudiante '+ req.params.id);
// });
// app.patch('/estudiantes/:id',(req,res)=>{
//     res.send('Modificando atributos del estudiante '+req.params.id);
// });
// app.delete('/estudiantes/:id',(req,res)=>{
//     res.send('Eliminando estudiante '+req.params.id);
// })

app.listen(port,()=>{
    console.log('Servidor escuchando por el puerto: ',port);
}).on('error',err=>{
    console.log('Error al iniciar el servidor: ',err);
});