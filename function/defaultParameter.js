function sum(value, size = 1){      //   기본값 지정 (값이 안들어오면 1)
    size = size || 1;           //   기본값 지정 (값이 안들어오면 1) - 또는 이렇게
    return value * size;
}

console.log(sum(10));

function sumObj(value, size = {value : 1}){
    return value * size.value;
}

console.log(sumObj(3));