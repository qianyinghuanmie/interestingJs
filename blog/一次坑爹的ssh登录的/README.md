### 忽然一天自己的阿里云用ssh连接不上了

--- 于是开始了疯狂的寻找方法

-检查当前的ssh开启情况：

<pre><code>ps -e |grep ssh
</code></p

 [参考了这篇文章](https://blog.csdn.net/qq_38228254/article/details/78543840)

- [还有这篇文章](https://yq.aliyun.com/articles/536853?spm=5176.10695662.1996646101.searchclickresult.38a440cdvVOdeq)

- 其中第二篇文章比较详细 按照其中的方法修改了

<pre><code>vim /etc/ssh/sshd_config
</code></p

- 修改完毕后，想要执行重启命令

- 但是并没有发现有sshd的文件夹，遂想起自己的是centos系统

-- [打开](https://www.cnblogs.com/linxx/p/7707615.html)
