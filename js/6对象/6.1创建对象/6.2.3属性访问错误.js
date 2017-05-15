/**
 * Created by Alen on 2017/5/15.
 */

/**
 * 查询一个对象自身及原型链中不存在的属性并不会报错，而是会返回undefined
 * 但是如果继续查询这个属性的属性，就会出现问题
 */

var book = {
    title: "sanguo"
}
console.log(book.price)   //undefined
//var unit=book.price.unit  //error

/**
 * 为了避免这种情况可以这么写
 */
if (book) {
    if (book.price)
        var unit = book.price.unit
}
/**
 * 漂亮的代码
 */
var unit = book && book.price && console.log(book.price.unit)

