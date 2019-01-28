var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a3271828',
  port: '3306',
  database: 'nodejs'
});

connection.connect();

connection.query('SELECT * FROM tb_emp1', function(error, results, fields) {
  if (error) throw error;
  console.log(results);

  //结束回话
  connection.end();
});
