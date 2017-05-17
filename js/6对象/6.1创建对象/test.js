/**
 * Created by Alen on 2017/5/16.
 */


var scope="global scope";
function checkscope() {
 var scope="local scope"

    function f() {
        return scope
    }
    return f()
}
console.log(checkscope().prototype)

var aa={};
console.log(aa.prototype)

