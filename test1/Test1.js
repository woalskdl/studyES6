function print(){

    let li = document.querySelectorAll("li");
    let strArr = Array.from(li);
    let result = strArr.filter(function (v){
        return v.innerText.includes("e");
    });

    return result;
}

console.log(print());