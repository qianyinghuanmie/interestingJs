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
    console.log('------------------------------------------------------------\n\n');
    //结束回话
    connection.end();
  });
  res.render('index', { title: "1"});
});

router.get('/select', ctx => {
  return new Promise(resolve => {
    let name = ctx.query.name;
    let searchSql = 'SELECT name FROM tb_emp1 WHERE id="4"'; //搜索数据
    connection.query(sql, (err, result) => {
      if (err) throw err;
      ctx.body = {
        code: 200,
        data: result
      }
      resolve();
    })
  })
})

module.exports = router;
