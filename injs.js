function getEle(a) {
    return document.querySelector(a)
}
function start1() {
    dd1.id = "dd1", pp1.innerHTML = "扫描中...", window.setTimeout(function () {
        pp1.innerHTML = "扫描成功", dd1.style.display = "none"
    }, 500)
}
function start() {
    for (var a = 0; a < lists.length; a++)lists[a].zIndex = 0, lists[a];
     lists[this.index + 1].id = "a" + (this.index + 2), lists[this.index + 1].zIndex = 10, lists[this.index].style.webkitTransform = 0 === this.index % 2 ? "scale(0.5) translate(850px,-1500px)" : "scale(0.5) translate(-850px,-1500px)", lists[this.index].style.transition = 0 === this.index ? "all 1.7s linear 1s" : "all 2s linear"
}
var main = getEle("#main"), d1 = getEle(".d1"), dd1 = getEle(".dd1"), pp1 = getEle(".pp1"), audio = getEle("#music"), lists = document.querySelectorAll("#list>li"), winW = document.documentElement.clientWidth, winH = document.documentElement.clientHeight, desW = 640, desH = 960;
main.style.webkitTransform = desW / desH > winW / winH ? "scale(" + winH / desH + ")" : "scale(" + winW / desW + ")", lists[0].addEventListener("touchstart", start1, !1), [].forEach.call(lists, function () {
    var a = arguments[0];
    a.index = arguments[1], a.addEventListener("touchstart", start, !1)
});