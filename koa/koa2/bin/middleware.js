/**
 * Created by Alen on 2017/5/18.
 */
var Koa=require("koa");
var app=new Koa();


app.use(async (ctx, next) => {
    console.log("as1b:"+new Date().getMilliseconds())
    console.log(`请求方式：${ctx.request.method} 请求url：${ctx.request.url}`); // 打印URL,`${}`模板字符串
    await next(); // 调用下一个middleware
    console.log("as1e:"+new Date().getMilliseconds())
});

app.use(async (ctx, next) => {
    console.log("as2b:"+new Date().getMilliseconds())
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
    console.log("as2e:"+new Date().getMilliseconds())
});

app.use(async (ctx, next) => {
    console.log("as3b:"+new Date().getMilliseconds())
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    console.log("as3e:"+new Date().getMilliseconds())
});

app.listen(8888)

console.log('app started at port 3000...');