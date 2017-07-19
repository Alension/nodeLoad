/**
 * Created by Alen on 2017/5/18.
 */
let Koa = require("koa");
let router = require("koa-router")();
let app = new Koa();
const bodyParser = require("koa-bodyparser");
let log = console.log.bind(console);

app.use(async (ctx, next) => {
    log(`请求方式:${ctx.method} 请求url:${ctx.url}`);
    await next()
})

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.body = `<h1>hello,${name}</h1>`;
});

router.get("/", async (ctx) => {
    ctx.body = `<form method="post" action="/login"><label>用户名:</label><input name="uName" value="koa"/><label>密码</label><input name="uPwd" type="password"><button type="submit">登录</button></form>`
});

router.post("/login", async (ctx) => {
    let name = ctx.request.body.uName || '';
    let pwd = ctx.request.body.uPwd || '';
    log(`用户名为${name},密码为${pwd}`);
    if (name == "koa" && pwd == "12345") {
        ctx.body = `欢迎您:${name}`;
    } else {
        ctx.body = `<h1>login failed!</h1><a href="/">try again?</a>`
    }
});
app.use(bodyParser());
app.use(router.routes());

app.listen(8888)