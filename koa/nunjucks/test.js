/**
 * Created by Alen on 2017/5/19.
 */
const http=require('http');

http.get('http://localhost:8080/p2p/payInterest.action',function (req,res) {
    var html='';
    req.on('data',function(data){
        html+=data;
    });
    req.on('end',function(){
        console.info(html);
    });
})