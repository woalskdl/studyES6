// Object Assign 메서드
const healthObj = {
    showHealth : function (){
        console.log("오늘 운동 시간 : " + this.healthTime);
    }
}

const myHealth = Object.create(healthObj);
// 별도 인스턴스를 생성한 후 healthObj prototype을 상속 받는 새로운 protoType 생성
myHealth.healthTime = "11:20";
myHealth.name = "wooljam";

console.log(myHealth);
myHealth.showHealth();

// Object Assign 활용하여 생성

const myHealth2 = Object.assign(Object.create(healthObj), {
    name : "wooljam2",
    lastTime : "16:20"
});

console.log("myHealth : " + myHealth2.name + " / " + myHealth2.lastTime);

// Object Assign을 활용한 Immutable 객체 만들기
const preObj = {
    name : "wooljamPre",
    lastTime: "11:20"
};

const myHealth3 = Object.assign({}, preObj, {   // 이전 값 가져와서 대체할 값을 입력하여 대체할 값만 대체
    "lastTime" : "12:30",
    "age" : 12
});

// 객체 복사용으로 유용 but myHealth3 와 preObj 는 엄연히 다른 객체이다.

console.log("myHealth is ", myHealth3.name + " / " + myHealth3.lastTime + " / " + myHealth3.age);