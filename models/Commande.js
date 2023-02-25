const mongoose = require("mongoose");
const CommandeSchema = new mongoose.Schema(
  {
      cart:{
          type:Array,
          default:[],
      },
      user:{
         type:Array,
         default:[],
      }
  } 
);



const Commande=mongoose.model('commande', CommandeSchema);
module.exports=Commande;