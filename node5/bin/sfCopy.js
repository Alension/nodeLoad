var fs=require("fs");

/**
 *小文件拷贝
 */


function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}
main(process.argv.slice(2));

/**
 * 命令行:node sfCopy.js a.txt b.txt
 * process.args获取命令行参数数组，第一个为node，第二位fileRead.js，所以用slice从第三个参数开始截取并返回数组
 */

