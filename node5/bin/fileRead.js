var fs=require("fs");

/*
console.log(fs.readFileSync("F:/WEBSTORMWORK/nodeLoad/README.md","utf-8"))*/


function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}
main(process.argv.slice(2));