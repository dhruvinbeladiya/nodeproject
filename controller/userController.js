const userModel = require("../model/userModel")
var nodemailer = require('nodemailer');

exports.insert = async(req,res) => {
    var data = await userModel.create(req.body)
    res.status(200).json({
        data
    })
}

exports.getData = async(req,res) => {
    var data = await userModel.find()
    res.status(200).json({
        data
    })
}