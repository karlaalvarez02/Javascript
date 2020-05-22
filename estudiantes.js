const estudiantes=[
    {
        id:"1",
        matricula:"1148386",
        nombre:"Karla",
        semestreIngreso:"2016-2",
        creditos:"200"
    },
    {
        id:"2",
        matricula:"11463946",
        nombre:"Mario",
        semestreIngreso:"2017-1",
        creditos:"120"
    },
    {
        id:"3",
        matricula:"1199946",
        nombre:"Marla",
        semestreIngreso:"2018-1",
        creditos:"220"
    },
    {
        id:"4",
        matricula:"11192946",
        nombre:"Carolina",
        semestreIngreso:"2012-1",
        creditos:"320"
    },
    {
        id:"5",
        matricula:"1157926",
        nombre:"Silvia",
        semestreIngreso:"2019-1",
        creditos:"150"
    }

];

const findById=function(id){
    return estudiantes.find((e)=>{
        return e.id==id;
    })
};

const findByMatricula=function(matricula){
    return estudiantes.find((e)=>{
        return e.matricula===matricula;
    })
};

const findAll=function(){
    return estudiantes;
};

exports.findAll=findAll;
exports.findByMatricula=findByMatricula;
exports.findById=findById;
