setTimeout(function (){
    console.log("setTimeOut");
}, 1000);               // 1초 뒤에 실행

setTimeout(() => {
    console.log("setTimeOut Arrow");
}, 2000);

let arr = [1,2,3,4,5].map(function (value, index, object) {
    return value * 2;
});     //  너무 길다

console.log(arr);

let newArr = [1,2,3,4,5].map((v) => v * 3 );

console.log(newArr);

///////////////

// this context of Arrow Function
// this : window를 가리킴 >> 같은 object에서 this를 써도 설정안하면 this가 자신을 가리키지 않음
// but arrow function을 사용하면 this 가 현재 object를 가리키게됨

const myObj = {
    runTimeOut(){
        setTimeout(() => {
            this.printData();
        }, 3000);
    },

    printData(){
        console.log("hi codesquad!");
    }
}

myObj.runTimeOut();

const el = document.querySelector("p");

const myObj2 = {
    register(){
        el.addEventListener("click", (evt) => {
            this.printData(evt.target);
        });
    },

    printData(el){
        console.log("clicked!!", el.innerText);
    }
}

myObj2.register();

