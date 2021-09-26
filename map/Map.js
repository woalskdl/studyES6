// map : key - value

let wm = new WeakMap();
let myFunction = function (){};

wm.set(myFunction, 0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
    count = wm.get(myFunction);
    count++;
    wm.set(myFunction, count);
    console.log(wm.get(myFunction));
}

console.log(wm);

myFunction = null;
console.log(wm.get(myFunction));        // 참조를 가지고 있는것만 가능
console.log(wm.has(myFunction));        // 참조를 가지고 있는것만 가능

/////////////

// Weakmap 활용
function Area(height, width){
    this.height = height;
    this.width = width;
}

Area.prototype.getArea = function (){
    return this.height * this.width;
}

let myArea = new Area(10, 20);
console.log(myArea.getArea());
console.log(myArea.height);         // 이런 변수 노출시키지 않으려면 Weakmap 활용

const wm2 = new WeakMap();
function Area2(height, width){
    wm2.set(this, {height, width});
}

Area2.prototype.getArea2 = function (){
    const {height, width} = wm2.get(this);
    return height * width;
}

let area = new Area2(10, 20);
console.log(area.getArea2());

area = null;
console.log(wm2.has(area));

