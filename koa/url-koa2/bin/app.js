/**
 * Created by Alen on 2017/5/18.
 */
const Koa=require("koa");
const app=new Koa();
const router=require("koa-router")();
const bodyParser=require("koa-bodyparser");
const fs=require("fs");


app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

function addControllers() {
    var files=fs.readdirSync('../lib/controllers');
    console.log(files);
    files.filter((f)=>{
        return f.endsWith('.js')
    });
    addMapping(files);
    return router.routes();
}

function addMapping(files) {
    for(let f of files){
        console.log(`process controller: ${f}...`);
        let mapping=require('../lib/controllers/'+f);
        console.log(mapping);
        for(let url in mapping){
            if (mapping.hasOwnProperty(url)){
                if (url.startsWith('GET')){
                    let path=url.substring(4);
                    router.get(path,mapping[url]);
                }
                if (url.startsWith('POST')){
                    let path=url.substring(5);
                    router.post(path,mapping[url]);
                }
            }
        }
}


}

app.use(bodyParser());

app.use(addControllers());

app.listen(8888)


