const express= require("express")
const router=express.Router()
const FamilyController =require("../controllers/FamilyController")
router.get("/",FamilyController.getAllFamilies)
router.get("/:id",FamilyController.getFamilyById)
router.post("/",FamilyController.addFamily)
router.put("/",FamilyController.updateFamily)
router.delete("/",FamilyController.deleteFamily)

module.exports=router