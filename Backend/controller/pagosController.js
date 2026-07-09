const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from pagos',(err,pagos) =>{
            if(err){
                res.json(err);
            }
            res.json(pagos);
        });

    });

};

controller.edit = (req, res) => {

    const {idpago}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from pagos where idpago = ?', [idpago], (err,pagos) => {
            res.json(pagos[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into pagos SET ?', [data], (err,pagos) => {
        res.json(pagos);
       });
   })
};

controller.update = (req,res) =>{

    const {idpago}= req.params;
    const nuevo_pagos = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update pagos SET ? where idpago =?', [nuevo_pagos, idpago], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idpago}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE pagos SET estado = "INACTIVO" WHERE idpago = ?', [idpago], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;