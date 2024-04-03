const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors.js");
const jwt = require("jsonwebtoken");
// const User = require("../model/user.js");

// exports.isAuthenticated = catchAsyncErrors(async(req,res,next) => {
//     const {token} = req.cookies;

//     if(!token){
//         return next(new ErrorHandler("Please login to continue", 401));
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

//     req.user = await User.findById(decoded.id);

//     next();
// });

//some route will be for only seller ans some will be only for user. user cant access seller route and seller cant access user route. We will check the tole if the role is user then we will filter that out if the role is seller then we will filter that out.
