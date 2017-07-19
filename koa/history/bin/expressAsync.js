/**
 * Created by Alen on 2017/5/18.
 */
var express=require("express")
var fs=require("fs")
var app=express()

var log=console.log.bind(console)

app.get("/test",function (rep,res) {
    fs.readFile('file1', function (err, data) {
        if (err) {
            res.status(500).send('read file1 error');
        }else {
            res.type('text/plain');
            res.send(data);
        }
        fs.readFile('file2', function (err, data) {
            if (err) {
                res.status(500).send('read file2 error');
            }else {
                res.type('text/plain');
                res.send(data);
            }
        });
    });
  /* fs.readFile("/file1.txt",function (err,data) {
       if (err)
           res.status(500).send("read file1 error");
       fs.readFile("/file2.txt",function (err,data) {
           if (err)
               res.status(500).send("read file2 error");
           res.send(data)
       })
   }) */
}).listen(8888)



