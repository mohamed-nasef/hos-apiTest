const express = require ("express");
const userRoutes = express.Router();
const users = require("../models/userModel");

userRoutes.get("/",(req,res)=>{
    users.find().then((data)=>{
        res.json(data);
    })
})

userRoutes.post("/",(req,res)=>{
    const user=new users({
        "_id": req.body._id,
        "password":req.body.password,
        "name":req.body.name,
        "address":req.body.address,
        "phone":req.body.phone,
        "departments":req.body.departments
    })

    user.save().then((data)=>{
        res.json({
            "massage" : "user added",
            "data": data
        })
    })

});

module.exports = userRoutes;