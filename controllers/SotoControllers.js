const soto =require('../models/Soto')
const mongoose=require('mongoose');
exports.addsoto=(req,res)=>{
    const {
        name,
        fname,
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
        date,
        cubage,
        adress1, 
        distance, 
        adress2, 
        total, 
        roomList,
        
    });
    
    mysoto.save((error,mysoto) => {
      console.log("error in soto",error)
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

