
const healthObj = {
    showHealth : function (){
        console.log("오늘 운동시간 : " + this.healthTime);
    },
    setHealth : function (newTime){
        this.healthTime = newTime;
    }
}

let myHealth = Object.setPrototypeOf({
    name : "wooljam",
    lastTime : "11:20"
}, healthObj);
// 특정 객체의 prototype을 지정 (상속 같은 느낌이네)

console.log("myHealth is " + myHealth.name + " / " + myHealth.lastTime + " / " + myHealth.healthTime);
myHealth.showHealth();
myHealth.setHealth("11:11");
console.log("myHealth is " + myHealth.name + " / " + myHealth.lastTime + " / " + myHealth.healthTime);

// 객체간 prototype chain 생성
const healthObjChild = {
    getAge : function (){
        return this.age;
    }
}

const childObj = Object.setPrototypeOf({
    age : 22
}, healthObjChild);

console.log("childObj is " + childObj.getAge());
// childObj.setHealth("16:44")
// childObj.showHealth(); // 여기선 안됨
Object.setPrototypeOf(healthObjChild, healthObj);
childObj.setHealth("16:44");
childObj.showHealth();  // 여기선 됨
