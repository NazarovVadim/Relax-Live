! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function (e, t) {}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = () => {
            const e = document.querySelector(".header-contacts__arrow"),
                t = document.querySelector(".header-contacts__phone-number-accord"),
                n = t.querySelector(".header-contacts__phone-number");
            let r = !1;
            e.addEventListener("click", o => {
                r ? (e.querySelector("img").style.cssText = "\n                transform: rotateX(0deg);\n                transition: all .4s;\n            ", r = !1, t.style.position = "absolute", n.style.opacity = "0") : (r = !0, t.style.position = "relative", n.style.opacity = "1", e.querySelector("img").style.cssText = "\n                transform: rotateX(180deg);\n                transition: all .4s;\n            ", e.style.cssText = "\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n            ")
            })
        },
        o = n(0),
        c = n.n(o);
    r(), c()()
}]);