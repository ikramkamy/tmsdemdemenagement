const express= require ('express');
const router=express.Router();
const {addsoto}=require('../controllers/SotoControllers');

router.post('/ajouter-une-soto-commande',addsoto);
module.exports=router;