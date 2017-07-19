/**
 * Created by Alen on 2017/5/18.
 */
let fn_hello=async (ctx)=>{
    let name=ctx.request.params.name;
    ctx.response.body=`hello,${name}`
}

module.exports={
    'GET /hello/:name':fn_hello
}