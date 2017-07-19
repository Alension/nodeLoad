/**
 * Created by Alen on 2017/7/19.
 */
var simplePromise=new Promise(function (resolve,reject) {
    setTimeout(function () {
        reject("hello promise");
    },250)
});

simplePromise.then(1,success);

function success(successMessage) {
    console.log(successMessage)
}