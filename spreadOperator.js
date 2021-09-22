// spread operator : 펼침연산자

let pre = ["apple", "orange", 100, null];
let newData = [...pre];
console.log(pre, "\n", newData);
console.log(pre === newData);

// 합치기
let newData2 = [0, 1, 2, 3, ...pre, 4];
console.log(newData2);

function sum(a,b,c){
    return a+b+c;
}

let arr = [100, 200, 300, 400, 500];
console.log(sum.apply(null, arr));
console.log(sum(...arr));
