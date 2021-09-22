var data = [1, 2, undefined, NaN, null, ""];
// for(var i=0; i<data.length; i++){
//     console.log(i);
// }

// data.forEach(function (value){
//     console.log("value is ", value);
// });

// for(let idx in data){
//     console.log(data[idx]);
// };

for(let value of data){
    console.log(value);
}

var str = "hello world!!!";
for(let value of str){
    console.log(value);
}