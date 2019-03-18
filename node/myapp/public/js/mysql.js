/*
**pool参数根据自己的mysql的配置定义
*下面配置的是作者本地的mysql
*
 */

var mysql=require("mysql");
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'a3271828',
  port: '3306',
  database: 'sys'
});
var query=function(sql,options,callback){
 pool.getConnection(function(err,conn){
  if(err){
   callback(err,null,null);
  }else{
   conn.query(sql,options,function(qerr,vals,fields){
    //释放连接
    conn.release();
    //事件驱动回调
    callback(qerr,vals,fields);
   });
  }
 });
};
module.exports=query;
