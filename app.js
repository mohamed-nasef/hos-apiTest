const bodyParser = require ("body-parser");
const myMongoose = require ("mongoose");
const express = require("express");
const app = express();
const userRoute = require("./routes/userRoutes");
const port = process.env.PORT || 5000;
const connectionStr = "mongodb+srv://hospital:hospital@cluster0.rtv0q.mongodb.net/hospital?retryWrites=true&w=majority";
const cors = require("cors");


app.use(cors());

app.use(bodyParser.json())

app.use("/user",userRoute)

myMongoose.connect(connectionStr,()=>{
    console.log("connect to mongoo successful")
    app.listen(port,()=>{
        console.log(`server run on port ${port}`);
    })
});

