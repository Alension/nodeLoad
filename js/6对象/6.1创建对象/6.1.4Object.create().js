/**
 * Created by Alen on 2017/5/15.
 */

/**
 * 第一个参数时对象的原型
 * 第二个参数是可选参数，用来对对象属性进一步描述
 */
var point={x:1,y:2}
var op=Object.create(point)
console.log(point)
console.log(op)
console.log("op.x:"+op.x+" "+"op.y:"+op.y)