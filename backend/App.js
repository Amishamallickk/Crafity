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
App.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    });
}

// import routes
const user = require("./controller/user");

App.use("/api/v2/user", user);
App.use("/api/v2/seller", user);

//Its for Error Handling
App.use(ErrorHandler);
// Middleware to set CORS headers
App.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // res.header('Access-Control-Allow-Credentials', 'true'); // Set to true for credentials to be allowed
    // res.header('ngrok-skip-browser-warning', 'true');

    next();
});

module.exports = App;