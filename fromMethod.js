function addMark(){
    // let newData = [];
    // for(let i=0; i<arguments.length; i++){
    //     newData.push(arguments[i] + "!");
    // }

    let newArr = Array.from(arguments); // arguments 를 배열로 인식하도록
    let newData = newArr.map(function (val){
        return val + "!";
    });

    console.log(newData);
}

addMark(1,2,3,4,5,6,7);