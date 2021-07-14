// 基础正则表达式
// 测试网站：https://tool.lu/regex/
// 教程：https://deerchao.cn/tutorials/regex/regex.htm

// 邮政编码
const a = new RegExp(/\d{6}/g);

// 小写英文字母
const b = new RegExp(/[a-z]+/g);

// 英文字母
//const c = new RegExp(/[a-z]+/gi);
const c = new RegExp(/[a-zA-Z]+/g);

// 日期格式2021-7-14
const d = new RegExp(/\d{4}-\d{1,2}-\d{1,2}/g);

// 用户名:字母开头6-18位组合
const e = new RegExp(/^[a-zA-Z]+\w{5,17}$/g);

// 简单的ip地址匹配
const f = new RegExp(/\d{0,3}\.\d{0,3}\.\d{0,3}\.\d{0,3}/g);

const x = "abcde130011AbCdEf2020-12-31192.168.1.1";
const y = "abcde130011AbCdEf2020";

console.log("a:",x.match(a));
console.log("b:",x.match(b));
console.log("c:",x.match(c));
console.log("d:",x.match(d));
console.log("e:",x.match(e));
console.log("f:",x.match(f));
console.log("--------------------------");
console.log("a:",y.match(a));
console.log("b:",y.match(b));
console.log("c:",y.match(c));
console.log("d:",y.match(d));
console.log("e:",y.match(e));
console.log("f:",y.match(f));
