/**
 * Created by Alen on 2017/5/18.
 */

var express=require("express"); //return function

var app=express()

app.get("/",function (rep,res) {
    res.send("hello express");
}).listen(8888)