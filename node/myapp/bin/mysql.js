var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'a3271828',
  port: '3306',
  database: 'nodejs'
});

connection.connect();

let searchSql = 'SELECT * FROM tb_emp1'; //搜索数据
let  addSql = 'INSERT INTO tb_emp1(id,name,deptId,salary) VALUES(4,"xu","1","2")';//插入数据
let  updateSql = 'UPDATE tb_emp1 SET name = "xuwei" WHERE id = 4';//更新数据
let delSql = 'DELETE FROM tb_emp1 where id=4';//删除数据
connection.query(updateSql, function(error, results, fields) {
  if (error) throw error;
  console.log('--------------------------INSERT----------------------------');
  console.log('UPDATE ID:',results);
  console.log('------------------------------------------------------------\n\n');
  //结束回话
  connection.end();
});
