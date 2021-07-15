// 判断是否是对象或数组
function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
};
// 全相等（深度）
function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        // 值类型（注意，参与 equal 的一般不会是函数）
        return obj1 === obj2;
    }
    if (obj1 === obj2) {
        return true;
    }
    // 两个都是对象或数组，而且不相等
    // 1.先取出keys，比较个数
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }
    // 2.以obj1为基准，与obj2进行递归比较
    for (let key in obj1Keys) {
        if (!isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
};


// 测试
const obj1 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
};
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    }
};
console.log(isEqual(obj1, obj2));

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(isEqual(arr1, arr2));
