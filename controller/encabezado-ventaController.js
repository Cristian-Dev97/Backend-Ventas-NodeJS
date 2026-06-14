const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from encabezado_venta',(err,encabezado_venta) =>{
            if(err){
                res.json(err);
            }
            res.json(encabezado_venta);
        });

    });

};

controller.edit = (req, res) => {

    const {num_venta}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from encabezado_venta where num_venta = ?', [num_venta], (err,encabezado_venta) => {
            res.json(encabezado_venta[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into encabezado_venta SET ?', [data], (err,encabezado_venta) => {
        res.json(encabezado_venta);
       });
   })
};

controller.update = (req,res) =>{

    const {num_venta}= req.params;
    const nuevo_encabezado = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update encabezado_venta SET ? where num_venta =?', [nuevo_encabezado, num_venta], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {num_venta}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE encabezado_venta SET estado = "INACTIVO" WHERE num_venta = ?', [num_venta], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;