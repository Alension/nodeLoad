/**
 * Created by Alen on 2017/5/15.
 */
var empty={} //没有任何属性的对象
var point1={x:0,y:0} //两个属性
var point2={
    x:point1.x,
    y:point1.y
}
var book={
    name:"sanguo",
    "author name":"chenenWu",  //属性名有空格或 - ，必须用字符串表示
    "leading role":{
        name:"liangZhuGe",
        "sex":"man"
    }
}
