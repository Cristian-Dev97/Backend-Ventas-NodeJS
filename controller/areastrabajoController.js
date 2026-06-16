const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from areas_trabajo',(err,areas_trabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(areas_trabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idarea}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from areas_trabajo where idarea = ?', [idarea], (err,areas_trabajo) => {
            res.json(areas_trabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into areas_trabajo SET ?', [data], (err,areas_trabajo) => {
        res.json(areas_trabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idarea}= req.params;
    const nueva_area = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo SET ? where idarea =?', [nueva_area, idarea], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idarea}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE areas_trabajo SET estado = "INACTIVO" WHERE idarea = ?', [idarea], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;