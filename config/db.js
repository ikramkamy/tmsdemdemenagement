const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://ikramzerkout:tmsdem@cluster0.ffmb6.mongodb.net/test",{},(err)=>{
if(err)
console.log("ERROR IN CONNECTION WITH SERVER IS",err)
else 
console.log("tout est bien base de de donnée connectée pour TMSDEM")
})
module.exports=mongoose.connection;