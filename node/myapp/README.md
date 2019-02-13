<h1>
  express实践项目
</h1>

>- 1、[mysql安装](http://www.runoob.com/mysql/mysql-install.html)

>- 2、[nodejs连接数据库](http://www.runoob.com/nodejs/nodejs-mysql.html)

###### 连接数据库遇到的问题

######  [连接数据库遇到的问题](https://juejin.im/post/5b5e820d5188251b12430519)

######  在mysql命令界面输入以下的命令

######  alter user  'root'@'localhost' identified with mysql_native_password by '123456'

######  flush privileges;

>- 3、[安装pm2并使用pm2启动](https://pm2.io/doc/zh/runtime/guide/ecosystem-file/)

###### pm2这个生态文件还蛮好用的。

###### pm2一些简单的指令

pm2 start ecosystem.config.js

pm2 stop ecosystem.config.js

pm2 restart ecosystem.config.js

pm2 reload ecosystem.config.js

### 项目实践

###### 查询sql语句

###### 删除sql语句

###### 增加sql语句

###### 修改sql语句
