/**
 * Created by Alen on 2017/5/19.
 */
const http=require('http');
const nunjucks=require('nunjucks');
const Koa=require('koa');
const router=require('koa-router')();
const app=new Koa();

let user={
    name:"allen",
    age:18,
    likes:['game','basketball']
}
nunjucks.configure('views');
let tem=nunjucks.render('hello.html',{user:user});
console.log(tem)


nunjucks.configure('views',{
    autoescape:true,
    koa:app
});
app.use(async (ctx,next)=>{
    await next()
});
router.get('/',async (ctx)=>{
    ctx.response.body=tem;
});

app.use(router.routes());
app.listen(8888)



