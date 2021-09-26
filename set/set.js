let mySet = new Set();
console.log(toString.call(mySet));

// set : 중복 없이 유일한 값을 저장하려고 할 때 유용

mySet.add("wooljam");
mySet.add("hi");
mySet.add("wooljam");

mySet.forEach(function (v){
    console.log(v);
});
console.log(mySet.has("wooljam"));

mySet.delete("wooljam");

mySet.forEach(function (v){
    console.log(v);
});

//////////////////

// weakSet : 참조를 가지고 있는 객체만 저장이 가능하다.

let arr = [1,2,3,4];
let arr2 = [1,2,3,4];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
// ws.add(111);
// ws.add("111");
// ws.add(null);
ws.add(arr2);
ws.add(obj);

arr = null;

console.log(ws);
console.log(ws.has(arr), ws.has(arr2));     // 가비지 컬렉션 관리 >> null 값은 더이상 참조하지 않는다.
// 객체 형태를 중복없이 저장하려고 할 때 유용하다.