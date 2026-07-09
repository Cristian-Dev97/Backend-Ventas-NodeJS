const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from tipoproducto',(err,tipoproducto) =>{
            if(err){
                res.json(err);
            }
            res.json(tipoproducto);
        });

    });

};

controller.edit = (req, res) => {

    const {idtpprod}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from tipoproducto where idtpprod = ?', [idtpprod], (err,tipoproducto) => {
            res.json(tipoproducto[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into tipoproducto SET ?', [data], (err,tipoproducto) => {
        res.json(tipoproducto);
       });
   })
};

controller.update = (req,res) =>{

    const {idtpprod}= req.params;
    const nuevo_tipoproduc = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update tipoproducto SET ? where idtpprod =?', [nuevo_tipoproduc, idtpprod], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idtpprod}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE tipoproducto SET estado = "INACTIVO" WHERE idtpprod = ?', [idtpprod], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;