function changeStyle() {
    var x;
    // 获取内容
    x = document.getElementById("p_id");
    // 修改样式
    x.style.color="#6495ED";
    x.style.fontSize="20px";
}

function getDate() {
    var date = new Date();
    // 获取年分
    var year = date.getFullYear();
    // 获取月份
    var month = date.getMonth() + 1;
    // 获取日期
    var strDate = date.getDate();
    // 获取小时
	var hour = date.getHours();
    // 获取分钟
	var minute = date.getMinutes();
    // 获取秒
	var second = date.getSeconds();
 
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    if (minute >= 0 && minute <= 9) {
        minute = '0' + minute;
    }
    if (second >= 0 && second <= 9) {
        second = '0' + second;
    }
    var currentdate = `${year}-${month}-${strDate} ${hour}:${minute}:${second}`;
    document.getElementById("p_id2").innerHTML=currentdate;
}

function check() {
    var value = document.getElementsByName("hobby");
    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
            if (value[i].value == "no") {
            document.getElementById("td_2").style.display="none";
            } else {
                document.getElementById("td_2").style.display="block";
            }
        } 
    }
}
