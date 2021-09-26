function checkNum(){
    const argArray = Array.prototype.slice.call(arguments);
    console.log(toString.call(argArray));       // 타입 확인
    console.log(argArray);
    const result = argArray.every((v) => typeof v === "number");        // 안의 값이 모두 true일 경우에만 true 반환
    console.log(result)
}
const result1 = checkNum(10, 20, 2, 3, 5, "55");

const result2 = checkNum(10, 20, 2, 3, 5, true);
const result3 = checkNum(10, 20, 2, 3, 5, NaN);

function checkNum2(...argArray2){               // rest parameter : parameter를 바로 array 로 바꿔줌
    console.log(toString.call(argArray2));       // 타입 확인
    const result = argArray2.every((v) => typeof v === "number");        // 안의 값이 모두 true일 경우에만 true 반환
    console.log(result)
}

const result4 = checkNum2(10, 2, 3, 4, "55");
const result5 = checkNum2(10, 2, 3, 4);
