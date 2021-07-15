const arr = [10, 20, 30, 40];

const popRes = arr.pop();
console.log(popRes, arr);

// shift
const shiftRes = arr.shift();
console.log(shiftRes, arr);

// push
const pushRes = arr.push(50); // 返回 length
console.log(pushRes, arr);

// unshift
const unshiftRes = arr.unshift(5); // 返回 length
console.log(unshiftRes, arr);


console.log('-----------------------------');
// 纯函数：1.不改变原数组（没有副作用）2.返回一个数组
const array = [0, 10, 20, 30, 40];

// concat
const arr1 = array.concat([50, 60, 70]);
console.log(array, arr1);

// map
const arr2 = array.map(x => x * 10);
console.log(array, arr2);

// filter
const arr3 = array.filter(num => num > 25);
console.log(array, arr3);

// slice
const arr4 = array.slice(1, 3);
console.log(array, arr4);

// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce
// splice


console.log('-----------------------------');
// 网红题目
const res = [10, 20, 30].map(parseInt);
console.log(res);// [ 10, NaN, NaN ]
// 拆解
console.log([10, 20, 30].map((num, index) => parseInt(num, index)));

