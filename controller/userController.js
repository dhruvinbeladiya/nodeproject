const userModel = require("../model/userModel")
var nodemailer = require('nodemailer');

exports.insert = async(req,res) => {
    var otp = Math.floor(1000 + Math.random() * 9000)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dhruvinbeladiya01@gmail.com',
          pass: 'iooiqaicorkiamqu'
        }
      });
      
      var mailOptions = {
        from: 'dhruvinbeladiya01@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: otp.toString() 
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });


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
