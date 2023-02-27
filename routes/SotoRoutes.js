const express= require ('express');
const router=express.Router();
const {addsoto,getallsoto}=require('../controllers/SotoControllers');

router.post('/ajouter-une-soto-commande',addsoto);
router.get('/getallsoto',getallsoto);
module.exports=router;