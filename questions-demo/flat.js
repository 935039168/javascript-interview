// 扁平化数组
// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat


// 实现1：
function flat_1(arr){
    // 验证 arr 中，还有没有深层数组，如 [1, 2, [3, 4]]
    const isDeep = arr.some(item => item instanceof Array);
    if(!isDeep){
        return arr;
    }
    const res = Array.prototype.concat.apply([],arr);
    return flat_1(res);
};
const res_1 = flat_1( [1,, 2, [3, 4, [10, 20, [100, 200]]], 5] )
console.log(res_1)


// 实现2：原生flat
// var newArray = arr.flat([depth])
// depth 可选 指定要提取嵌套数组的结构深度，默认值为 1。
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));// expected output: [0, 1, 2, [3, 4]]

var arr4 = [1, 2, , 4, 5];
arr4.flat();// [1, 2, 4, 5]


// 实现3：
// 使用 reduce、concat 和递归展开无限多层嵌套的数组
var arr5 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatDeep(arr, d = 1) {
    return d > 0 ? 
        arr.reduce((acc, val) => 
            acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
 };
console.log(flatDeep(arr5, Infinity));// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
