const soto =require('../models/Soto')
const mongoose=require('mongoose');
exports.addsoto=(req,res)=>{
    const {
        name,
        fname,
        type_dem,
        email,
        num,
        date,
        cubage,
        adress1, 
        distance, 
        adress2, 
        total, 
        roomList, 
        
    } = req.body;
    
    const mysoto = new soto({
        name,
        fname,
        type_dem,
        email,
        num,
        date,
        cubage,
        adress1, 
        distance, 
        adress2, 
        total, 
        roomList,
        
    });
    
    mysoto.save((error,mysoto) => {
      console.log(mysoto)
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
    
        }
      if (mysoto) {
          return res.status(201).json(mysoto);
        }
      });

}

exports.getallsoto=(req,res)=>{
  soto.find().then((data) => {
    res.json(data)
    })
    .catch((err) => {
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });
}