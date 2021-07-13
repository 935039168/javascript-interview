// 数组去重

// 传统方式
function unique_1(arr) {
    const res = [];
    arr.forEach(item => {
        if (res.indexOf(item) < 0) {
            res.push(item);
        }
    });
    return res;
};
function unique_2(arr) {
    const res = [];
    for (const item of arr) {
        if (!res.includes(item)) {
            res.push(item);
        }
    }
    return res;
};

// 使用Set（无序、不重复）
function unique_3(arr){
    const set = new Set(arr);
    return [...set];
};

const res1 = unique_1([30, 10, 20, 30, 40, 10]);
const res2 = unique_2([30, 10, 20, 30, 40, 10]);
const res3 = unique_3([30, 10, 20, 30, 40, 10]);
