/**
 * Created by Alen on 2017/5/16.
 */
var
    http=require("http"),
    fs=require("fs"),
    path=require("path")

var root=path.resolve();  //得到当前根路径
http.createServer(function (req,res) {
    var filePath=path.join(root,req.url);   //根据当前系统自动生成绝对路径
    console.log(filePath);
    fs.stat(filePath,function (err,stat) {
       if (!err&&stat.isFile()){
           console.log(200+filePath)
            res.writeHead(200);
            fs.createReadStream(filePath).pipe(res);
       }else {
           console.log(404+filePath)
           res.end()
       }
    })

}).listen(8888)
