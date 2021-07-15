// 函数声明同变量声明一样会提升；但是，函数表达式不会提升。


// 函数声明
const res1 = sum1(10, 20);
console.log(res1);
function sum1(x, y) {
    return x + y;
};


// 函数表达式
try{
    const res2 = sum2(10, 20);
    console.log(res2);
}catch(error){
    console.error(`报错信息：${error.message}。函数声明同变量声明一样会提升；但是，函数表达式不会提升。`);
}
var sum2 = function (x, y) {
    return x + y;
};
