const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from tipousuario',(err,tipousuario) =>{
            if(err){
                res.json(err);
            }
            res.json(tipousuario);
        });

    });

};

controller.edit = (req, res) => {

    const {idtpusuario}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from tipousuario where idtpusuario = ?', [idtpusuario], (err,tipousuario) => {
            res.json(tipousuario[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipousuario SET ?', [data], (err,tipousuario) => {
        res.json(tipousuario);
       });
   })
};

controller.update = (req,res) =>{

    const {idtpusuario}= req.params;
    const nuevo_tipo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipousuario SET ? where idtpusuario =?', [nuevo_tipo, idtpusuario], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtpusuario}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE tipousuario SET estado = "INACTIVO" WHERE idtpusuario = ?', [idtpusuario], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;