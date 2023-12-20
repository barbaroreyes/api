const db = require('./configuration')

 function pedirTodas(req, res, next) { 
      const que = "select * from metas"
        db.query(que, (err,data) => {
            if(err) return res.next(err)
            res.json(data);
        })
    
  }

  function crearUna (req, res, next){
    const que = "insert into metas(`details`,`period`,`icono`,`meta`,`completed`) values(?)"
    const values = [
        req.body.details,
        req.body.period, 
        req.body.icono,
        req.body.meta,
        req.body.completed
    ];
    db.query(que, [values],(err,data) => {
        if(err) return res.json(err)
        res.json('Meta Had been create');
    }) 

  }

  function pedirUna(req,res,next){
    const metaId = req.params.id;
    const que = `select * from metas where id = ? `
    db.query(que, [metaId],(err,data) => {
        if(err) return  next(err)
     res.send(data)
    })
  }

  function actualizar(req,res,next) {
    const metaId = req.params.id;
    const values =[
    req.body.details,
    req.body.period, 
    req.body.icono,
    req.body.meta,
    req.body.completed
    ]
    const que = "update metas set `details`=? ,`period` =?, `icono` = ? ,`meta`=? ,`completed` = ? WHERE id = ?"

    db.query(que,[...values,metaId],(err,data)=>{
        if(err){return  next(err)}
        
        else{
            res.send('update')
        }
        console.log(data)
    })
 
  }
  
  function borrarUna (req,res,next){
    const metaId = req.params.id;
    const que = `delete from metas where id = ?`
    db.query(que ,[metaId],(err ,data)=>{
        if(err){ return next(err)}
        res.json("This meta was deleted")

    })


    

  }
module.exports = {
    pedirTodas,
    crearUna,
    pedirUna,
    borrarUna,
    actualizar
}