const SETTING = {
    name : "LUCKY LOTTO!",
    count : 6,
    maxNumber : 45
}

let mySet = new Set();

function getRandomNumber({count, maxNumber}){
    // 랜덤한 유일한 숫자값을 추출
    while(mySet.size < count){
        let num = Math.ceil(Math.random() * 100);
        if(num < maxNumber)
            mySet.add(num);
    }
}

getRandomNumber(SETTING);
console.log(mySet);