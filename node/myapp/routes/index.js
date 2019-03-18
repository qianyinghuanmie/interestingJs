var express = require('express');
var router = express.Router();
var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: '118.31.33.175',
//   user: 'xuwei',
//   password: 'Xuwei@123',
//   port: '3306',
//   database: 'sys'
// });
// connection.connect();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   let searchSql = 'SELECT username FROM user WHERE id=1'; //搜索数据
//   connection.query(searchSql, function(error, results, fields) {
//     if (error) throw error;
//     console.log('--------------------------searchSql----------------------------');
//     console.log('search :',results);
//     console.log('search :',results[0]);
//     console.log('search :',results[0].username);
//     console.log('------------------------------------------------------------\n\n');
//     //结束回话
//     connection.end();
//
//   });
// });
router.get('/', function(req, res, next) {
  res.render('index', { title:  "customer"});
});

module.exports = router;
