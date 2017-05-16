/**
 * Created by Alen on 2017/5/15.
 */

/**
 * 见javascript权威指南p121
 */

var a={
    name:"alen",
    do:function () {
        this.name="lengxin"
    },
    like:{
        name1:"basketball",
        name2:"pingpong"

    },
    born:new Date("1995-06-01")

}
var jsonStr=JSON.stringify(a)
console.log(jsonStr)

var b=JSON.parse(jsonStr)
console.log(b)

Date.toJSON()
