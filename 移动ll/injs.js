function getEle(a) {
    return document.querySelector(a)
}
function start1(a) {
    a.stopPropagation(), dd1.id = "dd1", pp1.innerHTML = "扫描中...", window.setTimeout(function () {
        pp1.innerHTML = "扫描成功", dd1.style.display = "none"
    }, 500)
}
function start(a) {
    this.startX = a.changedTouches[0].pageY
}
function move(a) {
    var b, c, d, e, f;
    a.preventDefault(), this.flag = !0, b = a.changedTouches[0].pageY, c = b - this.startX, d = this.index, e = .5, [].forEach.call(oLis, function () {
        arguments[1] != d && (arguments[0].style.display = "none"), arguments[0].className = "", arguments[0].id = ""
    }), c > 0 ? (this.prevSindex = d == oLis.length - 1 ? 0 : d + 1, f = -winH + c) : 0 > c && (this.prevSindex = 0 == d ? oLis.length - 1 : d - 1, f = winH + c), oLis[this.prevSindex].style.webkitTransform = "translate(0," + f + "px)", oLis[this.prevSindex].className = "zIndex", oLis[this.prevSindex].style.display = "block", oLis[d].style.webkitTransform = "scale(" + (1 - Math.abs(c) / winH * e) + ") translate(0," + c + "px)"
}
function end() {
    this.flag && (oLis[this.prevSindex].style.webkitTransform = "translate(0,0)", oLis[this.prevSindex].style.webkitTransition = "0.8s ease-out", oLis[this.prevSindex].addEventListener("webkitTransitionEnd", function (a) {
        "LI" == a.target.tagName && (this.style.webkitTransition = ""), this.id = "a" + (this.index + 1)
    }, !1)), 0 === this.index && window.setTimeout(function () {
        pp1.innerHTML = ""
    }, 900)
}
var i, main = getEle("#main"), d1 = getEle(".d1"), dd1 = getEle(".dd1"), pp1 = getEle(".pp1"), oLis = document.querySelectorAll("#list>li"), winW = window.innerWidth, winH = window.innerHeight, desW = 640, desH = 960;
for (main.style.webkitTransform = "scale(" + winH / desH + ")", i = 1; i < oLis.length; i++)oLis[i].style.display = "none";
oLis[0].addEventListener("touchstart", start1, !1), [].forEach.call(oLis, function () {
    var a = arguments[0];
    a.index = arguments[1], a.addEventListener("touchstart", start, !1), a.addEventListener("touchmove", move, !1), a.addEventListener("touchend", end, !1)
}), document.addEventListener("touchmove", function () {
}, !1), window.addEventListener("load", function () {
    var a = document.querySelector(".music"), b = a.querySelector("audio");
    b.addEventListener("canplay", function () {
        a.style.display = "block", a.className = "music move"
    }, !1), b.play(), $t.tap(a, {
        end: function () {
            return b.paused ? (b.play(), a.className = "music move", void 0) : (b.pause(), a.className = "music", void 0)
        }
    })
}, !1);