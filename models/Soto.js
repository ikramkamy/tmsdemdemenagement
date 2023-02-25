const mongoose=require ('mongoose')
const Sotoschema= new mongoose.Schema(
    {
        name:{
            type:String,
        
        },
        fname:{
            type:String,
        },
        date:{
            
            type:Date,
        
        }, 
        cubage:{type:String,
        
        }, 
        adress1:{
            type:String,
         
        
        } ,
        distance:{type:String,
            
        }, 
        adress2:{
           type:String,
           required:true
        },
        total:{
        type: Number,
        
    },
        roomList:{
            type:Array,
          
        }
    }
)
const Soto=mongoose.model('soto',Sotoschema);
module.exports=Soto;