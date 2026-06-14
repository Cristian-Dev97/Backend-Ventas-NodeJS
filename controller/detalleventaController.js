const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from detalleventa',(err,detalleventa) =>{
            if(err){
                res.json(err);
            }
            res.json(detalleventa);
        });

    });

};

controller.edit = (req, res) => {

    const {iddetventa}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from detalleventa where iddetventa = ?', [iddetventa], (err,detalleventa) => {
            res.json(detalleventa[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into detalleventa SET ?', [data], (err,detalleventa) => {
        res.json(detalleventa);
       });
   })
};

controller.update = (req,res) =>{

    const {iddetventa}= req.params;
    const nuevo_detalle = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update detalleventa SET ? where iddetventa =?', [nuevo_detalle, iddetventa], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {iddetventa}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE detalleventa SET estado = "INACTIVO" WHERE iddetventa = ?', [iddetventa], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;