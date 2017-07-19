/**
 * Created by Alen on 2017/5/18.
 */
var log=console.log.bind(console)
var Koa=require("koa")
var app=new Koa()

app.use(async (ctx, next) => {
  await next();
  ctx.response.type="text/html";
  ctx.response.body="<h1>hello,koa2</h1>";
}).listen(8888);