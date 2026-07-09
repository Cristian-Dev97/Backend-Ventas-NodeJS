const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from clientes',(err,clientes) =>{
            if(err){
                res.json(err);
            }
            res.json(clientes);
        });

    });

};

controller.edit = (req, res) => {

    const {num_clie}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from clientes where num_clie = ?', [num_clie], (err,clientes) => {
            res.json(clientes[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into clientes SET ?', [data], (err,clientes) => {
        res.json(clientes);
       });
   })
};

controller.update = (req,res) =>{

    const {num_clie}= req.params;
    const nuevo_cliente = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update clientes SET ? where num_clie =?', [nuevo_cliente, num_clie], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {num_clie}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE clientes SET estado = "INACTIVO" WHERE num_clie = ?', [num_clie], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;