window.onload=function (){
    let first = document.getElementById('first');
    // <li id="label">标签</li>
    // <li id="reader">读卡器</li>
    // <li id="storgeStructure">存储结构</li>
    // <li id="interProcess">交互过程</li>
    // <li id="backManage">后台管理</li>
    // <li id="dataManage">数据管理</li>
    let label = document.getElementById("label");
    let reader = document.getElementById("reader");
    let storgeStructure = document.getElementById("storgeStructure");
    let interProcess = document.getElementById("interProcess");
    let backManage = document.getElementById("backManage");
    let dataManage = document.getElementById("dataManage");
    let des = document.getElementById('des');



    first.onclick = function () {
        des.innerText = "RFID是阅读器与标签之间进行非接触式的数据通信，达到识别目标的目的。";

    }
    label.onclick = function () {
        des.innerText = "标签由耦合元件及芯片组成，每个标签具有唯一的电子编码，高容量电子标签有用户可写入的存储空间，附着在物体上标识目标对象。";
    }
    reader.onclick = function () {
        des.innerText = "RFID读卡器是一种能阅读电子标签数据的自动识别设备。根据阅读标签频率的不同分为低频、高频、超高频读卡器。";
    }
    storgeStructure.onclick = function () {
        des.innerText = "标签由";
    }
    interProcess.onclick = function () {
        des.innerText = "RFID读卡器";
    }
    backManage.onclick = function () {
        des.innerText = "标签由";
    }
    dataManage.onclick = function () {
        des.innerText = "RFID读卡器";
    }


    let start = document.getElementById('start');

    start.onclick = function (){

        window.open('se.html');
    }
}