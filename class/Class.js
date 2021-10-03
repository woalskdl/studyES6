
function Health(name){
    this.name = name;
}

Health.prototype.showHealth = function(){
    console.log(this.name + " 님 안녕하세요.");
}

const h = new Health("wooljam");
h.showHealth();

// class 의 메소드 정의를 변수를 선언하는 부분과 구분할 수 있어 가독성을 높일 수 있다.

// prototype 객체
class Health2 {
    constructor(name, lastTime) {
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth(){
        console.log("안녕하세요. " + this.name);
    }
}

const myHealth = new Health2("wooljam");
myHealth.showHealth();

console.log(toString.call(Health2));        // function임. 모습만 class