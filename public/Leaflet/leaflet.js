!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], i)
    : i((t.L = t.L || {}));
})(this, function (t) {
  "use strict";
  function i(t) {
    var i, e, n, o;
    for (e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];
      for (i in o) t[i] = o[i];
    }
    return t;
  }
  function e(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  function n(t) {
    return (t._leaflet_id = t._leaflet_id || ++di), t._leaflet_id;
  }
  function o(t, i, e) {
    var n, o, s, r;
    return (
      (r = function () {
        (n = !1), o && (s.apply(e, o), (o = !1));
      }),
      (s = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(r, i), (n = !0));
      })
    );
  }
  function s(t, i, e) {
    var n = i[1],
      o = i[0],
      s = n - o;
    return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
  }
  function r() {
    return !1;
  }
  function a(t, i) {
    var e = Math.pow(10, i || 5);
    return Math.round(t * e) / e;
  }
  function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function u(t) {
    return h(t).split(/\s+/);
  }
  function l(t, i) {
    t.hasOwnProperty("options") || (t.options = t.options ? _i(t.options) : {});
    for (var e in i) t.options[e] = i[e];
    return t.options;
  }
  function c(t, i, e) {
    var n = [];
    for (var o in t)
      n.push(
        encodeURIComponent(e ? o.toUpperCase() : o) +
          "=" +
          encodeURIComponent(t[o])
      );
    return (i && i.indexOf("?") !== -1 ? "&" : "?") + n.join("&");
  }
  function _(t, i) {
    return t.replace(pi, function (t, e) {
      var n = i[e];
      if (void 0 === n) throw new Error("No value provided for variable " + t);
      return "function" == typeof n && (n = n(i)), n;
    });
  }
  function d(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  function p(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  function m(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - gi));
    return (gi = i + e), window.setTimeout(t, e);
  }
  function f(t, i, n) {
    return n && vi === m ? void t.call(i) : vi.call(window, e(t, i));
  }
  function g(t) {
    t && yi.call(window, t);
  }
  function v() {}
  function y(t) {
    if (L && L.Mixin) {
      t = mi(t) ? t : [t];
      for (var i = 0; i < t.length; i++)
        t[i] === L.Mixin.Events &&
          console.warn(
            "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
            new Error().stack
          );
    }
  }
  function x(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  function w(t, i, e) {
    return t instanceof x
      ? t
      : mi(t)
      ? new x(t[0], t[1])
      : void 0 === t || null === t
      ? t
      : "object" == typeof t && "x" in t && "y" in t
      ? new x(t.x, t.y)
      : new x(t, i, e);
  }
  function P(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function b(t, i) {
    return !t || t instanceof P ? t : new P(t, i);
  }
  function T(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function z(t, i) {
    return t instanceof T ? t : new T(t, i);
  }
  function M(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function C(t, i, e) {
    return t instanceof M
      ? t
      : mi(t) && "object" != typeof t[0]
      ? 3 === t.length
        ? new M(t[0], t[1], t[2])
        : 2 === t.length
        ? new M(t[0], t[1])
        : null
      : void 0 === t || null === t
      ? t
      : "object" == typeof t && "lat" in t
      ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new M(t, i, e);
  }
  function Z(t, i, e, n) {
    return mi(t)
      ? ((this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3]))
      : ((this._a = t), (this._b = i), (this._c = e), void (this._d = n));
  }
  function E(t, i, e, n) {
    return new Z(t, i, e, n);
  }
  function S(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function k(t, i) {
    var e,
      n,
      o,
      s,
      r,
      a,
      h = "";
    for (e = 0, o = t.length; e < o; e++) {
      for (r = t[e], n = 0, s = r.length; n < s; n++)
        (a = r[n]), (h += (n ? "L" : "M") + a.x + " " + a.y);
      h += i ? (re ? "z" : "x") : "";
    }
    return h || "M0 0";
  }
  function B(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }
  function I(t, i, e, n) {
    return (
      "touchstart" === i
        ? O(t, e, n)
        : "touchmove" === i
        ? W(t, e, n)
        : "touchend" === i && H(t, e, n),
      this
    );
  }
  function A(t, i, e) {
    var n = t["_leaflet_" + i + e];
    return (
      "touchstart" === i
        ? t.removeEventListener(ue, n, !1)
        : "touchmove" === i
        ? t.removeEventListener(le, n, !1)
        : "touchend" === i &&
          (t.removeEventListener(ce, n, !1), t.removeEventListener(_e, n, !1)),
      this
    );
  }
  function O(t, i, n) {
    var o = e(function (t) {
      if (
        "mouse" !== t.pointerType &&
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE &&
        t.pointerType !== t.MSPOINTER_TYPE_MOUSE
      ) {
        if (!(de.indexOf(t.target.tagName) < 0)) return;
        $(t);
      }
      j(t, i);
    });
    (t["_leaflet_touchstart" + n] = o),
      t.addEventListener(ue, o, !1),
      me ||
        (document.documentElement.addEventListener(ue, R, !0),
        document.documentElement.addEventListener(le, D, !0),
        document.documentElement.addEventListener(ce, N, !0),
        document.documentElement.addEventListener(_e, N, !0),
        (me = !0));
  }
  function R(t) {
    (pe[t.pointerId] = t), fe++;
  }
  function D(t) {
    pe[t.pointerId] && (pe[t.pointerId] = t);
  }
  function N(t) {
    delete pe[t.pointerId], fe--;
  }
  function j(t, i) {
    t.touches = [];
    for (var e in pe) t.touches.push(pe[e]);
    (t.changedTouches = [t]), i(t);
  }
  function W(t, i, e) {
    var n = function (t) {
      ((t.pointerType !== t.MSPOINTER_TYPE_MOUSE &&
        "mouse" !== t.pointerType) ||
        0 !== t.buttons) &&
        j(t, i);
    };
    (t["_leaflet_touchmove" + e] = n), t.addEventListener(le, n, !1);
  }
  function H(t, i, e) {
    var n = function (t) {
      j(t, i);
    };
    (t["_leaflet_touchend" + e] = n),
      t.addEventListener(ce, n, !1),
      t.addEventListener(_e, n, !1);
  }
  function F(t, i, e) {
    function n(t) {
      var i;
      if (te) {
        if (!Ai || "mouse" === t.pointerType) return;
        i = fe;
      } else i = t.touches.length;
      if (!(i > 1)) {
        var e = Date.now(),
          n = e - (s || e);
        (r = t.touches ? t.touches[0] : t), (a = n > 0 && n <= h), (s = e);
      }
    }
    function o(t) {
      if (a && !r.cancelBubble) {
        if (te) {
          if (!Ai || "mouse" === t.pointerType) return;
          var e,
            n,
            o = {};
          for (n in r) (e = r[n]), (o[n] = e && e.bind ? e.bind(r) : e);
          r = o;
        }
        (r.type = "dblclick"), i(r), (s = null);
      }
    }
    var s,
      r,
      a = !1,
      h = 250;
    return (
      (t[ye + ge + e] = n),
      (t[ye + ve + e] = o),
      (t[ye + "dblclick" + e] = i),
      t.addEventListener(ge, n, !1),
      t.addEventListener(ve, o, !1),
      t.addEventListener("dblclick", i, !1),
      this
    );
  }
  function U(t, i) {
    var e = t[ye + ge + i],
      n = t[ye + ve + i],
      o = t[ye + "dblclick" + i];
    return (
      t.removeEventListener(ge, e, !1),
      t.removeEventListener(ve, n, !1),
      Ai || t.removeEventListener("dblclick", o, !1),
      this
    );
  }
  function V(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) q(t, o, i[o], e);
    else {
      i = u(i);
      for (var s = 0, r = i.length; s < r; s++) q(t, i[s], e, n);
    }
    return this;
  }
  function G(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) K(t, o, i[o], e);
    else if (i) {
      i = u(i);
      for (var s = 0, r = i.length; s < r; s++) K(t, i[s], e, n);
    } else {
      for (var a in t[xe]) K(t, a, t[xe][a]);
      delete t[xe];
    }
  }
  function q(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : "");
    if (t[xe] && t[xe][s]) return this;
    var r = function (i) {
        return e.call(o || t, i || window.event);
      },
      a = r;
    te && 0 === i.indexOf("touch")
      ? I(t, i, r, s)
      : !ie || "dblclick" !== i || !F || (te && ji)
      ? "addEventListener" in t
        ? "mousewheel" === i
          ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1)
          : "mouseenter" === i || "mouseleave" === i
          ? ((r = function (i) {
              (i = i || window.event), ot(t, i) && a(i);
            }),
            t.addEventListener(
              "mouseenter" === i ? "mouseover" : "mouseout",
              r,
              !1
            ))
          : ("click" === i &&
              Ri &&
              (r = function (t) {
                st(t, a);
              }),
            t.addEventListener(i, r, !1))
        : "attachEvent" in t && t.attachEvent("on" + i, r)
      : F(t, r, s),
      (t[xe] = t[xe] || {}),
      (t[xe][s] = r);
  }
  function K(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : ""),
      r = t[xe] && t[xe][s];
    return r
      ? (te && 0 === i.indexOf("touch")
          ? A(t, i, s)
          : ie && "dblclick" === i && U
          ? U(t, s)
          : "removeEventListener" in t
          ? "mousewheel" === i
            ? t.removeEventListener(
                "onwheel" in t ? "wheel" : "mousewheel",
                r,
                !1
              )
            : t.removeEventListener(
                "mouseenter" === i
                  ? "mouseover"
                  : "mouseleave" === i
                  ? "mouseout"
                  : i,
                r,
                !1
              )
          : "detachEvent" in t && t.detachEvent("on" + i, r),
        void (t[xe][s] = null))
      : this;
  }
  function Y(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      nt(t),
      this
    );
  }
  function X(t) {
    return q(t, "mousewheel", Y);
  }
  function J(t) {
    return V(t, "mousedown touchstart dblclick", Y), q(t, "click", et), this;
  }
  function $(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Q(t) {
    return $(t), Y(t), this;
  }
  function tt(t, i) {
    if (!i) return new x(t.clientX, t.clientY);
    var e = i.getBoundingClientRect();
    return new x(
      t.clientX - e.left - i.clientLeft,
      t.clientY - e.top - i.clientTop
    );
  }
  function it(t) {
    return Ai
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / we
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  function et(t) {
    Le[t.type] = !0;
  }
  function nt(t) {
    var i = Le[t.type];
    return (Le[t.type] = !1), i;
  }
  function ot(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  function st(t, i) {
    var e = t.timeStamp || (t.originalEvent && t.originalEvent.timeStamp),
      n = zi && e - zi;
    return (n && n > 100 && n < 500) ||
      (t.target._simulatedClick && !t._simulated)
      ? void Q(t)
      : ((zi = e), void i(t));
  }
  function rt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function at(t, i) {
    var e = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);
      e = n ? n[i] : null;
    }
    return "auto" === e ? null : e;
  }
  function ht(t, i, e) {
    var n = document.createElement(t);
    return (n.className = i || ""), e && e.appendChild(n), n;
  }
  function ut(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function lt(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function ct(t) {
    var i = t.parentNode;
    i.lastChild !== t && i.appendChild(t);
  }
  function _t(t) {
    var i = t.parentNode;
    i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function dt(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = gt(t);
    return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }
  function pt(t, i) {
    if (void 0 !== t.classList)
      for (var e = u(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
    else if (!dt(t, i)) {
      var s = gt(t);
      ft(t, (s ? s + " " : "") + i);
    }
  }
  function mt(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " ")));
  }
  function ft(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function gt(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }
  function vt(t, i) {
    "opacity" in t.style
      ? (t.style.opacity = i)
      : "filter" in t.style && yt(t, i);
  }
  function yt(t, i) {
    var e = !1,
      n = "DXImageTransform.Microsoft.Alpha";
    try {
      e = t.filters.item(n);
    } catch (t) {
      if (1 === i) return;
    }
    (i = Math.round(100 * i)),
      e
        ? ((e.Enabled = 100 !== i), (e.Opacity = i))
        : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
  }
  function xt(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function wt(t, i, e) {
    var n = i || new x(0, 0);
    t.style[be] =
      (Gi
        ? "translate(" + n.x + "px," + n.y + "px)"
        : "translate3d(" + n.x + "px," + n.y + "px,0)") +
      (e ? " scale(" + e + ")" : "");
  }
  function Lt(t, i) {
    (t._leaflet_pos = i),
      Yi ? wt(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
  }
  function Pt(t) {
    return t._leaflet_pos || new x(0, 0);
  }
  function bt() {
    V(window, "dragstart", $);
  }
  function Tt() {
    G(window, "dragstart", $);
  }
  function zt(t) {
    for (; t.tabIndex === -1; ) t = t.parentNode;
    t.style &&
      (Mt(),
      (Ce = t),
      (Ze = t.style.outline),
      (t.style.outline = "none"),
      V(window, "keydown", Mt));
  }
  function Mt() {
    Ce &&
      ((Ce.style.outline = Ze),
      (Ce = void 0),
      (Ze = void 0),
      G(window, "keydown", Mt));
  }
  function Ct(t, i) {
    return new ke(t, i);
  }
  function Zt(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return (t = It(t, e)), (t = kt(t, e));
  }
  function Et(t, i, e) {
    return Math.sqrt(Nt(t, i, e, !0));
  }
  function St(t, i, e) {
    return Nt(t, i, e);
  }
  function kt(t, i) {
    var e = t.length,
      n = typeof Uint8Array != void 0 + "" ? Uint8Array : Array,
      o = new n(e);
    (o[0] = o[e - 1] = 1), Bt(t, o, i, 0, e - 1);
    var s,
      r = [];
    for (s = 0; s < e; s++) o[s] && r.push(t[s]);
    return r;
  }
  function Bt(t, i, e, n, o) {
    var s,
      r,
      a,
      h = 0;
    for (r = n + 1; r <= o - 1; r++)
      (a = Nt(t[r], t[n], t[o], !0)), a > h && ((s = r), (h = a));
    h > e && ((i[s] = 1), Bt(t, i, e, n, s), Bt(t, i, e, s, o));
  }
  function It(t, i) {
    for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
      Dt(t[n], t[o]) > i && (e.push(t[n]), (o = n));
    return o < s - 1 && e.push(t[s - 1]), e;
  }
  function At(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? Fe : Rt(t, e),
      u = Rt(i, e);
    for (Fe = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (s = h || u),
        (r = Ot(t, i, s, e, o)),
        (a = Rt(r, e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function Ot(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      u = n.min,
      l = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
        : 4 & e
        ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
        : 2 & e
        ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a))
        : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
      new x(s, r, o)
    );
  }
  function Rt(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function Dt(t, i) {
    var e = i.x - t.x,
      n = i.y - t.y;
    return e * e + n * n;
  }
  function Nt(t, i, e, n) {
    var o,
      s = i.x,
      r = i.y,
      a = e.x - s,
      h = e.y - r,
      u = a * a + h * h;
    return (
      u > 0 &&
        ((o = ((t.x - s) * a + (t.y - r) * h) / u),
        o > 1 ? ((s = e.x), (r = e.y)) : o > 0 && ((s += a * o), (r += h * o))),
      (a = t.x - s),
      (h = t.y - r),
      n ? a * a + h * h : new x(s, r)
    );
  }
  function jt(t) {
    return (
      !mi(t[0]) || ("object" != typeof t[0][0] && "undefined" != typeof t[0][0])
    );
  }
  function Wt(t, i, e) {
    var n,
      o,
      s,
      r,
      a,
      h,
      u,
      l,
      c,
      _ = [1, 4, 2, 8];
    for (o = 0, u = t.length; o < u; o++) t[o]._code = Rt(t[o], i);
    for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, u = t.length, s = u - 1; o < u; s = o++)
        (a = t[o]),
          (h = t[s]),
          a._code & l
            ? h._code & l ||
              ((c = Ot(h, a, l, i, e)), (c._code = Rt(c, i)), n.push(c))
            : (h._code & l &&
                ((c = Ot(h, a, l, i, e)), (c._code = Rt(c, i)), n.push(c)),
              n.push(a));
      t = n;
    }
    return t;
  }
  function Ht(t) {
    return new cn(t);
  }
  function Ft(t, i) {
    return new pn(t, i);
  }
  function Ut(t, i) {
    return new fn(t, i);
  }
  function Vt(t, i, e) {
    return new gn(t, i, e);
  }
  function Gt(t, i) {
    return new vn(t, i);
  }
  function qt(t, i) {
    return new yn(t, i);
  }
  function Kt(t, i) {
    var e,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || Yt;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return (e = l(a)), u ? u(t, e) : new pn(e);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(u ? u(t, e) : new pn(e));
        return new un(h);
      case "LineString":
      case "MultiLineString":
        return (n = Xt(a, "LineString" === r.type ? 0 : 1, l)), new vn(n, i);
      case "Polygon":
      case "MultiPolygon":
        return (n = Xt(a, "Polygon" === r.type ? 1 : 2, l)), new yn(n, i);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = Kt(
            {
              geometry: r.geometries[o],
              type: "Feature",
              properties: t.properties,
            },
            i
          );
          c && h.push(c);
        }
        return new un(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function Yt(t) {
    return new M(t[1], t[0], t[2]);
  }
  function Xt(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? Xt(t[s], i - 1, e) : (e || Yt)(t[s])), o.push(n);
    return o;
  }
  function Jt(t, i) {
    return (
      (i = "number" == typeof i ? i : 6),
      void 0 !== t.alt
        ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)]
        : [a(t.lng, i), a(t.lat, i)]
    );
  }
  function $t(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? $t(t[s], i - 1, e, n) : Jt(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function Qt(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : ti(e);
  }
  function ti(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type
      ? t
      : { type: "Feature", properties: {}, geometry: t };
  }
  function ii(t, i) {
    return new xn(t, i);
  }
  function ei(t, i, e) {
    return new Tn(t, i, e);
  }
  function ni(t) {
    return new Sn(t);
  }
  function oi(t) {
    return new kn(t);
  }
  function si(t, i) {
    return new Bn(t, i);
  }
  function ri(t, i) {
    return new In(t, i);
  }
  function ai(t) {
    return se ? new On(t) : null;
  }
  function hi(t) {
    return re || ae ? new jn(t) : null;
  }
  function ui(t, i) {
    return new Wn(t, i);
  }
  function li() {
    return (window.L = Yn), this;
  }
  var ci = "1.1.0",
    _i =
      Object.create ||
      (function () {
        function t() {}
        return function (i) {
          return (t.prototype = i), new t();
        };
      })(),
    di = 0,
    pi = /\{ *([\w_\-]+) *\}/g,
    mi =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
    fi = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    gi = 0,
    vi = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
    yi =
      window.cancelAnimationFrame ||
      p("CancelAnimationFrame") ||
      p("CancelRequestAnimationFrame") ||
      function (t) {
        window.clearTimeout(t);
      },
    xi = (Object.freeze || Object)({
      extend: i,
      create: _i,
      bind: e,
      lastId: di,
      stamp: n,
      throttle: o,
      wrapNum: s,
      falseFn: r,
      formatNum: a,
      trim: h,
      splitWords: u,
      setOptions: l,
      getParamString: c,
      template: _,
      isArray: mi,
      indexOf: d,
      emptyImageUrl: fi,
      requestFn: vi,
      cancelFn: yi,
      requestAnimFrame: f,
      cancelAnimFrame: g,
    });
  (v.extend = function (t) {
    var e = function () {
        this.initialize && this.initialize.apply(this, arguments),
          this.callInitHooks();
      },
      n = (e.__super__ = this.prototype),
      o = _i(n);
    (o.constructor = e), (e.prototype = o);
    for (var s in this)
      this.hasOwnProperty(s) &&
        "prototype" !== s &&
        "__super__" !== s &&
        (e[s] = this[s]);
    return (
      t.statics && (i(e, t.statics), delete t.statics),
      t.includes &&
        (y(t.includes),
        i.apply(null, [o].concat(t.includes)),
        delete t.includes),
      o.options && (t.options = i(_i(o.options), t.options)),
      i(o, t),
      (o._initHooks = []),
      (o.callInitHooks = function () {
        if (!this._initHooksCalled) {
          n.callInitHooks && n.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = o._initHooks.length; t < i; t++)
            o._initHooks[t].call(this);
        }
      }),
      e
    );
  }),
    (v.include = function (t) {
      return i(this.prototype, t), this;
    }),
    (v.mergeOptions = function (t) {
      return i(this.prototype.options, t), this;
    }),
    (v.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var wi = {
    on: function (t, i, e) {
      if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
      else {
        t = u(t);
        for (var o = 0, s = t.length; o < s; o++) this._on(t[o], i, e);
      }
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
        else {
          t = u(t);
          for (var o = 0, s = t.length; o < s; o++) this._off(t[o], i, e);
        }
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
      for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === i && s[r].ctx === e) return;
      s.push(o);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t])) {
        if (!i) {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = r;
          return void delete this._events[t];
        }
        if ((e === this && (e = void 0), n))
          for (o = 0, s = n.length; o < s; o++) {
            var a = n[o];
            if (a.ctx === e && a.fn === i)
              return (
                (a.fn = r),
                this._firingCount && (this._events[t] = n = n.slice()),
                void n.splice(o, 1)
              );
          }
      }
    },
    fire: function (t, e, n) {
      if (!this.listens(t, n)) return this;
      var o = i({}, e, { type: t, target: this });
      if (this._events) {
        var s = this._events[t];
        if (s) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, o);
          }
          this._firingCount--;
        }
      }
      return n && this._propagateEvent(o), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, n) {
      if ("object" == typeof t) {
        for (var o in t) this.once(o, t[o], i);
        return this;
      }
      var s = e(function () {
        this.off(t, i, n).off(t, s, n);
      }, this);
      return this.on(t, i, n).on(t, s, n);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[n(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    },
    _propagateEvent: function (t) {
      for (var e in this._eventParents)
        this._eventParents[e].fire(t.type, i({ layer: t.target }, t), !0);
    },
  };
  (wi.addEventListener = wi.on),
    (wi.removeEventListener = wi.clearAllEventListeners = wi.off),
    (wi.addOneTimeEventListener = wi.once),
    (wi.fireEvent = wi.fire),
    (wi.hasEventListeners = wi.listens);
  var Li = v.extend(wi);
  (x.prototype = {
    clone: function () {
      return new x(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(w(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(w(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new x(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new x(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    distanceTo: function (t) {
      t = w(t);
      var i = t.x - this.x,
        e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function (t) {
      return (t = w(t)), t.x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = w(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return "Point(" + a(this.x) + ", " + a(this.y) + ")";
    },
  }),
    (P.prototype = {
      extend: function (t) {
        return (
          (t = w(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new x(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return new x(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new x(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)),
          t instanceof P ? ((i = t.min), (e = t.max)) : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = b(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = b(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      },
    }),
    (T.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof M) (i = t), (e = t);
        else {
          if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new M(i.lat, i.lng)),
              (this._northEast = new M(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new M(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new M(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new M(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t =
          "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof T
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = z(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = z(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth(),
        ].join(",");
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = z(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      },
    }),
    (M.prototype = {
      equals: function (t, i) {
        if (!t) return !1;
        t = C(t);
        var e = Math.max(
          Math.abs(this.lat - t.lat),
          Math.abs(this.lng - t.lng)
        );
        return e <= (void 0 === i ? 1e-9 : i);
      },
      toString: function (t) {
        return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
      },
      distanceTo: function (t) {
        return bi.distance(this, C(t));
      },
      wrap: function () {
        return bi.wrapLatLng(this);
      },
      toBounds: function (t) {
        var i = (180 * t) / 40075017,
          e = i / Math.cos((Math.PI / 180) * this.lat);
        return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
      },
      clone: function () {
        return new M(this.lat, this.lng, this.alt);
      },
    });
  var Pi = {
      latLngToPoint: function (t, i) {
        var e = this.projection.project(t),
          n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      pointToLatLng: function (t, i) {
        var e = this.scale(i),
          n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          e = this.scale(t),
          n = this.transformation.transform(i.min, e),
          o = this.transformation.transform(i.max, e);
        return new P(n, o);
      },
      infinite: !1,
      wrapLatLng: function (t) {
        var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng,
          e = this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat,
          n = t.alt;
        return new M(e, i, n);
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
        if (0 === n && 0 === o) return t;
        var s = t.getSouthWest(),
          r = t.getNorthEast(),
          a = new M(s.lat - n, s.lng - o),
          h = new M(r.lat - n, r.lng - o);
        return new T(a, h);
      },
    },
    bi = i({}, Pi, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s =
            Math.sin(n) * Math.sin(o) +
            Math.cos(n) * Math.cos(o) * Math.cos((i.lng - t.lng) * e);
        return this.R * Math.acos(Math.min(s, 1));
      },
    }),
    Ti = {
      R: 6378137,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
        return new x(
          this.R * t.lng * i,
          (this.R * Math.log((1 + o) / (1 - o))) / 2
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new M(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R
        );
      },
      bounds: (function () {
        var t = 6378137 * Math.PI;
        return new P([-t, -t], [t, t]);
      })(),
    };
  Z.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    },
  };
  var zi,
    Mi,
    Ci,
    Zi,
    Ei = i({}, bi, {
      code: "EPSG:3857",
      projection: Ti,
      transformation: (function () {
        var t = 0.5 / (Math.PI * Ti.R);
        return E(t, 0.5, -t, 0.5);
      })(),
    }),
    Si = i({}, Ei, { code: "EPSG:900913" }),
    ki = document.documentElement.style,
    Bi = "ActiveXObject" in window,
    Ii = Bi && !document.addEventListener,
    Ai = "msLaunchUri" in navigator && !("documentMode" in document),
    Oi = B("webkit"),
    Ri = B("android"),
    Di = B("android 2") || B("android 3"),
    Ni = !!window.opera,
    ji = B("chrome"),
    Wi = B("gecko") && !Oi && !Ni && !Bi,
    Hi = !ji && B("safari"),
    Fi = B("phantom"),
    Ui = "OTransition" in ki,
    Vi = 0 === navigator.platform.indexOf("Win"),
    Gi = Bi && "transition" in ki,
    qi =
      "WebKitCSSMatrix" in window &&
      "m11" in new window.WebKitCSSMatrix() &&
      !Di,
    Ki = "MozPerspective" in ki,
    Yi = !window.L_DISABLE_3D && (Gi || qi || Ki) && !Ui && !Fi,
    Xi = "undefined" != typeof orientation || B("mobile"),
    Ji = Xi && Oi,
    $i = Xi && qi,
    Qi = !window.PointerEvent && window.MSPointerEvent,
    te = !(!window.PointerEvent && !Qi),
    ie =
      !window.L_NO_TOUCH &&
      (te ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    ee = Xi && Ni,
    ne = Xi && Wi,
    oe =
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
    se = (function () {
      return !!document.createElement("canvas").getContext;
    })(),
    re = !(!document.createElementNS || !S("svg").createSVGRect),
    ae =
      !re &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (
            (i.style.behavior = "url(#default#VML)"),
            i && "object" == typeof i.adj
          );
        } catch (t) {
          return !1;
        }
      })(),
    he = (Object.freeze || Object)({
      ie: Bi,
      ielt9: Ii,
      edge: Ai,
      webkit: Oi,
      android: Ri,
      android23: Di,
      opera: Ni,
      chrome: ji,
      gecko: Wi,
      safari: Hi,
      phantom: Fi,
      opera12: Ui,
      win: Vi,
      ie3d: Gi,
      webkit3d: qi,
      gecko3d: Ki,
      any3d: Yi,
      mobile: Xi,
      mobileWebkit: Ji,
      mobileWebkit3d: $i,
      msPointer: Qi,
      pointer: te,
      touch: ie,
      mobileOpera: ee,
      mobileGecko: ne,
      retina: oe,
      canvas: se,
      svg: re,
      vml: ae,
    }),
    ue = Qi ? "MSPointerDown" : "pointerdown",
    le = Qi ? "MSPointerMove" : "pointermove",
    ce = Qi ? "MSPointerUp" : "pointerup",
    _e = Qi ? "MSPointerCancel" : "pointercancel",
    de = ["INPUT", "SELECT", "OPTION"],
    pe = {},
    me = !1,
    fe = 0,
    ge = Qi ? "MSPointerDown" : te ? "pointerdown" : "touchstart",
    ve = Qi ? "MSPointerUp" : te ? "pointerup" : "touchend",
    ye = "_leaflet_",
    xe = "_leaflet_events",
    we =
      Vi && ji ? 2 * window.devicePixelRatio : Wi ? window.devicePixelRatio : 1,
    Le = {},
    Pe = (Object.freeze || Object)({
      on: V,
      off: G,
      stopPropagation: Y,
      disableScrollPropagation: X,
      disableClickPropagation: J,
      preventDefault: $,
      stop: Q,
      getMousePosition: tt,
      getWheelDelta: it,
      fakeStop: et,
      skipped: nt,
      isExternalTarget: ot,
      addListener: V,
      removeListener: G,
    }),
    be = xt([
      "transform",
      "WebkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform",
    ]),
    Te = xt([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition",
    ]),
    ze =
      "webkitTransition" === Te || "OTransition" === Te
        ? Te + "End"
        : "transitionend";
  if ("onselectstart" in document)
    (Mi = function () {
      V(window, "selectstart", $);
    }),
      (Ci = function () {
        G(window, "selectstart", $);
      });
  else {
    var Me = xt([
      "userSelect",
      "WebkitUserSelect",
      "OUserSelect",
      "MozUserSelect",
      "msUserSelect",
    ]);
    (Mi = function () {
      if (Me) {
        var t = document.documentElement.style;
        (Zi = t[Me]), (t[Me] = "none");
      }
    }),
      (Ci = function () {
        Me && ((document.documentElement.style[Me] = Zi), (Zi = void 0));
      });
  }
  var Ce,
    Ze,
    Ee = (Object.freeze || Object)({
      TRANSFORM: be,
      TRANSITION: Te,
      TRANSITION_END: ze,
      get: rt,
      getStyle: at,
      create: ht,
      remove: ut,
      empty: lt,
      toFront: ct,
      toBack: _t,
      hasClass: dt,
      addClass: pt,
      removeClass: mt,
      setClass: ft,
      getClass: gt,
      setOpacity: vt,
      testProp: xt,
      setTransform: wt,
      setPosition: Lt,
      getPosition: Pt,
      disableTextSelection: Mi,
      enableTextSelection: Ci,
      disableImageDrag: bt,
      enableImageDrag: Tt,
      preventOutline: zt,
      restoreOutline: Mt,
    }),
    Se = Li.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = Pt(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire("start"),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = f(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), Lt(this._el, e), this.fire("step");
      },
      _complete: function () {
        g(this._animId), (this._inProgress = !1), this.fire("end");
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      },
    }),
    ke = Li.extend({
      options: {
        crs: Ei,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0,
      },
      initialize: function (t, i) {
        (i = l(this, i)),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = e(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(C(i.center), i.zoom, { reset: !0 }),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this.callInitHooks(),
          (this._zoomAnimated = Te && Yi && !ee && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            V(this._proxy, ze, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, e, n) {
        if (
          ((e = void 0 === e ? this._zoom : this._limitZoom(e)),
          (t = this._limitCenter(C(t), e, this.options.maxBounds)),
          (n = n || {}),
          this._stop(),
          this._loaded && !n.reset && n !== !0)
        ) {
          void 0 !== n.animate &&
            ((n.zoom = i({ animate: n.animate }, n.zoom)),
            (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan)));
          var o =
            this._zoom !== e
              ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
              : this._tryAnimatedPan(t, n.pan);
          if (o) return clearTimeout(this._sizeTimer), this;
        }
        return this._resetView(t, e), this;
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (Yi ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (Yi ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = t instanceof x ? t : this.latLngToContainerPoint(t),
          r = s.subtract(o).multiplyBy(1 - 1 / n),
          a = this.containerPointToLatLng(o.add(r));
        return this.setView(a, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : z(t));
        var e = w(i.paddingTopLeft || i.padding || [0, 0]),
          n = w(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o),
          o === 1 / 0)
        )
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o),
          h = this.unproject(r.add(a).divideBy(2).add(s), o);
        return { center: h, zoom: o };
      },
      fitBounds: function (t, i) {
        if (((t = z(t)), !t.isValid()))
          throw new Error("Bounds are not valid.");
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180],
          ],
          t
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        if (((t = w(t).round()), (i = i || {}), !t.x && !t.y))
          return this.fire("moveend");
        if (i.animate !== !0 && !this.getSize().contains(t))
          return (
            this._resetView(
              this.unproject(this.project(this.getCenter()).add(t)),
              this.getZoom()
            ),
            this
          );
        if (
          (this._panAnim ||
            ((this._panAnim = new Se()),
            this._panAnim.on(
              {
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd,
              },
              this
            )),
          i.noMoveStart || this.fire("movestart"),
          i.animate !== !1)
        ) {
          pt(this._mapPane, "leaflet-pan-anim");
          var e = this._getMapPanePos().subtract(t).round();
          this._panAnim.run(
            this._mapPane,
            e,
            i.duration || 0.25,
            i.easeLinearity
          );
        } else this._rawPanBy(t), this.fire("move").fire("moveend");
        return this;
      },
      flyTo: function (t, i, e) {
        function n(t) {
          var i = t ? -1 : 1,
            e = t ? g : m,
            n = g * g - m * m + i * x * x * v * v,
            o = 2 * e * x * v,
            s = n / o,
            r = Math.sqrt(s * s + 1) - s,
            a = r < 1e-9 ? -18 : Math.log(r);
          return a;
        }
        function o(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function s(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        function r(t) {
          return o(t) / s(t);
        }
        function a(t) {
          return m * (s(w) / s(w + y * t));
        }
        function h(t) {
          return (m * (s(w) * r(w + y * t) - o(w))) / x;
        }
        function u(t) {
          return 1 - Math.pow(1 - t, 1.5);
        }
        function l() {
          var e = (Date.now() - L) / b,
            n = u(e) * P;
          e <= 1
            ? ((this._flyToFrame = f(l, this)),
              this._move(
                this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p),
                this.getScaleZoom(m / a(n), p),
                { flyTo: !0 }
              ))
            : this._move(t, i)._moveEnd(!0);
        }
        if (((e = e || {}), e.animate === !1 || !Yi))
          return this.setView(t, i, e);
        this._stop();
        var c = this.project(this.getCenter()),
          _ = this.project(t),
          d = this.getSize(),
          p = this._zoom;
        (t = C(t)), (i = void 0 === i ? p : i);
        var m = Math.max(d.x, d.y),
          g = m * this.getZoomScale(p, i),
          v = _.distanceTo(c) || 1,
          y = 1.42,
          x = y * y,
          w = n(0),
          L = Date.now(),
          P = (n(1) - w) / y,
          b = e.duration ? 1e3 * e.duration : 1e3 * P * 0.8;
        return this._moveStart(!0), l.call(this), this;
      },
      flyToBounds: function (t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      setMaxBounds: function (t) {
        return (
          (t = z(t)),
          t.isValid()
            ? (this.options.maxBounds &&
                this.off("moveend", this._panInsideMaxBounds),
              (this.options.maxBounds = t),
              this._loaded && this._panInsideMaxBounds(),
              this.on("moveend", this._panInsideMaxBounds))
            : ((this.options.maxBounds = null),
              this.off("moveend", this._panInsideMaxBounds))
        );
      },
      setMinZoom: function (t) {
        return (
          (this.options.minZoom = t),
          this._loaded && this.getZoom() < this.options.minZoom
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        return (
          (this.options.maxZoom = t),
          this._loaded && this.getZoom() > this.options.maxZoom
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, z(t));
        return (
          e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = i({ animate: !1, pan: !0 }, t === !0 ? { animate: !0 } : t);
        var n = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var o = this.getSize(),
          s = n.divideBy(2).round(),
          r = o.divideBy(2).round(),
          a = s.subtract(r);
        return a.x || a.y
          ? (t.animate && t.pan
              ? this.panBy(a)
              : (t.pan && this._rawPanBy(a),
                this.fire("move"),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      e(this.fire, this, "moveend"),
                      200
                    )))
                  : this.fire("moveend")),
            this.fire("resize", { oldSize: n, newSize: o }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)),
          !("geolocation" in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported.",
            }),
            this
          );
        var n = e(this._handleGeolocationResponse, this),
          o = e(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                n,
                o,
                t
              ))
            : navigator.geolocation.getCurrentPosition(n, o, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          e =
            t.message ||
            (1 === i
              ? "permission denied"
              : 2 === i
              ? "position unavailable"
              : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + e + ".",
          });
      },
      _handleGeolocationResponse: function (t) {
        var i = t.coords.latitude,
          e = t.coords.longitude,
          n = new M(i, e),
          o = n.toBounds(t.coords.accuracy),
          s = this._locateOptions;
        if (s.setView) {
          var r = this.getBoundsZoom(o);
          this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r);
        }
        var a = { latlng: n, bounds: o, timestamp: t.timestamp };
        for (var h in t.coords)
          "number" == typeof t.coords[h] && (a[h] = t.coords[h]);
        this.fire("locationfound", a);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        var e = (this[t] = new i(this));
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        ut(this._mapPane),
          this._clearControlPos && this._clearControlPos(),
          this._clearHandlers(),
          this._loaded && this.fire("unload");
        var t;
        for (t in this._layers) this._layers[t].remove();
        for (t in this._panes) ut(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        var e =
            "leaflet-pane" +
            (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          n = ht("div", e, i || this._mapPane);
        return t && (this._panes[t] = n), n;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds(),
          i = this.unproject(t.getBottomLeft()),
          e = this.unproject(t.getTopRight());
        return new T(i, e);
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = z(t)), (e = w(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = b(this.project(a, n), this.project(r, n)).getSize(),
          l = Yi ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);
        return (
          (n = this.getScaleZoom(d, n)),
          l &&
            ((n = Math.round(n / (l / 100)) * (l / 100)),
            (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new x(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new P(e, e.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(C(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(w(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        var i = w(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      latLngToLayerPoint: function (t) {
        var i = this.project(C(t))._round();
        return i._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(C(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(z(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(C(t), C(i));
      },
      containerPointToLayerPoint: function (t) {
        return w(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return w(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var i = this.containerPointToLayerPoint(w(t));
        return this.layerPointToLatLng(i);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return tt(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var i = (this._container = rt(t));
        if (!i) throw new Error("Map container not found.");
        if (i._leaflet_id)
          throw new Error("Map container is already initialized.");
        V(i, "scroll", this._onScroll, this), (this._containerId = n(i));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && Yi),
          pt(
            t,
            "leaflet-container" +
              (ie ? " leaflet-touch" : "") +
              (oe ? " leaflet-retina" : "") +
              (Ii ? " leaflet-oldie" : "") +
              (Hi ? " leaflet-safari" : "") +
              (this._fadeAnimated ? " leaflet-fade-anim" : "")
          );
        var i = at(t, "position");
        "absolute" !== i &&
          "relative" !== i &&
          "fixed" !== i &&
          (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane("mapPane", this._container)),
          Lt(this._mapPane, new x(0, 0)),
          this.createPane("tilePane"),
          this.createPane("shadowPane"),
          this.createPane("overlayPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation ||
            (pt(t.markerPane, "leaflet-zoom-hide"),
            pt(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function (t, i) {
        Lt(this._mapPane, new x(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire("viewprereset");
        var n = this._zoom !== i;
        this._moveStart(n)._move(t, i)._moveEnd(n),
          this.fire("viewreset"),
          e && this.fire("load");
      },
      _moveStart: function (t) {
        return t && this.fire("zoomstart"), this.fire("movestart");
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire("zoom", e),
          this.fire("move", e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function () {
        return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        Lt(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function (t) {
        (this._targets = {}), (this._targets[n(this._container)] = this);
        var i = t ? G : V;
        i(
          this._container,
          "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && i(window, "resize", this._onResize, this),
          Yi &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function () {
        g(this._resizeRequest),
          (this._resizeRequest = f(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            o = [],
            s = "mouseout" === i || "mouseover" === i,
            r = t.target || t.srcElement,
            a = !1;
          r;

        ) {
          if (
            ((e = this._targets[n(r)]),
            e &&
              ("click" === i || "preclick" === i) &&
              !t._simulated &&
              this._draggableMoved(e))
          ) {
            a = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (s && !ot(r, t)) break;
            if ((o.push(e), s)) break;
          }
          if (r === this._container) break;
          r = r.parentNode;
        }
        return o.length || a || s || !ot(r, t) || (o = [this]), o;
      },
      _handleDOMEvent: function (t) {
        if (this._loaded && !nt(t)) {
          var i = t.type;
          ("mousedown" !== i && "keypress" !== i) ||
            zt(t.target || t.srcElement),
            this._fireDOMEvent(t, i);
        }
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu",
      ],
      _fireDOMEvent: function (t, e, n) {
        if ("click" === t.type) {
          var o = i({}, t);
          (o.type = "preclick"), this._fireDOMEvent(o, o.type, n);
        }
        if (
          !t._stopped &&
          ((n = (n || []).concat(this._findEventTargets(t, e))), n.length)
        ) {
          var s = n[0];
          "contextmenu" === e && s.listens(e, !0) && $(t);
          var r = { originalEvent: t };
          if ("keypress" !== t.type) {
            var a = s.options && "icon" in s.options;
            (r.containerPoint = a
              ? this.latLngToContainerPoint(s.getLatLng())
              : this.mouseEventToContainerPoint(t)),
              (r.layerPoint = this.containerPointToLayerPoint(
                r.containerPoint
              )),
              (r.latlng = a
                ? s.getLatLng()
                : this.layerPointToLatLng(r.layerPoint));
          }
          for (var h = 0; h < n.length; h++)
            if (
              (n[h].fire(e, r, !0),
              r.originalEvent._stopped ||
                (n[h].options.bubblingMouseEvents === !1 &&
                  d(this._mouseEvents, e) !== -1))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          (t = t.dragging && t.dragging.enabled() ? t : this),
          (t.dragging && t.dragging.moved()) ||
            (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on("load", t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return Pt(this._mapPane) || new x(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        var e =
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin();
        return e.subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return b([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n),
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new P(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          n = new P(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      _getBoundsOffset: function (t, i, e) {
        var n = b(
            this.project(i.getNorthEast(), e),
            this.project(i.getSouthWest(), e)
          ),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max),
          r = this._rebound(o.x, -s.x),
          a = this._rebound(o.y, -s.y);
        return new x(r, a);
      },
      _rebound: function (t, i) {
        return t + i > 0
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = Yi ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire("move");
      },
      _onPanTransitionEnd: function () {
        mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function (t, i) {
        var e = this._getCenterOffset(t)._floor();
        return (
          !((i && i.animate) !== !0 && !this.getSize().contains(e)) &&
          (this.panBy(e, i), !0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = ht(
          "div",
          "leaflet-proxy leaflet-zoom-animated"
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            "zoomanim",
            function (t) {
              var i = be,
                e = this._proxy.style[i];
              wt(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on(
            "load moveend",
            function () {
              var t = this.getCenter(),
                i = this.getZoom();
              wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
            },
            this
          ),
          this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        ut(this._proxy), delete this._proxy;
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          t.propertyName.indexOf("transform") >= 0 &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated")
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            e.animate === !1 ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(e.animate !== !0 && !this.getSize().contains(o)) &&
          (f(function () {
            this._moveStart(!0)._animateZoom(t, i, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function (t, i, n, o) {
        n &&
          ((this._animatingZoom = !0),
          (this._animateToCenter = t),
          (this._animateToZoom = i),
          pt(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }),
          setTimeout(e(this._onZoomTransitionEnd, this), 250);
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (mt(this._mapPane, "leaflet-zoom-anim"),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          f(function () {
            this._moveEnd(!0);
          }, this));
      },
    }),
    Be = v.extend({
      options: { position: "topright" },
      initialize: function (t) {
        l(this, t);
      },
      getPosition: function () {
        return this.options.position;
      },
      setPosition: function (t) {
        var i = this._map;
        return (
          i && i.removeControl(this),
          (this.options.position = t),
          i && i.addControl(this),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      addTo: function (t) {
        this.remove(), (this._map = t);
        var i = (this._container = this.onAdd(t)),
          e = this.getPosition(),
          n = t._controlCorners[e];
        return (
          pt(i, "leaflet-control"),
          e.indexOf("bottom") !== -1
            ? n.insertBefore(i, n.firstChild)
            : n.appendChild(i),
          this
        );
      },
      remove: function () {
        return this._map
          ? (ut(this._container),
            this.onRemove && this.onRemove(this._map),
            (this._map = null),
            this)
          : this;
      },
      _refocusOnMap: function (t) {
        this._map &&
          t &&
          t.screenX > 0 &&
          t.screenY > 0 &&
          this._map.getContainer().focus();
      },
    }),
    Ie = function (t) {
      return new Be(t);
    };
  ke.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      function t(t, o) {
        var s = e + t + " " + e + o;
        i[t + o] = ht("div", s, n);
      }
      var i = (this._controlCorners = {}),
        e = "leaflet-",
        n = (this._controlContainer = ht(
          "div",
          e + "control-container",
          this._container
        ));
      t("top", "left"),
        t("top", "right"),
        t("bottom", "left"),
        t("bottom", "right");
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) ut(this._controlCorners[t]);
      ut(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    },
  });
  var Ae = Be.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        },
      },
      initialize: function (t, i, e) {
        l(this, e),
          (this._layerControlInputs = []),
          (this._layers = []),
          (this._lastZIndex = 0),
          (this._handlingClick = !1);
        for (var n in t) this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t),
          t.on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return Be.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(n(t));
        return (
          i && this._layers.splice(this._layers.indexOf(i), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        pt(this._container, "leaflet-control-layers-expanded"),
          (this._form.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._form.clientHeight
            ? (pt(this._form, "leaflet-control-layers-scrollbar"),
              (this._form.style.height = t + "px"))
            : mt(this._form, "leaflet-control-layers-scrollbar"),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return mt(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function () {
        var t = "leaflet-control-layers",
          i = (this._container = ht("div", t)),
          n = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), J(i), X(i);
        var o = (this._form = ht("form", t + "-list"));
        n &&
          (this._map.on("click", this.collapse, this),
          Ri ||
            V(i, { mouseenter: this.expand, mouseleave: this.collapse }, this));
        var s = (this._layersLink = ht("a", t + "-toggle", i));
        (s.href = "#"),
          (s.title = "Layers"),
          ie
            ? (V(s, "click", Q), V(s, "click", this.expand, this))
            : V(s, "focus", this.expand, this),
          V(
            o,
            "click",
            function () {
              setTimeout(e(this._onInputClick, this), 0);
            },
            this
          ),
          n || this.expand(),
          (this._baseLayersList = ht("div", t + "-base", o)),
          (this._separator = ht("div", t + "-separator", o)),
          (this._overlaysList = ht("div", t + "-overlays", o)),
          i.appendChild(o);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && n(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, e) {
        this._map && t.on("add remove", this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: e }),
          this.options.sortLayers &&
            this._layers.sort(
              L.bind(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        lt(this._baseLayersList),
          lt(this._overlaysList),
          (this._layerControlInputs = []);
        var t,
          i,
          e,
          n,
          o = 0;
        for (e = 0; e < this._layers.length; e++)
          (n = this._layers[e]),
            this._addItem(n),
            (i = i || n.overlay),
            (t = t || !n.overlay),
            (o += n.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && o > 1),
            (this._baseLayersList.style.display = t ? "" : "none")),
          (this._separator.style.display = i && t ? "" : "none"),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(n(t.target)),
          e = i.overlay
            ? "add" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "add" === t.type
            ? "baselayerchange"
            : null;
        e && this._map.fire(e, i);
      },
      _createRadioElement: function (t, i) {
        var e =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : "") +
            "/>",
          n = document.createElement("div");
        return (n.innerHTML = e), n.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement("label"),
          o = this._map.hasLayer(t.layer);
        t.overlay
          ? ((i = document.createElement("input")),
            (i.type = "checkbox"),
            (i.className = "leaflet-control-layers-selector"),
            (i.defaultChecked = o))
          : (i = this._createRadioElement("leaflet-base-layers", o)),
          this._layerControlInputs.push(i),
          (i.layerId = n(t.layer)),
          V(i, "click", this._onInputClick, this);
        var s = document.createElement("span");
        s.innerHTML = " " + t.name;
        var r = document.createElement("div");
        e.appendChild(r), r.appendChild(i), r.appendChild(s);
        var a = t.overlay ? this._overlaysList : this._baseLayersList;
        return a.appendChild(e), this._checkDisabledLayers(), e;
      },
      _onInputClick: function () {
        var t,
          i,
          e,
          n = this._layerControlInputs,
          o = [],
          s = [];
        this._handlingClick = !0;
        for (var r = n.length - 1; r >= 0; r--)
          (t = n[r]),
            (i = this._getLayer(t.layerId).layer),
            (e = this._map.hasLayer(i)),
            t.checked && !e ? o.push(i) : !t.checked && e && s.push(i);
        for (r = 0; r < s.length; r++) this._map.removeLayer(s[r]);
        for (r = 0; r < o.length; r++) this._map.addLayer(o[r]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          o >= 0;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      },
    }),
    Oe = function (t, i, e) {
      return new Ae(t, i, e);
    },
    Re = Be.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out",
      },
      onAdd: function (t) {
        var i = "leaflet-control-zoom",
          e = ht("div", i + " leaflet-bar"),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + "-in",
            e,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + "-out",
            e,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        var s = ht("a", e, n);
        return (
          (s.innerHTML = t),
          (s.href = "#"),
          (s.title = i),
          s.setAttribute("role", "button"),
          s.setAttribute("aria-label", i),
          J(s),
          V(s, "click", Q),
          V(s, "click", o, this),
          V(s, "click", this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = "leaflet-disabled";
        mt(this._zoomInButton, i),
          mt(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMinZoom()) &&
            pt(this._zoomOutButton, i),
          (this._disabled || t._zoom === t.getMaxZoom()) &&
            pt(this._zoomInButton, i);
      },
    });
  ke.mergeOptions({ zoomControl: !0 }),
    ke.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new Re()), this.addControl(this.zoomControl));
    });
  var De = function (t) {
      return new Re(t);
    },
    Ne = Be.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0,
      },
      onAdd: function (t) {
        var i = "leaflet-control-scale",
          e = ht("div", i),
          n = this.options;
        return (
          this._addScales(n, i + "-line", e),
          t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
          t.whenReady(this._update, this),
          e
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? "moveend" : "move",
          this._update,
          this
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = ht("div", i, e)),
          t.imperial && (this._iScale = ht("div", i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i])
          );
        this._updateScales(e);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e,
          n,
          o = 3.2808399 * t;
        o > 5280
          ? ((i = o / 5280),
            (e = this._getRoundNum(i)),
            this._updateScale(this._iScale, e + " mi", e / i))
          : ((n = this._getRoundNum(o)),
            this._updateScale(this._iScale, n + " ft", n / o));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + "px"),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
        return (
          (e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1), i * e
        );
      },
    }),
    je = function (t) {
      return new Ne(t);
    },
    We = Be.extend({
      options: {
        position: "bottomright",
        prefix:
          '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>',
      },
      initialize: function (t) {
        l(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        (t.attributionControl = this),
          (this._container = ht("div", "leaflet-control-attribution")),
          J(this._container);
        for (var i in t._layers)
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return t
          ? (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update(),
            this)
          : this;
      },
      removeAttribution: function (t) {
        return t
          ? (this._attributions[t] && (this._attributions[t]--, this._update()),
            this)
          : this;
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var i in this._attributions) this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            t.length && e.push(t.join(", ")),
            (this._container.innerHTML = e.join(" | "));
        }
      },
    });
  ke.mergeOptions({ attributionControl: !0 }),
    ke.addInitHook(function () {
      this.options.attributionControl && new We().addTo(this);
    });
  var He = function (t) {
    return new We(t);
  };
  (Be.Layers = Ae),
    (Be.Zoom = Re),
    (Be.Scale = Ne),
    (Be.Attribution = We),
    (Ie.layers = Oe),
    (Ie.zoom = De),
    (Ie.scale = je),
    (Ie.attribution = He);
  var Fe,
    Ue = v.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled
          ? this
          : ((this._enabled = !0), this.addHooks(), this);
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    }),
    Ve = { Events: wi },
    Ge = !1,
    qe = ie ? "touchstart mousedown" : "mousedown",
    Ke = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend",
    },
    Ye = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove",
    },
    Xe = Li.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        l(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (V(this._dragStartTarget, qe, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (L.Draggable._dragging === this && this.finishDrag(),
          G(this._dragStartTarget, qe, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        if (
          !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          !dt(this._element, "leaflet-zoom-anim") &&
            !(
              Ge ||
              t.shiftKey ||
              (1 !== t.which && 1 !== t.button && !t.touches) ||
              ((Ge = this),
              this._preventOutline && zt(this._element),
              bt(),
              Mi(),
              this._moving)
            ))
        ) {
          this.fire("down");
          var i = t.touches ? t.touches[0] : t;
          (this._startPoint = new x(i.clientX, i.clientY)),
            V(document, Ye[t.type], this._onMove, this),
            V(document, Ke[t.type], this._onUp, this);
        }
      },
      _onMove: function (t) {
        if (!t._simulated && this._enabled) {
          if (t.touches && t.touches.length > 1) return void (this._moved = !0);
          var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            e = new x(i.clientX, i.clientY),
            n = e.subtract(this._startPoint);
          (n.x || n.y) &&
            (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance ||
              ($(t),
              this._moved ||
                (this.fire("dragstart"),
                (this._moved = !0),
                (this._startPos = Pt(this._element).subtract(n)),
                pt(document.body, "leaflet-dragging"),
                (this._lastTarget = t.target || t.srcElement),
                window.SVGElementInstance &&
                  this._lastTarget instanceof SVGElementInstance &&
                  (this._lastTarget = this._lastTarget.correspondingUseElement),
                pt(this._lastTarget, "leaflet-drag-target")),
              (this._newPos = this._startPos.add(n)),
              (this._moving = !0),
              g(this._animRequest),
              (this._lastEvent = t),
              (this._animRequest = f(this._updatePosition, this, !0))));
        }
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t),
          Lt(this._element, this._newPos),
          this.fire("drag", t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        mt(document.body, "leaflet-dragging"),
          this._lastTarget &&
            (mt(this._lastTarget, "leaflet-drag-target"),
            (this._lastTarget = null));
        for (var t in Ye)
          G(document, Ye[t], this._onMove, this),
            G(document, Ke[t], this._onUp, this);
        Tt(),
          Ci(),
          this._moved &&
            this._moving &&
            (g(this._animRequest),
            this.fire("dragend", {
              distance: this._newPos.distanceTo(this._startPos),
            })),
          (this._moving = !1),
          (Ge = !1);
      },
    }),
    Je = (Object.freeze || Object)({
      simplify: Zt,
      pointToSegmentDistance: Et,
      closestPointOnSegment: St,
      clipSegment: At,
      _getEdgeIntersection: Ot,
      _getBitCode: Rt,
      _sqClosestPointOnSegment: Nt,
      _flat: jt,
    }),
    $e = (Object.freeze || Object)({ clipPolygon: Wt }),
    Qe = {
      project: function (t) {
        return new x(t.lng, t.lat);
      },
      unproject: function (t) {
        return new M(t.y, t.x);
      },
      bounds: new P([-180, -90], [180, 90]),
    },
    tn = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new P(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
        return (n = -e * Math.log(Math.max(a, 1e-10))), new x(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && Math.abs(u) > 1e-7;
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (u = Math.PI / 2 - 2 * Math.atan(r * i) - a),
            (a += u);
        return new M(a * e, (t.x * e) / n);
      },
    },
    en = (Object.freeze || Object)({
      LonLat: Qe,
      Mercator: tn,
      SphericalMercator: Ti,
    }),
    nn = i({}, bi, {
      code: "EPSG:3395",
      projection: tn,
      transformation: (function () {
        var t = 0.5 / (Math.PI * tn.R);
        return E(t, 0.5, -t, 0.5);
      })(),
    }),
    on = i({}, bi, {
      code: "EPSG:4326",
      projection: Qe,
      transformation: E(1 / 180, 1, -1 / 180, 0.5),
    }),
    sn = i({}, Pi, {
      projection: Qe,
      transformation: E(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0,
    });
  (Pi.Earth = bi),
    (Pi.EPSG3395 = nn),
    (Pi.EPSG3857 = Ei),
    (Pi.EPSG900913 = Si),
    (Pi.EPSG4326 = on),
    (Pi.Simple = sn);
  var rn = Li.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0,
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[n(t)] = this), this;
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[n(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i = t.target;
      if (i.hasLayer(this)) {
        if (
          ((this._map = i),
          (this._zoomAnimated = i._zoomAnimated),
          this.getEvents)
        ) {
          var e = this.getEvents();
          i.on(e, this),
            this.once(
              "remove",
              function () {
                i.off(e, this);
              },
              this
            );
        }
        this.onAdd(i),
          this.getAttribution &&
            i.attributionControl &&
            i.attributionControl.addAttribution(this.getAttribution()),
          this.fire("add"),
          i.fire("layeradd", { layer: this });
      }
    },
  });
  ke.include({
    addLayer: function (t) {
      var i = n(t);
      return this._layers[i]
        ? this
        : ((this._layers[i] = t),
          (t._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t),
          this);
    },
    removeLayer: function (t) {
      var i = n(t);
      return this._layers[i]
        ? (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire("layerremove", { layer: t }), t.fire("remove")),
          (t._map = t._mapToAdd = null),
          this)
        : this;
    },
    hasLayer: function (t) {
      return !!t && n(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      t = t ? (mi(t) ? t : [t]) : [];
      for (var i = 0, e = t.length; i < e; i++) this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[n(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var i = n(t);
      this._zoomBoundLayers[i] &&
        (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        i = -(1 / 0),
        e = this._getZoomSpan();
      for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;
        (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
          (i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom));
      }
      (this._layersMaxZoom = i === -(1 / 0) ? void 0 : i),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        e !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    },
  });
  var an = rn.extend({
      initialize: function (t) {
        this._layers = {};
        var i, e;
        if (t) for (i = 0, e = t.length; i < e; i++) this.addLayer(t[i]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[i] &&
            this._map.removeLayer(this._layers[i]),
          delete this._layers[i],
          this
        );
      },
      hasLayer: function (t) {
        return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
      },
      clearLayers: function () {
        for (var t in this._layers) this.removeLayer(this._layers[t]);
        return this;
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i]), e[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        for (var i in this._layers) t.addLayer(this._layers[i]);
      },
      onRemove: function (t) {
        for (var i in this._layers) t.removeLayer(this._layers[i]);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        for (var i in this._layers) t.push(this._layers[i]);
        return t;
      },
      setZIndex: function (t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: function (t) {
        return n(t);
      },
    }),
    hn = function (t) {
      return new an(t);
    },
    un = an.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            an.prototype.addLayer.call(this, t),
            this.fire("layeradd", { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            an.prototype.removeLayer.call(this, t),
            this.fire("layerremove", { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function () {
        return this.invoke("bringToFront");
      },
      bringToBack: function () {
        return this.invoke("bringToBack");
      },
      getBounds: function () {
        var t = new T();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      },
    }),
    ln = function (t) {
      return new un(t);
    },
    cn = v.extend({
      initialize: function (t) {
        l(this, t);
      },
      createIcon: function (t) {
        return this._createIcon("icon", t);
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + "Size"];
        "number" == typeof n && (n = [n, n]);
        var o = w(n),
          s = w(
            ("shadow" === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0))
          );
        (t.className = "leaflet-marker-" + i + " " + (e.className || "")),
          s &&
            ((t.style.marginLeft = -s.x + "px"),
            (t.style.marginTop = -s.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      _createImg: function (t, i) {
        return (i = i || document.createElement("img")), (i.src = t), i;
      },
      _getIconUrl: function (t) {
        return (oe && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      },
    }),
    _n = cn.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41],
      },
      _getIconUrl: function (t) {
        return (
          _n.imagePath || (_n.imagePath = this._detectIconPath()),
          (this.options.imagePath || _n.imagePath) +
            cn.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = ht("div", "leaflet-default-icon-path", document.body),
          i = at(t, "background-image") || at(t, "backgroundImage");
        return (
          document.body.removeChild(t),
          (i =
            null === i || 0 !== i.indexOf("url")
              ? ""
              : i
                  .replace(/^url\([\"\']?/, "")
                  .replace(/marker-icon\.png[\"\']?\)$/, ""))
        );
      },
    }),
    dn = Ue.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new Xe(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .enable(),
          pt(t, "leaflet-marker-draggable");
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          )
          .disable(),
          this._marker._icon &&
            mt(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup().fire("movestart").fire("dragstart");
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = Pt(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && Lt(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function (t) {
        delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
      },
    }),
    pn = rn.extend({
      options: {
        icon: new _n(),
        interactive: !0,
        draggable: !1,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        bubblingMouseEvents: !1,
      },
      initialize: function (t, i) {
        l(this, i), (this._latlng = C(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = C(t)),
          this.update(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        if (this._icon) {
          var t = this._map.latLngToLayerPoint(this._latlng).round();
          this._setPos(t);
        }
        return this;
      },
      _initIcon: function () {
        var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          t.alt && (e.alt = t.alt)),
          pt(e, i),
          t.keyboard && (e.tabIndex = "0"),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (pt(o, i), (o.alt = "")),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane("shadowPane").appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex,
          }),
          ut(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && ut(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        Lt(this._icon, t),
          this._shadow && Lt(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon.style.zIndex = this._zIndex + t;
      },
      _animateZoom: function (t) {
        var i = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(i);
      },
      _initInteraction: function () {
        if (
          this.options.interactive &&
          (pt(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          dn)
        ) {
          var t = this.options.draggable;
          this.dragging &&
            ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new dn(this)),
            t && this.dragging.enable();
        }
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        vt(this._icon, t), this._shadow && vt(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor || [0, 0];
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor || [0, 0];
      },
    }),
    mn = rn.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0,
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          l(this, t), this._renderer && this._renderer._updateStyle(this), this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) + (ie ? 10 : 0)
        );
      },
    }),
    fn = mn.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        l(this, i), (this._latlng = C(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        return (
          (this._latlng = C(t)),
          this.redraw(),
          this.fire("move", { latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return mn.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];
        this._pxBounds = new P(this._point.subtract(n), this._point.add(n));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      },
    }),
    gn = fn.extend({
      initialize: function (t, e, n) {
        if (
          ("number" == typeof e && (e = i({}, n, { radius: e })),
          l(this, e),
          (this._latlng = C(t)),
          isNaN(this.options.radius))
        )
          throw new Error("Circle radius cannot be NaN");
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new T(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: mn.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;
        if (n.distance === bi.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / bi.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l =
              Math.acos(
                (Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) /
                  (Math.cos(i * o) * Math.cos(u * o))
              ) / o;
          (isNaN(l) || 0 === l) && (l = s / Math.cos((Math.PI / 180) * i)),
            (this._point = h.subtract(e.getPixelOrigin())),
            (this._radius = isNaN(l)
              ? 0
              : Math.max(Math.round(h.x - e.project([u, t - l]).x), 1)),
            (this._radiusY = Math.max(Math.round(h.y - r.y), 1));
        } else {
          var c = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = e.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - e.latLngToLayerPoint(c).x);
        }
        this._updateBounds();
      },
    }),
    vn = mn.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, i) {
        l(this, i), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var i, e, n = 1 / 0, o = null, s = Nt, r = 0, a = this._parts.length;
          r < a;
          r++
        )
          for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
            (i = h[u - 1]), (e = h[u]);
            var c = s(t, i, e, !0);
            c < n && ((n = c), (o = s(t, i, e)));
          }
        return o && (o.distance = Math.sqrt(n)), o;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
        if (!h) return null;
        for (t = 0, i = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
        if (0 === i) return this._map.layerPointToLatLng(a[0]);
        for (t = 0, n = 0; t < h - 1; t++)
          if (
            ((o = a[t]), (s = a[t + 1]), (e = o.distanceTo(s)), (n += e), n > i)
          )
            return (
              (r = (n - i) / e),
              this._map.layerPointToLatLng([
                s.x - r * (s.x - o.x),
                s.y - r * (s.y - o.y),
              ])
            );
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, i) {
        return (
          (i = i || this._defaultShape()),
          (t = C(t)),
          i.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new T()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return jt(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var i = [], e = jt(t), n = 0, o = t.length; n < o; n++)
          e
            ? ((i[n] = C(t[n])), this._bounds.extend(i[n]))
            : (i[n] = this._convertLatLngs(t[n]));
        return i;
      },
      _project: function () {
        var t = new P();
        (this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t);
        var i = this._clickTolerance(),
          e = new x(i, i);
        this._bounds.isValid() &&
          t.isValid() &&
          (t.min._subtract(e), t.max._add(e), (this._pxBounds = t));
      },
      _projectLatlngs: function (t, i, e) {
        var n,
          o,
          s = t[0] instanceof M,
          r = t.length;
        if (s) {
          for (o = [], n = 0; n < r; n++)
            (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
          i.push(o);
        } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []), this._pxBounds && this._pxBounds.intersects(t))
        ) {
          if (this.options.noClip) return void (this._parts = this._rings);
          var i,
            e,
            n,
            o,
            s,
            r,
            a,
            h = this._parts;
          for (i = 0, n = 0, o = this._rings.length; i < o; i++)
            for (a = this._rings[i], e = 0, s = a.length; e < s - 1; e++)
              (r = At(a[e], a[e + 1], t, e, !0)),
                r &&
                  ((h[n] = h[n] || []),
                  h[n].push(r[0]),
                  (r[1] === a[e + 1] && e !== s - 2) || (h[n].push(r[1]), n++));
        }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            i = this.options.smoothFactor,
            e = 0,
            n = t.length;
          e < n;
          e++
        )
          t[e] = Zt(t[e], i);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, i) {
        var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (e = 0, s = this._parts.length; e < s; e++)
          for (
            a = this._parts[e], n = 0, r = a.length, o = r - 1;
            n < r;
            o = n++
          )
            if ((i || 0 !== n) && Et(t, a[o], a[n]) <= h) return !0;
        return !1;
      },
    }),
    yn = vn.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error("Must add layer to map before using getCenter()");
        var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;
        if (!l) return null;
        for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++)
          (e = u[t]),
            (n = u[i]),
            (o = e.y * n.x - n.y * e.x),
            (r += (e.x + n.x) * o),
            (a += (e.y + n.y) * o),
            (s += 3 * o);
        return (
          (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
        );
      },
      _convertLatLngs: function (t) {
        var i = vn.prototype._convertLatLngs.call(this, t),
          e = i.length;
        return (
          e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i
        );
      },
      _setLatLngs: function (t) {
        vn.prototype._setLatLngs.call(this, t),
          jt(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return jt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          i = this.options.weight,
          e = new x(i, i);
        if (
          ((t = new P(t.min.subtract(e), t.max.add(e))),
          (this._parts = []),
          this._pxBounds && this._pxBounds.intersects(t))
        ) {
          if (this.options.noClip) return void (this._parts = this._rings);
          for (var n, o = 0, s = this._rings.length; o < s; o++)
            (n = Wt(this._rings[o], t, !0)), n.length && this._parts.push(n);
        }
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;
        if (!this._pxBounds.contains(t)) return !1;
        for (o = 0, a = this._parts.length; o < a; o++)
          for (
            i = this._parts[o], s = 0, h = i.length, r = h - 1;
            s < h;
            r = s++
          )
            (e = i[s]),
              (n = i[r]),
              e.y > t.y != n.y > t.y &&
                t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
                (u = !u);
        return u || vn.prototype._containsPoint.call(this, t, !0);
      },
    }),
    xn = un.extend({
      initialize: function (t, i) {
        l(this, i), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var i,
          e,
          n,
          o = mi(t) ? t : t.features;
        if (o) {
          for (i = 0, e = o.length; i < e; i++)
            (n = o[i]),
              (n.geometries || n.geometry || n.features || n.coordinates) &&
                this.addData(n);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var r = Kt(t, s);
        return r
          ? ((r.feature = ti(t)),
            (r.defaultOptions = r.options),
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r))
          : this;
      },
      resetStyle: function (t) {
        return (
          (t.options = i({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this
        );
      },
      setStyle: function (t) {
        return this.eachLayer(function (i) {
          this._setLayerStyle(i, t);
        }, this);
      },
      _setLayerStyle: function (t, i) {
        "function" == typeof i && (i = i(t.feature)),
          t.setStyle && t.setStyle(i);
      },
    }),
    wn = {
      toGeoJSON: function (t) {
        return Qt(this, {
          type: "Point",
          coordinates: Jt(this.getLatLng(), t),
        });
      },
    };
  pn.include(wn),
    gn.include(wn),
    fn.include(wn),
    vn.include({
      toGeoJSON: function (t) {
        var i = !jt(this._latlngs),
          e = $t(this._latlngs, i ? 1 : 0, !1, t);
        return Qt(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: e,
        });
      },
    }),
    yn.include({
      toGeoJSON: function (t) {
        var i = !jt(this._latlngs),
          e = i && !jt(this._latlngs[0]),
          n = $t(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return (
          i || (n = [n]),
          Qt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n })
        );
      },
    }),
    an.include({
      toMultiPoint: function (t) {
        var i = [];
        return (
          this.eachLayer(function (e) {
            i.push(e.toGeoJSON(t).geometry.coordinates);
          }),
          Qt(this, { type: "MultiPoint", coordinates: i })
        );
      },
      toGeoJSON: function (t) {
        var i =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === i) return this.toMultiPoint(t);
        var e = "GeometryCollection" === i,
          n = [];
        return (
          this.eachLayer(function (i) {
            if (i.toGeoJSON) {
              var o = i.toGeoJSON(t);
              if (e) n.push(o.geometry);
              else {
                var s = ti(o);
                "FeatureCollection" === s.type
                  ? n.push.apply(n, s.features)
                  : n.push(s);
              }
            }
          }),
          e
            ? Qt(this, { geometries: n, type: "GeometryCollection" })
            : { type: "FeatureCollection", features: n }
        );
      },
    });
  var Ln = ii,
    Pn = rn.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: "",
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = z(i)), l(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (pt(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        ut(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && ct(this._image), this;
      },
      bringToBack: function () {
        return this._map && _t(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = t), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = (this._image = ht(
          "img",
          "leaflet-image-layer " +
            (this._zoomAnimated ? "leaflet-zoom-animated" : "") +
            (this.options.className || "")
        ));
        (t.onselectstart = r),
          (t.onmousemove = r),
          (t.onload = e(this.fire, this, "load")),
          (t.onerror = e(this._overlayOnError, this, "error")),
          this.options.crossOrigin && (t.crossOrigin = ""),
          this.options.zIndex && this._updateZIndex(),
          (t.src = this._url),
          (t.alt = this.options.alt);
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        wt(this._image, e, i);
      },
      _reset: function () {
        var t = this._image,
          i = new P(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          e = i.getSize();
        Lt(t, i.min),
          (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px");
      },
      _updateOpacity: function () {
        vt(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      },
    }),
    bn = function (t, i, e) {
      return new Pn(t, i, e);
    },
    Tn = Pn.extend({
      options: { autoplay: !0, loop: !0 },
      _initImage: function () {
        var t = (this._image = ht(
          "video",
          "leaflet-image-layer " +
            (this._zoomAnimated ? "leaflet-zoom-animated" : "")
        ));
        (t.onselectstart = r),
          (t.onmousemove = r),
          (t.onloadeddata = e(this.fire, this, "load")),
          mi(this._url) || (this._url = [this._url]),
          (t.autoplay = !!this.options.autoplay),
          (t.loop = !!this.options.loop);
        for (var i = 0; i < this._url.length; i++) {
          var n = ht("source");
          (n.src = this._url[i]), t.appendChild(n);
        }
      },
    }),
    zn = rn.extend({
      options: { offset: [0, 7], className: "", pane: "popupPane" },
      initialize: function (t, i) {
        l(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && vt(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && vt(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (vt(this._container, 0),
            (this._removeTimeout = setTimeout(
              e(ut, void 0, this._container),
              200
            )))
          : ut(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = C(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ct(this._container), this;
      },
      bringToBack: function () {
        return this._map && _t(this._container), this;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              "function" == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            i = w(this.options.offset),
            e = this._getAnchor();
          this._zoomAnimated
            ? Lt(this._container, t.add(e))
            : (i = i.add(t).add(e));
          var n = (this._containerBottom = -i.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + i.x);
          (this._container.style.bottom = n + "px"),
            (this._container.style.left = o + "px");
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    }),
    Mn = zn.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        className: "",
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        zn.prototype.onAdd.call(this, t),
          t.fire("popupopen", { popup: this }),
          this._source &&
            (this._source.fire("popupopen", { popup: this }, !0),
            this._source instanceof mn || this._source.on("preclick", Y));
      },
      onRemove: function (t) {
        zn.prototype.onRemove.call(this, t),
          t.fire("popupclose", { popup: this }),
          this._source &&
            (this._source.fire("popupclose", { popup: this }, !0),
            this._source instanceof mn || this._source.off("preclick", Y));
      },
      getEvents: function () {
        var t = zn.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t = "leaflet-popup",
          i = (this._container = ht(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          )),
          e = (this._wrapper = ht("div", t + "-content-wrapper", i));
        if (
          ((this._contentNode = ht("div", t + "-content", e)),
          J(e),
          X(this._contentNode),
          V(e, "contextmenu", Y),
          (this._tipContainer = ht("div", t + "-tip-container", i)),
          (this._tip = ht("div", t + "-tip", this._tipContainer)),
          this.options.closeButton)
        ) {
          var n = (this._closeButton = ht("a", t + "-close-button", i));
          (n.href = "#close"),
            (n.innerHTML = "&#215;"),
            V(n, "click", this._onCloseButtonClick, this);
        }
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var e = t.offsetWidth;
        (e = Math.min(e, this.options.maxWidth)),
          (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var n = t.offsetHeight,
          o = this.options.maxHeight,
          s = "leaflet-popup-scrolled";
        o && n > o ? ((i.height = o + "px"), pt(t, s)) : mt(t, s),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          e = this._getAnchor();
        Lt(this._container, i.add(e));
      },
      _adjustPan: function () {
        if (
          !(
            !this.options.autoPan ||
            (this._map._panAnim && this._map._panAnim._inProgress)
          )
        ) {
          var t = this._map,
            i = parseInt(at(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new x(this._containerLeft, -e - this._containerBottom);
          o._add(Pt(this._container));
          var s = t.layerPointToContainerPoint(o),
            r = w(this.options.autoPanPadding),
            a = w(this.options.autoPanPaddingTopLeft || r),
            h = w(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;
          s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
            s.x - l - a.x < 0 && (l = s.x - a.x),
            s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
            s.y - c - a.y < 0 && (c = s.y - a.y),
            (l || c) && t.fire("autopanstart").panBy([l, c]);
        }
      },
      _onCloseButtonClick: function (t) {
        this._close(), Q(t);
      },
      _getAnchor: function () {
        return w(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      },
    }),
    Cn = function (t, i) {
      return new Mn(t, i);
    };
  ke.mergeOptions({ closePopupOnClick: !0 }),
    ke.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof Mn || (t = new Mn(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      },
    }),
    rn.include({
      bindPopup: function (t, i) {
        return (
          t instanceof Mn
            ? (l(t, i), (this._popup = t), (t._source = this))
            : ((this._popup && !i) || (this._popup = new Mn(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup,
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        if ((t instanceof rn || ((i = t), (t = this)), t instanceof un))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._popup &&
            this._map &&
            ((this._popup._source = t),
            this._popup.update(),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        if (this._popup && this._map)
          return (
            Q(t),
            i instanceof mn
              ? void this.openPopup(t.layer || t.target, t.latlng)
              : void (this._map.hasLayer(this._popup) &&
                this._popup._source === i
                  ? this.closePopup()
                  : this.openPopup(i, t.latlng))
          );
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      },
    });
  var Zn = zn.extend({
      options: {
        pane: "tooltipPane",
        offset: [0, 0],
        direction: "auto",
        permanent: !1,
        sticky: !1,
        interactive: !1,
        opacity: 0.9,
      },
      onAdd: function (t) {
        zn.prototype.onAdd.call(this, t),
          this.setOpacity(this.options.opacity),
          t.fire("tooltipopen", { tooltip: this }),
          this._source &&
            this._source.fire("tooltipopen", { tooltip: this }, !0);
      },
      onRemove: function (t) {
        zn.prototype.onRemove.call(this, t),
          t.fire("tooltipclose", { tooltip: this }),
          this._source &&
            this._source.fire("tooltipclose", { tooltip: this }, !0);
      },
      getEvents: function () {
        var t = zn.prototype.getEvents.call(this);
        return ie && !this.options.permanent && (t.preclick = this._close), t;
      },
      _close: function () {
        this._map && this._map.closeTooltip(this);
      },
      _initLayout: function () {
        var t = "leaflet-tooltip",
          i =
            t +
            " " +
            (this.options.className || "") +
            " leaflet-zoom-" +
            (this._zoomAnimated ? "animated" : "hide");
        this._contentNode = this._container = ht("div", i);
      },
      _updateLayout: function () {},
      _adjustPan: function () {},
      _setPosition: function (t) {
        var i = this._map,
          e = this._container,
          n = i.latLngToContainerPoint(i.getCenter()),
          o = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = e.offsetWidth,
          a = e.offsetHeight,
          h = w(this.options.offset),
          u = this._getAnchor();
        "top" === s
          ? (t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)))
          : "bottom" === s
          ? (t = t.subtract(w(r / 2 - h.x, -h.y, !0)))
          : "center" === s
          ? (t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)))
          : "right" === s || ("auto" === s && o.x < n.x)
          ? ((s = "right"), (t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))))
          : ((s = "left"),
            (t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0)))),
          mt(e, "leaflet-tooltip-right"),
          mt(e, "leaflet-tooltip-left"),
          mt(e, "leaflet-tooltip-top"),
          mt(e, "leaflet-tooltip-bottom"),
          pt(e, "leaflet-tooltip-" + s),
          Lt(e, t);
      },
      _updatePosition: function () {
        var t = this._map.latLngToLayerPoint(this._latlng);
        this._setPosition(t);
      },
      setOpacity: function (t) {
        (this.options.opacity = t), this._container && vt(this._container, t);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
          this._latlng,
          t.zoom,
          t.center
        );
        this._setPosition(i);
      },
      _getAnchor: function () {
        return w(
          this._source && this._source._getTooltipAnchor && !this.options.sticky
            ? this._source._getTooltipAnchor()
            : [0, 0]
        );
      },
    }),
    En = function (t, i) {
      return new Zn(t, i);
    };
  ke.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof Zn || (t = new Zn(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    },
  }),
    rn.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof Zn
            ? (l(t, i), (this._tooltip = t), (t._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new Zn(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        if (t || !this._tooltipHandlersAdded) {
          var i = t ? "off" : "on",
            e = { remove: this.closeTooltip, move: this._moveTooltip };
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              ie && (e.click = this._openTooltip)),
            this[i](e),
            (this._tooltipHandlersAdded = !t);
        }
      },
      openTooltip: function (t, i) {
        if ((t instanceof rn || ((i = t), (t = this)), t instanceof un))
          for (var e in this._layers) {
            t = this._layers[e];
            break;
          }
        return (
          i || (i = t.getCenter ? t.getCenter() : t.getLatLng()),
          this._tooltip &&
            this._map &&
            ((this._tooltip._source = t),
            this._tooltip.update(),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (pt(this._tooltip._container, "leaflet-clickable"),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (mt(this._tooltip._container, "leaflet-clickable"),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i,
          e,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (e = this._map.containerPointToLayerPoint(i)),
          (n = this._map.layerPointToLatLng(e))),
          this._tooltip.setLatLng(n);
      },
    });
  var Sn = cn.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon",
    },
    createIcon: function (t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
        e = this.options;
      if (((i.innerHTML = e.html !== !1 ? e.html : ""), e.bgPos)) {
        var n = w(e.bgPos);
        i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }
      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function () {
      return null;
    },
  });
  cn.Default = _n;
  var kn = rn.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: Xi,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: "tilePane",
        className: "",
        keepBuffer: 2,
      },
      initialize: function (t) {
        l(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView(),
          this._update();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          ut(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = null);
      },
      bringToFront: function () {
        return (
          this._map && (ct(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (_t(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        return this._map && (this._removeAllTiles(), this._update()), this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = o(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement("div");
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof x ? t : new x(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var i,
            e = this.getPane().children,
            n = -t(-(1 / 0), 1 / 0),
            o = 0,
            s = e.length;
          o < s;
          o++
        )
          (i = e[o].style.zIndex),
            e[o] !== this._container && i && (n = t(n, +i));
        isFinite(n) &&
          ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !Ii) {
          vt(this._container, this.options.opacity);
          var t = +new Date(),
            i = !1,
            e = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (o.current && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              vt(o.el, s),
                s < 1
                  ? (i = !0)
                  : (o.active ? (e = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          e && !this._noPrune && this._pruneTiles(),
            i &&
              (g(this._fadeFrame),
              (this._fadeFrame = f(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: r,
      _initContainer: function () {
        this._container ||
          ((this._container = ht(
            "div",
            "leaflet-layer " + (this.options.className || "")
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom;
        if (void 0 !== t) {
          for (var e in this._levels)
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (ut(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              ((n = this._levels[t] = {}),
              (n.el = ht(
                "div",
                "leaflet-tile-container leaflet-zoom-animated",
                this._container
              )),
              (n.el.style.zIndex = i),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              r(n.el.offsetWidth),
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: r,
      _onRemoveLevel: r,
      _onCreateLevel: r,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            i,
            e = this._map.getZoom();
          if (e > this.options.maxZoom || e < this.options.minZoom)
            return void this._removeAllTiles();
          for (t in this._tiles) (i = this._tiles[t]), (i.retain = i.current);
          for (t in this._tiles)
            if (((i = this._tiles[t]), i.current && !i.active)) {
              var n = i.coords;
              this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var i in this._tiles)
          this._tiles[i].coords.z === t && this._removeTile(i);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          ut(this._levels[t].el),
            this._onRemoveLevel(t),
            delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = null);
      },
      _retainParent: function (t, i, e, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new x(+o, +s);
        a.z = +r;
        var h = this._tileCoordsToKey(a),
          u = this._tiles[h];
        return u && u.active
          ? ((u.retain = !0), !0)
          : (u && u.loaded && (u.retain = !0),
            r > n && this._retainParent(o, s, r, n));
      },
      _retainChildren: function (t, i, e, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * i; s < 2 * i + 2; s++) {
            var r = new x(o, s);
            r.z = e + 1;
            var a = this._tileCoordsToKey(r),
              h = this._tiles[a];
            h && h.active
              ? (h.retain = !0)
              : (h && h.loaded && (h.retain = !0),
                e + 1 < n && this._retainChildren(o, s, e + 1, n));
          }
      },
      _resetView: function (t) {
        var i = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var i = this.options;
        return void 0 !== i.minNativeZoom && t < i.minNativeZoom
          ? i.minNativeZoom
          : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
          ? i.maxNativeZoom
          : t;
      },
      _setView: function (t, i, e, n) {
        var o = this._clampZoom(Math.round(i));
        ((void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)) &&
          (o = void 0);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (n && !s) ||
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          void 0 !== o && this._update(t),
          e || this._pruneTiles(),
          (this._noPrune = !!e)),
          this._setZoomTransforms(t, i);
      },
      _setZoomTransforms: function (t, i) {
        for (var e in this._levels)
          this._setZoomTransform(this._levels[e], t, i);
      },
      _setZoomTransform: function (t, i, e) {
        var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(i, e))
            .round();
        Yi ? wt(t.el, o, n) : Lt(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          i = t.options.crs,
          e = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = i.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
              Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y),
            ]),
          (this._wrapY = i.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
              Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y),
            ]);
      },
      _onMoveEnd: function () {
        this._map && !this._map._animatingZoom && this._update();
      },
      _getTiledPixelBounds: function (t) {
        var i = this._map,
          e = i._animatingZoom
            ? Math.max(i._animateToZoom, i.getZoom())
            : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);
        return new P(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var i = this._map;
        if (i) {
          var e = this._clampZoom(i.getZoom());
          if (
            (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new P(
                o.getBottomLeft().subtract([a, -a]),
                o.getTopRight().add([a, -a])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error("Attempted to load an infinite number of tiles");
            for (var u in this._tiles) {
              var l = this._tiles[u].coords;
              (l.z === this._tileZoom && h.contains(new x(l.x, l.y))) ||
                (this._tiles[u].current = !1);
            }
            if (Math.abs(e - this._tileZoom) > 1)
              return void this._setView(t, e);
            for (var c = o.min.y; c <= o.max.y; c++)
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d = new x(_, c);
                (d.z = this._tileZoom),
                  this._isValidTile(d) &&
                    (this._tiles[this._tileCoordsToKey(d)] || r.push(d));
              }
            if (
              (r.sort(function (t, i) {
                return t.distanceTo(s) - i.distanceTo(s);
              }),
              0 !== r.length)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              var p = document.createDocumentFragment();
              for (_ = 0; _ < r.length; _++) this._addTile(r[_], p);
              this._level.el.appendChild(p);
            }
          }
        }
      },
      _isValidTile: function (t) {
        var i = this._map.options.crs;
        if (!i.infinite) {
          var e = this._globalTileRange;
          if (
            (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
            (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return z(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToBounds: function (t) {
        var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e),
          s = i.unproject(n, t.z),
          r = i.unproject(o, t.z),
          a = new T(s, r);
        return this.options.noWrap || i.wrapLatLngBounds(a), a;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ":" + t.y + ":" + t.z;
      },
      _keyToTileCoords: function (t) {
        var i = t.split(":"),
          e = new x(+i[0], +i[1]);
        return (e.z = +i[2]), e;
      },
      _removeTile: function (t) {
        var i = this._tiles[t];
        i &&
          (ut(i.el),
          delete this._tiles[t],
          this.fire("tileunload", {
            tile: i.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        pt(t, "leaflet-tile");
        var i = this.getTileSize();
        (t.style.width = i.x + "px"),
          (t.style.height = i.y + "px"),
          (t.onselectstart = r),
          (t.onmousemove = r),
          Ii && this.options.opacity < 1 && vt(t, this.options.opacity),
          Ri && !Di && (t.style.WebkitBackfaceVisibility = "hidden");
      },
      _addTile: function (t, i) {
        var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));
        this._initTile(s),
          this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)),
          Lt(s, n),
          (this._tiles[o] = { el: s, coords: t, current: !0 }),
          i.appendChild(s),
          this.fire("tileloadstart", { tile: s, coords: t });
      },
      _tileReady: function (t, i, n) {
        if (this._map) {
          i && this.fire("tileerror", { error: i, tile: n, coords: t });
          var o = this._tileCoordsToKey(t);
          (n = this._tiles[o]),
            n &&
              ((n.loaded = +new Date()),
              this._map._fadeAnimated
                ? (vt(n.el, 0),
                  g(this._fadeFrame),
                  (this._fadeFrame = f(this._updateOpacity, this)))
                : ((n.active = !0), this._pruneTiles()),
              i ||
                (pt(n.el, "leaflet-tile-loaded"),
                this.fire("tileload", { tile: n.el, coords: t })),
              this._noTilesToLoad() &&
                ((this._loading = !1),
                this.fire("load"),
                Ii || !this._map._fadeAnimated
                  ? f(this._pruneTiles, this)
                  : setTimeout(e(this._pruneTiles, this), 250)));
        }
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var i = new x(
          this._wrapX ? s(t.x, this._wrapX) : t.x,
          this._wrapY ? s(t.y, this._wrapY) : t.y
        );
        return (i.z = t.z), i;
      },
      _pxBoundsToTileRange: function (t) {
        var i = this.getTileSize();
        return new P(
          t.min.unscaleBy(i).floor(),
          t.max.unscaleBy(i).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    }),
    Bn = kn.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: "abc",
        errorTileUrl: "",
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
      },
      initialize: function (t, i) {
        (this._url = t),
          (i = l(this, i)),
          i.detectRetina &&
            oe &&
            i.maxZoom > 0 &&
            ((i.tileSize = Math.floor(i.tileSize / 2)),
            i.zoomReverse
              ? (i.zoomOffset--, i.minZoom++)
              : (i.zoomOffset++, i.maxZoom--),
            (i.minZoom = Math.max(0, i.minZoom))),
          "string" == typeof i.subdomains &&
            (i.subdomains = i.subdomains.split("")),
          Ri || this.on("tileunload", this._onTileRemove);
      },
      setUrl: function (t, i) {
        return (this._url = t), i || this.redraw(), this;
      },
      createTile: function (t, i) {
        var n = document.createElement("img");
        return (
          V(n, "load", e(this._tileOnLoad, this, i, n)),
          V(n, "error", e(this._tileOnError, this, i, n)),
          this.options.crossOrigin && (n.crossOrigin = ""),
          (n.alt = ""),
          n.setAttribute("role", "presentation"),
          (n.src = this.getTileUrl(t)),
          n
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: oe ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), (e["-y"] = n);
        }
        return _(this._url, i(e, this.options));
      },
      _tileOnLoad: function (t, i) {
        Ii ? setTimeout(e(t, this, null, i), 0) : t(null, i);
      },
      _tileOnError: function (t, i, e) {
        var n = this.options.errorTileUrl;
        n && i.src !== n && (i.src = n), t(e, i);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          i = this.options.maxZoom,
          e = this.options.zoomReverse,
          n = this.options.zoomOffset;
        return e && (t = i - t), t + n;
      },
      _getSubdomain: function (t) {
        var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[i];
      },
      _abortLoading: function () {
        var t, i;
        for (t in this._tiles)
          this._tiles[t].coords.z !== this._tileZoom &&
            ((i = this._tiles[t].el),
            (i.onload = r),
            (i.onerror = r),
            i.complete || ((i.src = fi), ut(i)));
      },
    }),
    In = Bn.extend({
      defaultWmsParams: {
        service: "WMS",
        request: "GetMap",
        layers: "",
        styles: "",
        format: "image/jpeg",
        transparent: !1,
        version: "1.1.1",
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var n = i({}, this.defaultWmsParams);
        for (var o in e) o in this.options || (n[o] = e[o]);
        (e = l(this, e)),
          (n.width = n.height = e.tileSize * (e.detectRetina && oe ? 2 : 1)),
          (this.wmsParams = n);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
        (this.wmsParams[i] = this._crs.code), Bn.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var i = this._tileCoordsToBounds(t),
          e = this._crs.project(i.getNorthWest()),
          n = this._crs.project(i.getSouthEast()),
          o = (
            this._wmsVersion >= 1.3 && this._crs === on
              ? [n.y, e.x, e.y, n.x]
              : [e.x, n.y, n.x, e.y]
          ).join(","),
          s = Bn.prototype.getTileUrl.call(this, t);
        return (
          s +
          c(this.wmsParams, s, this.options.uppercase) +
          (this.options.uppercase ? "&BBOX=" : "&bbox=") +
          o
        );
      },
      setParams: function (t, e) {
        return i(this.wmsParams, t), e || this.redraw(), this;
      },
    });
  (Bn.WMS = In), (si.wms = ri);
  var An = rn.extend({
      options: { padding: 0.1 },
      initialize: function (t) {
        l(this, t), n(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on("update", this._updatePaths, this);
      },
      onRemove: function () {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd,
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = Pt(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i),
          a = r.subtract(s),
          h = o.multiplyBy(-e).add(n).add(o).subtract(a);
        Yi ? wt(this._container, h, e) : Lt(this._container, h);
      },
      _reset: function () {
        this._update(), this._updateTransform(this._center, this._zoom);
        for (var t in this._layers) this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      },
    }),
    On = An.extend({
      getEvents: function () {
        var t = An.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        An.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement("canvas"));
        V(t, "mousemove", o(this._onMouseMove, 32, this), this),
          V(
            t,
            "click dblclick mousedown mouseup contextmenu",
            this._onClick,
            this
          ),
          V(t, "mouseout", this._handleMouseOut, this),
          (this._ctx = t.getContext("2d"));
      },
      _destroyContainer: function () {
        delete this._ctx,
          ut(this._container),
          G(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          var t;
          this._redrawBounds = null;
          for (var i in this._layers) (t = this._layers[i]), t._update();
          this._redraw();
        }
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          (this._drawnLayers = {}), An.prototype._update.call(this);
          var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = oe ? 2 : 1;
          Lt(i, t.min),
            (i.width = n * e.x),
            (i.height = n * e.y),
            (i.style.width = e.x + "px"),
            (i.style.height = e.y + "px"),
            oe && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update");
        }
      },
      _reset: function () {
        An.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t), (this._layers[n(t)] = t);
        var i = (t._order = { layer: t, prev: this._drawLast, next: null });
        this._drawLast && (this._drawLast.next = i),
          (this._drawLast = i),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e ? (e.prev = n) : (this._drawLast = n),
          n ? (n.next = e) : (this._drawFirst = e),
          delete t._order,
          delete this._layers[L.stamp(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if (t.options.dashArray) {
          var i,
            e = t.options.dashArray.split(","),
            n = [];
          for (i = 0; i < e.length; i++) n.push(Number(e[i]));
          t.options._dashArray = n;
        }
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || f(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        if (t._pxBounds) {
          var i = (t.options.weight || 0) + 1;
          (this._redrawBounds = this._redrawBounds || new P()),
            this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
            this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
        }
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t = this._redrawBounds;
        if (t) {
          var i = t.getSize();
          this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
        } else
          this._ctx.clearRect(
            0,
            0,
            this._container.width,
            this._container.height
          );
      },
      _draw: function () {
        var t,
          i = this._redrawBounds;
        if ((this._ctx.save(), i)) {
          var e = i.getSize();
          this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip();
        }
        this._drawing = !0;
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!i || (t._pxBounds && t._pxBounds.intersects(i))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (
              this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0;
              e < a;
              e++
            ) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        if (this._drawing && !t._empty()) {
          var i = t._point,
            e = this._ctx,
            n = t._radius,
            o = (t._radiusY || n) / n;
          (this._drawnLayers[t._leaflet_id] = t),
            1 !== o && (e.save(), e.scale(1, o)),
            e.beginPath(),
            e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
            1 !== o && e.restore(),
            this._fillStroke(e, t);
        }
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer),
            i.options.interactive &&
              i._containsPoint(n) &&
              !this._map._draggableMoved(i) &&
              (e = i);
        e && (et(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        if (
          this._map &&
          !this._map.dragging.moving() &&
          !this._map._animatingZoom
        ) {
          var i = this._map.mouseEventToLayerPoint(t);
          this._handleMouseHover(t, i);
        }
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (mt(this._container, "leaflet-interactive"),
          this._fireEvent([i], t, "mouseout"),
          (this._hoveredLayer = null));
      },
      _handleMouseHover: function (t, i) {
        for (var e, n, o = this._drawFirst; o; o = o.next)
          (e = o.layer),
            e.options.interactive && e._containsPoint(i) && (n = e);
        n !== this._hoveredLayer &&
          (this._handleMouseOut(t),
          n &&
            (pt(this._container, "leaflet-interactive"),
            this._fireEvent([n], t, "mouseover"),
            (this._hoveredLayer = n))),
          this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e &&
          ((e.prev = n),
          n ? (n.next = e) : e && (this._drawFirst = e),
          (i.prev = this._drawLast),
          (this._drawLast.next = i),
          (i.next = null),
          (this._drawLast = i),
          this._requestRedraw(t));
      },
      _bringToBack: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        n &&
          ((n.next = e),
          e ? (e.prev = n) : n && (this._drawLast = n),
          (i.prev = null),
          (i.next = this._drawFirst),
          (this._drawFirst.prev = i),
          (this._drawFirst = i),
          this._requestRedraw(t));
      },
    }),
    Rn = (function () {
      try {
        return (
          document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
          function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      }
    })(),
    Dn = {
      _initContainer: function () {
        this._container = ht("div", "leaflet-vml-container");
      },
      _update: function () {
        this._map._animatingZoom ||
          (An.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._container = Rn("shape"));
        pt(i, "leaflet-vml-shape " + (this.options.className || "")),
          (i.coordsize = "1 1"),
          (t._path = Rn("path")),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? (i || (i = t._stroke = Rn("stroke")),
              o.appendChild(i),
              (i.weight = n.weight + "px"),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = mi(n.dashArray)
                    ? n.dashArray.join(" ")
                    : n.dashArray.replace(/( *, *)/g, " "))
                : (i.dashStyle = ""),
              (i.endcap = n.lineCap.replace("butt", "flat")),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? (e || (e = t._fill = Rn("fill")),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? "M0 0"
            : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600"
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        ct(t._container);
      },
      _bringToBack: function (t) {
        _t(t._container);
      },
    },
    Nn = ae ? Rn : S,
    jn = An.extend({
      getEvents: function () {
        var t = An.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = Nn("svg")),
          this._container.setAttribute("pointer-events", "none"),
          (this._rootGroup = Nn("g")),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        ut(this._container),
          G(this._container),
          delete this._container,
          delete this._rootGroup;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        if (!this._map._animatingZoom || !this._bounds) {
          An.prototype._update.call(this);
          var t = this._bounds,
            i = t.getSize(),
            e = this._container;
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute("width", i.x),
            e.setAttribute("height", i.y)),
            Lt(e, t.min),
            e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
            this.fire("update");
        }
      },
      _initPath: function (t) {
        var i = (t._path = Nn("path"));
        t.options.className && pt(i, t.options.className),
          t.options.interactive && pt(i, "leaflet-interactive"),
          this._updateStyle(t),
          (this._layers[n(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        ut(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[n(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          e = t.options;
        i &&
          (e.stroke
            ? (i.setAttribute("stroke", e.color),
              i.setAttribute("stroke-opacity", e.opacity),
              i.setAttribute("stroke-width", e.weight),
              i.setAttribute("stroke-linecap", e.lineCap),
              i.setAttribute("stroke-linejoin", e.lineJoin),
              e.dashArray
                ? i.setAttribute("stroke-dasharray", e.dashArray)
                : i.removeAttribute("stroke-dasharray"),
              e.dashOffset
                ? i.setAttribute("stroke-dashoffset", e.dashOffset)
                : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          e.fill
            ? (i.setAttribute("fill", e.fillColor || e.color),
              i.setAttribute("fill-opacity", e.fillOpacity),
              i.setAttribute("fill-rule", e.fillRule || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, k(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = t._radius,
          n = t._radiusY || e,
          o = "a" + e + "," + n + " 0 1,0 ",
          s = t._empty()
            ? "M0 0"
            : "M" +
              (i.x - e) +
              "," +
              i.y +
              o +
              2 * e +
              ",0 " +
              o +
              2 * -e +
              ",0 ";
        this._setPath(t, s);
      },
      _setPath: function (t, i) {
        t._path.setAttribute("d", i);
      },
      _bringToFront: function (t) {
        ct(t._path);
      },
      _bringToBack: function (t) {
        _t(t._path);
      },
    });
  ae && jn.include(Dn),
    ke.include({
      getRenderer: function (t) {
        var i =
          t.options.renderer ||
          this._getPaneRenderer(t.options.pane) ||
          this.options.renderer ||
          this._renderer;
        return (
          i ||
            (i = this._renderer = (this.options.preferCanvas && ai()) || hi()),
          this.hasLayer(i) || this.addLayer(i),
          i
        );
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = (jn && hi({ pane: t })) || (On && ai({ pane: t }))),
            (this._paneRenderers[t] = i)),
          i
        );
      },
    });
  var Wn = yn.extend({
    initialize: function (t, i) {
      yn.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return (
        (t = z(t)),
        [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
      );
    },
  });
  (jn.create = Nn),
    (jn.pointsToPath = k),
    (xn.geometryToLayer = Kt),
    (xn.coordsToLatLng = Yt),
    (xn.coordsToLatLngs = Xt),
    (xn.latLngToCoords = Jt),
    (xn.latLngsToCoords = $t),
    (xn.getFeature = Qt),
    (xn.asFeature = ti),
    ke.mergeOptions({ boxZoom: !0 });
  var Hn = Ue.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on("unload", this._destroy, this);
    },
    addHooks: function () {
      V(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function () {
      G(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      ut(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      return (
        !(!t.shiftKey || (1 !== t.which && 1 !== t.button)) &&
        (this._clearDeferredResetState(),
        this._resetState(),
        Mi(),
        bt(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        void V(
          document,
          {
            contextmenu: Q,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        ))
      );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = ht("div", "leaflet-zoom-box", this._container)),
        pt(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new P(this._point, this._startPoint),
        e = i.getSize();
      Lt(this._box, i.min),
        (this._box.style.width = e.x + "px"),
        (this._box.style.height = e.y + "px");
    },
    _finish: function () {
      this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")),
        Ci(),
        Tt(),
        G(
          document,
          {
            contextmenu: Q,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown,
          },
          this
        );
    },
    _onMouseUp: function (t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(e(this._resetState, this), 0));
        var i = new T(
          this._map.containerPointToLatLng(this._startPoint),
          this._map.containerPointToLatLng(this._point)
        );
        this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
      }
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    },
  });
  ke.addInitHook("addHandler", "boxZoom", Hn),
    ke.mergeOptions({ doubleClickZoom: !0 });
  var Fn = Ue.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom
        ? i.setZoom(o)
        : i.setZoomAround(t.containerPoint, o);
    },
  });
  ke.addInitHook("addHandler", "doubleClickZoom", Fn),
    ke.mergeOptions({
      dragging: !0,
      inertia: !Di,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0,
    });
  var Un = Ue.extend({
    addHooks: function () {
      if (!this._draggable) {
        var t = this._map;
        (this._draggable = new Xe(t._mapPane, t._container)),
          this._draggable.on(
            {
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd,
            },
            this
          ),
          this._draggable.on("predrag", this._onPreDragLimit, this),
          t.options.worldCopyJump &&
            (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this));
      }
      pt(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      mt(this._map._container, "leaflet-grab"),
        mt(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t = this._map;
      if (
        (t._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
      ) {
        var i = z(this._map.options.maxBounds);
        (this._offsetLimit = b(
          this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),
          this._map
            .latLngToContainerPoint(i.getSouthEast())
            .multiplyBy(-1)
            .add(this._map.getSize())
        )),
          (this._viscosity = Math.min(
            1,
            Math.max(0, this._map.options.maxBoundsViscosity)
          ));
      } else this._offsetLimit = null;
      t.fire("movestart").fire("dragstart"),
        t.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      if (this._map.options.inertia) {
        var i = (this._lastTime = +new Date()),
          e = (this._lastPos =
            this._draggable._absPos || this._draggable._newPos);
        this._positions.push(e),
          this._times.push(i),
          i - this._times[0] > 50 &&
            (this._positions.shift(), this._times.shift());
      }
      this._map.fire("move", t).fire("drag", t);
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
          i = this._offsetLimit;
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
          t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
          t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
          t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
          (this._draggable._newPos = this._draggable._startPos.add(t));
      }
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        s = ((n + i + e) % t) - i - e,
        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = r);
    },
    _onDragEnd: function (t) {
      var i = this._map,
        e = i.options,
        n = !e.inertia || this._times.length < 2;
      if ((i.fire("dragend", t), n)) i.fire("moveend");
      else {
        var o = this._lastPos.subtract(this._positions[0]),
          s = (this._lastTime - this._times[0]) / 1e3,
          r = e.easeLinearity,
          a = o.multiplyBy(r / s),
          h = a.distanceTo([0, 0]),
          u = Math.min(e.inertiaMaxSpeed, h),
          l = a.multiplyBy(u / h),
          c = u / (e.inertiaDeceleration * r),
          _ = l.multiplyBy(-c / 2).round();
        _.x || _.y
          ? ((_ = i._limitOffset(_, i.options.maxBounds)),
            f(function () {
              i.panBy(_, {
                duration: c,
                easeLinearity: r,
                noMoveStart: !0,
                animate: !0,
              });
            }))
          : i.fire("moveend");
      }
    },
  });
  ke.addInitHook("addHandler", "dragging", Un),
    ke.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var Vn = Ue.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173],
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        V(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        G(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown,
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      if (!this._focused) {
        var t = document.body,
          i = document.documentElement,
          e = t.scrollTop || i.scrollTop,
          n = t.scrollLeft || i.scrollLeft;
        this._map._container.focus(), window.scrollTo(n, e);
      }
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire("focus");
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire("blur");
    },
    _setPanDelta: function (t) {
      var i,
        e,
        n = (this._panKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
      for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
      for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
      for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      var i,
        e,
        n = (this._zoomKeys = {}),
        o = this.keyCodes;
      for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
      for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t;
    },
    _addHooks: function () {
      V(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function () {
      G(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;
          (i = this._panKeys[e]),
            t.shiftKey && (i = w(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup) return;
          n.closePopup();
        }
        Q(t);
      }
    },
  });
  ke.addInitHook("addHandler", "keyboard", Vn),
    ke.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
    });
  var Gn = Ue.extend({
    addHooks: function () {
      V(this._map._container, "mousewheel", this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      G(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = it(t),
        n = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var o = Math.max(n - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(e(this._performZoom, this), o)),
        Q(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = e ? Math.ceil(o / e) * e : o,
        r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;
      (this._delta = 0),
        (this._startTime = null),
        r &&
          ("center" === t.options.scrollWheelZoom
            ? t.setZoom(i + r)
            : t.setZoomAround(this._lastMousePos, i + r));
    },
  });
  ke.addInitHook("addHandler", "scrollWheelZoom", Gn),
    ke.mergeOptions({ tap: !0, tapTolerance: 15 });
  var qn = Ue.extend({
    addHooks: function () {
      V(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function () {
      G(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if (($(t), (this._fireClick = !0), t.touches.length > 1))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          n = i.target;
        (this._startPos = this._newPos = new x(i.clientX, i.clientY)),
          n.tagName &&
            "a" === n.tagName.toLowerCase() &&
            pt(n, "leaflet-active"),
          (this._holdTimeout = setTimeout(
            e(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent("contextmenu", i));
            }, this),
            1e3
          )),
          this._simulateEvent("mousedown", i),
          V(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      if (
        (clearTimeout(this._holdTimeout),
        G(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick && t && t.changedTouches)
      ) {
        var i = t.changedTouches[0],
          e = i.target;
        e &&
          e.tagName &&
          "a" === e.tagName.toLowerCase() &&
          mt(e, "leaflet-active"),
          this._simulateEvent("mouseup", i),
          this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      var i = t.touches[0];
      (this._newPos = new x(i.clientX, i.clientY)),
        this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent("MouseEvents");
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        i.target.dispatchEvent(e);
    },
  });
  ie && !te && ke.addInitHook("addHandler", "tap", qn),
    ke.mergeOptions({ touchZoom: ie && !Di, bounceAtZoomLimits: !0 });
  var Kn = Ue.extend({
    addHooks: function () {
      pt(this._map._container, "leaflet-touch-zoom"),
        V(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function () {
      mt(this._map._container, "leaflet-touch-zoom"),
        G(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i = this._map;
      if (
        t.touches &&
        2 === t.touches.length &&
        !i._animatingZoom &&
        !this._zooming
      ) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]);
        (this._centerPoint = i.getSize()._divideBy(2)),
          (this._startLatLng = i.containerPointToLatLng(this._centerPoint)),
          "center" !== i.options.touchZoom &&
            (this._pinchStartLatLng = i.containerPointToLatLng(
              e.add(n)._divideBy(2)
            )),
          (this._startDist = e.distanceTo(n)),
          (this._startZoom = i.getZoom()),
          (this._moved = !1),
          (this._zooming = !0),
          i._stop(),
          V(document, "touchmove", this._onTouchMove, this),
          V(document, "touchend", this._onTouchEnd, this),
          $(t);
      }
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          n = i.mouseEventToContainerPoint(t.touches[0]),
          o = i.mouseEventToContainerPoint(t.touches[1]),
          s = n.distanceTo(o) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(s, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && s < 1) ||
              (this._zoom > i.getMaxZoom() && s > 1)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          "center" === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 === s)) return;
        } else {
          var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);
          if (1 === s && 0 === r.x && 0 === r.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(r),
            this._zoom
          );
        }
        this._moved || (i._moveStart(!0), (this._moved = !0)),
          g(this._animRequest);
        var a = e(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1,
        });
        (this._animRequest = f(a, this, !0)), $(t);
      }
    },
    _onTouchEnd: function () {
      return this._moved && this._zooming
        ? ((this._zooming = !1),
          g(this._animRequest),
          G(document, "touchmove", this._onTouchMove),
          G(document, "touchend", this._onTouchEnd),
          void (this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              )))
        : void (this._zooming = !1);
    },
  });
  ke.addInitHook("addHandler", "touchZoom", Kn),
    (ke.BoxZoom = Hn),
    (ke.DoubleClickZoom = Fn),
    (ke.Drag = Un),
    (ke.Keyboard = Vn),
    (ke.ScrollWheelZoom = Gn),
    (ke.Tap = qn),
    (ke.TouchZoom = Kn);
  var Yn = window.L;
  (window.L = t),
    (t.version = ci),
    (t.noConflict = li),
    (t.Control = Be),
    (t.control = Ie),
    (t.Browser = he),
    (t.Evented = Li),
    (t.Mixin = Ve),
    (t.Util = xi),
    (t.Class = v),
    (t.Handler = Ue),
    (t.extend = i),
    (t.bind = e),
    (t.stamp = n),
    (t.setOptions = l),
    (t.DomEvent = Pe),
    (t.DomUtil = Ee),
    (t.PosAnimation = Se),
    (t.Draggable = Xe),
    (t.LineUtil = Je),
    (t.PolyUtil = $e),
    (t.Point = x),
    (t.point = w),
    (t.Bounds = P),
    (t.bounds = b),
    (t.Transformation = Z),
    (t.transformation = E),
    (t.Projection = en),
    (t.LatLng = M),
    (t.latLng = C),
    (t.LatLngBounds = T),
    (t.latLngBounds = z),
    (t.CRS = Pi),
    (t.GeoJSON = xn),
    (t.geoJSON = ii),
    (t.geoJson = Ln),
    (t.Layer = rn),
    (t.LayerGroup = an),
    (t.layerGroup = hn),
    (t.FeatureGroup = un),
    (t.featureGroup = ln),
    (t.ImageOverlay = Pn),
    (t.imageOverlay = bn),
    (t.VideoOverlay = Tn),
    (t.videoOverlay = ei),
    (t.DivOverlay = zn),
    (t.Popup = Mn),
    (t.popup = Cn),
    (t.Tooltip = Zn),
    (t.tooltip = En),
    (t.Icon = cn),
    (t.icon = Ht),
    (t.DivIcon = Sn),
    (t.divIcon = ni),
    (t.Marker = pn),
    (t.marker = Ft),
    (t.TileLayer = Bn),
    (t.tileLayer = si),
    (t.GridLayer = kn),
    (t.gridLayer = oi),
    (t.SVG = jn),
    (t.svg = hi),
    (t.Renderer = An),
    (t.Canvas = On),
    (t.canvas = ai),
    (t.Path = mn),
    (t.CircleMarker = fn),
    (t.circleMarker = Ut),
    (t.Circle = gn),
    (t.circle = Vt),
    (t.Polyline = vn),
    (t.polyline = Gt),
    (t.Polygon = yn),
    (t.polygon = qt),
    (t.Rectangle = Wn),
    (t.rectangle = ui),
    (t.Map = ke),
    (t.map = Ct);
});
//# sourceMappingURL=leaflet.js.map
