window.onload = function () {

    var plus = document.getElementById("plus");

    var i = document.getElementById("text").value;

    var subtract = document.getElementById("subtract");

    var money = document.getElementById("money").value;

    plus.onclick = function () {

        i++;

        document.getElementById("text").value = i;

        document.getElementById("money").value = i * money;

    }

    subtract.onclick = function () {

        if (i > 0) {

            i--;

            document.getElementById("text").value = i;

            document.getElementById("money").value = i * money;

        } else {

            i = 0;

            document.getElementById("text").value = i;

            document.getElementById("money").value = i * money;

        }

    }

}

var price = 0.00;
var price1 = 0.00;
var price2 = 0.00;
function jian() {
    var i = parseInt(document.getElementById("shang").valueOf().value) - 1;
    if (i <= 0) {
        i = 0;
    }
    document.getElementById("shang").valueOf().value = i;
    price1 = 88 * i;
    document.getElementById("yiqian").value = suan(price1);
    zong();
}
function jia() {
    var i = parseInt(document.getElementById("shang").valueOf().value) + 1;
    document.getElementById("shang").valueOf().value = i;
    price1 = 88 * i;
    document.getElementById("yiqian").value = suan(price1);
    zong();
}
function jian1() {
    var i = parseInt(document.getElementById("shang1").valueOf().value) - 1;
    if (i <= 0) {
        i = 0;
    }
    document.getElementById("shang1").valueOf().value = i;
    price2 = 88 * i;
    document.getElementById("erqian").value = suan(price2);
    zong();
}
function jia1() {
    var i = parseInt(document.getElementById("shang1").valueOf().value) + 1;
    document.getElementById("shang1").valueOf().value = i;
    price2 = 88 * i;
    document.getElementById("erqian").value = suan(price2);
    zong();
}
function suan(number) {
    price = price1 + price2;
    if (isNaN(number)) {
        return false;
    }
    number = Math.round(number * 100) / 100;
    var s = number.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
        rs = s.length;
        s += ".";
    }
    while (s.length <= rs + 2) {
        s += "0";
    }
    return s;
}
function zong() {
    price = price1 + price2;
    if (isNaN(price)) {
        return false;
    }
    price = Math.round(price * 100) / 100;
    var s = price.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
        rs = s.length;
        s += ".";
    }
    while (s.length <= rs + 2) {
        s += "0";
    }
    document.getElementById("totalPrice").innerHTML = s;
}



