var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/mail', function(req, res){
  console.log("sdsds");
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'developer.recordtv@gmail.com',
           pass: 'news-everyday-test'
       }
   });

  const mailOptions = {
    from: 'developer.recordtv@gmail.com', // sender address
    to: 'pebi@5-mail.info', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });

})

module.exports = router;
