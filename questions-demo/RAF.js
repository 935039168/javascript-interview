// 3秒把宽度从100px变为640px，即增加540px
// 视觉分辨率：60帧/s
// 3s 180帧，每次变化3px
// 10000/60=16.7

const $div1 = $('#div1');
let curWidth = 100;
const maxWidth = 640;

// setTimeout
function animate1() {
    curWidth += 3;
    $div1.css('width', curWidth);
    if (curWidth < maxWidth) {
        setTimeout(animate1, 16.7);// 自己控制时间
    }
};

// RAF
function animate2() {
    curWidth += 3;
    $div1.css('width', curWidth);
    if (curWidth < maxWidth) {
        window.requestAnimationFrame(animate2);// 时间不用自己控制
    }
};

//animate1();
animate2()();