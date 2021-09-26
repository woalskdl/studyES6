const data = [
    {
        name : "coffee-bean",
        order : true,
        items : ['아메리카노', '카페라떼', '카페모카']
    },
    {
        name : 'starbucks',
        order: false
    },
    {
        name : "coffee-king",
        order : true,
        items : ['더치커피', '쇼콜라']
    }
]

// json 으로 응답을 받아 javascript obj로 변환 후 데이터 처리 / 조작 후 dom에 추가
// 데이터 + HTML 문자열의 결합이 필요하기 때문에

function fn(tags, name, items){
    // console.log(tags);
    if(typeof items === "undefined")
        items = "주문가능한 상품이 없습니다.";

    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach((v) => {
    const template =
        fn`<div>Welcome ${v.name} !!</div>
    <h2> 주문가능항목</h2>
    <div>${v.items}</div>`;

    document.querySelector("#message").innerHTML += template;
})

