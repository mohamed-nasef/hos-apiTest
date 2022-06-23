const myMongoose = require("mongoose");

const userModel = myMongoose.Schema(
    {
                "_id": "string",
                "password":"string",
                "name": "string",
                "address": "string",
                "phone":"string",
                "departments":"string"
}
)

module.exports=myMongoose.model("user",userModel)