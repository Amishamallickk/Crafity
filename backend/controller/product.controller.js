const express = require("express");
const Model = require("../model/product.model");
const router = express.Router();
const cloudinary = require("cloudinary");
const ErrorHandler = require("../utils/ErrorHandler");
const reqUtil = require("../utils/req.util");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const productModel = require("../model/product.model");
const { error } = require("console");

// create/update the controller methods
router.post("/create", createRecord);
router.post("/update", updateRecord);
router.post("/list", getRecords);


//create user/client
async function createRecord(req, res, next) {
  try {
    let body = req.body;
    console.log(`new product`, body);
    // let productKeys = await productModel.find(body);
    let keyList = ['category', 'name', 'description', 'shop', 'price', 'discount_price',  'stock'];

    let validationResult = reqUtil.validateRequestBody(body, keyList);
    if (validationResult.error) {
      console.error(`REQ Err `, validationResult.error);
      return next(new ErrorHandler("Please provide the all fields!" + validationResult.error, 400));
    }
    if (!body._id) {

    }
    let newRecord = new productModel(body);
    newRecord.save(newRecord, (error, result) => {
      if (error) {
        console.error("Error While Creating Record in DB", error);
        // return next(new ErrorHandler("Error While Creating Record in DB ", 400));
        if (error.name === 'ValidationError') {
          // Extract error messages for each field
          const errors = {};
          for (const field in error.errors) {
            errors[field] = error.errors[field].message;
          }

          // Now you can send these error messages to the frontend
          return res.status(400).json({ errors });
        } else {
          // Handle other types of errors
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        console.log(`New User`, result);
        return res.status(201).json({
          success: true,
          message: `Product created  successfully!`,
        });
      }
    });

  }
  catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
}


//create user/client
async function updateRecord(req, res, next) {
  try {
    let body = req.body;
    console.log(`new product`, body);
    // let productKeys = await productModel.find(body);
    let keyList = ['category', 'name', 'description', 'image_Url', 'shop', 'price', 'discount_price', 'rating', 'total_sell', 'stock'];

    let validationResult = reqUtil.validateRequestBody(body, keyList);
    if (validationResult.error) {
      console.error(`REQ Err `, validationResult.error);
      return next(new ErrorHandler("Please provide the all fields!" + validationResult.error, 400));
    }
    if (!body._id) {
      console.error(`REQ Mandatory is _id`);
      return next(new ErrorHandler("REQ Mandatory is _id ", 400));
    }
    await productModel.findByIdAndUpdate(body._id, body)
      .then((result, error) => {
        if (error) {
          console.error("Error While Updating Record in DB", error);
          // return next(new ErrorHandler("Error While Creating Record in DB ", 400));
          if (error.name === 'ValidationError') {
            // Extract error messages for each field
            const errors = {};
            for (const field in error.errors) {
              errors[field] = error.errors[field].message;
            }
            // Now you can send these error messages to the frontend
            return res.status(400).json({ errors });
          } else {
            // Handle other types of errors
            return res.status(500).json({ error: 'Internal Server Error' });
          }
        } else {
          console.log(`New User`, result);
          return res.status(201).json({
            success: true,
            message: `Product Updated successfully!`,
          });
        }
      });

  }
  catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
}

//get list
async function getRecords(req, res, next) {
  try {
    let body = req.body;
    console.log(`req body`, body);
    let keyList = ['shop'];

    let validationResult = reqUtil.validateRequestBody(body, keyList);
    if (validationResult.error) {
      console.error(`REQ Err `, validationResult.error);
      return next(new ErrorHandler("Please provide the all fields!" + validationResult.error, 400));
    }

    await productModel.find({ "shop": body.shop })
      .then((result) => {
        console.log(`New User`, result);
        return res.status(201).json({
          success: true,
          message: `Data Fetched successfully!`,
          data:result
        });
      }).catch((error) => {
        console.error("Error While Updating Record in DB", error);
        // return next(new ErrorHandler("Error While Creating Record in DB ", 400));
        if (error.name === 'ValidationError') {
          // Extract error messages for each field
          const errors = {};
          for (const field in error.errors) {
            errors[field] = error.errors[field].message;
          }
          // Now you can send these error messages to the frontend
          return res.status(400).json({ errors });
        } else {
          // Handle other types of errors
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      })
  }
  catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 500));
  }
}

module.exports = router;
