const express = require("express")
const FamilyController = require("../controllers/FamilyController")
const verifyJWT = require("../middleware/verifyJWT")
const verifyAdmin = require("../middleware/verifyAdmin")
const router = express.Router()

router.use(verifyJWT)
router.use(verifyAdmin)

router.get("/", FamilyController.getAllFamilies)
router.get("/:id", FamilyController.getFamilyById)
router.post("/", FamilyController.addFamily)
router.put("/", FamilyController.updateFamily)
router.delete("/", FamilyController.deleteFamily)

module.exports = router