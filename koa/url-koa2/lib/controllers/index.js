/**
 * Created by Alen on 2017/5/18.
 */
const log=console.log.bind(console)
let fn_index=async (ctx)=>{
    ctx.response.body=`<form method="post" action="/signin">
    <label>用户名:</label><input name="uName" value="koa"/>
    <label>密码</label><input name="uPwd" type="password">
    <button type="submit">登录</button>
</form>`
}

var fn_signin=async (ctx)=>{
    let name=ctx.request.body.uName || '';
    let pwd=ctx.request.body.uPwd || '';
    log(`用户名为${name},密码为${pwd}`);
    if (name=="koa"&&pwd=="12345"){
        ctx.body=`欢迎您:${name}`;
    }else{
        ctx.body=`<h1>login failed!</h1>
        <a href="/">try again?</a>`
    }
}

module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin
}