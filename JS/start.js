// 开始实验需要等待一定时间
var title = document.title;
console.log(title);
var start;
var ename;
var src;
var seconds = 12;
window.onload = function () {
    ename = window.parent.document.getElementById("ename");
    if(title === "实验文档 - RFID"){
        start = document.getElementById("startExp");
        DeferUseable();
        ename.innerText = "初识RFID";
        src = "experiment/se_RFID.html";
        start.onclick = function startExperiment(){se(src);};
        console.log("实验文档 - RFID");
    }else if(title === "实验文档 - Tag"){
        start = document.getElementById("startTag");
        DeferUseable();
        src = "experiment/se1_Label.html";
        start.onclick = function startExperiment(){se(src)};
        console.log("实验文档 - Tag");
    }


    // start.onclick = ;
    function se(src){
        start.style.color = "#68b92e";
        var er = window.parent.document.querySelector(".experimentRegion");
        ename.style.color = "#68b92e";
        // er.setAttribute("src","experiment/se_RFID.html");
        er.setAttribute("src",src);
        start.disabled = true;
    }

    /*function startExperiment(src){
        start.style.color = "#68b92e";
        var er = window.parent.document.querySelector(".experimentRegion");
        ename.style.color = "#68b92e";
        // er.setAttribute("src","experiment/se_RFID.html");
        er.setAttribute("src",src);
        start.disabled = true;
    }

        er.setAttribute("src","//player.bilibili.com/player.html?aid=34229759&bvid=BV17t411o7km&cid=59959975&page=1");
        <iframe src="//player.bilibili.com/player.html?aid=34229759&bvid=BV17t411o7km&cid=59959975&page=1"
        <iframe src="//player.bilibili.com/player.html?aid=39453954&bvid=BV1jt41167Mc&cid=69321381&page=1"
        scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"></iframe>
        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>*/
}
//延迟可用
function DeferUseable() {
    setInterval(function(){
        if(seconds > 0){
            start.setAttribute("disabled","disabled");
            start.innerText = "开始实验" + "（" + seconds + "s）";
            seconds --;

        }else{
            start.innerText = "开始实验";
            start.style.background="#005bc3";
            start.style.cursor = "pointer";
            start.removeAttribute("disabled");
        }
    },1000)
}
