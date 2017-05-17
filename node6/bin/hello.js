/**
 * Created by Alen on 2017/5/16.
 */
var http=require("http")

http.createServer(function (req,res) {
    res.writeHeader(200,{ContentType:"text/html"})
    res.end('<h1>hello,node js</h1>')
}).listen(8080)