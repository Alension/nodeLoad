/**
 * Created by Alen on 2017/5/16.
 */

/**
 *for/in循环可循环遍历对象所有自由和继承的可枚举属性和方法
 */
var i={
    x:1,
    print:function (data) {
        console.log(data)
    }
}
console.log(i.hasOwnProperty("print"))  //true  对象的函数也是属性
var o=Object.create(i)
o.y=2;
//打印全部属性和方法
for(var p in o){
    console.log(p)
}
//过滤方法以及继承属性
for(var p in o ){
    if (typeof o[p]==="function")
        continue
    if (!o.hasOwnProperty(p))
        continue
    console.log(p)
}
/**
 *其它遍历属性方法
 */
//Object.keys()  返回所有自有属性的数组
var keys=Object.keys(o)
console.log(keys)  //['y']

//Object.getOwnPropertyNames() 返回所有自有属性的数组，包括不可枚举的属性
var propertyNames=Object.getOwnPropertyNames(o)
console.log(propertyNames)  //['y']
