const mongoose=require ('mongoose')
const Sotoschema= new mongoose.Schema(
    {
        name:{
            type:String,
        
        },
        fname:{
            type:String,
        },
        type_dem:{
              type:String,
        },
        email:{
            type:String,
        },
        num:{ type:Number},
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
         
        },
        mycomment:{
          type:String,
          default:"Pas de commentaires"
        },
        total:{
        type: Number,
        
    },
        roomList:{
            type:Array,
          
        },
        cart:{
            type:Array,
        }
    }
)
const Soto=mongoose.model('soto',Sotoschema);
module.exports=Soto;