
const myObj = {name : 'wooljam', changedValue : 0};
const proxy = new Proxy(myObj, {});
console.log(proxy.name);
proxy.name = 'jay';
console.log(proxy.name);
// 일종의 객체처럼 사용할 수 있음.

const proxy2 = new Proxy(myObj, {
    // override 같은거
    get : function (target, p, receiver){
        console.log('get value');
        // return target[p];        // 무지성 return
        // return (p in target) ? target[p] : "anonymous";         // 예외 처리
        return Reflect.get(target, p);          // 똑같으나 proxy 의 용도 측면에서 이게 더 정확함. 직접 target 에 값을 뽑아내는게 아니래.
    },
    set : function (target, p, value, receiver){
        console.log('set value');
        target['changedValue'] ++;
        target[p] = value;      // 여기서 target 은 proxy 가 아닌 myObj 임
    }
});

proxy2.name = "wooljam proxy";  // set function이 호출됨
console.log(proxy2.name);       // get function 호출

// 객체의 접근을 중간에서 가로채어 중간 과정을 설정할때 사용

console.log(myObj.name, "/", myObj.changedValue);
myObj.name = "startup";
console.log(myObj.name, "/", myObj.changedValue);       // proxy 부른게 아니기 때문에 changedValue 그대로