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

>- 4、[使用sass中间件](https://www.jianshu.com/p/8d518c09ce28)

- 1.引入模块node-sass-middleware;

 <pre>npm install node-sass-middleware</pre>

 - 2.使用node-sass-middleware

<b>当前目录结构</b>
<pre>
public
-scss
--style.scss
-stylesheets
--style.css
</pre>

##### 调用方法

 <pre>
 ……………………
 var sassMiddleware = require('node-sass-middleware');

 var myPrefix = '/static';
 var destination = path.join(__dirname, 'public/stylesheets');
 app.use(sassMiddleware({
   /* Options */
   src: path.join(__dirname, 'public/scss'),
   dest: destination,
   debug: false,
   force: true,
   outputStyle: 'compressed',
   prefix: myPrefix
 }));
 app.use(myPrefix,express.static(path.join(__dirname, 'public')));
 </pre>

 ###### 引入

 <pre>
link(rel='stylesheet', href='/static/style.css')
 </pre>

###### 启动服务即可

>- 5、[使用pug模板](https://github.com/pugjs/pug)

-[中文文档](https://pug.bootcss.com/api/getting-started.html)

>- 6、[使用babel编译es6](https://github.com/pugjs/pug)

>- 7、[解析表单提交返回的数据body的中间件](https://github.com/expressjs/body-parser)

>- 9、[表单验证器](https://github.com/express-validator/express-validator#express-validatorr)

### 准备要实现的功能

功能|完成度|完成日期
--|:--:|--:
注册|0|0
登录|100%|2019-3-18

### 测试的账号密码登录

[测试地址](https://www.yyyno.com/login)

test test
