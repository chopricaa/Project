const express = require("express");
const router=express.Router();
const {createParcel,getAllParcels,updateParcel,getOneParcel,getUserParcel,deleteParcel} = require("../controllers/parcel");
const { verifyToken, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");

//add parcel
router.post("/", verifyToken, createParcel)

///get all parcel
router.get("/", getAllParcels)

//update parcel
router.put("/:id",updateParcel)

//get one parcel
router.get("/find/:id",getOneParcel)

//get users parcel
router.post("/me",getUserParcel)

//delete parcel
router.delete("/:id",deleteParcel)
module.exports=router;