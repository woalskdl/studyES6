var news = [
    {
        "title" : "sbs",
        "imgurl" : "sbs.com",
        "newslist" : [
            "굿굿",
            "좋더라",
            "하하하"
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "mbc.com",
        "newslist" : [
            "엠비씨",
            "가자",
            "디아블로"
        ]
    }
];

function getNewsList([,{newslist}]){
    console.log(newslist);
}

getNewsList(news);

document.querySelector("div").addEventListener("click", function ({type, target}){
    console.log(type, target.tagName);
});