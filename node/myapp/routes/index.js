var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a3271828',
  port: '3306',
  database: 'nodejs'
});
connection.connect();
/* GET home page. */
router.get('/', function(req, res, next) {
  let searchSql = 'SELECT name FROM tb_emp1 WHERE id="4"'; //搜索数据
  connection.query(searchSql, function(error, results, fields) {
    if (error) throw error;
    console.log('--------------------------searchSql----------------------------');
    console.log('search :',results);
    console.log(req)
    console.log(res)
    console.log(next)
    console.log('------------------------------------------------------------\n\n');
    //结束回话
    connection.end();
      res.render('index', { title:  results[0]});
  });
});


module.exports = router;
