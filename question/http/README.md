### http简介

###### HTTP协议是Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。。

### http 工作原理

HTTP协议工作于客户端-服务端架构上。浏览器作为HTTP客户端通过URL向HTTP服务端即WEB服务器发送所有请求。

Web服务器根据接收到的请求后，向客户端发送响应信息。

HTTP默认端口号为80，但是你也可以改为8080或者其他端口。

### http 消息结构

HTTP是基于客户端/服务端（C/S）的架构模型，通过一个可靠的链接来交换信息，是一个无状态的请求/响应协议。

一个HTTP"客户端"是一个应用程序（Web浏览器或其他任何客户端），通过连接到服务器达到向服务器发送一个或多个HTTP的请求的目的。

一个HTTP"服务器"同样也是一个应用程序（通常是一个Web服务，如Apache Web服务器或IIS服务器等），通过接收客户端的请求并向客户端发送HTTP响应数据。

HTTP使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。

一旦建立连接后，数据消息就通过类似Internet邮件所使用的格式[RFC5322]和多用途Internet邮件扩展（MIME）[RFC2045]来传送

### 客户端请求消息

客户端发送一个HTTP请求到服务器的请求消息包括以下格式：请求行（request line）、请求头部（header）、空行和请求数据四个部分组成，下图给出了请求报文的一般格式。

### 服务器响应消息

HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

### http请求方法

序号|方法|描述
--|:--:|:--:
1|GET|请求指定的页面信息，并返回实体主体。
2|HEAD|类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
3|POST|向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
4|PUT|从客户端向服务器传送的数据取代指定的文档的内容。
5|DELETE|请求服务器删除指定的页面
6|CONNECT|HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
7|OPTIONS|允许客户端查看服务器的性能。
8|TRACE|回显服务器收到的请求，主要用于测试或诊断。



### http响应头信息

应答头|说明
--|:--:
Allow|服务器支持那些请求方法（如GET、POST，PUT，DELETE等）。
Content-Encoding|文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。Java的GZIPOutputStream可以很方便地进行gzip压缩，但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，为其他浏览器返回普通页面。
Content-Length|表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入Content-Length头，最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。
Content-Type|表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。
Date|当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。
Expires|应该在什么时候认为文档已经过期，从而不再缓存它？
Last-Modified|文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。
Location|表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。
Refresh|表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http://host/path")让浏览器读取指定的页面。注意这种功能通常是通过设置HTML页面HEAD区的＜META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。
Server|服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设
Set-Cookie|设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。WWW-Authenticate|客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。注意Servlet一般不进行这方面的处理，而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。

### http状态码

状态码|说明
--|:--:
100|继续
101|切换协议
200|请求成功
201|created，已创建
202|Accepted，接受
203|非授权的信息，请求成功，Non-Authoritative Information
204|服务器处理成功，但是没有内容。no content
205|重置内容。Reset Content
206|部分内容 Partial Content
300|多种选择
301|永久移动
302|临时移动
303|查看其他地址
304|未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，
305|使用代理。所请求的资源必须通过代理访问 Use Proxy
306|已经被废弃的HTTP状态码
307|临时重定向。与302类似。使用GET请求重定向
400|客户端请求的语法错误，服务器无法理解 	Bad Request
401|请求要求用户的身份认证 	Unauthorized
402|请保留，将来使用	Payment Required
403|服务器理解请求客户端的请求，但是拒绝执行此请求	Forbidden
404|服务器无法根据客户端的请求找到资源（网页）。 not found
405|客户端的请求被中止。
406|服务器无法根据客户端请求的内容特性完成请求
407|请求要求代理的身份认证
408|服务器等待客户端发送的请求时间过长，超时
409|服务器处理请求时发生了冲突
410|客户端请求的资源已经不存在
411|服务器无法处理客户端发送的不带Content-Length的请求信息
412|客户端请求信息的先决条件错误
413|由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
414|请求的URI过长（URI通常为网址），服务器无法处理
415|服务器无法处理请求附带的媒体格式
416|客户端请求的范围无效
417|服务器无法满足Expect的请求头信息
500|服务器内部错误，无法完成请求 Internal Server Error
501|服务器不支持请求的功能，无法完成请求
502|作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应
503|由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
504|充当网关或代理的服务器，未及时从远端服务器获取请求
505|服务器不支持请求的HTTP协议的版本，无法完成处理