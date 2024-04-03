const express = require("express");
const ErrorHandler = require("./middleware/error");
const App = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

App.use(express.json());
App.use(cookieParser());
App.use(cors());
App.use("/", express.static("uploads"));
App.use(bodyParser.urlencoded({extended:true,limit:"50mb"}));


//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"backend/config/.env"
    });
}

// import routes
const user = require("./controller/user");

App.use("/api/v2/user",user);

//Its for Error Handling
App.use(ErrorHandler);


module.exports=App;