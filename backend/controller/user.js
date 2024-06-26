const express = require("express");
const User = require("../model/user");
const router = express.Router();
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

// create user
router.post("/create-user", createUser);
router.post("/create-seller", createUser);

// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// activate user
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newUser) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar } = newUser;

      let user = await User.findOne({ email });

      if (user) {
        return next(new ErrorHandler("User already exists", 400));
      }
      user = await User.create({
        name,
        email,
        avatar,
        password,
      });

      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login user
router.post(
  "/login-user",
  catchAsyncErrors(async (req, res, next) => {
    try {
      console.log(`User Login`, req.body);
      let logUrl= req.baseUrl.split("/")[3];
  console.log(req.baseUrl, logUrl[3]) // '/admin'
      const { email, password } = req.body;
      let whereObj={};

      whereObj['email']=email;
      if(logUrl=='seller'){
        whereObj['user_type']= 'seller';
      }else{
        whereObj['user_type']= 'customer';
      }
      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }
      // if()
      const user = await User.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendToken(user, 201, res);
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//create user/client
async function createUser(req, res, next) {
  try {
    let body = req.body;
    const { name, email, password, avatar } = req.body;
    console.log(`body`, body);
    const userEmail = await User.findOne({ "email":email });
    console.log(`userEmail `, userEmail);

    if (userEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }
    if (body.role == 'seller') {
      if (!body.shop_name || !body.mobile || !body.email || !body.zipcode || !body.address || !body.password) {
        return next(new ErrorHandler("Im Complete Data. Please Fill all Details.", 400));
      }
    }else{
      body.role == 'customer';
      if (!body.name ||!body.email || !body.password ) {
        return next(new ErrorHandler("Im Complete Data. Please Fill all Details.", 400));
      }
    }
    // const myCloud = await cloudinary.v2.uploader.upload(avatar, {
    //   folder: "avatars",
    // });
    // console.log(`[RES] myCloud`, myCloud);
    let user = {
      name: name,
      email: email,
      password: password,
      user_type: req.body.user_type,
      shop_name: req.body.shop_name,
      // avatar: {
      //   public_id: myCloud.public_id,
      //   url: myCloud.secure_url,
      // },
    };

    let newUser = new User(body);
    newUser.save(newUser, (err, result) => {
      if (err) {
        console.error("Error While Creating user in DB", err);
        return next(new ErrorHandler("Error While Creating user ", 400));
      } else {
        console.log(`New User`, result);
      }
    });

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:3000/activation/${activationToken}`;

    try {
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${user.email} to activate your account!`,
      });
    } catch (error) {
      console.log(`Error 01`, error);
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    console.log(`Error 02`, error);
    return next(new ErrorHandler(error.message, 400));
  }
}




module.exports = router;
