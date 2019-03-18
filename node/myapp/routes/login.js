var express = require('express');

var query = require("../public/js/mysql.js");
var router = express.Router();
var expressValidator = require('express-validator');
var check = require('express-validator/check').check;
var validationResult = require('express-validator/check').validationResult;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {
    title: 1
  });
});
router.post('/', [
  check('password')
  .isLength({
    min: 2
  })
  .withMessage('must be an email'),
  check('username')
  .isLength({
    min: 2
  })
  .withMessage('ust be at least 6 chars long')
], function(req, res) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({
      errors: errors.mapped()
    });
  }
  let {username ,password}= req.body;
  query("SELECT * FROM user WHERE username=?",[username], function(err, vals, fields) {
    //do something
    if(vals.length>0){
      if(vals[0].password==password){
          res.render('user', {
            title: username
          });
      }
      else{
        res.json({msg:"密码错误"})
      }
    }else{
      res.json({msg:"该账号未注册"})
    }
  });


});
module.exports = router;
