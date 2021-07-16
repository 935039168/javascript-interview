const obj1 = {
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b;
    }
};

const obj2 = {
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b;
    }
};

const obj3 = new Object(obj1); // obj3 === obj1

const obj4 = Object.create(null); // {} 无原型链.__proto__
const obj5 = new Object(); // {} 有原型链

const obj6 = Object.create({
    a: 10,
    b: 20,
    sum() {
        return this.a + this.b;
    }
});// 将对象绑定到原型链

const obj7 = Object.create(obj1);// obj7.__proto__ === obj1
