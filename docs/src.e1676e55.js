parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    jZN7: [
      function (require, module, exports) {
        var define;
        var t;
        !(function (e, n) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = n())
            : "function" == typeof t && t.amd
            ? t([], n)
            : "object" == typeof exports
            ? (exports.ex = n())
            : (e.ex = n());
        })(window, function () {
          return (function (t) {
            var e = {};
            function n(i) {
              if (e[i]) return e[i].exports;
              var r = (e[i] = { i: i, l: !1, exports: {} });
              return (
                t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, i) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: i });
              }),
              (n.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var i = Object.create(null);
                if (
                  (n.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var r in t)
                    n.d(
                      i,
                      r,
                      function (e) {
                        return t[e];
                      }.bind(null, r)
                    );
                return i;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 139))
            );
          })([
            function (t, e, n) {
              var i = n(5),
                r = n(48).f,
                o = n(16),
                s = n(49),
                a = n(30),
                c = n(79),
                h = n(83);
              t.exports = function (t, e) {
                var n,
                  u,
                  l,
                  p,
                  d,
                  f = t.target,
                  y = t.global,
                  g = t.stat;
                if ((n = y ? i : g ? i[f] || a(f, {}) : (i[f] || {}).prototype))
                  for (u in e) {
                    if (
                      ((p = e[u]),
                      (l = t.noTargetGet ? (d = r(n, u)) && d.value : n[u]),
                      !h(y ? u : f + (g ? "." : "#") + u, t.forced) &&
                        void 0 !== l)
                    ) {
                      if (typeof p == typeof l) continue;
                      c(p, l);
                    }
                    (t.sham || (l && l.sham)) && o(p, "sham", !0),
                      s(n, u, p, t);
                  }
              };
            },
            function (t, e, n) {
              var i = n(5),
                r = n(45),
                o = n(8),
                s = n(46),
                a = n(52),
                c = n(86),
                h = r("wks"),
                u = i.Symbol,
                l = c ? u : (u && u.withoutSetter) || s;
              t.exports = function (t) {
                return (
                  o(h, t) ||
                    (a && o(u, t) ? (h[t] = u[t]) : (h[t] = l("Symbol." + t))),
                  h[t]
                );
              };
            },
            function (t, e, n) {
              var i = n(11),
                r = n(4),
                o = n(8),
                s = Object.defineProperty,
                a = {},
                c = function (t) {
                  throw t;
                };
              t.exports = function (t, e) {
                if (o(a, t)) return a[t];
                e || (e = {});
                var n = [][t],
                  h = !!o(e, "ACCESSORS") && e.ACCESSORS,
                  u = o(e, 0) ? e[0] : c,
                  l = o(e, 1) ? e[1] : void 0;
                return (a[t] =
                  !!n &&
                  !r(function () {
                    if (h && !i) return !0;
                    var t = { length: -1 };
                    h ? s(t, 1, { enumerable: !0, get: c }) : (t[1] = 1),
                      n.call(t, u, l);
                  }));
              };
            },
            function (t, e, n) {
              var i = n(15),
                r = Math.min;
              t.exports = function (t) {
                return t > 0 ? r(i(t), 9007199254740991) : 0;
              };
            },
            function (t, e) {
              t.exports = function (t) {
                try {
                  return !!t();
                } catch (t) {
                  return !0;
                }
              };
            },
            function (t, e, n) {
              (function (e) {
                var n = function (t) {
                  return t && t.Math == Math && t;
                };
                t.exports =
                  n("object" == typeof globalThis && globalThis) ||
                  n("object" == typeof window && window) ||
                  n("object" == typeof self && self) ||
                  n("object" == typeof e && e) ||
                  Function("return this")();
              }.call(this, n(77)));
            },
            function (t, e, n) {
              var i = n(28);
              t.exports = function (t) {
                return Object(i(t));
              };
            },
            function (t, e) {
              t.exports = function (t) {
                return "object" == typeof t
                  ? null !== t
                  : "function" == typeof t;
              };
            },
            function (t, e) {
              var n = {}.hasOwnProperty;
              t.exports = function (t, e) {
                return n.call(t, e);
              };
            },
            function (t, e, n) {
              var i = n(11),
                r = n(43),
                o = n(17),
                s = n(31),
                a = Object.defineProperty;
              e.f = i
                ? a
                : function (t, e, n) {
                    if ((o(t), (e = s(e, !0)), o(n), r))
                      try {
                        return a(t, e, n);
                      } catch (t) {}
                    if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported");
                    return "value" in n && (t[e] = n.value), t;
                  };
            },
            function (t, e, n) {
              "use strict";
              var i = n(4);
              t.exports = function (t, e) {
                var n = [][t];
                return (
                  !!n &&
                  i(function () {
                    n.call(
                      null,
                      e ||
                        function () {
                          throw 1;
                        },
                      1
                    );
                  })
                );
              };
            },
            function (t, e, n) {
              var i = n(4);
              t.exports = !i(function () {
                return (
                  7 !=
                  Object.defineProperty({}, 1, {
                    get: function () {
                      return 7;
                    },
                  })[1]
                );
              });
            },
            function (t, e, n) {
              var i = n(1),
                r = n(53),
                o = n(9),
                s = i("unscopables"),
                a = Array.prototype;
              null == a[s] && o.f(a, s, { configurable: !0, value: r(null) }),
                (t.exports = function (t) {
                  a[s][t] = !0;
                });
            },
            function (t, e, n) {
              var i = n(26),
                r = n(28);
              t.exports = function (t) {
                return i(r(t));
              };
            },
            function (t, e, n) {
              var i = n(40),
                r = n(26),
                o = n(6),
                s = n(3),
                a = n(23),
                c = [].push,
                h = function (t) {
                  var e = 1 == t,
                    n = 2 == t,
                    h = 3 == t,
                    u = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l;
                  return function (d, f, y, g) {
                    for (
                      var _,
                        v,
                        m = o(d),
                        b = r(m),
                        w = i(f, y, 3),
                        x = s(b.length),
                        P = 0,
                        A = g || a,
                        E = e ? A(d, x) : n ? A(d, 0) : void 0;
                      x > P;
                      P++
                    )
                      if ((p || P in b) && ((v = w((_ = b[P]), P, m)), t))
                        if (e) E[P] = v;
                        else if (v)
                          switch (t) {
                            case 3:
                              return !0;
                            case 5:
                              return _;
                            case 6:
                              return P;
                            case 2:
                              c.call(E, _);
                          }
                        else if (u) return !1;
                    return l ? -1 : h || u ? u : E;
                  };
                };
              t.exports = {
                forEach: h(0),
                map: h(1),
                filter: h(2),
                some: h(3),
                every: h(4),
                find: h(5),
                findIndex: h(6),
              };
            },
            function (t, e) {
              var n = Math.ceil,
                i = Math.floor;
              t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
              };
            },
            function (t, e, n) {
              var i = n(11),
                r = n(9),
                o = n(25);
              t.exports = i
                ? function (t, e, n) {
                    return r.f(t, e, o(1, n));
                  }
                : function (t, e, n) {
                    return (t[e] = n), t;
                  };
            },
            function (t, e, n) {
              var i = n(7);
              t.exports = function (t) {
                if (!i(t)) throw TypeError(String(t) + " is not an object");
                return t;
              };
            },
            function (t, e, n) {
              var i = n(35);
              t.exports =
                Array.isArray ||
                function (t) {
                  return "Array" == i(t);
                };
            },
            function (t, e, n) {
              var i = n(15),
                r = Math.max,
                o = Math.min;
              t.exports = function (t, e) {
                var n = i(t);
                return n < 0 ? r(n + e, 0) : o(n, e);
              };
            },
            function (t, e) {
              t.exports = {};
            },
            function (t, e) {
              t.exports = function (t) {
                if ("function" != typeof t)
                  throw TypeError(String(t) + " is not a function");
                return t;
              };
            },
            function (t, e, n) {
              "use strict";
              var i = n(31),
                r = n(9),
                o = n(25);
              t.exports = function (t, e, n) {
                var s = i(e);
                s in t ? r.f(t, s, o(0, n)) : (t[s] = n);
              };
            },
            function (t, e, n) {
              var i = n(7),
                r = n(18),
                o = n(1)("species");
              t.exports = function (t, e) {
                var n;
                return (
                  r(t) &&
                    ("function" != typeof (n = t.constructor) ||
                    (n !== Array && !r(n.prototype))
                      ? i(n) && null === (n = n[o]) && (n = void 0)
                      : (n = void 0)),
                  new (void 0 === n ? Array : n)(0 === e ? 0 : e)
                );
              };
            },
            function (t, e, n) {
              var i = n(4),
                r = n(1),
                o = n(55),
                s = r("species");
              t.exports = function (t) {
                return (
                  o >= 51 ||
                  !i(function () {
                    var e = [];
                    return (
                      ((e.constructor = {})[s] = function () {
                        return { foo: 1 };
                      }),
                      1 !== e[t](Boolean).foo
                    );
                  })
                );
              };
            },
            function (t, e) {
              t.exports = function (t, e) {
                return {
                  enumerable: !(1 & t),
                  configurable: !(2 & t),
                  writable: !(4 & t),
                  value: e,
                };
              };
            },
            function (t, e, n) {
              var i = n(4),
                r = n(35),
                o = "".split;
              t.exports = i(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (t) {
                    return "String" == r(t) ? o.call(t, "") : Object(t);
                  }
                : Object;
            },
            function (t, e, n) {
              var i = n(36),
                r = n(5),
                o = function (t) {
                  return "function" == typeof t ? t : void 0;
                };
              t.exports = function (t, e) {
                return arguments.length < 2
                  ? o(i[t]) || o(r[t])
                  : (i[t] && i[t][e]) || (r[t] && r[t][e]);
              };
            },
            function (t, e) {
              t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on " + t);
                return t;
              };
            },
            function (t, e, n) {
              var i,
                r,
                o,
                s = n(76),
                a = n(5),
                c = n(7),
                h = n(16),
                u = n(8),
                l = n(32),
                p = n(34),
                d = a.WeakMap;
              if (s) {
                var f = new d(),
                  y = f.get,
                  g = f.has,
                  _ = f.set;
                (i = function (t, e) {
                  return _.call(f, t, e), e;
                }),
                  (r = function (t) {
                    return y.call(f, t) || {};
                  }),
                  (o = function (t) {
                    return g.call(f, t);
                  });
              } else {
                var v = l("state");
                (p[v] = !0),
                  (i = function (t, e) {
                    return h(t, v, e), e;
                  }),
                  (r = function (t) {
                    return u(t, v) ? t[v] : {};
                  }),
                  (o = function (t) {
                    return u(t, v);
                  });
              }
              t.exports = {
                set: i,
                get: r,
                has: o,
                enforce: function (t) {
                  return o(t) ? r(t) : i(t, {});
                },
                getterFor: function (t) {
                  return function (e) {
                    var n;
                    if (!c(e) || (n = r(e)).type !== t)
                      throw TypeError(
                        "Incompatible receiver, " + t + " required"
                      );
                    return n;
                  };
                },
              };
            },
            function (t, e, n) {
              var i = n(5),
                r = n(16);
              t.exports = function (t, e) {
                try {
                  r(i, t, e);
                } catch (n) {
                  i[t] = e;
                }
                return e;
              };
            },
            function (t, e, n) {
              var i = n(7);
              t.exports = function (t, e) {
                if (!i(t)) return t;
                var n, r;
                if (
                  e &&
                  "function" == typeof (n = t.toString) &&
                  !i((r = n.call(t)))
                )
                  return r;
                if ("function" == typeof (n = t.valueOf) && !i((r = n.call(t))))
                  return r;
                if (
                  !e &&
                  "function" == typeof (n = t.toString) &&
                  !i((r = n.call(t)))
                )
                  return r;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            function (t, e, n) {
              var i = n(45),
                r = n(46),
                o = i("keys");
              t.exports = function (t) {
                return o[t] || (o[t] = r(t));
              };
            },
            function (t, e) {
              t.exports = !1;
            },
            function (t, e) {
              t.exports = {};
            },
            function (t, e) {
              var n = {}.toString;
              t.exports = function (t) {
                return n.call(t).slice(8, -1);
              };
            },
            function (t, e, n) {
              var i = n(5);
              t.exports = i;
            },
            function (t, e, n) {
              var i = n(13),
                r = n(3),
                o = n(19),
                s = function (t) {
                  return function (e, n, s) {
                    var a,
                      c = i(e),
                      h = r(c.length),
                      u = o(s, h);
                    if (t && n != n) {
                      for (; h > u; ) if ((a = c[u++]) != a) return !0;
                    } else
                      for (; h > u; u++)
                        if ((t || u in c) && c[u] === n) return t || u || 0;
                    return !t && -1;
                  };
                };
              t.exports = { includes: s(!0), indexOf: s(!1) };
            },
            function (t, e) {
              t.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ];
            },
            function (t, e, n) {
              var i = n(8),
                r = n(6),
                o = n(32),
                s = n(85),
                a = o("IE_PROTO"),
                c = Object.prototype;
              t.exports = s
                ? Object.getPrototypeOf
                : function (t) {
                    return (
                      (t = r(t)),
                      i(t, a)
                        ? t[a]
                        : "function" == typeof t.constructor &&
                          t instanceof t.constructor
                        ? t.constructor.prototype
                        : t instanceof Object
                        ? c
                        : null
                    );
                  };
            },
            function (t, e, n) {
              var i = n(21);
              t.exports = function (t, e, n) {
                if ((i(t), void 0 === e)) return t;
                switch (n) {
                  case 0:
                    return function () {
                      return t.call(e);
                    };
                  case 1:
                    return function (n) {
                      return t.call(e, n);
                    };
                  case 2:
                    return function (n, i) {
                      return t.call(e, n, i);
                    };
                  case 3:
                    return function (n, i, r) {
                      return t.call(e, n, i, r);
                    };
                }
                return function () {
                  return t.apply(e, arguments);
                };
              };
            },
            function (t, e, n) {
              var i = n(42),
                r = Function.toString;
              "function" != typeof i.inspectSource &&
                (i.inspectSource = function (t) {
                  return r.call(t);
                }),
                (t.exports = i.inspectSource);
            },
            function (t, e, n) {
              var i = n(5),
                r = n(30),
                o = i["__core-js_shared__"] || r("__core-js_shared__", {});
              t.exports = o;
            },
            function (t, e, n) {
              var i = n(11),
                r = n(4),
                o = n(44);
              t.exports =
                !i &&
                !r(function () {
                  return (
                    7 !=
                    Object.defineProperty(o("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                });
            },
            function (t, e, n) {
              var i = n(5),
                r = n(7),
                o = i.document,
                s = r(o) && r(o.createElement);
              t.exports = function (t) {
                return s ? o.createElement(t) : {};
              };
            },
            function (t, e, n) {
              var i = n(33),
                r = n(42);
              (t.exports = function (t, e) {
                return r[t] || (r[t] = void 0 !== e ? e : {});
              })("versions", []).push({
                version: "3.6.5",
                mode: i ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
              });
            },
            function (t, e) {
              var n = 0,
                i = Math.random();
              t.exports = function (t) {
                return (
                  "Symbol(" +
                  String(void 0 === t ? "" : t) +
                  ")_" +
                  (++n + i).toString(36)
                );
              };
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(84),
                o = n(39),
                s = n(90),
                a = n(54),
                c = n(16),
                h = n(49),
                u = n(1),
                l = n(33),
                p = n(20),
                d = n(51),
                f = d.IteratorPrototype,
                y = d.BUGGY_SAFARI_ITERATORS,
                g = u("iterator"),
                _ = function () {
                  return this;
                };
              t.exports = function (t, e, n, u, d, v, m) {
                r(n, e, u);
                var b,
                  w,
                  x,
                  P = function (t) {
                    if (t === d && O) return O;
                    if (!y && t in S) return S[t];
                    switch (t) {
                      case "keys":
                      case "values":
                      case "entries":
                        return function () {
                          return new n(this, t);
                        };
                    }
                    return function () {
                      return new n(this);
                    };
                  },
                  A = e + " Iterator",
                  E = !1,
                  S = t.prototype,
                  C = S[g] || S["@@iterator"] || (d && S[d]),
                  O = (!y && C) || P(d),
                  T = ("Array" == e && S.entries) || C;
                if (
                  (T &&
                    ((b = o(T.call(new t()))),
                    f !== Object.prototype &&
                      b.next &&
                      (l ||
                        o(b) === f ||
                        (s ? s(b, f) : "function" != typeof b[g] && c(b, g, _)),
                      a(b, A, !0, !0),
                      l && (p[A] = _))),
                  "values" == d &&
                    C &&
                    "values" !== C.name &&
                    ((E = !0),
                    (O = function () {
                      return C.call(this);
                    })),
                  (l && !m) || S[g] === O || c(S, g, O),
                  (p[e] = O),
                  d)
                )
                  if (
                    ((w = {
                      values: P("values"),
                      keys: v ? O : P("keys"),
                      entries: P("entries"),
                    }),
                    m)
                  )
                    for (x in w) (!y && !E && x in S) || h(S, x, w[x]);
                  else i({ target: e, proto: !0, forced: y || E }, w);
                return w;
              };
            },
            function (t, e, n) {
              var i = n(11),
                r = n(78),
                o = n(25),
                s = n(13),
                a = n(31),
                c = n(8),
                h = n(43),
                u = Object.getOwnPropertyDescriptor;
              e.f = i
                ? u
                : function (t, e) {
                    if (((t = s(t)), (e = a(e, !0)), h))
                      try {
                        return u(t, e);
                      } catch (t) {}
                    if (c(t, e)) return o(!r.f.call(t, e), t[e]);
                  };
            },
            function (t, e, n) {
              var i = n(5),
                r = n(16),
                o = n(8),
                s = n(30),
                a = n(41),
                c = n(29),
                h = c.get,
                u = c.enforce,
                l = String(String).split("String");
              (t.exports = function (t, e, n, a) {
                var c = !!a && !!a.unsafe,
                  h = !!a && !!a.enumerable,
                  p = !!a && !!a.noTargetGet;
                "function" == typeof n &&
                  ("string" != typeof e || o(n, "name") || r(n, "name", e),
                  (u(n).source = l.join("string" == typeof e ? e : ""))),
                  t !== i
                    ? (c ? !p && t[e] && (h = !0) : delete t[e],
                      h ? (t[e] = n) : r(t, e, n))
                    : h
                    ? (t[e] = n)
                    : s(e, n);
              })(Function.prototype, "toString", function () {
                return ("function" == typeof this && h(this).source) || a(this);
              });
            },
            function (t, e, n) {
              var i = n(8),
                r = n(13),
                o = n(37).indexOf,
                s = n(34);
              t.exports = function (t, e) {
                var n,
                  a = r(t),
                  c = 0,
                  h = [];
                for (n in a) !i(s, n) && i(a, n) && h.push(n);
                for (; e.length > c; )
                  i(a, (n = e[c++])) && (~o(h, n) || h.push(n));
                return h;
              };
            },
            function (t, e, n) {
              "use strict";
              var i,
                r,
                o,
                s = n(39),
                a = n(16),
                c = n(8),
                h = n(1),
                u = n(33),
                l = h("iterator"),
                p = !1;
              [].keys &&
                ("next" in (o = [].keys())
                  ? (r = s(s(o))) !== Object.prototype && (i = r)
                  : (p = !0)),
                null == i && (i = {}),
                u ||
                  c(i, l) ||
                  a(i, l, function () {
                    return this;
                  }),
                (t.exports = {
                  IteratorPrototype: i,
                  BUGGY_SAFARI_ITERATORS: p,
                });
            },
            function (t, e, n) {
              var i = n(4);
              t.exports =
                !!Object.getOwnPropertySymbols &&
                !i(function () {
                  return !String(Symbol());
                });
            },
            function (t, e, n) {
              var i,
                r = n(17),
                o = n(87),
                s = n(38),
                a = n(34),
                c = n(89),
                h = n(44),
                u = n(32)("IE_PROTO"),
                l = function () {},
                p = function (t) {
                  return "<script>" + t + "</script>";
                },
                d = function () {
                  try {
                    i = document.domain && new ActiveXObject("htmlfile");
                  } catch (t) {}
                  var t, e;
                  d = i
                    ? (function (t) {
                        t.write(p("")), t.close();
                        var e = t.parentWindow.Object;
                        return (t = null), e;
                      })(i)
                    : (((e = h("iframe")).style.display = "none"),
                      c.appendChild(e),
                      (e.src = String("javascript:")),
                      (t = e.contentWindow.document).open(),
                      t.write(p("document.F=Object")),
                      t.close(),
                      t.F);
                  for (var n = s.length; n--; ) delete d.prototype[s[n]];
                  return d();
                };
              (a[u] = !0),
                (t.exports =
                  Object.create ||
                  function (t, e) {
                    var n;
                    return (
                      null !== t
                        ? ((l.prototype = r(t)),
                          (n = new l()),
                          (l.prototype = null),
                          (n[u] = t))
                        : (n = d()),
                      void 0 === e ? n : o(n, e)
                    );
                  });
            },
            function (t, e, n) {
              var i = n(9).f,
                r = n(8),
                o = n(1)("toStringTag");
              t.exports = function (t, e, n) {
                t &&
                  !r((t = n ? t : t.prototype), o) &&
                  i(t, o, { configurable: !0, value: e });
              };
            },
            function (t, e, n) {
              var i,
                r,
                o = n(5),
                s = n(103),
                a = o.process,
                c = a && a.versions,
                h = c && c.v8;
              h
                ? (r = (i = h.split("."))[0] + i[1])
                : s &&
                  (!(i = s.match(/Edge\/(\d+)/)) || i[1] >= 74) &&
                  (i = s.match(/Chrome\/(\d+)/)) &&
                  (r = i[1]),
                (t.exports = r && +r);
            },
            function (t, e, n) {
              "use strict";
              var i = n(18),
                r = n(3),
                o = n(40),
                s = function (t, e, n, a, c, h, u, l) {
                  for (var p, d = c, f = 0, y = !!u && o(u, l, 3); f < a; ) {
                    if (f in n) {
                      if (((p = y ? y(n[f], f, e) : n[f]), h > 0 && i(p)))
                        d = s(t, e, p, r(p.length), d, h - 1) - 1;
                      else {
                        if (d >= 9007199254740991)
                          throw TypeError("Exceed the acceptable array length");
                        t[d] = p;
                      }
                      d++;
                    }
                    f++;
                  }
                  return d;
                };
              t.exports = s;
            },
            function (t, e, n) {
              var i = n(21),
                r = n(6),
                o = n(26),
                s = n(3),
                a = function (t) {
                  return function (e, n, a, c) {
                    i(n);
                    var h = r(e),
                      u = o(h),
                      l = s(h.length),
                      p = t ? l - 1 : 0,
                      d = t ? -1 : 1;
                    if (a < 2)
                      for (;;) {
                        if (p in u) {
                          (c = u[p]), (p += d);
                          break;
                        }
                        if (((p += d), t ? p < 0 : l <= p))
                          throw TypeError(
                            "Reduce of empty array with no initial value"
                          );
                      }
                    for (; t ? p >= 0 : l > p; p += d)
                      p in u && (c = n(c, u[p], p, h));
                    return c;
                  };
                };
              t.exports = { left: a(!1), right: a(!0) };
            },
            function (t, e, n) {
              "use strict";
              var i = n(59),
                r = n.n(i)()(!0);
              r.push([
                t.i,
                "/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n",
                "",
                {
                  version: 3,
                  sources: ["webpack://Loader.css"],
                  names: [],
                  mappings:
                    "AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,8DAA8D;EAC9D,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",
                  sourcesContent: [
                    "/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n",
                  ],
                  sourceRoot: "",
                },
              ]),
                (e.a = r);
            },
            function (t, e, n) {
              "use strict";
              t.exports = function (t) {
                var e = [];
                return (
                  (e.toString = function () {
                    return this.map(function (e) {
                      var n = (function (t, e) {
                        var n,
                          i,
                          r,
                          o = t[1] || "",
                          s = t[3];
                        if (!s) return o;
                        if (e && "function" == typeof btoa) {
                          var a =
                              ((n = s),
                              (i = btoa(
                                unescape(encodeURIComponent(JSON.stringify(n)))
                              )),
                              (r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                                i
                              )),
                              "/*# ".concat(r, " */")),
                            c = s.sources.map(function (t) {
                              return "/*# sourceURL="
                                .concat(s.sourceRoot || "")
                                .concat(t, " */");
                            });
                          return [o].concat(c).concat([a]).join("\n");
                        }
                        return [o].join("\n");
                      })(e, t);
                      return e[2]
                        ? "@media ".concat(e[2], " {").concat(n, "}")
                        : n;
                    }).join("");
                  }),
                  (e.i = function (t, n, i) {
                    "string" == typeof t && (t = [[null, t, ""]]);
                    var r = {};
                    if (i)
                      for (var o = 0; o < this.length; o++) {
                        var s = this[o][0];
                        null != s && (r[s] = !0);
                      }
                    for (var a = 0; a < t.length; a++) {
                      var c = [].concat(t[a]);
                      (i && r[c[0]]) ||
                        (n &&
                          (c[2]
                            ? (c[2] = "".concat(n, " and ").concat(c[2]))
                            : (c[2] = n)),
                        e.push(c));
                    }
                  }),
                  e
                );
              };
            },
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            function (t, e, n) {
              n(74),
                n(92),
                n(100),
                n(101),
                n(102),
                n(104),
                n(106),
                n(107),
                n(109),
                n(110),
                n(111),
                n(112),
                n(113),
                n(114),
                n(116),
                n(117),
                n(118),
                n(119),
                n(120),
                n(122),
                n(123),
                n(124),
                n(125),
                n(126),
                n(127),
                n(128),
                n(129),
                n(131),
                n(132),
                n(133);
              var i = n(36);
              t.exports = i.Array;
            },
            function (t, e, n) {
              "use strict";
              var i = n(75).charAt,
                r = n(29),
                o = n(47),
                s = r.set,
                a = r.getterFor("String Iterator");
              o(
                String,
                "String",
                function (t) {
                  s(this, {
                    type: "String Iterator",
                    string: String(t),
                    index: 0,
                  });
                },
                function () {
                  var t,
                    e = a(this),
                    n = e.string,
                    r = e.index;
                  return r >= n.length
                    ? { value: void 0, done: !0 }
                    : ((t = i(n, r)),
                      (e.index += t.length),
                      { value: t, done: !1 });
                }
              );
            },
            function (t, e, n) {
              var i = n(15),
                r = n(28),
                o = function (t) {
                  return function (e, n) {
                    var o,
                      s,
                      a = String(r(e)),
                      c = i(n),
                      h = a.length;
                    return c < 0 || c >= h
                      ? t
                        ? ""
                        : void 0
                      : (o = a.charCodeAt(c)) < 55296 ||
                        o > 56319 ||
                        c + 1 === h ||
                        (s = a.charCodeAt(c + 1)) < 56320 ||
                        s > 57343
                      ? t
                        ? a.charAt(c)
                        : o
                      : t
                      ? a.slice(c, c + 2)
                      : s - 56320 + ((o - 55296) << 10) + 65536;
                  };
                };
              t.exports = { codeAt: o(!1), charAt: o(!0) };
            },
            function (t, e, n) {
              var i = n(5),
                r = n(41),
                o = i.WeakMap;
              t.exports = "function" == typeof o && /native code/.test(r(o));
            },
            function (t, e) {
              var n;
              n = (function () {
                return this;
              })();
              try {
                n = n || new Function("return this")();
              } catch (t) {
                "object" == typeof window && (n = window);
              }
              t.exports = n;
            },
            function (t, e, n) {
              "use strict";
              var i = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                o = r && !i.call({ 1: 2 }, 1);
              e.f = o
                ? function (t) {
                    var e = r(this, t);
                    return !!e && e.enumerable;
                  }
                : i;
            },
            function (t, e, n) {
              var i = n(8),
                r = n(80),
                o = n(48),
                s = n(9);
              t.exports = function (t, e) {
                for (var n = r(e), a = s.f, c = o.f, h = 0; h < n.length; h++) {
                  var u = n[h];
                  i(t, u) || a(t, u, c(e, u));
                }
              };
            },
            function (t, e, n) {
              var i = n(27),
                r = n(81),
                o = n(82),
                s = n(17);
              t.exports =
                i("Reflect", "ownKeys") ||
                function (t) {
                  var e = r.f(s(t)),
                    n = o.f;
                  return n ? e.concat(n(t)) : e;
                };
            },
            function (t, e, n) {
              var i = n(50),
                r = n(38).concat("length", "prototype");
              e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                  return i(t, r);
                };
            },
            function (t, e) {
              e.f = Object.getOwnPropertySymbols;
            },
            function (t, e, n) {
              var i = n(4),
                r = /#|\.prototype\./,
                o = function (t, e) {
                  var n = a[s(t)];
                  return (
                    n == h || (n != c && ("function" == typeof e ? i(e) : !!e))
                  );
                },
                s = (o.normalize = function (t) {
                  return String(t).replace(r, ".").toLowerCase();
                }),
                a = (o.data = {}),
                c = (o.NATIVE = "N"),
                h = (o.POLYFILL = "P");
              t.exports = o;
            },
            function (t, e, n) {
              "use strict";
              var i = n(51).IteratorPrototype,
                r = n(53),
                o = n(25),
                s = n(54),
                a = n(20),
                c = function () {
                  return this;
                };
              t.exports = function (t, e, n) {
                var h = e + " Iterator";
                return (
                  (t.prototype = r(i, { next: o(1, n) })),
                  s(t, h, !1, !0),
                  (a[h] = c),
                  t
                );
              };
            },
            function (t, e, n) {
              var i = n(4);
              t.exports = !i(function () {
                function t() {}
                return (
                  (t.prototype.constructor = null),
                  Object.getPrototypeOf(new t()) !== t.prototype
                );
              });
            },
            function (t, e, n) {
              var i = n(52);
              t.exports =
                i && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            function (t, e, n) {
              var i = n(11),
                r = n(9),
                o = n(17),
                s = n(88);
              t.exports = i
                ? Object.defineProperties
                : function (t, e) {
                    o(t);
                    for (var n, i = s(e), a = i.length, c = 0; a > c; )
                      r.f(t, (n = i[c++]), e[n]);
                    return t;
                  };
            },
            function (t, e, n) {
              var i = n(50),
                r = n(38);
              t.exports =
                Object.keys ||
                function (t) {
                  return i(t, r);
                };
            },
            function (t, e, n) {
              var i = n(27);
              t.exports = i("document", "documentElement");
            },
            function (t, e, n) {
              var i = n(17),
                r = n(91);
              t.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                  ? (function () {
                      var t,
                        e = !1,
                        n = {};
                      try {
                        (t = Object.getOwnPropertyDescriptor(
                          Object.prototype,
                          "__proto__"
                        ).set).call(n, []),
                          (e = n instanceof Array);
                      } catch (t) {}
                      return function (n, o) {
                        return (
                          i(n), r(o), e ? t.call(n, o) : (n.__proto__ = o), n
                        );
                      };
                    })()
                  : void 0);
            },
            function (t, e, n) {
              var i = n(7);
              t.exports = function (t) {
                if (!i(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + " as a prototype");
                return t;
              };
            },
            function (t, e, n) {
              var i = n(0),
                r = n(93);
              i(
                {
                  target: "Array",
                  stat: !0,
                  forced: !n(99)(function (t) {
                    Array.from(t);
                  }),
                },
                { from: r }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(40),
                r = n(6),
                o = n(94),
                s = n(95),
                a = n(3),
                c = n(22),
                h = n(96);
              t.exports = function (t) {
                var e,
                  n,
                  u,
                  l,
                  p,
                  d,
                  f = r(t),
                  y = "function" == typeof this ? this : Array,
                  g = arguments.length,
                  _ = g > 1 ? arguments[1] : void 0,
                  v = void 0 !== _,
                  m = h(f),
                  b = 0;
                if (
                  (v && (_ = i(_, g > 2 ? arguments[2] : void 0, 2)),
                  null == m || (y == Array && s(m)))
                )
                  for (n = new y((e = a(f.length))); e > b; b++)
                    (d = v ? _(f[b], b) : f[b]), c(n, b, d);
                else
                  for (
                    p = (l = m.call(f)).next, n = new y();
                    !(u = p.call(l)).done;
                    b++
                  )
                    (d = v ? o(l, _, [u.value, b], !0) : u.value), c(n, b, d);
                return (n.length = b), n;
              };
            },
            function (t, e, n) {
              var i = n(17);
              t.exports = function (t, e, n, r) {
                try {
                  return r ? e(i(n)[0], n[1]) : e(n);
                } catch (e) {
                  var o = t.return;
                  throw (void 0 !== o && i(o.call(t)), e);
                }
              };
            },
            function (t, e, n) {
              var i = n(1),
                r = n(20),
                o = i("iterator"),
                s = Array.prototype;
              t.exports = function (t) {
                return void 0 !== t && (r.Array === t || s[o] === t);
              };
            },
            function (t, e, n) {
              var i = n(97),
                r = n(20),
                o = n(1)("iterator");
              t.exports = function (t) {
                if (null != t) return t[o] || t["@@iterator"] || r[i(t)];
              };
            },
            function (t, e, n) {
              var i = n(98),
                r = n(35),
                o = n(1)("toStringTag"),
                s =
                  "Arguments" ==
                  r(
                    (function () {
                      return arguments;
                    })()
                  );
              t.exports = i
                ? r
                : function (t) {
                    var e, n, i;
                    return void 0 === t
                      ? "Undefined"
                      : null === t
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (t, e) {
                          try {
                            return t[e];
                          } catch (t) {}
                        })((e = Object(t)), o))
                      ? n
                      : s
                      ? r(e)
                      : "Object" == (i = r(e)) && "function" == typeof e.callee
                      ? "Arguments"
                      : i;
                  };
            },
            function (t, e, n) {
              var i = {};
              (i[n(1)("toStringTag")] = "z"),
                (t.exports = "[object z]" === String(i));
            },
            function (t, e, n) {
              var i = n(1)("iterator"),
                r = !1;
              try {
                var o = 0,
                  s = {
                    next: function () {
                      return { done: !!o++ };
                    },
                    return: function () {
                      r = !0;
                    },
                  };
                (s[i] = function () {
                  return this;
                }),
                  Array.from(s, function () {
                    throw 2;
                  });
              } catch (t) {}
              t.exports = function (t, e) {
                if (!e && !r) return !1;
                var n = !1;
                try {
                  var o = {};
                  (o[i] = function () {
                    return {
                      next: function () {
                        return { done: (n = !0) };
                      },
                    };
                  }),
                    t(o);
                } catch (t) {}
                return n;
              };
            },
            function (t, e, n) {
              n(0)({ target: "Array", stat: !0 }, { isArray: n(18) });
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(4),
                o = n(22);
              i(
                {
                  target: "Array",
                  stat: !0,
                  forced: r(function () {
                    function t() {}
                    return !(Array.of.call(t) instanceof t);
                  }),
                },
                {
                  of: function () {
                    for (
                      var t = 0,
                        e = arguments.length,
                        n = new ("function" == typeof this ? this : Array)(e);
                      e > t;

                    )
                      o(n, t, arguments[t++]);
                    return (n.length = e), n;
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(4),
                o = n(18),
                s = n(7),
                a = n(6),
                c = n(3),
                h = n(22),
                u = n(23),
                l = n(24),
                p = n(1),
                d = n(55),
                f = p("isConcatSpreadable"),
                y =
                  d >= 51 ||
                  !r(function () {
                    var t = [];
                    return (t[f] = !1), t.concat()[0] !== t;
                  }),
                g = l("concat"),
                _ = function (t) {
                  if (!s(t)) return !1;
                  var e = t[f];
                  return void 0 !== e ? !!e : o(t);
                };
              i(
                { target: "Array", proto: !0, forced: !y || !g },
                {
                  concat: function (t) {
                    var e,
                      n,
                      i,
                      r,
                      o,
                      s = a(this),
                      l = u(s, 0),
                      p = 0;
                    for (e = -1, i = arguments.length; e < i; e++)
                      if (((o = -1 === e ? s : arguments[e]), _(o))) {
                        if (p + (r = c(o.length)) > 9007199254740991)
                          throw TypeError("Maximum allowed index exceeded");
                        for (n = 0; n < r; n++, p++) n in o && h(l, p, o[n]);
                      } else {
                        if (p >= 9007199254740991)
                          throw TypeError("Maximum allowed index exceeded");
                        h(l, p++, o);
                      }
                    return (l.length = p), l;
                  },
                }
              );
            },
            function (t, e, n) {
              var i = n(27);
              t.exports = i("navigator", "userAgent") || "";
            },
            function (t, e, n) {
              var i = n(0),
                r = n(105),
                o = n(12);
              i({ target: "Array", proto: !0 }, { copyWithin: r }),
                o("copyWithin");
            },
            function (t, e, n) {
              "use strict";
              var i = n(6),
                r = n(19),
                o = n(3),
                s = Math.min;
              t.exports =
                [].copyWithin ||
                function (t, e) {
                  var n = i(this),
                    a = o(n.length),
                    c = r(t, a),
                    h = r(e, a),
                    u = arguments.length > 2 ? arguments[2] : void 0,
                    l = s((void 0 === u ? a : r(u, a)) - h, a - c),
                    p = 1;
                  for (
                    h < c &&
                    c < h + l &&
                    ((p = -1), (h += l - 1), (c += l - 1));
                    l-- > 0;

                  )
                    h in n ? (n[c] = n[h]) : delete n[c], (c += p), (h += p);
                  return n;
                };
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).every,
                o = n(10),
                s = n(2),
                a = o("every"),
                c = s("every");
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  every: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              var i = n(0),
                r = n(108),
                o = n(12);
              i({ target: "Array", proto: !0 }, { fill: r }), o("fill");
            },
            function (t, e, n) {
              "use strict";
              var i = n(6),
                r = n(19),
                o = n(3);
              t.exports = function (t) {
                for (
                  var e = i(this),
                    n = o(e.length),
                    s = arguments.length,
                    a = r(s > 1 ? arguments[1] : void 0, n),
                    c = s > 2 ? arguments[2] : void 0,
                    h = void 0 === c ? n : r(c, n);
                  h > a;

                )
                  e[a++] = t;
                return e;
              };
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).filter,
                o = n(24),
                s = n(2),
                a = o("filter"),
                c = s("filter");
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  filter: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).find,
                o = n(12),
                s = n(2),
                a = !0,
                c = s("find");
              "find" in [] &&
                Array(1).find(function () {
                  a = !1;
                }),
                i(
                  { target: "Array", proto: !0, forced: a || !c },
                  {
                    find: function (t) {
                      return r(
                        this,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                      );
                    },
                  }
                ),
                o("find");
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).findIndex,
                o = n(12),
                s = n(2),
                a = !0,
                c = s("findIndex");
              "findIndex" in [] &&
                Array(1).findIndex(function () {
                  a = !1;
                }),
                i(
                  { target: "Array", proto: !0, forced: a || !c },
                  {
                    findIndex: function (t) {
                      return r(
                        this,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                      );
                    },
                  }
                ),
                o("findIndex");
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(56),
                o = n(6),
                s = n(3),
                a = n(15),
                c = n(23);
              i(
                { target: "Array", proto: !0 },
                {
                  flat: function () {
                    var t = arguments.length ? arguments[0] : void 0,
                      e = o(this),
                      n = s(e.length),
                      i = c(e, 0);
                    return (
                      (i.length = r(i, e, e, n, 0, void 0 === t ? 1 : a(t))), i
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(56),
                o = n(6),
                s = n(3),
                a = n(21),
                c = n(23);
              i(
                { target: "Array", proto: !0 },
                {
                  flatMap: function (t) {
                    var e,
                      n = o(this),
                      i = s(n.length);
                    return (
                      a(t),
                      ((e = c(n, 0)).length = r(
                        e,
                        n,
                        n,
                        i,
                        0,
                        1,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                      )),
                      e
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(115);
              i(
                { target: "Array", proto: !0, forced: [].forEach != r },
                { forEach: r }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(14).forEach,
                r = n(10),
                o = n(2),
                s = r("forEach"),
                a = o("forEach");
              t.exports =
                s && a
                  ? [].forEach
                  : function (t) {
                      return i(
                        this,
                        t,
                        arguments.length > 1 ? arguments[1] : void 0
                      );
                    };
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(37).includes,
                o = n(12);
              i(
                {
                  target: "Array",
                  proto: !0,
                  forced: !n(2)("indexOf", { ACCESSORS: !0, 1: 0 }),
                },
                {
                  includes: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              ),
                o("includes");
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(37).indexOf,
                o = n(10),
                s = n(2),
                a = [].indexOf,
                c = !!a && 1 / [1].indexOf(1, -0) < 0,
                h = o("indexOf"),
                u = s("indexOf", { ACCESSORS: !0, 1: 0 });
              i(
                { target: "Array", proto: !0, forced: c || !h || !u },
                {
                  indexOf: function (t) {
                    return c
                      ? a.apply(this, arguments) || 0
                      : r(
                          this,
                          t,
                          arguments.length > 1 ? arguments[1] : void 0
                        );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(13),
                r = n(12),
                o = n(20),
                s = n(29),
                a = n(47),
                c = s.set,
                h = s.getterFor("Array Iterator");
              (t.exports = a(
                Array,
                "Array",
                function (t, e) {
                  c(this, {
                    type: "Array Iterator",
                    target: i(t),
                    index: 0,
                    kind: e,
                  });
                },
                function () {
                  var t = h(this),
                    e = t.target,
                    n = t.kind,
                    i = t.index++;
                  return !e || i >= e.length
                    ? ((t.target = void 0), { value: void 0, done: !0 })
                    : "keys" == n
                    ? { value: i, done: !1 }
                    : "values" == n
                    ? { value: e[i], done: !1 }
                    : { value: [i, e[i]], done: !1 };
                },
                "values"
              )),
                (o.Arguments = o.Array),
                r("keys"),
                r("values"),
                r("entries");
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(26),
                o = n(13),
                s = n(10),
                a = [].join,
                c = r != Object,
                h = s("join", ",");
              i(
                { target: "Array", proto: !0, forced: c || !h },
                {
                  join: function (t) {
                    return a.call(o(this), void 0 === t ? "," : t);
                  },
                }
              );
            },
            function (t, e, n) {
              var i = n(0),
                r = n(121);
              i(
                { target: "Array", proto: !0, forced: r !== [].lastIndexOf },
                { lastIndexOf: r }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(13),
                r = n(15),
                o = n(3),
                s = n(10),
                a = n(2),
                c = Math.min,
                h = [].lastIndexOf,
                u = !!h && 1 / [1].lastIndexOf(1, -0) < 0,
                l = s("lastIndexOf"),
                p = a("indexOf", { ACCESSORS: !0, 1: 0 }),
                d = u || !l || !p;
              t.exports = d
                ? function (t) {
                    if (u) return h.apply(this, arguments) || 0;
                    var e = i(this),
                      n = o(e.length),
                      s = n - 1;
                    for (
                      arguments.length > 1 && (s = c(s, r(arguments[1]))),
                        s < 0 && (s = n + s);
                      s >= 0;
                      s--
                    )
                      if (s in e && e[s] === t) return s || 0;
                    return -1;
                  }
                : h;
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).map,
                o = n(24),
                s = n(2),
                a = o("map"),
                c = s("map");
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  map: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(57).left,
                o = n(10),
                s = n(2),
                a = o("reduce"),
                c = s("reduce", { 1: 0 });
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  reduce: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(57).right,
                o = n(10),
                s = n(2),
                a = o("reduceRight"),
                c = s("reduce", { 1: 0 });
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  reduceRight: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(18),
                o = [].reverse,
                s = [1, 2];
              i(
                {
                  target: "Array",
                  proto: !0,
                  forced: String(s) === String(s.reverse()),
                },
                {
                  reverse: function () {
                    return r(this) && (this.length = this.length), o.call(this);
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(7),
                o = n(18),
                s = n(19),
                a = n(3),
                c = n(13),
                h = n(22),
                u = n(1),
                l = n(24),
                p = n(2),
                d = l("slice"),
                f = p("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
                y = u("species"),
                g = [].slice,
                _ = Math.max;
              i(
                { target: "Array", proto: !0, forced: !d || !f },
                {
                  slice: function (t, e) {
                    var n,
                      i,
                      u,
                      l = c(this),
                      p = a(l.length),
                      d = s(t, p),
                      f = s(void 0 === e ? p : e, p);
                    if (
                      o(l) &&
                      ("function" != typeof (n = l.constructor) ||
                      (n !== Array && !o(n.prototype))
                        ? r(n) && null === (n = n[y]) && (n = void 0)
                        : (n = void 0),
                      n === Array || void 0 === n)
                    )
                      return g.call(l, d, f);
                    for (
                      i = new (void 0 === n ? Array : n)(_(f - d, 0)), u = 0;
                      d < f;
                      d++, u++
                    )
                      d in l && h(i, u, l[d]);
                    return (i.length = u), i;
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(14).some,
                o = n(10),
                s = n(2),
                a = o("some"),
                c = s("some");
              i(
                { target: "Array", proto: !0, forced: !a || !c },
                {
                  some: function (t) {
                    return r(
                      this,
                      t,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              );
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(21),
                o = n(6),
                s = n(4),
                a = n(10),
                c = [],
                h = c.sort,
                u = s(function () {
                  c.sort(void 0);
                }),
                l = s(function () {
                  c.sort(null);
                }),
                p = a("sort");
              i(
                { target: "Array", proto: !0, forced: u || !l || !p },
                {
                  sort: function (t) {
                    return void 0 === t
                      ? h.call(o(this))
                      : h.call(o(this), r(t));
                  },
                }
              );
            },
            function (t, e, n) {
              n(130)("Array");
            },
            function (t, e, n) {
              "use strict";
              var i = n(27),
                r = n(9),
                o = n(1),
                s = n(11),
                a = o("species");
              t.exports = function (t) {
                var e = i(t),
                  n = r.f;
                s &&
                  e &&
                  !e[a] &&
                  n(e, a, {
                    configurable: !0,
                    get: function () {
                      return this;
                    },
                  });
              };
            },
            function (t, e, n) {
              "use strict";
              var i = n(0),
                r = n(19),
                o = n(15),
                s = n(3),
                a = n(6),
                c = n(23),
                h = n(22),
                u = n(24),
                l = n(2),
                p = u("splice"),
                d = l("splice", { ACCESSORS: !0, 0: 0, 1: 2 }),
                f = Math.max,
                y = Math.min;
              i(
                { target: "Array", proto: !0, forced: !p || !d },
                {
                  splice: function (t, e) {
                    var n,
                      i,
                      u,
                      l,
                      p,
                      d,
                      g = a(this),
                      _ = s(g.length),
                      v = r(t, _),
                      m = arguments.length;
                    if (
                      (0 === m
                        ? (n = i = 0)
                        : 1 === m
                        ? ((n = 0), (i = _ - v))
                        : ((n = m - 2), (i = y(f(o(e), 0), _ - v))),
                      _ + n - i > 9007199254740991)
                    )
                      throw TypeError("Maximum allowed length exceeded");
                    for (u = c(g, i), l = 0; l < i; l++)
                      (p = v + l) in g && h(u, l, g[p]);
                    if (((u.length = i), n < i)) {
                      for (l = v; l < _ - i; l++)
                        (d = l + n),
                          (p = l + i) in g ? (g[d] = g[p]) : delete g[d];
                      for (l = _; l > _ - i + n; l--) delete g[l - 1];
                    } else if (n > i)
                      for (l = _ - i; l > v; l--)
                        (d = l + n - 1),
                          (p = l + i - 1) in g ? (g[d] = g[p]) : delete g[d];
                    for (l = 0; l < n; l++) g[l + v] = arguments[l + 2];
                    return (g.length = _ - i + n), u;
                  },
                }
              );
            },
            function (t, e, n) {
              n(12)("flat");
            },
            function (t, e, n) {
              n(12)("flatMap");
            },
            function (t, e, n) {
              n(135), n(137), n(138);
              var i = n(36);
              t.exports = i.Function;
            },
            function (t, e, n) {
              n(0)({ target: "Function", proto: !0 }, { bind: n(136) });
            },
            function (t, e, n) {
              "use strict";
              var i = n(21),
                r = n(7),
                o = [].slice,
                s = {},
                a = function (t, e, n) {
                  if (!(e in s)) {
                    for (var i = [], r = 0; r < e; r++) i[r] = "a[" + r + "]";
                    s[e] = Function("C,a", "return new C(" + i.join(",") + ")");
                  }
                  return s[e](t, n);
                };
              t.exports =
                Function.bind ||
                function (t) {
                  var e = i(this),
                    n = o.call(arguments, 1),
                    s = function () {
                      var i = n.concat(o.call(arguments));
                      return this instanceof s
                        ? a(e, i.length, i)
                        : e.apply(t, i);
                    };
                  return r(e.prototype) && (s.prototype = e.prototype), s;
                };
            },
            function (t, e, n) {
              var i = n(11),
                r = n(9).f,
                o = Function.prototype,
                s = o.toString,
                a = /^\s*function ([^ (]*)/;
              !i ||
                "name" in o ||
                r(o, "name", {
                  configurable: !0,
                  get: function () {
                    try {
                      return s.call(this).match(a)[1];
                    } catch (t) {
                      return "";
                    }
                  },
                });
            },
            function (t, e, n) {
              "use strict";
              var i = n(7),
                r = n(9),
                o = n(39),
                s = n(1)("hasInstance"),
                a = Function.prototype;
              s in a ||
                r.f(a, s, {
                  value: function (t) {
                    if ("function" != typeof this || !i(t)) return !1;
                    if (!i(this.prototype)) return t instanceof this;
                    for (; (t = o(t)); ) if (this.prototype === t) return !0;
                    return !1;
                  },
                });
            },
            function (t, e, n) {
              "use strict";
              n.r(e),
                n.d(e, "EX_VERSION", function () {
                  return Qr;
                }),
                n.d(e, "ScrollPreventionMode", function () {
                  return tr;
                }),
                n.d(e, "Engine", function () {
                  return sr;
                }),
                n.d(e, "DisplayMode", function () {
                  return Nt;
                }),
                n.d(e, "Resolution", function () {
                  return Kt;
                }),
                n.d(e, "Screen", function () {
                  return Yt;
                }),
                n.d(e, "Actor", function () {
                  return vn;
                }),
                n.d(e, "CollisionType", function () {
                  return st;
                }),
                n.d(e, "Vector", function () {
                  return q;
                }),
                n.d(e, "Ray", function () {
                  return V;
                }),
                n.d(e, "Line", function () {
                  return G;
                }),
                n.d(e, "Projection", function () {
                  return X;
                }),
                n.d(e, "GlobalCoordinates", function () {
                  return Q;
                }),
                n.d(e, "vec", function () {
                  return Z;
                }),
                n.d(e, "StrategyContainer", function () {
                  return Un;
                }),
                n.d(e, "Axis", function () {
                  return _n;
                }),
                n.d(e, "LockCameraToActorStrategy", function () {
                  return Gn;
                }),
                n.d(e, "LockCameraToActorAxisStrategy", function () {
                  return Xn;
                }),
                n.d(e, "ElasticToActorStrategy", function () {
                  return Qn;
                }),
                n.d(e, "RadiusAroundActorStrategy", function () {
                  return Zn;
                }),
                n.d(e, "LimitCameraBoundsStrategy", function () {
                  return Kn;
                }),
                n.d(e, "Camera", function () {
                  return Yn;
                }),
                n.d(e, "Class", function () {
                  return $t;
                }),
                n.d(e, "Configurable", function () {
                  return pe;
                }),
                n.d(e, "Debug", function () {
                  return xi;
                }),
                n.d(e, "FrameStats", function () {
                  return Pi;
                }),
                n.d(e, "PhysicsStats", function () {
                  return Ai;
                }),
                n.d(e, "EventDispatcher", function () {
                  return Jt;
                }),
                n.d(e, "MediaEvent", function () {
                  return hr;
                }),
                n.d(e, "NativeSoundEvent", function () {
                  return ur;
                }),
                n.d(e, "NativeSoundProcessedEvent", function () {
                  return lr;
                }),
                n.d(e, "EventTypes", function () {
                  return it;
                }),
                n.d(e, "GameEvent", function () {
                  return at;
                }),
                n.d(e, "KillEvent", function () {
                  return ct;
                }),
                n.d(e, "PreKillEvent", function () {
                  return ht;
                }),
                n.d(e, "PostKillEvent", function () {
                  return ut;
                }),
                n.d(e, "GameStartEvent", function () {
                  return lt;
                }),
                n.d(e, "GameStopEvent", function () {
                  return pt;
                }),
                n.d(e, "PreDrawEvent", function () {
                  return dt;
                }),
                n.d(e, "PostDrawEvent", function () {
                  return ft;
                }),
                n.d(e, "PreDebugDrawEvent", function () {
                  return yt;
                }),
                n.d(e, "PostDebugDrawEvent", function () {
                  return gt;
                }),
                n.d(e, "PreUpdateEvent", function () {
                  return _t;
                }),
                n.d(e, "PostUpdateEvent", function () {
                  return vt;
                }),
                n.d(e, "PreFrameEvent", function () {
                  return mt;
                }),
                n.d(e, "PostFrameEvent", function () {
                  return bt;
                }),
                n.d(e, "GamepadConnectEvent", function () {
                  return wt;
                }),
                n.d(e, "GamepadDisconnectEvent", function () {
                  return xt;
                }),
                n.d(e, "GamepadButtonEvent", function () {
                  return Pt;
                }),
                n.d(e, "GamepadAxisEvent", function () {
                  return At;
                }),
                n.d(e, "SubscribeEvent", function () {
                  return Et;
                }),
                n.d(e, "UnsubscribeEvent", function () {
                  return St;
                }),
                n.d(e, "VisibleEvent", function () {
                  return Ct;
                }),
                n.d(e, "HiddenEvent", function () {
                  return Ot;
                }),
                n.d(e, "PreCollisionEvent", function () {
                  return Tt;
                }),
                n.d(e, "PostCollisionEvent", function () {
                  return Bt;
                }),
                n.d(e, "CollisionStartEvent", function () {
                  return Mt;
                }),
                n.d(e, "CollisionEndEvent", function () {
                  return Dt;
                }),
                n.d(e, "InitializeEvent", function () {
                  return kt;
                }),
                n.d(e, "ActivateEvent", function () {
                  return Rt;
                }),
                n.d(e, "DeactivateEvent", function () {
                  return jt;
                }),
                n.d(e, "ExitViewPortEvent", function () {
                  return Ft;
                }),
                n.d(e, "EnterViewPortEvent", function () {
                  return It;
                }),
                n.d(e, "EnterTriggerEvent", function () {
                  return Lt;
                }),
                n.d(e, "ExitTriggerEvent", function () {
                  return zt;
                }),
                n.d(e, "Label", function () {
                  return $n;
                }),
                n.d(e, "FontStyle", function () {
                  return Vn;
                }),
                n.d(e, "FontUnit", function () {
                  return Wn;
                }),
                n.d(e, "TextAlign", function () {
                  return Nn;
                }),
                n.d(e, "BaseAlign", function () {
                  return qn;
                }),
                n.d(e, "Loader", function () {
                  return Mn;
                }),
                n.d(e, "Particle", function () {
                  return dr;
                }),
                n.d(e, "ParticleEmitter", function () {
                  return fr;
                }),
                n.d(e, "EmitterType", function () {
                  return or;
                }),
                n.d(e, "CollisionResolutionStrategy", function () {
                  return K;
                }),
                n.d(e, "BroadphaseStrategy", function () {
                  return Y;
                }),
                n.d(e, "Integrator", function () {
                  return J;
                }),
                n.d(e, "Physics", function () {
                  return rt;
                }),
                n.d(e, "PromiseState", function () {
                  return h;
                }),
                n.d(e, "Promise", function () {
                  return d;
                }),
                n.d(e, "Scene", function () {
                  return vi;
                }),
                n.d(e, "TileMap", function () {
                  return An;
                }),
                n.d(e, "Cell", function () {
                  return Sn;
                }),
                n.d(e, "TileSprite", function () {
                  return En;
                }),
                n.d(e, "Timer", function () {
                  return xn;
                }),
                n.d(e, "Trigger", function () {
                  return ni;
                }),
                n.d(e, "ScreenElement", function () {
                  return bn;
                }),
                n.d(e, "UIActor", function () {
                  return wn;
                }),
                n.d(e, "ActionContext", function () {
                  return Ue;
                }),
                n.d(e, "RotationType", function () {
                  return de;
                }),
                n.d(e, "Actions", function () {
                  return o;
                }),
                n.d(e, "Internal", function () {
                  return yr;
                }),
                n.d(e, "Body", function () {
                  return Ne;
                }),
                n.d(e, "isCollider", function () {
                  return en;
                }),
                n.d(e, "Collider", function () {
                  return nn;
                }),
                n.d(e, "BoundingBox", function () {
                  return Qt;
                }),
                n.d(e, "Circle", function () {
                  return Vt;
                }),
                n.d(e, "CollisionContact", function () {
                  return Ht;
                }),
                n.d(e, "CollisionJumpTable", function () {
                  return Ut;
                }),
                n.d(e, "ClosestLine", function () {
                  return Wt;
                }),
                n.d(e, "ClosestLineJumpTable", function () {
                  return qt;
                }),
                n.d(e, "CollisionGroup", function () {
                  return $e;
                }),
                n.d(e, "CollisionGroupManager", function () {
                  return gr;
                }),
                n.d(e, "TreeNode", function () {
                  return Rn;
                }),
                n.d(e, "DynamicTree", function () {
                  return jn;
                }),
                n.d(e, "DynamicTreeCollisionBroadphase", function () {
                  return Fn;
                }),
                n.d(e, "Edge", function () {
                  return Gt;
                }),
                n.d(e, "Pair", function () {
                  return tn;
                }),
                n.d(e, "ConvexPolygon", function () {
                  return Xt;
                }),
                n.d(e, "Side", function () {
                  return p;
                }),
                n.d(e, "Shape", function () {
                  return We;
                }),
                n.d(e, "Animation", function () {
                  return we;
                }),
                n.d(e, "Color", function () {
                  return tt;
                }),
                n.d(e, "Polygon", function () {
                  return vr;
                }),
                n.d(e, "Sprite", function () {
                  return ge;
                }),
                n.d(e, "SpriteSheet", function () {
                  return br;
                }),
                n.d(e, "SpriteFont", function () {
                  return wr;
                }),
                n.d(e, "Effects", function () {
                  return r;
                }),
                n.d(e, "ExResponse", function () {
                  return xr;
                }),
                n.d(e, "has_initialize", function () {
                  return Pr;
                }),
                n.d(e, "hasOnInitialize", function () {
                  return Ar;
                }),
                n.d(e, "has_preupdate", function () {
                  return Er;
                }),
                n.d(e, "hasOnPreUpdate", function () {
                  return Sr;
                }),
                n.d(e, "has_postupdate", function () {
                  return Cr;
                }),
                n.d(e, "hasOnPostUpdate", function () {
                  return Or;
                }),
                n.d(e, "hasPreDraw", function () {
                  return Tr;
                }),
                n.d(e, "hasPostDraw", function () {
                  return Br;
                }),
                n.d(e, "PerlinGenerator", function () {
                  return kr;
                }),
                n.d(e, "PerlinDrawer2D", function () {
                  return Rr;
                }),
                n.d(e, "Random", function () {
                  return f;
                }),
                n.d(e, "ColorBlindness", function () {
                  return li;
                }),
                n.d(e, "ColorBlindCorrector", function () {
                  return bi;
                }),
                n.d(e, "Resource", function () {
                  return ee;
                }),
                n.d(e, "Sound", function () {
                  return Ur;
                }),
                n.d(e, "AudioContextFactory", function () {
                  return Cn;
                }),
                n.d(e, "AudioInstanceFactory", function () {
                  return Fr;
                }),
                n.d(e, "AudioInstance", function () {
                  return Ir;
                }),
                n.d(e, "WebAudioInstance", function () {
                  return Lr;
                }),
                n.d(e, "Texture", function () {
                  return ve;
                }),
                n.d(e, "Gif", function () {
                  return Nr;
                }),
                n.d(e, "Stream", function () {
                  return Gr;
                }),
                n.d(e, "ParseGif", function () {
                  return Xr;
                }),
                n.d(e, "Component", function () {
                  return on;
                }),
                n.d(e, "TagComponent", function () {
                  return sn;
                }),
                n.d(e, "AddedComponent", function () {
                  return hn;
                }),
                n.d(e, "isAddedComponent", function () {
                  return un;
                }),
                n.d(e, "RemovedComponent", function () {
                  return ln;
                }),
                n.d(e, "isRemovedComponent", function () {
                  return pn;
                }),
                n.d(e, "Entity", function () {
                  return dn;
                }),
                n.d(e, "EntityManager", function () {
                  return yi;
                }),
                n.d(e, "Query", function () {
                  return di;
                }),
                n.d(e, "QueryManager", function () {
                  return fi;
                }),
                n.d(e, "SystemType", function () {
                  return ri;
                }),
                n.d(e, "System", function () {
                  return si;
                }),
                n.d(e, "AddedEntity", function () {
                  return ai;
                }),
                n.d(e, "isAddedSystemEntity", function () {
                  return ci;
                }),
                n.d(e, "RemovedEntity", function () {
                  return hi;
                }),
                n.d(e, "isRemoveSystemEntity", function () {
                  return ui;
                }),
                n.d(e, "SystemManager", function () {
                  return gi;
                }),
                n.d(e, "Events", function () {
                  return i;
                }),
                n.d(e, "Input", function () {
                  return a;
                }),
                n.d(e, "Traits", function () {
                  return c;
                }),
                n.d(e, "Util", function () {
                  return u;
                }),
                n.d(e, "BrowserComponent", function () {
                  return er;
                }),
                n.d(e, "BrowserEvents", function () {
                  return nr;
                }),
                n.d(e, "maxMessages", function () {
                  return z;
                }),
                n.d(e, "resetObsoleteCounter", function () {
                  return U;
                }),
                n.d(e, "obsolete", function () {
                  return N;
                }),
                n.d(e, "Detector", function () {
                  return kn;
                }),
                n.d(e, "CullingBox", function () {
                  return Ve;
                }),
                n.d(e, "EasingFunctions", function () {
                  return He;
                }),
                n.d(e, "LogLevel", function () {
                  return M;
                }),
                n.d(e, "Logger", function () {
                  return R;
                }),
                n.d(e, "ConsoleAppender", function () {
                  return j;
                }),
                n.d(e, "ScreenAppender", function () {
                  return F;
                }),
                n.d(e, "SortedList", function () {
                  return In;
                }),
                n.d(e, "BinaryTreeNode", function () {
                  return Ln;
                }),
                n.d(e, "MockedElement", function () {
                  return zn;
                });
              var i = {};
              n.r(i),
                n.d(i, "EventTypes", function () {
                  return it;
                }),
                n.d(i, "GameEvent", function () {
                  return at;
                }),
                n.d(i, "KillEvent", function () {
                  return ct;
                }),
                n.d(i, "PreKillEvent", function () {
                  return ht;
                }),
                n.d(i, "PostKillEvent", function () {
                  return ut;
                }),
                n.d(i, "GameStartEvent", function () {
                  return lt;
                }),
                n.d(i, "GameStopEvent", function () {
                  return pt;
                }),
                n.d(i, "PreDrawEvent", function () {
                  return dt;
                }),
                n.d(i, "PostDrawEvent", function () {
                  return ft;
                }),
                n.d(i, "PreDebugDrawEvent", function () {
                  return yt;
                }),
                n.d(i, "PostDebugDrawEvent", function () {
                  return gt;
                }),
                n.d(i, "PreUpdateEvent", function () {
                  return _t;
                }),
                n.d(i, "PostUpdateEvent", function () {
                  return vt;
                }),
                n.d(i, "PreFrameEvent", function () {
                  return mt;
                }),
                n.d(i, "PostFrameEvent", function () {
                  return bt;
                }),
                n.d(i, "GamepadConnectEvent", function () {
                  return wt;
                }),
                n.d(i, "GamepadDisconnectEvent", function () {
                  return xt;
                }),
                n.d(i, "GamepadButtonEvent", function () {
                  return Pt;
                }),
                n.d(i, "GamepadAxisEvent", function () {
                  return At;
                }),
                n.d(i, "SubscribeEvent", function () {
                  return Et;
                }),
                n.d(i, "UnsubscribeEvent", function () {
                  return St;
                }),
                n.d(i, "VisibleEvent", function () {
                  return Ct;
                }),
                n.d(i, "HiddenEvent", function () {
                  return Ot;
                }),
                n.d(i, "PreCollisionEvent", function () {
                  return Tt;
                }),
                n.d(i, "PostCollisionEvent", function () {
                  return Bt;
                }),
                n.d(i, "CollisionStartEvent", function () {
                  return Mt;
                }),
                n.d(i, "CollisionEndEvent", function () {
                  return Dt;
                }),
                n.d(i, "InitializeEvent", function () {
                  return kt;
                }),
                n.d(i, "ActivateEvent", function () {
                  return Rt;
                }),
                n.d(i, "DeactivateEvent", function () {
                  return jt;
                }),
                n.d(i, "ExitViewPortEvent", function () {
                  return Ft;
                }),
                n.d(i, "EnterViewPortEvent", function () {
                  return It;
                }),
                n.d(i, "EnterTriggerEvent", function () {
                  return Lt;
                }),
                n.d(i, "ExitTriggerEvent", function () {
                  return zt;
                });
              var r = {};
              n.r(r),
                n.d(r, "Grayscale", function () {
                  return ne;
                }),
                n.d(r, "Invert", function () {
                  return ie;
                }),
                n.d(r, "Opacity", function () {
                  return re;
                }),
                n.d(r, "Colorize", function () {
                  return oe;
                }),
                n.d(r, "Lighten", function () {
                  return se;
                }),
                n.d(r, "Darken", function () {
                  return ae;
                }),
                n.d(r, "Saturate", function () {
                  return ce;
                }),
                n.d(r, "Desaturate", function () {
                  return he;
                }),
                n.d(r, "Fill", function () {
                  return ue;
                });
              var o = {};
              n.r(o),
                n.d(o, "EaseTo", function () {
                  return Pe;
                }),
                n.d(o, "MoveTo", function () {
                  return Ae;
                }),
                n.d(o, "MoveBy", function () {
                  return Ee;
                }),
                n.d(o, "Follow", function () {
                  return Se;
                }),
                n.d(o, "Meet", function () {
                  return Ce;
                }),
                n.d(o, "RotateTo", function () {
                  return Oe;
                }),
                n.d(o, "RotateBy", function () {
                  return Te;
                }),
                n.d(o, "ScaleTo", function () {
                  return Be;
                }),
                n.d(o, "ScaleBy", function () {
                  return Me;
                }),
                n.d(o, "Delay", function () {
                  return De;
                }),
                n.d(o, "Blink", function () {
                  return ke;
                }),
                n.d(o, "Fade", function () {
                  return Re;
                }),
                n.d(o, "Die", function () {
                  return je;
                }),
                n.d(o, "CallMethod", function () {
                  return Fe;
                }),
                n.d(o, "Repeat", function () {
                  return Ie;
                }),
                n.d(o, "RepeatForever", function () {
                  return Le;
                }),
                n.d(o, "ActionQueue", function () {
                  return ze;
                });
              var s = {};
              n.r(s),
                n.d(s, "line", function () {
                  return Qe;
                }),
                n.d(s, "point", function () {
                  return Ze;
                }),
                n.d(s, "vector", function () {
                  return Ke;
                }),
                n.d(s, "roundRect", function () {
                  return Ye;
                }),
                n.d(s, "circle", function () {
                  return Je;
                });
              var a = {};
              n.r(a),
                n.d(a, "Gamepads", function () {
                  return Ji;
                }),
                n.d(a, "Gamepad", function () {
                  return $i;
                }),
                n.d(a, "Buttons", function () {
                  return Xi;
                }),
                n.d(a, "Axes", function () {
                  return Qi;
                }),
                n.d(a, "PointerType", function () {
                  return Si;
                }),
                n.d(a, "PointerScope", function () {
                  return Ci;
                }),
                n.d(a, "Pointer", function () {
                  return Ri;
                }),
                n.d(a, "Pointers", function () {
                  return Ki;
                }),
                n.d(a, "NativePointerButton", function () {
                  return Mi;
                }),
                n.d(a, "PointerButton", function () {
                  return Di;
                }),
                n.d(a, "WheelDeltaMode", function () {
                  return ki;
                }),
                n.d(a, "PointerEvent", function () {
                  return Fi;
                }),
                n.d(a, "PointerEventFactory", function () {
                  return Ii;
                }),
                n.d(a, "PointerDragEvent", function () {
                  return Li;
                }),
                n.d(a, "PointerUpEvent", function () {
                  return zi;
                }),
                n.d(a, "PointerDownEvent", function () {
                  return Hi;
                }),
                n.d(a, "PointerMoveEvent", function () {
                  return Ui;
                }),
                n.d(a, "PointerEnterEvent", function () {
                  return Wi;
                }),
                n.d(a, "PointerLeaveEvent", function () {
                  return Ni;
                }),
                n.d(a, "PointerCancelEvent", function () {
                  return qi;
                }),
                n.d(a, "WheelEvent", function () {
                  return Vi;
                }),
                n.d(a, "createPointerEventByName", function () {
                  return Gi;
                }),
                n.d(a, "Keys", function () {
                  return mi;
                }),
                n.d(a, "KeyEvent", function () {
                  return Oi;
                }),
                n.d(a, "Keyboard", function () {
                  return Ti;
                });
              var c = {};
              n.r(c),
                n.d(c, "CapturePointer", function () {
                  return Xe;
                }),
                n.d(c, "OffscreenCulling", function () {
                  return Ge;
                }),
                n.d(c, "TileMapCollisionDetection", function () {
                  return qe;
                });
              var h,
                u = {};
              function l() {
                "undefined" == typeof window &&
                  (window = { audioContext: function () {} }),
                  "undefined" == typeof window ||
                    window.requestAnimationFrame ||
                    (window.requestAnimationFrame =
                      window.webkitRequestAnimationFrame ||
                      window.mozRequestAnimationFrame ||
                      function (t) {
                        window.setInterval(t, 1e3 / 60);
                      }),
                  "undefined" == typeof window ||
                    window.cancelAnimationFrame ||
                    (window.cancelAnimationFrame =
                      window.webkitCancelAnimationFrame ||
                      window.mozCancelAnimationFrame ||
                      function () {}),
                  "undefined" == typeof window ||
                    window.AudioContext ||
                    (window.AudioContext =
                      window.AudioContext ||
                      window.webkitAudioContext ||
                      window.mozAudioContext ||
                      window.msAudioContext ||
                      window.oAudioContext),
                  "undefined" == typeof window ||
                    window.devicePixelRatio ||
                    (window.devicePixelRatio = window.devicePixelRatio || 1);
              }
              n.r(u),
                n.d(u, "TwoPI", function () {
                  return y;
                }),
                n.d(u, "extend", function () {
                  return g;
                }),
                n.d(u, "base64Encode", function () {
                  return _;
                }),
                n.d(u, "nullish", function () {
                  return v;
                }),
                n.d(u, "clamp", function () {
                  return m;
                }),
                n.d(u, "randomInRange", function () {
                  return b;
                }),
                n.d(u, "randomIntInRange", function () {
                  return w;
                }),
                n.d(u, "canonicalizeAngle", function () {
                  return x;
                }),
                n.d(u, "toDegrees", function () {
                  return P;
                }),
                n.d(u, "toRadians", function () {
                  return A;
                }),
                n.d(u, "getPosition", function () {
                  return E;
                }),
                n.d(u, "addItemToArray", function () {
                  return S;
                }),
                n.d(u, "removeItemFromArray", function () {
                  return C;
                }),
                n.d(u, "contains", function () {
                  return O;
                }),
                n.d(u, "getOppositeSide", function () {
                  return T;
                }),
                n.d(u, "getSideFromDirection", function () {
                  return B;
                }),
                n.d(u, "Collection", function () {
                  return D;
                }),
                n.d(u, "fail", function () {
                  return k;
                }),
                n.d(u, "DrawUtil", function () {
                  return s;
                }),
                n(73),
                n(134),
                (function (t) {
                  (t[(t.Resolved = 0)] = "Resolved"),
                    (t[(t.Rejected = 1)] = "Rejected"),
                    (t[(t.Pending = 2)] = "Pending");
                })(h || (h = {}));
              var p,
                d = (function () {
                  function t() {
                    (this._state = h.Pending),
                      (this._successCallbacks = []),
                      (this._rejectCallback = function () {});
                  }
                  return (
                    (t.resolve = function (e) {
                      return new t().resolve(e);
                    }),
                    (t.reject = function (e) {
                      return new t().reject(e);
                    }),
                    (t.join = function () {
                      var e = [];
                      if (arguments.length > 0 && !Array.isArray(arguments[0]))
                        for (var n = 0; n < arguments.length; n++)
                          e[n - 0] = arguments[n];
                      else
                        1 === arguments.length &&
                          Array.isArray(arguments[0]) &&
                          (e = arguments[0]);
                      var i = new t();
                      if (!e || !e.length) return i.resolve();
                      var r = e.length,
                        o = 0,
                        s = 0,
                        a = [];
                      return (
                        e.forEach(function (t) {
                          t.then(
                            function () {
                              (o += 1) === r
                                ? i.resolve()
                                : o + s + a.length === r && i.reject(a);
                            },
                            function () {
                              o + (s += 1) + a.length === r && i.reject(a);
                            }
                          ).error(function (t) {
                            a.push(t), a.length + o + s === r && i.reject(a);
                          });
                        }),
                        i
                      );
                    }),
                    (t.prototype.then = function (t, e) {
                      if (
                        t &&
                        (this._successCallbacks.push(t),
                        this.state() === h.Resolved)
                      )
                        try {
                          t.call(this, this._value);
                        } catch (t) {
                          this._handleError(t);
                        }
                      if (
                        e &&
                        ((this._rejectCallback = e),
                        this.state() === h.Rejected)
                      )
                        try {
                          e.call(this, this._value);
                        } catch (t) {
                          this._handleError(t);
                        }
                      return this;
                    }),
                    (t.prototype.error = function (t) {
                      return t && (this._errorCallback = t), this;
                    }),
                    (t.prototype.resolve = function (t) {
                      var e = this;
                      if (this._state !== h.Pending)
                        throw new Error(
                          "Cannot resolve a promise that is not in a pending state!"
                        );
                      this._value = t;
                      try {
                        (this._state = h.Resolved),
                          this._successCallbacks.forEach(function (t) {
                            t.call(e, e._value);
                          });
                      } catch (t) {
                        this._handleError(t);
                      }
                      return this;
                    }),
                    (t.prototype.reject = function (t) {
                      if (this._state !== h.Pending)
                        throw new Error(
                          "Cannot reject a promise that is not in a pending state!"
                        );
                      this._value = t;
                      try {
                        (this._state = h.Rejected),
                          this._rejectCallback.call(this, this._value);
                      } catch (t) {
                        this._handleError(t);
                      }
                      return this;
                    }),
                    (t.prototype.state = function () {
                      return this._state;
                    }),
                    (t.prototype._handleError = function (t) {
                      if (!this._errorCallback) throw t;
                      this._errorCallback.call(this, t);
                    }),
                    t
                  );
                })(),
                f = (function () {
                  function t(t) {
                    (this.seed = t),
                      (this._lowerMask = 2147483647),
                      (this._upperMask = 2147483648),
                      (this._w = 32),
                      (this._n = 624),
                      (this._m = 397),
                      (this._a = 2567483615),
                      (this._u = 11),
                      (this._s = 7),
                      (this._b = 2636928640),
                      (this._t = 15),
                      (this._c = 4022730752),
                      (this._l = 18),
                      (this._f = 1812433253),
                      (this._mt = new Array(this._n)),
                      (this._mt[0] = (t || Date.now()) >>> 0);
                    for (var e = 1; e < this._n; e++) {
                      var n =
                        this._mt[e - 1] ^ (this._mt[e - 1] >>> (this._w - 2));
                      this._mt[e] =
                        (((this._f * ((4294901760 & n) >>> 16)) << 16) +
                          this._f * (65535 & n) +
                          e) >>>
                        0;
                    }
                    this._index = this._n;
                  }
                  return (
                    (t.prototype._twist = function () {
                      for (
                        var t = [0, this._a], e = 0, n = 0;
                        n < this._n - this._m;
                        n++
                      )
                        (e =
                          (this._mt[n] & this._upperMask) |
                          (this._mt[n + 1] & this._lowerMask)),
                          (this._mt[n] =
                            this._mt[n + this._m] ^
                            (e >>> 1) ^
                            (4294967295 & t[1 & e]));
                      for (; n < this._n - 1; n++)
                        (e =
                          (this._mt[n] & this._upperMask) |
                          (this._mt[n + 1] & this._lowerMask)),
                          (this._mt[n] =
                            this._mt[n + (this._m - this._n)] ^
                            (e >>> 1) ^
                            (4294967295 & t[1 & e]));
                      (e =
                        (this._mt[this._n - 1] & this._upperMask) |
                        (this._mt[0] & this._lowerMask)),
                        (this._mt[this._n - 1] =
                          this._mt[this._m - 1] ^
                          (e >>> 1) ^
                          (4294967295 & t[1 & e])),
                        (this._index = 0);
                    }),
                    (t.prototype.nextInt = function () {
                      this._index >= this._n && this._twist();
                      var t = this._mt[this._index++];
                      return (
                        (t ^= t >>> this._u),
                        (t ^= (t << this._s) & this._b),
                        (t ^= (t << this._t) & this._c),
                        (t ^= t >>> this._l) >>> 0
                      );
                    }),
                    (t.prototype.next = function () {
                      return this.nextInt() * (1 / 4294967296);
                    }),
                    (t.prototype.floating = function (t, e) {
                      return (e - t) * this.next() + t;
                    }),
                    (t.prototype.integer = function (t, e) {
                      return Math.floor((e - t + 1) * this.next() + t);
                    }),
                    (t.prototype.bool = function (t) {
                      return void 0 === t && (t = 0.5), this.next() <= t;
                    }),
                    (t.prototype.pickOne = function (t) {
                      return t[this.integer(0, t.length - 1)];
                    }),
                    (t.prototype.pickSet = function (t, e, n) {
                      return (
                        void 0 === n && (n = !1),
                        n
                          ? this._pickSetWithDuplicates(t, e)
                          : this._pickSetWithoutDuplicates(t, e)
                      );
                    }),
                    (t.prototype._pickSetWithoutDuplicates = function (t, e) {
                      if (e > t.length || e < 0)
                        throw new Error(
                          "Invalid number of elements to pick, must pick a value 0 < n <= length"
                        );
                      if (e === t.length) return t;
                      for (
                        var n = new Array(e), i = 0, r = t.slice(0);
                        i < e;

                      ) {
                        var o = this.integer(0, r.length - 1);
                        (n[i++] = r[o]), r.splice(o, 1);
                      }
                      return n;
                    }),
                    (t.prototype._pickSetWithDuplicates = function (t, e) {
                      if (e < 0)
                        throw new Error(
                          "Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT"
                        );
                      for (var n = new Array(e), i = 0; i < e; i++)
                        n[i] = this.pickOne(t);
                      return n;
                    }),
                    (t.prototype.shuffle = function (t) {
                      for (
                        var e = t.slice(0), n = null, i = 0;
                        i < e.length - 2;
                        i++
                      ) {
                        var r = this.integer(i, e.length - 1);
                        (n = e[i]), (e[i] = e[r]), (e[r] = n);
                      }
                      return e;
                    }),
                    (t.prototype.range = function (t, e, n) {
                      for (var i = new Array(t), r = 0; r < t; r++)
                        i[r] = this.integer(e, n);
                      return i;
                    }),
                    (t.prototype.d4 = function () {
                      return this.integer(1, 4);
                    }),
                    (t.prototype.d6 = function () {
                      return this.integer(1, 6);
                    }),
                    (t.prototype.d8 = function () {
                      return this.integer(1, 8);
                    }),
                    (t.prototype.d10 = function () {
                      return this.integer(1, 10);
                    }),
                    (t.prototype.d12 = function () {
                      return this.integer(1, 12);
                    }),
                    (t.prototype.d20 = function () {
                      return this.integer(1, 20);
                    }),
                    t
                  );
                })();
              !(function (t) {
                (t.None = "None"),
                  (t.Top = "Top"),
                  (t.Bottom = "Bottom"),
                  (t.Left = "Left"),
                  (t.Right = "Right");
              })(p || (p = {}));
              var y = 2 * Math.PI;
              function g() {
                var t = {},
                  e = !1,
                  n = 0,
                  i = arguments.length;
                "[object Boolean]" ===
                  Object.prototype.toString.call(arguments[0]) &&
                  ((e = arguments[0]), n++);
                var r = "function" == typeof Object.assign,
                  o = null;
                for (
                  o = r
                    ? Object.assign
                    : function (n) {
                        for (var i in n)
                          Object.prototype.hasOwnProperty.call(n, i) &&
                            (e &&
                            "[object Object]" ===
                              Object.prototype.toString.call(n[i])
                              ? (t[i] = g(!0, t[i], n[i]))
                              : (t[i] = n[i]));
                      };
                  n < i;
                  n++
                ) {
                  var s = arguments[n];
                  r ? o(t, s) : o(s);
                }
                return t;
              }
              function _(t) {
                for (
                  var e =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    n = "",
                    i = 0;
                  i < t.length;

                ) {
                  var r = 255 & t.charCodeAt(i++),
                    o = 255 & t.charCodeAt(i++),
                    s = 255 & t.charCodeAt(i++),
                    a = r >> 2,
                    c = ((3 & r) << 4) | (o >> 4),
                    h = void 0,
                    u = void 0;
                  isNaN(o)
                    ? (h = u = 64)
                    : ((h = ((15 & o) << 2) | (s >> 6)),
                      (u = isNaN(s) ? 64 : 63 & s)),
                    (n +=
                      e.charAt(a) + e.charAt(c) + e.charAt(h) + e.charAt(u));
                }
                return n;
              }
              function v(t, e) {
                return null != t ? t : e;
              }
              function m(t, e, n) {
                return Math.min(Math.max(e, t), n);
              }
              function b(t, e, n) {
                return (
                  void 0 === n && (n = new f()),
                  n ? n.floating(t, e) : t + Math.random() * (e - t)
                );
              }
              function w(t, e, n) {
                return (
                  void 0 === n && (n = new f()),
                  n ? n.integer(t, e) : Math.round(b(t, e))
                );
              }
              function x(t) {
                var e = t;
                if (t > y) for (; e > y; ) e -= y;
                if (t < 0) for (; e < 0; ) e += y;
                return e;
              }
              function P(t) {
                return (180 / Math.PI) * t;
              }
              function A(t) {
                return (t / 180) * Math.PI;
              }
              function E(t) {
                var e = 0,
                  n = 0,
                  i = function (t) {
                    (e += t.offsetLeft), t.offsetParent && i(t.offsetParent);
                  },
                  r = function (t) {
                    (n += t.offsetTop), t.offsetParent && r(t.offsetParent);
                  };
                return i(t), r(t), new q(e, n);
              }
              function S(t, e) {
                return -1 === e.indexOf(t) && (e.push(t), !0);
              }
              function C(t, e) {
                var n;
                return (n = e.indexOf(t)) > -1 && (e.splice(n, 1), !0);
              }
              function O(t, e) {
                for (var n = 0; n < t.length; n++) if (t[n] === e) return !0;
                return !1;
              }
              function T(t) {
                return t === p.Top
                  ? p.Bottom
                  : t === p.Bottom
                  ? p.Top
                  : t === p.Left
                  ? p.Right
                  : t === p.Right
                  ? p.Left
                  : p.None;
              }
              function B(t) {
                for (
                  var e = [q.Left, q.Right, q.Up, q.Down],
                    n = [p.Left, p.Right, p.Top, p.Bottom],
                    i = -Number.MAX_VALUE,
                    r = -1,
                    o = 0;
                  o < e.length;
                  o++
                )
                  e[o].dot(t) > i && ((i = e[o].dot(t)), (r = o));
                return n[r];
              }
              var M,
                D = (function () {
                  function t(e) {
                    void 0 === e && (e = t.DefaultSize),
                      (this._internalArray = null),
                      (this._endPointer = 0),
                      (this._internalArray = new Array(e));
                  }
                  return (
                    (t.prototype._resize = function () {
                      for (
                        var t = 2 * this._internalArray.length,
                          e = new Array(t),
                          n = this.count(),
                          i = 0;
                        i < n;
                        i++
                      )
                        e[i] = this._internalArray[i];
                      delete this._internalArray, (this._internalArray = e);
                    }),
                    (t.prototype.push = function (t) {
                      return (
                        this._endPointer === this._internalArray.length &&
                          this._resize(),
                        (this._internalArray[this._endPointer++] = t)
                      );
                    }),
                    (t.prototype.pop = function () {
                      return (
                        (this._endPointer =
                          this._endPointer - 1 < 0 ? 0 : this._endPointer - 1),
                        this._internalArray[this._endPointer]
                      );
                    }),
                    (t.prototype.count = function () {
                      return this._endPointer;
                    }),
                    (t.prototype.clear = function () {
                      this._endPointer = 0;
                    }),
                    (t.prototype.internalSize = function () {
                      return this._internalArray.length;
                    }),
                    (t.prototype.elementAt = function (t) {
                      if (t >= this.count())
                        throw new Error("Invalid index " + t);
                      return this._internalArray[t];
                    }),
                    (t.prototype.insert = function (t, e) {
                      return (
                        t >= this.count() && this._resize(),
                        (this._internalArray[t] = e)
                      );
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this.count();
                      if (0 === e) throw new Error("Invalid parameter " + t);
                      for (var n = this._internalArray[t], i = t; i < e; i++)
                        this._internalArray[i] = this._internalArray[i + 1];
                      return this._endPointer--, n;
                    }),
                    (t.prototype.removeElement = function (t) {
                      var e = this._internalArray.indexOf(t);
                      this.remove(e);
                    }),
                    (t.prototype.toArray = function () {
                      return this._internalArray.slice(0, this._endPointer);
                    }),
                    (t.prototype.forEach = function (t) {
                      for (var e = 0, n = this.count(); e < n; e++)
                        t.call(this, this._internalArray[e], e);
                    }),
                    (t.prototype.map = function (t) {
                      for (var e = this.count(), n = 0; n < e; n++)
                        this._internalArray[n] = t.call(
                          this,
                          this._internalArray[n],
                          n
                        );
                    }),
                    (t.DefaultSize = 200),
                    t
                  );
                })();
              function k(t) {
                throw new Error(t);
              }
              !(function (t) {
                (t[(t.Debug = 0)] = "Debug"),
                  (t[(t.Info = 1)] = "Info"),
                  (t[(t.Warn = 2)] = "Warn"),
                  (t[(t.Error = 3)] = "Error"),
                  (t[(t.Fatal = 4)] = "Fatal");
              })(M || (M = {}));
              var R = (function () {
                  function t() {
                    if (
                      ((this._appenders = []),
                      (this.defaultLevel = M.Info),
                      t._instance)
                    )
                      throw new Error("Logger is a singleton");
                    return (
                      (t._instance = this),
                      t._instance.addAppender(new j()),
                      t._instance
                    );
                  }
                  return (
                    (t.getInstance = function () {
                      return (
                        null == t._instance && (t._instance = new t()),
                        t._instance
                      );
                    }),
                    (t.prototype.addAppender = function (t) {
                      this._appenders.push(t);
                    }),
                    (t.prototype.clearAppenders = function () {
                      this._appenders.length = 0;
                    }),
                    (t.prototype._log = function (t, e) {
                      null == t && (t = this.defaultLevel);
                      for (var n = this._appenders.length, i = 0; i < n; i++)
                        t >= this.defaultLevel && this._appenders[i].log(t, e);
                    }),
                    (t.prototype.debug = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this._log(M.Debug, t);
                    }),
                    (t.prototype.info = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this._log(M.Info, t);
                    }),
                    (t.prototype.warn = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this._log(M.Warn, t);
                    }),
                    (t.prototype.error = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this._log(M.Error, t);
                    }),
                    (t.prototype.fatal = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this._log(M.Fatal, t);
                    }),
                    (t._instance = null),
                    t
                  );
                })(),
                j = (function () {
                  function t() {}
                  return (
                    (t.prototype.log = function (t, e) {
                      if (
                        console ||
                        console.log ||
                        !console.warn ||
                        !console.error
                      ) {
                        var n = [];
                        n.unshift.apply(n, e),
                          n.unshift("[" + M[t] + "] : "),
                          t < M.Warn
                            ? console.log.apply
                              ? console.log.apply(console, n)
                              : console.log(n.join(" "))
                            : t < M.Error
                            ? console.warn.apply
                              ? console.warn.apply(console, n)
                              : console.warn(n.join(" "))
                            : console.error.apply
                            ? console.error.apply(console, n)
                            : console.error(n.join(" "));
                      }
                    }),
                    t
                  );
                })(),
                F = (function () {
                  function t(t, e) {
                    (this._messages = []),
                      (this._canvas = document.createElement("canvas")),
                      (this._canvas.width = t || window.innerWidth),
                      (this._canvas.height = e || window.innerHeight),
                      (this._canvas.style.position = "absolute"),
                      (this._ctx = this._canvas.getContext("2d")),
                      document.body.appendChild(this._canvas);
                  }
                  return (
                    (t.prototype.log = function (t, e) {
                      var n = e.join(",");
                      this._ctx.clearRect(
                        0,
                        0,
                        this._canvas.width,
                        this._canvas.height
                      ),
                        this._messages.unshift("[" + M[t] + "] : " + n);
                      for (
                        var i = 10, r = 1, o = 0;
                        o < this._messages.length;
                        o++
                      )
                        (this._ctx.fillStyle =
                          "rgba(255,255,255," + r.toFixed(2) + ")"),
                          this._ctx.fillText(this._messages[o], 200, i),
                          (i += 10),
                          (r = r > 0 ? r - 0.05 : 0);
                    }),
                    t
                  );
                })(),
                I = function () {
                  return (I =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                },
                L = function () {
                  for (var t = 0, e = 0, n = arguments.length; e < n; e++)
                    t += arguments[e].length;
                  var i = Array(t),
                    r = 0;
                  for (e = 0; e < n; e++)
                    for (
                      var o = arguments[e], s = 0, a = o.length;
                      s < a;
                      s++, r++
                    )
                      i[r] = o[s];
                  return i;
                },
                z = 5,
                H = {},
                U = function () {
                  for (var t in H) H[t] = 0;
                },
                W = function (t, e) {
                  H[t] < z &&
                    (R.getInstance().warn(t),
                    console.trace && e.showStackTrace && console.trace()),
                    H[t]++;
                };
              function N(t) {
                return (
                  (t = g(
                    {},
                    {
                      message:
                        "This feature will be removed in future versions of Excalibur.",
                      alternateMethod: null,
                      showStackTrack: !1,
                    },
                    t
                  )),
                  function (e, n, i) {
                    if (
                      i &&
                      "function" != typeof i.value &&
                      "function" != typeof i.get &&
                      "function" != typeof i.set
                    )
                      throw new SyntaxError(
                        "Only classes/functions/getters/setters can be marked as obsolete"
                      );
                    var r =
                      (e.name || "") +
                      (e.name && n ? "." : "") +
                      (n || "") +
                      " is marked obsolete: " +
                      t.message +
                      (t.alternateMethod
                        ? " Use " + t.alternateMethod + " instead"
                        : "");
                    H[r] || (H[r] = 0);
                    var o = i ? I({}, i) : e;
                    if (!i) {
                      var s = function () {
                        var e = Array.prototype.slice.call(arguments);
                        return W(r, t), new (o.bind.apply(o, L([void 0], e)))();
                      };
                      return (s.prototype = o.prototype), s;
                    }
                    return i && i.value
                      ? ((o.value = function () {
                          return W(r, t), i.value.apply(this, arguments);
                        }),
                        o)
                      : (i &&
                          i.get &&
                          (o.get = function () {
                            return W(r, t), i.get.apply(this, arguments);
                          }),
                        i &&
                          i.set &&
                          (o.set = function () {
                            return W(r, t), i.set.apply(this, arguments);
                          }),
                        o);
                  }
                );
              }
              var q = (function () {
                  function t(t, e) {
                    (this.x = t), (this.y = e);
                  }
                  return (
                    Object.defineProperty(t, "Zero", {
                      get: function () {
                        return new t(0, 0);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "One", {
                      get: function () {
                        return new t(1, 1);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Half", {
                      get: function () {
                        return new t(0.5, 0.5);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Up", {
                      get: function () {
                        return new t(0, -1);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Down", {
                      get: function () {
                        return new t(0, 1);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Left", {
                      get: function () {
                        return new t(-1, 0);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Right", {
                      get: function () {
                        return new t(1, 0);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.fromAngle = function (e) {
                      return new t(Math.cos(e), Math.sin(e));
                    }),
                    (t.isValid = function (t) {
                      return (
                        null != t &&
                        !isNaN(t.x) &&
                        !isNaN(t.y) &&
                        t.x !== 1 / 0 &&
                        t.y !== 1 / 0 &&
                        t.x !== -1 / 0 &&
                        t.y !== -1 / 0
                      );
                    }),
                    (t.distance = function (t, e) {
                      return Math.sqrt(
                        Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
                      );
                    }),
                    (t.prototype.setTo = function (t, e) {
                      (this.x = t), (this.y = e);
                    }),
                    (t.prototype.equals = function (t, e) {
                      return (
                        void 0 === e && (e = 0.001),
                        Math.abs(this.x - t.x) <= e &&
                          Math.abs(this.y - t.y) <= e
                      );
                    }),
                    (t.prototype.distance = function (e) {
                      return (
                        e || (e = t.Zero),
                        Math.sqrt(
                          Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2)
                        )
                      );
                    }),
                    (t.prototype.magnitude = function () {
                      return this.distance();
                    }),
                    Object.defineProperty(t.prototype, "size", {
                      get: function () {
                        return this.distance();
                      },
                      set: function (t) {
                        var e = this.normalize().scale(t);
                        (this.x = e.x), (this.y = e.y);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.normalize = function () {
                      var e = this.distance();
                      return e > 0
                        ? new t(this.x / e, this.y / e)
                        : new t(0, 1);
                    }),
                    (t.prototype.average = function (t) {
                      return this.add(t).scale(0.5);
                    }),
                    (t.prototype.scale = function (e) {
                      return e instanceof t
                        ? new t(this.x * e.x, this.y * e.y)
                        : new t(this.x * e, this.y * e);
                    }),
                    (t.prototype.add = function (e) {
                      return new t(this.x + e.x, this.y + e.y);
                    }),
                    (t.prototype.sub = function (e) {
                      return new t(this.x - e.x, this.y - e.y);
                    }),
                    (t.prototype.addEqual = function (t) {
                      return (this.x += t.x), (this.y += t.y), this;
                    }),
                    (t.prototype.subEqual = function (t) {
                      return (this.x -= t.x), (this.y -= t.y), this;
                    }),
                    (t.prototype.scaleEqual = function (t) {
                      return (this.x *= t), (this.y *= t), this;
                    }),
                    (t.prototype.dot = function (t) {
                      return this.x * t.x + this.y * t.y;
                    }),
                    (t.prototype.cross = function (e) {
                      return e instanceof t
                        ? this.x * e.y - this.y * e.x
                        : "number" == typeof e
                        ? new t(e * this.y, -e * this.x)
                        : void 0;
                    }),
                    (t.prototype.perpendicular = function () {
                      return new t(this.y, -this.x);
                    }),
                    (t.prototype.normal = function () {
                      return this.perpendicular().normalize();
                    }),
                    (t.prototype.negate = function () {
                      return this.scale(-1);
                    }),
                    (t.prototype.toAngle = function () {
                      return Math.atan2(this.y, this.x);
                    }),
                    (t.prototype.rotate = function (e, n) {
                      n || (n = new t(0, 0));
                      var i = Math.sin(e),
                        r = Math.cos(e);
                      return new t(
                        r * (this.x - n.x) - i * (this.y - n.y) + n.x,
                        i * (this.x - n.x) + r * (this.y - n.y) + n.y
                      );
                    }),
                    (t.prototype.clone = function () {
                      return new t(this.x, this.y);
                    }),
                    (t.prototype.toString = function () {
                      return "(" + this.x + ", " + this.y + ")";
                    }),
                    (function (t, e, n, i) {
                      var r,
                        o = arguments.length,
                        s =
                          o < 3
                            ? e
                            : null === i
                            ? (i = Object.getOwnPropertyDescriptor(e, n))
                            : i;
                      if (
                        "object" == typeof Reflect &&
                        "function" == typeof Reflect.decorate
                      )
                        s = Reflect.decorate(t, e, n, i);
                      else
                        for (var a = t.length - 1; a >= 0; a--)
                          (r = t[a]) &&
                            (s =
                              (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) ||
                              s);
                      o > 3 && s && Object.defineProperty(e, n, s);
                    })(
                      [
                        N({
                          message:
                            "will be removed in favour of `.size` in version 0.25.0",
                        }),
                      ],
                      t.prototype,
                      "magnitude",
                      null
                    ),
                    t
                  );
                })(),
                V = (function () {
                  function t(t, e) {
                    (this.pos = t), (this.dir = e.normalize());
                  }
                  return (
                    (t.prototype.intersect = function (t) {
                      var e = t.begin.sub(this.pos);
                      if (
                        0 === this.dir.cross(t.getSlope()) &&
                        0 !== e.cross(this.dir)
                      )
                        return -1;
                      var n = this.dir.cross(t.getSlope());
                      if (0 === n) return -1;
                      var i = e.cross(t.getSlope()) / n;
                      if (i >= 0) {
                        var r = e.cross(this.dir) / n / t.getLength();
                        if (r >= 0 && r <= 1) return i;
                      }
                      return -1;
                    }),
                    (t.prototype.getPoint = function (t) {
                      return this.pos.add(this.dir.scale(t));
                    }),
                    t
                  );
                })(),
                G = (function () {
                  function t(t, e) {
                    (this.begin = t), (this.end = e);
                  }
                  return (
                    Object.defineProperty(t.prototype, "slope", {
                      get: function () {
                        return (
                          (this.end.y - this.begin.y) /
                          (this.end.x - this.begin.x)
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "intercept", {
                      get: function () {
                        return this.begin.y - this.slope * this.begin.x;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.normal = function () {
                      return this.end.sub(this.begin).normal();
                    }),
                    (t.prototype.getSlope = function () {
                      var t = this.begin,
                        e = this.end,
                        n = t.distance(e);
                      return e.sub(t).scale(1 / n);
                    }),
                    (t.prototype.getEdge = function () {
                      var t = this.begin;
                      return this.end.sub(t);
                    }),
                    (t.prototype.getLength = function () {
                      var t = this.begin,
                        e = this.end;
                      return t.distance(e);
                    }),
                    Object.defineProperty(t.prototype, "midpoint", {
                      get: function () {
                        return this.begin.add(this.end).scale(0.5);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.flip = function () {
                      return new t(this.end, this.begin);
                    }),
                    (t.prototype.distanceToPoint = function (t) {
                      var e = t.x,
                        n = t.y,
                        i = this.getLength(),
                        r = this.end.y - this.begin.y,
                        o = this.end.x - this.begin.x;
                      return (
                        Math.abs(
                          r * e -
                            o * n +
                            this.end.x * this.begin.y -
                            this.end.y * this.begin.x
                        ) / i
                      );
                    }),
                    (t.prototype.findVectorToPoint = function (t) {
                      var e = this.begin.sub(t),
                        n = this.getSlope();
                      return e.sub(n.scale(e.dot(n)));
                    }),
                    (t.prototype.findPoint = function (t, e) {
                      void 0 === t && (t = null), void 0 === e && (e = null);
                      var n = this.slope,
                        i = this.intercept;
                      if (null !== t) return new q(t, n * t + i);
                      if (null !== e) return new q((e - i) / n, e);
                      throw new Error("You must provide an X or a Y value");
                    }),
                    (t.prototype.hasPoint = function () {
                      var t,
                        e = 0;
                      if (
                        "number" == typeof arguments[0] &&
                        "number" == typeof arguments[1]
                      )
                        (t = new q(arguments[0], arguments[1])),
                          (e = arguments[2] || 0);
                      else {
                        if (!(arguments[0] instanceof q))
                          throw "Could not determine the arguments for Vector.hasPoint";
                        (t = arguments[0]), (e = arguments[1] || 0);
                      }
                      var n = t.x - this.begin.x,
                        i = t.y - this.begin.y,
                        r = this.end.x - this.begin.x,
                        o = this.end.y - this.begin.y,
                        s = n * o - i * r;
                      return (
                        !(Math.abs(s) > e) &&
                        (Math.abs(r) >= Math.abs(o)
                          ? r > 0
                            ? this.begin.x <= t.x && t.x <= this.end.x
                            : this.end.x <= t.x && t.x <= this.begin.x
                          : o > 0
                          ? this.begin.y <= t.y && t.y <= this.end.y
                          : this.end.y <= t.y && t.y <= this.begin.y)
                      );
                    }),
                    t
                  );
                })(),
                X = (function () {
                  function t(t, e) {
                    (this.min = t), (this.max = e);
                  }
                  return (
                    (t.prototype.overlaps = function (t) {
                      return this.max > t.min && t.max > this.min;
                    }),
                    (t.prototype.getOverlap = function (t) {
                      return this.overlaps(t)
                        ? this.max > t.max
                          ? t.max - this.min
                          : this.max - t.min
                        : 0;
                    }),
                    t
                  );
                })(),
                Q = (function () {
                  function t(t, e, n) {
                    (this.worldPos = t),
                      (this.pagePos = e),
                      (this.screenPos = n);
                  }
                  return (
                    (t.fromPagePosition = function (e, n, i) {
                      var r, o, s, a;
                      3 === arguments.length
                        ? ((s = new q((r = e), (o = n))), (a = i))
                        : ((r = (s = e).x), (o = s.y), (a = n));
                      var c = r - E(a.canvas).x,
                        h = o - E(a.canvas).y,
                        u = new q(c, h);
                      return new t(a.screenToWorldCoordinates(u), s, u);
                    }),
                    t
                  );
                })();
              function Z(t, e) {
                return new q(t, e);
              }
              var K,
                Y,
                J,
                $ = function (t, e, n, i) {
                  var r,
                    o = arguments.length,
                    s =
                      o < 3
                        ? e
                        : null === i
                        ? (i = Object.getOwnPropertyDescriptor(e, n))
                        : i;
                  if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                  )
                    s = Reflect.decorate(t, e, n, i);
                  else
                    for (var a = t.length - 1; a >= 0; a--)
                      (r = t[a]) &&
                        (s =
                          (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
                  return o > 3 && s && Object.defineProperty(e, n, s), s;
                },
                tt = (function () {
                  function t(t, e, n, i) {
                    (this.r = t),
                      (this.g = e),
                      (this.b = n),
                      (this.a = null != i ? i : 1);
                  }
                  return (
                    (t.fromRGB = function (e, n, i, r) {
                      return new t(e, n, i, r);
                    }),
                    (t.fromHex = function (e) {
                      var n;
                      if (
                        (n = e.match(
                          /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i
                        ))
                      ) {
                        var i = parseInt(n[1], 16),
                          r = parseInt(n[2], 16),
                          o = parseInt(n[3], 16),
                          s = 1;
                        return (
                          n[4] && (s = parseInt(n[4], 16) / 255),
                          new t(i, r, o, s)
                        );
                      }
                      throw new Error("Invalid hex string: " + e);
                    }),
                    (t.fromHSL = function (t, e, n, i) {
                      return (
                        void 0 === i && (i = 1), new et(t, e, n, i).toRGBA()
                      );
                    }),
                    (t.prototype.lighten = function (t) {
                      void 0 === t && (t = 0.1);
                      var e = et.fromRGBA(this.r, this.g, this.b, this.a);
                      return (e.l += (1 - e.l) * t), e.toRGBA();
                    }),
                    (t.prototype.darken = function (t) {
                      void 0 === t && (t = 0.1);
                      var e = et.fromRGBA(this.r, this.g, this.b, this.a);
                      return (e.l -= e.l * t), e.toRGBA();
                    }),
                    (t.prototype.saturate = function (t) {
                      void 0 === t && (t = 0.1);
                      var e = et.fromRGBA(this.r, this.g, this.b, this.a);
                      return (e.s += e.s * t), e.toRGBA();
                    }),
                    (t.prototype.desaturate = function (t) {
                      void 0 === t && (t = 0.1);
                      var e = et.fromRGBA(this.r, this.g, this.b, this.a);
                      return (e.s -= e.s * t), e.toRGBA();
                    }),
                    (t.prototype.multiply = function (e) {
                      return new t(
                        (((e.r / 255) * this.r) / 255) * 255,
                        (((e.g / 255) * this.g) / 255) * 255,
                        (((e.b / 255) * this.b) / 255) * 255,
                        e.a * this.a
                      );
                    }),
                    (t.prototype.mulitiply = function (t) {
                      return this.multiply(t);
                    }),
                    (t.prototype.screen = function (t) {
                      var e = t.invert(),
                        n = t.invert();
                      return e.multiply(n).invert();
                    }),
                    (t.prototype.invert = function () {
                      return new t(
                        255 - this.r,
                        255 - this.g,
                        255 - this.b,
                        1 - this.a
                      );
                    }),
                    (t.prototype.average = function (e) {
                      return new t(
                        (e.r + this.r) / 2,
                        (e.g + this.g) / 2,
                        (e.b + this.b) / 2,
                        (e.a + this.a) / 2
                      );
                    }),
                    (t.prototype.toString = function (t) {
                      switch ((void 0 === t && (t = "rgb"), t)) {
                        case "rgb":
                          return this.toRGBA();
                        case "hsl":
                          return this.toHSLA();
                        case "hex":
                          return this.toHex();
                        default:
                          throw new Error("Invalid Color format");
                      }
                    }),
                    (t.prototype._componentToHex = function (t) {
                      var e = t.toString(16);
                      return 1 === e.length ? "0" + e : e;
                    }),
                    (t.prototype.toHex = function () {
                      return (
                        "#" +
                        this._componentToHex(this.r) +
                        this._componentToHex(this.g) +
                        this._componentToHex(this.b)
                      );
                    }),
                    (t.prototype.toRGBA = function () {
                      var t =
                        String(this.r.toFixed(0)) +
                        ", " +
                        String(this.g.toFixed(0)) +
                        ", " +
                        String(this.b.toFixed(0));
                      return void 0 !== this.a || null !== this.a
                        ? "rgba(" + t + ", " + String(this.a) + ")"
                        : "rgb(" + t + ")";
                    }),
                    (t.prototype.toHSLA = function () {
                      return et
                        .fromRGBA(this.r, this.g, this.b, this.a)
                        .toString();
                    }),
                    (t.prototype.fillStyle = function () {
                      return this.toString();
                    }),
                    (t.prototype.clone = function () {
                      return new t(this.r, this.g, this.b, this.a);
                    }),
                    Object.defineProperty(t, "Black", {
                      get: function () {
                        return t.fromHex("#000000");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "White", {
                      get: function () {
                        return t.fromHex("#FFFFFF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Gray", {
                      get: function () {
                        return t.fromHex("#808080");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "LightGray", {
                      get: function () {
                        return t.fromHex("#D3D3D3");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "DarkGray", {
                      get: function () {
                        return t.fromHex("#A9A9A9");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Yellow", {
                      get: function () {
                        return t.fromHex("#FFFF00");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Orange", {
                      get: function () {
                        return t.fromHex("#FFA500");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Red", {
                      get: function () {
                        return t.fromHex("#FF0000");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Vermilion", {
                      get: function () {
                        return t.fromHex("#FF5B31");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Vermillion", {
                      get: function () {
                        return t.Vermilion;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Rose", {
                      get: function () {
                        return t.fromHex("#FF007F");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Magenta", {
                      get: function () {
                        return t.fromHex("#FF00FF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Violet", {
                      get: function () {
                        return t.fromHex("#7F00FF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Blue", {
                      get: function () {
                        return t.fromHex("#0000FF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Azure", {
                      get: function () {
                        return t.fromHex("#007FFF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Cyan", {
                      get: function () {
                        return t.fromHex("#00FFFF");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Viridian", {
                      get: function () {
                        return t.fromHex("#59978F");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Green", {
                      get: function () {
                        return t.fromHex("#00FF00");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Chartreuse", {
                      get: function () {
                        return t.fromHex("#7FFF00");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Transparent", {
                      get: function () {
                        return t.fromHex("#FFFFFF00");
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    $(
                      [
                        N({
                          message:
                            "Alias for incorrect spelling used in older versions, use multiply instead, will be removed in v0.25.0",
                        }),
                      ],
                      t.prototype,
                      "mulitiply",
                      null
                    ),
                    $(
                      [
                        N({
                          message:
                            "Alias for incorrect spelling used in older versions",
                          alternateMethod: "Vermilion",
                        }),
                      ],
                      t,
                      "Vermillion",
                      null
                    ),
                    t
                  );
                })(),
                et = (function () {
                  function t(t, e, n, i) {
                    (this.h = t), (this.s = e), (this.l = n), (this.a = i);
                  }
                  return (
                    (t.hue2rgb = function (t, e, n) {
                      return (
                        n < 0 && (n += 1),
                        n > 1 && (n -= 1),
                        n < 1 / 6
                          ? t + 6 * (e - t) * n
                          : n < 0.5
                          ? e
                          : n < 2 / 3
                          ? t + (e - t) * (2 / 3 - n) * 6
                          : t
                      );
                    }),
                    (t.fromRGBA = function (e, n, i, r) {
                      (e /= 255), (n /= 255), (i /= 255);
                      var o,
                        s,
                        a = Math.max(e, n, i),
                        c = Math.min(e, n, i),
                        h = (a + c) / 2;
                      if (a === c) o = s = 0;
                      else {
                        var u = a - c;
                        switch (
                          ((s = h > 0.5 ? u / (2 - a - c) : u / (a + c)), a)
                        ) {
                          case e:
                            o = (n - i) / u + (n < i ? 6 : 0);
                            break;
                          case n:
                            o = (i - e) / u + 2;
                            break;
                          case i:
                            o = (e - n) / u + 4;
                        }
                        o /= 6;
                      }
                      return new t(o, s, h, r);
                    }),
                    (t.prototype.toRGBA = function () {
                      var e, n, i;
                      if (0 === this.s) e = n = i = this.l;
                      else {
                        var r =
                            this.l < 0.5
                              ? this.l * (1 + this.s)
                              : this.l + this.s - this.l * this.s,
                          o = 2 * this.l - r;
                        (e = t.hue2rgb(o, r, this.h + 1 / 3)),
                          (n = t.hue2rgb(o, r, this.h)),
                          (i = t.hue2rgb(o, r, this.h - 1 / 3));
                      }
                      return new tt(255 * e, 255 * n, 255 * i, this.a);
                    }),
                    (t.prototype.toString = function () {
                      return (
                        "hsla(" +
                        this.h.toFixed(0) +
                        ", " +
                        this.s.toFixed(0) +
                        ", " +
                        this.l.toFixed(0) +
                        ", " +
                        this.a.toFixed(0) +
                        ")"
                      );
                    }),
                    t
                  );
                })();
              !(function (t) {
                (t[(t.Box = 0)] = "Box"), (t[(t.RigidBody = 1)] = "RigidBody");
              })(K || (K = {})),
                (function (t) {
                  (t[(t.Naive = 0)] = "Naive"),
                    (t[(t.DynamicAABBTree = 1)] = "DynamicAABBTree");
                })(Y || (Y = {})),
                (function (t) {
                  t[(t.Euler = 0)] = "Euler";
                })(J || (J = {}));
              var nt,
                it,
                rt = (function () {
                  function t() {}
                  return (
                    (t.useBoxPhysics = function () {
                      t.collisionResolutionStrategy = K.Box;
                    }),
                    (t.useRigidBodyPhysics = function () {
                      t.collisionResolutionStrategy = K.RigidBody;
                    }),
                    Object.defineProperty(t, "dynamicTreeVelocityMultiplyer", {
                      get: function () {
                        return t.dynamicTreeVelocityMultiplier;
                      },
                      set: function (e) {
                        t.dynamicTreeVelocityMultiplier = e;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.acc = new q(0, 0)),
                    (t.enabled = !0),
                    (t.collisionPasses = 5),
                    (t.broadphaseStrategy = Y.DynamicAABBTree),
                    (t.broadphaseDebug = !1),
                    (t.showCollisionNormals = !1),
                    (t.showMotionVectors = !1),
                    (t.showBounds = !1),
                    (t.showArea = !1),
                    (t.showContacts = !1),
                    (t.showNormals = !1),
                    (t.collisionResolutionStrategy = K.Box),
                    (t.defaultMass = 10),
                    (t.integrator = J.Euler),
                    (t.integrationSteps = 1),
                    (t.allowRigidBodyRotation = !0),
                    (t.collisionShift = 0.001),
                    (t.dynamicTreeVelocityMultiplier = 2),
                    (t.boundsPadding = 5),
                    (t.surfaceEpsilon = 0.1),
                    (t.checkForFastBodies = !0),
                    (t.disableMinimumSpeedForFastBody = !1),
                    (function (t, e, n, i) {
                      var r,
                        o = arguments.length,
                        s =
                          o < 3
                            ? e
                            : null === i
                            ? (i = Object.getOwnPropertyDescriptor(e, n))
                            : i;
                      if (
                        "object" == typeof Reflect &&
                        "function" == typeof Reflect.decorate
                      )
                        s = Reflect.decorate(t, e, n, i);
                      else
                        for (var a = t.length - 1; a >= 0; a--)
                          (r = t[a]) &&
                            (s =
                              (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) ||
                              s);
                      o > 3 && s && Object.defineProperty(e, n, s);
                    })(
                      [
                        N({
                          message:
                            "Alias for incorrect spelling used in older versions, will be removed in v0.25.0",
                          alternateMethod: "dynamicTreeVelocityMultiplier",
                        }),
                      ],
                      t,
                      "dynamicTreeVelocityMultiplyer",
                      null
                    ),
                    t
                  );
                })(),
                ot =
                  ((nt = function (t, e) {
                    return (nt =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(t, e);
                  }),
                  function (t, e) {
                    function n() {
                      this.constructor = t;
                    }
                    nt(t, e),
                      (t.prototype =
                        null === e
                          ? Object.create(e)
                          : ((n.prototype = e.prototype), new n()));
                  });
              !(function (t) {
                (t.Kill = "kill"),
                  (t.PreKill = "prekill"),
                  (t.PostKill = "postkill"),
                  (t.PreDraw = "predraw"),
                  (t.PostDraw = "postdraw"),
                  (t.PreDebugDraw = "predebugdraw"),
                  (t.PostDebugDraw = "postdebugdraw"),
                  (t.PreUpdate = "preupdate"),
                  (t.PostUpdate = "postupdate"),
                  (t.PreFrame = "preframe"),
                  (t.PostFrame = "postframe"),
                  (t.PreCollision = "precollision"),
                  (t.CollisionStart = "collisionstart"),
                  (t.CollisionEnd = "collisionend"),
                  (t.PostCollision = "postcollision"),
                  (t.Initialize = "initialize"),
                  (t.Activate = "activate"),
                  (t.Deactivate = "deactivate"),
                  (t.ExitViewport = "exitviewport"),
                  (t.EnterViewport = "enterviewport"),
                  (t.ExitTrigger = "exit"),
                  (t.EnterTrigger = "enter"),
                  (t.Connect = "connect"),
                  (t.Disconnect = "disconnect"),
                  (t.Button = "button"),
                  (t.Axis = "axis"),
                  (t.Subscribe = "subscribe"),
                  (t.Unsubscribe = "unsubscribe"),
                  (t.Visible = "visible"),
                  (t.Hidden = "hidden"),
                  (t.Start = "start"),
                  (t.Stop = "stop"),
                  (t.PointerUp = "pointerup"),
                  (t.PointerDown = "pointerdown"),
                  (t.PointerMove = "pointermove"),
                  (t.PointerEnter = "pointerenter"),
                  (t.PointerLeave = "pointerleave"),
                  (t.PointerCancel = "pointercancel"),
                  (t.PointerWheel = "pointerwheel"),
                  (t.Up = "up"),
                  (t.Down = "down"),
                  (t.Move = "move"),
                  (t.Enter = "enter"),
                  (t.Leave = "leave"),
                  (t.Cancel = "cancel"),
                  (t.Wheel = "wheel"),
                  (t.Press = "press"),
                  (t.Release = "release"),
                  (t.Hold = "hold"),
                  (t.PointerDragStart = "pointerdragstart"),
                  (t.PointerDragEnd = "pointerdragend"),
                  (t.PointerDragEnter = "pointerdragenter"),
                  (t.PointerDragLeave = "pointerdragleave"),
                  (t.PointerDragMove = "pointerdragmove");
              })(it || (it = {}));
              var st,
                at = (function () {
                  function t() {
                    this._bubbles = !0;
                  }
                  return (
                    Object.defineProperty(t.prototype, "bubbles", {
                      get: function () {
                        return this._bubbles;
                      },
                      set: function (t) {
                        this._bubbles = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.stopPropagation = function () {
                      this.bubbles = !1;
                    }),
                    t
                  );
                })(),
                ct = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                ht = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                ut = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                lt = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                pt = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                dt = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.ctx = e), (r.delta = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                ft = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.ctx = e), (r.delta = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                yt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.ctx = e), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                gt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.ctx = e), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                _t = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.engine = e), (r.delta = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                vt = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.engine = e), (r.delta = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                mt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.engine = e), (i.prevStats = n), (i.target = e), i;
                  }
                  return ot(e, t), e;
                })(at),
                bt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.engine = e), (i.stats = n), (i.target = e), i;
                  }
                  return ot(e, t), e;
                })(at),
                wt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.index = e), (i.gamepad = n), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                xt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.index = e), (i.gamepad = n), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                Pt = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.button = e), (r.value = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                At = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.axis = e), (r.value = n), (r.target = i), r;
                  }
                  return ot(e, t), e;
                })(at),
                Et = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.topic = e), (i.handler = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                St = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.topic = e), (i.handler = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                Ct = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                Ot = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                Tt = (function (t) {
                  function e(e, n, i, r) {
                    var o = t.call(this) || this;
                    return (
                      (o.other = n),
                      (o.side = i),
                      (o.intersection = r),
                      (o.target = e),
                      o
                    );
                  }
                  return (
                    ot(e, t),
                    Object.defineProperty(e.prototype, "actor", {
                      get: function () {
                        return this.target;
                      },
                      set: function (t) {
                        this.target = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(at),
                Bt = (function (t) {
                  function e(e, n, i, r) {
                    var o = t.call(this) || this;
                    return (
                      (o.other = n),
                      (o.side = i),
                      (o.intersection = r),
                      (o.target = e),
                      o
                    );
                  }
                  return (
                    ot(e, t),
                    Object.defineProperty(e.prototype, "actor", {
                      get: function () {
                        return this.target;
                      },
                      set: function (t) {
                        this.target = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(at),
                Mt = (function (t) {
                  function e(e, n, i) {
                    var r = t.call(this) || this;
                    return (r.other = n), (r.pair = i), (r.target = e), r;
                  }
                  return (
                    ot(e, t),
                    Object.defineProperty(e.prototype, "actor", {
                      get: function () {
                        return this.target;
                      },
                      set: function (t) {
                        this.target = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(at),
                Dt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.other = n), (i.target = e), i;
                  }
                  return (
                    ot(e, t),
                    Object.defineProperty(e.prototype, "actor", {
                      get: function () {
                        return this.target;
                      },
                      set: function (t) {
                        this.target = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(at),
                kt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.engine = e), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                Rt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.oldScene = e), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                jt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.newScene = e), (i.target = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                Ft = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                It = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.target = e), n;
                  }
                  return ot(e, t), e;
                })(at),
                Lt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.target = e), (i.actor = n), i;
                  }
                  return ot(e, t), e;
                })(at),
                zt = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.target = e), (i.actor = n), i;
                  }
                  return ot(e, t), e;
                })(at);
              !(function (t) {
                (t.PreventCollision = "PreventCollision"),
                  (t.Passive = "Passive"),
                  (t.Active = "Active"),
                  (t.Fixed = "Fixed");
              })(st || (st = {}));
              var Ht = (function () {
                  function t(t, e, n, i, r) {
                    (this.colliderA = t),
                      (this.colliderB = e),
                      (this.mtv = n),
                      (this.point = i),
                      (this.normal = r);
                  }
                  return (
                    (t.prototype.resolve = function (t) {
                      if (t === K.RigidBody) this._resolveRigidBodyCollision();
                      else {
                        if (t !== K.Box)
                          throw new Error(
                            "Unknown collision resolution strategy"
                          );
                        this._resolveBoxCollision();
                      }
                    }),
                    (t.prototype._applyBoxImpulse = function (t, e, n) {
                      if (t.type === st.Active && e.type !== st.Passive) {
                        t.type === st.Active &&
                          e.type === st.Active &&
                          (n = n.scale(0.5)),
                          (t.body.pos.y += n.y),
                          (t.body.pos.x += n.x);
                        var i = n.normalize();
                        if (i.dot(t.body.vel) < 0) {
                          var r = i.scale(i.dot(t.body.vel.negate()));
                          t.body.vel = t.body.vel.add(r);
                        }
                        t.emit("postcollision", new Bt(t, e, B(n), n));
                      }
                    }),
                    (t.prototype._resolveBoxCollision = function () {
                      var t = B(this.mtv),
                        e = this.mtv.negate();
                      this.colliderA.emit(
                        "precollision",
                        new Tt(this.colliderA, this.colliderB, t, e)
                      ),
                        this.colliderB.emit(
                          "precollision",
                          new Tt(
                            this.colliderB,
                            this.colliderA,
                            T(t),
                            e.negate()
                          )
                        ),
                        this._applyBoxImpulse(
                          this.colliderA,
                          this.colliderB,
                          e
                        ),
                        this._applyBoxImpulse(
                          this.colliderB,
                          this.colliderA,
                          e.negate()
                        );
                    }),
                    (t.prototype._resolveRigidBodyCollision = function () {
                      var t = this.colliderA.body,
                        e = this.colliderB.body,
                        n = this.mtv,
                        i = this.normal;
                      if (t !== e) {
                        var r = B(this.mtv);
                        if (
                          (this.colliderA.emit(
                            "precollision",
                            new Tt(this.colliderA, this.colliderB, r, this.mtv)
                          ),
                          this.colliderB.emit(
                            "precollision",
                            new Tt(
                              this.colliderB,
                              this.colliderA,
                              T(r),
                              this.mtv.negate()
                            )
                          ),
                          this.colliderA.type !== st.Passive &&
                            this.colliderB.type !== st.Passive)
                        ) {
                          var o =
                              this.colliderA.type === st.Fixed
                                ? 0
                                : 1 / this.colliderA.mass,
                            s =
                              this.colliderB.type === st.Fixed
                                ? 0
                                : 1 / this.colliderB.mass,
                            a =
                              this.colliderA.type === st.Fixed
                                ? 0
                                : 1 / this.colliderA.inertia,
                            c =
                              this.colliderB.type === st.Fixed
                                ? 0
                                : 1 / this.colliderB.inertia,
                            h = Math.min(
                              this.colliderA.bounciness,
                              this.colliderB.bounciness
                            ),
                            u = Math.min(
                              this.colliderA.friction,
                              this.colliderB.friction
                            ),
                            l = (i = i.normalize()).normal().normalize(),
                            p = this.point.sub(this.colliderA.center),
                            d = this.point.sub(this.colliderB.center),
                            f = e.vel
                              .add(d.cross(-e.rx))
                              .sub(t.vel.sub(p.cross(t.rx))),
                            y = f.dot(i),
                            g = f.dot(l),
                            _ = p.dot(l),
                            v = p.dot(i),
                            m = d.dot(l),
                            b = d.dot(i);
                          if (!(y > 0)) {
                            var w =
                              (-(1 + h) * y) / (o + s + a * _ * _ + c * m * m);
                            if (
                              (this.colliderA.type === st.Fixed
                                ? ((e.vel = e.vel.add(i.scale(w * s))),
                                  rt.allowRigidBodyRotation &&
                                    (e.rx -= w * c * -d.cross(i)),
                                  e.addMtv(n))
                                : this.colliderB.type === st.Fixed
                                ? ((t.vel = t.vel.sub(i.scale(w * o))),
                                  rt.allowRigidBodyRotation &&
                                    (t.rx += w * a * -p.cross(i)),
                                  t.addMtv(n.negate()))
                                : ((e.vel = e.vel.add(i.scale(w * s))),
                                  (t.vel = t.vel.sub(i.scale(w * o))),
                                  rt.allowRigidBodyRotation &&
                                    ((e.rx -= w * c * -d.cross(i)),
                                    (t.rx += w * a * -p.cross(i))),
                                  e.addMtv(n.scale(0.5)),
                                  t.addMtv(n.scale(-0.5))),
                              u && g)
                            ) {
                              var x = f.sub(i.scale(f.dot(i))).normalize(),
                                P = f.dot(x) / (o + s + v * v * a + b * b * c),
                                A = new q(0, 0);
                              (A =
                                Math.abs(P) <= w * u
                                  ? x.scale(P).negate()
                                  : x.scale(-w * u)),
                                this.colliderA.type === st.Fixed
                                  ? ((e.vel = e.vel.add(A.scale(s))),
                                    rt.allowRigidBodyRotation &&
                                      (e.rx += A.dot(x) * c * d.cross(x)))
                                  : this.colliderB.type === st.Fixed
                                  ? ((t.vel = t.vel.sub(A.scale(o))),
                                    rt.allowRigidBodyRotation &&
                                      (t.rx -= A.dot(x) * a * p.cross(x)))
                                  : ((e.vel = e.vel.add(A.scale(s))),
                                    (t.vel = t.vel.sub(A.scale(o))),
                                    rt.allowRigidBodyRotation &&
                                      ((e.rx += A.dot(x) * c * d.cross(x)),
                                      (t.rx -= A.dot(x) * a * p.cross(x))));
                            }
                            this.colliderA.emit(
                              "postcollision",
                              new Bt(
                                this.colliderA,
                                this.colliderB,
                                r,
                                this.mtv
                              )
                            ),
                              this.colliderB.emit(
                                "postcollision",
                                new Bt(
                                  this.colliderB,
                                  this.colliderA,
                                  T(r),
                                  this.mtv.negate()
                                )
                              );
                          }
                        }
                      }
                    }),
                    t
                  );
                })(),
                Ut = {
                  CollideCircleCircle: function (t, e) {
                    var n = t.radius + e.radius,
                      i = t.worldPos,
                      r = e.worldPos;
                    if (i.distance(r) > n) return null;
                    var o = r.sub(i).normalize(),
                      s = o.scale(n - r.distance(i)),
                      a = t.getFurthestPoint(o);
                    return new Ht(t.collider, e.collider, s, a, o);
                  },
                  CollideCirclePolygon: function (t, e) {
                    var n = t.testSeparatingAxisTheorem(e);
                    if (!n) return null;
                    var i = n.dot(e.center.sub(t.center));
                    n = i < 0 ? n.negate() : n;
                    var r = [],
                      o = e.getFurthestPoint(n.negate()),
                      s = t.getFurthestPoint(n);
                    return (
                      t.contains(o) && r.push(o),
                      e.contains(s) && r.push(s),
                      0 === r.length
                        ? null
                        : new Ht(
                            t.collider,
                            e.collider,
                            n,
                            2 === r.length ? r[0].average(r[1]) : r[0],
                            n.normalize()
                          )
                    );
                  },
                  CollideCircleEdge: function (t, e) {
                    var n = t.center,
                      i = e.end.sub(e.begin),
                      r = i.dot(e.end.sub(n)),
                      o = i.dot(n.sub(e.begin));
                    if (o <= 0) {
                      var s = e.begin.sub(n),
                        a = s.dot(s);
                      return a > t.radius * t.radius
                        ? null
                        : new Ht(
                            t.collider,
                            e.collider,
                            s.normalize().scale(t.radius - Math.sqrt(a)),
                            e.begin,
                            s.normalize()
                          );
                    }
                    if (r <= 0) {
                      var c = e.end.sub(n),
                        h = c.dot(c);
                      return h > t.radius * t.radius
                        ? null
                        : new Ht(
                            t.collider,
                            e.collider,
                            c.normalize().scale(t.radius - Math.sqrt(h)),
                            e.end,
                            c.normalize()
                          );
                    }
                    var u = i.dot(i),
                      l = e.begin
                        .scale(r)
                        .add(e.end.scale(o))
                        .scale(1 / u),
                      p = n.sub(l),
                      d = p.dot(p);
                    if (d > t.radius * t.radius) return null;
                    var f = i.perpendicular();
                    f.dot(n.sub(e.begin)) < 0 && ((f.x = -f.x), (f.y = -f.y));
                    var y = (f = f.normalize()).scale(
                      Math.abs(t.radius - Math.sqrt(d))
                    );
                    return new Ht(
                      t.collider,
                      e.collider,
                      y.negate(),
                      l,
                      f.negate()
                    );
                  },
                  CollideEdgeEdge: function () {
                    return null;
                  },
                  CollidePolygonEdge: function (t, e) {
                    var n = e.end.sub(e.begin).normal();
                    if (t.contains(e.begin)) {
                      var i = t.getClosestFace(e.begin),
                        r = i.distance,
                        o = i.face;
                      if (r)
                        return new Ht(
                          t.collider,
                          e.collider,
                          r.negate(),
                          e.begin.add(r.negate()),
                          o.normal().negate()
                        );
                    }
                    if (t.contains(e.end)) {
                      var s = t.getClosestFace(e.end);
                      if (((r = s.distance), (o = s.face), r))
                        return new Ht(
                          t.collider,
                          e.collider,
                          r.negate(),
                          e.end.add(r.negate()),
                          o.normal().negate()
                        );
                    }
                    var a = t.center,
                      c = e.center.sub(a).normalize(),
                      h = new Xt({
                        collider: e.collider,
                        points: [
                          e.begin,
                          e.end,
                          e.end.add(c.scale(30)),
                          e.begin.add(c.scale(30)),
                        ],
                      }),
                      u = t.testSeparatingAxisTheorem(h);
                    return u
                      ? ((n = n.dot(c) < 0 ? n.negate() : n),
                        (u = u.dot(c) < 0 ? u.negate() : u),
                        new Ht(
                          t.collider,
                          e.collider,
                          u,
                          t.getFurthestPoint(n),
                          n
                        ))
                      : null;
                  },
                  CollidePolygonPolygon: function (t, e) {
                    var n = t.testSeparatingAxisTheorem(e);
                    if (!n) return null;
                    var i = n.dot(e.center.sub(t.center));
                    n = i < 0 ? n.negate() : n;
                    var r = [],
                      o = t.getFurthestPoint(n),
                      s = e.getFurthestPoint(n.negate());
                    e.contains(o) && r.push(o),
                      t.contains(s) && r.push(s),
                      0 === r.length && r.push(s);
                    var a = 2 === r.length ? r[0].add(r[1]).scale(0.5) : r[0];
                    return new Ht(t.collider, e.collider, n, a, n.normalize());
                  },
                };
              function Wt(t, e, n, i) {
                var r = t.sub(n),
                  o = e.dot(e),
                  s = e.dot(i),
                  a = i.dot(i),
                  c = e.dot(r),
                  h = i.dot(r),
                  u = o * a - s * s,
                  l = u,
                  p = u;
                if (0 === u || u <= 0.01) {
                  var d = c / s;
                  return new G(t, n.add(i.scale(d)));
                }
                var f = s * h - a * c,
                  y = o * h - s * c;
                return (
                  f < 0
                    ? ((f = 0), (y = h), (p = a))
                    : f > l && ((f = l), (y = h + s), (p = a)),
                  y < 0
                    ? ((y = 0),
                      -c < 0 ? (f = 0) : -c > o ? (f = l) : ((f = -c), (l = o)))
                    : y > p &&
                      ((y = p),
                      -c + s < 0
                        ? (f = 0)
                        : -c + s > o
                        ? (f = l)
                        : ((f = -c + s), (l = o))),
                  (f = Math.abs(f) < 0.001 ? 0 : f / l),
                  (y = Math.abs(y) < 0.001 ? 0 : y / p),
                  new G(t.add(e.scale(f)), n.add(i.scale(y)))
                );
              }
              var Nt,
                qt = {
                  PolygonPolygonClosestLine: function (t, e) {
                    var n = e.worldPos,
                      i = n.sub(t.worldPos),
                      r = i.negate(),
                      o = new V(t.worldPos, i),
                      s = new V(n, r),
                      a = t.rayCast(o).add(o.dir.scale(0.1)),
                      c = e.rayCast(s).add(s.dir.scale(0.1)),
                      h = t.getClosestFace(a),
                      u = e.getClosestFace(c);
                    return Wt(
                      h.face.begin,
                      h.face.getEdge(),
                      u.face.begin,
                      u.face.getEdge()
                    );
                  },
                  PolygonEdgeClosestLine: function (t, e) {
                    var n = e.worldPos.sub(t.worldPos),
                      i = new V(t.worldPos, n),
                      r = t.rayCast(i).add(i.dir.scale(0.1)),
                      o = t.getClosestFace(r),
                      s = o.face.begin,
                      a = o.face.getEdge(),
                      c = e.asLine();
                    return Wt(s, a, c.begin, c.getEdge());
                  },
                  PolygonCircleClosestLine: function (t, e) {
                    var n = e.worldPos,
                      i = n.sub(t.worldPos),
                      r = new V(t.worldPos, i.normalize()),
                      o = t.rayCast(r).add(r.dir.scale(0.1)),
                      s = t.getClosestFace(o),
                      a = s.face.begin,
                      c = s.face.getEdge(),
                      h =
                        (c.x * (n.x - a.x) + c.y * (n.y - a.y)) /
                        (c.x * c.x + c.y * c.y);
                    h > 1 ? (h = 1) : h < 0 && (h = 0);
                    var u =
                        Math.sqrt(
                          Math.pow(a.x + c.x * h - n.x, 2) +
                            Math.pow(a.y + c.y * h - n.y, 2)
                        ) - e.radius,
                      l = ((a.x + c.x * h - n.x) * e.radius) / (e.radius + u),
                      p = ((a.y + c.y * h - n.y) * e.radius) / (e.radius + u);
                    return new G(c.scale(h).add(a), new q(n.x + l, n.y + p));
                  },
                  CircleCircleClosestLine: function (t, e) {
                    var n = e.worldPos.sub(t.worldPos),
                      i = t.worldPos.sub(e.worldPos),
                      r = new V(t.worldPos, n),
                      o = new V(e.worldPos, i),
                      s = t.rayCast(r),
                      a = e.rayCast(o);
                    return new G(s, a);
                  },
                  CircleEdgeClosestLine: function (t, e) {
                    var n = t.worldPos,
                      i = e.asLine(),
                      r = i.begin,
                      o = i.getEdge(),
                      s =
                        (o.x * (n.x - r.x) + o.y * (n.y - r.y)) /
                        (o.x * o.x + o.y * o.y);
                    s > 1 ? (s = 1) : s < 0 && (s = 0);
                    var a =
                        Math.sqrt(
                          Math.pow(r.x + o.x * s - n.x, 2) +
                            Math.pow(r.y + o.y * s - n.y, 2)
                        ) - t.radius,
                      c = ((r.x + o.x * s - n.x) * t.radius) / (t.radius + a),
                      h = ((r.y + o.y * s - n.y) * t.radius) / (t.radius + a);
                    return new G(o.scale(s).add(r), new q(n.x + c, n.y + h));
                  },
                  EdgeEdgeClosestLine: function (t, e) {
                    var n = t.asLine(),
                      i = n.begin,
                      r = n.getEdge(),
                      o = e.asLine();
                    return Wt(i, r, o.begin, o.getEdge());
                  },
                },
                Vt = (function () {
                  function t(t) {
                    (this.offset = q.Zero),
                      (this.offset = t.offset || q.Zero),
                      (this.radius = t.radius || 0),
                      (this.collider = t.collider || null);
                  }
                  return (
                    Object.defineProperty(t.prototype, "worldPos", {
                      get: function () {
                        return this.collider && this.collider.body
                          ? this.collider.body.pos.add(this.offset)
                          : this.offset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.clone = function () {
                      return new t({
                        offset: this.offset.clone(),
                        radius: this.radius,
                        collider: null,
                      });
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        return this.collider && this.collider.body
                          ? this.offset.add(this.collider.body.pos)
                          : this.offset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.contains = function (t) {
                      var e = this.offset;
                      return (
                        this.collider &&
                          this.collider.body &&
                          (e = this.collider.body.pos),
                        e.distance(t) <= this.radius
                      );
                    }),
                    (t.prototype.rayCast = function (t, e) {
                      void 0 === e && (e = 1 / 0);
                      var n = this.center,
                        i = t.dir,
                        r = t.pos,
                        o = Math.sqrt(
                          Math.pow(i.dot(r.sub(n)), 2) -
                            Math.pow(r.sub(n).distance(), 2) +
                            Math.pow(this.radius, 2)
                        );
                      if (o < 0) return null;
                      var s = 0;
                      if (0 === o)
                        return (s = -i.dot(r.sub(n))) > 0 && s < e
                          ? t.getPoint(s)
                          : null;
                      var a = -i.dot(r.sub(n)) + o,
                        c = -i.dot(r.sub(n)) - o,
                        h = [];
                      a >= 0 && h.push(a), c >= 0 && h.push(c);
                      var u = Math.min.apply(Math, h);
                      return u <= e ? t.getPoint(u) : null;
                    }),
                    (t.prototype.getClosestLineBetween = function (e) {
                      if (e instanceof t)
                        return qt.CircleCircleClosestLine(this, e);
                      if (e instanceof Xt)
                        return qt.PolygonCircleClosestLine(e, this).flip();
                      if (e instanceof Gt)
                        return qt.CircleEdgeClosestLine(this, e).flip();
                      throw new Error(
                        "Polygon could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.collide = function (e) {
                      if (e instanceof t)
                        return Ut.CollideCircleCircle(this, e);
                      if (e instanceof Xt)
                        return Ut.CollideCirclePolygon(this, e);
                      if (e instanceof Gt) return Ut.CollideCircleEdge(this, e);
                      throw new Error(
                        "Circle could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.getFurthestPoint = function (t) {
                      return this.center.add(t.normalize().scale(this.radius));
                    }),
                    Object.defineProperty(t.prototype, "bounds", {
                      get: function () {
                        var t = q.Zero;
                        return (
                          this.collider &&
                            this.collider.body &&
                            (t = this.collider.body.pos),
                          new Qt(
                            this.offset.x + t.x - this.radius,
                            this.offset.y + t.y - this.radius,
                            this.offset.x + t.x + this.radius,
                            this.offset.y + t.y + this.radius
                          )
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "localBounds", {
                      get: function () {
                        return new Qt(
                          this.offset.x - this.radius,
                          this.offset.y - this.radius,
                          this.offset.x + this.radius,
                          this.offset.y + this.radius
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "axes", {
                      get: function () {
                        return null;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "inertia", {
                      get: function () {
                        return (
                          ((this.collider
                            ? this.collider.mass
                            : rt.defaultMass) *
                            this.radius *
                            this.radius) /
                          2
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.testSeparatingAxisTheorem = function (t) {
                      var e = t.axes,
                        n = t.center,
                        i = t.getFurthestPoint(this.offset.sub(n));
                      e.push(this.offset.sub(i).normalize());
                      for (
                        var r = Number.MAX_VALUE, o = null, s = -1, a = 0;
                        a < e.length;
                        a++
                      ) {
                        var c = t.project(e[a]),
                          h = this.project(e[a]),
                          u = c.getOverlap(h);
                        if (u <= 0) return null;
                        u < r && ((r = u), (o = e[a]), (s = a));
                      }
                      return s < 0 ? null : o.normalize().scale(r);
                    }),
                    (t.prototype.recalc = function () {}),
                    (t.prototype.project = function (t) {
                      var e = [],
                        n = this.center.dot(t);
                      return (
                        e.push(n),
                        e.push(n + this.radius),
                        e.push(n - this.radius),
                        new X(Math.min.apply(Math, e), Math.max.apply(Math, e))
                      );
                    }),
                    (t.prototype.draw = function (t, e, n) {
                      void 0 === e && (e = tt.Green),
                        void 0 === n && (n = q.Zero);
                      var i = n.add(this.offset);
                      t.beginPath(),
                        (t.fillStyle = e.toString()),
                        t.arc(i.x, i.y, this.radius, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fill();
                    }),
                    (t.prototype.debugDraw = function (t, e) {
                      void 0 === e && (e = tt.Green);
                      var n = this.collider.body,
                        i = n ? n.pos.add(this.offset) : this.offset,
                        r = n ? n.rotation : 0;
                      t.beginPath(),
                        (t.strokeStyle = e.toString()),
                        t.arc(i.x, i.y, this.radius, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(i.x, i.y),
                        t.lineTo(
                          Math.cos(r) * this.radius + i.x,
                          Math.sin(r) * this.radius + i.y
                        ),
                        t.closePath(),
                        t.stroke();
                    }),
                    t
                  );
                })(),
                Gt = (function () {
                  function t(t) {
                    (this.begin = t.begin || q.Zero),
                      (this.end = t.end || q.Zero),
                      (this.collider = t.collider || null),
                      (this.offset = this.center);
                  }
                  return (
                    (t.prototype.clone = function () {
                      return new t({
                        begin: this.begin.clone(),
                        end: this.end.clone(),
                        collider: null,
                      });
                    }),
                    Object.defineProperty(t.prototype, "worldPos", {
                      get: function () {
                        return this.collider && this.collider.body
                          ? this.collider.body.pos.add(this.offset)
                          : this.offset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        return this.begin
                          .average(this.end)
                          .add(this._getBodyPos());
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype._getBodyPos = function () {
                      var t = q.Zero;
                      return (
                        this.collider &&
                          this.collider.body &&
                          (t = this.collider.body.pos),
                        t
                      );
                    }),
                    (t.prototype._getTransformedBegin = function () {
                      var t = this.collider ? this.collider.body : null,
                        e = t ? t.rotation : 0;
                      return this.begin.rotate(e).add(this._getBodyPos());
                    }),
                    (t.prototype._getTransformedEnd = function () {
                      var t = this.collider ? this.collider.body : null,
                        e = t ? t.rotation : 0;
                      return this.end.rotate(e).add(this._getBodyPos());
                    }),
                    (t.prototype.getSlope = function () {
                      var t = this._getTransformedBegin(),
                        e = this._getTransformedEnd(),
                        n = t.distance(e);
                      return e.sub(t).scale(1 / n);
                    }),
                    (t.prototype.getLength = function () {
                      var t = this._getTransformedBegin(),
                        e = this._getTransformedEnd();
                      return t.distance(e);
                    }),
                    (t.prototype.contains = function () {
                      return !1;
                    }),
                    (t.prototype.rayCast = function (t, e) {
                      void 0 === e && (e = 1 / 0);
                      var n = this._getTransformedBegin().sub(t.pos);
                      if (
                        0 === t.dir.cross(this.getSlope()) &&
                        0 !== n.cross(t.dir)
                      )
                        return null;
                      var i = t.dir.cross(this.getSlope());
                      if (0 === i) return null;
                      var r = n.cross(this.getSlope()) / i;
                      if (r >= 0 && r <= e) {
                        var o = n.cross(t.dir) / i / this.getLength();
                        if (o >= 0 && o <= 1) return t.getPoint(r);
                      }
                      return null;
                    }),
                    (t.prototype.getClosestLineBetween = function (e) {
                      if (e instanceof Vt)
                        return qt.CircleEdgeClosestLine(e, this);
                      if (e instanceof Xt)
                        return qt.PolygonEdgeClosestLine(e, this).flip();
                      if (e instanceof t)
                        return qt.EdgeEdgeClosestLine(this, e);
                      throw new Error(
                        "Polygon could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.collide = function (e) {
                      if (e instanceof Vt) return Ut.CollideCircleEdge(e, this);
                      if (e instanceof Xt)
                        return Ut.CollidePolygonEdge(e, this);
                      if (e instanceof t) return Ut.CollideEdgeEdge();
                      throw new Error(
                        "Edge could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.getFurthestPoint = function (t) {
                      var e = this._getTransformedBegin(),
                        n = this._getTransformedEnd();
                      return t.dot(e) > 0 ? e : n;
                    }),
                    (t.prototype._boundsFromBeginEnd = function (t, e) {
                      return new Qt(
                        Math.min(t.x, e.x),
                        Math.min(t.y, e.y),
                        Math.max(t.x, e.x),
                        Math.max(t.y, e.y)
                      );
                    }),
                    Object.defineProperty(t.prototype, "bounds", {
                      get: function () {
                        var t = this._getTransformedBegin(),
                          e = this._getTransformedEnd();
                        return this._boundsFromBeginEnd(t, e);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "localBounds", {
                      get: function () {
                        return this._boundsFromBeginEnd(this.begin, this.end);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.asLine = function () {
                      return new G(
                        this._getTransformedBegin(),
                        this._getTransformedEnd()
                      );
                    }),
                    (t.prototype.asLocalLine = function () {
                      return new G(this.begin, this.end);
                    }),
                    Object.defineProperty(t.prototype, "axes", {
                      get: function () {
                        var t = this._getTransformedEnd()
                            .sub(this._getTransformedBegin())
                            .normal(),
                          e = [];
                        return (
                          e.push(t),
                          e.push(t.negate()),
                          e.push(t.normal()),
                          e.push(t.normal().negate()),
                          e
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "inertia", {
                      get: function () {
                        var t = this.collider
                            ? this.collider.mass
                            : rt.defaultMass,
                          e = this.end.sub(this.begin).distance() / 2;
                        return t * e * e;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.recalc = function () {}),
                    (t.prototype.project = function (t) {
                      for (
                        var e = [],
                          n = [
                            this._getTransformedBegin(),
                            this._getTransformedEnd(),
                          ],
                          i = n.length,
                          r = 0;
                        r < i;
                        r++
                      )
                        e.push(n[r].dot(t));
                      return new X(
                        Math.min.apply(Math, e),
                        Math.max.apply(Math, e)
                      );
                    }),
                    (t.prototype.draw = function (t, e, n) {
                      void 0 === e && (e = tt.Green),
                        void 0 === n && (n = q.Zero);
                      var i = this.begin.add(n),
                        r = this.end.add(n);
                      (t.strokeStyle = e.toString()),
                        t.beginPath(),
                        t.moveTo(i.x, i.y),
                        t.lineTo(r.x, r.y),
                        t.closePath(),
                        t.stroke();
                    }),
                    (t.prototype.debugDraw = function (t, e) {
                      void 0 === e && (e = tt.Red);
                      var n = this._getTransformedBegin(),
                        i = this._getTransformedEnd();
                      (t.strokeStyle = e.toString()),
                        t.beginPath(),
                        t.moveTo(n.x, n.y),
                        t.lineTo(i.x, i.y),
                        t.closePath(),
                        t.stroke();
                    }),
                    t
                  );
                })(),
                Xt = (function () {
                  function t(t) {
                    (this._transformedPoints = []),
                      (this._axes = []),
                      (this._sides = []),
                      (this.offset = t.offset || q.Zero);
                    var e = !!t.clockwiseWinding;
                    (this.points = (e ? t.points.reverse() : t.points) || []),
                      (this.collider = this.collider = t.collider || null),
                      this._calculateTransformation();
                  }
                  return (
                    (t.prototype.clone = function () {
                      return new t({
                        offset: this.offset.clone(),
                        points: this.points.map(function (t) {
                          return t.clone();
                        }),
                        collider: null,
                      });
                    }),
                    Object.defineProperty(t.prototype, "worldPos", {
                      get: function () {
                        return this.collider && this.collider.body
                          ? this.collider.body.pos.add(this.offset)
                          : this.offset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        var t = this.collider ? this.collider.body : null;
                        return t ? t.pos.add(this.offset) : this.offset;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype._calculateTransformation = function () {
                      var t = this.collider ? this.collider.body : null,
                        e = t ? t.pos.add(this.offset) : this.offset,
                        n = t ? t.rotation : 0,
                        i = t ? t.scale : q.One,
                        r = this.points.length;
                      this._transformedPoints.length = 0;
                      for (var o = 0; o < r; o++)
                        this._transformedPoints[o] = this.points[o]
                          .scale(i)
                          .rotate(n)
                          .add(e);
                    }),
                    (t.prototype.getTransformedPoints = function () {
                      return (
                        (this._transformedPoints.length &&
                          (!this.collider ||
                            !this.collider.body ||
                            (this.collider.body.oldPos.equals(
                              this.collider.body.pos
                            ) &&
                              this.collider.body.oldRotation ===
                                this.collider.body.rotation &&
                              this.collider.body.oldScale ===
                                this.collider.body.scale))) ||
                          this._calculateTransformation(),
                        this._transformedPoints
                      );
                    }),
                    (t.prototype.getSides = function () {
                      if (this._sides.length) return this._sides;
                      for (
                        var t = [],
                          e = this.getTransformedPoints(),
                          n = e.length,
                          i = 0;
                        i < n;
                        i++
                      )
                        t.push(new G(e[i], e[(i - 1 + n) % n]));
                      return (this._sides = t), this._sides;
                    }),
                    (t.prototype.recalc = function () {
                      (this._sides.length = 0),
                        (this._axes.length = 0),
                        (this._transformedPoints.length = 0),
                        this.getTransformedPoints(),
                        this.getSides();
                    }),
                    (t.prototype.contains = function (t) {
                      var e = new V(t, new q(1, 0));
                      return (
                        this.getSides().reduce(function (t, n) {
                          return e.intersect(n) >= 0 ? t + 1 : t;
                        }, 0) %
                          2 !=
                        0
                      );
                    }),
                    (t.prototype.getClosestLineBetween = function (e) {
                      if (e instanceof Vt)
                        return qt.PolygonCircleClosestLine(this, e);
                      if (e instanceof t)
                        return qt.PolygonPolygonClosestLine(this, e);
                      if (e instanceof Gt)
                        return qt.PolygonEdgeClosestLine(this, e);
                      throw new Error(
                        "Polygon could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.collide = function (e) {
                      if (e instanceof Vt)
                        return Ut.CollideCirclePolygon(e, this);
                      if (e instanceof t)
                        return Ut.CollidePolygonPolygon(this, e);
                      if (e instanceof Gt)
                        return Ut.CollidePolygonEdge(this, e);
                      throw new Error(
                        "Polygon could not collide with unknown CollisionShape " +
                          typeof e
                      );
                    }),
                    (t.prototype.getFurthestPoint = function (t) {
                      for (
                        var e = this.getTransformedPoints(),
                          n = null,
                          i = -Number.MAX_VALUE,
                          r = 0;
                        r < e.length;
                        r++
                      ) {
                        var o = t.dot(e[r]);
                        o > i && ((i = o), (n = e[r]));
                      }
                      return n;
                    }),
                    (t.prototype.getClosestFace = function (t) {
                      for (
                        var e = this.getSides(),
                          n = Number.POSITIVE_INFINITY,
                          i = -1,
                          r = -1,
                          o = 0;
                        o < e.length;
                        o++
                      ) {
                        var s = e[o].distanceToPoint(t);
                        s < n && ((n = s), (i = o), (r = s));
                      }
                      return -1 !== i
                        ? { distance: e[i].normal().scale(r), face: e[i] }
                        : null;
                    }),
                    Object.defineProperty(t.prototype, "bounds", {
                      get: function () {
                        var t = this.getTransformedPoints();
                        return Qt.fromPoints(t);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "localBounds", {
                      get: function () {
                        return Qt.fromPoints(this.points);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "inertia", {
                      get: function () {
                        for (
                          var t = this.collider
                              ? this.collider.mass
                              : rt.defaultMass,
                            e = 0,
                            n = 0,
                            i = 0;
                          i < this.points.length;
                          i++
                        ) {
                          var r = (i + 1) % this.points.length,
                            o = this.points[r].cross(this.points[i]);
                          (e +=
                            o *
                            (this.points[i].dot(this.points[i]) +
                              this.points[i].dot(this.points[r]) +
                              this.points[r].dot(this.points[r]))),
                            (n += o);
                        }
                        return (t / 6) * (e / n);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.rayCast = function (t, e) {
                      void 0 === e && (e = 1 / 0);
                      for (
                        var n = this.getSides(),
                          i = n.length,
                          r = Number.MAX_VALUE,
                          o = -1,
                          s = 0;
                        s < i;
                        s++
                      ) {
                        var a = t.intersect(n[s]);
                        a >= 0 && a < r && a <= e && ((r = a), (o = s));
                      }
                      return o >= 0 ? t.getPoint(r) : null;
                    }),
                    Object.defineProperty(t.prototype, "axes", {
                      get: function () {
                        if (this._axes.length) return this._axes;
                        for (
                          var t = [],
                            e = this.getTransformedPoints(),
                            n = e.length,
                            i = 0;
                          i < n;
                          i++
                        )
                          t.push(e[i].sub(e[(i + 1) % n]).normal());
                        return (this._axes = t), this._axes;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.testSeparatingAxisTheorem = function (t) {
                      for (
                        var e = t,
                          n = this.axes.concat(e.axes),
                          i = Number.MAX_VALUE,
                          r = null,
                          o = -1,
                          s = 0;
                        s < n.length;
                        s++
                      ) {
                        var a = this.project(n[s]),
                          c = e.project(n[s]),
                          h = a.getOverlap(c);
                        if (h <= 0) return null;
                        h < i && ((i = h), (r = n[s]), (o = s));
                      }
                      return -1 === o ? null : r.normalize().scale(i);
                    }),
                    (t.prototype.project = function (t) {
                      for (
                        var e = this.getTransformedPoints(),
                          n = e.length,
                          i = Number.MAX_VALUE,
                          r = -Number.MAX_VALUE,
                          o = 0;
                        o < n;
                        o++
                      ) {
                        var s = e[o].dot(t);
                        (i = Math.min(i, s)), (r = Math.max(r, s));
                      }
                      return new X(i, r);
                    }),
                    (t.prototype.draw = function (t, e, n) {
                      void 0 === e && (e = tt.Green),
                        void 0 === n && (n = q.Zero),
                        t.beginPath(),
                        (t.fillStyle = e.toString());
                      var i = n.add(this.offset),
                        r = this.points[0].add(i);
                      t.moveTo(r.x, r.y),
                        this.points
                          .map(function (t) {
                            return t.add(i);
                          })
                          .forEach(function (e) {
                            t.lineTo(e.x, e.y);
                          }),
                        t.lineTo(r.x, r.y),
                        t.closePath(),
                        t.fill();
                    }),
                    (t.prototype.debugDraw = function (t, e) {
                      void 0 === e && (e = tt.Red),
                        t.beginPath(),
                        (t.strokeStyle = e.toString());
                      var n = this.getTransformedPoints()[0];
                      t.moveTo(n.x, n.y),
                        this.getTransformedPoints().forEach(function (e) {
                          t.lineTo(e.x, e.y);
                        }),
                        t.lineTo(n.x, n.y),
                        t.closePath(),
                        t.stroke();
                    }),
                    t
                  );
                })(),
                Qt = (function () {
                  function t(t, e, n, i) {
                    void 0 === t && (t = 0),
                      void 0 === e && (e = 0),
                      void 0 === n && (n = 0),
                      void 0 === i && (i = 0),
                      "object" == typeof t
                        ? ((this.left = t.left),
                          (this.top = t.top),
                          (this.right = t.right),
                          (this.bottom = t.bottom))
                        : "number" == typeof t &&
                          ((this.left = t),
                          (this.top = e),
                          (this.right = n),
                          (this.bottom = i));
                  }
                  return (
                    (t.getSideFromIntersection = function (t) {
                      return t && t
                        ? Math.abs(t.x) > Math.abs(t.y)
                          ? t.x < 0
                            ? p.Right
                            : p.Left
                          : t.y < 0
                          ? p.Bottom
                          : p.Top
                        : p.None;
                    }),
                    (t.fromPoints = function (e) {
                      for (
                        var n = 1 / 0, i = 1 / 0, r = -1 / 0, o = -1 / 0, s = 0;
                        s < e.length;
                        s++
                      )
                        e[s].x < n && (n = e[s].x),
                          e[s].x > r && (r = e[s].x),
                          e[s].y < i && (i = e[s].y),
                          e[s].y > o && (o = e[s].y);
                      return new t(n, i, r, o);
                    }),
                    (t.fromDimension = function (e, n, i, r) {
                      return (
                        void 0 === i && (i = q.Half),
                        void 0 === r && (r = q.Zero),
                        new t(
                          -e * i.x + r.x,
                          -n * i.y + r.y,
                          e - e * i.x + r.x,
                          n - n * i.y + r.y
                        )
                      );
                    }),
                    Object.defineProperty(t.prototype, "width", {
                      get: function () {
                        return this.right - this.left;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "height", {
                      get: function () {
                        return this.bottom - this.top;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        return new q(
                          (this.left + this.right) / 2,
                          (this.top + this.bottom) / 2
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.translate = function (e) {
                      return new t(
                        this.left + e.x,
                        this.top + e.y,
                        this.right + e.x,
                        this.bottom + e.y
                      );
                    }),
                    (t.prototype.rotate = function (e, n) {
                      void 0 === n && (n = q.Zero);
                      var i = this.getPoints().map(function (t) {
                        return t.rotate(e, n);
                      });
                      return t.fromPoints(i);
                    }),
                    (t.prototype.scale = function (e, n) {
                      void 0 === n && (n = q.Zero);
                      var i = this.translate(n);
                      return new t(
                        i.left * e.x,
                        i.top * e.y,
                        i.right * e.x,
                        i.bottom * e.y
                      );
                    }),
                    (t.prototype.getPerimeter = function () {
                      return 2 * (this.width + this.height);
                    }),
                    (t.prototype.getPoints = function () {
                      var t = [];
                      return (
                        t.push(new q(this.left, this.top)),
                        t.push(new q(this.right, this.top)),
                        t.push(new q(this.right, this.bottom)),
                        t.push(new q(this.left, this.bottom)),
                        t
                      );
                    }),
                    (t.prototype.toPolygon = function (t) {
                      var e = null;
                      return (
                        t && t.body && t.body.collider && (e = t.body.collider),
                        new Xt({
                          collider: e,
                          points: this.getPoints(),
                          offset: q.Zero,
                        })
                      );
                    }),
                    (t.prototype.rayCast = function (t, e) {
                      void 0 === e && (e = 1 / 0);
                      var n = -1 / 0,
                        i = 1 / 0,
                        r = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x,
                        o = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y,
                        s = (this.left - t.pos.x) * r,
                        a = (this.right - t.pos.x) * r;
                      (n = Math.min(s, a)), (i = Math.max(s, a));
                      var c = (this.top - t.pos.y) * o,
                        h = (this.bottom - t.pos.y) * o;
                      return (
                        (n = Math.max(n, Math.min(c, h))),
                        (i = Math.min(i, Math.max(c, h))) >= Math.max(0, n) &&
                          n < e
                      );
                    }),
                    (t.prototype.rayCastTime = function (t, e) {
                      void 0 === e && (e = 1 / 0);
                      var n = -1 / 0,
                        i = 1 / 0,
                        r = 0 === t.dir.x ? Number.MAX_VALUE : 1 / t.dir.x,
                        o = 0 === t.dir.y ? Number.MAX_VALUE : 1 / t.dir.y,
                        s = (this.left - t.pos.x) * r,
                        a = (this.right - t.pos.x) * r;
                      (n = Math.min(s, a)), (i = Math.max(s, a));
                      var c = (this.top - t.pos.y) * o,
                        h = (this.bottom - t.pos.y) * o;
                      return (
                        (n = Math.max(n, Math.min(c, h))),
                        (i = Math.min(i, Math.max(c, h))) >= Math.max(0, n) &&
                        n < e
                          ? n
                          : -1
                      );
                    }),
                    (t.prototype.contains = function (e) {
                      return e instanceof q
                        ? this.left <= e.x &&
                            this.top <= e.y &&
                            this.bottom >= e.y &&
                            this.right >= e.x
                        : e instanceof t &&
                            this.left < e.left &&
                            this.top < e.top &&
                            e.bottom < this.bottom &&
                            e.right < this.right;
                    }),
                    (t.prototype.combine = function (e) {
                      return new t(
                        Math.min(this.left, e.left),
                        Math.min(this.top, e.top),
                        Math.max(this.right, e.right),
                        Math.max(this.bottom, e.bottom)
                      );
                    }),
                    Object.defineProperty(t.prototype, "dimensions", {
                      get: function () {
                        return new q(this.width, this.height);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.intersect = function (t) {
                      var e = this.combine(t);
                      if (
                        e.width < t.width + this.width &&
                        e.height < t.height + this.height &&
                        !e.dimensions.equals(t.dimensions) &&
                        !e.dimensions.equals(this.dimensions)
                      ) {
                        var n = 0;
                        n =
                          this.right >= t.left && this.right <= t.right
                            ? t.left - this.right
                            : t.right - this.left;
                        var i = 0;
                        return (
                          (i =
                            this.top <= t.bottom && this.top >= t.top
                              ? t.bottom - this.top
                              : t.top - this.bottom),
                          Math.abs(n) < Math.abs(i) ? new q(n, 0) : new q(0, i)
                        );
                      }
                      return e.dimensions.equals(t.dimensions) ||
                        e.dimensions.equals(this.dimensions)
                        ? ((n = 0),
                          (n =
                            this.width - t.width >= 0
                              ? this.right - t.right <= t.left - this.left
                                ? t.left - this.right
                                : t.right - this.left
                              : t.right - this.right <= this.left - t.left
                              ? this.left - t.right
                              : this.right - t.left),
                          (i = 0),
                          (i =
                            this.height - t.height >= 0
                              ? this.bottom - t.bottom <= t.top - this.top
                                ? t.top - this.bottom
                                : t.bottom - this.top
                              : t.bottom - this.bottom <= this.top - t.top
                              ? this.top - t.bottom
                              : this.bottom - t.top),
                          Math.abs(n) < Math.abs(i) ? new q(n, 0) : new q(0, i))
                        : null;
                    }),
                    (t.prototype.intersectWithSide = function (e) {
                      var n = this.intersect(e);
                      return t.getSideFromIntersection(n);
                    }),
                    (t.prototype.debugDraw = function (t, e) {
                      void 0 === e && (e = tt.Yellow),
                        (t.strokeStyle = e.toString()),
                        t.strokeRect(
                          this.left,
                          this.top,
                          this.width,
                          this.height
                        );
                    }),
                    t
                  );
                })(),
                Zt = function () {
                  return (Zt =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                };
              !(function (t) {
                (t.FullScreen = "FullScreen"),
                  (t.Container = "Container"),
                  (t.Fixed = "Fixed"),
                  (t.Position = "Position");
              })(Nt || (Nt = {}));
              var Kt = (function () {
                  function t() {}
                  return (
                    Object.defineProperty(t, "SVGA", {
                      get: function () {
                        return { width: 800, height: 600 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Standard", {
                      get: function () {
                        return { width: 1920, height: 1080 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "Atari2600", {
                      get: function () {
                        return { width: 160, height: 192 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "GameBoy", {
                      get: function () {
                        return { width: 160, height: 144 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "GameBoyAdvance", {
                      get: function () {
                        return { width: 240, height: 160 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "NintendoDS", {
                      get: function () {
                        return { width: 256, height: 192 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "NES", {
                      get: function () {
                        return { width: 256, height: 224 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t, "SNES", {
                      get: function () {
                        return { width: 256, height: 244 };
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    t
                  );
                })(),
                Yt = (function () {
                  function t(t) {
                    var e,
                      n,
                      i,
                      r = this;
                    (this._antialiasing = !0),
                      (this._resolutionStack = []),
                      (this._viewportStack = []),
                      (this._pixelRatio = null),
                      (this._isFullScreen = !1),
                      (this._isDisposed = !1),
                      (this._logger = R.getInstance()),
                      (this._pixelRatioChangeHandler = function () {
                        r._logger.debug(
                          "Pixel Ratio Change",
                          window.devicePixelRatio
                        ),
                          r.applyResolutionAndViewport();
                      }),
                      (this._windowResizeHandler = function () {
                        var t =
                          r.displayMode === Nt.Container
                            ? r.canvas.parentElement || document.body
                            : window;
                        r._logger.debug("View port resized"),
                          r._setHeightByDisplayMode(t),
                          r._logger.info(
                            "parent.clientHeight " + t.clientHeight
                          ),
                          r.applyResolutionAndViewport();
                      }),
                      (this.viewport = t.viewport),
                      (this.resolution =
                        null !== (e = t.resolution) && void 0 !== e
                          ? e
                          : Zt({}, this.viewport)),
                      (this._displayMode =
                        null !== (n = t.displayMode) && void 0 !== n
                          ? n
                          : Nt.Fixed),
                      (this._canvas = t.canvas),
                      (this._ctx = t.context),
                      (this._antialiasing =
                        null !== (i = t.antialiasing) && void 0 !== i
                          ? i
                          : this._antialiasing),
                      (this._browser = t.browser),
                      (this._position = t.position),
                      (this._pixelRatio = t.pixelRatio),
                      this._applyDisplayMode(),
                      (this._mediaQueryList = this._browser.window.nativeComponent.matchMedia(
                        "(resolution: " + window.devicePixelRatio + "dppx)"
                      )),
                      this._mediaQueryList.addEventListener(
                        "change",
                        this._pixelRatioChangeHandler
                      );
                  }
                  return (
                    (t.prototype.dispose = function () {
                      this._isDisposed ||
                        ((this._isDisposed = !0),
                        this._browser.window.off(
                          "resize",
                          this._windowResizeHandler
                        ),
                        this._mediaQueryList.removeEventListener(
                          "change",
                          this._pixelRatioChangeHandler
                        ));
                    }),
                    Object.defineProperty(t.prototype, "pixelRatio", {
                      get: function () {
                        return this._pixelRatio
                          ? this._pixelRatio
                          : window.devicePixelRatio < 1
                          ? 1
                          : window.devicePixelRatio || 1;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "isHiDpi", {
                      get: function () {
                        return 1 !== this.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "displayMode", {
                      get: function () {
                        return this._displayMode;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "canvas", {
                      get: function () {
                        return this._canvas;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "resolution", {
                      get: function () {
                        return this._resolution;
                      },
                      set: function (t) {
                        this._resolution = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "viewport", {
                      get: function () {
                        return this._viewport
                          ? this._viewport
                          : this._resolution;
                      },
                      set: function (t) {
                        this._viewport = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "scaledWidth", {
                      get: function () {
                        return this._resolution.width * this.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "scaledHeight", {
                      get: function () {
                        return this._resolution.height * this.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.setCurrentCamera = function (t) {
                      this._camera = t;
                    }),
                    (t.prototype.pushResolutionAndViewport = function () {
                      this._resolutionStack.push(this.resolution),
                        this._viewportStack.push(this.viewport),
                        (this.resolution = Zt({}, this.resolution)),
                        (this.viewport = Zt({}, this.viewport));
                    }),
                    (t.prototype.popResolutionAndViewport = function () {
                      (this.resolution = this._resolutionStack.pop()),
                        (this.viewport = this._viewportStack.pop());
                    }),
                    (t.prototype.applyResolutionAndViewport = function () {
                      (this._canvas.width = this.scaledWidth),
                        (this._canvas.height = this.scaledHeight),
                        (this._canvas.style.imageRendering = this._antialiasing
                          ? "auto"
                          : "pixelated"),
                        (this._canvas.style.width = this.viewport.width + "px"),
                        (this._canvas.style.height =
                          this.viewport.height + "px"),
                        this._ctx.resetTransform(),
                        this._ctx.scale(this.pixelRatio, this.pixelRatio),
                        (this._ctx.imageSmoothingEnabled = this._antialiasing);
                    }),
                    Object.defineProperty(t.prototype, "antialiasing", {
                      get: function () {
                        return this._antialiasing;
                      },
                      set: function (t) {
                        (this._antialiasing = t),
                          (this._ctx.imageSmoothingEnabled = this._antialiasing);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "isFullScreen", {
                      get: function () {
                        return this._isFullScreen;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.goFullScreen = function () {
                      var t = this;
                      return this._canvas.requestFullscreen().then(function () {
                        t._isFullScreen = !0;
                      });
                    }),
                    (t.prototype.exitFullScreen = function () {
                      var t = this;
                      return document.exitFullscreen().then(function () {
                        t._isFullScreen = !1;
                      });
                    }),
                    (t.prototype.screenToWorldCoordinates = function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o = t.x,
                        s = t.y;
                      return (
                        (o = (o / this.viewport.width) * this.drawWidth),
                        (s = (s / this.viewport.height) * this.drawHeight),
                        (o -= this.halfDrawWidth),
                        (s -= this.halfDrawHeight),
                        (o +=
                          null !==
                            (n =
                              null === (e = this._camera) || void 0 === e
                                ? void 0
                                : e.x) && void 0 !== n
                            ? n
                            : 0),
                        (s +=
                          null !==
                            (r =
                              null === (i = this._camera) || void 0 === i
                                ? void 0
                                : i.y) && void 0 !== r
                            ? r
                            : 0),
                        new q(Math.floor(o), Math.floor(s))
                      );
                    }),
                    (t.prototype.worldToScreenCoordinates = function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o = t.x,
                        s = t.y;
                      return (
                        (o -=
                          null !==
                            (n =
                              null === (e = this._camera) || void 0 === e
                                ? void 0
                                : e.x) && void 0 !== n
                            ? n
                            : 0),
                        (s -=
                          null !==
                            (r =
                              null === (i = this._camera) || void 0 === i
                                ? void 0
                                : i.y) && void 0 !== r
                            ? r
                            : 0),
                        (o += this.halfDrawWidth),
                        (s += this.halfDrawHeight),
                        (o = (o * this.viewport.width) / this.drawWidth),
                        (s = (s * this.viewport.height) / this.drawHeight),
                        new q(Math.floor(o), Math.floor(s))
                      );
                    }),
                    (t.prototype.getWorldBounds = function () {
                      var t = this.screenToWorldCoordinates(q.Zero).x,
                        e = this.screenToWorldCoordinates(q.Zero).y,
                        n = t + this.drawWidth,
                        i = e + this.drawHeight;
                      return new Qt(t, e, n, i);
                    }),
                    Object.defineProperty(t.prototype, "canvasWidth", {
                      get: function () {
                        return this.canvas.width;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "halfCanvasWidth", {
                      get: function () {
                        return this.canvas.width / 2;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "canvasHeight", {
                      get: function () {
                        return this.canvas.height;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "halfCanvasHeight", {
                      get: function () {
                        return this.canvas.height / 2;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "drawWidth", {
                      get: function () {
                        return this._camera
                          ? this.scaledWidth / this._camera.z / this.pixelRatio
                          : this.scaledWidth / this.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "halfDrawWidth", {
                      get: function () {
                        return this.drawWidth / 2;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "drawHeight", {
                      get: function () {
                        return this._camera
                          ? this.scaledHeight / this._camera.z / this.pixelRatio
                          : this.scaledHeight / this.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "halfDrawHeight", {
                      get: function () {
                        return this.drawHeight / 2;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype._applyDisplayMode = function () {
                      if (
                        this.displayMode === Nt.FullScreen ||
                        this.displayMode === Nt.Container
                      ) {
                        var t =
                          this.displayMode === Nt.Container
                            ? this.canvas.parentElement || document.body
                            : window;
                        this._setHeightByDisplayMode(t),
                          this._browser.window.on(
                            "resize",
                            this._windowResizeHandler
                          );
                      } else
                        this.displayMode === Nt.Position &&
                          this._initializeDisplayModePosition(this._position);
                    }),
                    (t.prototype._setHeightByDisplayMode = function (t) {
                      this.displayMode === Nt.Container &&
                        ((this.resolution = {
                          width: t.clientWidth,
                          height: t.clientHeight,
                        }),
                        (this.viewport = this.resolution)),
                        this.displayMode === Nt.FullScreen &&
                          ((document.body.style.margin = "0px"),
                          (document.body.style.overflow = "hidden"),
                          (this.resolution = {
                            width: t.innerWidth,
                            height: t.innerHeight,
                          }),
                          (this.viewport = this.resolution));
                    }),
                    (t.prototype._initializeDisplayModePosition = function (t) {
                      if (!t)
                        throw new Error(
                          "DisplayMode of Position was selected but no position option was given"
                        );
                      if (
                        ((this.canvas.style.display = "block"),
                        (this.canvas.style.position = "absolute"),
                        "string" == typeof t)
                      ) {
                        var e = t.split(" ");
                        switch (e[0]) {
                          case "top":
                            this.canvas.style.top = "0px";
                            break;
                          case "bottom":
                            this.canvas.style.bottom = "0px";
                            break;
                          case "middle":
                            this.canvas.style.top = "50%";
                            var n = -this.halfDrawHeight;
                            this.canvas.style.marginTop = n.toString();
                            break;
                          default:
                            throw new Error("Invalid Position Given");
                        }
                        if (e[1])
                          switch (e[1]) {
                            case "left":
                              this.canvas.style.left = "0px";
                              break;
                            case "right":
                              this.canvas.style.right = "0px";
                              break;
                            case "center":
                              this.canvas.style.left = "50%";
                              var i = -this.halfDrawWidth;
                              this.canvas.style.marginLeft = i.toString();
                              break;
                            default:
                              throw new Error("Invalid Position Given");
                          }
                      } else
                        t.top &&
                          ("number" == typeof t.top
                            ? (this.canvas.style.top = t.top.toString() + "px")
                            : (this.canvas.style.top = t.top)),
                          t.right &&
                            ("number" == typeof t.right
                              ? (this.canvas.style.right =
                                  t.right.toString() + "px")
                              : (this.canvas.style.right = t.right)),
                          t.bottom &&
                            ("number" == typeof t.bottom
                              ? (this.canvas.style.bottom =
                                  t.bottom.toString() + "px")
                              : (this.canvas.style.bottom = t.bottom)),
                          t.left &&
                            ("number" == typeof t.left
                              ? (this.canvas.style.left =
                                  t.left.toString() + "px")
                              : (this.canvas.style.left = t.left));
                    }),
                    t
                  );
                })(),
                Jt = (function () {
                  function t(t) {
                    (this._handlers = {}),
                      (this._wiredEventDispatchers = []),
                      (this._target = t);
                  }
                  return (
                    (t.prototype.clear = function () {
                      (this._handlers = {}), (this._wiredEventDispatchers = []);
                    }),
                    (t.prototype.emit = function (t, e) {
                      if (t) {
                        t = t.toLowerCase();
                        var n,
                          i,
                          r = this._target;
                        if (
                          (e || (e = new at()),
                          (e.target = r),
                          this._handlers[t])
                        )
                          for (n = 0, i = this._handlers[t].length; n < i; n++)
                            this._handlers[t][n].call(r, e);
                        for (
                          n = 0, i = this._wiredEventDispatchers.length;
                          n < i;
                          n++
                        )
                          this._wiredEventDispatchers[n].emit(t, e);
                      }
                    }),
                    (t.prototype.on = function (t, e) {
                      (t = t.toLowerCase()),
                        this._handlers[t] || (this._handlers[t] = []),
                        this._handlers[t].push(e),
                        "unsubscribe" !== t &&
                          "subscribe" !== t &&
                          this.emit("subscribe", new Et(t, e));
                    }),
                    (t.prototype.off = function (t, e) {
                      t = t.toLowerCase();
                      var n = this._handlers[t];
                      if (n)
                        if (e) {
                          var i = n.indexOf(e);
                          this._handlers[t].splice(i, 1);
                        } else this._handlers[t].length = 0;
                      "unsubscribe" !== t &&
                        "subscribe" !== t &&
                        this.emit("unsubscribe", new St(t, e));
                    }),
                    (t.prototype.once = function (t, e) {
                      var n = this;
                      this.on(t, function (i) {
                        var r = i || new at();
                        (r.target = r.target || n._target),
                          n.off(t, e),
                          e.call(r.target, r);
                      });
                    }),
                    (t.prototype.wire = function (t) {
                      t._wiredEventDispatchers.push(this);
                    }),
                    (t.prototype.unwire = function (t) {
                      var e = t._wiredEventDispatchers.indexOf(this);
                      e > -1 && t._wiredEventDispatchers.splice(e, 1);
                    }),
                    t
                  );
                })(),
                $t = (function () {
                  function t() {
                    this.eventDispatcher = new Jt(this);
                  }
                  return (
                    (t.prototype.on = function (t, e) {
                      this.eventDispatcher.on(t, e);
                    }),
                    (t.prototype.off = function (t, e) {
                      this.eventDispatcher.off(t, e);
                    }),
                    (t.prototype.emit = function (t, e) {
                      this.eventDispatcher.emit(t, e);
                    }),
                    (t.prototype.once = function (t, e) {
                      this.eventDispatcher.once(t, e);
                    }),
                    t
                  );
                })(),
                te = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                ee = (function (t) {
                  function e(e, n, i) {
                    void 0 === i && (i = !0);
                    var r = t.call(this) || this;
                    return (
                      (r.path = e),
                      (r.responseType = n),
                      (r.bustCache = i),
                      (r.data = null),
                      (r.logger = R.getInstance()),
                      (r.arrayBuffer = null),
                      (r.onprogress = function () {}),
                      (r.oncomplete = function () {}),
                      (r.onerror = function () {}),
                      r
                    );
                  }
                  return (
                    te(e, t),
                    (e.prototype.isLoaded = function () {
                      return null !== this.data;
                    }),
                    (e.prototype.wireEngine = function (t) {}),
                    (e.prototype._cacheBust = function (t) {
                      return (
                        /\?\w*=\w*/.test(t)
                          ? (t += "&__=" + Date.now())
                          : (t += "?__=" + Date.now()),
                        t
                      );
                    }),
                    (e.prototype._start = function () {
                      this.logger.debug(
                        "Started loading resource " + this.path
                      );
                    }),
                    (e.prototype.load = function () {
                      var t = this,
                        e = new d();
                      if (null !== this.data)
                        return (
                          this.logger.debug(
                            "Already have data for resource",
                            this.path
                          ),
                          e.resolve(this.data),
                          this.oncomplete(),
                          e
                        );
                      var n = new XMLHttpRequest();
                      return (
                        n.open(
                          "GET",
                          this.bustCache
                            ? this._cacheBust(this.path)
                            : this.path,
                          !0
                        ),
                        (n.responseType = this.responseType),
                        (n.onloadstart = function () {
                          t._start();
                        }),
                        (n.onprogress = this.onprogress),
                        (n.onerror = this.onerror),
                        (n.onload = function () {
                          if (0 !== n.status && 200 !== n.status)
                            return (
                              t.logger.error(
                                "Failed to load resource ",
                                t.path,
                                " server responded with error code",
                                n.status
                              ),
                              t.onerror(n.response),
                              void e.resolve(n.response)
                            );
                          (t.data = t.processData(n.response)),
                            t.oncomplete(),
                            t.logger.debug(
                              "Completed loading resource",
                              t.path
                            ),
                            e.resolve(t.data);
                        }),
                        n.send(),
                        e
                      );
                    }),
                    (e.prototype.getData = function () {
                      return this.data;
                    }),
                    (e.prototype.getArrayData = function () {
                      return this.arrayBuffer;
                    }),
                    (e.prototype.setData = function (t) {
                      this.data = this.processData(t);
                    }),
                    (e.prototype.processData = function (t) {
                      return "blob" === this.responseType
                        ? URL.createObjectURL(t)
                        : t;
                    }),
                    e
                  );
                })($t),
                ne = (function () {
                  function t() {}
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data,
                        o = (r[i + 0] + r[i + 1] + r[i + 2]) / 3;
                      (r[i + 0] = o), (r[i + 1] = o), (r[i + 2] = o);
                    }),
                    t
                  );
                })(),
                ie = (function () {
                  function t() {}
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data;
                      (r[i + 0] = 255 - r[i + 0]),
                        (r[i + 1] = 255 - r[i + 1]),
                        (r[i + 2] = 255 - r[i + 2]);
                    }),
                    t
                  );
                })(),
                re = (function () {
                  function t(t) {
                    this.opacity = t;
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data;
                      0 !== r[i + 3] &&
                        (r[i + 3] = Math.round(this.opacity * r[i + 3]));
                    }),
                    t
                  );
                })(),
                oe = (function () {
                  function t(t) {
                    this.color = t;
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data;
                      0 !== r[i + 3] &&
                        ((r[i + 0] = (r[i + 0] + this.color.r) / 2),
                        (r[i + 1] = (r[i + 1] + this.color.g) / 2),
                        (r[i + 2] = (r[i + 2] + this.color.b) / 2));
                    }),
                    t
                  );
                })(),
                se = (function () {
                  function t(t) {
                    void 0 === t && (t = 0.1), (this.factor = t);
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data,
                        o = tt
                          .fromRGB(r[i + 0], r[i + 1], r[i + 2], r[i + 3])
                          .lighten(this.factor);
                      (r[i + 0] = o.r),
                        (r[i + 1] = o.g),
                        (r[i + 2] = o.b),
                        (r[i + 3] = o.a);
                    }),
                    t
                  );
                })(),
                ae = (function () {
                  function t(t) {
                    void 0 === t && (t = 0.1), (this.factor = t);
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data,
                        o = tt
                          .fromRGB(r[i + 0], r[i + 1], r[i + 2], r[i + 3])
                          .darken(this.factor);
                      (r[i + 0] = o.r),
                        (r[i + 1] = o.g),
                        (r[i + 2] = o.b),
                        (r[i + 3] = o.a);
                    }),
                    t
                  );
                })(),
                ce = (function () {
                  function t(t) {
                    void 0 === t && (t = 0.1), (this.factor = t);
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data,
                        o = tt
                          .fromRGB(r[i + 0], r[i + 1], r[i + 2], r[i + 3])
                          .saturate(this.factor);
                      (r[i + 0] = o.r),
                        (r[i + 1] = o.g),
                        (r[i + 2] = o.b),
                        (r[i + 3] = o.a);
                    }),
                    t
                  );
                })(),
                he = (function () {
                  function t(t) {
                    void 0 === t && (t = 0.1), (this.factor = t);
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data,
                        o = tt
                          .fromRGB(r[i + 0], r[i + 1], r[i + 2], r[i + 3])
                          .desaturate(this.factor);
                      (r[i + 0] = o.r),
                        (r[i + 1] = o.g),
                        (r[i + 2] = o.b),
                        (r[i + 3] = o.a);
                    }),
                    t
                  );
                })(),
                ue = (function () {
                  function t(t) {
                    this.color = t;
                  }
                  return (
                    (t.prototype.updatePixel = function (t, e, n) {
                      var i = 4 * (t + e * n.width),
                        r = n.data;
                      0 !== r[i + 3] &&
                        ((r[i + 0] = this.color.r),
                        (r[i + 1] = this.color.g),
                        (r[i + 2] = this.color.b));
                    }),
                    t
                  );
                })(),
                le = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              function pe(t) {
                return (function (t) {
                  function e() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var i = t.apply(this, e) || this;
                    return (
                      1 !==
                        e.filter(function (t) {
                          return void 0 !== t;
                        }).length ||
                        !e[0] ||
                        "object" != typeof e[0] ||
                        e[0] instanceof Array ||
                        i.assign(e[0]),
                      i
                    );
                  }
                  return (
                    le(e, t),
                    (e.prototype.assign = function (t) {
                      for (var e in t)
                        "function" != typeof this[e] && (this[e] = t[e]);
                    }),
                    e
                  );
                })(t);
              }
              var de,
                fe = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                ye = function () {
                  return (ye =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                },
                ge = (function (t) {
                  function e(e, n, i, r, o) {
                    return t.call(this, e, n, i, r, o) || this;
                  }
                  return fe(e, t), e;
                })(
                  pe(
                    (function () {
                      function t(t, e, n, i, r) {
                        var o = this;
                        (this.x = 0),
                          (this.y = 0),
                          (this.rotation = 0),
                          (this.anchor = new q(0, 0)),
                          (this.offset = q.Zero),
                          (this.scale = q.One),
                          (this.logger = R.getInstance()),
                          (this.flipVertical = !1),
                          (this.flipHorizontal = !1),
                          (this.effects = []),
                          (this.width = 0),
                          (this.height = 0),
                          (this._spriteCanvas = null),
                          (this._spriteCtx = null),
                          (this._pixelData = null),
                          (this._pixelsLoaded = !1),
                          (this._dirtyEffect = !1),
                          (this._opacity = 1);
                        var s = t;
                        if (
                          t &&
                          !(t instanceof ve) &&
                          ((e = 0 | t.x),
                          (n = 0 | t.y),
                          (i = 0 | t.width),
                          (r = 0 | t.height),
                          !(s = t.image))
                        )
                          throw new Error(
                            "An image texture is required to contsruct a sprite"
                          );
                        (this.x = e || 0),
                          (this.y = n || 0),
                          (this._texture = s),
                          (this._spriteCanvas = document.createElement(
                            "canvas"
                          )),
                          (this._spriteCanvas.width = i),
                          (this._spriteCanvas.height = r),
                          (this._spriteCtx = this._spriteCanvas.getContext(
                            "2d"
                          )),
                          this._texture.loaded
                            .then(function () {
                              (o.width =
                                o.width || o._texture.image.naturalWidth),
                                (o.height =
                                  o.height || o._texture.image.naturalHeight),
                                (o._spriteCanvas.width =
                                  o._spriteCanvas.width ||
                                  o._texture.image.naturalWidth),
                                (o._spriteCanvas.height =
                                  o._spriteCanvas.height ||
                                  o._texture.image.naturalHeight),
                                o._loadPixels(),
                                (o._dirtyEffect = !0);
                            })
                            .error(function (t) {
                              o.logger.error(
                                "Error loading texture ",
                                o._texture.path,
                                t
                              );
                            }),
                          (this.width = i),
                          (this.height = r);
                      }
                      return (
                        Object.defineProperty(t.prototype, "drawWidth", {
                          get: function () {
                            return this.width * this.scale.x;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "drawHeight", {
                          get: function () {
                            return this.height * this.scale.y;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (t.prototype._loadPixels = function () {
                          if (this._texture.isLoaded() && !this._pixelsLoaded) {
                            var t = this._texture.image.naturalWidth || 0,
                              e = this._texture.image.naturalHeight || 0;
                            if (
                              (this.width > t &&
                                this.logger.warn(
                                  "The sprite width " +
                                    this.width +
                                    " exceeds the width \n                              " +
                                    t +
                                    " of the backing texture " +
                                    this._texture.path
                                ),
                              this.width <= 0 || t <= 0)
                            )
                              throw new Error(
                                "The width of a sprite cannot be 0 or negative, sprite width: " +
                                  this.width +
                                  ", original width: " +
                                  t
                              );
                            if (
                              (this.height > e &&
                                this.logger.warn(
                                  "The sprite height " +
                                    this.height +
                                    " exceeds the height \n                              " +
                                    e +
                                    " of the backing texture " +
                                    this._texture.path
                                ),
                              this.height <= 0 || e <= 0)
                            )
                              throw new Error(
                                "The height of a sprite cannot be 0 or negative, sprite height: " +
                                  this.height +
                                  ", original height: " +
                                  e
                              );
                            this._spriteCtx.drawImage(
                              this._texture.image,
                              m(this.x, 0, t),
                              m(this.y, 0, e),
                              m(this.width, 0, t),
                              m(this.height, 0, e),
                              0,
                              0,
                              this.width,
                              this.height
                            ),
                              (this._pixelsLoaded = !0);
                          }
                        }),
                        (t.prototype.opacity = function (t) {
                          this._opacity = t;
                        }),
                        (t.prototype.grayscale = function () {
                          this.addEffect(new ne());
                        }),
                        (t.prototype.invert = function () {
                          this.addEffect(new ie());
                        }),
                        (t.prototype.fill = function (t) {
                          this.addEffect(new ue(t));
                        }),
                        (t.prototype.colorize = function (t) {
                          this.addEffect(new oe(t));
                        }),
                        (t.prototype.lighten = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new se(t));
                        }),
                        (t.prototype.darken = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new ae(t));
                        }),
                        (t.prototype.saturate = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new ce(t));
                        }),
                        (t.prototype.desaturate = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new he(t));
                        }),
                        (t.prototype.addEffect = function (t) {
                          this.effects.push(t),
                            this._texture.isLoaded() && this._pixelsLoaded
                              ? this._applyEffects()
                              : (this._dirtyEffect = !0);
                        }),
                        (t.prototype.removeEffect = function (t) {
                          var e;
                          (e =
                            "number" == typeof t
                              ? t
                              : this.effects.indexOf(t)) < 0 ||
                            e >= this.effects.length ||
                            (this.effects.splice(e, 1),
                            this._texture.isLoaded() && this._pixelsLoaded
                              ? this._applyEffects()
                              : (this._dirtyEffect = !0));
                        }),
                        (t.prototype._applyEffects = function () {
                          var t = this._texture.image.naturalWidth || 0,
                            e = this._texture.image.naturalHeight || 0;
                          if (
                            (this._spriteCtx.clearRect(
                              0,
                              0,
                              this.width,
                              this.height
                            ),
                            this._spriteCtx.drawImage(
                              this._texture.image,
                              m(this.x, 0, t),
                              m(this.y, 0, e),
                              m(this.width, 0, t),
                              m(this.height, 0, e),
                              0,
                              0,
                              this.width,
                              this.height
                            ),
                            this.effects.length > 0)
                          ) {
                            this._pixelData = this._spriteCtx.getImageData(
                              0,
                              0,
                              this.width,
                              this.height
                            );
                            for (var n = this.effects.length, i = 0; i < n; i++)
                              for (var r = 0; r < this.height; r++)
                                for (var o = 0; o < this.width; o++)
                                  this.effects[i].updatePixel(
                                    o,
                                    r,
                                    this._pixelData
                                  );
                            this._spriteCtx.clearRect(
                              0,
                              0,
                              this.width,
                              this.height
                            ),
                              this._spriteCtx.putImageData(
                                this._pixelData,
                                0,
                                0
                              );
                          }
                          this._dirtyEffect = !1;
                        }),
                        (t.prototype.clearEffects = function () {
                          (this.effects.length = 0), this._applyEffects();
                        }),
                        (t.prototype.reset = function () {}),
                        (t.prototype.debugDraw = function (t, e, n) {
                          t.save(), t.translate(e, n), t.rotate(this.rotation);
                          var i = this.drawWidth * this.anchor.x,
                            r = this.drawHeight * this.anchor.y;
                          (t.strokeStyle = tt.Black.toString()),
                            t.strokeRect(
                              -i,
                              -r,
                              this.drawWidth,
                              this.drawHeight
                            ),
                            t.restore();
                        }),
                        (t.prototype.draw = function (t, e, n) {
                          t instanceof CanvasRenderingContext2D
                            ? this._drawWithOptions({ ctx: t, x: e, y: n })
                            : this._drawWithOptions(t);
                        }),
                        (t.prototype._drawWithOptions = function (t) {
                          var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            c,
                            h = ye(ye({}, t), {
                              rotation:
                                null !== (e = t.rotation) && void 0 !== e
                                  ? e
                                  : this.rotation,
                              drawWidth:
                                null !== (n = t.drawWidth) && void 0 !== n
                                  ? n
                                  : this.drawWidth,
                              drawHeight:
                                null !== (i = t.drawHeight) && void 0 !== i
                                  ? i
                                  : this.drawHeight,
                              flipHorizontal:
                                null !== (r = t.flipHorizontal) && void 0 !== r
                                  ? r
                                  : this.flipHorizontal,
                              flipVertical:
                                null !== (o = t.flipVertical) && void 0 !== o
                                  ? o
                                  : this.flipVertical,
                              anchor:
                                null !== (s = t.anchor) && void 0 !== s
                                  ? s
                                  : this.anchor,
                              offset:
                                null !== (a = t.offset) && void 0 !== a
                                  ? a
                                  : this.offset,
                              opacity:
                                null !== (c = t.opacity) && void 0 !== c
                                  ? c
                                  : this._opacity,
                            }),
                            u = h.ctx,
                            l = h.x,
                            p = h.y,
                            d = h.rotation,
                            f = h.drawWidth,
                            y = h.drawHeight,
                            g = h.anchor,
                            _ = h.offset,
                            v = h.opacity,
                            m = h.flipHorizontal,
                            b = h.flipVertical;
                          this._dirtyEffect && this._applyEffects(), u.save();
                          var w = f * g.x + _.x,
                            x = y * g.y + _.y;
                          u.translate(l, p),
                            u.rotate(d),
                            m && (u.translate(f, 0), u.scale(-1, 1)),
                            b && (u.translate(0, y), u.scale(1, -1)),
                            this._dirtyEffect && this._applyEffects();
                          var P = u.globalAlpha;
                          (u.globalAlpha = null != v ? v : 1),
                            u.drawImage(
                              this._spriteCanvas,
                              0,
                              0,
                              this.width,
                              this.height,
                              -w,
                              -x,
                              f,
                              y
                            ),
                            (u.globalAlpha = P),
                            u.restore();
                        }),
                        (t.prototype.clone = function () {
                          var t = new ge(
                            this._texture,
                            this.x,
                            this.y,
                            this.width,
                            this.height
                          );
                          (t.scale = this.scale.clone()),
                            (t.rotation = this.rotation),
                            (t.flipHorizontal = this.flipHorizontal),
                            (t.flipVertical = this.flipVertical);
                          for (var e = this.effects.length, n = 0; n < e; n++)
                            t.addEffect(this.effects[n]);
                          return t;
                        }),
                        t
                      );
                    })()
                  )
                ),
                _e = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                ve = (function (t) {
                  function e(e, n) {
                    void 0 === n && (n = !0);
                    var i = t.call(this, e, "blob", n) || this;
                    return (
                      (i.path = e),
                      (i.bustCache = n),
                      (i.loaded = new d()),
                      (i._isLoaded = !1),
                      (i._sprite = null),
                      (i._sprite = new ge(i, 0, 0, 0, 0)),
                      i
                    );
                  }
                  return (
                    _e(e, t),
                    (e.prototype.isLoaded = function () {
                      return this._isLoaded;
                    }),
                    (e.prototype.load = function () {
                      var e = this,
                        n = new d();
                      return (
                        this.path.indexOf("data:image/") > -1
                          ? ((this.image = new Image()),
                            this.image.addEventListener("load", function () {
                              e.oncomplete(),
                                (e._isLoaded = !0),
                                (e.width = e._sprite.width =
                                  e.image.naturalWidth),
                                (e.height = e._sprite.height =
                                  e.image.naturalHeight),
                                (e._sprite = new ge(
                                  e,
                                  0,
                                  0,
                                  e.width,
                                  e.height
                                )),
                                e.loaded.resolve(e.image),
                                n.resolve(e.image);
                            }),
                            (this.image.src = this.path))
                          : t.prototype.load.call(this).then(
                              function () {
                                (e.image = new Image()),
                                  e.image.addEventListener("load", function () {
                                    (e._isLoaded = !0),
                                      (e.width = e._sprite.width =
                                        e.image.naturalWidth),
                                      (e.height = e._sprite.height =
                                        e.image.naturalHeight),
                                      e.loaded.resolve(e.image),
                                      n.resolve(e.image);
                                  }),
                                  (e.image.src = t.prototype.getData.call(e));
                              },
                              function () {
                                n.reject("Error loading texture.");
                              }
                            ),
                        n
                      );
                    }),
                    (e.prototype.asSprite = function () {
                      return this._sprite;
                    }),
                    e
                  );
                })(ee),
                me = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                be = function () {
                  return (be =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                },
                we = (function (t) {
                  function e(e, n, i, r) {
                    return t.call(this, e, n, i, r) || this;
                  }
                  return me(e, t), e;
                })(
                  pe(
                    (function () {
                      function t(t, e, n, i) {
                        (this.sprites = []),
                          (this.currentFrame = 0),
                          (this._timeLeftInFrame = 0),
                          (this._idempotencyToken = -1),
                          (this.anchor = q.Zero),
                          (this.rotation = 0),
                          (this.scale = q.One),
                          (this.loop = !0),
                          (this.freezeFrame = -1),
                          (this.flipVertical = !1),
                          (this.flipHorizontal = !1),
                          (this.drawWidth = 0),
                          (this.drawHeight = 0),
                          (this.width = 0),
                          (this.height = 0),
                          (this._opacity = 1);
                        var r = t;
                        if (t && !(t instanceof sr)) {
                          var o = t;
                          (r = o.engine),
                            (e = o.sprites),
                            (n = o.speed),
                            (i = o.loop);
                        }
                        (this.sprites = e),
                          (this.speed = n),
                          (this._engine = r),
                          (this._timeLeftInFrame = this.speed),
                          null != i && (this.loop = i),
                          e &&
                            e[0] &&
                            ((this.drawHeight = e[0] ? e[0].drawHeight : 0),
                            (this.drawWidth = e[0] ? e[0].drawWidth : 0),
                            (this.width = e[0] ? e[0].width : 0),
                            (this.height = e[0] ? e[0].height : 0),
                            (this.freezeFrame = e.length - 1));
                      }
                      return (
                        (t.prototype.opacity = function (t) {
                          this._opacity = t;
                        }),
                        (t.prototype.grayscale = function () {
                          this.addEffect(new ne());
                        }),
                        (t.prototype.invert = function () {
                          this.addEffect(new ie());
                        }),
                        (t.prototype.fill = function (t) {
                          this.addEffect(new ue(t));
                        }),
                        (t.prototype.colorize = function (t) {
                          this.addEffect(new oe(t));
                        }),
                        (t.prototype.lighten = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new se(t));
                        }),
                        (t.prototype.darken = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new ae(t));
                        }),
                        (t.prototype.saturate = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new ce(t));
                        }),
                        (t.prototype.desaturate = function (t) {
                          void 0 === t && (t = 0.1), this.addEffect(new he(t));
                        }),
                        (t.prototype.addEffect = function (t) {
                          for (var e in this.sprites)
                            this.sprites[e].addEffect(t);
                        }),
                        (t.prototype.removeEffect = function (t) {
                          for (var e in this.sprites)
                            this.sprites[e].removeEffect(t);
                        }),
                        (t.prototype.clearEffects = function () {
                          for (var t in this.sprites)
                            this.sprites[t].clearEffects();
                        }),
                        (t.prototype._setAnchor = function (t) {
                          for (var e in this.sprites)
                            this.sprites[e].anchor.setTo(t.x, t.y);
                        }),
                        (t.prototype._setRotation = function (t) {
                          for (var e in this.sprites)
                            this.sprites[e].rotation = t;
                        }),
                        (t.prototype._setScale = function (t) {
                          for (var e in this.sprites) this.sprites[e].scale = t;
                        }),
                        (t.prototype.reset = function () {
                          this.currentFrame = 0;
                        }),
                        (t.prototype.isDone = function () {
                          return (
                            !this.loop &&
                            this.currentFrame >= this.sprites.length
                          );
                        }),
                        (t.prototype.tick = function (t, e) {
                          if (this._idempotencyToken !== e) {
                            (this._idempotencyToken = e),
                              (this._timeLeftInFrame -= t),
                              this._timeLeftInFrame <= 0 &&
                                ((this.currentFrame = this.loop
                                  ? (this.currentFrame + 1) %
                                    this.sprites.length
                                  : this.currentFrame + 1),
                                (this._timeLeftInFrame = this.speed)),
                              this._updateValues();
                            var n = this.sprites[this.currentFrame];
                            n &&
                              ((this.width = n.width),
                              (this.height = n.height),
                              (this.drawWidth = n.drawWidth),
                              (this.drawHeight = n.drawHeight));
                          }
                        }),
                        (t.prototype._updateValues = function () {
                          this._setAnchor(this.anchor),
                            this._setRotation(this.rotation),
                            this._setScale(this.scale);
                        }),
                        (t.prototype.skip = function (t) {
                          this.currentFrame =
                            (this.currentFrame + t) % this.sprites.length;
                        }),
                        (t.prototype.draw = function (t, e, n) {
                          t instanceof CanvasRenderingContext2D
                            ? this._drawWithOptions({ ctx: t, x: e, y: n })
                            : this._drawWithOptions(t);
                        }),
                        (t.prototype._drawWithOptions = function (t) {
                          var e,
                            n,
                            i,
                            r,
                            o,
                            s,
                            a,
                            c,
                            h = be(be({}, t), {
                              rotation:
                                null !== (e = t.rotation) && void 0 !== e
                                  ? e
                                  : this.rotation,
                              drawWidth:
                                null !== (n = t.drawWidth) && void 0 !== n
                                  ? n
                                  : this.drawWidth,
                              drawHeight:
                                null !== (i = t.drawHeight) && void 0 !== i
                                  ? i
                                  : this.drawHeight,
                              flipHorizontal:
                                null !== (r = t.flipHorizontal) && void 0 !== r
                                  ? r
                                  : this.flipHorizontal,
                              flipVertical:
                                null !== (o = t.flipVertical) && void 0 !== o
                                  ? o
                                  : this.flipVertical,
                              anchor:
                                null !== (s = t.anchor) && void 0 !== s
                                  ? s
                                  : this.anchor,
                              opacity:
                                null !== (a = t.opacity) && void 0 !== a
                                  ? a
                                  : this._opacity,
                            });
                          this._updateValues(),
                            this.currentFrame < this.sprites.length &&
                              (c = this.sprites[this.currentFrame]).draw(h),
                            -1 !== this.freezeFrame &&
                              this.currentFrame >= this.sprites.length &&
                              (c = this.sprites[
                                m(this.freezeFrame, 0, this.sprites.length - 1)
                              ]).draw(h),
                            c &&
                              ((this.drawWidth = c.drawWidth),
                              (this.drawHeight = c.drawHeight));
                        }),
                        (t.prototype.play = function (t, e) {
                          this.reset(), this._engine.playAnimation(this, t, e);
                        }),
                        t
                      );
                    })()
                  )
                );
              !(function (t) {
                (t[(t.ShortestPath = 0)] = "ShortestPath"),
                  (t[(t.LongestPath = 1)] = "LongestPath"),
                  (t[(t.Clockwise = 2)] = "Clockwise"),
                  (t[(t.CounterClockwise = 3)] = "CounterClockwise");
              })(de || (de = {}));
              var xe = function (t, e, n, i) {
                  var r,
                    o = arguments.length,
                    s =
                      o < 3
                        ? e
                        : null === i
                        ? (i = Object.getOwnPropertyDescriptor(e, n))
                        : i;
                  if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                  )
                    s = Reflect.decorate(t, e, n, i);
                  else
                    for (var a = t.length - 1; a >= 0; a--)
                      (r = t[a]) &&
                        (s =
                          (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
                  return o > 3 && s && Object.defineProperty(e, n, s), s;
                },
                Pe = (function () {
                  function t(t, e, n, i, r) {
                    (this.actor = t),
                      (this.easingFcn = r),
                      (this._currentLerpTime = 0),
                      (this._lerpDuration = 1e3),
                      (this._lerpStart = new q(0, 0)),
                      (this._lerpEnd = new q(0, 0)),
                      (this._initialized = !1),
                      (this._stopped = !1),
                      (this._distance = 0),
                      (this._lerpDuration = i),
                      (this._lerpEnd = new q(e, n));
                  }
                  return (
                    (t.prototype._initialize = function () {
                      (this._lerpStart = new q(
                        this.actor.pos.x,
                        this.actor.pos.y
                      )),
                        (this._currentLerpTime = 0),
                        (this._distance = this._lerpStart.distance(
                          this._lerpEnd
                        ));
                    }),
                    (t.prototype.update = function (t) {
                      this._initialized ||
                        (this._initialize(), (this._initialized = !0));
                      var e = this.actor.pos.x,
                        n = this.actor.pos.y;
                      this._currentLerpTime < this._lerpDuration
                        ? ((e =
                            this._lerpEnd.x < this._lerpStart.x
                              ? this._lerpStart.x -
                                (this.easingFcn(
                                  this._currentLerpTime,
                                  this._lerpEnd.x,
                                  this._lerpStart.x,
                                  this._lerpDuration
                                ) -
                                  this._lerpEnd.x)
                              : this.easingFcn(
                                  this._currentLerpTime,
                                  this._lerpStart.x,
                                  this._lerpEnd.x,
                                  this._lerpDuration
                                )),
                          (n =
                            this._lerpEnd.y < this._lerpStart.y
                              ? this._lerpStart.y -
                                (this.easingFcn(
                                  this._currentLerpTime,
                                  this._lerpEnd.y,
                                  this._lerpStart.y,
                                  this._lerpDuration
                                ) -
                                  this._lerpEnd.y)
                              : this.easingFcn(
                                  this._currentLerpTime,
                                  this._lerpStart.y,
                                  this._lerpEnd.y,
                                  this._lerpDuration
                                )),
                          (this.actor.pos.x = e),
                          (this.actor.pos.y = n),
                          (this._currentLerpTime += t))
                        : ((this.actor.pos.x = this._lerpEnd.x),
                          (this.actor.pos.y = this._lerpEnd.y));
                    }),
                    (t.prototype.isComplete = function (t) {
                      return (
                        this._stopped ||
                        new q(t.pos.x, t.pos.y).distance(this._lerpStart) >=
                          this._distance
                      );
                    }),
                    (t.prototype.reset = function () {
                      this._initialized = !1;
                    }),
                    (t.prototype.stop = function () {
                      this._stopped = !0;
                    }),
                    t
                  );
                })(),
                Ae = (function () {
                  function t(t, e, n, i) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._end = new q(e, n)),
                      (this._speed = i);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        (this._start = new q(
                          this._actor.pos.x,
                          this._actor.pos.y
                        )),
                        (this._distance = this._start.distance(this._end)),
                        (this._dir = this._end.sub(this._start).normalize()));
                      var e = this._dir.scale(this._speed);
                      (this._actor.vel.x = e.x),
                        (this._actor.vel.y = e.y),
                        this.isComplete(this._actor) &&
                          ((this._actor.pos.x = this._end.x),
                          (this._actor.pos.y = this._end.y),
                          (this._actor.vel.y = 0),
                          (this._actor.vel.x = 0));
                    }),
                    (t.prototype.isComplete = function (t) {
                      return (
                        this._stopped ||
                        new q(t.pos.x, t.pos.y).distance(this._start) >=
                          this._distance
                      );
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.vel.y = 0),
                        (this._actor.vel.x = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Ee = (function () {
                  function t(t, e, n, i) {
                    if (
                      ((this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._speed = i),
                      (this._offset = new q(e, n)),
                      i <= 0)
                    )
                      throw (
                        (R.getInstance().error(
                          "Attempted to moveBy with speed less than or equal to zero : " +
                            i
                        ),
                        new Error(
                          "Speed must be greater than 0 pixels per second"
                        ))
                      );
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        (this._start = new q(
                          this._actor.pos.x,
                          this._actor.pos.y
                        )),
                        (this._end = this._start.add(this._offset)),
                        (this._distance = this._offset.size),
                        (this._dir = this._end.sub(this._start).normalize())),
                        (this._actor.vel = this._dir.scale(this._speed)),
                        this.isComplete(this._actor) &&
                          ((this._actor.pos.x = this._end.x),
                          (this._actor.pos.y = this._end.y),
                          (this._actor.vel.y = 0),
                          (this._actor.vel.x = 0));
                    }),
                    (t.prototype.isComplete = function (t) {
                      return (
                        this._stopped ||
                        t.pos.distance(this._start) >= this._distance
                      );
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.vel.y = 0),
                        (this._actor.vel.x = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Se = (function () {
                  function t(t, e, n) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._actorToFollow = e),
                      (this._current = new q(
                        this._actor.pos.x,
                        this._actor.pos.y
                      )),
                      (this._end = new q(e.pos.x, e.pos.y)),
                      (this._maximumDistance =
                        void 0 !== n ? n : this._current.distance(this._end)),
                      (this._speed = 0);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        (this._distanceBetween = this._current.distance(
                          this._end
                        )),
                        (this._dir = this._end.sub(this._current).normalize()));
                      var e = Math.sqrt(
                        Math.pow(this._actorToFollow.vel.x, 2) +
                          Math.pow(this._actorToFollow.vel.y, 2)
                      );
                      if (
                        (0 !== e && (this._speed = e),
                        (this._current.x = this._actor.pos.x),
                        (this._current.y = this._actor.pos.y),
                        (this._end.x = this._actorToFollow.pos.x),
                        (this._end.y = this._actorToFollow.pos.y),
                        (this._distanceBetween = this._current.distance(
                          this._end
                        )),
                        (this._dir = this._end.sub(this._current).normalize()),
                        this._distanceBetween >= this._maximumDistance)
                      ) {
                        var n = this._dir.scale(this._speed);
                        (this._actor.vel.x = n.x), (this._actor.vel.y = n.y);
                      } else (this._actor.vel.x = 0), (this._actor.vel.y = 0);
                      this.isComplete() &&
                        ((this._actor.pos.x = this._end.x),
                        (this._actor.pos.y = this._end.y),
                        (this._actor.vel.y = 0),
                        (this._actor.vel.x = 0));
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.vel.y = 0),
                        (this._actor.vel.x = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped;
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Ce = (function () {
                  function t(t, e, n) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._speedWasSpecified = !1),
                      (this._actor = t),
                      (this._actorToMeet = e),
                      (this._current = new q(
                        this._actor.pos.x,
                        this._actor.pos.y
                      )),
                      (this._end = new q(e.pos.x, e.pos.y)),
                      (this._speed = n || 0),
                      void 0 !== n && (this._speedWasSpecified = !0);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        (this._distanceBetween = this._current.distance(
                          this._end
                        )),
                        (this._dir = this._end.sub(this._current).normalize()));
                      var e = Math.sqrt(
                        Math.pow(this._actorToMeet.vel.x, 2) +
                          Math.pow(this._actorToMeet.vel.y, 2)
                      );
                      0 === e || this._speedWasSpecified || (this._speed = e),
                        (this._current.x = this._actor.pos.x),
                        (this._current.y = this._actor.pos.y),
                        (this._end.x = this._actorToMeet.pos.x),
                        (this._end.y = this._actorToMeet.pos.y),
                        (this._distanceBetween = this._current.distance(
                          this._end
                        )),
                        (this._dir = this._end.sub(this._current).normalize());
                      var n = this._dir.scale(this._speed);
                      (this._actor.vel.x = n.x),
                        (this._actor.vel.y = n.y),
                        this.isComplete() &&
                          ((this._actor.pos.x = this._end.x),
                          (this._actor.pos.y = this._end.y),
                          (this._actor.vel.y = 0),
                          (this._actor.vel.x = 0));
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped || this._distanceBetween <= 1;
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.vel.y = 0),
                        (this._actor.vel.x = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Oe = (function () {
                  function t(t, e, n, i) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._end = e),
                      (this._speed = n),
                      (this._rotationType = i || de.ShortestPath);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      if (!this._started) {
                        (this._started = !0),
                          (this._start = this._actor.rotation);
                        var e = Math.abs(this._end - this._start),
                          n = y - e;
                        switch (
                          (e > n
                            ? ((this._shortDistance = n),
                              (this._longDistance = e))
                            : ((this._shortDistance = e),
                              (this._longDistance = n)),
                          (this._shortestPathIsPositive =
                            (this._start - this._end + y) % y >= Math.PI),
                          this._rotationType)
                        ) {
                          case de.ShortestPath:
                            (this._distance = this._shortDistance),
                              this._shortestPathIsPositive
                                ? (this._direction = 1)
                                : (this._direction = -1);
                            break;
                          case de.LongestPath:
                            (this._distance = this._longDistance),
                              this._shortestPathIsPositive
                                ? (this._direction = -1)
                                : (this._direction = 1);
                            break;
                          case de.Clockwise:
                            (this._direction = 1),
                              this._shortestPathIsPositive
                                ? (this._distance = this._shortDistance)
                                : (this._distance = this._longDistance);
                            break;
                          case de.CounterClockwise:
                            (this._direction = -1),
                              this._shortestPathIsPositive
                                ? (this._distance = this._longDistance)
                                : (this._distance = this._shortDistance);
                        }
                      }
                      (this._actor.rx = this._direction * this._speed),
                        this.isComplete() &&
                          ((this._actor.rotation = this._end),
                          (this._actor.rx = 0),
                          (this._stopped = !0));
                    }),
                    (t.prototype.isComplete = function () {
                      var t = Math.abs(this._actor.rotation - this._start);
                      return this._stopped || t >= Math.abs(this._distance);
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.rx = 0), (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Te = (function () {
                  function t(t, e, n, i) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._speed = n),
                      (this._offset = e),
                      (this._rotationType = i || de.ShortestPath);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      if (!this._started) {
                        (this._started = !0),
                          (this._start = this._actor.rotation),
                          (this._end = this._start + this._offset);
                        var e = Math.abs(this._end - this._start),
                          n = y - e;
                        switch (
                          (e > n
                            ? ((this._shortDistance = n),
                              (this._longDistance = e))
                            : ((this._shortDistance = e),
                              (this._longDistance = n)),
                          (this._shortestPathIsPositive =
                            (this._start - this._end + y) % y >= Math.PI),
                          this._rotationType)
                        ) {
                          case de.ShortestPath:
                            (this._distance = this._shortDistance),
                              this._shortestPathIsPositive
                                ? (this._direction = 1)
                                : (this._direction = -1);
                            break;
                          case de.LongestPath:
                            (this._distance = this._longDistance),
                              this._shortestPathIsPositive
                                ? (this._direction = -1)
                                : (this._direction = 1);
                            break;
                          case de.Clockwise:
                            (this._direction = 1),
                              this._shortDistance >= 0
                                ? (this._distance = this._shortDistance)
                                : (this._distance = this._longDistance);
                            break;
                          case de.CounterClockwise:
                            (this._direction = -1),
                              this._shortDistance <= 0
                                ? (this._distance = this._shortDistance)
                                : (this._distance = this._longDistance);
                        }
                      }
                      (this._actor.rx = this._direction * this._speed),
                        this.isComplete() &&
                          ((this._actor.rotation = this._end),
                          (this._actor.rx = 0),
                          (this._stopped = !0));
                    }),
                    (t.prototype.isComplete = function () {
                      var t = Math.abs(this._actor.rotation - this._start);
                      return this._stopped || t >= Math.abs(this._distance);
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.rx = 0), (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                Be = (function () {
                  function t(t, e, n, i, r) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._endX = e),
                      (this._endY = n),
                      (this._speedX = i),
                      (this._speedY = r);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      if (
                        (this._started ||
                          ((this._started = !0),
                          (this._startX = this._actor.scale.x),
                          (this._startY = this._actor.scale.y),
                          (this._distanceX = Math.abs(
                            this._endX - this._startX
                          )),
                          (this._distanceY = Math.abs(
                            this._endY - this._startY
                          ))),
                        Math.abs(this._actor.scale.x - this._startX) >=
                          this._distanceX)
                      )
                        this._actor.sx = 0;
                      else {
                        var e = this._endY < this._startY ? -1 : 1;
                        this._actor.sx = this._speedX * e;
                      }
                      if (
                        Math.abs(this._actor.scale.y - this._startY) >=
                        this._distanceY
                      )
                        this._actor.sy = 0;
                      else {
                        var n = this._endY < this._startY ? -1 : 1;
                        this._actor.sy = this._speedY * n;
                      }
                      this.isComplete() &&
                        ((this._actor.scale.x = this._endX),
                        (this._actor.scale.y = this._endY),
                        (this._actor.sx = 0),
                        (this._actor.sy = 0));
                    }),
                    (t.prototype.isComplete = function () {
                      return (
                        this._stopped ||
                        (Math.abs(this._actor.scale.y - this._startX) >=
                          this._distanceX &&
                          Math.abs(this._actor.scale.y - this._startY) >=
                            this._distanceY)
                      );
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.sx = 0),
                        (this._actor.sy = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    xe(
                      [
                        N({
                          message:
                            "ex.Action.ScaleTo will be removed in v0.25.0",
                          alternateMethod: "Set width and hight directly",
                        }),
                      ],
                      t
                    )
                  );
                })(),
                Me = (function () {
                  function t(t, e, n, i) {
                    (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._offset = new q(e, n)),
                      (this._speedX = this._speedY = i);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        (this._startScale = this._actor.scale.clone()),
                        (this._endScale = this._startScale.add(this._offset)),
                        (this._distanceX = Math.abs(
                          this._endScale.x - this._startScale.x
                        )),
                        (this._distanceY = Math.abs(
                          this._endScale.y - this._startScale.y
                        )),
                        (this._directionX =
                          this._endScale.x < this._startScale.x ? -1 : 1),
                        (this._directionY =
                          this._endScale.y < this._startScale.y ? -1 : 1)),
                        (this._actor.sx = this._speedX * this._directionX),
                        (this._actor.sy = this._speedY * this._directionY),
                        this.isComplete() &&
                          ((this._actor.scale = this._endScale),
                          (this._actor.sx = 0),
                          (this._actor.sy = 0));
                    }),
                    (t.prototype.isComplete = function () {
                      return (
                        this._stopped ||
                        (Math.abs(this._actor.scale.x - this._startScale.x) >=
                          this._distanceX &&
                          Math.abs(this._actor.scale.y - this._startScale.y) >=
                            this._distanceY)
                      );
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.sx = 0),
                        (this._actor.sy = 0),
                        (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    xe(
                      [
                        N({
                          message:
                            "ex.Action.ScaleBy will be removed in v0.25.0",
                          alternateMethod: "Set width and hight directly",
                        }),
                      ],
                      t
                    )
                  );
                })(),
                De = (function () {
                  function t(t, e) {
                    (this._elapsedTime = 0),
                      (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._delay = e);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started || (this._started = !0),
                        (this.x = this._actor.pos.x),
                        (this.y = this._actor.pos.y),
                        (this._elapsedTime += t);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped || this._elapsedTime >= this._delay;
                    }),
                    (t.prototype.stop = function () {
                      this._stopped = !0;
                    }),
                    (t.prototype.reset = function () {
                      (this._elapsedTime = 0), (this._started = !1);
                    }),
                    t
                  );
                })(),
                ke = (function () {
                  function t(t, e, n, i) {
                    void 0 === i && (i = 1),
                      (this._timeVisible = 0),
                      (this._timeNotVisible = 0),
                      (this._elapsedTime = 0),
                      (this._totalTime = 0),
                      (this._stopped = !1),
                      (this._started = !1),
                      (this._actor = t),
                      (this._timeVisible = e),
                      (this._timeNotVisible = n),
                      (this._duration = (e + n) * i);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started || (this._started = !0),
                        (this._elapsedTime += t),
                        (this._totalTime += t),
                        this._actor.visible &&
                          this._elapsedTime >= this._timeVisible &&
                          ((this._actor.visible = !1), (this._elapsedTime = 0)),
                        !this._actor.visible &&
                          this._elapsedTime >= this._timeNotVisible &&
                          ((this._actor.visible = !0), (this._elapsedTime = 0)),
                        this.isComplete() && (this._actor.visible = !0);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped || this._totalTime >= this._duration;
                    }),
                    (t.prototype.stop = function () {
                      (this._actor.visible = !0), (this._stopped = !0);
                    }),
                    (t.prototype.reset = function () {
                      (this._started = !1),
                        (this._elapsedTime = 0),
                        (this._totalTime = 0);
                    }),
                    t
                  );
                })(),
                Re = (function () {
                  function t(t, e, n) {
                    (this._multiplier = 1),
                      (this._started = !1),
                      (this._stopped = !1),
                      (this._actor = t),
                      (this._endOpacity = e),
                      (this._speed = n);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._started ||
                        ((this._started = !0),
                        this._endOpacity < this._actor.opacity
                          ? (this._multiplier = -1)
                          : (this._multiplier = 1)),
                        this._speed > 0 &&
                          (this._actor.opacity +=
                            (this._multiplier *
                              (Math.abs(
                                this._actor.opacity - this._endOpacity
                              ) *
                                t)) /
                            this._speed),
                        (this._speed -= t),
                        this.isComplete() &&
                          (this._actor.opacity = this._endOpacity),
                        R.getInstance().debug(
                          "[Action fade] Actor opacity:",
                          this._actor.opacity
                        );
                    }),
                    (t.prototype.isComplete = function () {
                      return (
                        this._stopped ||
                        Math.abs(this._actor.opacity - this._endOpacity) < 0.05
                      );
                    }),
                    (t.prototype.stop = function () {
                      this._stopped = !0;
                    }),
                    (t.prototype.reset = function () {
                      this._started = !1;
                    }),
                    t
                  );
                })(),
                je = (function () {
                  function t(t) {
                    (this._stopped = !1), (this._actor = t);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._actor.actionQueue.clearActions(),
                        this._actor.kill(),
                        (this._stopped = !0);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped;
                    }),
                    (t.prototype.stop = function () {}),
                    (t.prototype.reset = function () {}),
                    t
                  );
                })(),
                Fe = (function () {
                  function t(t, e) {
                    (this._method = null),
                      (this._actor = null),
                      (this._hasBeenCalled = !1),
                      (this._actor = t),
                      (this._method = e);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      this._method.call(this._actor),
                        (this._hasBeenCalled = !0);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._hasBeenCalled;
                    }),
                    (t.prototype.reset = function () {
                      this._hasBeenCalled = !1;
                    }),
                    (t.prototype.stop = function () {
                      this._hasBeenCalled = !0;
                    }),
                    t
                  );
                })(),
                Ie = (function () {
                  function t(t, e, n) {
                    (this._stopped = !1),
                      (this._actor = t),
                      (this._actionQueue = new ze(t)),
                      (this._repeat = e),
                      (this._originalRepeat = e);
                    for (var i = n.length, r = 0; r < i; r++)
                      n[r].reset(), this._actionQueue.add(n[r]);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      (this.x = this._actor.pos.x),
                        (this.y = this._actor.pos.y),
                        this._actionQueue.hasNext() ||
                          (this._actionQueue.reset(), this._repeat--),
                        this._actionQueue.update(t);
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped || this._repeat <= 0;
                    }),
                    (t.prototype.stop = function () {
                      this._stopped = !0;
                    }),
                    (t.prototype.reset = function () {
                      this._repeat = this._originalRepeat;
                    }),
                    t
                  );
                })(),
                Le = (function () {
                  function t(t, e) {
                    (this._stopped = !1),
                      (this._actor = t),
                      (this._actionQueue = new ze(t));
                    for (var n = e.length, i = 0; i < n; i++)
                      e[i].reset(), this._actionQueue.add(e[i]);
                  }
                  return (
                    (t.prototype.update = function (t) {
                      (this.x = this._actor.pos.x),
                        (this.y = this._actor.pos.y),
                        this._stopped ||
                          (this._actionQueue.hasNext() ||
                            this._actionQueue.reset(),
                          this._actionQueue.update(t));
                    }),
                    (t.prototype.isComplete = function () {
                      return this._stopped;
                    }),
                    (t.prototype.stop = function () {
                      (this._stopped = !0), this._actionQueue.clearActions();
                    }),
                    (t.prototype.reset = function () {}),
                    t
                  );
                })(),
                ze = (function () {
                  function t(t) {
                    (this._actions = []),
                      (this._completedActions = []),
                      (this._actor = t);
                  }
                  return (
                    (t.prototype.add = function (t) {
                      this._actions.push(t);
                    }),
                    (t.prototype.remove = function (t) {
                      var e = this._actions.indexOf(t);
                      this._actions.splice(e, 1);
                    }),
                    (t.prototype.clearActions = function () {
                      (this._actions.length = 0),
                        (this._completedActions.length = 0),
                        this._currentAction && this._currentAction.stop();
                    }),
                    (t.prototype.getActions = function () {
                      return this._actions.concat(this._completedActions);
                    }),
                    (t.prototype.hasNext = function () {
                      return this._actions.length > 0;
                    }),
                    (t.prototype.reset = function () {
                      this._actions = this.getActions();
                      for (var t = this._actions.length, e = 0; e < t; e++)
                        this._actions[e].reset();
                      this._completedActions = [];
                    }),
                    (t.prototype.update = function (t) {
                      this._actions.length > 0 &&
                        ((this._currentAction = this._actions[0]),
                        this._currentAction.update(t),
                        this._currentAction.isComplete(this._actor) &&
                          this._completedActions.push(this._actions.shift()));
                    }),
                    t
                  );
                })(),
                He = (function () {
                  function t() {}
                  return (
                    (t.CreateReversibleEasingFunction = function (t) {
                      return function (e, n, i, r) {
                        return i < n ? n - (t(e, i, n, r) - i) : t(e, n, i, r);
                      };
                    }),
                    (t.CreateReversableEasingFunction = function (e) {
                      return t.CreateReversibleEasingFunction(e);
                    }),
                    (t.CreateVectorEasingFunction = function (t) {
                      return function (e, n, i, r) {
                        return new q(t(e, n.x, i.x, r), t(e, n.y, i.y, r));
                      };
                    }),
                    (t.Linear = t.CreateReversibleEasingFunction(function (
                      t,
                      e,
                      n,
                      i
                    ) {
                      return ((n -= e) * t) / i + e;
                    })),
                    (t.EaseInQuad = t.CreateReversibleEasingFunction(function (
                      t,
                      e,
                      n,
                      i
                    ) {
                      return (n -= e) * (t /= i) * t + e;
                    })),
                    (t.EaseOutQuad = t.CreateReversibleEasingFunction(function (
                      t,
                      e,
                      n,
                      i
                    ) {
                      return -(n -= e) * (t /= i) * (t - 2) + e;
                    })),
                    (t.EaseInOutQuad = t.CreateReversibleEasingFunction(
                      function (t, e, n, i) {
                        return (
                          (n -= e),
                          (t /= i / 2) < 1
                            ? (n / 2) * t * t + e
                            : (-n / 2) * (--t * (t - 2) - 1) + e
                        );
                      }
                    )),
                    (t.EaseInCubic = t.CreateReversibleEasingFunction(function (
                      t,
                      e,
                      n,
                      i
                    ) {
                      return (n -= e) * (t /= i) * t * t + e;
                    })),
                    (t.EaseOutCubic = t.CreateReversibleEasingFunction(
                      function (t, e, n, i) {
                        return (t /= i), (n -= e) * (--t * t * t + 1) + e;
                      }
                    )),
                    (t.EaseInOutCubic = t.CreateReversibleEasingFunction(
                      function (t, e, n, i) {
                        return (
                          (n -= e),
                          (t /= i / 2) < 1
                            ? (n / 2) * t * t * t + e
                            : (n / 2) * ((t -= 2) * t * t + 2) + e
                        );
                      }
                    )),
                    (function (t, e, n, i) {
                      var r,
                        o = arguments.length,
                        s =
                          o < 3
                            ? e
                            : null === i
                            ? (i = Object.getOwnPropertyDescriptor(e, n))
                            : i;
                      if (
                        "object" == typeof Reflect &&
                        "function" == typeof Reflect.decorate
                      )
                        s = Reflect.decorate(t, e, n, i);
                      else
                        for (var a = t.length - 1; a >= 0; a--)
                          (r = t[a]) &&
                            (s =
                              (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) ||
                              s);
                      o > 3 && s && Object.defineProperty(e, n, s);
                    })(
                      [
                        N({
                          message:
                            "Alias for incorrect spelling used in older versions, will be removed in v0.25.0",
                          alternateMethod: "CreateReversibleEasingFunction",
                        }),
                      ],
                      t,
                      "CreateReversableEasingFunction",
                      null
                    ),
                    t
                  );
                })(),
                Ue = (function () {
                  function t() {
                    (this._actors = []),
                      (this._queues = []),
                      null !== arguments &&
                        ((this._actors = Array.prototype.slice.call(
                          arguments,
                          0
                        )),
                        (this._queues = this._actors.map(function (t) {
                          return t.actionQueue;
                        })));
                  }
                  return (
                    (t.prototype.clearActions = function () {
                      for (var t = this._queues.length, e = 0; e < t; e++)
                        this._queues[e].clearActions();
                    }),
                    (t.prototype.addActorToContext = function (t) {
                      this._actors.push(t), this._queues.push(t.actionQueue);
                    }),
                    (t.prototype.removeActorFromContext = function (t) {
                      var e = this._actors.indexOf(t);
                      e > -1 &&
                        (this._actors.splice(e, 1), this._queues.splice(e, 1));
                    }),
                    (t.prototype.easeTo = function (t, e, n, i) {
                      void 0 === i && (i = He.Linear);
                      for (var r = this._queues.length, o = 0; o < r; o++)
                        this._queues[o].add(
                          new Pe(this._actors[o], t, e, n, i)
                        );
                      return this;
                    }),
                    (t.prototype.moveTo = function (t, e, n) {
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new Ae(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.moveBy = function (t, e, n) {
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new Ee(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.rotateTo = function (t, e, n) {
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new Oe(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.rotateBy = function (t, e, n) {
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new Te(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.scaleTo = function (t, e, n, i) {
                      for (var r = this._queues.length, o = 0; o < r; o++)
                        this._queues[o].add(
                          new Be(this._actors[o], t, e, n, i)
                        );
                      return this;
                    }),
                    (t.prototype.scaleBy = function (t, e, n) {
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new Me(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.blink = function (t, e, n) {
                      void 0 === n && (n = 1);
                      for (var i = this._queues.length, r = 0; r < i; r++)
                        this._queues[r].add(new ke(this._actors[r], t, e, n));
                      return this;
                    }),
                    (t.prototype.fade = function (t, e) {
                      for (var n = this._queues.length, i = 0; i < n; i++)
                        this._queues[i].add(new Re(this._actors[i], t, e));
                      return this;
                    }),
                    (t.prototype.delay = function (t) {
                      for (var e = this._queues.length, n = 0; n < e; n++)
                        this._queues[n].add(new De(this._actors[n], t));
                      return this;
                    }),
                    (t.prototype.die = function () {
                      for (var t = this._queues.length, e = 0; e < t; e++)
                        this._queues[e].add(new je(this._actors[e]));
                      return this;
                    }),
                    (t.prototype.callMethod = function (t) {
                      for (var e = this._queues.length, n = 0; n < e; n++)
                        this._queues[n].add(new Fe(this._actors[n], t));
                      return this;
                    }),
                    (t.prototype.repeat = function (t) {
                      if (!t) return this.repeatForever(), this;
                      for (var e = this._queues.length, n = 0; n < e; n++)
                        this._queues[n].add(
                          new Ie(
                            this._actors[n],
                            t,
                            this._actors[n].actionQueue.getActions()
                          )
                        );
                      return this;
                    }),
                    (t.prototype.repeatForever = function () {
                      for (var t = this._queues.length, e = 0; e < t; e++)
                        this._queues[e].add(
                          new Le(
                            this._actors[e],
                            this._actors[e].actionQueue.getActions()
                          )
                        );
                      return this;
                    }),
                    (t.prototype.follow = function (t, e) {
                      for (var n = this._queues.length, i = 0; i < n; i++)
                        void 0 === e
                          ? this._queues[i].add(new Se(this._actors[i], t))
                          : this._queues[i].add(new Se(this._actors[i], t, e));
                      return this;
                    }),
                    (t.prototype.meet = function (t, e) {
                      for (var n = this._queues.length, i = 0; i < n; i++)
                        void 0 === e
                          ? this._queues[i].add(new Ce(this._actors[i], t))
                          : this._queues[i].add(new Ce(this._actors[i], t, e));
                      return this;
                    }),
                    (t.prototype.asPromise = function () {
                      var t = this,
                        e = this._queues.map(function (e, n) {
                          var i = new d();
                          return (
                            e.add(
                              new Fe(t._actors[n], function () {
                                i.resolve();
                              })
                            ),
                            i
                          );
                        });
                      return d.join.apply(this, e);
                    }),
                    t
                  );
                })(),
                We = (function () {
                  function t() {}
                  return (
                    (t.Box = function (t, e, n, i) {
                      return (
                        void 0 === n && (n = q.Half),
                        void 0 === i && (i = q.Zero),
                        new Xt({
                          points: new Qt(
                            -t * n.x,
                            -e * n.y,
                            t - t * n.x,
                            e - e * n.y
                          ).getPoints(),
                          offset: i,
                        })
                      );
                    }),
                    (t.Polygon = function (t, e, n) {
                      return (
                        void 0 === e && (e = !1),
                        void 0 === n && (n = q.Zero),
                        new Xt({ points: t, offset: n, clockwiseWinding: e })
                      );
                    }),
                    (t.Circle = function (t, e) {
                      return (
                        void 0 === e && (e = q.Zero),
                        new Vt({ radius: t, offset: e })
                      );
                    }),
                    (t.Edge = function (t, e) {
                      return new Gt({ begin: t, end: e });
                    }),
                    t
                  );
                })(),
                Ne = (function () {
                  function t(t) {
                    var e = t.actor,
                      n = t.collider;
                    if (
                      ((this.pos = new q(0, 0)),
                      (this.oldPos = new q(0, 0)),
                      (this.vel = new q(0, 0)),
                      (this.oldVel = new q(0, 0)),
                      (this.acc = new q(0, 0)),
                      (this.oldAcc = q.Zero),
                      (this.torque = 0),
                      (this.motion = 10),
                      (this.oldRotation = 0),
                      (this.rotation = 0),
                      (this.scale = q.One),
                      (this.oldScale = q.One),
                      (this.sx = 0),
                      (this.sy = 0),
                      (this.rx = 0),
                      (this._geometryDirty = !1),
                      (this._totalMtv = q.Zero),
                      !e && !n)
                    )
                      throw new Error(
                        "An actor or collider are required to create a body"
                      );
                    (this.actor = e),
                      (this.collider =
                        !n && e
                          ? this.useBoxCollider(e.width, e.height, e.anchor)
                          : n);
                  }
                  return (
                    Object.defineProperty(t.prototype, "id", {
                      get: function () {
                        return this.actor ? this.actor.id : -1;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.clone = function () {
                      return new t({
                        actor: null,
                        collider: this.collider.clone(),
                      });
                    }),
                    Object.defineProperty(t.prototype, "active", {
                      get: function () {
                        return !!this.actor && !this.actor.isKilled();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        return this.pos;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "collider", {
                      get: function () {
                        return this._collider;
                      },
                      set: function (t) {
                        t &&
                          ((this._collider = t),
                          (this._collider.body = this),
                          this._wireColliderEventsToActor());
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.addMtv = function (t) {
                      this._totalMtv.addEqual(t);
                    }),
                    (t.prototype.applyMtv = function () {
                      this.pos.addEqual(this._totalMtv),
                        this._totalMtv.setTo(0, 0);
                    }),
                    (t.prototype.markCollisionShapeDirty = function () {
                      this._geometryDirty = !0;
                    }),
                    Object.defineProperty(t.prototype, "isColliderShapeDirty", {
                      get: function () {
                        return this._geometryDirty;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.captureOldTransform = function () {
                      this.oldVel.setTo(this.vel.x, this.vel.y),
                        this.oldPos.setTo(this.pos.x, this.pos.y),
                        this.oldAcc.setTo(this.acc.x, this.acc.y),
                        this.oldScale.setTo(this.scale.x, this.scale.y),
                        (this.oldRotation = this.rotation);
                    }),
                    (t.prototype.integrate = function (t) {
                      var e = t / 1e3,
                        n = this.acc.clone();
                      this.collider.type === st.Active && n.addEqual(rt.acc),
                        this.vel.addEqual(n.scale(e)),
                        this.pos
                          .addEqual(this.vel.scale(e))
                          .addEqual(n.scale(0.5 * e * e)),
                        (this.rx +=
                          this.torque * (1 / this.collider.inertia) * e),
                        (this.rotation += this.rx * e),
                        (this.scale.x += (this.sx * t) / 1e3),
                        (this.scale.y += (this.sy * t) / 1e3),
                        this.scale.equals(this.oldScale) ||
                          (this._geometryDirty = !0),
                        this.collider.update(),
                        (this._geometryDirty = !1);
                    }),
                    (t.prototype.useBoxCollider = function (t, e, n, i) {
                      return (
                        void 0 === n && (n = q.Half),
                        void 0 === i && (i = q.Zero),
                        null == t && (t = this.actor ? this.actor.width : 0),
                        null == e && (e = this.actor ? this.actor.height : 0),
                        (this.collider.shape = We.Box(t, e, n, i)),
                        this.collider
                      );
                    }),
                    (t.prototype.usePolygonCollider = function (t, e) {
                      return (
                        void 0 === e && (e = q.Zero),
                        (this.collider.shape = We.Polygon(t, !1, e)),
                        this.collider
                      );
                    }),
                    (t.prototype.useCircleCollider = function (t, e) {
                      return (
                        void 0 === e && (e = q.Zero),
                        (this.collider.shape = We.Circle(t, e)),
                        this.collider
                      );
                    }),
                    (t.prototype.useEdgeCollider = function (t, e) {
                      return (
                        (this.collider.shape = We.Edge(t, e)), this.collider
                      );
                    }),
                    (t.prototype._wireColliderEventsToActor = function () {
                      var t = this;
                      this.collider.clear(),
                        this.collider.on("precollision", function (e) {
                          t.actor &&
                            t.actor.emit(
                              "precollision",
                              new Tt(
                                e.target.body.actor,
                                e.other.body.actor,
                                e.side,
                                e.intersection
                              )
                            );
                        }),
                        this.collider.on("postcollision", function (e) {
                          t.actor &&
                            t.actor.emit(
                              "postcollision",
                              new Bt(
                                e.target.body.actor,
                                e.other.body.actor,
                                e.side,
                                e.intersection
                              )
                            );
                        }),
                        this.collider.on("collisionstart", function (e) {
                          t.actor &&
                            t.actor.emit(
                              "collisionstart",
                              new Mt(
                                e.target.body.actor,
                                e.other.body.actor,
                                e.pair
                              )
                            );
                        }),
                        this.collider.on("collisionend", function (e) {
                          t.actor &&
                            t.actor.emit(
                              "collisionend",
                              new Dt(e.target.body.actor, e.other.body.actor)
                            );
                        });
                    }),
                    t
                  );
                })(),
                qe = (function () {
                  function t() {}
                  return (
                    (t.prototype.update = function (t, e) {
                      var n = t.eventDispatcher;
                      if (
                        t.body.collider.type !== st.PreventCollision &&
                        e.currentScene &&
                        e.currentScene.tileMaps
                      )
                        for (var i = 0; i < e.currentScene.tileMaps.length; i++)
                          for (
                            var r = e.currentScene.tileMaps[i],
                              o = void 0,
                              s = p.None,
                              a = 2;
                            (o = r.collides(t)) && !(a-- < 0);

                          )
                            (s = Qt.getSideFromIntersection(o)),
                              n.emit("precollision", new Tt(t, null, s, o)),
                              t.body.collider.type === st.Active &&
                                ((t.pos.y += o.y),
                                (t.pos.x += o.x),
                                n.emit("postcollision", new Bt(t, null, s, o)));
                    }),
                    t
                  );
                })(),
                Ve = (function () {
                  function t() {
                    (this._topLeft = new q(0, 0)),
                      (this._topRight = new q(0, 0)),
                      (this._bottomLeft = new q(0, 0)),
                      (this._bottomRight = new q(0, 0));
                  }
                  return (
                    (t.prototype.isSpriteOffScreen = function (t, e) {
                      var n = t.currentDrawing.drawWidth,
                        i = t.currentDrawing.drawHeight,
                        r = t.rotation,
                        o = t.center,
                        s = t.getWorldPos();
                      (this._topLeft.x = s.x - n / 2),
                        (this._topLeft.y = s.y - i / 2),
                        (this._topLeft = this._topLeft.rotate(r, o)),
                        (this._topRight.x = s.x + n / 2),
                        (this._topRight.y = s.y - i / 2),
                        (this._topRight = this._topRight.rotate(r, o)),
                        (this._bottomLeft.x = s.x - n / 2),
                        (this._bottomLeft.y = s.y + i / 2),
                        (this._bottomLeft = this._bottomLeft.rotate(r, o)),
                        (this._bottomRight.x = s.x + n / 2),
                        (this._bottomRight.y = s.y + i / 2),
                        (this._bottomRight = this._bottomRight.rotate(r, o));
                      var a = e.worldToScreenCoordinates(this._topLeft),
                        c = e.worldToScreenCoordinates(this._topRight),
                        h = e.worldToScreenCoordinates(this._bottomLeft),
                        u = e.worldToScreenCoordinates(this._bottomRight);
                      (this._xCoords = []),
                        (this._yCoords = []),
                        this._xCoords.push(a.x, c.x, h.x, u.x),
                        this._yCoords.push(a.y, c.y, h.y, u.y),
                        (this._xMin = Math.min.apply(null, this._xCoords)),
                        (this._yMin = Math.min.apply(null, this._yCoords)),
                        (this._xMax = Math.max.apply(null, this._xCoords)),
                        (this._yMax = Math.max.apply(null, this._yCoords));
                      var l = e.screenToWorldCoordinates(
                          new q(this._xMin, this._yMin)
                        ),
                        p = e.screenToWorldCoordinates(
                          new q(this._xMax, this._yMax)
                        );
                      (this._xMinWorld = l.x),
                        (this._yMinWorld = l.y),
                        (this._xMaxWorld = p.x),
                        (this._yMaxWorld = p.y);
                      var d = [
                        new q(this._xMin, this._yMin),
                        new q(this._xMax, this._yMin),
                        new q(this._xMin, this._yMax),
                        new q(this._xMax, this._yMax),
                      ];
                      if (
                        d[0].x < 0 &&
                        d[1].x > e.canvas.clientWidth &&
                        (d[0].y > 0 || d[2].y < e.canvas.clientHeight)
                      )
                        return !1;
                      if (
                        d[0].y < 0 &&
                        d[2].y > e.canvas.clientHeight &&
                        (d[1].x > 0 || d[0].x < e.canvas.clientWidth)
                      )
                        return !1;
                      for (var f = 0; f < d.length; f++)
                        if (
                          d[f].x > 0 &&
                          d[f].y > 0 &&
                          d[f].x < e.canvas.clientWidth &&
                          d[f].y < e.canvas.clientHeight
                        )
                          return !1;
                      return !0;
                    }),
                    (t.prototype.debugDraw = function (t) {
                      t.beginPath(),
                        (t.strokeStyle = tt.White.toString()),
                        t.rect(
                          this._xMinWorld,
                          this._yMinWorld,
                          this._xMaxWorld - this._xMinWorld,
                          this._yMaxWorld - this._yMinWorld
                        ),
                        t.stroke(),
                        (t.fillStyle = tt.Red.toString()),
                        t.beginPath(),
                        t.arc(
                          this._topLeft.x,
                          this._topLeft.y,
                          5,
                          0,
                          2 * Math.PI
                        ),
                        t.closePath(),
                        t.fill(),
                        (t.fillStyle = tt.Green.toString()),
                        t.beginPath(),
                        t.arc(
                          this._topRight.x,
                          this._topRight.y,
                          5,
                          0,
                          2 * Math.PI
                        ),
                        t.closePath(),
                        t.fill(),
                        (t.fillStyle = tt.Blue.toString()),
                        t.beginPath(),
                        t.arc(
                          this._bottomLeft.x,
                          this._bottomLeft.y,
                          5,
                          0,
                          2 * Math.PI
                        ),
                        t.closePath(),
                        t.fill(),
                        (t.fillStyle = tt.Magenta.toString()),
                        t.beginPath(),
                        t.arc(
                          this._bottomRight.x,
                          this._bottomRight.y,
                          5,
                          0,
                          2 * Math.PI
                        ),
                        t.closePath(),
                        t.fill();
                    }),
                    t
                  );
                })(),
                Ge = (function () {
                  function t() {
                    this.cullingBox = new Ve();
                  }
                  return (
                    (t.prototype.update = function (t, e) {
                      var n = t.eventDispatcher,
                        i = !0;
                      null != t.currentDrawing &&
                        (i = this.cullingBox.isSpriteOffScreen(t, e));
                      var r = !1;
                      e &&
                        e.currentScene &&
                        e.currentScene.camera &&
                        e.currentScene.camera.viewport &&
                        (r = !e.currentScene.camera.viewport.intersect(
                          t.body.collider.bounds
                        )),
                        t.isOffScreen
                          ? (r && i) ||
                            (n.emit("enterviewport", new It(t)),
                            (t.isOffScreen = !1))
                          : r &&
                            i &&
                            (n.emit("exitviewport", new Ft(t)),
                            (t.isOffScreen = !0));
                    }),
                    t
                  );
                })(),
                Xe = (function () {
                  function t() {}
                  return (
                    (t.prototype.update = function (t, e) {
                      t.enableCapturePointer &&
                        (t.isKilled() ||
                          e.input.pointers.checkAndUpdateActorUnderPointer(t));
                    }),
                    t
                  );
                })();
              function Qe(t, e, n, i, r, o, s, a) {
                void 0 === e && (e = tt.Red),
                  void 0 === s && (s = 1),
                  void 0 === a && (a = "butt"),
                  t.beginPath(),
                  (t.lineWidth = s),
                  (t.lineCap = a),
                  (t.strokeStyle = e.toString()),
                  t.moveTo(n, i),
                  t.lineTo(r, o),
                  t.closePath(),
                  t.stroke();
              }
              function Ze(t, e, n) {
                void 0 === e && (e = tt.Red),
                  t.beginPath(),
                  (t.strokeStyle = e.toString()),
                  t.arc(n.x, n.y, 5, 0, 2 * Math.PI),
                  t.closePath(),
                  t.stroke();
              }
              function Ke(t, e, n, i, r) {
                void 0 === r && (r = 1);
                var o = e ? e.toString() : "blue",
                  s = i.scale(r);
                t.beginPath(),
                  (t.strokeStyle = o),
                  t.moveTo(n.x, n.y),
                  t.lineTo(n.x + s.x, n.y + s.y),
                  t.closePath(),
                  t.stroke();
              }
              function Ye(t, e, n, i, r, o, s, a) {
                var c;
                if (
                  (void 0 === o && (o = 5),
                  void 0 === s && (s = tt.White),
                  void 0 === a && (a = null),
                  "number" == typeof o)
                )
                  c = { tl: o, tr: o, br: o, bl: o };
                else {
                  var h = { tl: 0, tr: 0, br: 0, bl: 0 };
                  for (var u in h)
                    if (h.hasOwnProperty(u)) {
                      var l = u;
                      c[l] = o[l] || h[l];
                    }
                }
                t.beginPath(),
                  t.moveTo(e + c.tl, n),
                  t.lineTo(e + i - c.tr, n),
                  t.quadraticCurveTo(e + i, n, e + i, n + c.tr),
                  t.lineTo(e + i, n + r - c.br),
                  t.quadraticCurveTo(e + i, n + r, e + i - c.br, n + r),
                  t.lineTo(e + c.bl, n + r),
                  t.quadraticCurveTo(e, n + r, e, n + r - c.bl),
                  t.lineTo(e, n + c.tl),
                  t.quadraticCurveTo(e, n, e + c.tl, n),
                  t.closePath(),
                  a && ((t.fillStyle = a.toString()), t.fill()),
                  s && ((t.strokeStyle = s.toString()), t.stroke());
              }
              function Je(t, e, n, i, r, o) {
                void 0 === r && (r = tt.White),
                  void 0 === o && (o = null),
                  t.beginPath(),
                  t.arc(e, n, i, 0, 2 * Math.PI),
                  t.closePath(),
                  o && ((t.fillStyle = o.toString()), t.fill()),
                  r && ((t.strokeStyle = r.toString()), t.stroke());
              }
              var $e = (function () {
                  function t(t, e, n) {
                    (this._name = t), (this._category = e), (this._mask = n);
                  }
                  return (
                    Object.defineProperty(t.prototype, "name", {
                      get: function () {
                        return this._name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "category", {
                      get: function () {
                        return this._category;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "mask", {
                      get: function () {
                        return this._mask;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.canCollide = function (t) {
                      return (
                        0 != (this.category & t.mask) &&
                        0 != (t.category & this.mask)
                      );
                    }),
                    (t.All = new t("Collide with all groups", -1, -1)),
                    t
                  );
                })(),
                tn = (function () {
                  function t(e, n) {
                    (this.colliderA = e),
                      (this.colliderB = n),
                      (this.id = null),
                      (this.collision = null),
                      (this.id = t.calculatePairHash(e, n));
                  }
                  return (
                    (t.canCollide = function (t, e) {
                      return !(
                        !t.group.canCollide(e.group) ||
                        (t.type === st.Fixed && e.type === st.Fixed) ||
                        e.type === st.PreventCollision ||
                        t.type === st.PreventCollision ||
                        !t.active ||
                        !e.active
                      );
                    }),
                    Object.defineProperty(t.prototype, "canCollide", {
                      get: function () {
                        var e = this.colliderA,
                          n = this.colliderB;
                        return t.canCollide(e, n);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.collide = function () {
                      this.collision = this.colliderA.collide(this.colliderB);
                    }),
                    (t.prototype.resolve = function (t) {
                      this.collision && this.collision.resolve(t);
                    }),
                    (t.calculatePairHash = function (t, e) {
                      return t.id < e.id
                        ? "#" + t.id + "+" + e.id
                        : "#" + e.id + "+" + t.id;
                    }),
                    (t.prototype.debugDraw = function (t) {
                      this.collision &&
                        (rt.showContacts && Ze(t, tt.Red, this.collision.point),
                        rt.showCollisionNormals &&
                          Ke(
                            t,
                            tt.Cyan,
                            this.collision.point,
                            this.collision.normal,
                            30
                          ));
                    }),
                    t
                  );
                })();
              function en(t) {
                return t instanceof nn;
              }
              var nn = (function () {
                  function t(t) {
                    var e = t.body,
                      n = t.type,
                      i = t.group,
                      r = t.shape,
                      o = t.offset,
                      s = t.useShapeInertia,
                      a = void 0 === s || s;
                    (this._events = new Jt(this)),
                      (this.type = st.PreventCollision),
                      (this.group = $e.All),
                      (this.mass = 1),
                      (this.inertia = 1e3),
                      (this.friction = 0.99),
                      (this.bounciness = 0.2),
                      e && e.collider && !r
                        ? (this._shape = e.collider.shape)
                        : ((this._shape = r), (this.body = e)),
                      (this.useShapeInertia = a),
                      (this._shape.collider = this),
                      (this.type = n || this.type),
                      (this.group = i || this.group),
                      (this.offset = o || q.Zero);
                  }
                  return (
                    (t.prototype.clone = function () {
                      return new t({
                        body: null,
                        type: this.type,
                        shape: this._shape.clone(),
                        group: this.group,
                        offset: this.offset,
                      });
                    }),
                    Object.defineProperty(t.prototype, "id", {
                      get: function () {
                        return this.body ? this.body.id : -1;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "shape", {
                      get: function () {
                        return this._shape;
                      },
                      set: function (t) {
                        (this._shape = t),
                          (this._shape.collider = this),
                          this.useShapeInertia &&
                            (this.inertia = isNaN(this._shape.inertia)
                              ? this.inertia
                              : this._shape.inertia);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "center", {
                      get: function () {
                        return this.bounds.center;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "active", {
                      get: function () {
                        return this.body.active;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.collide = function (t) {
                      return this.shape.collide(t.shape);
                    }),
                    (t.prototype.getClosestLineBetween = function (t) {
                      return this.shape.getClosestLineBetween(t.shape);
                    }),
                    Object.defineProperty(t.prototype, "offset", {
                      get: function () {
                        return this.shape.offset.clone();
                      },
                      set: function (t) {
                        this.shape.offset = t.clone();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.touching = function (t) {
                      var e = new tn(this, t);
                      return e.collide(), !!e.collision;
                    }),
                    Object.defineProperty(t.prototype, "bounds", {
                      get: function () {
                        return this.shape
                          ? this.shape.bounds
                          : this.body
                          ? new Qt().translate(this.body.pos)
                          : new Qt();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "localBounds", {
                      get: function () {
                        return this.shape ? this.shape.localBounds : new Qt();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.update = function () {
                      this.shape && this.shape.recalc();
                    }),
                    (t.prototype.emit = function (t, e) {
                      this._events.emit(t, e);
                    }),
                    (t.prototype.on = function (t, e) {
                      this._events.on(t, e);
                    }),
                    (t.prototype.off = function (t, e) {
                      this._events.off(t, e);
                    }),
                    (t.prototype.once = function (t, e) {
                      this._events.once(t, e);
                    }),
                    (t.prototype.clear = function () {
                      this._events.clear();
                    }),
                    (t.prototype.debugDraw = function (t) {
                      rt.showMotionVectors &&
                        (Ke(
                          t,
                          tt.Yellow,
                          this.body.pos,
                          this.body.acc.add(rt.acc)
                        ),
                        Ke(t, tt.Red, this.body.pos, this.body.vel),
                        Ze(t, tt.Red, this.body.pos)),
                        rt.showBounds && this.bounds.debugDraw(t, tt.Yellow),
                        rt.showArea && this.shape.debugDraw(t, tt.Green);
                    }),
                    t
                  );
                })(),
                rn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                on = (function () {
                  function t() {}
                  return (
                    (t.prototype.clone = function () {
                      var t,
                        e = new this.constructor();
                      for (var n in this)
                        if (this.hasOwnProperty(n)) {
                          var i = this[n];
                          (null == (t = i) ? void 0 : t.clone) &&
                          "owner" !== n &&
                          "clone" !== n
                            ? (e[n] = i.clone())
                            : (e[n] = i);
                        }
                      return e;
                    }),
                    t
                  );
                })(),
                sn = (function (t) {
                  function e(e, n) {
                    var i = t.call(this) || this;
                    return (i.type = e), (i.value = n), i;
                  }
                  return rn(e, t), e;
                })(on),
                an = (function () {
                  function t() {
                    this.observers = [];
                  }
                  return (
                    (t.prototype.register = function (t) {
                      this.observers.push(t);
                    }),
                    (t.prototype.unregister = function (t) {
                      var e = this.observers.indexOf(t);
                      -1 !== e && this.observers.splice(e, 1);
                    }),
                    (t.prototype.notifyAll = function (t) {
                      this.observers.forEach(function (e) {
                        return e.notify(t);
                      });
                    }),
                    t
                  );
                })(),
                cn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                hn = function (t) {
                  (this.data = t), (this.type = "Component Added");
                };
              function un(t) {
                return !!t && "Component Added" === t.type;
              }
              var ln = function (t) {
                (this.data = t), (this.type = "Component Removed");
              };
              function pn(t) {
                return !!t && "Component Removed" === t.type;
              }
              var dn = (function (t) {
                  function e() {
                    var n = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (n.id = e._ID++),
                      (n.active = !0),
                      (n._componentsToRemove = []),
                      (n._typesMemo = []),
                      (n._dirty = !0),
                      (n._handleChanges = {
                        defineProperty: function (t, e, i) {
                          return (
                            (t[e] = i.value),
                            n.changes.notifyAll(
                              new hn({ component: i.value, entity: n })
                            ),
                            !0
                          );
                        },
                        deleteProperty: function (t, e) {
                          return (
                            e in t &&
                            (n.changes.notifyAll(
                              new ln({ component: t[e], entity: n })
                            ),
                            delete t[e],
                            !0)
                          );
                        },
                      }),
                      (n.components = new Proxy({}, n._handleChanges)),
                      (n.changes = new an()),
                      (n._isInitialized = !1),
                      n
                    );
                  }
                  return (
                    cn(e, t),
                    (e.prototype.kill = function () {
                      this.active = !1;
                    }),
                    (e.prototype.isKilled = function () {
                      return !this.active;
                    }),
                    Object.defineProperty(e.prototype, "types", {
                      get: function () {
                        return this._dirty
                          ? (this._typesMemo = Object.keys(this.components))
                          : this._typesMemo;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.clone = function () {
                      for (
                        var t = new e(), n = 0, i = this.types;
                        n < i.length;
                        n++
                      ) {
                        var r = i[n];
                        t.addComponent(this.components[r].clone());
                      }
                      return t;
                    }),
                    (e.prototype.addComponent = function (t, n) {
                      if ((void 0 === n && (n = !1), t instanceof e))
                        for (var i in t.components)
                          this.addComponent(t.components[i].clone());
                      else {
                        if (this.components[t.type] && !n) return this;
                        if (
                          (this.components[t.type] &&
                            n &&
                            this.removeComponent(t),
                          t.dependencies && t.dependencies.length)
                        )
                          for (
                            var r = 0, o = t.dependencies;
                            r < o.length;
                            r++
                          ) {
                            var s = o[r];
                            this.addComponent(new s()), (this._dirty = !0);
                          }
                        (t.owner = this),
                          (this.components[t.type] = t),
                          t.onAdd && ((this._dirty = !0), t.onAdd(this));
                      }
                      return this;
                    }),
                    (e.prototype.removeComponent = function (t, e) {
                      return (
                        void 0 === e && (e = !1),
                        e
                          ? "string" == typeof t
                            ? this._removeComponentByType(t)
                            : t instanceof on &&
                              this._removeComponentByType(t.type)
                          : this._componentsToRemove.push(t),
                        this
                      );
                    }),
                    (e.prototype._removeComponentByType = function (t) {
                      this.components[t] &&
                        ((this.components[t].owner = null),
                        this.components[t].onRemove &&
                          this.components[t].onRemove(this),
                        delete this.components[t],
                        (this._dirty = !0));
                    }),
                    (e.prototype.processRemoval = function () {
                      for (
                        var t = 0, e = this._componentsToRemove;
                        t < e.length;
                        t++
                      ) {
                        var n = e[t],
                          i = "string" == typeof n ? n : n.type;
                        this._removeComponentByType(i);
                      }
                      this._componentsToRemove.length = 0;
                    }),
                    (e.prototype.has = function (t) {
                      return !!this.components[t];
                    }),
                    Object.defineProperty(e.prototype, "isInitialized", {
                      get: function () {
                        return this._isInitialized;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype._initialize = function (e) {
                      this.isInitialized ||
                        (this.onInitialize(e),
                        t.prototype.emit.call(
                          this,
                          "initialize",
                          new kt(e, this)
                        ),
                        (this._isInitialized = !0));
                    }),
                    (e.prototype._preupdate = function (t, e) {
                      this.emit("preupdate", new _t(t, e, this)),
                        this.onPreUpdate(t, e);
                    }),
                    (e.prototype._postupdate = function (t, e) {
                      this.emit("postupdate", new vt(t, e, this)),
                        this.onPostUpdate(t, e);
                    }),
                    (e.prototype.onInitialize = function (t) {}),
                    (e.prototype.onPreUpdate = function (t, e) {}),
                    (e.prototype.onPostUpdate = function (t, e) {}),
                    (e._ID = 0),
                    e
                  );
                })($t),
                fn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                yn = function (t, e, n, i) {
                  var r,
                    o = arguments.length,
                    s =
                      o < 3
                        ? e
                        : null === i
                        ? (i = Object.getOwnPropertyDescriptor(e, n))
                        : i;
                  if (
                    "object" == typeof Reflect &&
                    "function" == typeof Reflect.decorate
                  )
                    s = Reflect.decorate(t, e, n, i);
                  else
                    for (var a = t.length - 1; a >= 0; a--)
                      (r = t[a]) &&
                        (s =
                          (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s);
                  return o > 3 && s && Object.defineProperty(e, n, s), s;
                };
              function gn(t) {
                return t instanceof vn;
              }
              var _n,
                vn = (function (t) {
                  function e(e, n, i, r, o) {
                    return t.call(this, e, n, i, r, o) || this;
                  }
                  return fn(e, t), e;
                })(
                  pe(
                    (function (t) {
                      function e(n, i, r, o, s) {
                        var a = t.call(this) || this;
                        (a.id = e.maxId++),
                          (a._height = 0),
                          (a._width = 0),
                          (a.isOffScreen = !1),
                          (a.visible = !0),
                          (a.opacity = 1),
                          (a.previousOpacity = 1),
                          (a.logger = R.getInstance()),
                          (a.scene = null),
                          (a.parent = null),
                          (a.children = []),
                          (a.frames = {}),
                          (a.currentDrawing = null),
                          (a._draggable = !1),
                          (a._dragging = !1),
                          (a._pointerDragStartHandler = function () {
                            a._dragging = !0;
                          }),
                          (a._pointerDragEndHandler = function () {
                            a._dragging = !1;
                          }),
                          (a._pointerDragMoveHandler = function (t) {
                            a._dragging && (a.pos = t.pointer.lastWorldPos);
                          }),
                          (a._pointerDragLeaveHandler = function (t) {
                            a._dragging && (a.pos = t.pointer.lastWorldPos);
                          }),
                          (a.traits = []),
                          (a.enableCapturePointer = !1),
                          (a.capturePointer = {
                            captureMoveEvents: !1,
                            captureDragEvents: !1,
                          }),
                          (a._zIndex = 0),
                          (a._isKilled = !1),
                          (a._capturePointerEvents = [
                            "pointerup",
                            "pointerdown",
                            "pointermove",
                            "pointerenter",
                            "pointerleave",
                            "pointerdragstart",
                            "pointerdragend",
                            "pointerdragmove",
                            "pointerdragenter",
                            "pointerdragleave",
                          ]),
                          (a._captureMoveEvents = [
                            "pointermove",
                            "pointerenter",
                            "pointerleave",
                            "pointerdragmove",
                            "pointerdragenter",
                            "pointerdragleave",
                          ]),
                          (a._captureDragEvents = [
                            "pointerdragstart",
                            "pointerdragend",
                            "pointerdragmove",
                            "pointerdragenter",
                            "pointerdragleave",
                          ]),
                          a._initDefaults();
                        var c = !0,
                          h = st.Passive;
                        if (n && "object" == typeof n) {
                          var u = n;
                          u.pos
                            ? ((n = u.pos ? u.pos.x : 0),
                              (i = u.pos ? u.pos.y : 0))
                            : ((n = u.x || 0), (i = u.y || 0)),
                            (r = u.width),
                            (o = u.height),
                            u.body && ((c = !1), (a.body = u.body)),
                            u.anchor && (a.anchor = u.anchor),
                            u.collisionType && (h = u.collisionType);
                        }
                        return (
                          (a._width = r || 0),
                          (a._height = o || 0),
                          c &&
                            (a.body = new Ne({
                              collider: new nn({
                                type: h,
                                shape: We.Box(a._width, a._height, a.anchor),
                              }),
                            })),
                          (a.pos.x = n || 0),
                          (a.pos.y = i || 0),
                          s && ((a.color = s), (a.opacity = s.a)),
                          a.traits.push(new qe()),
                          a.traits.push(new Ge()),
                          a.traits.push(new Xe()),
                          (a.actionQueue = new ze(a)),
                          (a.actions = new Ue(a)),
                          a
                        );
                      }
                      return (
                        fn(e, t),
                        Object.defineProperty(e.prototype, "body", {
                          get: function () {
                            return this._body;
                          },
                          set: function (t) {
                            (this._body = t), (this._body.actor = this);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "pos", {
                          get: function () {
                            return this.body.pos;
                          },
                          set: function (t) {
                            this.body.pos.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oldPos", {
                          get: function () {
                            return this.body.oldPos;
                          },
                          set: function (t) {
                            this.body.oldPos.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "vel", {
                          get: function () {
                            return this.body.vel;
                          },
                          set: function (t) {
                            this.body.vel.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oldVel", {
                          get: function () {
                            return this.body.oldVel;
                          },
                          set: function (t) {
                            this.body.oldVel.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "acc", {
                          get: function () {
                            return this.body.acc;
                          },
                          set: function (t) {
                            this.body.acc.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oldAcc", {
                          get: function () {
                            return this.body.oldAcc;
                          },
                          set: function (t) {
                            this.body.oldAcc.setTo(t.x, t.y);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "rotation", {
                          get: function () {
                            return this.body.rotation;
                          },
                          set: function (t) {
                            this.body.rotation = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "rx", {
                          get: function () {
                            return this.body.rx;
                          },
                          set: function (t) {
                            this.body.rx = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "scale", {
                          get: function () {
                            return this.body.scale;
                          },
                          set: function (t) {
                            this.body.scale = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "oldScale", {
                          get: function () {
                            return this.body.oldScale;
                          },
                          set: function (t) {
                            this.body.oldScale = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sx", {
                          get: function () {
                            return this.body.sx;
                          },
                          set: function (t) {
                            this.body.sx = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "sy", {
                          get: function () {
                            return this.body.sy;
                          },
                          set: function (t) {
                            this.body.sy = t;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "draggable", {
                          get: function () {
                            return this._draggable;
                          },
                          set: function (t) {
                            t &&
                              (t && !this._draggable
                                ? (this.on(
                                    "pointerdragstart",
                                    this._pointerDragStartHandler
                                  ),
                                  this.on(
                                    "pointerdragend",
                                    this._pointerDragEndHandler
                                  ),
                                  this.on(
                                    "pointerdragmove",
                                    this._pointerDragMoveHandler
                                  ),
                                  this.on(
                                    "pointerdragleave",
                                    this._pointerDragLeaveHandler
                                  ))
                                : !t &&
                                  this._draggable &&
                                  (this.off(
                                    "pointerdragstart",
                                    this._pointerDragStartHandler
                                  ),
                                  this.off(
                                    "pointerdragend",
                                    this._pointerDragEndHandler
                                  ),
                                  this.off(
                                    "pointerdragmove",
                                    this._pointerDragMoveHandler
                                  ),
                                  this.off(
                                    "pointerdragleave",
                                    this._pointerDragLeaveHandler
                                  )),
                              (this._draggable = t));
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "color", {
                          get: function () {
                            return this._color;
                          },
                          set: function (t) {
                            this._color = t.clone();
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (e.prototype.onInitialize = function (t) {}),
                        (e.prototype._initialize = function (e) {
                          t.prototype._initialize.call(this, e);
                          for (var n = 0, i = this.children; n < i.length; n++)
                            i[n]._initialize(e);
                        }),
                        (e.prototype._initDefaults = function () {
                          this.anchor = vn.defaults.anchor.clone();
                        }),
                        (e.prototype._checkForPointerOptIn = function (t) {
                          if (t) {
                            var e = t.toLowerCase();
                            -1 !== this._capturePointerEvents.indexOf(e) &&
                              ((this.enableCapturePointer = !0),
                              -1 !== this._captureMoveEvents.indexOf(e) &&
                                (this.capturePointer.captureMoveEvents = !0),
                              -1 !== this._captureDragEvents.indexOf(e) &&
                                (this.capturePointer.captureDragEvents = !0));
                          }
                        }),
                        (e.prototype.on = function (e, n) {
                          this._checkForPointerOptIn(e),
                            t.prototype.on.call(this, e, n);
                        }),
                        (e.prototype.once = function (e, n) {
                          this._checkForPointerOptIn(e),
                            t.prototype.once.call(this, e, n);
                        }),
                        (e.prototype.off = function (e, n) {
                          t.prototype.off.call(this, e, n);
                        }),
                        (e.prototype._prekill = function (e) {
                          t.prototype.emit.call(this, "prekill", new ht(this)),
                            this.onPreKill(e);
                        }),
                        (e.prototype.onPreKill = function (t) {}),
                        (e.prototype._postkill = function (e) {
                          t.prototype.emit.call(this, "postkill", new ut(this)),
                            this.onPostKill(e);
                        }),
                        (e.prototype.onPostKill = function (t) {}),
                        (e.prototype.kill = function () {
                          this.scene
                            ? (this._prekill(this.scene),
                              this.emit("kill", new ct(this)),
                              (this._isKilled = !0),
                              this.scene.remove(this),
                              this._postkill(this.scene))
                            : this.logger.warn(
                                "Cannot kill actor, it was never added to the Scene"
                              );
                        }),
                        (e.prototype.unkill = function () {
                          this._isKilled = !1;
                        }),
                        (e.prototype.isKilled = function () {
                          return this._isKilled;
                        }),
                        (e.prototype.add = function (t) {
                          (t.body.collider.type = st.PreventCollision),
                            S(t, this.children) && (t.parent = this);
                        }),
                        (e.prototype.remove = function (t) {
                          C(t, this.children) && (t.parent = null);
                        }),
                        (e.prototype.setDrawing = function (t) {
                          (t = t.toString()),
                            this.currentDrawing !== this.frames[t] &&
                              (null != this.frames[t]
                                ? (this.frames[t].reset(),
                                  (this.currentDrawing = this.frames[t]))
                                : R.getInstance().error(
                                    "the specified drawing key " +
                                      t +
                                      " does not exist"
                                  ));
                        }),
                        (e.prototype.addDrawing = function () {
                          2 === arguments.length
                            ? ((this.frames[arguments[0]] = arguments[1]),
                              this.currentDrawing ||
                                (this.currentDrawing = arguments[1]))
                            : (arguments[0] instanceof ge &&
                                this.addDrawing("default", arguments[0]),
                              arguments[0] instanceof ve &&
                                this.addDrawing(
                                  "default",
                                  arguments[0].asSprite()
                                ));
                        }),
                        Object.defineProperty(e.prototype, "z", {
                          get: function () {
                            return this.getZIndex();
                          },
                          set: function (t) {
                            this.setZIndex(t);
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (e.prototype.getZIndex = function () {
                          return this._zIndex;
                        }),
                        (e.prototype.setZIndex = function (t) {
                          this.scene.cleanupDrawTree(this),
                            (this._zIndex = t),
                            this.scene.updateDrawTree(this);
                        }),
                        Object.defineProperty(e.prototype, "center", {
                          get: function () {
                            return new q(
                              this.pos.x +
                                this.width / 2 -
                                this.anchor.x * this.width,
                              this.pos.y +
                                this.height / 2 -
                                this.anchor.y * this.height
                            );
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "width", {
                          get: function () {
                            return this._width * this.getGlobalScale().x;
                          },
                          set: function (t) {
                            (this._width = t / this.scale.x),
                              (this.body.collider.shape = We.Box(
                                this._width,
                                this._height,
                                this.anchor
                              )),
                              this.body.markCollisionShapeDirty();
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "height", {
                          get: function () {
                            return this._height * this.getGlobalScale().y;
                          },
                          set: function (t) {
                            (this._height = t / this.scale.y),
                              (this.body.collider.shape = We.Box(
                                this._width,
                                this._height,
                                this.anchor
                              )),
                              this.body.markCollisionShapeDirty();
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (e.prototype.getWorldRotation = function () {
                          return this.parent
                            ? this.rotation + this.parent.getWorldRotation()
                            : this.rotation;
                        }),
                        (e.prototype.getWorldPos = function () {
                          if (!this.parent) return this.pos.clone();
                          var t = [],
                            e = this;
                          for (t.push(this); e.parent; )
                            (e = e.parent), t.push(e);
                          var n = t.reduceRight(function (t, e) {
                              return e.parent
                                ? t + e.pos.x * e.getGlobalScale().x
                                : t + e.pos.x;
                            }, 0),
                            i = t.reduceRight(function (t, e) {
                              return e.parent
                                ? t + e.pos.y * e.getGlobalScale().y
                                : t + e.pos.y;
                            }, 0),
                            r = e.getWorldPos(),
                            o = this.getWorldRotation();
                          return new q(n, i).rotate(o, r);
                        }),
                        (e.prototype.getGlobalScale = function () {
                          if (!this.parent)
                            return new q(this.scale.x, this.scale.y);
                          var t = this.parent.getGlobalScale();
                          return new q(this.scale.x * t.x, this.scale.y * t.y);
                        }),
                        (e.prototype.contains = function (t, e, n) {
                          void 0 === n && (n = !1);
                          var i = this.getWorldPos().sub(this.pos),
                            r = this.body.collider.bounds
                              .translate(i)
                              .contains(new q(t, e));
                          return n
                            ? r ||
                                this.children.some(function (n) {
                                  return n.contains(t, e, !0);
                                })
                            : r;
                        }),
                        (e.prototype.within = function (t, e) {
                          return (
                            this.body.collider.shape
                              .getClosestLineBetween(t.body.collider.shape)
                              .getLength() <= e
                          );
                        }),
                        (e.prototype.update = function (t, e) {
                          this._initialize(t), this._preupdate(t, e);
                          var n = this.currentDrawing;
                          n &&
                            n instanceof we &&
                            n.tick(e, t.stats.currFrame.id),
                            this.actionQueue.update(e),
                            this.color && (this.color.a = this.opacity),
                            0 === this.opacity && (this.visible = !1),
                            this.body.captureOldTransform(),
                            this.body.integrate(e);
                          for (var i = 0, r = this.traits; i < r.length; i++)
                            r[i].update(this, t, e);
                          for (var o = 0; o < this.children.length; o++)
                            this.children[o].update(t, e);
                          this._postupdate(t, e);
                        }),
                        (e.prototype.onPreUpdate = function (t, e) {}),
                        (e.prototype.onPostUpdate = function (t, e) {}),
                        (e.prototype._preupdate = function (t, e) {
                          this.emit("preupdate", new _t(t, e, this)),
                            this.onPreUpdate(t, e);
                        }),
                        (e.prototype._postupdate = function (t, e) {
                          this.emit("postupdate", new _t(t, e, this)),
                            this.onPostUpdate(t, e);
                        }),
                        (e.prototype.draw = function (t, e) {
                          if (
                            (t.save(),
                            t.translate(this.pos.x, this.pos.y),
                            t.rotate(this.rotation),
                            t.scale(this.scale.x, this.scale.y),
                            t.save(),
                            t.translate(
                              -this._width * this.anchor.x,
                              -this._height * this.anchor.y
                            ),
                            this._predraw(t, e),
                            this.currentDrawing)
                          ) {
                            var n = this.currentDrawing,
                              i =
                                (this._width - n.width * n.scale.x) *
                                this.anchor.x,
                              r =
                                (this._height - n.height * n.scale.y) *
                                this.anchor.y;
                            this.currentDrawing.draw({
                              ctx: t,
                              x: i,
                              y: r,
                              opacity: this.opacity,
                            });
                          } else
                            this.color &&
                              this.body &&
                              this.body.collider &&
                              this.body.collider.shape &&
                              this.body.collider.shape.draw(
                                t,
                                this.color,
                                new q(
                                  this.width * this.anchor.x,
                                  this.height * this.anchor.y
                                )
                              );
                          t.restore();
                          for (var o = 0; o < this.children.length; o++)
                            this.children[o].visible &&
                              this.children[o].draw(t, e);
                          this._postdraw(t, e), t.restore();
                        }),
                        (e.prototype.onPreDraw = function (t, e) {}),
                        (e.prototype.onPostDraw = function (t, e) {}),
                        (e.prototype._predraw = function (t, e) {
                          this.emit("predraw", new dt(t, e, this)),
                            this.onPreDraw(t, e);
                        }),
                        (e.prototype._postdraw = function (t, e) {
                          this.emit("postdraw", new dt(t, e, this)),
                            this.onPostDraw(t, e);
                        }),
                        (e.prototype.debugDraw = function (t) {
                          this.emit("predebugdraw", new yt(t, this)),
                            this.body.collider.debugDraw(t);
                          var e = this.body.collider.localBounds.translate(
                            this.getWorldPos()
                          );
                          e.debugDraw(t),
                            t.fillText(
                              "id: " + this.id,
                              e.left + 3,
                              e.top + 10
                            ),
                            (t.fillStyle = tt.Yellow.toString()),
                            t.beginPath(),
                            t.arc(
                              this.getWorldPos().x,
                              this.getWorldPos().y,
                              3,
                              0,
                              2 * Math.PI
                            ),
                            t.closePath(),
                            t.fill();
                          for (var n = 0; n < this.traits.length; n++)
                            this.traits[n] instanceof Ge &&
                              this.traits[n].cullingBox.debugDraw(t);
                          (t.strokeStyle = tt.Yellow.toString()), t.beginPath();
                          var i = Math.min(this.width, this.height);
                          t.arc(
                            this.getWorldPos().x,
                            this.getWorldPos().y,
                            i,
                            0,
                            2 * Math.PI
                          ),
                            t.closePath(),
                            t.stroke();
                          var r = {
                              "0 Pi": 0,
                              "Pi/2": Math.PI / 2,
                              Pi: Math.PI,
                              "3/2 Pi": (3 * Math.PI) / 2,
                            },
                            o = t.font;
                          for (var s in r)
                            (t.fillStyle = tt.Yellow.toString()),
                              (t.font = "14px"),
                              (t.textAlign = "center"),
                              t.fillText(
                                s,
                                this.getWorldPos().x +
                                  Math.cos(r[s]) * (i + 10),
                                this.getWorldPos().y + Math.sin(r[s]) * (i + 10)
                              );
                          t.font = o;
                          for (var a = 0; a < this.children.length; a++)
                            this.children[a].debugDraw(t);
                          this.emit("postdebugdraw", new gt(t, this));
                        }),
                        (e.prototype.getAncestors = function () {
                          for (var t, e = [this], n = this; (t = n.parent); )
                            (n = t), e.push(n);
                          return e.reverse();
                        }),
                        (e.defaults = { anchor: q.Half }),
                        (e.maxId = 0),
                        yn(
                          [
                            N({
                              message: "ex.Actor.sx will be removed in v0.25.0",
                              alternateMethod:
                                "Set width and height directly in constructor",
                            }),
                          ],
                          e.prototype,
                          "sx",
                          null
                        ),
                        yn(
                          [
                            N({
                              message: "ex.Actor.sy will be removed in v0.25.0",
                              alternateMethod:
                                "Set width and height directly in constructor",
                            }),
                          ],
                          e.prototype,
                          "sy",
                          null
                        ),
                        e
                      );
                    })(dn)
                  )
                ),
                mn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                bn = (function (t) {
                  function e(e, n, i, r) {
                    var o = this;
                    return (
                      ((o =
                        "object" != typeof e
                          ? t.call(this, e, n, i, r) || this
                          : t.call(this, e) || this).traits = []),
                      o.traits.push(new Xe()),
                      o.anchor.setTo(0, 0),
                      (o.body.collider.type = st.PreventCollision),
                      (o.body.collider.shape = We.Box(
                        o.width,
                        o.height,
                        o.anchor
                      )),
                      (o.enableCapturePointer = !0),
                      o
                    );
                  }
                  return (
                    mn(e, t),
                    (e.prototype._initialize = function (e) {
                      (this._engine = e), t.prototype._initialize.call(this, e);
                    }),
                    (e.prototype.contains = function (e, n, i) {
                      if ((void 0 === i && (i = !0), i))
                        return t.prototype.contains.call(this, e, n);
                      var r = this._engine.worldToScreenCoordinates(
                        new q(e, n)
                      );
                      return t.prototype.contains.call(this, r.x, r.y);
                    }),
                    e
                  );
                })(vn),
                wn = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    mn(e, t),
                    (function (t, e, n, i) {
                      var r,
                        o = arguments.length,
                        s =
                          o < 3
                            ? e
                            : null === i
                            ? (i = Object.getOwnPropertyDescriptor(e, n))
                            : i;
                      if (
                        "object" == typeof Reflect &&
                        "function" == typeof Reflect.decorate
                      )
                        s = Reflect.decorate(t, e, n, i);
                      else
                        for (var a = t.length - 1; a >= 0; a--)
                          (r = t[a]) &&
                            (s =
                              (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) ||
                              s);
                      return o > 3 && s && Object.defineProperty(e, n, s), s;
                    })(
                      [
                        N({
                          message: "Will be removed in v0.25.0",
                          alternateMethod: "ScreenElement",
                        }),
                      ],
                      e
                    )
                  );
                })(bn),
                xn = (function () {
                  function t(e, n, i, r) {
                    if (
                      ((this.id = 0),
                      (this.interval = 10),
                      (this.repeats = !1),
                      (this.maxNumberOfRepeats = -1),
                      (this._elapsedTime = 0),
                      (this._totalTimeAlive = 0),
                      (this._paused = !1),
                      (this._numberOfTicks = 0),
                      (this.complete = !1),
                      (this.scene = null),
                      "function" != typeof e)
                    ) {
                      var o = e;
                      (e = o.fcn),
                        (n = o.interval),
                        (i = o.repeats),
                        (r = o.numberOfRepeats);
                    }
                    if (r && r >= 0 && ((this.maxNumberOfRepeats = r), !i))
                      throw new Error(
                        "repeats must be set to true if numberOfRepeats is set"
                      );
                    (this.id = t.id++),
                      (this.interval = n || this.interval),
                      (this.repeats = i || this.repeats),
                      (this._callbacks = []),
                      e && this.on(e);
                  }
                  return (
                    (t.prototype.on = function (t) {
                      this._callbacks.push(t);
                    }),
                    (t.prototype.off = function (t) {
                      var e = this._callbacks.indexOf(t);
                      this._callbacks.splice(e, 1);
                    }),
                    (t.prototype.update = function (t) {
                      var e = this;
                      this._paused ||
                        ((this._totalTimeAlive += t),
                        (this._elapsedTime += t),
                        this.maxNumberOfRepeats > -1 &&
                          this._numberOfTicks >= this.maxNumberOfRepeats &&
                          (this.complete = !0),
                        !this.complete &&
                          this._elapsedTime >= this.interval &&
                          (this._callbacks.forEach(function (t) {
                            t.call(e);
                          }),
                          this._numberOfTicks++,
                          this.repeats
                            ? (this._elapsedTime = 0)
                            : (this.complete = !0)));
                    }),
                    (t.prototype.reset = function (t, e) {
                      if (
                        (t && t >= 0 && (this.interval = t),
                        this.maxNumberOfRepeats &&
                          this.maxNumberOfRepeats >= 0 &&
                          ((this.maxNumberOfRepeats = e), !this.repeats))
                      )
                        throw new Error(
                          "repeats must be set to true if numberOfRepeats is set"
                        );
                      (this.complete = !1),
                        (this._elapsedTime = 0),
                        (this._numberOfTicks = 0);
                    }),
                    Object.defineProperty(t.prototype, "timesRepeated", {
                      get: function () {
                        return this._numberOfTicks;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.getTimeRunning = function () {
                      return this._totalTimeAlive;
                    }),
                    (t.prototype.pause = function () {
                      this._paused = !0;
                    }),
                    (t.prototype.unpause = function () {
                      this._paused = !1;
                    }),
                    (t.prototype.cancel = function () {
                      this.scene && this.scene.cancelTimer(this);
                    }),
                    (t.id = 0),
                    t
                  );
                })(),
                Pn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                An = (function (t) {
                  function e(e, n, i, r, o, s) {
                    return t.call(this, e, n, i, r, o, s) || this;
                  }
                  return Pn(e, t), e;
                })(
                  pe(
                    (function (t) {
                      function e(e, n, i, r, o, s) {
                        var a = t.call(this) || this;
                        if (
                          ((a._collidingX = -1),
                          (a._collidingY = -1),
                          (a._onScreenXStart = 0),
                          (a._onScreenXEnd = 9999),
                          (a._onScreenYStart = 0),
                          (a._onScreenYEnd = 9999),
                          (a._spriteSheets = {}),
                          (a.logger = R.getInstance()),
                          (a.data = []),
                          e && "object" == typeof e)
                        ) {
                          var c = e;
                          (e = c.x),
                            (n = c.y),
                            (i = c.cellWidth),
                            (r = c.cellHeight),
                            (o = c.rows),
                            (s = c.cols);
                        }
                        (a.x = e),
                          (a.y = n),
                          (a.cellWidth = i),
                          (a.cellHeight = r),
                          (a.rows = o),
                          (a.cols = s),
                          (a.data = new Array(o * s));
                        for (
                          var h = function (t) {
                              for (
                                var c = function (o) {
                                    var c;
                                    (c = new Sn(
                                      t * i + e,
                                      o * r + n,
                                      i,
                                      r,
                                      t + o * s
                                    )),
                                      (a.data[t + o * s] = c);
                                  },
                                  h = 0;
                                h < o;
                                h++
                              )
                                c(h);
                            },
                            u = 0;
                          u < s;
                          u++
                        )
                          h(u);
                        return a;
                      }
                      return (
                        Pn(e, t),
                        (e.prototype.on = function (e, n) {
                          t.prototype.on.call(this, e, n);
                        }),
                        (e.prototype.registerSpriteSheet = function (t, e) {
                          this._spriteSheets[t] = e;
                        }),
                        (e.prototype.collides = function (t) {
                          var e = t.pos.x + t.width,
                            n = t.pos.y + t.height,
                            i = t.body.collider.bounds,
                            r = [];
                          if (t.width <= 0 || t.height <= 0) return null;
                          for (
                            var o = i.left;
                            o <= e;
                            o += Math.min(t.width / 2, this.cellWidth / 2)
                          )
                            for (
                              var s = i.top;
                              s <= n;
                              s += Math.min(t.height / 2, this.cellHeight / 2)
                            ) {
                              var a = this.getCellByPoint(o, s);
                              if (a && a.solid) {
                                var c = i.intersect(a.bounds),
                                  h = t.center.sub(a.center);
                                c && c.dot(h) > 0 && r.push(c);
                              }
                            }
                          return 0 === r.length
                            ? null
                            : r.reduce(function (t, e) {
                                var n = t.x,
                                  i = t.y;
                                return (
                                  Math.abs(t.x) < Math.abs(e.x) && (n = e.x),
                                  Math.abs(t.y) < Math.abs(e.y) && (i = e.y),
                                  new q(n, i)
                                );
                              });
                        }),
                        (e.prototype.getCellByIndex = function (t) {
                          return this.data[t];
                        }),
                        (e.prototype.getCell = function (t, e) {
                          return t < 0 ||
                            e < 0 ||
                            t >= this.cols ||
                            e >= this.rows
                            ? null
                            : this.data[t + e * this.cols];
                        }),
                        (e.prototype.getCellByPoint = function (t, e) {
                          (t = Math.floor((t - this.x) / this.cellWidth)),
                            (e = Math.floor((e - this.y) / this.cellHeight));
                          var n = this.getCell(t, e);
                          return t >= 0 &&
                            e >= 0 &&
                            t < this.cols &&
                            e < this.rows &&
                            n
                            ? n
                            : null;
                        }),
                        (e.prototype.onPreUpdate = function (t, e) {}),
                        (e.prototype.onPostUpdate = function (t, e) {}),
                        (e.prototype.update = function (t, e) {
                          this.onPreUpdate(t, e),
                            this.emit("preupdate", new _t(t, e, this));
                          var n = t.screenToWorldCoordinates(new q(0, 0)),
                            i = t.screenToWorldCoordinates(
                              new q(t.canvas.clientWidth, t.canvas.clientHeight)
                            );
                          (this._onScreenXStart = Math.max(
                            Math.floor((n.x - this.x) / this.cellWidth) - 2,
                            0
                          )),
                            (this._onScreenYStart = Math.max(
                              Math.floor((n.y - this.y) / this.cellHeight) - 2,
                              0
                            )),
                            (this._onScreenXEnd = Math.max(
                              Math.floor((i.x - this.x) / this.cellWidth) + 2,
                              0
                            )),
                            (this._onScreenYEnd = Math.max(
                              Math.floor((i.y - this.y) / this.cellHeight) + 2,
                              0
                            )),
                            this.onPostUpdate(t, e),
                            this.emit("postupdate", new vt(t, e, this));
                        }),
                        (e.prototype.draw = function (t, e) {
                          this.emit("predraw", new dt(t, e, this)),
                            t.save(),
                            t.translate(this.x, this.y);
                          for (
                            var n,
                              i,
                              r,
                              o = this._onScreenXStart,
                              s = Math.min(this._onScreenXEnd, this.cols),
                              a = this._onScreenYStart,
                              c = Math.min(this._onScreenYEnd, this.rows);
                            o < s;
                            o++
                          ) {
                            for (; a < c; a++)
                              for (
                                i = 0,
                                  r = (n = this.getCell(o, a).sprites.filter(
                                    function (t) {
                                      return t.spriteId > -1;
                                    }
                                  )).length;
                                i < r;
                                i++
                              ) {
                                var h = this._spriteSheets[n[i].spriteSheetKey];
                                if (h) {
                                  var u = h.getSprite(n[i].spriteId);
                                  u
                                    ? u.draw(
                                        t,
                                        o * this.cellWidth,
                                        a * this.cellHeight
                                      )
                                    : this.logger.warn(
                                        "Sprite does not exist for id",
                                        n[i].spriteId,
                                        "in sprite sheet",
                                        n[i].spriteSheetKey,
                                        u,
                                        h
                                      );
                                } else
                                  this.logger.warn(
                                    "Sprite sheet",
                                    n[i].spriteSheetKey,
                                    "does not exist",
                                    h
                                  );
                              }
                            a = this._onScreenYStart;
                          }
                          t.restore(),
                            this.emit("postdraw", new ft(t, e, this));
                        }),
                        (e.prototype.debugDraw = function (t) {
                          var e = this.cols * this.cellWidth,
                            n = this.rows * this.cellHeight;
                          t.save(), (t.strokeStyle = tt.Red.toString());
                          for (var i = 0; i < this.cols + 1; i++)
                            t.beginPath(),
                              t.moveTo(this.x + i * this.cellWidth, this.y),
                              t.lineTo(this.x + i * this.cellWidth, this.y + n),
                              t.stroke();
                          for (var r = 0; r < this.rows + 1; r++)
                            t.beginPath(),
                              t.moveTo(this.x, this.y + r * this.cellHeight),
                              t.lineTo(
                                this.x + e,
                                this.y + r * this.cellHeight
                              ),
                              t.stroke();
                          var o = tt.Red;
                          (o.a = 0.3),
                            this.data
                              .filter(function (t) {
                                return t.solid;
                              })
                              .forEach(function (e) {
                                (t.fillStyle = o.toString()),
                                  t.fillRect(e.x, e.y, e.width, e.height);
                              }),
                            this._collidingY > -1 &&
                              this._collidingX > -1 &&
                              ((t.fillStyle = tt.Cyan.toString()),
                              t.fillRect(
                                this.x + this._collidingX * this.cellWidth,
                                this.y + this._collidingY * this.cellHeight,
                                this.cellWidth,
                                this.cellHeight
                              )),
                            t.restore();
                        }),
                        e
                      );
                    })($t)
                  )
                ),
                En = function (t, e) {
                  (this.spriteSheetKey = t), (this.spriteId = e);
                },
                Sn = (function (t) {
                  function e(e, n, i, r, o, s, a) {
                    return t.call(this, e, n, i, r, o, s, a) || this;
                  }
                  return Pn(e, t), e;
                })(
                  pe(
                    (function () {
                      function t(t, e, n, i, r, o, s) {
                        if (
                          (void 0 === o && (o = !1),
                          void 0 === s && (s = []),
                          (this.solid = !1),
                          (this.sprites = []),
                          t && "object" == typeof t)
                        ) {
                          var a = t;
                          (t = a.x),
                            (e = a.y),
                            (n = a.width),
                            (i = a.height),
                            (r = a.index),
                            (o = a.solid),
                            (s = a.sprites);
                        }
                        (this.x = t),
                          (this.y = e),
                          (this.width = n),
                          (this.height = i),
                          (this.index = r),
                          (this.solid = o),
                          (this.sprites = s),
                          (this._bounds = new Qt(
                            this.x,
                            this.y,
                            this.x + this.width,
                            this.y + this.height
                          ));
                      }
                      return (
                        Object.defineProperty(t.prototype, "bounds", {
                          get: function () {
                            return this._bounds;
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "center", {
                          get: function () {
                            return new q(
                              this.x + this.width / 2,
                              this.y + this.height / 2
                            );
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (t.prototype.pushSprite = function (t) {
                          this.sprites.push(t);
                        }),
                        (t.prototype.removeSprite = function (t) {
                          var e;
                          (e = this.sprites.indexOf(t)) > -1 &&
                            this.sprites.splice(e, 1);
                        }),
                        (t.prototype.clearSprites = function () {
                          this.sprites.length = 0;
                        }),
                        t
                      );
                    })()
                  )
                ),
                Cn = (function () {
                  function t() {}
                  return (
                    (t.create = function () {
                      return (
                        this._INSTANCE ||
                          ((window.AudioContext || window.webkitAudioContext) &&
                            (this._INSTANCE = new window.AudioContext())),
                        this._INSTANCE
                      );
                    }),
                    (t._INSTANCE = null),
                    t
                  );
                })(),
                On = (function () {
                  function t() {}
                  return (
                    (t.unlock = function () {
                      var e = new d();
                      if (t._unlocked || !Cn.create()) return e.resolve(!0);
                      var n = setTimeout(function () {
                          R.getInstance().warn(
                            "Excalibur was unable to unlock the audio context, audio probably will not play in this browser."
                          ),
                            e.resolve();
                        }, 200),
                        i = Cn.create();
                      return (
                        i.resume().then(
                          function () {
                            var r = i.createBuffer(1, 1, 22050),
                              o = i.createBufferSource(),
                              s = !1;
                            (o.buffer = r),
                              o.connect(i.destination),
                              (o.onended = function () {
                                return (s = !0);
                              }),
                              o.noteOn ? o.noteOn(0) : o.start(0),
                              setTimeout(function () {
                                o.playbackState
                                  ? (o.playbackState !== o.PLAYING_STATE &&
                                      o.playbackState !== o.FINISHED_STATE) ||
                                    (t._unlocked = !0)
                                  : (i.currentTime > 0 || s) &&
                                    (t._unlocked = !0);
                              }, 0),
                              clearTimeout(n),
                              e.state() === h.Pending && e.resolve();
                          },
                          function () {
                            e.state() === h.Pending && e.reject(!1);
                          }
                        ),
                        e
                      );
                    }),
                    (t.isUnlocked = function () {
                      return this._unlocked;
                    }),
                    (t._unlocked = !1),
                    t
                  );
                })(),
                Tn = n(58),
                Bn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Mn = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (
                      (n._resourceList = []),
                      (n._index = 0),
                      (n._playButtonShown = !1),
                      (n._resourceCount = 0),
                      (n._numLoaded = 0),
                      (n._progressCounts = {}),
                      (n._totalCounts = {}),
                      (n.logo =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII="),
                      (n.logoWidth = 468),
                      (n.logoHeight = 118),
                      (n.loadingBarColor = tt.White),
                      (n.backgroundColor = "#176BAA"),
                      (n.suppressPlayButton = !1),
                      (n._playButtonStyles = Tn.a.toString()),
                      (n.playButtonText = "Play game"),
                      (n.startButtonFactory = function () {
                        var t = document.createElement("button");
                        return (
                          (t.id = "excalibur-play"),
                          (t.textContent = n.playButtonText),
                          (t.style.display = "none"),
                          t
                        );
                      }),
                      (n.getData = function () {}),
                      (n.setData = function () {}),
                      (n.processData = function () {}),
                      (n.onprogress = function (t) {
                        R.getInstance().debug(
                          "[ex.Loader] Loading " +
                            ((100 * t.loaded) / t.total).toFixed(0)
                        );
                      }),
                      (n.oncomplete = function () {}),
                      (n.onerror = function () {}),
                      e && n.addResources(e),
                      n
                    );
                  }
                  return (
                    Bn(e, t),
                    Object.defineProperty(e.prototype, "_image", {
                      get: function () {
                        return (
                          this._imageElement ||
                            ((this._imageElement = new Image()),
                            (this._imageElement.src = this.logo)),
                          this._imageElement
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(
                      e.prototype,
                      "playButtonRootElement",
                      {
                        get: function () {
                          return this._playButtonRootElement;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }
                    ),
                    Object.defineProperty(e.prototype, "playButtonElement", {
                      get: function () {
                        return this._playButtonElement;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "_playButton", {
                      get: function () {
                        return (
                          this._playButtonRootElement ||
                            ((this._playButtonRootElement = document.createElement(
                              "div"
                            )),
                            (this._playButtonRootElement.id =
                              "excalibur-play-root"),
                            (this._playButtonRootElement.style.position =
                              "absolute"),
                            document.body.appendChild(
                              this._playButtonRootElement
                            )),
                          this._styleBlock ||
                            ((this._styleBlock = document.createElement(
                              "style"
                            )),
                            (this._styleBlock.textContent = this._playButtonStyles),
                            document.head.appendChild(this._styleBlock)),
                          this._playButtonElement ||
                            ((this._playButtonElement = this.startButtonFactory()),
                            this._playButtonRootElement.appendChild(
                              this._playButtonElement
                            )),
                          this._playButtonElement
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.wireEngine = function (t) {
                      this._engine = t;
                    }),
                    (e.prototype.addResource = function (t) {
                      var e = this._index++;
                      this._resourceList.push(t),
                        (this._progressCounts[e] = 0),
                        (this._totalCounts[e] = 1),
                        this._resourceCount++;
                    }),
                    (e.prototype.addResources = function (t) {
                      for (var e = 0, n = t.length; e < n; e++)
                        this.addResource(t[e]);
                    }),
                    (e.prototype.isLoaded = function () {
                      return this._numLoaded === this._resourceCount;
                    }),
                    (e.prototype.showPlayButton = function () {
                      if (this.suppressPlayButton) return d.resolve();
                      (this._playButtonShown = !0),
                        (this._playButton.style.display = "block");
                      var t = new d();
                      return (
                        this._playButton.addEventListener("click", function () {
                          return t.state() === h.Pending ? t.resolve() : t;
                        }),
                        this._playButton.addEventListener(
                          "touchend",
                          function () {
                            return t.state() === h.Pending ? t.resolve() : t;
                          }
                        ),
                        this._playButton.addEventListener(
                          "pointerup",
                          function () {
                            return t.state() === h.Pending ? t.resolve() : t;
                          }
                        ),
                        t
                      );
                    }),
                    (e.prototype.hidePlayButton = function () {
                      (this._playButtonShown = !1),
                        (this._playButton.style.display = "none");
                    }),
                    (e.prototype.dispose = function () {
                      this._playButtonRootElement.parentElement &&
                        (this._playButtonRootElement.removeChild(
                          this._playButtonElement
                        ),
                        document.body.removeChild(this._playButtonRootElement),
                        document.head.removeChild(this._styleBlock),
                        (this._playButtonRootElement = null),
                        (this._playButtonElement = null),
                        (this._styleBlock = null));
                    }),
                    (e.prototype.load = function () {
                      var t = this,
                        e = new d();
                      return 0 === this._resourceList.length
                        ? (this.showPlayButton().then(function () {
                            On.unlock().then(function () {
                              t.hidePlayButton(),
                                t.oncomplete.call(t),
                                e.resolve(),
                                t.dispose();
                            });
                          }),
                          e)
                        : (this._resourceList.forEach(function (n) {
                            t._engine && n.wireEngine(t._engine),
                              (n.onprogress = function (e) {
                                t.updateResourceProgress(e.loaded, e.total);
                              }),
                              (n.oncomplete = n.onerror = function () {
                                t.markResourceComplete(),
                                  t.isLoaded() &&
                                    setTimeout(function () {
                                      t.showPlayButton().then(function () {
                                        On.unlock().then(function () {
                                          t.hidePlayButton(),
                                            t.oncomplete.call(t),
                                            e.resolve(),
                                            t.dispose();
                                        });
                                      });
                                    }, 200);
                              });
                          }),
                          (function t(e, n) {
                            e[n] &&
                              e[n].load().then(function () {
                                t(e, n + 1);
                              });
                          })(this._resourceList, 0),
                          e);
                    }),
                    (e.prototype.updateResourceProgress = function (t, e) {
                      var n =
                        (t / e) * (100 / this._resourceCount) +
                        100 * this.progress;
                      this.onprogress({ loaded: n, total: 100 });
                    }),
                    (e.prototype.markResourceComplete = function () {
                      this._numLoaded++;
                    }),
                    Object.defineProperty(e.prototype, "progress", {
                      get: function () {
                        return this._resourceCount > 0
                          ? this._numLoaded / this._resourceCount
                          : 1;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.draw = function (t) {
                      var e =
                          this._engine.canvasHeight / this._engine.pixelRatio,
                        n = this._engine.canvasWidth / this._engine.pixelRatio;
                      if (this._playButtonRootElement) {
                        var i = t.canvas.offsetLeft,
                          r = t.canvas.offsetTop,
                          o = this._playButton.clientWidth,
                          s = this._playButton.clientHeight;
                        this.playButtonPosition
                          ? ((this._playButtonRootElement.style.left =
                              this.playButtonPosition.x + "px"),
                            (this._playButtonRootElement.style.top =
                              this.playButtonPosition.y + "px"))
                          : ((this._playButtonRootElement.style.left =
                              i + n / 2 - o / 2 + "px"),
                            (this._playButtonRootElement.style.top =
                              r + e / 2 - s / 2 + 100 + "px"));
                      }
                      (t.fillStyle = this.backgroundColor),
                        t.fillRect(0, 0, n, e);
                      var a = e / 2,
                        c = Math.min(this.logoWidth, 0.75 * n),
                        h = n / 2 - c / 2;
                      this.logoPosition &&
                        ((h = this.logoPosition.x), (a = this.logoPosition.y));
                      var u = Math.floor(
                          c * (this.logoHeight / this.logoWidth)
                        ),
                        l = this._engine.getAntialiasing();
                      if (
                        (this._engine.setAntialiasing(!0),
                        this.logoPosition
                          ? t.drawImage(
                              this._image,
                              0,
                              0,
                              this.logoWidth,
                              this.logoHeight,
                              h,
                              a,
                              c,
                              u
                            )
                          : t.drawImage(
                              this._image,
                              0,
                              0,
                              this.logoWidth,
                              this.logoHeight,
                              h,
                              a - u - 20,
                              c,
                              u
                            ),
                        this.suppressPlayButton || !this._playButtonShown)
                      ) {
                        var p = h,
                          d = a;
                        this.loadingBarPosition &&
                          ((p = this.loadingBarPosition.x),
                          (d = this.loadingBarPosition.y)),
                          (t.lineWidth = 2),
                          Ye(t, p, d, c, 20, 10, this.loadingBarColor);
                        var f = c * this.progress - 10;
                        Ye(
                          t,
                          p + 5,
                          d + 5,
                          f > 10 ? f : 10,
                          10,
                          5,
                          null,
                          this.loadingBarColor
                        ),
                          this._engine.setAntialiasing(l);
                      } else this._engine.setAntialiasing(l);
                    }),
                    (e.prototype.update = function (t, e) {}),
                    e
                  );
                })($t),
                Dn = {
                  webgl: "WebGL",
                  webaudio: "WebAudio",
                  gamepadapi: "Gamepad API",
                },
                kn = (function () {
                  function t() {
                    (this._features = null),
                      (this.failedTests = []),
                      (this._criticalTests = {
                        canvasSupport: function () {
                          var t = document.createElement("canvas");
                          return !(!t.getContext || !t.getContext("2d"));
                        },
                        arrayBufferSupport: function () {
                          var t = new XMLHttpRequest();
                          t.open("GET", "/");
                          try {
                            t.responseType = "arraybuffer";
                          } catch (t) {
                            return !1;
                          }
                          return "arraybuffer" === t.responseType;
                        },
                        dataUrlSupport: function () {
                          return (
                            0 ===
                            document
                              .createElement("canvas")
                              .toDataURL("image/png")
                              .indexOf("data:image/png")
                          );
                        },
                        objectUrlSupport: function () {
                          return (
                            "URL" in window &&
                            "revokeObjectURL" in URL &&
                            "createObjectURL" in URL
                          );
                        },
                        rgbaSupport: function () {
                          var t = document.createElement("a").style;
                          return (
                            (t.cssText =
                              "background-color:rgba(150,255,150,.5)"),
                            ("" + t.backgroundColor).indexOf("rgba") > -1
                          );
                        },
                      }),
                      (this._warningTest = {
                        webAudioSupport: function () {
                          return !!(
                            window.AudioContext ||
                            window.webkitAudioContext ||
                            window.mozAudioContext ||
                            window.msAudioContext ||
                            window.oAudioContext
                          );
                        },
                        webglSupport: function () {
                          var t = document.createElement("canvas");
                          return !(!t.getContext || !t.getContext("webgl"));
                        },
                      }),
                      (this._features = this._loadBrowserFeatures());
                  }
                  return (
                    (t.prototype.getBrowserFeatures = function () {
                      return (
                        null === this._features &&
                          (this._features = this._loadBrowserFeatures()),
                        this._features
                      );
                    }),
                    (t.prototype.logBrowserFeatures = function () {
                      for (
                        var t =
                            "%cSUPPORTED BROWSER FEATURES\n==========================%c\n",
                          e = [
                            "font-weight: bold; color: navy",
                            "font-weight: normal; color: inherit",
                          ],
                          n = this.getBrowserFeatures(),
                          i = 0,
                          r = Object.keys(Dn);
                        i < r.length;
                        i++
                      ) {
                        var o = r[i];
                        n[o]
                          ? ((t += "(%c✓%c)"),
                            e.push("font-weight: bold; color: green"),
                            e.push("font-weight: normal; color: inherit"))
                          : ((t += "(%c✗%c)"),
                            e.push("font-weight: bold; color: red"),
                            e.push("font-weight: normal; color: inherit")),
                          (t += " " + Dn[o] + "\n");
                      }
                      e.unshift(t), console.log.apply(console, e);
                    }),
                    (t.prototype._loadBrowserFeatures = function () {
                      var t = this;
                      return {
                        canvas: t._criticalTests.canvasSupport(),
                        arraybuffer: t._criticalTests.arrayBufferSupport(),
                        dataurl: t._criticalTests.dataUrlSupport(),
                        objecturl: t._criticalTests.objectUrlSupport(),
                        rgba: t._criticalTests.rgbaSupport(),
                        webaudio: t._warningTest.webAudioSupport(),
                        webgl: t._warningTest.webglSupport(),
                        gamepadapi: !!navigator.getGamepads,
                      };
                    }),
                    (t.prototype.test = function () {
                      var t = !1;
                      for (var e in this._criticalTests)
                        this._criticalTests[e].call(this) ||
                          (this.failedTests.push(e),
                          R.getInstance().error(
                            "Critical browser feature missing, Excalibur requires:",
                            e
                          ),
                          (t = !0));
                      if (t) return !1;
                      for (var n in this._warningTest)
                        this._warningTest[n]() ||
                          R.getInstance().warn(
                            "Warning browser feature missing, Excalibur will have reduced performance:",
                            n
                          );
                      return !0;
                    }),
                    t
                  );
                })(),
                Rn = (function () {
                  function t(t) {
                    (this.parent = t),
                      (this.parent = t || null),
                      (this.body = null),
                      (this.bounds = new Qt()),
                      (this.left = null),
                      (this.right = null),
                      (this.height = 0);
                  }
                  return (
                    (t.prototype.isLeaf = function () {
                      return !this.left && !this.right;
                    }),
                    t
                  );
                })(),
                jn = (function () {
                  function t(t) {
                    void 0 === t &&
                      (t = new Qt(
                        -Number.MAX_VALUE,
                        -Number.MAX_VALUE,
                        Number.MAX_VALUE,
                        Number.MAX_VALUE
                      )),
                      (this.worldBounds = t),
                      (this.root = null),
                      (this.nodes = {});
                  }
                  return (
                    (t.prototype._insert = function (t) {
                      if (null === this.root)
                        return (this.root = t), void (this.root.parent = null);
                      for (var e = t.bounds, n = this.root; !n.isLeaf(); ) {
                        var i = n.left,
                          r = n.right,
                          o = n.bounds.getPerimeter(),
                          s = n.bounds.combine(e).getPerimeter(),
                          a = 2 * s,
                          c = 2 * (s - o),
                          h = 0,
                          u = e.combine(i.bounds),
                          l = void 0;
                        i.isLeaf()
                          ? (h = u.getPerimeter() + c)
                          : ((l = i.bounds.getPerimeter()),
                            (h = u.getPerimeter() - l + c));
                        var p = 0,
                          d = e.combine(r.bounds);
                        if (
                          (r.isLeaf()
                            ? (p = d.getPerimeter() + c)
                            : ((l = r.bounds.getPerimeter()),
                              (p = d.getPerimeter() - l + c)),
                          a < h && a < p)
                        )
                          break;
                        n = h < p ? i : r;
                      }
                      var f = n.parent,
                        y = new Rn(f);
                      (y.bounds = e.combine(n.bounds)),
                        (y.height = n.height + 1),
                        null !== f
                          ? (f.left === n ? (f.left = y) : (f.right = y),
                            (y.left = n),
                            (y.right = t),
                            (n.parent = y),
                            (t.parent = y))
                          : ((y.left = n),
                            (y.right = t),
                            (n.parent = y),
                            (t.parent = y),
                            (this.root = y));
                      for (var g = t.parent; g; ) {
                        if (!(g = this._balance(g)).left)
                          throw new Error(
                            "Parent of current leaf cannot have a null left child" +
                              g
                          );
                        if (!g.right)
                          throw new Error(
                            "Parent of current leaf cannot have a null right child" +
                              g
                          );
                        (g.height =
                          1 + Math.max(g.left.height, g.right.height)),
                          (g.bounds = g.left.bounds.combine(g.right.bounds)),
                          (g = g.parent);
                      }
                    }),
                    (t.prototype._remove = function (t) {
                      if (t !== this.root) {
                        var e,
                          n = t.parent,
                          i = n.parent;
                        if (((e = n.left === t ? n.right : n.left), i)) {
                          i.left === n ? (i.left = e) : (i.right = e),
                            (e.parent = i);
                          for (var r = i; r; )
                            ((r = this._balance(
                              r
                            )).bounds = r.left.bounds.combine(r.right.bounds)),
                              (r.height =
                                1 + Math.max(r.left.height, r.right.height)),
                              (r = r.parent);
                        } else (this.root = e), (e.parent = null);
                      } else this.root = null;
                    }),
                    (t.prototype.trackBody = function (t) {
                      var e = new Rn();
                      (e.body = t),
                        (e.bounds = t.collider.bounds),
                        (e.bounds.left -= 2),
                        (e.bounds.top -= 2),
                        (e.bounds.right += 2),
                        (e.bounds.bottom += 2),
                        (this.nodes[t.id] = e),
                        this._insert(e);
                    }),
                    (t.prototype.updateBody = function (t) {
                      var e = this.nodes[t.id];
                      if (!e) return !1;
                      var n = t.collider.bounds;
                      if (!this.worldBounds.contains(n))
                        return (
                          R.getInstance().warn(
                            "Collider with id " +
                              t.id +
                              " is outside the world bounds and will no longer be tracked for physics"
                          ),
                          this.untrackBody(t),
                          !1
                        );
                      if (e.bounds.contains(n)) return !1;
                      this._remove(e),
                        (n.left -= rt.boundsPadding),
                        (n.top -= rt.boundsPadding),
                        (n.right += rt.boundsPadding),
                        (n.bottom += rt.boundsPadding);
                      var i = t.vel.x * rt.dynamicTreeVelocityMultiplier,
                        r = t.vel.y * rt.dynamicTreeVelocityMultiplier;
                      return (
                        i < 0 ? (n.left += i) : (n.right += i),
                        r < 0 ? (n.top += r) : (n.bottom += r),
                        (e.bounds = n),
                        this._insert(e),
                        !0
                      );
                    }),
                    (t.prototype.untrackBody = function (t) {
                      var e = this.nodes[t.collider.id];
                      e &&
                        (this._remove(e),
                        (this.nodes[t.collider.id] = null),
                        delete this.nodes[t.collider.id]);
                    }),
                    (t.prototype._balance = function (t) {
                      if (null === t)
                        throw new Error("Cannot balance at null node");
                      if (t.isLeaf() || t.height < 2) return t;
                      var e = t.left,
                        n = t.right,
                        i = t,
                        r = e,
                        o = n,
                        s = e.left,
                        a = e.right,
                        c = n.left,
                        h = n.right,
                        u = o.height - r.height;
                      if (u > 1)
                        return (
                          (o.left = i),
                          (o.parent = i.parent),
                          (i.parent = o),
                          o.parent
                            ? o.parent.left === i
                              ? (o.parent.left = o)
                              : (o.parent.right = o)
                            : (this.root = o),
                          c.height > h.height
                            ? ((o.right = c),
                              (i.right = h),
                              (h.parent = i),
                              (i.bounds = r.bounds.combine(h.bounds)),
                              (o.bounds = i.bounds.combine(c.bounds)),
                              (i.height = 1 + Math.max(r.height, h.height)),
                              (o.height = 1 + Math.max(i.height, c.height)))
                            : ((o.right = h),
                              (i.right = c),
                              (c.parent = i),
                              (i.bounds = r.bounds.combine(c.bounds)),
                              (o.bounds = i.bounds.combine(h.bounds)),
                              (i.height = 1 + Math.max(r.height, c.height)),
                              (o.height = 1 + Math.max(i.height, h.height))),
                          o
                        );
                      if (u < -1) {
                        if (
                          ((r.left = i),
                          (r.parent = i.parent),
                          (i.parent = r),
                          r.parent)
                        )
                          if (r.parent.left === i) r.parent.left = r;
                          else {
                            if (r.parent.right !== i)
                              throw "Error rotating Dynamic Tree";
                            r.parent.right = r;
                          }
                        else this.root = r;
                        return (
                          s.height > a.height
                            ? ((r.right = s),
                              (i.left = a),
                              (a.parent = i),
                              (i.bounds = o.bounds.combine(a.bounds)),
                              (r.bounds = i.bounds.combine(s.bounds)),
                              (i.height = 1 + Math.max(o.height, a.height)),
                              (r.height = 1 + Math.max(i.height, s.height)))
                            : ((r.right = a),
                              (i.left = s),
                              (s.parent = i),
                              (i.bounds = o.bounds.combine(s.bounds)),
                              (r.bounds = i.bounds.combine(a.bounds)),
                              (i.height = 1 + Math.max(o.height, s.height)),
                              (r.height = 1 + Math.max(i.height, a.height))),
                          r
                        );
                      }
                      return t;
                    }),
                    (t.prototype.getHeight = function () {
                      return null === this.root ? 0 : this.root.height;
                    }),
                    (t.prototype.query = function (t, e) {
                      var n = t.collider.bounds,
                        i = function (r) {
                          if (r && r.bounds.intersect(n)) {
                            if (!r.isLeaf() || r.body === t)
                              return i(r.left) || i(r.right);
                            if (e.call(t, r.body)) return !0;
                          }
                          return !1;
                        };
                      i(this.root);
                    }),
                    (t.prototype.rayCastQuery = function (t, e, n) {
                      void 0 === e && (e = 1 / 0);
                      var i = function (r) {
                        if (r && r.bounds.rayCast(t, e)) {
                          if (!r.isLeaf()) return i(r.left) || i(r.right);
                          if (n.call(t, r.body)) return !0;
                        }
                        return !1;
                      };
                      i(this.root);
                    }),
                    (t.prototype.getNodes = function () {
                      var t = function (e) {
                        return e ? [e].concat(t(e.left), t(e.right)) : [];
                      };
                      return t(this.root);
                    }),
                    (t.prototype.debugDraw = function (t) {
                      var e = function (n) {
                        n &&
                          (n.isLeaf()
                            ? ((t.lineWidth = 1), (t.strokeStyle = "green"))
                            : ((t.lineWidth = 1), (t.strokeStyle = "white")),
                          n.bounds.debugDraw(t),
                          n.left && e(n.left),
                          n.right && e(n.right));
                      };
                      e(this.root);
                    }),
                    t
                  );
                })(),
                Fn = (function () {
                  function t() {
                    (this._dynamicCollisionTree = new jn()),
                      (this._collisionHash = {}),
                      (this._collisionPairCache = []),
                      (this._lastFramePairs = []),
                      (this._lastFramePairsHash = {});
                  }
                  return (
                    (t.prototype.track = function (t) {
                      t
                        ? this._dynamicCollisionTree.trackBody(t)
                        : R.getInstance().warn(
                            "Cannot track null physics body"
                          );
                    }),
                    (t.prototype.untrack = function (t) {
                      t
                        ? this._dynamicCollisionTree.untrackBody(t)
                        : R.getInstance().warn(
                            "Cannot untrack a null physics body"
                          );
                    }),
                    (t.prototype._shouldGenerateCollisionPair = function (
                      t,
                      e
                    ) {
                      var n = tn.calculatePairHash(t, e);
                      return !this._collisionHash[n] && tn.canCollide(t, e);
                    }),
                    (t.prototype.broadphase = function (t, e, n) {
                      var i,
                        r = this,
                        o = e / 1e3,
                        s = t
                          .map(function (t) {
                            return t.collider;
                          })
                          .filter(function (t) {
                            return t.active && t.type !== st.PreventCollision;
                          });
                      (this._collisionPairCache = []),
                        (this._collisionHash = {});
                      for (var a = 0, c = s.length; a < c; a++)
                        (i = s[a]),
                          this._dynamicCollisionTree.query(i.body, function (
                            t
                          ) {
                            if (r._shouldGenerateCollisionPair(i, t.collider)) {
                              var e = new tn(i, t.collider);
                              (r._collisionHash[e.id] = !0),
                                r._collisionPairCache.push(e);
                            }
                            return !1;
                          });
                      if (
                        (n &&
                          (n.physics.pairs = this._collisionPairCache.length),
                        rt.checkForFastBodies)
                      )
                        for (
                          var h = function (t) {
                              if (t.type !== st.Active) return "continue";
                              var e =
                                  t.body.vel.size * o +
                                  0.5 * t.body.acc.size * o * o,
                                i = Math.min(t.bounds.height, t.bounds.width);
                              if (
                                rt.disableMinimumSpeedForFastBody ||
                                e > i / 2
                              ) {
                                n && n.physics.fastBodies++;
                                var r,
                                  s = t.body.pos.sub(t.body.oldPos),
                                  a = t.shape.center,
                                  c = t.shape.getFurthestPoint(t.body.vel),
                                  h = c.sub(s),
                                  l = new V(h, t.body.vel);
                                l.pos = l.pos.add(
                                  l.dir.scale(-2 * rt.surfaceEpsilon)
                                );
                                var p = new q(1 / 0, 1 / 0);
                                if (
                                  (u._dynamicCollisionTree.rayCastQuery(
                                    l,
                                    e + 2 * rt.surfaceEpsilon,
                                    function (n) {
                                      if (
                                        t.body !== n &&
                                        n.collider.shape &&
                                        tn.canCollide(t, n.collider)
                                      ) {
                                        var i = n.collider.shape.rayCast(
                                          l,
                                          e + 10 * rt.surfaceEpsilon
                                        );
                                        if (i) {
                                          var o = i.sub(h);
                                          o.size < p.size && ((p = o), (r = n));
                                        }
                                      }
                                      return !1;
                                    }
                                  ),
                                  r && q.isValid(p))
                                ) {
                                  var d = new tn(t, r.collider);
                                  u._collisionHash[d.id] ||
                                    ((u._collisionHash[d.id] = !0),
                                    u._collisionPairCache.push(d));
                                  var f = a.sub(c);
                                  (t.body.pos = h
                                    .add(f)
                                    .add(p)
                                    .add(l.dir.scale(2 * rt.surfaceEpsilon))),
                                    t.shape.recalc(),
                                    n && n.physics.fastBodyCollisions++;
                                }
                              }
                            },
                            u = this,
                            l = 0,
                            p = s;
                          l < p.length;
                          l++
                        )
                          h(p[l]);
                      return this._collisionPairCache;
                    }),
                    (t.prototype.narrowphase = function (t, e) {
                      for (var n = 0; n < t.length; n++)
                        t[n].collide(),
                          e &&
                            t[n].collision &&
                            (e.physics.collisions++,
                            (e.physics.collidersHash[t[n].id] = t[n]));
                      return t.filter(function (t) {
                        return t.collision;
                      });
                    }),
                    (t.prototype.resolve = function (t, e, n) {
                      for (var i = 0, r = t; i < r.length; i++) {
                        var o = r[i];
                        o.resolve(n),
                          o.collision &&
                            (o.colliderA.body.applyMtv(),
                            o.colliderB.body.applyMtv(),
                            o.colliderA.body.integrate(e * rt.collisionShift),
                            o.colliderB.body.integrate(e * rt.collisionShift));
                      }
                      return t.filter(function (t) {
                        return t.canCollide;
                      });
                    }),
                    (t.prototype.runCollisionStartEnd = function (t) {
                      for (var e = {}, n = 0, i = t; n < i.length; n++)
                        if (
                          ((e[(c = i[n]).id] = c),
                          !this._lastFramePairsHash[c.id])
                        ) {
                          var r = c.colliderA,
                            o = c.colliderB;
                          r.emit("collisionstart", new Mt(r, o, c)),
                            o.emit("collisionstart", new Mt(o, r, c));
                        }
                      for (
                        var s = 0, a = this._lastFramePairs;
                        s < a.length;
                        s++
                      ) {
                        var c;
                        e[(c = a[s]).id] ||
                          ((r = c.colliderA),
                          (o = c.colliderB),
                          r.emit("collisionend", new Dt(r, o)),
                          o.emit("collisionend", new Dt(o, r)));
                      }
                      (this._lastFramePairs = t),
                        (this._lastFramePairsHash = e);
                    }),
                    (t.prototype.update = function (t) {
                      for (var e = 0, n = t.length, i = 0; i < n; i++)
                        this._dynamicCollisionTree.updateBody(t[i]) && e++;
                      return e;
                    }),
                    (t.prototype.debugDraw = function (t) {
                      if (
                        (rt.broadphaseDebug &&
                          this._dynamicCollisionTree.debugDraw(t),
                        rt.showContacts || rt.showCollisionNormals)
                      )
                        for (
                          var e = 0, n = this._collisionPairCache;
                          e < n.length;
                          e++
                        )
                          n[e].debugDraw(t);
                    }),
                    t
                  );
                })(),
                In = (function () {
                  function t(t) {
                    this._getComparable = t;
                  }
                  return (
                    (t.prototype.find = function (t) {
                      return this._find(this._root, t);
                    }),
                    (t.prototype._find = function (t, e) {
                      return (
                        null != t &&
                        (this._getComparable(e) === t.getKey()
                          ? t.getData().indexOf(e) > -1
                          : this._getComparable(e) < t.getKey()
                          ? this._find(t.getLeft(), e)
                          : this._find(t.getRight(), e))
                      );
                    }),
                    (t.prototype.get = function (t) {
                      return this._get(this._root, t);
                    }),
                    (t.prototype._get = function (t, e) {
                      return null == t
                        ? []
                        : e === t.getKey()
                        ? t.getData()
                        : e < t.getKey()
                        ? this._get(t.getLeft(), e)
                        : this._get(t.getRight(), e);
                    }),
                    (t.prototype.add = function (t) {
                      return null == this._root
                        ? ((this._root = new Ln(
                            this._getComparable(t),
                            [t],
                            null,
                            null
                          )),
                          !0)
                        : this._insert(this._root, t);
                    }),
                    (t.prototype._insert = function (t, e) {
                      return (
                        null != t &&
                        (this._getComparable(e) === t.getKey()
                          ? !(
                              t.getData().indexOf(e) > -1 ||
                              (t.getData().push(e), 0)
                            )
                          : this._getComparable(e) < t.getKey()
                          ? null == t.getLeft()
                            ? (t.setLeft(
                                new Ln(
                                  this._getComparable.call(e, e),
                                  [e],
                                  null,
                                  null
                                )
                              ),
                              !0)
                            : this._insert(t.getLeft(), e)
                          : null == t.getRight()
                          ? (t.setRight(
                              new Ln(
                                this._getComparable.call(e, e),
                                [e],
                                null,
                                null
                              )
                            ),
                            !0)
                          : this._insert(t.getRight(), e))
                      );
                    }),
                    (t.prototype.removeByComparable = function (t) {
                      this._root = this._remove(this._root, t);
                    }),
                    (t.prototype._remove = function (t, e) {
                      if (null == t) return null;
                      if (this._getComparable(e) !== t.getKey())
                        return this._getComparable(e) < t.getKey()
                          ? (t.setLeft(this._remove(t.getLeft(), e)), t)
                          : (t.setRight(this._remove(t.getRight(), e)), t);
                      var n = t.getData().indexOf(e);
                      if (n > -1) {
                        if (
                          (t.getData().splice(n, 1), 0 === t.getData().length)
                        ) {
                          if (null == t.getLeft() && null == t.getRight())
                            return null;
                          if (null == t.getLeft()) return t.getRight();
                          if (null == t.getRight()) return t.getLeft();
                          var i = this._findMinNode(t.getRight());
                          return (
                            t.setKey(i.getKey()),
                            t.setData(i.getData()),
                            t.setRight(this._cleanup(t.getRight(), i)),
                            t
                          );
                        }
                        return t;
                      }
                      return null;
                    }),
                    (t.prototype._cleanup = function (t, e) {
                      var n = e.getKey();
                      if (null == t) return null;
                      if (n === t.getKey()) {
                        if (null == t.getLeft() && null == t.getRight())
                          return null;
                        if (null == t.getLeft()) return t.getRight();
                        if (null == t.getRight()) return t.getLeft();
                        var i = this._findMinNode(t.getRight());
                        return (
                          t.setKey(i.getKey()),
                          t.setData(i.getData()),
                          t.setRight(this._cleanup(t.getRight(), i)),
                          t
                        );
                      }
                      return e.getKey() < t.getKey()
                        ? (t.setLeft(this._cleanup(t.getLeft(), e)), t)
                        : (t.setRight(this._cleanup(t.getRight(), e)), t);
                    }),
                    (t.prototype._findMinNode = function (t) {
                      for (var e = t; null != e.getLeft(); ) e = e.getLeft();
                      return e;
                    }),
                    (t.prototype.list = function () {
                      var t = new Array();
                      return this._list(this._root, t), t;
                    }),
                    (t.prototype._list = function (t, e) {
                      null != t &&
                        (this._list(t.getLeft(), e),
                        t.getData().forEach(function (t) {
                          e.push(t);
                        }),
                        this._list(t.getRight(), e));
                    }),
                    t
                  );
                })(),
                Ln = (function () {
                  function t(t, e, n, i) {
                    (this._key = t),
                      (this._data = e),
                      (this._left = n),
                      (this._right = i);
                  }
                  return (
                    (t.prototype.getKey = function () {
                      return this._key;
                    }),
                    (t.prototype.setKey = function (t) {
                      this._key = t;
                    }),
                    (t.prototype.getData = function () {
                      return this._data;
                    }),
                    (t.prototype.setData = function (t) {
                      this._data = t;
                    }),
                    (t.prototype.getLeft = function () {
                      return this._left;
                    }),
                    (t.prototype.setLeft = function (t) {
                      this._left = t;
                    }),
                    (t.prototype.getRight = function () {
                      return this._right;
                    }),
                    (t.prototype.setRight = function (t) {
                      this._right = t;
                    }),
                    t
                  );
                })(),
                zn = (function () {
                  function t(t) {
                    (this._key = 0), (this._key = t);
                  }
                  return (
                    (t.prototype.getTheKey = function () {
                      return this._key;
                    }),
                    (t.prototype.setKey = function (t) {
                      this._key = t;
                    }),
                    t
                  );
                })(),
                Hn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Un = (function () {
                  function t(t) {
                    this.camera = t;
                  }
                  return (
                    (t.prototype.lockToActor = function (t) {
                      this.camera.addStrategy(new Gn(t));
                    }),
                    (t.prototype.lockToActorAxis = function (t, e) {
                      this.camera.addStrategy(new Xn(t, e));
                    }),
                    (t.prototype.elasticToActor = function (t, e, n) {
                      this.camera.addStrategy(new Qn(t, e, n));
                    }),
                    (t.prototype.radiusAroundActor = function (t, e) {
                      this.camera.addStrategy(new Zn(t, e));
                    }),
                    (t.prototype.limitCameraBounds = function (t) {
                      this.camera.addStrategy(new Kn(t));
                    }),
                    t
                  );
                })();
              !(function (t) {
                (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
              })(_n || (_n = {}));
              var Wn,
                Nn,
                qn,
                Vn,
                Gn = function (t) {
                  (this.target = t),
                    (this.action = function (t, e, n, i) {
                      return t.center;
                    });
                },
                Xn = function (t, e) {
                  var n = this;
                  (this.target = t),
                    (this.axis = e),
                    (this.action = function (t, e, i, r) {
                      var o = t.center,
                        s = e.getFocus();
                      return n.axis === _n.X
                        ? new q(o.x, s.y)
                        : new q(s.x, o.y);
                    });
                },
                Qn = function (t, e, n) {
                  var i = this;
                  (this.target = t),
                    (this.cameraElasticity = e),
                    (this.cameraFriction = n),
                    (this.action = function (t, e, n, r) {
                      var o = t.center,
                        s = e.getFocus(),
                        a = e.vel.clone(),
                        c = o.sub(s).scale(i.cameraElasticity),
                        h = (a = a.add(c)).scale(-1).scale(i.cameraFriction);
                      return (a = a.add(h)), s.add(a);
                    });
                },
                Zn = function (t, e) {
                  var n = this;
                  (this.target = t),
                    (this.radius = e),
                    (this.action = function (t, e, i, r) {
                      var o = t.center,
                        s = e.getFocus(),
                        a = o.sub(s),
                        c = a.size;
                      if (c >= n.radius) {
                        var h = c - n.radius;
                        return s.add(a.normalize().scale(h));
                      }
                      return s;
                    });
                },
                Kn = function (t) {
                  var e = this;
                  (this.target = t),
                    (this.boundSizeChecked = !1),
                    (this.action = function (t, n, i, r) {
                      var o = n.getFocus();
                      return (
                        e.boundSizeChecked ||
                          ((t.bottom - t.top < i.drawHeight ||
                            t.right - t.left < i.drawWidth) &&
                            R.getInstance().warn(
                              "Camera bounds should not be smaller than the engine viewport"
                            ),
                          (e.boundSizeChecked = !0)),
                        o.x < t.left + i.halfDrawWidth
                          ? (o.x = t.left + i.halfDrawWidth)
                          : o.x > t.right - i.halfDrawWidth &&
                            (o.x = t.right - i.halfDrawWidth),
                        o.y < t.top + i.halfDrawHeight
                          ? (o.y = t.top + i.halfDrawHeight)
                          : o.y > t.bottom - i.halfDrawHeight &&
                            (o.y = t.bottom - i.halfDrawHeight),
                        o
                      );
                    });
                },
                Yn = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (
                      (e._cameraStrategies = []),
                      (e.strategy = new Un(e)),
                      (e.z = 1),
                      (e.dz = 0),
                      (e.az = 0),
                      (e.rotation = 0),
                      (e.rx = 0),
                      (e.pos = q.Zero),
                      (e.vel = q.Zero),
                      (e.acc = q.Zero),
                      (e._cameraMoving = !1),
                      (e._currentLerpTime = 0),
                      (e._lerpDuration = 1e3),
                      (e._lerpStart = null),
                      (e._lerpEnd = null),
                      (e._isShaking = !1),
                      (e._shakeMagnitudeX = 0),
                      (e._shakeMagnitudeY = 0),
                      (e._shakeDuration = 0),
                      (e._elapsedShakeTime = 0),
                      (e._xShake = 0),
                      (e._yShake = 0),
                      (e._isZooming = !1),
                      (e._zoomStart = 1),
                      (e._zoomEnd = 1),
                      (e._currentZoomTime = 0),
                      (e._zoomDuration = 0),
                      (e._zoomEasing = He.EaseInOutCubic),
                      (e._easing = He.EaseInOutCubic),
                      (e._isInitialized = !1),
                      e
                    );
                  }
                  return (
                    Hn(e, t),
                    Object.defineProperty(e.prototype, "angularVelocity", {
                      get: function () {
                        return this.rx;
                      },
                      set: function (t) {
                        this.rx = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "x", {
                      get: function () {
                        return this.pos.x;
                      },
                      set: function (t) {
                        this._follow || this._cameraMoving || (this.pos.x = t);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "y", {
                      get: function () {
                        return this.pos.y;
                      },
                      set: function (t) {
                        this._follow || this._cameraMoving || (this.pos.y = t);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dx", {
                      get: function () {
                        return this.vel.x;
                      },
                      set: function (t) {
                        this.vel.x = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "dy", {
                      get: function () {
                        return this.vel.y;
                      },
                      set: function (t) {
                        this.vel.y = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "ax", {
                      get: function () {
                        return this.acc.x;
                      },
                      set: function (t) {
                        this.acc.x = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "ay", {
                      get: function () {
                        return this.acc.y;
                      },
                      set: function (t) {
                        this.acc.y = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.getFocus = function () {
                      return this.pos;
                    }),
                    (e.prototype.move = function (t, e, n) {
                      if (
                        (void 0 === n && (n = He.EaseInOutCubic),
                        "function" != typeof n)
                      )
                        throw "Please specify an EasingFunction";
                      return this._follow
                        ? new d().reject(t)
                        : (this._lerpPromise &&
                            this._lerpPromise.state() === h.Pending &&
                            this._lerpPromise.resolve(t),
                          (this._lerpPromise = new d()),
                          (this._lerpStart = this.getFocus().clone()),
                          (this._lerpDuration = e),
                          (this._lerpEnd = t),
                          (this._currentLerpTime = 0),
                          (this._cameraMoving = !0),
                          (this._easing = n),
                          this._lerpPromise);
                    }),
                    (e.prototype.shake = function (t, e, n) {
                      (this._isShaking = !0),
                        (this._shakeMagnitudeX = t),
                        (this._shakeMagnitudeY = e),
                        (this._shakeDuration = n);
                    }),
                    (e.prototype.zoom = function (t, e, n) {
                      return (
                        void 0 === e && (e = 0),
                        void 0 === n && (n = He.EaseInOutCubic),
                        (this._zoomPromise = new d()),
                        e
                          ? ((this._isZooming = !0),
                            (this._zoomEasing = n),
                            (this._currentZoomTime = 0),
                            (this._zoomDuration = e),
                            (this._zoomStart = this.z),
                            (this._zoomEnd = t))
                          : ((this._isZooming = !1),
                            (this.z = t),
                            this._zoomPromise.resolve(!0)),
                        this._zoomPromise
                      );
                    }),
                    (e.prototype.getZoom = function () {
                      return this.z;
                    }),
                    Object.defineProperty(e.prototype, "viewport", {
                      get: function () {
                        if (this._engine) {
                          var t = this._engine.halfDrawWidth,
                            e = this._engine.halfDrawHeight;
                          return new Qt(
                            this.x - t,
                            this.y - e,
                            this.x + t,
                            this.y + e
                          );
                        }
                        return new Qt(0, 0, 0, 0);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.addStrategy = function (t) {
                      this._cameraStrategies.push(t);
                    }),
                    (e.prototype.removeStrategy = function (t) {
                      C(t, this._cameraStrategies);
                    }),
                    (e.prototype.clearAllStrategies = function () {
                      this._cameraStrategies.length = 0;
                    }),
                    (e.prototype._preupdate = function (t, e) {
                      this.emit("preupdate", new _t(t, e, this)),
                        this.onPreUpdate(t, e);
                    }),
                    (e.prototype.onPreUpdate = function (t, e) {}),
                    (e.prototype._postupdate = function (t, e) {
                      this.emit("postupdate", new vt(t, e, this)),
                        this.onPostUpdate(t, e);
                    }),
                    (e.prototype.onPostUpdate = function (t, e) {}),
                    Object.defineProperty(e.prototype, "isInitialized", {
                      get: function () {
                        return this._isInitialized;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype._initialize = function (e) {
                      this.isInitialized ||
                        (this.onInitialize(e),
                        t.prototype.emit.call(
                          this,
                          "initialize",
                          new kt(e, this)
                        ),
                        (this._isInitialized = !0),
                        (this._engine = e));
                    }),
                    (e.prototype.onInitialize = function (t) {}),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.off = function (e, n) {
                      t.prototype.off.call(this, e, n);
                    }),
                    (e.prototype.once = function (e, n) {
                      t.prototype.once.call(this, e, n);
                    }),
                    (e.prototype.update = function (t, e) {
                      if (
                        (this._initialize(t),
                        this._preupdate(t, e),
                        (this.pos = this.pos.add(this.vel.scale(e / 1e3))),
                        (this.z += (this.dz * e) / 1e3),
                        (this.vel = this.vel.add(this.acc.scale(e / 1e3))),
                        (this.dz += (this.az * e) / 1e3),
                        (this.rotation += (this.angularVelocity * e) / 1e3),
                        this._isZooming)
                      )
                        if (this._currentZoomTime < this._zoomDuration) {
                          var n = (0, this._zoomEasing)(
                            this._currentZoomTime,
                            this._zoomStart,
                            this._zoomEnd,
                            this._zoomDuration
                          );
                          (this.z = n), (this._currentZoomTime += e);
                        } else
                          (this._isZooming = !1),
                            (this.z = this._zoomEnd),
                            (this._currentZoomTime = 0),
                            this._zoomPromise.resolve(!0);
                      if (this._cameraMoving)
                        if (this._currentLerpTime < this._lerpDuration) {
                          var i = He.CreateVectorEasingFunction(this._easing)(
                            this._currentLerpTime,
                            this._lerpStart,
                            this._lerpEnd,
                            this._lerpDuration
                          );
                          (this.pos = i), (this._currentLerpTime += e);
                        } else {
                          this.pos = this._lerpEnd;
                          var r = this._lerpEnd.clone();
                          (this._lerpStart = null),
                            (this._lerpEnd = null),
                            (this._currentLerpTime = 0),
                            (this._cameraMoving = !1),
                            this._lerpPromise.resolve(r);
                        }
                      this._isDoneShaking()
                        ? ((this._isShaking = !1),
                          (this._elapsedShakeTime = 0),
                          (this._shakeMagnitudeX = 0),
                          (this._shakeMagnitudeY = 0),
                          (this._shakeDuration = 0),
                          (this._xShake = 0),
                          (this._yShake = 0))
                        : ((this._elapsedShakeTime += e),
                          (this._xShake =
                            1 + ((Math.random() * this._shakeMagnitudeX) | 0)),
                          (this._yShake =
                            1 + ((Math.random() * this._shakeMagnitudeY) | 0)));
                      for (
                        var o = 0, s = this._cameraStrategies;
                        o < s.length;
                        o++
                      ) {
                        var a = s[o];
                        this.pos = a.action.call(a, a.target, this, t, e);
                      }
                      this._postupdate(t, e);
                    }),
                    (e.prototype.draw = function (t) {
                      var e = this.getFocus(),
                        n = t.canvas.width,
                        i = t.canvas.height,
                        r = this._engine
                          ? this._engine.pixelRatio
                          : window.devicePixelRatio,
                        o = this.getZoom(),
                        s = n / o / r,
                        a = i / o / r;
                      t.scale(o, o),
                        t.translate(
                          -e.x + s / 2 + this._xShake,
                          -e.y + a / 2 + this._yShake
                        );
                    }),
                    (e.prototype.debugDraw = function (t) {
                      var e = this.getFocus();
                      (t.fillStyle = "red"),
                        (t.strokeStyle = "white"),
                        (t.lineWidth = 3),
                        t.beginPath(),
                        t.arc(e.x, e.y, 15, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke(),
                        t.beginPath(),
                        t.arc(e.x, e.y, 5, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke(),
                        t.beginPath(),
                        t.setLineDash([5, 15]),
                        (t.lineWidth = 5),
                        (t.strokeStyle = "white"),
                        t.strokeRect(
                          this.viewport.left,
                          this.viewport.top,
                          this.viewport.width,
                          this.viewport.height
                        ),
                        t.closePath();
                    }),
                    (e.prototype._isDoneShaking = function () {
                      return (
                        !this._isShaking ||
                        this._elapsedShakeTime >= this._shakeDuration
                      );
                    }),
                    e
                  );
                })($t),
                Jn = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              !(function (t) {
                (t[(t.Em = 0)] = "Em"),
                  (t[(t.Rem = 1)] = "Rem"),
                  (t[(t.Px = 2)] = "Px"),
                  (t[(t.Pt = 3)] = "Pt"),
                  (t[(t.Percent = 4)] = "Percent");
              })(Wn || (Wn = {})),
                (function (t) {
                  (t[(t.Left = 0)] = "Left"),
                    (t[(t.Right = 1)] = "Right"),
                    (t[(t.Center = 2)] = "Center"),
                    (t[(t.Start = 3)] = "Start"),
                    (t[(t.End = 4)] = "End");
                })(Nn || (Nn = {})),
                (function (t) {
                  (t[(t.Top = 0)] = "Top"),
                    (t[(t.Hanging = 1)] = "Hanging"),
                    (t[(t.Middle = 2)] = "Middle"),
                    (t[(t.Alphabetic = 3)] = "Alphabetic"),
                    (t[(t.Ideographic = 4)] = "Ideographic"),
                    (t[(t.Bottom = 5)] = "Bottom");
                })(qn || (qn = {})),
                (function (t) {
                  (t[(t.Normal = 0)] = "Normal"),
                    (t[(t.Italic = 1)] = "Italic"),
                    (t[(t.Oblique = 2)] = "Oblique");
                })(Vn || (Vn = {}));
              var $n = (function (t) {
                  function e(e, n, i, r, o) {
                    return t.call(this, e, n, i, r, o) || this;
                  }
                  return Jn(e, t), e;
                })(
                  pe(
                    (function (t) {
                      function e(e, n, i, r, o) {
                        var s =
                          t.call(
                            this,
                            e && "object" == typeof e ? e : { pos: new q(n, i) }
                          ) || this;
                        (s.bold = !1),
                          (s.fontSize = 10),
                          (s.fontStyle = Vn.Normal),
                          (s.fontUnit = Wn.Px),
                          (s.textAlign = Nn.Left),
                          (s.baseAlign = qn.Bottom),
                          (s.letterSpacing = 0),
                          (s.caseInsensitive = !0);
                        var a = "";
                        return (
                          e && "object" == typeof e
                            ? ((r = e.fontFamily),
                              (o = e.spriteFont),
                              (a = e.text))
                            : (a = e),
                          (s.text = a || ""),
                          (s.color = tt.Black),
                          (s.spriteFont = o),
                          (s.body.collider.type = st.PreventCollision),
                          (s.fontFamily = r || "sans-serif"),
                          (s._textShadowOn = !1),
                          (s._shadowOffsetX = 0),
                          (s._shadowOffsetY = 0),
                          s
                        );
                      }
                      return (
                        Jn(e, t),
                        (e.prototype.getTextWidth = function (t) {
                          var e = t.font;
                          t.font = this._fontString;
                          var n = t.measureText(this.text).width;
                          return (t.font = e), n;
                        }),
                        (e.prototype._lookupFontUnit = function (t) {
                          switch (t) {
                            case Wn.Em:
                              return "em";
                            case Wn.Rem:
                              return "rem";
                            case Wn.Pt:
                              return "pt";
                            case Wn.Px:
                              return "px";
                            case Wn.Percent:
                              return "%";
                            default:
                              return "px";
                          }
                        }),
                        (e.prototype._lookupTextAlign = function (t) {
                          switch (t) {
                            case Nn.Left:
                              return "left";
                            case Nn.Right:
                              return "right";
                            case Nn.Center:
                              return "center";
                            case Nn.End:
                              return "end";
                            case Nn.Start:
                            default:
                              return "start";
                          }
                        }),
                        (e.prototype._lookupBaseAlign = function (t) {
                          switch (t) {
                            case qn.Alphabetic:
                              return "alphabetic";
                            case qn.Bottom:
                              return "bottom";
                            case qn.Hanging:
                              return "hanging";
                            case qn.Ideographic:
                              return "ideographic";
                            case qn.Middle:
                              return "middle";
                            case qn.Top:
                              return "top";
                            default:
                              return "alphabetic";
                          }
                        }),
                        (e.prototype._lookupFontStyle = function (t) {
                          var e = this.bold ? " bold" : "";
                          switch (t) {
                            case Vn.Italic:
                              return "italic" + e;
                            case Vn.Normal:
                              return "normal" + e;
                            case Vn.Oblique:
                              return "oblique" + e;
                            default:
                              return "normal" + e;
                          }
                        }),
                        (e.prototype.setTextShadow = function (t, e, n) {
                          this.spriteFont.setTextShadow(t, e, n);
                        }),
                        (e.prototype.useTextShadow = function (t) {
                          this.spriteFont.useTextShadow(t);
                        }),
                        (e.prototype.clearTextShadow = function () {
                          (this._textShadowOn = !1),
                            (this._shadowOffsetX = 0),
                            (this._shadowOffsetY = 0);
                        }),
                        (e.prototype.update = function (e, n) {
                          t.prototype.update.call(this, e, n);
                        }),
                        (e.prototype.draw = function (e, n) {
                          e.save(),
                            e.translate(this.pos.x, this.pos.y),
                            e.scale(this.scale.x, this.scale.y),
                            e.rotate(this.rotation),
                            this._textShadowOn &&
                              (e.save(),
                              e.translate(
                                this._shadowOffsetX,
                                this._shadowOffsetY
                              ),
                              this._fontDraw(e),
                              e.restore()),
                            this._fontDraw(e),
                            t.prototype.draw.call(this, e, n),
                            e.restore();
                        }),
                        (e.prototype._fontDraw = function (t) {
                          if (this.spriteFont)
                            this.spriteFont.draw(t, this.text, 0, 0, {
                              color: this.color.clone(),
                              baseAlign: this.baseAlign,
                              textAlign: this.textAlign,
                              fontSize: this.fontSize,
                              letterSpacing: this.letterSpacing,
                              opacity: this.opacity,
                            });
                          else {
                            var e = t.textAlign,
                              n = t.textBaseline;
                            (t.textAlign = this._lookupTextAlign(
                              this.textAlign
                            )),
                              (t.textBaseline = this._lookupBaseAlign(
                                this.baseAlign
                              )),
                              this.color && (this.color.a = this.opacity),
                              (t.fillStyle = this.color.toString()),
                              (t.font = this._fontString),
                              this.maxWidth
                                ? t.fillText(this.text, 0, 0, this.maxWidth)
                                : t.fillText(this.text, 0, 0),
                              (t.textAlign = e),
                              (t.textBaseline = n);
                          }
                        }),
                        Object.defineProperty(e.prototype, "_fontString", {
                          get: function () {
                            return (
                              this._lookupFontStyle(this.fontStyle) +
                              " " +
                              this.fontSize +
                              this._lookupFontUnit(this.fontUnit) +
                              " " +
                              this.fontFamily
                            );
                          },
                          enumerable: !1,
                          configurable: !0,
                        }),
                        (e.prototype.debugDraw = function (e) {
                          t.prototype.debugDraw.call(this, e);
                        }),
                        e
                      );
                    })(vn)
                  )
                ),
                ti = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                ei = {
                  pos: q.Zero,
                  width: 10,
                  height: 10,
                  visible: !1,
                  action: function () {},
                  filter: function () {
                    return !0;
                  },
                  repeat: -1,
                },
                ni = (function (t) {
                  function e(e) {
                    var n =
                      t.call(this, e.pos.x, e.pos.y, e.width, e.height) || this;
                    return (
                      (n.action = function () {}),
                      (n.filter = function () {
                        return !0;
                      }),
                      (n.repeat = -1),
                      (e = g({}, ei, e)),
                      (n.filter = e.filter || n.filter),
                      (n.repeat = e.repeat || n.repeat),
                      (n.action = e.action || n.action),
                      e.target && (n.target = e.target),
                      (n.visible = e.visible),
                      (n.body.collider.type = st.Passive),
                      (n.eventDispatcher = new Jt(n)),
                      (n.actionQueue = new ze(n)),
                      n.on("collisionstart", function (t) {
                        gn(t.other) &&
                          n.filter(t.other) &&
                          (n.emit("enter", new Lt(n, t.other)),
                          n._dispatchAction(),
                          0 === n.repeat && n.kill());
                      }),
                      n.on("collisionend", function (t) {
                        gn(t.other) &&
                          n.filter(t.other) &&
                          n.emit("exit", new zt(n, t.other));
                      }),
                      n
                    );
                  }
                  return (
                    ti(e, t),
                    Object.defineProperty(e.prototype, "target", {
                      get: function () {
                        return this._target;
                      },
                      set: function (t) {
                        (this._target = t),
                          (this.filter = function (e) {
                            return e === t;
                          });
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype._initialize = function (e) {
                      t.prototype._initialize.call(this, e);
                    }),
                    (e.prototype._dispatchAction = function () {
                      this.action.call(this), this.repeat--;
                    }),
                    (e.prototype.debugDraw = function (e) {
                      t.prototype.debugDraw.call(this, e),
                        e.save(),
                        e.translate(this.pos.x, this.pos.y);
                      var n = this.body.collider.bounds,
                        i = this.getWorldPos();
                      (n.left = n.left - i.x),
                        (n.right = n.right - i.x),
                        (n.top = n.top - i.y),
                        (n.bottom = n.bottom - i.y),
                        (e.fillStyle = tt.Violet.toString()),
                        (e.strokeStyle = tt.Violet.toString()),
                        e.fillText("Trigger", 10, 10),
                        n.debugDraw(e),
                        e.restore();
                    }),
                    e
                  );
                })(vn);
              function ii(t) {
                return t instanceof bn;
              }
              var ri,
                oi = function (t) {
                  return t
                    .sort(function (t, e) {
                      return t.localeCompare(e);
                    })
                    .join("+");
                };
              !(function (t) {
                (t.Update = "update"), (t.Draw = "draw");
              })(ri || (ri = {}));
              var si = (function () {
                  function t() {
                    this.priority = 0;
                  }
                  return (t.prototype.notify = function (t) {}), t;
                })(),
                ai = function (t) {
                  (this.data = t), (this.type = "Entity Added");
                };
              function ci(t) {
                return !!t && "Entity Added" === t.type;
              }
              var hi = function (t) {
                (this.data = t), (this.type = "Entity Removed");
              };
              function ui(t) {
                return !!t && "Entity Removed" === t.type;
              }
              var li,
                pi = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                di = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.types = e), (n.entities = []), n;
                  }
                  return (
                    pi(e, t),
                    Object.defineProperty(e.prototype, "key", {
                      get: function () {
                        return oi(this.types);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.addEntity = function (t) {
                      !u.contains(this.entities, t) &&
                        this.matches(t) &&
                        (this.entities.push(t), this.notifyAll(new ai(t)));
                    }),
                    (e.prototype.removeEntity = function (t) {
                      u.removeItemFromArray(t, this.entities) &&
                        this.notifyAll(new hi(t));
                    }),
                    (e.prototype.clear = function () {
                      this.entities.length = 0;
                      for (var t = 0, e = this.observers; t < e.length; t++) {
                        var n = e[t];
                        this.unregister(n);
                      }
                    }),
                    (e.prototype.matches = function (t) {
                      var e = [];
                      e = t instanceof dn ? t.types : t;
                      for (
                        var n = !0, i = 0, r = this.types;
                        i < r.length;
                        i++
                      ) {
                        var o = r[i];
                        if (!(n = n && e.indexOf(o) > -1)) return !1;
                      }
                      return n;
                    }),
                    e
                  );
                })(an),
                fi = (function () {
                  function t(t) {
                    (this.scene = t), (this._queries = {});
                  }
                  return (
                    (t.prototype._addQuery = function (t) {
                      this._queries[oi(t.types)] = t;
                      for (
                        var e = 0, n = this.scene.entityManager.entities;
                        e < n.length;
                        e++
                      ) {
                        var i = n[e];
                        t.addEntity(i);
                      }
                    }),
                    (t.prototype.maybeRemoveQuery = function (t) {
                      0 === t.observers.length &&
                        (t.clear(), delete this._queries[oi(t.types)]);
                    }),
                    (t.prototype.addEntity = function (t) {
                      for (var e in this._queries)
                        this._queries[e] && this._queries[e].addEntity(t);
                    }),
                    (t.prototype.removeComponent = function (t, e) {
                      for (var n in this._queries)
                        this._queries[n].matches(t.types.concat([e.type])) &&
                          this._queries[n].removeEntity(t);
                    }),
                    (t.prototype.removeEntity = function (t) {
                      for (var e in this._queries)
                        this._queries[e].entities.indexOf(t) > -1 &&
                          this._queries[e].removeEntity(t);
                    }),
                    (t.prototype.createQuery = function (t) {
                      var e = this.getQuery(t);
                      if (e) return e;
                      var n = new di(t);
                      return this._addQuery(n), n;
                    }),
                    (t.prototype.getQuery = function (t) {
                      var e = oi(t);
                      return this._queries[e] ? this._queries[e] : null;
                    }),
                    t
                  );
                })(),
                yi = (function () {
                  function t(t) {
                    (this._scene = t),
                      (this.entities = []),
                      (this._entityIndex = {});
                  }
                  return (
                    (t.prototype.notify = function (t) {
                      un(t) &&
                        this._scene.queryManager.addEntity(t.data.entity),
                        pn(t) &&
                          this._scene.queryManager.removeComponent(
                            t.data.entity,
                            t.data.component
                          );
                    }),
                    (t.prototype.addEntity = function (t) {
                      t &&
                        ((this._entityIndex[t.id] = t),
                        this.entities.push(t),
                        this._scene.queryManager.addEntity(t),
                        t.changes.register(this));
                    }),
                    (t.prototype.removeEntity = function (t) {
                      var e;
                      e = t instanceof dn ? t.id : t;
                      var n = this._entityIndex[e];
                      delete this._entityIndex[e],
                        n &&
                          (u.removeItemFromArray(n, this.entities),
                          this._scene.queryManager.removeEntity(n),
                          n.changes.unregister(this));
                    }),
                    (t.prototype.processRemovals = function () {
                      for (var t = 0, e = this.entities; t < e.length; t++)
                        e[t].processRemoval();
                    }),
                    (t.prototype.getById = function (t) {
                      return this._entityIndex[t];
                    }),
                    t
                  );
                })(),
                gi = (function () {
                  function t(t) {
                    (this._scene = t), (this.systems = []);
                  }
                  return (
                    (t.prototype.addSystem = function (t) {
                      if (!t.types || 0 === t.types.length)
                        throw new Error(
                          "Attempted to add a System without any types"
                        );
                      var e = this._scene.queryManager.createQuery(t.types);
                      this.systems.push(t),
                        this.systems.sort(function (t, e) {
                          return t.priority - e.priority;
                        }),
                        e.register(t);
                    }),
                    (t.prototype.removeSystem = function (t) {
                      u.removeItemFromArray(t, this.systems);
                      var e = this._scene.queryManager.getQuery(t.types);
                      e &&
                        (e.unregister(t),
                        this._scene.queryManager.maybeRemoveQuery(e));
                    }),
                    (t.prototype.updateSystems = function (t, e, n) {
                      for (
                        var i = this.systems.filter(function (e) {
                            return e.systemType === t;
                          }),
                          r = 0,
                          o = i;
                        r < o.length;
                        r++
                      )
                        (c = o[r]).preupdate && c.preupdate(e, n);
                      for (var s = 0, a = i; s < a.length; s++) {
                        var c = a[s],
                          h = this._scene.queryManager.getQuery(c.types)
                            .entities;
                        c.update(h, n);
                      }
                      for (var u = 0, l = i; u < l.length; u++)
                        (c = l[u]).postupdate && c.postupdate(e, n);
                    }),
                    t
                  );
                })(),
                _i = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                vi = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (
                      (n.actors = []),
                      (n.queryManager = new fi(n)),
                      (n.entityManager = new yi(n)),
                      (n.systemManager = new gi(n)),
                      (n._bodies = []),
                      (n.triggers = []),
                      (n.tileMaps = []),
                      (n.screenElements = []),
                      (n._isInitialized = !1),
                      (n._sortedDrawingTree = new In(vn.prototype.getZIndex)),
                      (n._broadphase = new Fn()),
                      (n._killQueue = []),
                      (n._triggerKillQueue = []),
                      (n._timers = []),
                      (n._cancelQueue = []),
                      (n._logger = R.getInstance()),
                      (n.camera = new Yn()),
                      (n._engine = e),
                      e &&
                        ((n.camera.x = e.halfDrawWidth),
                        (n.camera.y = e.halfDrawHeight)),
                      n
                    );
                  }
                  return (
                    _i(e, t),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.once = function (e, n) {
                      t.prototype.once.call(this, e, n);
                    }),
                    (e.prototype.off = function (e, n) {
                      t.prototype.off.call(this, e, n);
                    }),
                    (e.prototype.onInitialize = function (t) {}),
                    (e.prototype.onActivate = function (t, e) {}),
                    (e.prototype.onDeactivate = function (t, e) {}),
                    (e.prototype.onPreUpdate = function (t, e) {}),
                    (e.prototype.onPostUpdate = function (t, e) {}),
                    (e.prototype.onPreDraw = function (t, e) {}),
                    (e.prototype.onPostDraw = function (t, e) {}),
                    (e.prototype._initializeChildren = function () {
                      for (var t = 0, e = this.actors; t < e.length; t++)
                        e[t]._initialize(this._engine);
                    }),
                    Object.defineProperty(e.prototype, "isInitialized", {
                      get: function () {
                        return this._isInitialized;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype._initialize = function (t) {
                      this.isInitialized ||
                        ((this._engine = t),
                        this.camera &&
                          ((this.camera.x = t.halfDrawWidth),
                          (this.camera.y = t.halfDrawHeight)),
                        this.onInitialize.call(this, t),
                        this._initializeChildren(),
                        this._logger.debug("Scene.onInitialize", this, t),
                        this.eventDispatcher.emit(
                          "initialize",
                          new kt(t, this)
                        ),
                        (this._isInitialized = !0));
                    }),
                    (e.prototype._activate = function (t, e) {
                      this._logger.debug("Scene.onActivate", this),
                        this.onActivate(t, e);
                    }),
                    (e.prototype._deactivate = function (t, e) {
                      this._logger.debug("Scene.onDeactivate", this),
                        this.onDeactivate(t, e);
                    }),
                    (e.prototype._preupdate = function (t, e) {
                      this.emit("preupdate", new _t(t, e, this)),
                        this.onPreUpdate(t, e);
                    }),
                    (e.prototype._postupdate = function (t, e) {
                      this.emit("postupdate", new vt(t, e, this)),
                        this.onPostUpdate(t, e);
                    }),
                    (e.prototype._predraw = function (t, e) {
                      this.emit("predraw", new dt(t, e, this)),
                        this.onPreDraw(t, e);
                    }),
                    (e.prototype._postdraw = function (t, e) {
                      this.emit("postdraw", new ft(t, e, this)),
                        this.onPostDraw(t, e);
                    }),
                    (e.prototype.update = function (t, e) {
                      var n, i;
                      for (
                        this._preupdate(t, e),
                          this.systemManager.updateSystems(ri.Update, t, e),
                          this.entityManager.processRemovals(),
                          this.camera && this.camera.update(t, e),
                          n = 0,
                          i = this._cancelQueue.length;
                        n < i;
                        n++
                      )
                        this.removeTimer(this._cancelQueue[n]);
                      this._cancelQueue.length = 0;
                      for (var r = 0, o = this._timers; r < o.length; r++)
                        o[r].update(e);
                      for (n = 0, i = this.screenElements.length; n < i; n++)
                        this.screenElements[n].update(t, e);
                      for (n = 0, i = this.tileMaps.length; n < i; n++)
                        this.tileMaps[n].update(t, e);
                      for (n = 0, i = this.actors.length; n < i; n++)
                        this.actors[n].update(t, e),
                          (this._bodies[n] = this.actors[n].body);
                      for (n = 0, i = this.triggers.length; n < i; n++)
                        this.triggers[n].update(t, e);
                      if (
                        (this._collectActorStats(t),
                        t.input.pointers.dispatchPointerEvents(),
                        this._broadphase && rt.enabled)
                      ) {
                        var s = Date.now();
                        this._broadphase.update(this._bodies, e);
                        for (
                          var a = this._broadphase.broadphase(
                              this._bodies,
                              e,
                              t.stats.currFrame
                            ),
                            c = Date.now(),
                            h = Date.now(),
                            u = rt.collisionPasses,
                            l = e / u;
                          u > 0;

                        )
                          (a = this._broadphase.narrowphase(
                            a,
                            t.stats.currFrame
                          )),
                            (a = this._broadphase.resolve(
                              a,
                              l,
                              rt.collisionResolutionStrategy
                            )),
                            this._broadphase.runCollisionStartEnd(a),
                            u--;
                        var p = Date.now();
                        (t.stats.currFrame.physics.broadphase = c - s),
                          (t.stats.currFrame.physics.narrowphase = p - h);
                      }
                      (t.stats.currFrame.actors.killed =
                        this._killQueue.length + this._triggerKillQueue.length),
                        this._processKillQueue(this._killQueue, this.actors),
                        this._processKillQueue(
                          this._triggerKillQueue,
                          this.triggers
                        ),
                        this._postupdate(t, e);
                    }),
                    (e.prototype._processKillQueue = function (t, e) {
                      for (var n, i = 0, r = t; i < r.length; i++) {
                        var o = r[i];
                        o.isKilled() &&
                          (n = e.indexOf(o)) > -1 &&
                          (this._sortedDrawingTree.removeByComparable(o),
                          e.splice(n, 1));
                      }
                      t.length = 0;
                    }),
                    (e.prototype.draw = function (t, e) {
                      var n, i;
                      for (
                        this._predraw(t, e),
                          t.save(),
                          this.camera && this.camera.draw(t),
                          this.systemManager.updateSystems(
                            ri.Draw,
                            this._engine,
                            e
                          ),
                          this.entityManager.processRemovals(),
                          n = 0,
                          i = this.tileMaps.length;
                        n < i;
                        n++
                      )
                        this.tileMaps[n].draw(t, e);
                      var r = this._sortedDrawingTree.list();
                      for (n = 0, i = r.length; n < i; n++)
                        r[n].visible && !r[n].isOffScreen && r[n].draw(t, e);
                      for (
                        this._engine &&
                          this._engine.isDebug &&
                          ((t.strokeStyle = "yellow"), this.debugDraw(t)),
                          t.restore(),
                          n = 0,
                          i = this.screenElements.length;
                        n < i;
                        n++
                      )
                        this.screenElements[n].visible &&
                          this.screenElements[n].draw(t, e);
                      if (this._engine && this._engine.isDebug)
                        for (n = 0, i = this.screenElements.length; n < i; n++)
                          this.screenElements[n].debugDraw(t);
                      this._postdraw(t, e);
                    }),
                    (e.prototype.debugDraw = function (t) {
                      var e, n;
                      for (
                        this.emit("predebugdraw", new yt(t, this)),
                          e = 0,
                          n = this.tileMaps.length;
                        e < n;
                        e++
                      )
                        this.tileMaps[e].debugDraw(t);
                      for (e = 0, n = this.actors.length; e < n; e++)
                        this.actors[e].debugDraw(t);
                      for (e = 0, n = this.triggers.length; e < n; e++)
                        this.triggers[e].debugDraw(t);
                      this._broadphase.debugDraw(t, 20),
                        this.camera.debugDraw(t),
                        this.emit("postdebugdraw", new gt(t, this));
                    }),
                    (e.prototype.contains = function (t) {
                      return this.actors.indexOf(t) > -1;
                    }),
                    (e.prototype.add = function (t) {
                      t instanceof vn && t.unkill(),
                        t instanceof bn
                          ? O(this.screenElements, t) ||
                            this.addScreenElement(t)
                          : t instanceof vn
                          ? O(this.actors, t) || this._addChild(t)
                          : t instanceof xn
                          ? O(this._timers, t) || this.addTimer(t)
                          : t instanceof An &&
                            (O(this.tileMaps, t) || this.addTileMap(t));
                    }),
                    (e.prototype.remove = function (t) {
                      t instanceof bn
                        ? this.removeScreenElement(t)
                        : (t instanceof vn && this._removeChild(t),
                          t instanceof xn && this.removeTimer(t),
                          t instanceof An && this.removeTileMap(t));
                    }),
                    (e.prototype.addScreenElement = function (t) {
                      this.screenElements.push(t), (t.scene = this);
                    }),
                    (e.prototype.removeScreenElement = function (t) {
                      var e = this.screenElements.indexOf(t);
                      e > -1 && this.screenElements.splice(e, 1);
                    }),
                    (e.prototype._addChild = function (t) {
                      this._broadphase.track(t.body),
                        (t.scene = this),
                        t instanceof ni
                          ? this.triggers.push(t)
                          : this.actors.push(t),
                        this._sortedDrawingTree.add(t);
                    }),
                    (e.prototype.addTileMap = function (t) {
                      this.tileMaps.push(t);
                    }),
                    (e.prototype.removeTileMap = function (t) {
                      var e = this.tileMaps.indexOf(t);
                      e > -1 && this.tileMaps.splice(e, 1);
                    }),
                    (e.prototype._removeChild = function (t) {
                      O(this.actors, t) &&
                        (this._broadphase.untrack(t.body),
                        t instanceof ni
                          ? this._triggerKillQueue.push(t)
                          : (t.isKilled() || t.kill(), this._killQueue.push(t)),
                        (t.parent = null));
                    }),
                    (e.prototype.addTimer = function (t) {
                      return this._timers.push(t), (t.scene = this), t;
                    }),
                    (e.prototype.removeTimer = function (t) {
                      var e = this._timers.indexOf(t);
                      return -1 !== e && this._timers.splice(e, 1), t;
                    }),
                    (e.prototype.cancelTimer = function (t) {
                      return this._cancelQueue.push(t), t;
                    }),
                    (e.prototype.isTimerActive = function (t) {
                      return this._timers.indexOf(t) > -1 && !t.complete;
                    }),
                    (e.prototype.cleanupDrawTree = function (t) {
                      this._sortedDrawingTree.removeByComparable(t);
                    }),
                    (e.prototype.updateDrawTree = function (t) {
                      this._sortedDrawingTree.add(t);
                    }),
                    (e.prototype.isActorInDrawTree = function (t) {
                      return this._sortedDrawingTree.find(t);
                    }),
                    (e.prototype.isCurrentScene = function () {
                      return (
                        !!this._engine && this._engine.currentScene === this
                      );
                    }),
                    (e.prototype._collectActorStats = function (t) {
                      for (
                        var e = 0, n = this.screenElements;
                        e < n.length;
                        e++
                      )
                        n[e], t.stats.currFrame.actors.ui++;
                      for (var i = 0, r = this.actors; i < r.length; i++) {
                        var o = r[i];
                        t.stats.currFrame.actors.alive++;
                        for (var s = 0, a = o.children; s < a.length; s++)
                          ii(a[s])
                            ? t.stats.currFrame.actors.ui++
                            : t.stats.currFrame.actors.alive++;
                      }
                    }),
                    e
                  );
                })($t);
              !(function (t) {
                (t[(t.Protanope = 0)] = "Protanope"),
                  (t[(t.Deuteranope = 1)] = "Deuteranope"),
                  (t[(t.Tritanope = 2)] = "Tritanope");
              })(li || (li = {}));
              var mi,
                bi = (function () {
                  function t(t, e, n) {
                    void 0 === e && (e = !1),
                      void 0 === n && (n = li.Protanope),
                      (this.engine = t),
                      (this.simulate = e),
                      (this.colorMode = n),
                      (this._vertexShader =
                        "attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}"),
                      (this._fragmentShader =
                        "precision mediump float;uniform sampler2D u_image;varying vec2 v_texCoord;void main() {vec4 o =  texture2D(u_image, v_texCoord);float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);//MODE CODE//vec4 error;error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);error.a = 1.0;vec4 diff = o - error;vec4 correction;correction.r = 0.0;correction.g =  (diff.r * 0.7) + (diff.g * 1.0);correction.b =  (diff.r * 0.7) + (diff.b * 1.0);correction = o + correction;correction.a = o.a;//SIMULATE//}"),
                      (this._internalCanvas = document.createElement("canvas")),
                      (this._internalCanvas.width = t.drawWidth),
                      (this._internalCanvas.height = t.drawHeight),
                      (this._gl = this._internalCanvas.getContext("webgl", {
                        preserveDrawingBuffer: !0,
                      })),
                      (this._program = this._gl.createProgram());
                    var i = this._getShader(
                        "Fragment",
                        this._getFragmentShaderByMode(n)
                      ),
                      r = this._getShader("Vertex", this._vertexShader);
                    this._gl.attachShader(this._program, r),
                      this._gl.attachShader(this._program, i),
                      this._gl.linkProgram(this._program),
                      this._gl.getProgramParameter(
                        this._program,
                        this._gl.LINK_STATUS
                      ) ||
                        R.getInstance().error("Unable to link shader program!"),
                      this._gl.useProgram(this._program);
                  }
                  return (
                    (t.prototype._getFragmentShaderByMode = function (t) {
                      var e = "";
                      return (
                        t === li.Protanope
                          ? (e =
                              "float l = 0.0 * L + 2.02344 * M + -2.52581 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;")
                          : t === li.Deuteranope
                          ? (e =
                              "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.494207 * L + 0.0 * M + 1.24827 * S;float s = 0.0 * L + 0.0 * M + 1.0 * S;")
                          : t === li.Tritanope &&
                            (e =
                              "float l = 1.0 * L + 0.0 * M + 0.0 * S;float m = 0.0 * L + 1.0 * M + 0.0 * S;float s = -0.395913 * L + 0.801109 * M + 0.0 * S;"),
                        this.simulate
                          ? (this._fragmentShader = this._fragmentShader.replace(
                              "//SIMULATE//",
                              "gl_FragColor = error.rgba;"
                            ))
                          : (this._fragmentShader = this._fragmentShader.replace(
                              "//SIMULATE//",
                              "gl_FragColor = correction.rgba;"
                            )),
                        this._fragmentShader.replace("//MODE CODE//", e)
                      );
                    }),
                    (t.prototype._setRectangle = function (t, e, n, i) {
                      var r = t,
                        o = t + n,
                        s = e,
                        a = e + i;
                      this._gl.bufferData(
                        this._gl.ARRAY_BUFFER,
                        new Float32Array([r, s, o, s, r, a, r, a, o, s, o, a]),
                        this._gl.STATIC_DRAW
                      );
                    }),
                    (t.prototype._getShader = function (t, e) {
                      var n;
                      return (
                        "Fragment" === t
                          ? (n = this._gl.createShader(
                              this._gl.FRAGMENT_SHADER
                            ))
                          : "Vertex" === t
                          ? (n = this._gl.createShader(this._gl.VERTEX_SHADER))
                          : R.getInstance().error(
                              "Error unknown shader type",
                              t
                            ),
                        this._gl.shaderSource(n, e),
                        this._gl.compileShader(n),
                        this._gl.getShaderParameter(n, this._gl.COMPILE_STATUS)
                          ? n
                          : (R.getInstance().error(
                              "Unable to compile shader!",
                              this._gl.getShaderInfoLog(n)
                            ),
                            null)
                      );
                    }),
                    (t.prototype.process = function (t, e) {
                      var n = this._gl.getAttribLocation(
                          this._program,
                          "a_position"
                        ),
                        i = this._gl.getAttribLocation(
                          this._program,
                          "a_texCoord"
                        ),
                        r = this._gl.createBuffer();
                      this._gl.bindBuffer(this._gl.ARRAY_BUFFER, r),
                        this._gl.bufferData(
                          this._gl.ARRAY_BUFFER,
                          new Float32Array([
                            0,
                            0,
                            1,
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1,
                            1,
                          ]),
                          this._gl.STATIC_DRAW
                        ),
                        this._gl.enableVertexAttribArray(i),
                        this._gl.vertexAttribPointer(
                          i,
                          2,
                          this._gl.FLOAT,
                          !1,
                          0,
                          0
                        );
                      var o = this._gl.createTexture();
                      this._gl.bindTexture(this._gl.TEXTURE_2D, o),
                        this._gl.texParameteri(
                          this._gl.TEXTURE_2D,
                          this._gl.TEXTURE_WRAP_S,
                          this._gl.CLAMP_TO_EDGE
                        ),
                        this._gl.texParameteri(
                          this._gl.TEXTURE_2D,
                          this._gl.TEXTURE_WRAP_T,
                          this._gl.CLAMP_TO_EDGE
                        ),
                        this._gl.texParameteri(
                          this._gl.TEXTURE_2D,
                          this._gl.TEXTURE_MIN_FILTER,
                          this._gl.NEAREST
                        ),
                        this._gl.texParameteri(
                          this._gl.TEXTURE_2D,
                          this._gl.TEXTURE_MAG_FILTER,
                          this._gl.NEAREST
                        ),
                        this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, 1),
                        this._gl.texImage2D(
                          this._gl.TEXTURE_2D,
                          0,
                          this._gl.RGBA,
                          this._gl.RGBA,
                          this._gl.UNSIGNED_BYTE,
                          t
                        );
                      var s = this._gl.getUniformLocation(
                        this._program,
                        "u_resolution"
                      );
                      this._gl.uniform2f(
                        s,
                        this._internalCanvas.width,
                        this._internalCanvas.height
                      );
                      var a = this._gl.createBuffer();
                      this._gl.bindBuffer(this._gl.ARRAY_BUFFER, a),
                        this._gl.enableVertexAttribArray(n),
                        this._gl.vertexAttribPointer(
                          n,
                          2,
                          this._gl.FLOAT,
                          !1,
                          0,
                          0
                        ),
                        this._setRectangle(0, 0, t.width, t.height),
                        this._gl.drawArrays(this._gl.TRIANGLES, 0, 6);
                      var c = new Uint8Array(t.width * t.height * 4);
                      this._gl.readPixels(
                        0,
                        0,
                        t.width,
                        t.height,
                        this._gl.RGBA,
                        this._gl.UNSIGNED_BYTE,
                        c
                      ),
                        t.data.set(c),
                        e.putImageData(t, 0, 0);
                    }),
                    t
                  );
                })(),
                wi = (function () {
                  function t(t) {
                    this._engine = t;
                  }
                  return (
                    (t.prototype.correct = function (t) {
                      this._engine.postProcessors.push(
                        new bi(this._engine, !1, t)
                      );
                    }),
                    (t.prototype.simulate = function (t) {
                      this._engine.postProcessors.push(
                        new bi(this._engine, !0, t)
                      );
                    }),
                    t
                  );
                })(),
                xi = function (t) {
                  (this.stats = { currFrame: new Pi(), prevFrame: new Pi() }),
                    (this._engine = t),
                    (this.colorBlindMode = new wi(this._engine));
                },
                Pi = (function () {
                  function t() {
                    (this._id = 0),
                      (this._delta = 0),
                      (this._fps = 0),
                      (this._actorStats = {
                        alive: 0,
                        killed: 0,
                        ui: 0,
                        get remaining() {
                          return this.alive - this.killed;
                        },
                        get total() {
                          return this.remaining + this.ui;
                        },
                      }),
                      (this._durationStats = {
                        update: 0,
                        draw: 0,
                        get total() {
                          return this.update + this.draw;
                        },
                      }),
                      (this._physicsStats = new Ai());
                  }
                  return (
                    (t.prototype.reset = function (t) {
                      t
                        ? ((this.id = t.id),
                          (this.delta = t.delta),
                          (this.fps = t.fps),
                          (this.actors.alive = t.actors.alive),
                          (this.actors.killed = t.actors.killed),
                          (this.actors.ui = t.actors.ui),
                          (this.duration.update = t.duration.update),
                          (this.duration.draw = t.duration.draw),
                          this._physicsStats.reset(t.physics))
                        : ((this.id = this.delta = this.fps = 0),
                          (this.actors.alive = this.actors.killed = this.actors.ui = 0),
                          (this.duration.update = this.duration.draw = 0),
                          this._physicsStats.reset());
                    }),
                    (t.prototype.clone = function () {
                      var e = new t();
                      return e.reset(this), e;
                    }),
                    Object.defineProperty(t.prototype, "id", {
                      get: function () {
                        return this._id;
                      },
                      set: function (t) {
                        this._id = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "delta", {
                      get: function () {
                        return this._delta;
                      },
                      set: function (t) {
                        this._delta = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "fps", {
                      get: function () {
                        return this._fps;
                      },
                      set: function (t) {
                        this._fps = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "actors", {
                      get: function () {
                        return this._actorStats;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "duration", {
                      get: function () {
                        return this._durationStats;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "physics", {
                      get: function () {
                        return this._physicsStats;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    t
                  );
                })(),
                Ai = (function () {
                  function t() {
                    (this._pairs = 0),
                      (this._collisions = 0),
                      (this._collidersHash = {}),
                      (this._fastBodies = 0),
                      (this._fastBodyCollisions = 0),
                      (this._broadphase = 0),
                      (this._narrowphase = 0);
                  }
                  return (
                    (t.prototype.reset = function (t) {
                      t
                        ? ((this.pairs = t.pairs),
                          (this.collisions = t.collisions),
                          (this.collidersHash = t.collidersHash),
                          (this.fastBodies = t.fastBodies),
                          (this.fastBodyCollisions = t.fastBodyCollisions),
                          (this.broadphase = t.broadphase),
                          (this.narrowphase = t.narrowphase))
                        : ((this.pairs = this.collisions = this.fastBodies = 0),
                          (this.fastBodyCollisions = this.broadphase = this.narrowphase = 0),
                          (this.collidersHash = {}));
                    }),
                    (t.prototype.clone = function () {
                      var e = new t();
                      return e.reset(this), e;
                    }),
                    Object.defineProperty(t.prototype, "pairs", {
                      get: function () {
                        return this._pairs;
                      },
                      set: function (t) {
                        this._pairs = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "collisions", {
                      get: function () {
                        return this._collisions;
                      },
                      set: function (t) {
                        this._collisions = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "collidersHash", {
                      get: function () {
                        return this._collidersHash;
                      },
                      set: function (t) {
                        this._collidersHash = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "fastBodies", {
                      get: function () {
                        return this._fastBodies;
                      },
                      set: function (t) {
                        this._fastBodies = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "fastBodyCollisions", {
                      get: function () {
                        return this._fastBodyCollisions;
                      },
                      set: function (t) {
                        this._fastBodyCollisions = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "broadphase", {
                      get: function () {
                        return this._broadphase;
                      },
                      set: function (t) {
                        this._broadphase = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "narrowphase", {
                      get: function () {
                        return this._narrowphase;
                      },
                      set: function (t) {
                        this._narrowphase = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    t
                  );
                })(),
                Ei = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              !(function (t) {
                (t[(t.Num1 = 97)] = "Num1"),
                  (t[(t.Num2 = 98)] = "Num2"),
                  (t[(t.Num3 = 99)] = "Num3"),
                  (t[(t.Num4 = 100)] = "Num4"),
                  (t[(t.Num5 = 101)] = "Num5"),
                  (t[(t.Num6 = 102)] = "Num6"),
                  (t[(t.Num7 = 103)] = "Num7"),
                  (t[(t.Num8 = 104)] = "Num8"),
                  (t[(t.Num9 = 105)] = "Num9"),
                  (t[(t.Num0 = 96)] = "Num0"),
                  (t[(t.Numlock = 144)] = "Numlock"),
                  (t[(t.Semicolon = 186)] = "Semicolon"),
                  (t[(t.A = 65)] = "A"),
                  (t[(t.B = 66)] = "B"),
                  (t[(t.C = 67)] = "C"),
                  (t[(t.D = 68)] = "D"),
                  (t[(t.E = 69)] = "E"),
                  (t[(t.F = 70)] = "F"),
                  (t[(t.G = 71)] = "G"),
                  (t[(t.H = 72)] = "H"),
                  (t[(t.I = 73)] = "I"),
                  (t[(t.J = 74)] = "J"),
                  (t[(t.K = 75)] = "K"),
                  (t[(t.L = 76)] = "L"),
                  (t[(t.M = 77)] = "M"),
                  (t[(t.N = 78)] = "N"),
                  (t[(t.O = 79)] = "O"),
                  (t[(t.P = 80)] = "P"),
                  (t[(t.Q = 81)] = "Q"),
                  (t[(t.R = 82)] = "R"),
                  (t[(t.S = 83)] = "S"),
                  (t[(t.T = 84)] = "T"),
                  (t[(t.U = 85)] = "U"),
                  (t[(t.V = 86)] = "V"),
                  (t[(t.W = 87)] = "W"),
                  (t[(t.X = 88)] = "X"),
                  (t[(t.Y = 89)] = "Y"),
                  (t[(t.Z = 90)] = "Z"),
                  (t[(t.Shift = 16)] = "Shift"),
                  (t[(t.Alt = 18)] = "Alt"),
                  (t[(t.Up = 38)] = "Up"),
                  (t[(t.Down = 40)] = "Down"),
                  (t[(t.Left = 37)] = "Left"),
                  (t[(t.Right = 39)] = "Right"),
                  (t[(t.Space = 32)] = "Space"),
                  (t[(t.Esc = 27)] = "Esc");
              })(mi || (mi = {}));
              var Si,
                Ci,
                Oi = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (n.key = e), n;
                  }
                  return Ei(e, t), e;
                })(at),
                Ti = (function (t) {
                  function e() {
                    var e = t.call(this) || this;
                    return (
                      (e._keys = []), (e._keysUp = []), (e._keysDown = []), e
                    );
                  }
                  return (
                    Ei(e, t),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.init = function (t) {
                      var e = this;
                      if (!t)
                        try {
                          var n = function () {};
                          window.top.addEventListener("blur", n),
                            window.top.removeEventListener("blur", n),
                            (t = window.top);
                        } catch (e) {
                          (t = window),
                            R.getInstance().warn(
                              "Failed to bind to keyboard events to top frame. If you are trying to embed Excalibur in a cross-origin iframe, keyboard events will not fire."
                            );
                        }
                      t.addEventListener("blur", function () {
                        e._keys.length = 0;
                      }),
                        t.addEventListener("keyup", function (t) {
                          var n = e._normalizeKeyCode(t.keyCode),
                            i = e._keys.indexOf(n);
                          e._keys.splice(i, 1), e._keysUp.push(n);
                          var r = new Oi(n);
                          e.eventDispatcher.emit("up", r),
                            e.eventDispatcher.emit("release", r);
                        }),
                        t.addEventListener("keydown", function (t) {
                          var n = e._normalizeKeyCode(t.keyCode);
                          if (-1 === e._keys.indexOf(n)) {
                            e._keys.push(n), e._keysDown.push(n);
                            var i = new Oi(n);
                            e.eventDispatcher.emit("down", i),
                              e.eventDispatcher.emit("press", i);
                          }
                        });
                    }),
                    (e.prototype.update = function () {
                      (this._keysDown.length = 0), (this._keysUp.length = 0);
                      for (var t = 0; t < this._keys.length; t++)
                        this.eventDispatcher.emit(
                          "hold",
                          new Oi(this._keys[t])
                        );
                    }),
                    (e.prototype.getKeys = function () {
                      return this._keys;
                    }),
                    (e.prototype.wasPressed = function (t) {
                      return this._keysDown.indexOf(t) > -1;
                    }),
                    (e.prototype.isHeld = function (t) {
                      return this._keys.indexOf(t) > -1;
                    }),
                    (e.prototype.wasReleased = function (t) {
                      return this._keysUp.indexOf(t) > -1;
                    }),
                    (e.prototype._normalizeKeyCode = function (t) {
                      switch (t) {
                        case 59:
                          return mi.Semicolon;
                        default:
                          return t;
                      }
                    }),
                    e
                  );
                })($t),
                Bi = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              !(function (t) {
                (t.Touch = "Touch"),
                  (t.Mouse = "Mouse"),
                  (t.Pen = "Pen"),
                  (t.Unknown = "Unknown");
              })(Si || (Si = {})),
                (function (t) {
                  (t.Canvas = "Canvas"), (t.Document = "Document");
                })(Ci || (Ci = {}));
              var Mi,
                Di,
                ki,
                Ri = (function (t) {
                  function e() {
                    var n = t.call(this) || this;
                    return (
                      (n.id = e._MAX_ID++),
                      (n._isDown = !1),
                      (n._wasDown = !1),
                      (n._actorsUnderPointer = { length: 0 }),
                      (n._actors = []),
                      (n._actorsLastFrame = []),
                      (n._actorsNoLongerUnderPointer = []),
                      (n.lastPagePos = null),
                      (n.lastScreenPos = null),
                      (n.lastWorldPos = null),
                      (n.dragTarget = null),
                      n.on("move", n._onPointerMove),
                      n.on("down", n._onPointerDown),
                      n.on("up", n._onPointerUp),
                      n
                    );
                  }
                  return (
                    Bi(e, t),
                    Object.defineProperty(e.prototype, "isDragging", {
                      get: function () {
                        return this._isDown;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isDragStart", {
                      get: function () {
                        return !this._wasDown && this._isDown;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isDragEnd", {
                      get: function () {
                        return this._wasDown && !this._isDown;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(
                      e.prototype,
                      "hasActorsUnderPointer",
                      {
                        get: function () {
                          return !!this._actorsUnderPointer.length;
                        },
                        enumerable: !1,
                        configurable: !0,
                      }
                    ),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.once = function (e, n) {
                      t.prototype.once.call(this, e, n);
                    }),
                    (e.prototype.off = function (e, n) {
                      t.prototype.off.call(this, e, n);
                    }),
                    (e.prototype.update = function () {
                      this._wasDown && !this._isDown
                        ? (this._wasDown = !1)
                        : !this._wasDown &&
                          this._isDown &&
                          (this._wasDown = !0),
                        (this._actorsLastFrame = (function () {
                          for (
                            var t = 0, e = 0, n = arguments.length;
                            e < n;
                            e++
                          )
                            t += arguments[e].length;
                          var i = Array(t),
                            r = 0;
                          for (e = 0; e < n; e++)
                            for (
                              var o = arguments[e], s = 0, a = o.length;
                              s < a;
                              s++, r++
                            )
                              i[r] = o[s];
                          return i;
                        })(this._actors)),
                        (this._actorsNoLongerUnderPointer = []);
                    }),
                    (e.prototype.addActorUnderPointer = function (t) {
                      this.isActorAliveUnderPointer(t) ||
                        ((this._actorsUnderPointer[t.id] = t),
                        (this._actorsUnderPointer.length += 1),
                        this._actors.push(t)),
                        this._actors.sort(function (t, e) {
                          return t.z === e.z ? t.id - e.id : t.z - e.z;
                        });
                    }),
                    (e.prototype.removeActorUnderPointer = function (t) {
                      this.isActorAliveUnderPointer(t) &&
                        (delete this._actorsUnderPointer[t.id],
                        (this._actorsUnderPointer.length -= 1),
                        C(t, this._actors),
                        this._actorsNoLongerUnderPointer.push(t));
                    }),
                    (e.prototype.getActorsUnderPointer = function () {
                      return this._actors;
                    }),
                    (e.prototype.getActorsUnderPointerLastFrame = function () {
                      return this._actorsLastFrame;
                    }),
                    (e.prototype.getActorsForEvents = function () {
                      return this._actors
                        .concat(this._actorsLastFrame)
                        .filter(function (t, e, n) {
                          return n.indexOf(t) === e;
                        });
                    }),
                    (e.prototype.checkActorUnderPointer = function (t) {
                      return (
                        !!this.lastWorldPos &&
                        t.contains(
                          this.lastWorldPos.x,
                          this.lastWorldPos.y,
                          !ii(t)
                        )
                      );
                    }),
                    (e.prototype.wasActorUnderPointer = function (t) {
                      return this._actorsLastFrame.indexOf(t) > -1;
                    }),
                    (e.prototype.isActorAliveUnderPointer = function (t) {
                      return !(
                        t.isKilled() ||
                        !t.scene ||
                        !this._actorsUnderPointer.hasOwnProperty(
                          t.id.toString()
                        )
                      );
                    }),
                    (e.prototype._onPointerMove = function (t) {
                      (this.lastPagePos = new q(t.pagePos.x, t.pagePos.y)),
                        (this.lastScreenPos = new q(
                          t.screenPos.x,
                          t.screenPos.y
                        )),
                        (this.lastWorldPos = new q(t.worldPos.x, t.worldPos.y));
                    }),
                    (e.prototype._onPointerDown = function (t) {
                      (this.lastPagePos = new q(t.pagePos.x, t.pagePos.y)),
                        (this.lastScreenPos = new q(
                          t.screenPos.x,
                          t.screenPos.y
                        )),
                        (this.lastWorldPos = new q(t.worldPos.x, t.worldPos.y)),
                        (this._isDown = !0);
                    }),
                    (e.prototype._onPointerUp = function (t) {
                      (this._isDown = !1), (this.dragTarget = null);
                    }),
                    (e._MAX_ID = 0),
                    e
                  );
                })($t),
                ji = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              !(function (t) {
                (t[(t.NoButton = -1)] = "NoButton"),
                  (t[(t.Left = 0)] = "Left"),
                  (t[(t.Middle = 1)] = "Middle"),
                  (t[(t.Right = 2)] = "Right"),
                  (t[(t.Unknown = 3)] = "Unknown");
              })(Mi || (Mi = {})),
                (function (t) {
                  (t.Left = "Left"),
                    (t.Middle = "Middle"),
                    (t.Right = "Right"),
                    (t.Unknown = "Unknown"),
                    (t.NoButton = "NoButton");
                })(Di || (Di = {})),
                (function (t) {
                  (t.Pixel = "Pixel"), (t.Line = "Line"), (t.Page = "Page");
                })(ki || (ki = {}));
              var Fi = (function (t) {
                  function e(e, n, i, r, o, s) {
                    var a = t.call(this) || this;
                    return (
                      (a.coordinates = e),
                      (a.pointer = n),
                      (a.index = i),
                      (a.pointerType = r),
                      (a.button = o),
                      (a.ev = s),
                      a
                    );
                  }
                  return (
                    ji(e, t),
                    Object.defineProperty(e.prototype, "name", {
                      get: function () {
                        return this._name;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "worldPos", {
                      get: function () {
                        return this.coordinates.worldPos.clone();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "pagePos", {
                      get: function () {
                        return this.coordinates.pagePos.clone();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "screenPos", {
                      get: function () {
                        return this.coordinates.screenPos.clone();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "pos", {
                      get: function () {
                        return this.coordinates.worldPos.clone();
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.propagate = function (t) {
                      this.doAction(t),
                        this.bubbles && t.parent && this.propagate(t.parent);
                    }),
                    (e.prototype.doAction = function (t) {
                      t &&
                        (this._onActionStart(t),
                        t.emit(this._name, this),
                        this._onActionEnd(t));
                    }),
                    (e.prototype._onActionStart = function (t) {}),
                    (e.prototype._onActionEnd = function (t) {}),
                    e
                  );
                })(at),
                Ii = (function () {
                  function t(t) {
                    this._pointerEventType = t;
                  }
                  return (
                    (t.prototype.create = function (t, e, n, i, r, o) {
                      return new this._pointerEventType(t, e, n, i, r, o);
                    }),
                    t
                  );
                })(),
                Li = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return ji(e, t), e;
                })(Fi),
                zi = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointerup"), e;
                  }
                  return (
                    ji(e, t),
                    (e.prototype._onActionEnd = function (t) {
                      this.pointer.isDragEnd &&
                        t.capturePointer.captureDragEvents &&
                        t.eventDispatcher.emit("pointerdragend", this);
                    }),
                    e
                  );
                })(Fi),
                Hi = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointerdown"), e;
                  }
                  return (
                    ji(e, t),
                    (e.prototype._onActionEnd = function (t) {
                      this.pointer.isDragStart &&
                        t.capturePointer.captureDragEvents &&
                        t.eventDispatcher.emit("pointerdragstart", this);
                    }),
                    e
                  );
                })(Fi),
                Ui = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointermove"), e;
                  }
                  return (
                    ji(e, t),
                    (e.prototype.propagate = function (t) {
                      this.pointer.isActorAliveUnderPointer(t) &&
                        (this.doAction(t),
                        this.bubbles && t.parent && this.propagate(t.parent));
                    }),
                    (e.prototype._onActionStart = function (t) {
                      t.capturePointer.captureMoveEvents &&
                        this.pointer.isDragging &&
                        t.capturePointer.captureDragEvents &&
                        t.eventDispatcher.emit("pointerdragmove", this);
                    }),
                    e
                  );
                })(Fi),
                Wi = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointerenter"), e;
                  }
                  return (
                    ji(e, t),
                    (e.prototype._onActionStart = function (t) {
                      t.capturePointer.captureMoveEvents;
                    }),
                    (e.prototype._onActionEnd = function (t) {
                      this.pointer.isDragging &&
                        t.capturePointer.captureDragEvents &&
                        t.eventDispatcher.emit("pointerdragenter", this);
                    }),
                    e
                  );
                })(Fi),
                Ni = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointerleave"), e;
                  }
                  return (
                    ji(e, t),
                    (e.prototype._onActionStart = function (t) {
                      t.capturePointer.captureMoveEvents;
                    }),
                    (e.prototype._onActionEnd = function (t) {
                      this.pointer.isDragging &&
                        t.capturePointer.captureDragEvents &&
                        t.eventDispatcher.emit("pointerdragleave", this);
                    }),
                    e
                  );
                })(Fi),
                qi = (function (t) {
                  function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this;
                    return (e._name = "pointercancel"), e;
                  }
                  return ji(e, t), e;
                })(Fi),
                Vi = (function (t) {
                  function e(e, n, i, r, o, s, a, c, h, u, l, p) {
                    var d = t.call(this) || this;
                    return (
                      (d.x = e),
                      (d.y = n),
                      (d.pageX = i),
                      (d.pageY = r),
                      (d.screenX = o),
                      (d.screenY = s),
                      (d.index = a),
                      (d.deltaX = c),
                      (d.deltaY = h),
                      (d.deltaZ = u),
                      (d.deltaMode = l),
                      (d.ev = p),
                      d
                    );
                  }
                  return ji(e, t), e;
                })(at);
              function Gi(t, e, n, i, r, o, s) {
                var a;
                switch (t) {
                  case "up":
                    a = new Ii(zi);
                    break;
                  case "down":
                    a = new Ii(Hi);
                    break;
                  case "move":
                    a = new Ii(Ui);
                    break;
                  case "cancel":
                    a = new Ii(qi);
                    break;
                  case "enter":
                    a = new Ii(Wi);
                    break;
                  case "leave":
                    a = new Ii(Ni);
                }
                return a.create(e, n, i, r, o, s);
              }
              var Xi,
                Qi,
                Zi = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Ki = (function (t) {
                  function e(e) {
                    var n = t.call(this) || this;
                    return (
                      (n._pointerDown = []),
                      (n._pointerUp = []),
                      (n._pointerMove = []),
                      (n._pointerCancel = []),
                      (n._wheel = []),
                      (n._pointers = []),
                      (n._activePointers = []),
                      (n._engine = e),
                      n._pointers.push(new Ri()),
                      (n._activePointers = [-1]),
                      (n.primary = n._pointers[0]),
                      n
                    );
                  }
                  return (
                    Zi(e, t),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.init = function (t) {
                      (t = t || this._engine.canvas).addEventListener(
                        "touchstart",
                        this._handleTouchEvent("down", this._pointerDown)
                      ),
                        t.addEventListener(
                          "touchend",
                          this._handleTouchEvent("up", this._pointerUp)
                        ),
                        t.addEventListener(
                          "touchmove",
                          this._handleTouchEvent("move", this._pointerMove)
                        ),
                        t.addEventListener(
                          "touchcancel",
                          this._handleTouchEvent("cancel", this._pointerCancel)
                        ),
                        window.PointerEvent
                          ? ((this._engine.canvas.style.touchAction = "none"),
                            t.addEventListener(
                              "pointerdown",
                              this._handlePointerEvent(
                                "down",
                                this._pointerDown
                              )
                            ),
                            t.addEventListener(
                              "pointerup",
                              this._handlePointerEvent("up", this._pointerUp)
                            ),
                            t.addEventListener(
                              "pointermove",
                              this._handlePointerEvent(
                                "move",
                                this._pointerMove
                              )
                            ),
                            t.addEventListener(
                              "pointercancel",
                              this._handlePointerEvent(
                                "cancel",
                                this._pointerCancel
                              )
                            ))
                          : window.MSPointerEvent
                          ? ((this._engine.canvas.style.msTouchAction = "none"),
                            t.addEventListener(
                              "MSPointerDown",
                              this._handlePointerEvent(
                                "down",
                                this._pointerDown
                              )
                            ),
                            t.addEventListener(
                              "MSPointerUp",
                              this._handlePointerEvent("up", this._pointerUp)
                            ),
                            t.addEventListener(
                              "MSPointerMove",
                              this._handlePointerEvent(
                                "move",
                                this._pointerMove
                              )
                            ),
                            t.addEventListener(
                              "MSPointerCancel",
                              this._handlePointerEvent(
                                "cancel",
                                this._pointerCancel
                              )
                            ))
                          : (t.addEventListener(
                              "mousedown",
                              this._handleMouseEvent("down", this._pointerDown)
                            ),
                            t.addEventListener(
                              "mouseup",
                              this._handleMouseEvent("up", this._pointerUp)
                            ),
                            t.addEventListener(
                              "mousemove",
                              this._handleMouseEvent("move", this._pointerMove)
                            ));
                      var e = {
                        passive: !(
                          this._engine.pageScrollPreventionMode === tr.All ||
                          this._engine.pageScrollPreventionMode === tr.Canvas
                        ),
                      };
                      "onwheel" in document.createElement("div")
                        ? t.addEventListener(
                            "wheel",
                            this._handleWheelEvent("wheel", this._wheel),
                            e
                          )
                        : void 0 !== document.onmousewheel
                        ? t.addEventListener(
                            "mousewheel",
                            this._handleWheelEvent("wheel", this._wheel),
                            e
                          )
                        : t.addEventListener(
                            "MozMousePixelScroll",
                            this._handleWheelEvent("wheel", this._wheel),
                            e
                          );
                    }),
                    (e.prototype.triggerEvent = function (t, e, n, i, r) {
                      void 0 === n && (n = Mi.Left),
                        void 0 === i && (i = "mouse"),
                        void 0 === r && (r = 0);
                      var o,
                        s = 0,
                        a = 0;
                      e instanceof Q
                        ? ((s = e.pagePos.x), (a = e.pagePos.y), (o = e))
                        : ((s = e.x),
                          (a = e.y),
                          (o = new Q(e.clone(), e.clone(), e.clone())));
                      var c = {
                        pageX: s,
                        pageY: a,
                        pointerId: r,
                        pointerType: i,
                        button: n,
                        preventDefault: function () {},
                      };
                      switch (t) {
                        case "move":
                          this._handlePointerEvent(t, this._pointerMove, o)(c);
                          break;
                        case "down":
                          this._handlePointerEvent(t, this._pointerDown, o)(c);
                          break;
                        case "up":
                          this._handlePointerEvent(t, this._pointerUp, o)(c);
                          break;
                        case "cancel":
                          this._handlePointerEvent(
                            t,
                            this._pointerCancel,
                            o
                          )(c);
                      }
                      for (
                        var h = 0, u = this._engine.currentScene.actors;
                        h < u.length;
                        h++
                      ) {
                        var l = u[h],
                          p = l.traits.filter(function (t) {
                            return t instanceof Xe;
                          })[0];
                        p && p.update(l, this._engine, 1);
                      }
                      this.dispatchPointerEvents(), this.update();
                    }),
                    (e.prototype.update = function () {
                      (this._pointerUp.length = 0),
                        (this._pointerDown.length = 0),
                        (this._pointerMove.length = 0),
                        (this._pointerCancel.length = 0),
                        (this._wheel.length = 0);
                      for (var t = 0; t < this._pointers.length; t++)
                        this._pointers[t].update();
                    }),
                    (e.prototype.at = function (t) {
                      if (t >= this._pointers.length)
                        for (
                          var e = this._pointers.length - 1, n = t;
                          e < n;
                          e++
                        )
                          this._pointers.push(new Ri()),
                            this._activePointers.push(-1);
                      return this._pointers[t];
                    }),
                    (e.prototype.count = function () {
                      return this._pointers.length;
                    }),
                    (e.prototype.checkAndUpdateActorUnderPointer = function (
                      t
                    ) {
                      for (var e = 0, n = this._pointers; e < n.length; e++) {
                        var i = n[e];
                        i.checkActorUnderPointer(t)
                          ? i.addActorUnderPointer(t)
                          : i.removeActorUnderPointer(t);
                      }
                    }),
                    (e.prototype._dispatchWithBubble = function (t) {
                      for (var e = 0, n = t; e < n.length; e++)
                        for (
                          var i = n[e],
                            r = 0,
                            o = i.pointer.getActorsForEvents();
                          r < o.length;
                          r++
                        ) {
                          var s = o[r];
                          if ((i.propagate(s), !i.bubbles)) break;
                        }
                    }),
                    (e.prototype._dispatchPointerLeaveEvents = function () {
                      for (
                        var t = {}, e = [], n = 0, i = this._pointerMove;
                        n < i.length;
                        n++
                      )
                        for (
                          var r = i[n],
                            o = 0,
                            s = r.pointer.getActorsForEvents();
                          o < s.length;
                          o++
                        ) {
                          var a = s[o];
                          if (
                            !t[r.pointer.id + "+" + a.id] &&
                            r.pointer.wasActorUnderPointer(a) &&
                            !r.pointer.isActorAliveUnderPointer(a)
                          ) {
                            t[r.pointer.id + "+" + a.id] = r;
                            var c = Gi(
                              "leave",
                              new Q(r.worldPos, r.pagePos, r.screenPos),
                              r.pointer,
                              r.index,
                              r.pointerType,
                              r.button,
                              r.ev
                            );
                            c.propagate(a), e.push(c);
                          }
                        }
                      return e;
                    }),
                    (e.prototype._dispatchPointerEnterEvents = function () {
                      for (
                        var t = {}, e = [], n = 0, i = this._pointerMove;
                        n < i.length;
                        n++
                      )
                        for (
                          var r = i[n],
                            o = 0,
                            s = r.pointer.getActorsForEvents();
                          o < s.length;
                          o++
                        ) {
                          var a = s[o];
                          if (
                            !t[r.pointer.id] &&
                            !r.pointer.wasActorUnderPointer(a) &&
                            r.pointer.isActorAliveUnderPointer(a)
                          ) {
                            t[r.pointer.id] = r;
                            var c = Gi(
                              "enter",
                              new Q(r.worldPos, r.pagePos, r.screenPos),
                              r.pointer,
                              r.index,
                              r.pointerType,
                              r.button,
                              r.ev
                            );
                            c.propagate(a),
                              e.push(c),
                              r.pointer.isDragging &&
                                (r.pointer.dragTarget = a);
                          }
                        }
                      return e;
                    }),
                    (e.prototype.dispatchPointerEvents = function () {
                      this._dispatchWithBubble(this._pointerDown),
                        this._dispatchWithBubble(this._pointerUp),
                        this._dispatchWithBubble(this._pointerMove),
                        this._dispatchPointerLeaveEvents(),
                        this._dispatchPointerEnterEvents(),
                        this._dispatchWithBubble(this._pointerCancel);
                      for (var t = 0, e = this._wheel; t < e.length; t++)
                        for (
                          var n = e[t],
                            i = 0,
                            r = this._pointers[n.index].getActorsUnderPointer();
                          i < r.length;
                          i++
                        ) {
                          var o = r[i];
                          if (
                            (this._propagateWheelPointerEvent(o, n), !n.bubbles)
                          )
                            break;
                        }
                    }),
                    (e.prototype._propagateWheelPointerEvent = function (t, e) {
                      t.emit("pointerwheel", e),
                        e.bubbles &&
                          t.parent &&
                          this._propagateWheelPointerEvent(t.parent, e);
                    }),
                    (e.prototype._handleMouseEvent = function (t, e) {
                      var n = this;
                      return function (i) {
                        i.preventDefault();
                        var r = n.at(0),
                          o = Q.fromPagePosition(i.pageX, i.pageY, n._engine),
                          s = Gi(
                            t,
                            o,
                            r,
                            0,
                            Si.Mouse,
                            n._nativeButtonToPointerButton(i.button),
                            i
                          );
                        e.push(s), r.eventDispatcher.emit(t, s);
                      };
                    }),
                    (e.prototype._handleTouchEvent = function (t, e) {
                      var n = this;
                      return function (i) {
                        i.preventDefault();
                        for (
                          var r = 0, o = i.changedTouches.length;
                          r < o;
                          r++
                        ) {
                          var s =
                            n._pointers.length > 1
                              ? n._getPointerIndex(
                                  i.changedTouches[r].identifier
                                )
                              : 0;
                          if (-1 !== s) {
                            var a = n.at(s),
                              c = Q.fromPagePosition(
                                i.changedTouches[r].pageX,
                                i.changedTouches[r].pageY,
                                n._engine
                              ),
                              h = Gi(t, c, a, s, Si.Touch, Di.Unknown, i);
                            e.push(h),
                              a.eventDispatcher.emit(t, h),
                              n._pointers.length > 1 &&
                                ("up" === t
                                  ? (n._activePointers[s] = -1)
                                  : "down" === t &&
                                    (n._activePointers[s] =
                                      i.changedTouches[r].identifier));
                          }
                        }
                      };
                    }),
                    (e.prototype._handlePointerEvent = function (t, e, n) {
                      var i = this;
                      return function (r) {
                        r.preventDefault();
                        var o =
                          i._pointers.length > 1
                            ? i._getPointerIndex(r.pointerId)
                            : 0;
                        if (-1 !== o) {
                          var s = i.at(o),
                            a =
                              n ||
                              Q.fromPagePosition(r.pageX, r.pageY, i._engine),
                            c = Gi(
                              t,
                              a,
                              s,
                              o,
                              i._stringToPointerType(r.pointerType),
                              i._nativeButtonToPointerButton(r.button),
                              r
                            );
                          e.push(c),
                            s.eventDispatcher.emit(t, c),
                            i._pointers.length > 1 &&
                              ("up" === t
                                ? (i._activePointers[o] = -1)
                                : "down" === t &&
                                  (i._activePointers[o] = r.pointerId));
                        }
                      };
                    }),
                    (e.prototype._handleWheelEvent = function (t, e) {
                      var n = this;
                      return function (i) {
                        (n._engine.pageScrollPreventionMode === tr.All ||
                          (n._engine.pageScrollPreventionMode === tr.Canvas &&
                            i.target === n._engine.canvas)) &&
                          i.preventDefault();
                        var r = i.pageX - E(n._engine.canvas).x,
                          o = i.pageY - E(n._engine.canvas).y,
                          s = n._engine.screenToWorldCoordinates(new q(r, o)),
                          a = i.deltaX || -0.025 * i.wheelDeltaX || 0,
                          c =
                            i.deltaY ||
                            -0.025 * i.wheelDeltaY ||
                            -0.025 * i.wheelDelta ||
                            i.detail ||
                            0,
                          h = i.deltaZ || 0,
                          u = ki.Pixel;
                        i.deltaMode &&
                          (1 === i.deltaMode
                            ? (u = ki.Line)
                            : 2 === i.deltaMode && (u = ki.Page));
                        var l = new Vi(
                          s.x,
                          s.y,
                          i.pageX,
                          i.pageY,
                          r,
                          o,
                          0,
                          a,
                          c,
                          h,
                          u,
                          i
                        );
                        e.push(l), n.at(0).eventDispatcher.emit(t, l);
                      };
                    }),
                    (e.prototype._getPointerIndex = function (t) {
                      var e;
                      if ((e = this._activePointers.indexOf(t)) > -1) return e;
                      for (var n = 0; n < this._activePointers.length; n++)
                        if (-1 === this._activePointers[n]) return n;
                      return -1;
                    }),
                    (e.prototype._nativeButtonToPointerButton = function (t) {
                      switch (t) {
                        case Mi.NoButton:
                          return Di.NoButton;
                        case Mi.Left:
                          return Di.Left;
                        case Mi.Middle:
                          return Di.Middle;
                        case Mi.Right:
                          return Di.Right;
                        case Mi.Unknown:
                          return Di.Unknown;
                        default:
                          return k(t);
                      }
                    }),
                    (e.prototype._stringToPointerType = function (t) {
                      switch (t) {
                        case "touch":
                          return Si.Touch;
                        case "mouse":
                          return Si.Mouse;
                        case "pen":
                          return Si.Pen;
                        default:
                          return Si.Unknown;
                      }
                    }),
                    e
                  );
                })($t),
                Yi = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Ji = (function (t) {
                  function e() {
                    var e = t.call(this) || this;
                    return (
                      (e.enabled = !1),
                      (e.supported = !!navigator.getGamepads),
                      (e._gamePadTimeStamps = [0, 0, 0, 0]),
                      (e._oldPads = []),
                      (e._pads = []),
                      (e._initSuccess = !1),
                      (e._navigator = navigator),
                      (e._minimumConfiguration = null),
                      e
                    );
                  }
                  return (
                    Yi(e, t),
                    (e.prototype.init = function () {
                      this.supported &&
                        (this._initSuccess ||
                          ((this._oldPads = this._clonePads(
                            this._navigator.getGamepads()
                          )),
                          this._oldPads.length &&
                            this._oldPads[0] &&
                            (this._initSuccess = !0)));
                    }),
                    (e.prototype.setMinimumGamepadConfiguration = function (t) {
                      this._enableAndUpdate(), (this._minimumConfiguration = t);
                    }),
                    (e.prototype._enableAndUpdate = function () {
                      this.enabled || ((this.enabled = !0), this.update());
                    }),
                    (e.prototype._isGamepadValid = function (t) {
                      if (!this._minimumConfiguration) return !0;
                      if (!t) return !1;
                      var e = t.axes.filter(function (t) {
                          return void 0 !== typeof t;
                        }).length,
                        n = t.buttons.filter(function (t) {
                          return void 0 !== typeof t;
                        }).length;
                      return (
                        e >= this._minimumConfiguration.axis &&
                        n >= this._minimumConfiguration.buttons &&
                        t.connected
                      );
                    }),
                    (e.prototype.on = function (e, n) {
                      this._enableAndUpdate(), t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.off = function (e, n) {
                      this._enableAndUpdate(), t.prototype.off.call(this, e, n);
                    }),
                    (e.prototype.update = function () {
                      if (this.enabled && this.supported) {
                        this.init();
                        for (
                          var t = this._navigator.getGamepads(), e = 0;
                          e < t.length;
                          e++
                        )
                          if (t[e]) {
                            if (
                              (!this.at(e).connected &&
                                this._isGamepadValid(t[e]) &&
                                this.eventDispatcher.emit(
                                  "connect",
                                  new wt(e, this.at(e))
                                ),
                              (this.at(e).connected = !0),
                              !t[e].timestamp ||
                                t[e].timestamp !== this._gamePadTimeStamps[e])
                            ) {
                              (this._gamePadTimeStamps[e] = t[e].timestamp),
                                (this.at(e).navigatorGamepad = t[e]);
                              var n = void 0,
                                i = void 0,
                                r = void 0,
                                o = void 0,
                                s = void 0;
                              for (n in Xi)
                                "number" == typeof (i = Xi[n]) &&
                                  t[e].buttons[i] &&
                                  (s = t[e].buttons[i].value) !==
                                    this._oldPads[e].getButton(i) &&
                                  (t[e].buttons[i].pressed
                                    ? (this.at(e).updateButton(i, s),
                                      this.at(e).eventDispatcher.emit(
                                        "button",
                                        new Pt(i, s, this.at(e))
                                      ))
                                    : this.at(e).updateButton(i, 0));
                              for (r in Qi)
                                "number" == typeof (o = Qi[r]) &&
                                  (s = t[e].axes[o]) !==
                                    this._oldPads[e].getAxes(o) &&
                                  (this.at(e).updateAxes(o, s),
                                  this.at(e).eventDispatcher.emit(
                                    "axis",
                                    new At(o, s, this.at(e))
                                  ));
                              this._oldPads[e] = this._clonePad(t[e]);
                            }
                          } else {
                            var a = this.at(e);
                            a.connected &&
                              this.eventDispatcher.emit(
                                "disconnect",
                                new xt(e, a)
                              ),
                              (a.connected = !1);
                          }
                      }
                    }),
                    (e.prototype.at = function (t) {
                      if ((this._enableAndUpdate(), t >= this._pads.length))
                        for (var e = this._pads.length - 1, n = t; e < n; e++)
                          this._pads.push(new $i()),
                            this._oldPads.push(new $i());
                      return this._pads[t];
                    }),
                    (e.prototype.getValidGamepads = function () {
                      this._enableAndUpdate();
                      for (var t = [], e = 0; e < this._pads.length; e++)
                        this._isGamepadValid(this.at(e).navigatorGamepad) &&
                          this.at(e).connected &&
                          t.push(this.at(e));
                      return t;
                    }),
                    (e.prototype.count = function () {
                      return this._pads.filter(function (t) {
                        return t.connected;
                      }).length;
                    }),
                    (e.prototype._clonePads = function (t) {
                      for (var e = [], n = 0, i = t.length; n < i; n++)
                        e.push(this._clonePad(t[n]));
                      return e;
                    }),
                    (e.prototype._clonePad = function (t) {
                      var e,
                        n,
                        i = new $i();
                      if (!t) return i;
                      for (e = 0, n = t.buttons.length; e < n; e++)
                        t.buttons[e] && i.updateButton(e, t.buttons[e].value);
                      for (e = 0, n = t.axes.length; e < n; e++)
                        i.updateAxes(e, t.axes[e]);
                      return i;
                    }),
                    (e.MinAxisMoveThreshold = 0.05),
                    e
                  );
                })($t),
                $i = (function (t) {
                  function e() {
                    var e = t.call(this) || this;
                    (e.connected = !1),
                      (e._buttons = new Array(16)),
                      (e._axes = new Array(4));
                    for (var n = 0; n < e._buttons.length; n++)
                      e._buttons[n] = 0;
                    for (n = 0; n < e._axes.length; n++) e._axes[n] = 0;
                    return e;
                  }
                  return (
                    Yi(e, t),
                    (e.prototype.isButtonPressed = function (t, e) {
                      return void 0 === e && (e = 1), this._buttons[t] >= e;
                    }),
                    (e.prototype.getButton = function (t) {
                      return this._buttons[t];
                    }),
                    (e.prototype.getAxes = function (t) {
                      var e = this._axes[t];
                      return Math.abs(e) < Ji.MinAxisMoveThreshold ? 0 : e;
                    }),
                    (e.prototype.updateButton = function (t, e) {
                      this._buttons[t] = e;
                    }),
                    (e.prototype.updateAxes = function (t, e) {
                      this._axes[t] = e;
                    }),
                    e
                  );
                })($t);
              !(function (t) {
                (t[(t.Face1 = 0)] = "Face1"),
                  (t[(t.Face2 = 1)] = "Face2"),
                  (t[(t.Face3 = 2)] = "Face3"),
                  (t[(t.Face4 = 3)] = "Face4"),
                  (t[(t.LeftBumper = 4)] = "LeftBumper"),
                  (t[(t.RightBumper = 5)] = "RightBumper"),
                  (t[(t.LeftTrigger = 6)] = "LeftTrigger"),
                  (t[(t.RightTrigger = 7)] = "RightTrigger"),
                  (t[(t.Select = 8)] = "Select"),
                  (t[(t.Start = 9)] = "Start"),
                  (t[(t.LeftStick = 10)] = "LeftStick"),
                  (t[(t.RightStick = 11)] = "RightStick"),
                  (t[(t.DpadUp = 12)] = "DpadUp"),
                  (t[(t.DpadDown = 13)] = "DpadDown"),
                  (t[(t.DpadLeft = 14)] = "DpadLeft"),
                  (t[(t.DpadRight = 15)] = "DpadRight");
              })(Xi || (Xi = {})),
                (function (t) {
                  (t[(t.LeftStickX = 0)] = "LeftStickX"),
                    (t[(t.LeftStickY = 1)] = "LeftStickY"),
                    (t[(t.RightStickX = 2)] = "RightStickX"),
                    (t[(t.RightStickY = 3)] = "RightStickY");
                })(Qi || (Qi = {}));
              var tr,
                er = (function () {
                  function t(t) {
                    (this.nativeComponent = t),
                      (this._paused = !1),
                      (this._nativeHandlers = {});
                  }
                  return (
                    (t.prototype.on = function (t, e) {
                      this._nativeHandlers[t] &&
                        this.off(t, this._nativeHandlers[t]),
                        (this._nativeHandlers[t] = this._decorate(e)),
                        this.nativeComponent.addEventListener(
                          t,
                          this._nativeHandlers[t]
                        );
                    }),
                    (t.prototype.off = function (t, e) {
                      e || (e = this._nativeHandlers[t]),
                        this.nativeComponent.removeEventListener(t, e),
                        (this._nativeHandlers[t] = null);
                    }),
                    (t.prototype._decorate = function (t) {
                      var e = this;
                      return function (n) {
                        e._paused || t(n);
                      };
                    }),
                    (t.prototype.pause = function () {
                      this._paused = !0;
                    }),
                    (t.prototype.resume = function () {
                      this._paused = !1;
                    }),
                    (t.prototype.clear = function () {
                      for (var t in this._nativeHandlers) this.off(t);
                    }),
                    t
                  );
                })(),
                nr = (function () {
                  function t(t, e) {
                    (this._windowGlobal = t),
                      (this._documentGlobal = e),
                      (this._windowComponent = new er(this._windowGlobal)),
                      (this._documentComponent = new er(this._documentGlobal));
                  }
                  return (
                    Object.defineProperty(t.prototype, "window", {
                      get: function () {
                        return this._windowComponent;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "document", {
                      get: function () {
                        return this._documentComponent;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.pause = function () {
                      this.window.pause(), this.document.pause();
                    }),
                    (t.prototype.resume = function () {
                      this.window.resume(), this.document.resume();
                    }),
                    (t.prototype.clear = function () {
                      this.window.clear(), this.document.clear();
                    }),
                    t
                  );
                })(),
                ir = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                rr = function () {
                  return (rr =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                };
              l(),
                (function (t) {
                  (t[(t.None = 0)] = "None"),
                    (t[(t.Canvas = 1)] = "Canvas"),
                    (t[(t.All = 2)] = "All");
                })(tr || (tr = {}));
              var or,
                sr = (function (t) {
                  function e(n) {
                    var i,
                      r,
                      o,
                      s = t.call(this) || this;
                    (s._hasStarted = !1),
                      (s.postProcessors = []),
                      (s.scenes = {}),
                      (s._animations = []),
                      (s._suppressPlayButton = !1),
                      (s.pauseAudioWhenHidden = !0),
                      (s.isDebug = !1),
                      (s.debugColor = new tt(255, 255, 255)),
                      (s.enableCanvasTransparency = !0),
                      (s.onFatalException = function (t) {
                        R.getInstance().fatal(t);
                      }),
                      (s._timescale = 1),
                      (s._isLoading = !1),
                      (s._isInitialized = !1),
                      (n = rr(rr({}, e._DefaultEngineOptions), n)),
                      (s.browser = new nr(window, document));
                    var a = new kn();
                    if (
                      !n.suppressMinimumBrowserFeatureDetection &&
                      !(s._compatible = a.test())
                    ) {
                      var c = document.createElement("div");
                      if (
                        ((c.innerText =
                          "Sorry, your browser does not support all the features needed for Excalibur"),
                        document.body.appendChild(c),
                        a.failedTests.forEach(function (t) {
                          var e = document.createElement("div");
                          (e.innerText = "Browser feature missing " + t),
                            document.body.appendChild(e);
                        }),
                        n.canvasElementId)
                      ) {
                        var h = document.getElementById(n.canvasElementId);
                        h && h.parentElement.removeChild(h);
                      }
                      return s;
                    }
                    (s._compatible = !0),
                      console.log &&
                        !n.suppressConsoleBootMessage &&
                        (console.log(
                          "%cPowered by Excalibur.js (v" + Qr + ")",
                          "background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;"
                        ),
                        console.log(
                          "\n      /| ________________\nO|===|* >________________>\n      \\|"
                        ),
                        console.log(
                          "Visit",
                          "http://excaliburjs.com",
                          "for more information"
                        )),
                      n.suppressPlayButton && (s._suppressPlayButton = !0),
                      (s._logger = R.getInstance()),
                      s._logger.defaultLevel === M.Debug &&
                        a.logBrowserFeatures(),
                      s._logger.debug("Building engine..."),
                      (s.canvasElementId = n.canvasElementId),
                      n.canvasElementId
                        ? (s._logger.debug(
                            "Using Canvas element specified: " +
                              n.canvasElementId
                          ),
                          (s.canvas = document.getElementById(
                            n.canvasElementId
                          )))
                        : n.canvasElement
                        ? (s._logger.debug(
                            "Using Canvas element specified:",
                            n.canvasElement
                          ),
                          (s.canvas = n.canvasElement))
                        : (s._logger.debug("Using generated canvas element"),
                          (s.canvas = document.createElement("canvas")));
                    var u =
                      null !== (i = n.displayMode) && void 0 !== i
                        ? i
                        : Nt.Fixed;
                    return (
                      (n.width && n.height) || n.viewport
                        ? (void 0 === n.displayMode && (u = Nt.Fixed),
                          s._logger.debug(
                            "Engine viewport is size " +
                              n.width +
                              " x " +
                              n.height
                          ))
                        : n.displayMode ||
                          (s._logger.debug("Engine viewport is fullscreen"),
                          (u = Nt.FullScreen)),
                      (s.ctx = s.canvas.getContext("2d", {
                        alpha: s.enableCanvasTransparency,
                      })),
                      (s.screen = new Yt({
                        canvas: s.canvas,
                        context: s.ctx,
                        antialiasing:
                          null === (r = n.antialiasing) || void 0 === r || r,
                        browser: s.browser,
                        viewport:
                          null !== (o = n.viewport) && void 0 !== o
                            ? o
                            : { width: n.width, height: n.height },
                        resolution: n.resolution,
                        displayMode: u,
                        position: n.position,
                        pixelRatio: n.suppressHiDPIScaling ? 1 : null,
                      })),
                      s.screen.applyResolutionAndViewport(),
                      n.backgroundColor &&
                        (s.backgroundColor = n.backgroundColor.clone()),
                      (s.enableCanvasTransparency = n.enableCanvasTransparency),
                      (s._loader = new Mn()),
                      (s.debug = new xi(s)),
                      s._initialize(n),
                      (s.rootScene = s.currentScene = new vi(s)),
                      s.addScene("root", s.rootScene),
                      s.goToScene("root"),
                      s
                    );
                  }
                  return (
                    ir(e, t),
                    Object.defineProperty(e.prototype, "canvasWidth", {
                      get: function () {
                        return this.screen.canvasWidth;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "halfCanvasWidth", {
                      get: function () {
                        return this.screen.halfCanvasWidth;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "canvasHeight", {
                      get: function () {
                        return this.screen.canvasHeight;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "halfCanvasHeight", {
                      get: function () {
                        return this.screen.halfCanvasHeight;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "drawWidth", {
                      get: function () {
                        return this.screen.drawWidth;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "halfDrawWidth", {
                      get: function () {
                        return this.screen.halfDrawWidth;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "drawHeight", {
                      get: function () {
                        return this.screen.drawHeight;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "halfDrawHeight", {
                      get: function () {
                        return this.screen.halfDrawHeight;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isHiDpi", {
                      get: function () {
                        return this.screen.isHiDpi;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "stats", {
                      get: function () {
                        return this.debug.stats;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "isFullscreen", {
                      get: function () {
                        return this.screen.isFullScreen;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "displayMode", {
                      get: function () {
                        return this.screen.displayMode;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "pixelRatio", {
                      get: function () {
                        return this.screen.pixelRatio;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.on = function (e, n) {
                      t.prototype.on.call(this, e, n);
                    }),
                    (e.prototype.once = function (e, n) {
                      t.prototype.once.call(this, e, n);
                    }),
                    (e.prototype.off = function (e, n) {
                      t.prototype.off.call(this, e, n);
                    }),
                    (e.prototype.getWorldBounds = function () {
                      return this.screen.getWorldBounds();
                    }),
                    Object.defineProperty(e.prototype, "timescale", {
                      get: function () {
                        return this._timescale;
                      },
                      set: function (t) {
                        t <= 0
                          ? R.getInstance().error(
                              "Cannot set engine.timescale to a value of 0 or less than 0."
                            )
                          : (this._timescale = t);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.playAnimation = function (t, e, n) {
                      this._animations.push(new ar(t, e, n));
                    }),
                    (e.prototype.addTileMap = function (t) {
                      this.currentScene.addTileMap(t);
                    }),
                    (e.prototype.removeTileMap = function (t) {
                      this.currentScene.removeTileMap(t);
                    }),
                    (e.prototype.addTimer = function (t) {
                      return this.currentScene.addTimer(t);
                    }),
                    (e.prototype.removeTimer = function (t) {
                      return this.currentScene.removeTimer(t);
                    }),
                    (e.prototype.addScene = function (t, e) {
                      this.scenes[t] &&
                        this._logger.warn(
                          "Scene",
                          t,
                          "already exists overwriting"
                        ),
                        (this.scenes[t] = e);
                    }),
                    (e.prototype.removeScene = function (t) {
                      if (t instanceof vi)
                        for (var e in this.scenes)
                          this.scenes.hasOwnProperty(e) &&
                            this.scenes[e] === t &&
                            delete this.scenes[e];
                      "string" == typeof t && delete this.scenes[t];
                    }),
                    (e.prototype.add = function (t) {
                      t instanceof bn
                        ? this.currentScene.addScreenElement(t)
                        : (t instanceof vn && this._addChild(t),
                          t instanceof xn && this.addTimer(t),
                          t instanceof An && this.addTileMap(t),
                          2 === arguments.length &&
                            this.addScene(arguments[0], arguments[1]));
                    }),
                    (e.prototype.remove = function (t) {
                      t instanceof bn
                        ? this.currentScene.removeScreenElement(t)
                        : (t instanceof vn && this._removeChild(t),
                          t instanceof xn && this.removeTimer(t),
                          t instanceof An && this.removeTileMap(t),
                          t instanceof vi && this.removeScene(t),
                          "string" == typeof t && this.removeScene(t));
                    }),
                    (e.prototype._addChild = function (t) {
                      this.currentScene.add(t);
                    }),
                    (e.prototype._removeChild = function (t) {
                      this.currentScene.remove(t);
                    }),
                    (e.prototype.goToScene = function (t) {
                      if (this.scenes[t]) {
                        var e = this.currentScene,
                          n = this.scenes[t];
                        this._logger.debug("Going to scene:", t),
                          this.currentScene.isInitialized &&
                            (this.currentScene._deactivate.call(
                              this.currentScene,
                              [e, n]
                            ),
                            this.currentScene.eventDispatcher.emit(
                              "deactivate",
                              new jt(n, this.currentScene)
                            )),
                          (this.currentScene = n),
                          this.screen.setCurrentCamera(n.camera),
                          this.currentScene._initialize(this),
                          this.currentScene._activate.call(this.currentScene, [
                            e,
                            n,
                          ]),
                          this.currentScene.eventDispatcher.emit(
                            "activate",
                            new Rt(e, this.currentScene)
                          );
                      } else this._logger.error("Scene", t, "does not exist!");
                    }),
                    (e.prototype.screenToWorldCoordinates = function (t) {
                      return this.screen.screenToWorldCoordinates(t);
                    }),
                    (e.prototype.worldToScreenCoordinates = function (t) {
                      return this.screen.worldToScreenCoordinates(t);
                    }),
                    (e.prototype._initialize = function (t) {
                      var e,
                        n,
                        i = this;
                      (this.pageScrollPreventionMode = t.scrollPreventionMode),
                        (this.input = {
                          keyboard: new Ti(),
                          pointers: new Ki(this),
                          gamepads: new Ji(),
                        }),
                        this.input.keyboard.init(),
                        this.input.pointers.init(
                          t && t.pointerScope === Ci.Document
                            ? document
                            : this.canvas
                        ),
                        this.input.gamepads.init(),
                        void 0 !== document.hidden
                          ? ((e = "hidden"), (n = "visibilitychange"))
                          : "msHidden" in document
                          ? ((e = "msHidden"), (n = "msvisibilitychange"))
                          : "webkitHidden" in document &&
                            ((e = "webkitHidden"),
                            (n = "webkitvisibilitychange")),
                        this.browser.document.on(n, function () {
                          document[e]
                            ? (i.eventDispatcher.emit("hidden", new Ot(i)),
                              i._logger.debug("Window hidden"))
                            : (i.eventDispatcher.emit("visible", new Ct(i)),
                              i._logger.debug("Window visible"));
                        }),
                        this.canvasElementId ||
                          t.canvasElement ||
                          document.body.appendChild(this.canvas);
                    }),
                    (e.prototype.onInitialize = function (t) {}),
                    (e.prototype.setAntialiasing = function (t) {
                      this.screen.antialiasing = t;
                    }),
                    (e.prototype.getAntialiasing = function () {
                      return this.screen.antialiasing;
                    }),
                    Object.defineProperty(e.prototype, "isInitialized", {
                      get: function () {
                        return this._isInitialized;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype._overrideInitialize = function (e) {
                      this.isInitialized ||
                        (this.onInitialize(e),
                        t.prototype.emit.call(
                          this,
                          "initialize",
                          new kt(e, this)
                        ),
                        (this._isInitialized = !0));
                    }),
                    (e.prototype._update = function (t) {
                      if (this._isLoading)
                        return (
                          this._loader.update(this, t),
                          this.input.keyboard.update(),
                          this.input.pointers.update(),
                          void this.input.gamepads.update()
                        );
                      this._overrideInitialize(this),
                        this._preupdate(t),
                        this.currentScene.update(this, t),
                        (this._animations = this._animations.filter(function (
                          t
                        ) {
                          return !t.animation.isDone();
                        })),
                        this.input.keyboard.update(),
                        this.input.pointers.update(),
                        this.input.gamepads.update(),
                        this._postupdate(t);
                    }),
                    (e.prototype._preupdate = function (t) {
                      this.emit("preupdate", new _t(this, t, this)),
                        this.onPreUpdate(this, t);
                    }),
                    (e.prototype.onPreUpdate = function (t, e) {}),
                    (e.prototype._postupdate = function (t) {
                      this.emit("postupdate", new vt(this, t, this)),
                        this.onPostUpdate(this, t);
                    }),
                    (e.prototype.onPostUpdate = function (t, e) {}),
                    (e.prototype._draw = function (t) {
                      var e = this.ctx;
                      if ((this._predraw(e, t), this._isLoading))
                        this._loader.draw(e, t);
                      else {
                        e.clearRect(0, 0, this.canvasWidth, this.canvasHeight),
                          (e.fillStyle = this.backgroundColor.toString()),
                          e.fillRect(0, 0, this.canvasWidth, this.canvasHeight),
                          this.currentScene.draw(this.ctx, t);
                        for (var n = 0, i = this._animations.length; n < i; n++)
                          this._animations[n].animation.draw(
                            e,
                            this._animations[n].x,
                            this._animations[n].y
                          );
                        if (this.isDebug) {
                          (this.ctx.font = "Consolas"),
                            (this.ctx.fillStyle = this.debugColor.toString());
                          for (
                            var r = this.input.keyboard.getKeys(), o = 0;
                            o < r.length;
                            o++
                          )
                            this.ctx.fillText(
                              r[o].toString() +
                                " : " +
                                (mi[r[o]] ? mi[r[o]] : "Not Mapped"),
                              100,
                              10 * o + 10
                            );
                          this.ctx.fillText(
                            "FPS:" +
                              this.stats.currFrame.fps.toFixed(2).toString(),
                            10,
                            10
                          );
                        }
                        for (var s = 0; s < this.postProcessors.length; s++)
                          this.postProcessors[s].process(
                            this.ctx.getImageData(
                              0,
                              0,
                              this.canvasWidth,
                              this.canvasHeight
                            ),
                            this.ctx
                          );
                        this._postdraw(e, t);
                      }
                    }),
                    (e.prototype._predraw = function (t, e) {
                      this.emit("predraw", new dt(t, e, this)),
                        this.onPreDraw(t, e);
                    }),
                    (e.prototype.onPreDraw = function (t, e) {}),
                    (e.prototype._postdraw = function (t, e) {
                      this.emit("postdraw", new ft(t, e, this)),
                        this.onPostDraw(t, e);
                    }),
                    (e.prototype.onPostDraw = function (t, e) {}),
                    (e.prototype.start = function (t) {
                      var n,
                        i = this;
                      return this._compatible
                        ? (this.screen.pushResolutionAndViewport(),
                          (this.screen.resolution = this.screen.viewport),
                          this.screen.applyResolutionAndViewport(),
                          t
                            ? ((this._loader = t),
                              (this._loader.suppressPlayButton =
                                this._suppressPlayButton ||
                                this._loader.suppressPlayButton),
                              this._loader.wireEngine(this),
                              (n = this.load(this._loader)))
                            : (n = d.resolve()),
                          n.then(function () {
                            i.screen.popResolutionAndViewport(),
                              i.screen.applyResolutionAndViewport(),
                              i.emit("start", new lt(i));
                          }),
                          this._hasStarted ||
                            ((this._hasStarted = !0),
                            this._logger.debug("Starting game..."),
                            this.browser.resume(),
                            e.createMainLoop(
                              this,
                              window.requestAnimationFrame,
                              Date.now
                            )(),
                            this._logger.debug("Game started")),
                          n)
                        : new d().reject(
                            "Excalibur is incompatible with your browser"
                          );
                    }),
                    (e.createMainLoop = function (t, e, n) {
                      var i = n();
                      return function r() {
                        if (t._hasStarted)
                          try {
                            (t._requestId = e(r)),
                              t.emit("preframe", new mt(t, t.stats.prevFrame));
                            var o = n(),
                              s = Math.floor(o - i) || 1;
                            s > 200 && (s = 1);
                            var a = s * t.timescale,
                              c = t.stats.prevFrame.id + 1;
                            t.stats.currFrame.reset(),
                              (t.stats.currFrame.id = c),
                              (t.stats.currFrame.delta = a),
                              (t.stats.currFrame.fps = 1 / (a / 1e3));
                            var h = n();
                            t._update(a);
                            var u = n();
                            t._draw(a);
                            var l = n();
                            (t.stats.currFrame.duration.update = u - h),
                              (t.stats.currFrame.duration.draw = l - u),
                              (i = o),
                              t.emit("postframe", new bt(t, t.stats.currFrame)),
                              t.stats.prevFrame.reset(t.stats.currFrame);
                          } catch (e) {
                            window.cancelAnimationFrame(t._requestId),
                              t.stop(),
                              t.onFatalException(e);
                          }
                      };
                    }),
                    (e.prototype.stop = function () {
                      this._hasStarted &&
                        (this.emit("stop", new pt(this)),
                        this.browser.pause(),
                        (this._hasStarted = !1),
                        this._logger.debug("Game stopped"));
                    }),
                    (e.prototype.isPaused = function () {
                      return !this._hasStarted;
                    }),
                    (e.prototype.screenshot = function () {
                      var t = new Image(),
                        e = this.canvas.toDataURL("image/png");
                      return (t.src = e), t;
                    }),
                    (e.prototype.load = function (t) {
                      var e = this,
                        n = new d();
                      return (
                        (this._isLoading = !0),
                        t.load().then(function () {
                          e._suppressPlayButton
                            ? setTimeout(function () {
                                (e._isLoading = !1), n.resolve();
                              }, 500)
                            : ((e._isLoading = !1), n.resolve());
                        }),
                        n
                      );
                    }),
                    (e._DefaultEngineOptions = {
                      width: 0,
                      height: 0,
                      enableCanvasTransparency: !0,
                      canvasElementId: "",
                      canvasElement: void 0,
                      pointerScope: Ci.Document,
                      suppressConsoleBootMessage: null,
                      suppressMinimumBrowserFeatureDetection: null,
                      suppressHiDPIScaling: null,
                      suppressPlayButton: null,
                      scrollPreventionMode: tr.Canvas,
                      backgroundColor: tt.fromHex("#2185d0"),
                    }),
                    e
                  );
                })($t),
                ar = function (t, e, n) {
                  (this.animation = t), (this.x = e), (this.y = n);
                },
                cr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                hr = (function (t) {
                  function e(e, n) {
                    void 0 === n && (n = "MediaEvent");
                    var i = t.call(this) || this;
                    return (i.target = e), (i._name = n), i;
                  }
                  return (
                    cr(e, t),
                    Object.defineProperty(e.prototype, "bubbles", {
                      get: function () {
                        return !1;
                      },
                      set: function (t) {},
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "_path", {
                      get: function () {
                        return null;
                      },
                      set: function (t) {},
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.stopPropagation = function () {}),
                    (e.prototype.action = function () {}),
                    (e.prototype.propagate = function () {}),
                    (e.prototype.layPath = function (t) {}),
                    e
                  );
                })(at),
                ur = (function (t) {
                  function e(e, n) {
                    var i = t.call(this, e, "NativeSoundEvent") || this;
                    return (i.track = n), i;
                  }
                  return cr(e, t), e;
                })(hr),
                lr = (function (t) {
                  function e(e, n) {
                    var i =
                      t.call(this, e, "NativeSoundProcessedEvent") || this;
                    return (i.processedData = n), (i.data = i.processedData), i;
                  }
                  return cr(e, t), e;
                })(hr),
                pr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })();
              !(function (t) {
                (t[(t.Circle = 0)] = "Circle"),
                  (t[(t.Rectangle = 1)] = "Rectangle");
              })(or || (or = {}));
              var dr = (function (t) {
                  function e(e, n, i, r, o, s, a, c, h, u) {
                    return t.call(this, e, n, i, r, o, s, a, c, h, u) || this;
                  }
                  return pr(e, t), e;
                })(
                  pe(
                    (function () {
                      function t(t, e, n, i, r, o, s, a, c, h) {
                        (this.position = new q(0, 0)),
                          (this.velocity = new q(0, 0)),
                          (this.acceleration = new q(0, 0)),
                          (this.particleRotationalVelocity = 0),
                          (this.currentRotation = 0),
                          (this.focus = null),
                          (this.focusAccel = 0),
                          (this.opacity = 1),
                          (this.beginColor = tt.White),
                          (this.endColor = tt.White),
                          (this.life = 300),
                          (this.fadeFlag = !1),
                          (this._rRate = 1),
                          (this._gRate = 1),
                          (this._bRate = 1),
                          (this._aRate = 0),
                          (this._currentColor = tt.White),
                          (this.emitter = null),
                          (this.particleSize = 5),
                          (this.particleSprite = null),
                          (this.sizeRate = 0),
                          (this.elapsedMultiplier = 0);
                        var u = t;
                        if (u && !(t instanceof fr)) {
                          var l = t;
                          (u = l.emitter),
                            (e = l.life),
                            (n = l.opacity),
                            (r = l.endColor),
                            (i = l.beginColor),
                            (o = l.position),
                            (s = l.velocity),
                            (a = l.acceleration),
                            (c = l.startSize),
                            (h = l.endSize);
                        }
                        (this.emitter = u),
                          (this.life = e || this.life),
                          (this.opacity = n || this.opacity),
                          (this.endColor = r || this.endColor.clone()),
                          (this.beginColor = i || this.beginColor.clone()),
                          (this._currentColor = this.beginColor.clone()),
                          (this.position = o || this.position),
                          (this.velocity = s || this.velocity),
                          (this.acceleration = a || this.acceleration),
                          (this._rRate =
                            (this.endColor.r - this.beginColor.r) / this.life),
                          (this._gRate =
                            (this.endColor.g - this.beginColor.g) / this.life),
                          (this._bRate =
                            (this.endColor.b - this.beginColor.b) / this.life),
                          (this._aRate = this.opacity / this.life),
                          (this.startSize = c || 0),
                          (this.endSize = h || 0),
                          this.endSize > 0 &&
                            this.startSize > 0 &&
                            ((this.sizeRate =
                              (this.endSize - this.startSize) / this.life),
                            (this.particleSize = this.startSize));
                      }
                      return (
                        (t.prototype.kill = function () {
                          this.emitter.removeParticle(this);
                        }),
                        (t.prototype.update = function (t) {
                          if (
                            ((this.life = this.life - t),
                            (this.elapsedMultiplier =
                              this.elapsedMultiplier + t),
                            this.life < 0 && this.kill(),
                            this.fadeFlag &&
                              (this.opacity = m(
                                this._aRate * this.life,
                                1e-4,
                                1
                              )),
                            this.startSize > 0 &&
                              this.endSize > 0 &&
                              (this.particleSize = m(
                                this.sizeRate * t + this.particleSize,
                                Math.min(this.startSize, this.endSize),
                                Math.max(this.startSize, this.endSize)
                              )),
                            (this._currentColor.r = m(
                              this._currentColor.r + this._rRate * t,
                              0,
                              255
                            )),
                            (this._currentColor.g = m(
                              this._currentColor.g + this._gRate * t,
                              0,
                              255
                            )),
                            (this._currentColor.b = m(
                              this._currentColor.b + this._bRate * t,
                              0,
                              255
                            )),
                            (this._currentColor.a = m(this.opacity, 1e-4, 1)),
                            this.focus)
                          ) {
                            var e = this.focus
                              .sub(this.position)
                              .normalize()
                              .scale(this.focusAccel)
                              .scale(t / 1e3);
                            this.velocity = this.velocity.add(e);
                          } else
                            this.velocity = this.velocity.add(
                              this.acceleration.scale(t / 1e3)
                            );
                          (this.position = this.position.add(
                            this.velocity.scale(t / 1e3)
                          )),
                            this.particleRotationalVelocity &&
                              (this.currentRotation =
                                (this.currentRotation +
                                  (this.particleRotationalVelocity * t) / 1e3) %
                                (2 * Math.PI));
                        }),
                        (t.prototype.draw = function (t) {
                          if (this.particleSprite)
                            return (
                              (this.particleSprite.rotation = this.currentRotation),
                              this.particleSprite.scale.setTo(
                                this.particleSize,
                                this.particleSize
                              ),
                              void this.particleSprite.draw(
                                t,
                                this.position.x,
                                this.position.y
                              )
                            );
                          (this._currentColor.a = m(this.opacity, 1e-4, 1)),
                            (t.fillStyle = this._currentColor.toString()),
                            t.beginPath(),
                            t.arc(
                              this.position.x,
                              this.position.y,
                              this.particleSize,
                              0,
                              2 * Math.PI
                            ),
                            t.fill(),
                            t.closePath();
                        }),
                        t
                      );
                    })()
                  )
                ),
                fr = (function (t) {
                  function e(e, n, i, r) {
                    return t.call(this, e, n, i, r) || this;
                  }
                  return pr(e, t), e;
                })(
                  pe(
                    (function (t) {
                      function e(e, n, i, r) {
                        var o =
                          t.call(
                            this,
                            "number" == typeof e
                              ? { pos: new q(e, n), width: i, height: r }
                              : e
                          ) || this;
                        (o.numParticles = 0),
                          (o.isEmitting = !0),
                          (o.particles = null),
                          (o.deadParticles = null),
                          (o.minVel = 0),
                          (o.maxVel = 0),
                          (o.acceleration = new q(0, 0)),
                          (o.minAngle = 0),
                          (o.maxAngle = 0),
                          (o.emitRate = 1),
                          (o.particleLife = 2e3),
                          (o.opacity = 1),
                          (o.fadeFlag = !1),
                          (o.focus = null),
                          (o.focusAccel = 1),
                          (o.startSize = null),
                          (o.endSize = null),
                          (o.minSize = 5),
                          (o.maxSize = 5),
                          (o.beginColor = tt.White),
                          (o.endColor = tt.White),
                          (o.particleSprite = null),
                          (o.emitterType = or.Rectangle),
                          (o.radius = 0),
                          (o.particleRotationalVelocity = 0),
                          (o.randomRotation = !1),
                          (o._particlesToEmit = 0),
                          (o.body.collider.type = st.PreventCollision),
                          (o.particles = new D()),
                          (o.deadParticles = new D()),
                          (o.random = new f());
                        for (var s = 0; s < o.traits.length; s++)
                          o.traits[s] instanceof Ge && o.traits.splice(s, 1);
                        return o;
                      }
                      return (
                        pr(e, t),
                        (e.prototype.removeParticle = function (t) {
                          this.deadParticles.push(t);
                        }),
                        (e.prototype.emitParticles = function (t) {
                          for (var e = 0; e < t; e++)
                            this.particles.push(this._createParticle());
                        }),
                        (e.prototype.clearParticles = function () {
                          this.particles.clear();
                        }),
                        (e.prototype._createParticle = function () {
                          var t = 0,
                            e = 0,
                            n = b(this.minAngle, this.maxAngle, this.random),
                            i = b(this.minVel, this.maxVel, this.random),
                            r =
                              this.startSize ||
                              b(this.minSize, this.maxSize, this.random),
                            o = i * Math.cos(n),
                            s = i * Math.sin(n);
                          if (this.emitterType === or.Rectangle)
                            (t = b(
                              this.pos.x,
                              this.pos.x + this.width,
                              this.random
                            )),
                              (e = b(
                                this.pos.y,
                                this.pos.y + this.height,
                                this.random
                              ));
                          else if (this.emitterType === or.Circle) {
                            var a = b(0, this.radius, this.random);
                            (t = a * Math.cos(n) + this.pos.x),
                              (e = a * Math.sin(n) + this.pos.y);
                          }
                          var c = new dr(
                            this,
                            this.particleLife,
                            this.opacity,
                            this.beginColor,
                            this.endColor,
                            new q(t, e),
                            new q(o, s),
                            this.acceleration,
                            this.startSize,
                            this.endSize
                          );
                          return (
                            (c.fadeFlag = this.fadeFlag),
                            (c.particleSize = r),
                            this.particleSprite &&
                              (c.particleSprite = this.particleSprite),
                            (c.particleRotationalVelocity = this.particleRotationalVelocity),
                            this.randomRotation &&
                              (c.currentRotation = b(
                                0,
                                2 * Math.PI,
                                this.random
                              )),
                            this.focus &&
                              ((c.focus = this.focus.add(
                                new q(this.pos.x, this.pos.y)
                              )),
                              (c.focusAccel = this.focusAccel)),
                            c
                          );
                        }),
                        (e.prototype.update = function (e, n) {
                          var i = this;
                          t.prototype.update.call(this, e, n),
                            this.isEmitting &&
                              ((this._particlesToEmit +=
                                this.emitRate * (n / 1e3)),
                              this._particlesToEmit > 1 &&
                                (this.emitParticles(
                                  Math.floor(this._particlesToEmit)
                                ),
                                (this._particlesToEmit =
                                  this._particlesToEmit -
                                  Math.floor(this._particlesToEmit)))),
                            this.particles.forEach(function (t) {
                              return t.update(n);
                            }),
                            this.deadParticles.forEach(function (t) {
                              return i.particles.removeElement(t);
                            }),
                            this.deadParticles.clear();
                        }),
                        (e.prototype.draw = function (t) {
                          this.particles.forEach(function (e) {
                            return e.draw(t);
                          });
                        }),
                        (e.prototype.debugDraw = function (e) {
                          t.prototype.debugDraw.call(this, e),
                            (e.fillStyle = tt.Black.toString()),
                            e.fillText(
                              "Particles: " + this.particles.count(),
                              this.pos.x,
                              this.pos.y + 20
                            ),
                            this.focus &&
                              (e.fillRect(
                                this.focus.x + this.pos.x,
                                this.focus.y + this.pos.y,
                                3,
                                3
                              ),
                              Qe(
                                e,
                                tt.Yellow,
                                this.focus.x + this.pos.x,
                                this.focus.y + this.pos.y,
                                this.center.x,
                                this.center.y
                              ),
                              e.fillText(
                                "Focus",
                                this.focus.x + this.pos.x,
                                this.focus.y + this.pos.y
                              ));
                        }),
                        e
                      );
                    })(vn)
                  )
                ),
                yr = { Actions: o },
                gr = (function () {
                  function t() {}
                  return (
                    (t.create = function (t, e) {
                      if (this._currentGroup > this._MAX_GROUPS)
                        throw new Error(
                          "Cannot have more than " +
                            this._MAX_GROUPS +
                            " collision groups"
                        );
                      if (this._groups.get(t))
                        throw new Error(
                          "Collision group " + t + " already exists"
                        );
                      var n = new $e(
                        t,
                        this._currentBit,
                        void 0 !== e ? e : ~this._currentBit
                      );
                      return (
                        (this._currentBit = (this._currentBit << 1) | 0),
                        this._currentGroup++,
                        this._groups.set(t, n),
                        n
                      );
                    }),
                    Object.defineProperty(t, "groups", {
                      get: function () {
                        return Array.from(this._groups.values());
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.groupByName = function (t) {
                      return this._groups.get(t);
                    }),
                    (t.reset = function () {
                      (this._groups = new Map()),
                        (this._currentBit = this._STARTING_BIT),
                        (this._currentGroup = 1);
                    }),
                    (t._STARTING_BIT = 1),
                    (t._MAX_GROUPS = 32),
                    (t._currentGroup = 1),
                    (t._currentBit = t._STARTING_BIT),
                    (t._groups = new Map()),
                    t
                  );
                })(),
                _r = function () {
                  return (_r =
                    Object.assign ||
                    function (t) {
                      for (var e, n = 1, i = arguments.length; n < i; n++)
                        for (var r in (e = arguments[n]))
                          Object.prototype.hasOwnProperty.call(e, r) &&
                            (t[r] = e[r]);
                      return t;
                    }).apply(this, arguments);
                },
                vr = (function () {
                  function t(t) {
                    (this.lineWidth = 5),
                      (this.filled = !1),
                      (this._points = []),
                      (this.anchor = q.Zero),
                      (this.offset = q.Zero),
                      (this.rotation = 0),
                      (this.scale = q.One),
                      (this.opacity = 1),
                      (this._points = t);
                    var e = this._points.reduce(function (t, e) {
                        return Math.min(t, e.x);
                      }, 0),
                      n = this._points.reduce(function (t, e) {
                        return Math.max(t, e.x);
                      }, 0);
                    this.drawWidth = n - e;
                    var i = this._points.reduce(function (t, e) {
                        return Math.min(t, e.y);
                      }, 0),
                      r = this._points.reduce(function (t, e) {
                        return Math.max(t, e.y);
                      }, 0);
                    (this.drawHeight = r - i),
                      (this.height = this.drawHeight),
                      (this.width = this.drawWidth);
                  }
                  return (
                    (t.prototype.addEffect = function () {}),
                    (t.prototype.removeEffect = function () {}),
                    (t.prototype.clearEffects = function () {}),
                    (t.prototype.reset = function () {}),
                    (t.prototype.draw = function (t, e, n) {
                      t instanceof CanvasRenderingContext2D
                        ? this._drawWithOptions({ ctx: t, x: e, y: n })
                        : this._drawWithOptions(t);
                    }),
                    (t.prototype._drawWithOptions = function (t) {
                      var e,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        c,
                        h = _r(_r({}, t), {
                          rotation:
                            null !== (e = t.rotation) && void 0 !== e
                              ? e
                              : this.rotation,
                          drawWidth:
                            null !== (n = t.drawWidth) && void 0 !== n
                              ? n
                              : this.drawWidth,
                          drawHeight:
                            null !== (i = t.drawHeight) && void 0 !== i
                              ? i
                              : this.drawHeight,
                          flipHorizontal:
                            null !== (r = t.flipHorizontal) && void 0 !== r
                              ? r
                              : this.flipHorizontal,
                          flipVertical:
                            null !== (o = t.flipVertical) && void 0 !== o
                              ? o
                              : this.flipVertical,
                          anchor:
                            null !== (s = t.anchor) && void 0 !== s
                              ? s
                              : this.anchor,
                          offset:
                            null !== (a = t.offset) && void 0 !== a
                              ? a
                              : this.offset,
                          opacity:
                            null !== (c = t.opacity) && void 0 !== c
                              ? c
                              : this.opacity,
                        }),
                        u = h.ctx,
                        l = h.x,
                        p = h.y,
                        d = h.rotation,
                        f = h.drawWidth,
                        y = h.drawHeight,
                        g = h.anchor,
                        _ = h.offset,
                        v = h.opacity,
                        m = h.flipHorizontal,
                        b = h.flipVertical,
                        w = f * g.x + _.x + l,
                        x = y * g.y + _.y + p;
                      u.save(),
                        u.translate(w, x),
                        u.scale(this.scale.x, this.scale.y),
                        u.rotate(d),
                        u.beginPath(),
                        (u.lineWidth = this.lineWidth);
                      var P = this._points[0];
                      u.moveTo(P.x, P.y);
                      for (var A = 0, E = this._points.length; A < E; A++)
                        u.lineTo(this._points[A].x, this._points[A].y);
                      u.lineTo(P.x, P.y),
                        u.closePath(),
                        this.filled &&
                          ((u.fillStyle = this.fillColor.toString()), u.fill()),
                        (u.strokeStyle = this.lineColor.toString()),
                        m && (u.translate(f, 0), u.scale(-1, 1)),
                        b && (u.translate(0, y), u.scale(1, -1));
                      var S = u.globalAlpha;
                      (u.globalAlpha = null != v ? v : 1),
                        u.stroke(),
                        (u.globalAlpha = S),
                        u.restore();
                    }),
                    t
                  );
                })(),
                mr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                br = (function (t) {
                  function e(e, n, i, r, o, s) {
                    return t.call(this, e, n, i, r, o, s) || this;
                  }
                  return mr(e, t), e;
                })(
                  pe(
                    (function () {
                      function t(t, e, n, i, r, o) {
                        var s = this;
                        (this.sprites = []),
                          (this.image = null),
                          (this.columns = 0),
                          (this.rows = 0),
                          (this.spWidth = 0),
                          (this.spHeight = 0),
                          (this.spacing = 0);
                        var a = !1;
                        if (
                          (t instanceof Array
                            ? (this.sprites = t)
                            : (!t || t instanceof ve
                                ? ((this.image = t),
                                  (this.columns = e),
                                  (this.rows = n),
                                  (this.spWidth = i),
                                  (this.spHeight = r),
                                  (this.spacing = o || 0))
                                : ((this.columns = t.columns),
                                  (this.rows = t.rows),
                                  (this.spWidth = t.spWidth),
                                  (this.spHeight = t.spHeight),
                                  (this.image = t.image),
                                  (this.spacing = t.spacing || 0)),
                              (this.sprites = new Array(
                                this.columns * this.rows
                              )),
                              (a = !0)),
                          this.image instanceof ve)
                        ) {
                          var c = !1,
                            h = !1;
                          if (
                            (this.image.loaded.then(function (t) {
                              (c = s.spWidth * s.columns > t.naturalWidth),
                                (h = s.spHeight * s.rows > t.naturalHeight);
                            }),
                            c)
                          )
                            throw new RangeError(
                              "SpriteSheet specified is wider, " +
                                this.columns +
                                " cols x " +
                                this.spWidth +
                                " pixels > " +
                                this.image.image.naturalWidth +
                                " pixels than image width"
                            );
                          if (h)
                            throw new RangeError(
                              "SpriteSheet specified is taller, " +
                                this.rows +
                                " rows x " +
                                this.spHeight +
                                " pixels > " +
                                this.image.image.naturalHeight +
                                " pixels than image height"
                            );
                        }
                        if (a)
                          for (var u = 0; u < this.rows; u++)
                            for (var l = 0; l < this.columns; l++)
                              this.sprites[l + u * this.columns] = new ge(
                                this.image,
                                l * this.spWidth +
                                  this.spacing * l +
                                  this.spacing,
                                u * this.spHeight +
                                  this.spacing * u +
                                  this.spacing,
                                this.spWidth,
                                this.spHeight
                              );
                      }
                      return (
                        (t.prototype.getAnimationByIndices = function (
                          t,
                          e,
                          n
                        ) {
                          var i = this,
                            r = e.map(function (t) {
                              return i.sprites[t];
                            });
                          return (
                            (r = r.map(function (t) {
                              return t.clone();
                            })),
                            new we(t, r, n)
                          );
                        }),
                        (t.prototype.getAnimationBetween = function (
                          t,
                          e,
                          n,
                          i
                        ) {
                          var r = this.sprites.slice(e, n);
                          return (
                            (r = r.map(function (t) {
                              return t.clone();
                            })),
                            new we(t, r, i)
                          );
                        }),
                        (t.prototype.getAnimationForAll = function (t, e) {
                          var n = this.sprites.map(function (t) {
                            return t.clone();
                          });
                          return new we(t, n, e);
                        }),
                        (t.prototype.getSprite = function (t) {
                          if (t >= 0 && t < this.sprites.length)
                            return this.sprites[t];
                          throw new Error("Invalid index: " + t);
                        }),
                        (t.prototype.getAnimationByCoords = function (t, e, n) {
                          for (
                            var i = 0, r = 0, o = new Array(e.length), s = 0;
                            s < e.length;
                            s++
                          ) {
                            var a = e[s];
                            (a.image = a.image || this.image),
                              (i = Math.max(i, a.drawWidth)),
                              (r = Math.max(r, a.drawHeight)),
                              (o[s] = new ge(a));
                          }
                          var c = new we(t, o, n);
                          return (c.drawWidth = i), (c.drawHeight = r), c;
                        }),
                        t
                      );
                    })()
                  )
                ),
                wr = (function (t) {
                  function e(e, n, i, r, o, s, a, c) {
                    return t.call(this, e, n, i, r, o, s, a, c) || this;
                  }
                  return mr(e, t), e;
                })(
                  pe(
                    (function (t) {
                      function e(e, n, i, r, o, s, a, c) {
                        var h =
                          t.call(
                            this,
                            e instanceof ve
                              ? {
                                  image: e,
                                  spWidth: s,
                                  spHeight: a,
                                  rows: o,
                                  columns: r,
                                  spacing: c || 0,
                                }
                              : e
                          ) || this;
                        return (
                          (h._currentColor = tt.Black),
                          (h._currentOpacity = 1),
                          (h._sprites = {}),
                          (h._textShadowOn = !1),
                          (h._textShadowDirty = !0),
                          (h._textShadowColor = tt.Black),
                          (h._textShadowSprites = {}),
                          (h._shadowOffsetX = 5),
                          (h._shadowOffsetY = 5),
                          !e ||
                            e instanceof ve ||
                            ((n = e.alphabet), (i = e.caseInsensitive)),
                          (h._alphabet = n),
                          (h._caseInsensitive = i),
                          (h._sprites = h.getTextSprites()),
                          h
                        );
                      }
                      return (
                        mr(e, t),
                        (e.prototype.getTextSprites = function () {
                          for (
                            var t = {}, e = 0;
                            e < this._alphabet.length;
                            e++
                          ) {
                            var n = this._alphabet[e];
                            this._caseInsensitive && (n = n.toLowerCase()),
                              (t[n] = this.sprites[e].clone());
                          }
                          return t;
                        }),
                        (e.prototype.setTextShadow = function (t, e, n) {
                          for (var i in ((this._textShadowOn = !0),
                          (this._shadowOffsetX = t),
                          (this._shadowOffsetY = e),
                          (this._textShadowColor = n.clone()),
                          (this._textShadowDirty = !0),
                          this._sprites))
                            this._textShadowSprites[i] = this._sprites[
                              i
                            ].clone();
                        }),
                        (e.prototype.useTextShadow = function (t) {
                          (this._textShadowOn = t),
                            t &&
                              this.setTextShadow(5, 5, this._textShadowColor);
                        }),
                        (e.prototype.draw = function (t, e, n, i, r) {
                          if (
                            ((r = this._parseOptions(r)),
                            this._currentColor.toString() !==
                              r.color.toString() ||
                              this._currentOpacity !== r.opacity)
                          )
                            for (var o in ((this._currentOpacity = r.opacity),
                            (this._currentColor = r.color),
                            this._sprites))
                              this._sprites[o].clearEffects(),
                                this._sprites[o].fill(r.color),
                                this._sprites[o].opacity(r.opacity);
                          if (
                            this._textShadowOn &&
                            this._textShadowDirty &&
                            this._textShadowColor
                          ) {
                            for (var s in this._textShadowSprites)
                              this._textShadowSprites[s].clearEffects(),
                                this._textShadowSprites[s].addEffect(
                                  new ue(this._textShadowColor.clone())
                                );
                            this._textShadowDirty = !1;
                          }
                          var a = this.sprites[0],
                            c = a.drawHeight,
                            h = r.fontSize / c,
                            u =
                              e.length * a.drawWidth * h +
                              e.length * r.letterSpacing,
                            l = n;
                          r.textAlign === Nn.Left || r.textAlign === Nn.Start
                            ? (l = n)
                            : r.textAlign === Nn.Right || r.textAlign === Nn.End
                            ? (l = n - u)
                            : r.textAlign === Nn.Center && (l = n - u / 2);
                          var p = i - c * h;
                          r.baseAlign === qn.Top || r.baseAlign === qn.Hanging
                            ? (p = i)
                            : r.baseAlign === qn.Ideographic ||
                              r.baseAlign === qn.Bottom ||
                              r.baseAlign === qn.Alphabetic
                            ? (p = i - c * h)
                            : r.baseAlign === qn.Middle &&
                              (p = i - (c * h) / 2);
                          for (var d = 0; d < e.length; d++) {
                            var f = e[d];
                            this._caseInsensitive && (f = f.toLowerCase());
                            try {
                              this._textShadowOn &&
                                ((this._textShadowSprites[f].scale.x = h),
                                (this._textShadowSprites[f].scale.y = h),
                                this._textShadowSprites[f].draw(
                                  t,
                                  l + this._shadowOffsetX,
                                  p + this._shadowOffsetY
                                ));
                              var y = this._sprites[f];
                              (y.scale.x = h),
                                (y.scale.y = h),
                                y.draw(t, l, p),
                                (l += y.drawWidth + r.letterSpacing);
                            } catch (t) {
                              R.getInstance().error(
                                "SpriteFont Error drawing char " + f
                              );
                            }
                          }
                        }),
                        (e.prototype._parseOptions = function (t) {
                          return {
                            fontSize: t.fontSize || 10,
                            letterSpacing: t.letterSpacing || 0,
                            color: t.color || tt.Black,
                            textAlign:
                              void 0 === typeof t.textAlign
                                ? Nn.Left
                                : t.textAlign,
                            baseAlign:
                              void 0 === typeof t.baseAlign
                                ? qn.Bottom
                                : t.baseAlign,
                            maxWidth: t.maxWidth || -1,
                            opacity: t.opacity || 0,
                          };
                        }),
                        e
                      );
                    })(br)
                  )
                ),
                xr = (function () {
                  function t() {}
                  return (
                    (t.type = {
                      any: "",
                      blob: "blob",
                      json: "json",
                      text: "text",
                      document: "document",
                      arraybuffer: "arraybuffer",
                    }),
                    t
                  );
                })();
              function Pr(t) {
                return !!t._initialize;
              }
              function Ar(t) {
                return !!t.onInitialize;
              }
              function Er(t) {
                return !!t._preupdate;
              }
              function Sr(t) {
                return !!t.onPreUpdate;
              }
              function Cr(t) {
                return !!t.onPostUpdate;
              }
              function Or(t) {
                return !!t.onPostUpdate;
              }
              function Tr(t) {
                return !!t.onPreDraw;
              }
              function Br(t) {
                return !!t.onPostDraw;
              }
              function Mr(t, e, n) {
                return e + t * (n - e);
              }
              function Dr(t) {
                return t * t * t * (t * (6 * t - 15) + 10);
              }
              var kr = (function () {
                  function t(t) {
                    (this._perm = [
                      151,
                      160,
                      137,
                      91,
                      90,
                      15,
                      131,
                      13,
                      201,
                      95,
                      96,
                      53,
                      194,
                      233,
                      7,
                      225,
                      140,
                      36,
                      103,
                      30,
                      69,
                      142,
                      8,
                      99,
                      37,
                      240,
                      21,
                      10,
                      23,
                      190,
                      6,
                      148,
                      247,
                      120,
                      234,
                      75,
                      0,
                      26,
                      197,
                      62,
                      94,
                      252,
                      219,
                      203,
                      117,
                      35,
                      11,
                      32,
                      57,
                      177,
                      33,
                      88,
                      237,
                      149,
                      56,
                      87,
                      174,
                      20,
                      125,
                      136,
                      171,
                      168,
                      68,
                      175,
                      74,
                      165,
                      71,
                      134,
                      139,
                      48,
                      27,
                      166,
                      77,
                      146,
                      158,
                      231,
                      83,
                      111,
                      229,
                      122,
                      60,
                      211,
                      133,
                      230,
                      220,
                      105,
                      92,
                      41,
                      55,
                      46,
                      245,
                      40,
                      244,
                      102,
                      143,
                      54,
                      65,
                      25,
                      63,
                      161,
                      1,
                      216,
                      80,
                      73,
                      209,
                      76,
                      132,
                      187,
                      208,
                      89,
                      18,
                      169,
                      200,
                      196,
                      135,
                      130,
                      116,
                      188,
                      159,
                      86,
                      164,
                      100,
                      109,
                      198,
                      173,
                      186,
                      3,
                      64,
                      52,
                      217,
                      226,
                      250,
                      124,
                      123,
                      5,
                      202,
                      38,
                      147,
                      118,
                      126,
                      255,
                      82,
                      85,
                      212,
                      207,
                      206,
                      59,
                      227,
                      47,
                      16,
                      58,
                      17,
                      182,
                      189,
                      28,
                      42,
                      223,
                      183,
                      170,
                      213,
                      119,
                      248,
                      152,
                      2,
                      44,
                      154,
                      163,
                      70,
                      221,
                      153,
                      101,
                      155,
                      167,
                      43,
                      172,
                      9,
                      129,
                      22,
                      39,
                      253,
                      19,
                      98,
                      108,
                      110,
                      79,
                      113,
                      224,
                      232,
                      178,
                      185,
                      112,
                      104,
                      218,
                      246,
                      97,
                      228,
                      251,
                      34,
                      242,
                      193,
                      238,
                      210,
                      144,
                      12,
                      191,
                      179,
                      162,
                      241,
                      81,
                      51,
                      145,
                      235,
                      249,
                      14,
                      239,
                      107,
                      49,
                      192,
                      214,
                      31,
                      181,
                      199,
                      106,
                      157,
                      184,
                      84,
                      204,
                      176,
                      115,
                      121,
                      50,
                      45,
                      127,
                      4,
                      150,
                      254,
                      138,
                      236,
                      205,
                      93,
                      222,
                      114,
                      67,
                      29,
                      24,
                      72,
                      243,
                      141,
                      128,
                      195,
                      78,
                      66,
                      215,
                      61,
                      156,
                      180,
                    ]),
                      (this._p = new Uint8Array(512)),
                      (this._defaultPerlinOptions = {
                        octaves: 1,
                        frequency: 1,
                        amplitude: 1,
                        persistance: 0.5,
                      }),
                      (t = g({}, this._defaultPerlinOptions, t)),
                      (this.persistance = t.persistance),
                      (this.amplitude = t.amplitude),
                      (this.frequency = t.frequency),
                      (this.octaves = t.octaves),
                      t.seed
                        ? (this._random = new f(t.seed))
                        : (this._random = new f()),
                      (this._perm = this._random.shuffle(this._perm));
                    for (var e = 0; e < 512; e++)
                      this._p[e] = 255 & this._perm[e % 256];
                  }
                  return (
                    (t.prototype.noise = function () {
                      for (
                        var t = this.amplitude,
                          e = this.frequency,
                          n = 0,
                          i = 0,
                          r = 0;
                        r < this.octaves;
                        r++
                      ) {
                        switch (arguments.length) {
                          case 1:
                            n += this._noise1d(arguments[0] * e) * t;
                            break;
                          case 2:
                            n +=
                              this._noise2d(
                                arguments[0] * e,
                                arguments[1] * e
                              ) * t;
                            break;
                          case 3:
                            n +=
                              this._noise3d(
                                arguments[0] * e,
                                arguments[1] * e,
                                arguments[2] * e
                              ) * t;
                            break;
                          default:
                            throw new Error(
                              "Invalid arguments for perlin noise"
                            );
                        }
                        (i += t), (t *= this.persistance), (e *= 2);
                      }
                      return n / i;
                    }),
                    (t.prototype.sequence = function (t, e) {
                      e || (e = 1 / t);
                      for (var n = new Array(t), i = 0; i < t; i++)
                        n[i] = this.noise(i * e);
                      return n;
                    }),
                    (t.prototype.grid = function (t, e, n) {
                      n || (n = 1 / Math.min(t, e));
                      for (var i = new Array(t * e), r = 0; r < e; r++)
                        for (var o = 0; o < t; o++)
                          i[o + r * t] = this.noise(o * n, r * n);
                      return i;
                    }),
                    (t.prototype._gradient3d = function (t, e, n, i) {
                      var r = 15 & t,
                        o = r < 8 ? e : n,
                        s = r < 4 ? n : 12 === r || 14 === r ? e : i;
                      return (0 == (1 & r) ? o : -o) + (0 == (2 & r) ? s : -s);
                    }),
                    (t.prototype._gradient2d = function (t, e, n) {
                      var i = 0 == (1 & t) ? e : n;
                      return 0 == (2 & t) ? -i : i;
                    }),
                    (t.prototype._gradient1d = function (t, e) {
                      return 0 == (1 & t) ? -e : e;
                    }),
                    (t.prototype._noise1d = function (t) {
                      var e = 255 & Math.floor(t);
                      return (
                        (Mr(
                          Dr((t -= Math.floor(t))),
                          this._gradient1d(this._p[e], t),
                          this._gradient1d(this._p[e + 1], t - 1)
                        ) +
                          1) /
                        2
                      );
                    }),
                    (t.prototype._noise2d = function (t, e) {
                      var n = 255 & Math.floor(t),
                        i = 255 & Math.floor(e);
                      (t -= Math.floor(t)), (e -= Math.floor(e));
                      var r = Dr(t),
                        o = Dr(e),
                        s = this._p[n] + i,
                        a = this._p[n + 1] + i;
                      return (
                        (Mr(
                          o,
                          Mr(
                            r,
                            this._gradient2d(this._p[s], t, e),
                            this._gradient2d(this._p[a], t - 1, e)
                          ),
                          Mr(
                            r,
                            this._gradient2d(this._p[s + 1], t, e - 1),
                            this._gradient2d(this._p[a + 1], t - 1, e - 1)
                          )
                        ) +
                          1) /
                        2
                      );
                    }),
                    (t.prototype._noise3d = function (t, e, n) {
                      var i = 255 & Math.floor(t),
                        r = 255 & Math.floor(e),
                        o = 255 & Math.floor(n);
                      (t -= Math.floor(t)),
                        (e -= Math.floor(e)),
                        (n -= Math.floor(n));
                      var s = Dr(t),
                        a = Dr(e),
                        c = Dr(n),
                        h = this._p[i] + r,
                        u = this._p[i + 1] + r,
                        l = this._p[h] + o,
                        p = this._p[u] + o,
                        d = this._p[h + 1] + o,
                        f = this._p[u + 1] + o;
                      return (
                        (Mr(
                          c,
                          Mr(
                            a,
                            Mr(
                              s,
                              this._gradient3d(this._p[l], t, e, n),
                              this._gradient3d(this._p[p], t - 1, e, n)
                            ),
                            Mr(
                              s,
                              this._gradient3d(this._p[d], t, e - 1, n),
                              this._gradient3d(this._p[f], t - 1, e - 1, n)
                            )
                          ),
                          Mr(
                            a,
                            Mr(
                              s,
                              this._gradient3d(this._p[l + 1], t, e, n - 1),
                              this._gradient3d(this._p[p + 1], t - 1, e, n - 1)
                            ),
                            Mr(
                              s,
                              this._gradient3d(this._p[d + 1], t, e - 1, n - 1),
                              this._gradient3d(
                                this._p[f + 1],
                                t - 1,
                                e - 1,
                                n - 1
                              )
                            )
                          )
                        ) +
                          1) /
                        2
                      );
                    }),
                    t
                  );
                })(),
                Rr = (function () {
                  function t(t, e) {
                    (this.generator = t),
                      (this.colorFcn = e),
                      e ||
                        (this.colorFcn = function (t) {
                          return t < 125 ? tt.Black : tt.White;
                        });
                  }
                  return (
                    (t.prototype.image = function (t, e) {
                      var n = document.createElement("img"),
                        i = document.createElement("canvas");
                      (i.width = t), (i.height = e);
                      var r = i.getContext("2d");
                      return (
                        this.draw(r, 0, 0, t, e), (n.src = i.toDataURL()), n
                      );
                    }),
                    (t.prototype.draw = function (t, e, n, i, r) {
                      for (
                        var o = this.generator.grid(i, r),
                          s = t.getImageData(e, n, i, r),
                          a = 0;
                        a < r;
                        a++
                      )
                        for (var c = 0; c < i; c++) {
                          var h = o[c + i * a],
                            u = 255 & Math.floor(255 * h),
                            l = 4 * (c + a * s.width),
                            p = this.colorFcn(u);
                          (s.data[l] = p.r),
                            (s.data[l + 1] = p.g),
                            (s.data[l + 2] = p.b),
                            (s.data[l + 3] = Math.floor(255 * p.a));
                        }
                      t.putImageData(s, e, n);
                    }),
                    t
                  );
                })(),
                jr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Fr = (function () {
                  function t() {}
                  return (
                    (t.create = function (t) {
                      return t instanceof AudioBuffer ? new Lr(t) : new Ir(t);
                    }),
                    t
                  );
                })(),
                Ir = (function () {
                  function t(t) {
                    (this._src = t),
                      (this._volume = 1),
                      (this._duration = void 0),
                      (this._loop = !1),
                      (this._isPlaying = !1),
                      (this._isPaused = !1);
                  }
                  return (
                    Object.defineProperty(t.prototype, "loop", {
                      get: function () {
                        return this._loop;
                      },
                      set: function (t) {
                        (this._loop = t),
                          this._instance &&
                            ((this._instance.loop = t), this._wireUpOnEnded());
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "volume", {
                      get: function () {
                        return this._volume;
                      },
                      set: function (t) {
                        this._volume = m(t, 0, 1);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(t.prototype, "duration", {
                      get: function () {
                        return this._duration;
                      },
                      set: function (t) {
                        this._duration = t;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (t.prototype.isPlaying = function () {
                      return this._isPlaying;
                    }),
                    (t.prototype.pause = function () {
                      this._isPlaying &&
                        ((this._isPaused = !0), (this._isPlaying = !1));
                    }),
                    (t.prototype.stop = function () {
                      this._isPlaying &&
                        ((this._isPlaying = !1), (this._isPaused = !1));
                    }),
                    (t.prototype.play = function () {
                      return (
                        this._isPaused && this._resumePlayBack(),
                        this._isPlaying || this._startPlayBack(),
                        this._playingPromise
                      );
                    }),
                    (t.prototype._startPlayBack = function () {
                      (this._isPlaying = !0),
                        (this._isPaused = !1),
                        (this._playingPromise = new d());
                    }),
                    (t.prototype._resumePlayBack = function () {
                      this._isPaused &&
                        ((this._isPaused = !1), (this._isPlaying = !0));
                    }),
                    (t.prototype._wireUpOnEnded = function () {
                      var t = this;
                      this.loop ||
                        (this._instance.onended = function () {
                          return t._handleOnEnded();
                        });
                    }),
                    (t.prototype._handleOnEnded = function () {}),
                    t
                  );
                })(),
                Lr = (function (t) {
                  function e(e) {
                    var n = t.call(this, e) || this;
                    return (
                      (n._audioContext = Cn.create()),
                      (n._volumeNode = n._audioContext.createGain()),
                      (n._currentOffset = 0),
                      n._createNewBufferSource(),
                      n
                    );
                  }
                  return (
                    jr(e, t),
                    Object.defineProperty(e.prototype, "volume", {
                      get: function () {
                        return this._volume;
                      },
                      set: function (t) {
                        (t = m(t, 0, 1)),
                          (this._volume = t),
                          this._isPlaying &&
                          this._volumeNode.gain.setTargetAtTime
                            ? this._volumeNode.gain.setTargetAtTime(
                                t,
                                this._audioContext.currentTime,
                                0.1
                              )
                            : (this._volumeNode.gain.value = t);
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "_playbackRate", {
                      get: function () {
                        return this._instance
                          ? 1 / (this._instance.playbackRate.value || 1)
                          : null;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.pause = function () {
                      t.prototype.pause.call(this),
                        this._instance.stop(0),
                        this._setPauseOffset();
                    }),
                    (e.prototype.stop = function () {
                      t.prototype.stop.call(this),
                        (this._currentOffset = 0),
                        this._instance.stop(0),
                        this._instance.onended || this._handleOnEnded();
                    }),
                    (e.prototype._startPlayBack = function () {
                      t.prototype._startPlayBack.call(this),
                        this._instance || this._createNewBufferSource(),
                        this._rememberStartTime(),
                        this._volumeNode.connect(
                          this._audioContext.destination
                        ),
                        this._instance.start(0, 0),
                        (this._currentOffset = 0),
                        (this._playingPromise = new d()),
                        this._wireUpOnEnded();
                    }),
                    (e.prototype._resumePlayBack = function () {
                      t.prototype._resumePlayBack.call(this),
                        (this._instance.onended = null),
                        this._createNewBufferSource();
                      var e = this._playbackRate * this._src.duration,
                        n = this._currentOffset % e;
                      this._rememberStartTime(-1e3 * n),
                        this._instance.start(0, n),
                        this._wireUpOnEnded();
                    }),
                    (e.prototype._handleOnEnded = function () {
                      this._isPaused ||
                        ((this._isPlaying = !1),
                        this._playingPromise.resolve(!0));
                    }),
                    (e.prototype._rememberStartTime = function (t) {
                      this._startTime = new Date().getTime() + (0 | t);
                    }),
                    (e.prototype._setPauseOffset = function () {
                      this._currentOffset =
                        ((new Date().getTime() - this._startTime) *
                          this._playbackRate) /
                        1e3;
                    }),
                    (e.prototype._createNewBufferSource = function () {
                      (this._instance = this._audioContext.createBufferSource()),
                        (this._instance.buffer = this._src),
                        (this._instance.loop = this.loop),
                        this._instance.playbackRate.setValueAtTime(1, 0),
                        this._instance.connect(this._volumeNode);
                    }),
                    e
                  );
                })(Ir);
              function zr(t) {
                try {
                  var e = new Audio(),
                    n = t.match(/.*\.([A-Za-z0-9]+)$/)[1];
                  return !!e.canPlayType("audio/" + n);
                } catch (t) {
                  return (
                    R.getInstance().warn(
                      "Cannot determine audio support, assuming no support for the Audio Tag",
                      t
                    ),
                    !1
                  );
                }
              }
              var Hr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Ur = (function (t) {
                  function e() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    var i = t.call(this, "", "") || this;
                    (i._loop = !1),
                      (i._volume = 1),
                      (i._duration = void 0),
                      (i._isStopped = !1),
                      (i._isPaused = !1),
                      (i._tracks = []),
                      (i._wasPlayingOnHidden = !1),
                      (i._processedData = new d()),
                      (i._audioContext = Cn.create()),
                      i._detectResponseType();
                    for (var r = 0, o = e; r < o.length; r++) {
                      var s = o[r];
                      if (zr(s)) {
                        i.path = s;
                        break;
                      }
                    }
                    return (
                      i.path ||
                        (i.logger.warn(
                          "This browser does not support any of the audio files specified:",
                          e.join(", ")
                        ),
                        i.logger.warn("Attempting to use", e[0]),
                        (i.path = e[0])),
                      i
                    );
                  }
                  return (
                    Hr(e, t),
                    Object.defineProperty(e.prototype, "loop", {
                      get: function () {
                        return this._loop;
                      },
                      set: function (t) {
                        this._loop = t;
                        for (var e = 0, n = this._tracks; e < n.length; e++)
                          n[e].loop = this._loop;
                        this.logger.debug(
                          "Set loop for all instances of sound",
                          this.path,
                          "to",
                          this._loop
                        );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "volume", {
                      get: function () {
                        return this._volume;
                      },
                      set: function (t) {
                        this._volume = t;
                        for (var e = 0, n = this._tracks; e < n.length; e++)
                          n[e].volume = this._volume;
                        this.emit("volumechange", new ur(this)),
                          this.logger.debug(
                            "Set loop for all instances of sound",
                            this.path,
                            "to",
                            this._volume
                          );
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "duration", {
                      get: function () {
                        return this._duration;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    Object.defineProperty(e.prototype, "instances", {
                      get: function () {
                        return this._tracks;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    (e.prototype.wireEngine = function (t) {
                      var e = this;
                      t &&
                        ((this._engine = t),
                        this._engine.on("hidden", function () {
                          t.pauseAudioWhenHidden &&
                            e.isPlaying() &&
                            ((e._wasPlayingOnHidden = !0), e.pause());
                        }),
                        this._engine.on("visible", function () {
                          t.pauseAudioWhenHidden &&
                            e._wasPlayingOnHidden &&
                            (e.play(), (e._wasPlayingOnHidden = !1));
                        }),
                        this._engine.on("start", function () {
                          e._isStopped = !1;
                        }),
                        this._engine.on("stop", function () {
                          e.stop(), (e._isStopped = !0);
                        }));
                    }),
                    (e.prototype.instanceCount = function () {
                      return this._tracks.length;
                    }),
                    (e.prototype.isPlaying = function () {
                      return this._tracks.some(function (t) {
                        return t.isPlaying();
                      });
                    }),
                    (e.prototype.play = function (t) {
                      return this.isLoaded()
                        ? this._isStopped
                          ? (this.logger.warn(
                              "Cannot start playing. Engine is in a stopped state."
                            ),
                            d.resolve(!1))
                          : ((this.volume = t || this.volume),
                            this._isPaused
                              ? this._resumePlayback()
                              : this._startPlayback())
                        : (this.logger.warn(
                            "Cannot start playing. Resource",
                            this.path,
                            "is not loaded yet"
                          ),
                          d.resolve(!0));
                    }),
                    (e.prototype.pause = function () {
                      if (this.isPlaying()) {
                        for (var t = 0, e = this._tracks; t < e.length; t++)
                          e[t].pause();
                        (this._isPaused = !0),
                          this.emit("pause", new ur(this)),
                          this.logger.debug(
                            "Paused all instances of sound",
                            this.path
                          );
                      }
                    }),
                    (e.prototype.stop = function () {
                      for (var t = 0, e = this._tracks; t < e.length; t++)
                        e[t].stop();
                      this.emit("stop", new ur(this)),
                        (this._isPaused = !1),
                        (this._tracks.length = 0),
                        this.logger.debug(
                          "Stopped all instances of sound",
                          this.path
                        );
                    }),
                    (e.prototype.setData = function (t) {
                      this.emit("emptied", new ur(this)),
                        (this.data = t),
                        (this._processedData = new d());
                    }),
                    (e.prototype.processData = function (t) {
                      var e = this;
                      return (t instanceof ArrayBuffer
                        ? this._processArrayBufferData(t)
                        : this._processBlobData(t)
                      ).then(function (t) {
                        return e._setProcessedData(t);
                      });
                    }),
                    (e.prototype.getTrackId = function (t) {
                      return this._tracks.indexOf(t);
                    }),
                    (e.prototype._resumePlayback = function () {
                      if (this._isPaused) {
                        for (
                          var t = [], e = 0, n = this._tracks;
                          e < n.length;
                          e++
                        ) {
                          var i = n[e];
                          t.push(i.play());
                        }
                        return (
                          (this._isPaused = !1),
                          this.emit("resume", new ur(this)),
                          this.logger.debug(
                            "Resuming paused instances for sound",
                            this.path,
                            this._tracks
                          ),
                          d.join(t)
                        );
                      }
                      return d.resolve(!0);
                    }),
                    (e.prototype._startPlayback = function () {
                      var t = this,
                        e = this._createNewTrack(),
                        n = new d();
                      return (
                        e.then(function (e) {
                          e.play().then(function (i) {
                            return (
                              t.emit("playbackend", new ur(t, e)),
                              t._tracks.splice(t.getTrackId(e), 1),
                              n.resolve(i),
                              i
                            );
                          }),
                            t.emit("playbackstart", new ur(t, e)),
                            t.logger.debug(
                              "Playing new instance for sound",
                              t.path
                            );
                        }),
                        n
                      );
                    }),
                    (e.prototype._processArrayBufferData = function (t) {
                      var e = this,
                        n = new d();
                      return (
                        this._audioContext.decodeAudioData(
                          t,
                          function (t) {
                            n.resolve(t);
                          },
                          function () {
                            e.logger.error(
                              "Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file."
                            ),
                              n.resolve(void 0);
                          }
                        ),
                        n
                      );
                    }),
                    (e.prototype._processBlobData = function (e) {
                      return new d().resolve(
                        t.prototype.processData.call(this, e)
                      );
                    }),
                    (e.prototype._setProcessedData = function (t) {
                      this._processedData.resolve(t),
                        (this._duration =
                          "object" == typeof t ? t.duration : void 0),
                        this.emit("processed", new lr(this, t));
                    }),
                    (e.prototype._createNewTrack = function () {
                      var t = this,
                        e = new d();
                      return (
                        0 !== this._processedData.state() &&
                          this.processData(this.data),
                        this._processedData.then(
                          function (n) {
                            return e.resolve(t._getTrackInstance(n)), n;
                          },
                          function (e) {
                            t.logger.error(
                              e,
                              "Cannot create AudioInstance due to wrong processed data."
                            );
                          }
                        ),
                        e
                      );
                    }),
                    (e.prototype._getTrackInstance = function (t) {
                      var e = Fr.create(t);
                      return (
                        (e.loop = this.loop),
                        (e.volume = this.volume),
                        (e.duration = this.duration),
                        this._tracks.push(e),
                        e
                      );
                    }),
                    (e.prototype._detectResponseType = function () {
                      window.AudioContext
                        ? (this.responseType = xr.type.arraybuffer)
                        : (this.responseType = xr.type.blob);
                    }),
                    e
                  );
                })(ee),
                Wr = (function () {
                  var t = function (e, n) {
                    return (t =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e)
                          Object.prototype.hasOwnProperty.call(e, n) &&
                            (t[n] = e[n]);
                      })(e, n);
                  };
                  return function (e, n) {
                    function i() {
                      this.constructor = e;
                    }
                    t(e, n),
                      (e.prototype =
                        null === n
                          ? Object.create(n)
                          : ((i.prototype = n.prototype), new i()));
                  };
                })(),
                Nr = (function (t) {
                  function e(e, n, i) {
                    void 0 === n && (n = tt.Magenta), void 0 === i && (i = !0);
                    var r = t.call(this, e, "arraybuffer", i) || this;
                    return (
                      (r.path = e),
                      (r.color = n),
                      (r.bustCache = i),
                      (r.loaded = new d()),
                      (r._isLoaded = !1),
                      (r._stream = null),
                      (r._gif = null),
                      (r._texture = []),
                      (r._animation = null),
                      (r._transparentColor = null),
                      (r._transparentColor = n),
                      r
                    );
                  }
                  return (
                    Wr(e, t),
                    (e.prototype.isLoaded = function () {
                      return this._isLoaded;
                    }),
                    (e.prototype.load = function () {
                      var e = this,
                        n = new d();
                      return (
                        t.prototype.load.call(this).then(
                          function () {
                            (e._stream = new Gr(e.getData())),
                              (e._gif = new Xr(e._stream, e._transparentColor));
                            for (
                              var t = [], i = 0;
                              i < e._gif.images.length;
                              i++
                            ) {
                              var r = new ve(e._gif.images[i].src, !1);
                              e._texture.push(r), t.push(r.load());
                            }
                            d.join(t).then(function () {
                              (e._isLoaded = !0), n.resolve(e._texture);
                            });
                          },
                          function () {
                            n.reject("Error loading texture.");
                          }
                        ),
                        n
                      );
                    }),
                    (e.prototype.asSprite = function (t) {
                      return (
                        void 0 === t && (t = 0), this._texture[t].asSprite()
                      );
                    }),
                    (e.prototype.asSpriteSheet = function () {
                      var t = this._texture.map(function (t) {
                        return t.asSprite();
                      });
                      return new br(t);
                    }),
                    (e.prototype.asAnimation = function (t, e) {
                      var n = this.asSpriteSheet();
                      return (
                        (this._animation = n.getAnimationForAll(t, e)),
                        this._animation
                      );
                    }),
                    Object.defineProperty(e.prototype, "readCheckBytes", {
                      get: function () {
                        return this._gif.checkBytes;
                      },
                      enumerable: !1,
                      configurable: !0,
                    }),
                    e
                  );
                })(ee),
                qr = function (t) {
                  return t.reduce(function (t, e) {
                    return 2 * t + e;
                  }, 0);
                },
                Vr = function (t) {
                  for (var e = [], n = 7; n >= 0; n--) e.push(!!(t & (1 << n)));
                  return e;
                },
                Gr = function (t) {
                  var e = this;
                  if (
                    ((this.data = null),
                    (this.len = 0),
                    (this.position = 0),
                    (this.readByte = function () {
                      if (e.position >= e.data.byteLength)
                        throw new Error(
                          "Attempted to read past end of stream."
                        );
                      return e.data[e.position++];
                    }),
                    (this.readBytes = function (t) {
                      for (var n = [], i = 0; i < t; i++) n.push(e.readByte());
                      return n;
                    }),
                    (this.read = function (t) {
                      for (var n = "", i = 0; i < t; i++)
                        n += String.fromCharCode(e.readByte());
                      return n;
                    }),
                    (this.readUnsigned = function () {
                      var t = e.readBytes(2);
                      return (t[1] << 8) + t[0];
                    }),
                    (this.data = new Uint8Array(t)),
                    (this.len = this.data.byteLength),
                    0 === this.len)
                  )
                    throw new Error("No data loaded from file");
                },
                Xr = function (t, e) {
                  var n = this;
                  void 0 === e && (e = tt.Magenta),
                    (this._st = null),
                    (this._handler = {}),
                    (this._transparentColor = null),
                    (this.frames = []),
                    (this.images = []),
                    (this.globalColorTable = []),
                    (this.checkBytes = []),
                    (this.parseColorTable = function (t) {
                      for (var e = [], i = 0; i < t; i++) {
                        var r =
                          "#" +
                          n._st
                            .readBytes(3)
                            .map(function (t) {
                              var e = t.toString(16);
                              return 1 === e.length ? "0" + e : e;
                            })
                            .join("");
                        e.push(r);
                      }
                      return e;
                    }),
                    (this.readSubBlocks = function () {
                      var t, e;
                      e = "";
                      do {
                        (t = n._st.readByte()), (e += n._st.read(t));
                      } while (0 !== t);
                      return e;
                    }),
                    (this.parseHeader = function () {
                      var t = {
                        sig: null,
                        ver: null,
                        width: null,
                        height: null,
                        colorRes: null,
                        globalColorTableSize: null,
                        gctFlag: null,
                        sorted: null,
                        globalColorTable: [],
                        bgColor: null,
                        pixelAspectRatio: null,
                      };
                      if (
                        ((t.sig = n._st.read(3)),
                        (t.ver = n._st.read(3)),
                        "GIF" !== t.sig)
                      )
                        throw new Error("Not a GIF file.");
                      (t.width = n._st.readUnsigned()),
                        (t.height = n._st.readUnsigned());
                      var e = Vr(n._st.readByte());
                      (t.gctFlag = e.shift()),
                        (t.colorRes = qr(e.splice(0, 3))),
                        (t.sorted = e.shift()),
                        (t.globalColorTableSize = qr(e.splice(0, 3))),
                        (t.bgColor = n._st.readByte()),
                        (t.pixelAspectRatio = n._st.readByte()),
                        t.gctFlag &&
                          ((t.globalColorTable = n.parseColorTable(
                            1 << (t.globalColorTableSize + 1)
                          )),
                          (n.globalColorTable = t.globalColorTable)),
                        n._handler.hdr &&
                          n._handler.hdr(t) &&
                          n.checkBytes.push(n._handler.hdr);
                    }),
                    (this.parseExt = function (t) {
                      switch (((t.label = n._st.readByte()), t.label)) {
                        case 249:
                          (t.extType = "gce"),
                            (function (t) {
                              n.checkBytes.push(n._st.readByte());
                              var e = Vr(n._st.readByte());
                              (t.reserved = e.splice(0, 3)),
                                (t.disposalMethod = qr(e.splice(0, 3))),
                                (t.userInput = e.shift()),
                                (t.transparencyGiven = e.shift()),
                                (t.delayTime = n._st.readUnsigned()),
                                (t.transparencyIndex = n._st.readByte()),
                                (t.terminator = n._st.readByte()),
                                n._handler.gce &&
                                  n._handler.gce(t) &&
                                  n.checkBytes.push(n._handler.gce);
                            })(t);
                          break;
                        case 254:
                          (t.extType = "com"),
                            (function (t) {
                              (t.comment = n.readSubBlocks()),
                                n._handler.com &&
                                  n._handler.com(t) &&
                                  n.checkBytes.push(n._handler.com);
                            })(t);
                          break;
                        case 1:
                          (t.extType = "pte"),
                            (function (t) {
                              n.checkBytes.push(n._st.readByte()),
                                (t.ptHeader = n._st.readBytes(12)),
                                (t.ptData = n.readSubBlocks()),
                                n._handler.pte &&
                                  n._handler.pte(t) &&
                                  n.checkBytes.push(n._handler.pte);
                            })(t);
                          break;
                        case 255:
                          (t.extType = "app"),
                            (function (t) {
                              switch (
                                (n.checkBytes.push(n._st.readByte()),
                                (t.identifier = n._st.read(8)),
                                (t.authCode = n._st.read(3)),
                                t.identifier)
                              ) {
                                case "NETSCAPE":
                                  !(function (t) {
                                    n.checkBytes.push(n._st.readByte()),
                                      (t.unknown = n._st.readByte()),
                                      (t.iterations = n._st.readUnsigned()),
                                      (t.terminator = n._st.readByte()),
                                      n._handler.app &&
                                        n._handler.app.NETSCAPE &&
                                        n._handler.app.NETSCAPE(t) &&
                                        n.checkBytes.push(n._handler.app);
                                  })(t);
                                  break;
                                default:
                                  !(function (t) {
                                    (t.appData = n.readSubBlocks()),
                                      n._handler.app &&
                                        n._handler.app[t.identifier] &&
                                        n._handler.app[t.identifier](t) &&
                                        n.checkBytes.push(
                                          n._handler.app[t.identifier]
                                        );
                                  })(t);
                              }
                            })(t);
                          break;
                        default:
                          (t.extType = "unknown"),
                            (function (t) {
                              (t.data = n.readSubBlocks()),
                                n._handler.unknown &&
                                  n._handler.unknown(t) &&
                                  n.checkBytes.push(n._handler.unknown);
                            })(t);
                      }
                    }),
                    (this.parseImg = function (t) {
                      (t.leftPos = n._st.readUnsigned()),
                        (t.topPos = n._st.readUnsigned()),
                        (t.width = n._st.readUnsigned()),
                        (t.height = n._st.readUnsigned());
                      var e = Vr(n._st.readByte());
                      (t.lctFlag = e.shift()),
                        (t.interlaced = e.shift()),
                        (t.sorted = e.shift()),
                        (t.reserved = e.splice(0, 2)),
                        (t.lctSize = qr(e.splice(0, 3))),
                        t.lctFlag &&
                          (t.lct = n.parseColorTable(1 << (t.lctSize + 1))),
                        (t.lzwMinCodeSize = n._st.readByte());
                      var i = n.readSubBlocks();
                      (t.pixels = (function (t, e) {
                        for (
                          var n,
                            i,
                            r = 0,
                            o = function (t) {
                              for (var n = 0, i = 0; i < t; i++)
                                e.charCodeAt(r >> 3) & (1 << (7 & r)) &&
                                  (n |= 1 << i),
                                  r++;
                              return n;
                            },
                            s = [],
                            a = 1 << t,
                            c = a + 1,
                            h = t + 1,
                            u = [],
                            l = function () {
                              (u = []), (h = t + 1);
                              for (var e = 0; e < a; e++) u[e] = [e];
                              (u[a] = []), (u[c] = null);
                            };
                          ;

                        )
                          if (((i = n), (n = o(h)) !== a)) {
                            if (n === c) break;
                            if (n < u.length)
                              i !== a && u.push(u[i].concat(u[n][0]));
                            else {
                              if (n !== u.length)
                                throw new Error("Invalid LZW code.");
                              u.push(u[i].concat(u[i][0]));
                            }
                            s.push.apply(s, u[n]),
                              u.length === 1 << h && h < 12 && h++;
                          } else l();
                        return s;
                      })(t.lzwMinCodeSize, i)),
                        t.interlaced &&
                          (t.pixels = (function (t, e) {
                            for (
                              var n = new Array(t.length),
                                i = t.length / e,
                                r = function (i, r) {
                                  var o = t.slice(r * e, (r + 1) * e);
                                  n.splice.apply(n, [i * e, e].concat(o));
                                },
                                o = [0, 4, 2, 1],
                                s = [8, 8, 4, 2],
                                a = 0,
                                c = 0;
                              c < 4;
                              c++
                            )
                              for (var h = o[c]; h < i; h += s[c]) r(h, a), a++;
                            return n;
                          })(t.pixels, t.width)),
                        n.frames.push(t),
                        n.arrayToImage(t),
                        n._handler.img &&
                          n._handler.img(t) &&
                          n.checkBytes.push(n._handler);
                    }),
                    (this.parseBlock = function () {
                      var t = { sentinel: n._st.readByte(), type: "" };
                      switch (String.fromCharCode(t.sentinel)) {
                        case "!":
                          (t.type = "ext"), n.parseExt(t);
                          break;
                        case ",":
                          (t.type = "img"), n.parseImg(t);
                          break;
                        case ";":
                          (t.type = "eof"),
                            n._handler.eof &&
                              n._handler.eof(t) &&
                              n.checkBytes.push(n._handler.eof);
                          break;
                        default:
                          throw new Error(
                            "Unknown block: 0x" + t.sentinel.toString(16)
                          );
                      }
                      "eof" !== t.type && n.parseBlock();
                    }),
                    (this.arrayToImage = function (t) {
                      var e = 0,
                        i = document.createElement("canvas");
                      (i.id = e.toString()),
                        (i.width = t.width),
                        (i.height = t.height),
                        e++;
                      for (
                        var r = i.getContext("2d"), o = 0, s = 0, a = 0;
                        a < t.pixels.length;
                        a++
                      )
                        s % t.width == 0 && (o++, (s = 0)),
                          n.globalColorTable[t.pixels[a]] ===
                          n._transparentColor.toHex()
                            ? (r.fillStyle = "rgba(0, 0, 0, 0)")
                            : (r.fillStyle = n.globalColorTable[t.pixels[a]]),
                          r.fillRect(s, o, 1, 1),
                          s++;
                      var c = new Image();
                      (c.src = i.toDataURL()), n.images.push(c);
                    }),
                    (this._st = t),
                    (this._handler = {}),
                    (this._transparentColor = e),
                    this.parseHeader(),
                    this.parseBlock();
                },
                Qr = "0.24.5";
              l();
            },
          ]);
        });
      },
      {},
    ],
    QBtd: [
      function (require, module, exports) {
        module.exports = "sword_idle.9644fc8d.png";
      },
      {},
    ],
    PQsI: [
      function (require, module, exports) {
        module.exports = "sword_walk.355090ac.png";
      },
      {},
    ],
    icnx: [
      function (require, module, exports) {
        module.exports = "sword_atk.ea09caf5.png";
      },
      {},
    ],
    mn1F: [
      function (require, module, exports) {
        module.exports = "bow_idle.04a25157.png";
      },
      {},
    ],
    V7vf: [
      function (require, module, exports) {
        module.exports = "bow_walk.1ce666bc.png";
      },
      {},
    ],
    DNyR: [
      function (require, module, exports) {
        module.exports = "bow_atk.c15f3447.png";
      },
      {},
    ],
    LAbl: [
      function (require, module, exports) {
        module.exports = "magic_idle.ba25bd95.png";
      },
      {},
    ],
    Kmd8: [
      function (require, module, exports) {
        module.exports = "magic_walk.256c60f9.png";
      },
      {},
    ],
    Kxor: [
      function (require, module, exports) {
        module.exports = "magic_atk.fa0ec399.png";
      },
      {},
    ],
    byj1: [
      function (require, module, exports) {
        module.exports = "enemysword_idle.1c913caf.png";
      },
      {},
    ],
    p6yI: [
      function (require, module, exports) {
        module.exports = "enemysword_walk.03ebfa6e.png";
      },
      {},
    ],
    M3kD: [
      function (require, module, exports) {
        module.exports = "enemysword_atk.318264b9.png";
      },
      {},
    ],
    VDWP: [
      function (require, module, exports) {
        module.exports = "enemybow_idle.c52fcedb.png";
      },
      {},
    ],
    TnSE: [
      function (require, module, exports) {
        module.exports = "enemybow_walk.ba6b7ec8.png";
      },
      {},
    ],
    VPQa: [
      function (require, module, exports) {
        module.exports = "enemybow_atk.8f9295bd.png";
      },
      {},
    ],
    cmPR: [
      function (require, module, exports) {
        module.exports = "enemymagic_idle.5dce4144.png";
      },
      {},
    ],
    YoBC: [
      function (require, module, exports) {
        module.exports = "enemymagic_walk.0db69524.png";
      },
      {},
    ],
    HVIT: [
      function (require, module, exports) {
        module.exports = "enemymagic_atk.712b10d5.png";
      },
      {},
    ],
    Cgt9: [
      function (require, module, exports) {
        module.exports = "dungeontiles_1.9867a42c.png";
      },
      {},
    ],
    ZUDz: [
      function (require, module, exports) {
        module.exports = "endturn.0cf949a4.png";
      },
      {},
    ],
    s9p6: [
      function (require, module, exports) {
        module.exports = "skip.e2e5612a.png";
      },
      {},
    ],
    iSd5: [
      function (require, module, exports) {
        module.exports = "title.f659c42b.png";
      },
      {},
    ],
    j0vF: [
      function (require, module, exports) {
        module.exports = "gameover.72b8397b.png";
      },
      {},
    ],
    MXWc: [
      function (require, module, exports) {
        module.exports = "cursor.c038b8c0.png";
      },
      {},
    ],
    uDZA: [
      function (require, module, exports) {
        module.exports = "playerphase.25c379f7.png";
      },
      {},
    ],
    GMCE: [
      function (require, module, exports) {
        module.exports = "enemyphase.2e314a14.png";
      },
      {},
    ],
    w93k: [
      function (require, module, exports) {
        module.exports = "bow.a546f5f3.wav";
      },
      {},
    ],
    qJDI: [
      function (require, module, exports) {
        module.exports = "sword.1eb31f3a.wav";
      },
      {},
    ],
    XZqz: [
      function (require, module, exports) {
        module.exports = "magic.e75ef016.wav";
      },
      {},
    ],
    a2Qp: [
      function (require, module, exports) {
        module.exports = "darkhollows.7a91ef4a.wav";
      },
      {},
    ],
    gpIJ: [
      function (require, module, exports) {
        module.exports = "deselect.9035c0c4.wav";
      },
      {},
    ],
    Bilj: [
      function (require, module, exports) {
        module.exports = "die.e6ca8e2c.wav";
      },
      {},
    ],
    CqG6: [
      function (require, module, exports) {
        module.exports = "select.b59c9ebe.wav";
      },
      {},
    ],
    e07l: [
      function (require, module, exports) {
        module.exports = "tilechange.1bfe4961.wav";
      },
      {},
    ],
    ADsk: [
      function (require, module, exports) {
        module.exports = "title.c33c7cb6.wav";
      },
      {},
    ],
    x5mp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.MusicResources = exports.GameOverResources = exports.MainMenuResources = exports.Resources = void 0);
        var e = require("excalibur"),
          r = b(require("./images/sword_idle.png")),
          u = b(require("./images/sword_walk.png")),
          a = b(require("./images/sword_atk.png")),
          i = b(require("./images/bow_idle.png")),
          n = b(require("./images/bow_walk.png")),
          t = b(require("./images/bow_atk.png")),
          s = b(require("./images/magic_idle.png")),
          w = b(require("./images/magic_walk.png")),
          l = b(require("./images/magic_atk.png")),
          d = b(require("./images/enemysword_idle.png")),
          g = b(require("./images/enemysword_walk.png")),
          o = b(require("./images/enemysword_atk.png")),
          m = b(require("./images/enemybow_idle.png")),
          c = b(require("./images/enemybow_walk.png")),
          p = b(require("./images/enemybow_atk.png")),
          x = b(require("./images/enemymagic_idle.png")),
          q = b(require("./images/enemymagic_walk.png")),
          T = b(require("./images/enemymagic_atk.png")),
          f = b(require("./images/dungeontiles_1.png")),
          k = b(require("./images/endturn.png")),
          y = b(require("./images/skip.png")),
          _ = b(require("./images/title.png")),
          v = b(require("./images/gameover.png")),
          S = b(require("./images/cursor.png")),
          M = b(require("./images/playerphase.png")),
          E = b(require("./images/enemyphase.png"));
        function b(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var R = { title: new e.Texture(_.default) };
        exports.MainMenuResources = R;
        var h = { end: new e.Texture(v.default) };
        exports.GameOverResources = h;
        var B = {
          SwordIdle: new e.Texture(r.default),
          SwordWalk: new e.Texture(u.default),
          SwordAtk: new e.Texture(a.default),
          BowIdle: new e.Texture(i.default),
          BowWalk: new e.Texture(n.default),
          BowAtk: new e.Texture(t.default),
          MagicIdle: new e.Texture(s.default),
          MagicWalk: new e.Texture(w.default),
          MagicAtk: new e.Texture(l.default),
          EnemySwordIdle: new e.Texture(d.default),
          EnemySwordWalk: new e.Texture(g.default),
          EnemySwordAtk: new e.Texture(o.default),
          EnemyBowIdle: new e.Texture(m.default),
          EnemyBowWalk: new e.Texture(c.default),
          EnemyBowAtk: new e.Texture(p.default),
          EnemyMagicIdle: new e.Texture(x.default),
          EnemyMagicWalk: new e.Texture(q.default),
          EnemyMagicAtk: new e.Texture(T.default),
          TileTexture: new e.Texture(f.default),
          NextTurnTexture: new e.Texture(k.default),
          SkipTutorialTexture: new e.Texture(y.default),
          Cursor: new e.Texture(S.default),
          PlayerPhase: new e.Texture(M.default),
          EnemyPhase: new e.Texture(E.default),
        };
        exports.Resources = B;
        var A = {
          Bow: new e.Sound(require("./music/bow.wav")),
          Sword: new e.Sound(require("./music/sword.wav")),
          Magic: new e.Sound(require("./music/magic.wav")),
          DarkHollows: new e.Sound(require("./music/darkhollows.wav")),
          Deselect: new e.Sound(require("./music/deselect.wav")),
          Die: new e.Sound(require("./music/die.wav")),
          Select: new e.Sound(require("./music/select.wav")),
          TileChange: new e.Sound(require("./music/tilechange.wav")),
          Title: new e.Sound(require("./music/title.wav")),
        };
        exports.MusicResources = A;
      },
      {
        excalibur: "jZN7",
        "./images/sword_idle.png": "QBtd",
        "./images/sword_walk.png": "PQsI",
        "./images/sword_atk.png": "icnx",
        "./images/bow_idle.png": "mn1F",
        "./images/bow_walk.png": "V7vf",
        "./images/bow_atk.png": "DNyR",
        "./images/magic_idle.png": "LAbl",
        "./images/magic_walk.png": "Kmd8",
        "./images/magic_atk.png": "Kxor",
        "./images/enemysword_idle.png": "byj1",
        "./images/enemysword_walk.png": "p6yI",
        "./images/enemysword_atk.png": "M3kD",
        "./images/enemybow_idle.png": "VDWP",
        "./images/enemybow_walk.png": "TnSE",
        "./images/enemybow_atk.png": "VPQa",
        "./images/enemymagic_idle.png": "cmPR",
        "./images/enemymagic_walk.png": "YoBC",
        "./images/enemymagic_atk.png": "HVIT",
        "./images/dungeontiles_1.png": "Cgt9",
        "./images/endturn.png": "ZUDz",
        "./images/skip.png": "s9p6",
        "./images/title.png": "iSd5",
        "./images/gameover.png": "j0vF",
        "./images/cursor.png": "MXWc",
        "./images/playerphase.png": "uDZA",
        "./images/enemyphase.png": "GMCE",
        "./music/bow.wav": "w93k",
        "./music/sword.wav": "qJDI",
        "./music/magic.wav": "XZqz",
        "./music/darkhollows.wav": "a2Qp",
        "./music/deselect.wav": "gpIJ",
        "./music/die.wav": "Bilj",
        "./music/select.wav": "CqG6",
        "./music/tilechange.wav": "e07l",
        "./music/title.wav": "ADsk",
      },
    ],
    RoBB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Magic = exports.Bow = exports.Sword = exports.CharacterClass = void 0);
        var e = require("excalibur"),
          t = require("../resources"),
          a = (function () {
            var e = function (t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function (t, a) {
              function r() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((r.prototype = a.prototype), new r()));
            };
          })(),
          r = (function () {
            function e() {
              this.level = 1;
            }
            return (
              (e.prototype.feltDamage = function (e) {
                return (
                  Math.max(e.magicalDamage - this.defence.magic, 0) +
                  Math.max(e.physicalDamage - this.defence.physical, 0)
                );
              }),
              e
            );
          })();
        exports.CharacterClass = r;
        var o = (function (r) {
          function o(a) {
            var o = r.call(this) || this;
            return (
              (o.moveRange = { inner: 3, outer: 3 }),
              (o.defence = { magic: 2, physical: 10 }),
              (o.attack = { range: 1, magicalDamage: 0, physicalDamage: 12 }),
              (o.health = { maxHealth: 40, healOnNoMove: 10 }),
              a
                ? ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.SwordIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.SwordAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.SwordWalk,
                    6,
                    1,
                    40,
                    40
                  )))
                : ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.EnemySwordIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.EnemySwordAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.EnemySwordWalk,
                    6,
                    1,
                    40,
                    40
                  ))),
              o
            );
          }
          return (
            a(o, r),
            (o.prototype.levelUp = function (e) {
              void 0 === e && (e = 1);
              for (var t = 0; t < e; t++)
                this.level % 5 == 0 &&
                  ((this.moveRange.inner += 1), (this.moveRange.outer += 1)),
                  (this.defence.magic += 5),
                  (this.defence.physical += 5),
                  (this.attack.physicalDamage += 5),
                  (this.health.maxHealth += 20),
                  (this.health.healOnNoMove += 15),
                  (this.level += 1);
              return this;
            }),
            (o.prototype.expForNextLevel = function () {
              return 5 * this.level;
            }),
            (o.prototype.deathExp = function () {
              return 5 * this.level;
            }),
            (o.prototype.playAttackSound = function () {
              t.MusicResources.Sword.play();
            }),
            o
          );
        })(r);
        exports.Sword = o;
        var n = (function (r) {
          function o(a) {
            var o = r.call(this) || this;
            return (
              (o.moveRange = { inner: 4, outer: 4 }),
              (o.defence = { magic: 2, physical: 2 }),
              (o.attack = { range: 4, magicalDamage: 0, physicalDamage: 20 }),
              (o.health = { maxHealth: 30, healOnNoMove: 15 }),
              a
                ? ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.BowIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.BowAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.BowWalk,
                    6,
                    1,
                    40,
                    40
                  )))
                : ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.EnemyBowIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.EnemyBowAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.EnemyBowWalk,
                    6,
                    1,
                    40,
                    40
                  ))),
              o
            );
          }
          return (
            a(o, r),
            (o.prototype.levelUp = function (e) {
              void 0 === e && (e = 1);
              for (var t = 0; t < e; t++)
                this.level % 5 == 0 &&
                  ((this.moveRange.inner += 1), (this.moveRange.outer += 1)),
                  (this.defence.magic += 3),
                  (this.defence.physical += 3),
                  (this.attack.physicalDamage += 10),
                  (this.health.maxHealth += 10),
                  (this.health.healOnNoMove += 10),
                  (this.level += 1);
              return this;
            }),
            (o.prototype.expForNextLevel = function () {
              return 5 * this.level;
            }),
            (o.prototype.deathExp = function () {
              return 5 * this.level;
            }),
            (o.prototype.playAttackSound = function () {
              t.MusicResources.Bow.play();
            }),
            o
          );
        })(r);
        exports.Bow = n;
        var i = (function (r) {
          function o(a) {
            var o = r.call(this) || this;
            return (
              (o.moveRange = { inner: 2, outer: 2 }),
              (o.defence = { magic: 10, physical: 2 }),
              (o.attack = { range: 5, magicalDamage: 20, physicalDamage: 0 }),
              (o.health = { maxHealth: 30, healOnNoMove: 10 }),
              a
                ? ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.MagicIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.MagicAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.MagicWalk,
                    6,
                    1,
                    40,
                    40
                  )))
                : ((o.idleSheet = new e.SpriteSheet(
                    t.Resources.EnemyMagicIdle,
                    4,
                    1,
                    40,
                    40
                  )),
                  (o.atkSheet = new e.SpriteSheet(
                    t.Resources.EnemyMagicAtk,
                    6,
                    1,
                    40,
                    40
                  )),
                  (o.walkSheet = new e.SpriteSheet(
                    t.Resources.EnemyMagicWalk,
                    6,
                    1,
                    40,
                    40
                  ))),
              o
            );
          }
          return (
            a(o, r),
            (o.prototype.levelUp = function (e) {
              void 0 === e && (e = 1);
              for (var t = 0; t < e; t++)
                this.level % 5 == 0 &&
                  ((this.moveRange.inner += 1), (this.moveRange.outer += 1)),
                  (this.defence.magic += 5),
                  (this.defence.physical += 2),
                  (this.attack.magicalDamage += 10),
                  (this.health.maxHealth += 10),
                  (this.health.healOnNoMove += 5),
                  (this.level += 1);
              return this;
            }),
            (o.prototype.expForNextLevel = function () {
              return 5 * this.level;
            }),
            (o.prototype.deathExp = function () {
              return 5 * this.level;
            }),
            (o.prototype.playAttackSound = function () {
              t.MusicResources.Magic.play();
            }),
            o
          );
        })(r);
        exports.Magic = i;
      },
      { excalibur: "jZN7", "../resources": "x5mp" },
    ],
    T3UV: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "CharacterClass", {
            enumerable: !0,
            get: function () {
              return e.CharacterClass;
            },
          }),
          Object.defineProperty(exports, "Sword", {
            enumerable: !0,
            get: function () {
              return e.Sword;
            },
          }),
          Object.defineProperty(exports, "Bow", {
            enumerable: !0,
            get: function () {
              return e.Bow;
            },
          }),
          Object.defineProperty(exports, "Magic", {
            enumerable: !0,
            get: function () {
              return e.Magic;
            },
          }),
          (exports.Enemy = exports.Player = exports.Character = void 0);
        var t = require("excalibur"),
          e = require("./class"),
          a = (function () {
            var t = function (e, a) {
              return (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
                })(e, a);
            };
            return function (e, a) {
              function r() {
                this.constructor = e;
              }
              t(e, a),
                (e.prototype =
                  null === a
                    ? Object.create(a)
                    : ((r.prototype = a.prototype), new r()));
            };
          })(),
          r = (function (e) {
            function r(t, a, n) {
              var i = e.call(this, { pos: t, width: 40, height: 40 }) || this;
              return (
                (i.moveExhausted = { inner: !1, outer: !1 }),
                (i.goTo = function (t) {
                  var e = t.length - 1;
                  i.moveExhausted.inner ||
                    ((i.moveExhausted.inner = !0),
                    (e -= i.cClass.moveRange.inner)),
                    e > 0 && (i.moveExhausted.outer = !0),
                    i.setDrawing("walk");
                  for (
                    var a = i.actions.delay(0),
                      n = function (t) {
                        a.asPromise().then(function () {
                          i.currentDrawing.flipHorizontal = t.x < i.pos.x;
                        }),
                          (a = a.moveTo(t.x, t.y, r.SPEED));
                      },
                      o = 0,
                      s = t;
                    o < s.length;
                    o++
                  ) {
                    n(s[o]);
                  }
                  return a.asPromise().then(function () {
                    return i.setDrawing("idle");
                  });
                }),
                (i.getStats = function () {
                  return [
                    "HP: " + i.health + " / " + i.cClass.health.maxHealth,
                    "DEF(M): " + i.cClass.defence.magic,
                    "DEF(P): " + i.cClass.defence.physical,
                    "ATK: " +
                      i.cClass.attack.magicalDamage +
                      "(M) " +
                      i.cClass.attack.physicalDamage +
                      "(P)",
                    "RNG: " + i.cClass.attack.range,
                    "EXP: " + i.exp + " / " + i.cClass.expForNextLevel(),
                    "LVL: " + i.cClass.level,
                  ];
                }),
                (i.cClass = a),
                (i._health = a.health.maxHealth),
                (i.exp = n),
                i
              );
            }
            return (
              a(r, e),
              (r.prototype.onInitialize = function (a) {
                e.prototype.onInitialize.call(this, a),
                  (this.healthBar = new t.Actor({
                    x: 0,
                    y: 24,
                    width: 30,
                    height: 4,
                    color: this.controllable ? t.Color.Green : t.Color.Red,
                  })),
                  this.add(
                    new t.Actor({
                      x: this.healthBar.pos.x,
                      y: this.healthBar.pos.y,
                      width: this.healthBar.width + 4,
                      height: this.healthBar.height + 4,
                      color: t.Color.Black,
                    })
                  ),
                  this.add(this.healthBar),
                  this.addDrawing(
                    "idle",
                    this.cClass.idleSheet.getAnimationForAll(a, 1e3 / 6)
                  );
                var r = this.cClass.atkSheet.getAnimationForAll(a, 1e3 / 6);
                (r.loop = !1),
                  this.addDrawing("atk", r),
                  this.addDrawing(
                    "walk",
                    this.cClass.walkSheet.getAnimationForAll(a, 1e3 / 6)
                  ),
                  this.setDrawing("idle");
              }),
              Object.defineProperty(r.prototype, "health", {
                get: function () {
                  return this._health;
                },
                set: function (t) {
                  if (((this._health = t), this.healthBar)) {
                    var e = (this._health / this.cClass.health.maxHealth) * 30;
                    (this.healthBar.pos.x -= (this.healthBar.width - e) / 2),
                      (this.healthBar.width = e);
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              (r.prototype.damage = function (e) {
                var a = this,
                  n = this.cClass.feltDamage(e),
                  i = new t.Actor();
                this.add(i);
                var o = new t.Label();
                return (
                  (o.color = t.Color.White),
                  (o.fontSize = 15),
                  (o.fontStyle = t.FontStyle.Oblique),
                  (o.text = "" + n),
                  (o.pos = new t.Vector(0, 0)),
                  i.add(o),
                  i.actions.moveBy(10, -10, 50),
                  o.actions
                    .fade(0, 1e3)
                    .asPromise()
                    .then(function () {
                      a.remove(i);
                    }),
                  this.currentDrawing.addEffect(r.DAMAGE_EFFECT),
                  this.actions
                    .delay(100)
                    .asPromise()
                    .then(function () {
                      a.currentDrawing.removeEffect(r.DAMAGE_EFFECT);
                    }),
                  (this.health -= n),
                  this.health <= 0 && (this.kill(), !0)
                );
              }),
              (r.prototype.gainExp = function (t) {
                this.exp += t;
                var e = this.cClass.expForNextLevel();
                if (this.exp >= e) {
                  this.exp -= e;
                  var a = this.getStats(),
                    r = this.cClass.health.maxHealth;
                  this.cClass.levelUp(),
                    (this.health += this.cClass.health.maxHealth - r);
                  var n = this.getStats().map(function (t) {
                      return t.split(": ")[1];
                    }),
                    i = a.map(function (t, e) {
                      return t + " => " + n[e];
                    });
                  return i.push(""), i.push("Click to dismiss"), i;
                }
                return null;
              }),
              Object.defineProperty(r.prototype, "canAttack", {
                get: function () {
                  return !this.moveExhausted.inner && !this.moveExhausted.outer;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (r.prototype.spendAttack = function () {
                (this.moveExhausted.inner = !0),
                  (this.moveExhausted.outer = !0),
                  this.cClass.playAttackSound();
              }),
              (r.prototype.nextTurn = function () {
                this.canAttack &&
                  (this.health = Math.min(
                    this.cClass.health.maxHealth,
                    this.health + this.cClass.health.healOnNoMove
                  )),
                  (this.moveExhausted.inner = !1),
                  (this.moveExhausted.outer = !1);
              }),
              (r.SPEED = 150),
              (r.DAMAGE_EFFECT = new t.Effects.Colorize(t.Color.Red)),
              r
            );
          })(t.Actor);
        exports.Character = r;
        var n = (function (t) {
          function e(e, a, r) {
            void 0 === r && (r = 0);
            var n = t.call(this, e, a, r) || this;
            return (n.controllable = !0), n;
          }
          return a(e, t), e;
        })(r);
        exports.Player = n;
        var i = (function (t) {
          function e(e, a, r) {
            void 0 === r && (r = 0);
            var n = t.call(this, e, a, r) || this;
            return (n.controllable = !1), n;
          }
          return a(e, t), e;
        })(r);
        exports.Enemy = i;
      },
      { excalibur: "jZN7", "./class": "RoBB" },
    ],
    DPxs: [
      function (require, module, exports) {
        (function () {
          var t, n, e, o, r, p, u, i, l, s, h, c, f, a, y;
          (e = Math.floor),
            (s = Math.min),
            (n = function (t, n) {
              return t < n ? -1 : t > n ? 1 : 0;
            }),
            (l = function (t, o, r, p, u) {
              var i;
              if ((null == r && (r = 0), null == u && (u = n), r < 0))
                throw new Error("lo must be non-negative");
              for (null == p && (p = t.length); r < p; )
                u(o, t[(i = e((r + p) / 2))]) < 0 ? (p = i) : (r = i + 1);
              return [].splice.apply(t, [r, r - r].concat(o)), o;
            }),
            (p = function (t, e, o) {
              return null == o && (o = n), t.push(e), a(t, 0, t.length - 1, o);
            }),
            (r = function (t, e) {
              var o, r;
              return (
                null == e && (e = n),
                (o = t.pop()),
                t.length ? ((r = t[0]), (t[0] = o), y(t, 0, e)) : (r = o),
                r
              );
            }),
            (i = function (t, e, o) {
              var r;
              return (
                null == o && (o = n), (r = t[0]), (t[0] = e), y(t, 0, o), r
              );
            }),
            (u = function (t, e, o) {
              var r;
              return (
                null == o && (o = n),
                t.length &&
                  o(t[0], e) < 0 &&
                  ((e = (r = [t[0], e])[0]), (t[0] = r[1]), y(t, 0, o)),
                e
              );
            }),
            (o = function (t, o) {
              var r, p, u, i, l, s;
              for (
                null == o && (o = n),
                  l = [],
                  p = 0,
                  u = (i = function () {
                    s = [];
                    for (
                      var n = 0, o = e(t.length / 2);
                      0 <= o ? n < o : n > o;
                      0 <= o ? n++ : n--
                    )
                      s.push(n);
                    return s;
                  }
                    .apply(this)
                    .reverse()).length;
                p < u;
                p++
              )
                (r = i[p]), l.push(y(t, r, o));
              return l;
            }),
            (f = function (t, e, o) {
              var r;
              if ((null == o && (o = n), -1 !== (r = t.indexOf(e))))
                return a(t, 0, r, o), y(t, r, o);
            }),
            (h = function (t, e, r) {
              var p, i, l, s, h;
              if ((null == r && (r = n), !(i = t.slice(0, e)).length)) return i;
              for (o(i, r), l = 0, s = (h = t.slice(e)).length; l < s; l++)
                (p = h[l]), u(i, p, r);
              return i.sort(r).reverse();
            }),
            (c = function (t, e, p) {
              var u, i, h, c, f, a, y, d, g;
              if ((null == p && (p = n), 10 * e <= t.length)) {
                if (!(h = t.slice(0, e).sort(p)).length) return h;
                for (
                  i = h[h.length - 1], c = 0, a = (y = t.slice(e)).length;
                  c < a;
                  c++
                )
                  p((u = y[c]), i) < 0 &&
                    (l(h, u, 0, null, p), h.pop(), (i = h[h.length - 1]));
                return h;
              }
              for (
                o(t, p), g = [], f = 0, d = s(e, t.length);
                0 <= d ? f < d : f > d;
                0 <= d ? ++f : --f
              )
                g.push(r(t, p));
              return g;
            }),
            (a = function (t, e, o, r) {
              var p, u, i;
              for (
                null == r && (r = n), p = t[o];
                o > e && r(p, (u = t[(i = (o - 1) >> 1)])) < 0;

              )
                (t[o] = u), (o = i);
              return (t[o] = p);
            }),
            (y = function (t, e, o) {
              var r, p, u, i, l;
              for (
                null == o && (o = n),
                  p = t.length,
                  l = e,
                  u = t[e],
                  r = 2 * e + 1;
                r < p;

              )
                (i = r + 1) < p && !(o(t[r], t[i]) < 0) && (r = i),
                  (t[e] = t[r]),
                  (r = 2 * (e = r) + 1);
              return (t[e] = u), a(t, l, e, o);
            }),
            (t = (function () {
              function t(t) {
                (this.cmp = null != t ? t : n), (this.nodes = []);
              }
              return (
                (t.push = p),
                (t.pop = r),
                (t.replace = i),
                (t.pushpop = u),
                (t.heapify = o),
                (t.updateItem = f),
                (t.nlargest = h),
                (t.nsmallest = c),
                (t.prototype.push = function (t) {
                  return p(this.nodes, t, this.cmp);
                }),
                (t.prototype.pop = function () {
                  return r(this.nodes, this.cmp);
                }),
                (t.prototype.peek = function () {
                  return this.nodes[0];
                }),
                (t.prototype.contains = function (t) {
                  return -1 !== this.nodes.indexOf(t);
                }),
                (t.prototype.replace = function (t) {
                  return i(this.nodes, t, this.cmp);
                }),
                (t.prototype.pushpop = function (t) {
                  return u(this.nodes, t, this.cmp);
                }),
                (t.prototype.heapify = function () {
                  return o(this.nodes, this.cmp);
                }),
                (t.prototype.updateItem = function (t) {
                  return f(this.nodes, t, this.cmp);
                }),
                (t.prototype.clear = function () {
                  return (this.nodes = []);
                }),
                (t.prototype.empty = function () {
                  return 0 === this.nodes.length;
                }),
                (t.prototype.size = function () {
                  return this.nodes.length;
                }),
                (t.prototype.clone = function () {
                  var n;
                  return ((n = new t()).nodes = this.nodes.slice(0)), n;
                }),
                (t.prototype.toArray = function () {
                  return this.nodes.slice(0);
                }),
                (t.prototype.insert = t.prototype.push),
                (t.prototype.top = t.prototype.peek),
                (t.prototype.front = t.prototype.peek),
                (t.prototype.has = t.prototype.contains),
                (t.prototype.copy = t.prototype.clone),
                t
              );
            })()),
            (
              "undefined" != typeof module && null !== module
                ? module.exports
                : void 0
            )
              ? (module.exports = t)
              : (window.Heap = t);
        }.call(this));
      },
      {},
    ],
    tAIw: [
      function (require, module, exports) {
        module.exports = require("./lib/heap");
      },
      { "./lib/heap": "DPxs" },
    ],
    m2LD: [
      function (require, module, exports) {
        function i(i, t, o) {
          (this.x = i), (this.y = t), (this.walkable = void 0 === o || o);
        }
        module.exports = i;
      },
      {},
    ],
    WdVX: [
      function (require, module, exports) {
        var e = {
          Always: 1,
          Never: 2,
          IfAtMostOneObstacle: 3,
          OnlyWhenNoObstacles: 4,
        };
        module.exports = e;
      },
      {},
    ],
    vMCg: [
      function (require, module, exports) {
        var t = require("./Node"),
          e = require("./DiagonalMovement");
        function i(t, e, i) {
          var s;
          "object" != typeof t
            ? (s = t)
            : ((e = t.length), (s = t[0].length), (i = t)),
            (this.width = s),
            (this.height = e),
            (this.nodes = this._buildNodes(s, e, i));
        }
        (i.prototype._buildNodes = function (e, i, s) {
          var o,
            r,
            n = new Array(i);
          for (o = 0; o < i; ++o)
            for (n[o] = new Array(e), r = 0; r < e; ++r) n[o][r] = new t(r, o);
          if (void 0 === s) return n;
          if (s.length !== i || s[0].length !== e)
            throw new Error("Matrix size does not fit");
          for (o = 0; o < i; ++o)
            for (r = 0; r < e; ++r) s[o][r] && (n[o][r].walkable = !1);
          return n;
        }),
          (i.prototype.getNodeAt = function (t, e) {
            return this.nodes[e][t];
          }),
          (i.prototype.isWalkableAt = function (t, e) {
            return this.isInside(t, e) && this.nodes[e][t].walkable;
          }),
          (i.prototype.isInside = function (t, e) {
            return t >= 0 && t < this.width && e >= 0 && e < this.height;
          }),
          (i.prototype.setWalkableAt = function (t, e, i) {
            this.nodes[e][t].walkable = i;
          }),
          (i.prototype.getNeighbors = function (t, i) {
            var s = t.x,
              o = t.y,
              r = [],
              n = !1,
              h = !1,
              a = !1,
              l = !1,
              u = !1,
              f = !1,
              p = !1,
              d = !1,
              b = this.nodes;
            if (
              (this.isWalkableAt(s, o - 1) && (r.push(b[o - 1][s]), (n = !0)),
              this.isWalkableAt(s + 1, o) && (r.push(b[o][s + 1]), (a = !0)),
              this.isWalkableAt(s, o + 1) && (r.push(b[o + 1][s]), (u = !0)),
              this.isWalkableAt(s - 1, o) && (r.push(b[o][s - 1]), (p = !0)),
              i === e.Never)
            )
              return r;
            if (i === e.OnlyWhenNoObstacles)
              (h = p && n), (l = n && a), (f = a && u), (d = u && p);
            else if (i === e.IfAtMostOneObstacle)
              (h = p || n), (l = n || a), (f = a || u), (d = u || p);
            else {
              if (i !== e.Always)
                throw new Error("Incorrect value of diagonalMovement");
              (h = !0), (l = !0), (f = !0), (d = !0);
            }
            return (
              h && this.isWalkableAt(s - 1, o - 1) && r.push(b[o - 1][s - 1]),
              l && this.isWalkableAt(s + 1, o - 1) && r.push(b[o - 1][s + 1]),
              f && this.isWalkableAt(s + 1, o + 1) && r.push(b[o + 1][s + 1]),
              d && this.isWalkableAt(s - 1, o + 1) && r.push(b[o + 1][s - 1]),
              r
            );
          }),
          (i.prototype.clone = function () {
            var e,
              s,
              o = this.width,
              r = this.height,
              n = this.nodes,
              h = new i(o, r),
              a = new Array(r);
            for (e = 0; e < r; ++e)
              for (a[e] = new Array(o), s = 0; s < o; ++s)
                a[e][s] = new t(s, e, n[e][s].walkable);
            return (h.nodes = a), h;
          }),
          (module.exports = i);
      },
      { "./Node": "m2LD", "./DiagonalMovement": "WdVX" },
    ],
    ez0E: [
      function (require, module, exports) {
        function r(r) {
          for (var t = [[r.x, r.y]]; r.parent; )
            (r = r.parent), t.push([r.x, r.y]);
          return t.reverse();
        }
        function t(t, e) {
          var n = r(t),
            a = r(e);
          return n.concat(a.reverse());
        }
        function e(r) {
          var t,
            e,
            n,
            a,
            o,
            s = 0;
          for (t = 1; t < r.length; ++t)
            (e = r[t - 1]),
              (n = r[t]),
              (a = e[0] - n[0]),
              (o = e[1] - n[1]),
              (s += Math.sqrt(a * a + o * o));
          return s;
        }
        function n(r, t, e, n) {
          var a,
            o,
            s,
            h,
            u,
            p,
            f = Math.abs,
            l = [];
          for (
            a = r < e ? 1 : -1,
              o = t < n ? 1 : -1,
              u = (s = f(e - r)) - (h = f(n - t));
            l.push([r, t]), r !== e || t !== n;

          )
            (p = 2 * u) > -h && ((u -= h), (r += a)),
              p < s && ((u += s), (t += o));
          return l;
        }
        function a(r) {
          var t,
            e,
            a,
            o,
            s,
            h,
            u = [],
            p = r.length;
          if (p < 2) return u;
          for (s = 0; s < p - 1; ++s)
            for (
              t = r[s],
                e = r[s + 1],
                o = (a = n(t[0], t[1], e[0], e[1])).length,
                h = 0;
              h < o - 1;
              ++h
            )
              u.push(a[h]);
          return u.push(r[p - 1]), u;
        }
        function o(r, t) {
          var e,
            a,
            o,
            s,
            h,
            u,
            p,
            f,
            l,
            i = t.length,
            c = t[0][0],
            x = t[0][1],
            d = t[i - 1][0],
            v = t[i - 1][1];
          for (o = [[(e = c), (a = x)]], s = 2; s < i; ++s) {
            for (
              p = n(e, a, (u = t[s])[0], u[1]), l = !1, h = 1;
              h < p.length;
              ++h
            )
              if (((f = p[h]), !r.isWalkableAt(f[0], f[1]))) {
                l = !0;
                break;
              }
            l &&
              ((lastValidCoord = t[s - 1]),
              o.push(lastValidCoord),
              (e = lastValidCoord[0]),
              (a = lastValidCoord[1]));
          }
          return o.push([d, v]), o;
        }
        function s(r) {
          if (r.length < 3) return r;
          var t,
            e,
            n,
            a,
            o,
            s,
            h = [],
            u = r[0][0],
            p = r[0][1],
            f = r[1][0],
            l = r[1][1],
            i = f - u,
            c = l - p;
          for (
            i /= o = Math.sqrt(i * i + c * c), c /= o, h.push([u, p]), s = 2;
            s < r.length;
            s++
          )
            (t = f),
              (e = l),
              (n = i),
              (a = c),
              (i = (f = r[s][0]) - t),
              (c = (l = r[s][1]) - e),
              (c /= o = Math.sqrt(i * i + c * c)),
              ((i /= o) === n && c === a) || h.push([t, e]);
          return h.push([f, l]), h;
        }
        (exports.backtrace = r),
          (exports.biBacktrace = t),
          (exports.pathLength = e),
          (exports.interpolate = n),
          (exports.expandPath = a),
          (exports.smoothenPath = o),
          (exports.compressPath = s);
      },
      {},
    ],
    hqcn: [
      function (require, module, exports) {
        module.exports = {
          manhattan: function (t, n) {
            return t + n;
          },
          euclidean: function (t, n) {
            return Math.sqrt(t * t + n * n);
          },
          octile: function (t, n) {
            var e = Math.SQRT2 - 1;
            return t < n ? e * t + n : e * n + t;
          },
          chebyshev: function (t, n) {
            return Math.max(t, n);
          },
        };
      },
      {},
    ],
    w8qd: [
      function (require, module, exports) {
        var e = require("heap"),
          t = require("../core/Util"),
          i = require("../core/Heuristic"),
          o = require("../core/DiagonalMovement");
        function n(e) {
          (e = e || {}),
            (this.allowDiagonal = e.allowDiagonal),
            (this.dontCrossCorners = e.dontCrossCorners),
            (this.heuristic = e.heuristic || i.manhattan),
            (this.weight = e.weight || 1),
            (this.diagonalMovement = e.diagonalMovement),
            this.diagonalMovement ||
              (this.allowDiagonal
                ? this.dontCrossCorners
                  ? (this.diagonalMovement = o.OnlyWhenNoObstacles)
                  : (this.diagonalMovement = o.IfAtMostOneObstacle)
                : (this.diagonalMovement = o.Never)),
            this.diagonalMovement === o.Never
              ? (this.heuristic = e.heuristic || i.manhattan)
              : (this.heuristic = e.heuristic || i.octile);
        }
        (n.prototype.findPath = function (i, o, n, a, r) {
          var s,
            h,
            l,
            g,
            d,
            u,
            c,
            p,
            m = new e(function (e, t) {
              return e.f - t.f;
            }),
            v = r.getNodeAt(i, o),
            f = r.getNodeAt(n, a),
            M = this.heuristic,
            w = this.diagonalMovement,
            C = this.weight,
            N = Math.abs,
            b = Math.SQRT2;
          for (v.g = 0, v.f = 0, m.push(v), v.opened = !0; !m.empty(); ) {
            if ((((s = m.pop()).closed = !0), s === f)) return t.backtrace(f);
            for (g = 0, d = (h = r.getNeighbors(s, w)).length; g < d; ++g)
              (l = h[g]).closed ||
                ((u = l.x),
                (c = l.y),
                (p = s.g + (u - s.x == 0 || c - s.y == 0 ? 1 : b)),
                (!l.opened || p < l.g) &&
                  ((l.g = p),
                  (l.h = l.h || C * M(N(u - n), N(c - a))),
                  (l.f = l.g + l.h),
                  (l.parent = s),
                  l.opened ? m.updateItem(l) : (m.push(l), (l.opened = !0))));
          }
          return [];
        }),
          (module.exports = n);
      },
      {
        heap: "tAIw",
        "../core/Util": "ez0E",
        "../core/Heuristic": "hqcn",
        "../core/DiagonalMovement": "WdVX",
      },
    ],
    ruAP: [
      function (require, module, exports) {
        var t = require("./AStarFinder");
        function r(r) {
          t.call(this, r);
          var e = this.heuristic;
          this.heuristic = function (t, r) {
            return 1e6 * e(t, r);
          };
        }
        (r.prototype = new t()),
          (r.prototype.constructor = r),
          (module.exports = r);
      },
      { "./AStarFinder": "w8qd" },
    ],
    yTUG: [
      function (require, module, exports) {
        var e = require("../core/Util"),
          o = require("../core/DiagonalMovement");
        function t(e) {
          (e = e || {}),
            (this.allowDiagonal = e.allowDiagonal),
            (this.dontCrossCorners = e.dontCrossCorners),
            (this.diagonalMovement = e.diagonalMovement),
            this.diagonalMovement ||
              (this.allowDiagonal
                ? this.dontCrossCorners
                  ? (this.diagonalMovement = o.OnlyWhenNoObstacles)
                  : (this.diagonalMovement = o.IfAtMostOneObstacle)
                : (this.diagonalMovement = o.Never));
        }
        (t.prototype.findPath = function (o, t, n, a, i) {
          var s,
            r,
            l,
            d,
            h,
            g = [],
            v = this.diagonalMovement,
            c = i.getNodeAt(o, t),
            m = i.getNodeAt(n, a);
          for (g.push(c), c.opened = !0; g.length; ) {
            if ((((l = g.shift()).closed = !0), l === m)) return e.backtrace(m);
            for (d = 0, h = (s = i.getNeighbors(l, v)).length; d < h; ++d)
              (r = s[d]).closed ||
                r.opened ||
                (g.push(r), (r.opened = !0), (r.parent = l));
          }
          return [];
        }),
          (module.exports = t);
      },
      { "../core/Util": "ez0E", "../core/DiagonalMovement": "WdVX" },
    ],
    ivAt: [
      function (require, module, exports) {
        var t = require("./AStarFinder");
        function r(r) {
          t.call(this, r),
            (this.heuristic = function (t, r) {
              return 0;
            });
        }
        (r.prototype = new t()),
          (r.prototype.constructor = r),
          (module.exports = r);
      },
      { "./AStarFinder": "w8qd" },
    ],
    X1Ev: [
      function (require, module, exports) {
        var e = require("heap"),
          t = require("../core/Util"),
          o = require("../core/Heuristic"),
          i = require("../core/DiagonalMovement");
        function n(e) {
          (e = e || {}),
            (this.allowDiagonal = e.allowDiagonal),
            (this.dontCrossCorners = e.dontCrossCorners),
            (this.diagonalMovement = e.diagonalMovement),
            (this.heuristic = e.heuristic || o.manhattan),
            (this.weight = e.weight || 1),
            this.diagonalMovement ||
              (this.allowDiagonal
                ? this.dontCrossCorners
                  ? (this.diagonalMovement = i.OnlyWhenNoObstacles)
                  : (this.diagonalMovement = i.IfAtMostOneObstacle)
                : (this.diagonalMovement = i.Never)),
            this.diagonalMovement === i.Never
              ? (this.heuristic = e.heuristic || o.manhattan)
              : (this.heuristic = e.heuristic || o.octile);
        }
        (n.prototype.findPath = function (o, i, n, r, a) {
          var s,
            h,
            g,
            d,
            l,
            p,
            u,
            c,
            f = function (e, t) {
              return e.f - t.f;
            },
            m = new e(f),
            v = new e(f),
            M = a.getNodeAt(o, i),
            w = a.getNodeAt(n, r),
            y = this.heuristic,
            b = this.diagonalMovement,
            N = this.weight,
            C = Math.abs,
            x = Math.SQRT2;
          for (
            M.g = 0,
              M.f = 0,
              m.push(M),
              M.opened = 1,
              w.g = 0,
              w.f = 0,
              v.push(w),
              w.opened = 2;
            !m.empty() && !v.empty();

          ) {
            for (
              (s = m.pop()).closed = !0,
                d = 0,
                l = (h = a.getNeighbors(s, b)).length;
              d < l;
              ++d
            )
              if (!(g = h[d]).closed) {
                if (2 === g.opened) return t.biBacktrace(s, g);
                (p = g.x),
                  (u = g.y),
                  (c = s.g + (p - s.x == 0 || u - s.y == 0 ? 1 : x)),
                  (!g.opened || c < g.g) &&
                    ((g.g = c),
                    (g.h = g.h || N * y(C(p - n), C(u - r))),
                    (g.f = g.g + g.h),
                    (g.parent = s),
                    g.opened ? m.updateItem(g) : (m.push(g), (g.opened = 1)));
              }
            for (
              (s = v.pop()).closed = !0,
                d = 0,
                l = (h = a.getNeighbors(s, b)).length;
              d < l;
              ++d
            )
              if (!(g = h[d]).closed) {
                if (1 === g.opened) return t.biBacktrace(g, s);
                (p = g.x),
                  (u = g.y),
                  (c = s.g + (p - s.x == 0 || u - s.y == 0 ? 1 : x)),
                  (!g.opened || c < g.g) &&
                    ((g.g = c),
                    (g.h = g.h || N * y(C(p - o), C(u - i))),
                    (g.f = g.g + g.h),
                    (g.parent = s),
                    g.opened ? v.updateItem(g) : (v.push(g), (g.opened = 2)));
              }
          }
          return [];
        }),
          (module.exports = n);
      },
      {
        heap: "tAIw",
        "../core/Util": "ez0E",
        "../core/Heuristic": "hqcn",
        "../core/DiagonalMovement": "WdVX",
      },
    ],
    N9Fd: [
      function (require, module, exports) {
        var t = require("./BiAStarFinder");
        function r(r) {
          t.call(this, r);
          var e = this.heuristic;
          this.heuristic = function (t, r) {
            return 1e6 * e(t, r);
          };
        }
        (r.prototype = new t()),
          (r.prototype.constructor = r),
          (module.exports = r);
      },
      { "./BiAStarFinder": "X1Ev" },
    ],
    mBIn: [
      function (require, module, exports) {
        var e = require("../core/Util"),
          o = require("../core/DiagonalMovement");
        function t(e) {
          (e = e || {}),
            (this.allowDiagonal = e.allowDiagonal),
            (this.dontCrossCorners = e.dontCrossCorners),
            (this.diagonalMovement = e.diagonalMovement),
            this.diagonalMovement ||
              (this.allowDiagonal
                ? this.dontCrossCorners
                  ? (this.diagonalMovement = o.OnlyWhenNoObstacles)
                  : (this.diagonalMovement = o.IfAtMostOneObstacle)
                : (this.diagonalMovement = o.Never));
        }
        (t.prototype.findPath = function (o, t, n, i, s) {
          var a,
            r,
            l,
            d,
            h,
            g = s.getNodeAt(o, t),
            f = s.getNodeAt(n, i),
            p = [],
            c = [],
            b = this.diagonalMovement;
          for (
            p.push(g),
              g.opened = !0,
              g.by = 0,
              c.push(f),
              f.opened = !0,
              f.by = 1;
            p.length && c.length;

          ) {
            for (
              (l = p.shift()).closed = !0,
                d = 0,
                h = (a = s.getNeighbors(l, b)).length;
              d < h;
              ++d
            )
              if (!(r = a[d]).closed)
                if (r.opened) {
                  if (1 === r.by) return e.biBacktrace(l, r);
                } else p.push(r), (r.parent = l), (r.opened = !0), (r.by = 0);
            for (
              (l = c.shift()).closed = !0,
                d = 0,
                h = (a = s.getNeighbors(l, b)).length;
              d < h;
              ++d
            )
              if (!(r = a[d]).closed)
                if (r.opened) {
                  if (0 === r.by) return e.biBacktrace(r, l);
                } else c.push(r), (r.parent = l), (r.opened = !0), (r.by = 1);
          }
          return [];
        }),
          (module.exports = t);
      },
      { "../core/Util": "ez0E", "../core/DiagonalMovement": "WdVX" },
    ],
    WN2S: [
      function (require, module, exports) {
        var t = require("./BiAStarFinder");
        function r(r) {
          t.call(this, r),
            (this.heuristic = function (t, r) {
              return 0;
            });
        }
        (r.prototype = new t()),
          (r.prototype.constructor = r),
          (module.exports = r);
      },
      { "./BiAStarFinder": "X1Ev" },
    ],
    LiPS: [
      function (require, module, exports) {
        var t = require("../core/Util"),
          e = require("../core/Heuristic"),
          i = require("../core/Node"),
          n = require("../core/DiagonalMovement");
        function r(t) {
          (t = t || {}),
            (this.allowDiagonal = t.allowDiagonal),
            (this.dontCrossCorners = t.dontCrossCorners),
            (this.diagonalMovement = t.diagonalMovement),
            (this.heuristic = t.heuristic || e.manhattan),
            (this.weight = t.weight || 1),
            (this.trackRecursion = t.trackRecursion || !1),
            (this.timeLimit = t.timeLimit || 1 / 0),
            this.diagonalMovement ||
              (this.allowDiagonal
                ? this.dontCrossCorners
                  ? (this.diagonalMovement = n.OnlyWhenNoObstacles)
                  : (this.diagonalMovement = n.IfAtMostOneObstacle)
                : (this.diagonalMovement = n.Never)),
            this.diagonalMovement === n.Never
              ? (this.heuristic = t.heuristic || e.manhattan)
              : (this.heuristic = t.heuristic || e.octile);
        }
        (r.prototype.findPath = function (t, e, n, r, o) {
          var s,
            a,
            h,
            u = new Date().getTime(),
            c = function (t, e) {
              return this.heuristic(Math.abs(e.x - t.x), Math.abs(e.y - t.y));
            }.bind(this),
            l = function (t, e, n, r, s) {
              if (
                (0,
                this.timeLimit > 0 &&
                  new Date().getTime() - u > 1e3 * this.timeLimit)
              )
                return 1 / 0;
              var a,
                h,
                m,
                g,
                f = e + c(t, d) * this.weight;
              if (f > n) return f;
              if (t == d) return (r[s] = [t.x, t.y]), t;
              var v,
                M,
                C = o.getNeighbors(t, this.diagonalMovement);
              for (m = 0, a = 1 / 0; (g = C[m]); ++m) {
                if (
                  (this.trackRecursion &&
                    ((g.retainCount = g.retainCount + 1 || 1),
                    !0 !== g.tested && (g.tested = !0)),
                  (h = l(
                    g,
                    e +
                      ((M = g),
                      (v = t).x === M.x || v.y === M.y ? 1 : Math.SQRT2),
                    n,
                    r,
                    s + 1
                  )) instanceof i)
                )
                  return (r[s] = [t.x, t.y]), h;
                this.trackRecursion && 0 == --g.retainCount && (g.tested = !1),
                  h < a && (a = h);
              }
              return a;
            }.bind(this),
            m = o.getNodeAt(t, e),
            d = o.getNodeAt(n, r),
            g = c(m, d);
          for (s = 0; ; ++s) {
            if ((h = l(m, 0, g, (a = []), 0)) === 1 / 0) return [];
            if (h instanceof i) return a;
            g = h;
          }
          return [];
        }),
          (module.exports = r);
      },
      {
        "../core/Util": "ez0E",
        "../core/Heuristic": "hqcn",
        "../core/Node": "m2LD",
        "../core/DiagonalMovement": "WdVX",
      },
    ],
    DVK8: [
      function (require, module, exports) {
        var e = require("heap"),
          t = require("../core/Util"),
          i = require("../core/Heuristic"),
          r = require("../core/DiagonalMovement");
        function o(e) {
          (e = e || {}),
            (this.heuristic = e.heuristic || i.manhattan),
            (this.trackJumpRecursion = e.trackJumpRecursion || !1);
        }
        (o.prototype.findPath = function (i, r, o, n, s) {
          var h,
            u = (this.openList = new e(function (e, t) {
              return e.f - t.f;
            })),
            c = (this.startNode = s.getNodeAt(i, r)),
            d = (this.endNode = s.getNodeAt(o, n));
          for (
            this.grid = s, c.g = 0, c.f = 0, u.push(c), c.opened = !0;
            !u.empty();

          ) {
            if ((((h = u.pop()).closed = !0), h === d))
              return t.expandPath(t.backtrace(d));
            this._identifySuccessors(h);
          }
          return [];
        }),
          (o.prototype._identifySuccessors = function (e) {
            var t,
              r,
              o,
              n,
              s,
              h,
              u,
              c,
              d,
              a,
              p = this.grid,
              f = this.heuristic,
              g = this.openList,
              m = this.endNode.x,
              N = this.endNode.y,
              l = e.x,
              y = e.y,
              x = Math.abs;
            Math.max;
            for (n = 0, s = (t = this._findNeighbors(e)).length; n < s; ++n)
              if (((r = t[n]), (o = this._jump(r[0], r[1], l, y)))) {
                if (((h = o[0]), (u = o[1]), (a = p.getNodeAt(h, u)).closed))
                  continue;
                (c = i.octile(x(h - l), x(u - y))),
                  (d = e.g + c),
                  (!a.opened || d < a.g) &&
                    ((a.g = d),
                    (a.h = a.h || f(x(h - m), x(u - N))),
                    (a.f = a.g + a.h),
                    (a.parent = e),
                    a.opened ? g.updateItem(a) : (g.push(a), (a.opened = !0)));
              }
          }),
          (module.exports = o);
      },
      {
        heap: "tAIw",
        "../core/Util": "ez0E",
        "../core/Heuristic": "hqcn",
        "../core/DiagonalMovement": "WdVX",
      },
    ],
    MqXc: [
      function (require, module, exports) {
        var e = require("./JumpPointFinderBase"),
          t = require("../core/DiagonalMovement");
        function a(t) {
          e.call(this, t);
        }
        (a.prototype = new e()),
          (a.prototype.constructor = a),
          (a.prototype._jump = function (e, t, a, i) {
            var r = this.grid,
              l = e - a,
              s = t - i;
            if (!r.isWalkableAt(e, t)) return null;
            if (
              (!0 === this.trackJumpRecursion &&
                (r.getNodeAt(e, t).tested = !0),
              r.getNodeAt(e, t) === this.endNode)
            )
              return [e, t];
            if (0 !== l) {
              if (
                (r.isWalkableAt(e, t - 1) && !r.isWalkableAt(e - l, t - 1)) ||
                (r.isWalkableAt(e, t + 1) && !r.isWalkableAt(e - l, t + 1))
              )
                return [e, t];
            } else {
              if (0 === s)
                throw new Error(
                  "Only horizontal and vertical movements are allowed"
                );
              if (
                (r.isWalkableAt(e - 1, t) && !r.isWalkableAt(e - 1, t - s)) ||
                (r.isWalkableAt(e + 1, t) && !r.isWalkableAt(e + 1, t - s))
              )
                return [e, t];
              if (this._jump(e + 1, t, e, t) || this._jump(e - 1, t, e, t))
                return [e, t];
            }
            return this._jump(e + l, t + s, e, t);
          }),
          (a.prototype._findNeighbors = function (e) {
            var a,
              i,
              r,
              l,
              s,
              o,
              n,
              u,
              h = e.parent,
              p = e.x,
              b = e.y,
              A = this.grid,
              k = [];
            if (h)
              (a = h.x),
                (i = h.y),
                (r = (p - a) / Math.max(Math.abs(p - a), 1)),
                (l = (b - i) / Math.max(Math.abs(b - i), 1)),
                0 !== r
                  ? (A.isWalkableAt(p, b - 1) && k.push([p, b - 1]),
                    A.isWalkableAt(p, b + 1) && k.push([p, b + 1]),
                    A.isWalkableAt(p + r, b) && k.push([p + r, b]))
                  : 0 !== l &&
                    (A.isWalkableAt(p - 1, b) && k.push([p - 1, b]),
                    A.isWalkableAt(p + 1, b) && k.push([p + 1, b]),
                    A.isWalkableAt(p, b + l) && k.push([p, b + l]));
            else
              for (
                n = 0, u = (s = A.getNeighbors(e, t.Never)).length;
                n < u;
                ++n
              )
                (o = s[n]), k.push([o.x, o.y]);
            return k;
          }),
          (module.exports = a);
      },
      { "./JumpPointFinderBase": "DVK8", "../core/DiagonalMovement": "WdVX" },
    ],
    PtLR: [
      function (require, module, exports) {
        var t = require("./JumpPointFinderBase"),
          e = require("../core/DiagonalMovement");
        function a(e) {
          t.call(this, e);
        }
        (a.prototype = new t()),
          (a.prototype.constructor = a),
          (a.prototype._jump = function (t, e, a, l) {
            var s = this.grid,
              i = t - a,
              r = e - l;
            if (!s.isWalkableAt(t, e)) return null;
            if (
              (!0 === this.trackJumpRecursion &&
                (s.getNodeAt(t, e).tested = !0),
              s.getNodeAt(t, e) === this.endNode)
            )
              return [t, e];
            if (0 !== i && 0 !== r) {
              if (
                (s.isWalkableAt(t - i, e + r) && !s.isWalkableAt(t - i, e)) ||
                (s.isWalkableAt(t + i, e - r) && !s.isWalkableAt(t, e - r))
              )
                return [t, e];
              if (this._jump(t + i, e, t, e) || this._jump(t, e + r, t, e))
                return [t, e];
            } else if (0 !== i) {
              if (
                (s.isWalkableAt(t + i, e + 1) && !s.isWalkableAt(t, e + 1)) ||
                (s.isWalkableAt(t + i, e - 1) && !s.isWalkableAt(t, e - 1))
              )
                return [t, e];
            } else if (
              (s.isWalkableAt(t + 1, e + r) && !s.isWalkableAt(t + 1, e)) ||
              (s.isWalkableAt(t - 1, e + r) && !s.isWalkableAt(t - 1, e))
            )
              return [t, e];
            return this._jump(t + i, e + r, t, e);
          }),
          (a.prototype._findNeighbors = function (t) {
            var a,
              l,
              s,
              i,
              r,
              u,
              b,
              p,
              h = t.parent,
              A = t.x,
              n = t.y,
              o = this.grid,
              k = [];
            if (h)
              (a = h.x),
                (l = h.y),
                (s = (A - a) / Math.max(Math.abs(A - a), 1)),
                (i = (n - l) / Math.max(Math.abs(n - l), 1)),
                0 !== s && 0 !== i
                  ? (o.isWalkableAt(A, n + i) && k.push([A, n + i]),
                    o.isWalkableAt(A + s, n) && k.push([A + s, n]),
                    o.isWalkableAt(A + s, n + i) && k.push([A + s, n + i]),
                    o.isWalkableAt(A - s, n) || k.push([A - s, n + i]),
                    o.isWalkableAt(A, n - i) || k.push([A + s, n - i]))
                  : 0 === s
                  ? (o.isWalkableAt(A, n + i) && k.push([A, n + i]),
                    o.isWalkableAt(A + 1, n) || k.push([A + 1, n + i]),
                    o.isWalkableAt(A - 1, n) || k.push([A - 1, n + i]))
                  : (o.isWalkableAt(A + s, n) && k.push([A + s, n]),
                    o.isWalkableAt(A, n + 1) || k.push([A + s, n + 1]),
                    o.isWalkableAt(A, n - 1) || k.push([A + s, n - 1]));
            else
              for (
                b = 0, p = (r = o.getNeighbors(t, e.Always)).length;
                b < p;
                ++b
              )
                (u = r[b]), k.push([u.x, u.y]);
            return k;
          }),
          (module.exports = a);
      },
      { "./JumpPointFinderBase": "DVK8", "../core/DiagonalMovement": "WdVX" },
    ],
    LLTW: [
      function (require, module, exports) {
        var e = require("./JumpPointFinderBase"),
          t = require("../core/DiagonalMovement");
        function a(t) {
          e.call(this, t);
        }
        (a.prototype = new e()),
          (a.prototype.constructor = a),
          (a.prototype._jump = function (e, t, a, s) {
            var l = this.grid,
              i = e - a,
              r = t - s;
            if (!l.isWalkableAt(e, t)) return null;
            if (
              (!0 === this.trackJumpRecursion &&
                (l.getNodeAt(e, t).tested = !0),
              l.getNodeAt(e, t) === this.endNode)
            )
              return [e, t];
            if (0 !== i && 0 !== r) {
              if (this._jump(e + i, t, e, t) || this._jump(e, t + r, e, t))
                return [e, t];
            } else if (0 !== i) {
              if (
                (l.isWalkableAt(e, t - 1) && !l.isWalkableAt(e - i, t - 1)) ||
                (l.isWalkableAt(e, t + 1) && !l.isWalkableAt(e - i, t + 1))
              )
                return [e, t];
            } else if (
              0 !== r &&
              ((l.isWalkableAt(e - 1, t) && !l.isWalkableAt(e - 1, t - r)) ||
                (l.isWalkableAt(e + 1, t) && !l.isWalkableAt(e + 1, t - r)))
            )
              return [e, t];
            return l.isWalkableAt(e + i, t) && l.isWalkableAt(e, t + r)
              ? this._jump(e + i, t + r, e, t)
              : null;
          }),
          (a.prototype._findNeighbors = function (e) {
            var a,
              s,
              l,
              i,
              r,
              u,
              h,
              p,
              n,
              o = e.parent,
              b = e.x,
              A = e.y,
              k = this.grid,
              W = [];
            if (o) {
              if (
                ((a = o.x),
                (s = o.y),
                (l = (b - a) / Math.max(Math.abs(b - a), 1)),
                (i = (A - s) / Math.max(Math.abs(A - s), 1)),
                0 !== l && 0 !== i)
              )
                k.isWalkableAt(b, A + i) && W.push([b, A + i]),
                  k.isWalkableAt(b + l, A) && W.push([b + l, A]),
                  k.isWalkableAt(b, A + i) &&
                    k.isWalkableAt(b + l, A) &&
                    W.push([b + l, A + i]);
              else if (0 !== l) {
                n = k.isWalkableAt(b + l, A);
                var f = k.isWalkableAt(b, A + 1),
                  c = k.isWalkableAt(b, A - 1);
                n &&
                  (W.push([b + l, A]),
                  f && W.push([b + l, A + 1]),
                  c && W.push([b + l, A - 1])),
                  f && W.push([b, A + 1]),
                  c && W.push([b, A - 1]);
              } else if (0 !== i) {
                n = k.isWalkableAt(b, A + i);
                var d = k.isWalkableAt(b + 1, A),
                  m = k.isWalkableAt(b - 1, A);
                n &&
                  (W.push([b, A + i]),
                  d && W.push([b + 1, A + i]),
                  m && W.push([b - 1, A + i])),
                  d && W.push([b + 1, A]),
                  m && W.push([b - 1, A]);
              }
            } else
              for (
                h = 0,
                  p = (r = k.getNeighbors(e, t.OnlyWhenNoObstacles)).length;
                h < p;
                ++h
              )
                (u = r[h]), W.push([u.x, u.y]);
            return W;
          }),
          (module.exports = a);
      },
      { "./JumpPointFinderBase": "DVK8", "../core/DiagonalMovement": "WdVX" },
    ],
    iNYD: [
      function (require, module, exports) {
        var t = require("./JumpPointFinderBase"),
          a = require("../core/DiagonalMovement");
        function e(a) {
          t.call(this, a);
        }
        (e.prototype = new t()),
          (e.prototype.constructor = e),
          (e.prototype._jump = function (t, a, e, l) {
            var s = this.grid,
              i = t - e,
              r = a - l;
            if (!s.isWalkableAt(t, a)) return null;
            if (
              (!0 === this.trackJumpRecursion &&
                (s.getNodeAt(t, a).tested = !0),
              s.getNodeAt(t, a) === this.endNode)
            )
              return [t, a];
            if (0 !== i && 0 !== r) {
              if (
                (s.isWalkableAt(t - i, a + r) && !s.isWalkableAt(t - i, a)) ||
                (s.isWalkableAt(t + i, a - r) && !s.isWalkableAt(t, a - r))
              )
                return [t, a];
              if (this._jump(t + i, a, t, a) || this._jump(t, a + r, t, a))
                return [t, a];
            } else if (0 !== i) {
              if (
                (s.isWalkableAt(t + i, a + 1) && !s.isWalkableAt(t, a + 1)) ||
                (s.isWalkableAt(t + i, a - 1) && !s.isWalkableAt(t, a - 1))
              )
                return [t, a];
            } else if (
              (s.isWalkableAt(t + 1, a + r) && !s.isWalkableAt(t + 1, a)) ||
              (s.isWalkableAt(t - 1, a + r) && !s.isWalkableAt(t - 1, a))
            )
              return [t, a];
            return s.isWalkableAt(t + i, a) || s.isWalkableAt(t, a + r)
              ? this._jump(t + i, a + r, t, a)
              : null;
          }),
          (e.prototype._findNeighbors = function (t) {
            var e,
              l,
              s,
              i,
              r,
              u,
              b,
              A,
              k = t.parent,
              W = t.x,
              n = t.y,
              p = this.grid,
              h = [];
            if (k)
              (e = k.x),
                (l = k.y),
                (s = (W - e) / Math.max(Math.abs(W - e), 1)),
                (i = (n - l) / Math.max(Math.abs(n - l), 1)),
                0 !== s && 0 !== i
                  ? (p.isWalkableAt(W, n + i) && h.push([W, n + i]),
                    p.isWalkableAt(W + s, n) && h.push([W + s, n]),
                    (p.isWalkableAt(W, n + i) || p.isWalkableAt(W + s, n)) &&
                      h.push([W + s, n + i]),
                    !p.isWalkableAt(W - s, n) &&
                      p.isWalkableAt(W, n + i) &&
                      h.push([W - s, n + i]),
                    !p.isWalkableAt(W, n - i) &&
                      p.isWalkableAt(W + s, n) &&
                      h.push([W + s, n - i]))
                  : 0 === s
                  ? p.isWalkableAt(W, n + i) &&
                    (h.push([W, n + i]),
                    p.isWalkableAt(W + 1, n) || h.push([W + 1, n + i]),
                    p.isWalkableAt(W - 1, n) || h.push([W - 1, n + i]))
                  : p.isWalkableAt(W + s, n) &&
                    (h.push([W + s, n]),
                    p.isWalkableAt(W, n + 1) || h.push([W + s, n + 1]),
                    p.isWalkableAt(W, n - 1) || h.push([W + s, n - 1]));
            else
              for (
                b = 0,
                  A = (r = p.getNeighbors(t, a.IfAtMostOneObstacle)).length;
                b < A;
                ++b
              )
                (u = r[b]), h.push([u.x, u.y]);
            return h;
          }),
          (module.exports = e);
      },
      { "./JumpPointFinderBase": "DVK8", "../core/DiagonalMovement": "WdVX" },
    ],
    ao7B: [
      function (require, module, exports) {
        var e = require("../core/DiagonalMovement"),
          o = require("./JPFNeverMoveDiagonally"),
          a = require("./JPFAlwaysMoveDiagonally"),
          n = require("./JPFMoveDiagonallyIfNoObstacles"),
          l = require("./JPFMoveDiagonallyIfAtMostOneObstacle");
        function r(r) {
          return (r = r || {}).diagonalMovement === e.Never
            ? new o(r)
            : r.diagonalMovement === e.Always
            ? new a(r)
            : r.diagonalMovement === e.OnlyWhenNoObstacles
            ? new n(r)
            : new l(r);
        }
        module.exports = r;
      },
      {
        "../core/DiagonalMovement": "WdVX",
        "./JPFNeverMoveDiagonally": "MqXc",
        "./JPFAlwaysMoveDiagonally": "PtLR",
        "./JPFMoveDiagonallyIfNoObstacles": "LLTW",
        "./JPFMoveDiagonallyIfAtMostOneObstacle": "iNYD",
      },
    ],
    wwQQ: [
      function (require, module, exports) {
        module.exports = {
          Heap: require("heap"),
          Node: require("./core/Node"),
          Grid: require("./core/Grid"),
          Util: require("./core/Util"),
          DiagonalMovement: require("./core/DiagonalMovement"),
          Heuristic: require("./core/Heuristic"),
          AStarFinder: require("./finders/AStarFinder"),
          BestFirstFinder: require("./finders/BestFirstFinder"),
          BreadthFirstFinder: require("./finders/BreadthFirstFinder"),
          DijkstraFinder: require("./finders/DijkstraFinder"),
          BiAStarFinder: require("./finders/BiAStarFinder"),
          BiBestFirstFinder: require("./finders/BiBestFirstFinder"),
          BiBreadthFirstFinder: require("./finders/BiBreadthFirstFinder"),
          BiDijkstraFinder: require("./finders/BiDijkstraFinder"),
          IDAStarFinder: require("./finders/IDAStarFinder"),
          JumpPointFinder: require("./finders/JumpPointFinder"),
        };
      },
      {
        heap: "tAIw",
        "./core/Node": "m2LD",
        "./core/Grid": "vMCg",
        "./core/Util": "ez0E",
        "./core/DiagonalMovement": "WdVX",
        "./core/Heuristic": "hqcn",
        "./finders/AStarFinder": "w8qd",
        "./finders/BestFirstFinder": "ruAP",
        "./finders/BreadthFirstFinder": "yTUG",
        "./finders/DijkstraFinder": "ivAt",
        "./finders/BiAStarFinder": "X1Ev",
        "./finders/BiBestFirstFinder": "N9Fd",
        "./finders/BiBreadthFirstFinder": "mBIn",
        "./finders/BiDijkstraFinder": "WN2S",
        "./finders/IDAStarFinder": "LiPS",
        "./finders/JumpPointFinder": "ao7B",
      },
    ],
    VWUg: [
      function (require, module, exports) {
        module.exports = require("./src/PathFinding");
      },
      { "./src/PathFinding": "wwQQ" },
    ],
    pDJl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.manhattanDistance = p),
          (exports.Level = exports.CharacterAlignment = exports.CellType = void 0);
        var e = require("excalibur"),
          t = require("./character"),
          r = require("pathfinding"),
          n = require("./resources"),
          o = require("./index");
        function i(e) {
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var a,
          s,
          l = (function () {
            var e = function (t, r) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                })(t, r);
            };
            return function (t, r) {
              function n() {
                this.constructor = t;
              }
              e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            };
          })(),
          u = function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++)
              e += arguments[t].length;
            var n = Array(e),
              o = 0;
            for (t = 0; t < r; t++)
              for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
                n[o] = i[a];
            return n;
          };
        (exports.CellType = s),
          (function (e) {
            (e[(e.WALL = 0)] = "WALL"),
              (e[(e.FLOOR = 1)] = "FLOOR"),
              (e[(e.STAIR = 2)] = "STAIR"),
              (e[(e.NONE = 3)] = "NONE");
          })(s || (exports.CellType = s = {}));
        var c,
          h =
            (((a = {})[s.WALL] = { solid: !0 }),
            (a[s.FLOOR] = { solid: !1 }),
            (a[s.STAIR] = { solid: !1 }),
            (a[s.NONE] = { solid: !0 }),
            a);
        function p(e, t) {
          return Math.abs(e.x - t.x) + Math.abs(e.y - t.y);
        }
        (exports.CharacterAlignment = c),
          (function (e) {
            (e[(e.PLAYER = 0)] = "PLAYER"), (e[(e.ENEMY = 1)] = "ENEMY");
          })(c || (exports.CharacterAlignment = c = {}));
        var d = (function (a) {
          function d(l, u, y, v, f) {
            var T = a.call(this, l) || this;
            return (
              (T.enemies = []),
              (T.players = []),
              (T.moveOverlay = []),
              (T.attackOverlay = []),
              (T.launchTutorial = function () {
                T.add(T.createSkipTutorialButton());
                var t = T.players.slice().sort(function (e, t) {
                  return e.pos.y - t.pos.y;
                })[0].pos;
                T.camera.pos = t.clone();
                var r = T.enemies.slice().sort(function (e, r) {
                  return p(e.pos, t) - p(e.pos, t);
                })[0].pos;
                T.showTutorialOverlay(
                  ["Use the WASD keys to pan the camera"],
                  t,
                  function () {
                    T.showTutorialOverlay(
                      [
                        "Your characters have green healthbars",
                        "Hover over characters to see their stats",
                      ],
                      t,
                      function () {
                        T.showTutorialOverlay(
                          ["Enemy characters have red healthbars"],
                          r,
                          function () {
                            T.showTutorialOverlay(
                              [
                                "Click on a player to see possible moves they can make",
                                "",
                                "Red squares highlight enemies you can attack this turn",
                                "Orange and blue squares highlight places you can move to",
                                "If you move to a blue square you will still be able to attack afterwards",
                              ],
                              t,
                              function () {
                                T.showTutorialOverlay(
                                  [
                                    "If a character does nothing for a turn they heal",
                                  ],
                                  t,
                                  function () {
                                    T.showTutorialOverlay(
                                      ["Click this button to end your turn"],
                                      T.camera.pos.add((0, e.vec)(270, 220)),
                                      function () {
                                        T.showTutorialOverlay(
                                          [
                                            "Get to these stairs to move down to the next level",
                                            "Have fun!",
                                          ],
                                          T.tileToPixelCoords(T.stairLocation),
                                          function () {
                                            (T.camera.pos = t.clone()),
                                              T.endTutorial();
                                          }
                                        );
                                      },
                                      !1
                                    );
                                  }
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }),
              (T.onClick = function (t) {
                T.playerTurn &&
                  T.characters.find(function (e) {
                    return e.contains(t.pos.x, t.pos.y);
                  }) &&
                  (t.button, e.Input.PointerButton.Right);
              }),
              (T.generateTextOverlay = function (t, r) {
                var n = (d.TILE_SIZE * t.length) / 2 + 5,
                  o = t.map(function (t, r) {
                    return new e.Label({
                      text: t,
                      color: e.Color.White,
                      x: 2,
                      y: 15 * (r + 1) - n / 2,
                    });
                  }),
                  i =
                    o
                      .map(function (e) {
                        return e.getTextWidth(T.engine.ctx);
                      })
                      .sort(function (e, t) {
                        return e - t;
                      })
                      .pop() + 4;
                o.forEach(function (e) {
                  return (e.pos.x -= i / 2);
                });
                var a = new e.Actor({
                    x: r.x,
                    y: r.y,
                    width: i + 2,
                    height: n + 2,
                    color: e.Color.White,
                  }),
                  s = new e.Actor({
                    x: 0,
                    y: 0,
                    width: i + 1,
                    height: n,
                    color: e.Color.Black,
                  });
                return (
                  o.forEach(function (e) {
                    return s.add(e);
                  }),
                  a.add(s),
                  a
                );
              }),
              (T.moveCharacter = function (e, t, r) {
                console.log("moving character " + r.id);
                var n = T.pathfind(e, t).map(T.tileToPixelCoords);
                return (
                  (T.map_data[e.x][e.y].character = void 0),
                  (T.map_data[t.x][t.y].character = r),
                  r.goTo(n).then(function () {
                    if (r.controllable && T.terrain_data[t.x][t.y] == s.STAIR) {
                      console.log("Exit Level!");
                      var e = (0, o.generateLevel)(
                        T.engine,
                        T.depth + 1,
                        T.players.map(function (e) {
                          return { class: e.cClass, exp: e.exp };
                        })
                      );
                      T.goToLevel(e);
                    }
                  })
                );
              }),
              (T.tileToPixelCoords = function (t) {
                return t
                  .sub((0, e.vec)(T.tilemap.x, T.tilemap.y))
                  .scale(d.TILE_SIZE)
                  .add(e.Vector.One.scale(d.TILE_SIZE / 2));
              }),
              (T.spawnCharacter = function (e) {
                var r,
                  o,
                  i = T.tileToPixelCoords(e.spawnTile);
                switch (e.alignment) {
                  case c.PLAYER:
                    r = new t.Player(i, e.class, e.exp);
                    break;
                  case c.ENEMY:
                    r = new t.Enemy(i, e.class, e.exp);
                }
                return (
                  r.controllable
                    ? (r.on("pointerup", function () {
                        T.selectedPlayer && T.selectedPlayer.id == r.id
                          ? (T.deselectPlayer(),
                            n.MusicResources.Deselect.play())
                          : (T.selectedPlayer && T.deselectPlayer(),
                            T.selectPlayer(r),
                            T.statOverlay && T.createStatOverlay(r));
                      }),
                      T.players.push(r))
                    : T.enemies.push(r),
                  (r.onPostUpdate = function () {
                    !o &&
                      T.engine.input.pointers.primary.checkActorUnderPointer(
                        r
                      ) &&
                      (T.createStatOverlay(r), (o = T.statOverlay)),
                      o &&
                        !T.engine.input.pointers.primary.checkActorUnderPointer(
                          r
                        ) &&
                        (T.statOverlay && T.statOverlay.kill(),
                        (T.statOverlay = void 0),
                        (o = void 0));
                  }),
                  (T.map_data[e.spawnTile.x][e.spawnTile.y].character = r),
                  r
                );
              }),
              (T.selectPlayer = function (e) {
                n.MusicResources.Select.play(),
                  T.generateOverlay(e),
                  (T.selectedPlayer = e);
              }),
              (T.getPossibleMoves = function (e, t) {
                var r = T.pixelToTileCoords(e.pos),
                  n = e.cClass.attack.range,
                  o = T.getTilesWithinDist(
                    r,
                    (e.moveExhausted.inner ? 0 : e.cClass.moveRange.inner) +
                      (e.moveExhausted.outer ? 0 : e.cClass.moveRange.outer)
                  ),
                  i = [];
                e.moveExhausted.inner ||
                  (i = T.getTilesWithinDist(r, e.cClass.moveRange.inner)),
                  e.moveExhausted.outer || i.push(r);
                var a = [];
                return (
                  e.moveExhausted.outer ||
                    t
                      .map(function (e) {
                        return {
                          enemy: e,
                          enemyPos: T.pixelToTileCoords(e.pos),
                        };
                      })
                      .filter(function (e) {
                        var t = e.enemyPos;
                        return i.some(function (e) {
                          return p(t, e) <= n;
                        });
                      })
                      .forEach(function (e) {
                        return a.push(e);
                      }),
                  { innerMoves: i, allMoves: o, attackableEnemies: a }
                );
              }),
              (T.attack = function (t, r) {
                if (
                  (t.setDrawing("atk"),
                  (t.currentDrawing.flipHorizontal = r.pos.x < t.pos.x),
                  setTimeout(function () {
                    t.setDrawing("idle");
                  }, 1e3),
                  r.damage(t.cClass.attack))
                ) {
                  var n = t.gainExp(r.cClass.deathExp());
                  if (n) {
                    var o = T.generateTextOverlay(
                      n,
                      t.pos.add((0, e.vec)(2.75 * d.TILE_SIZE, 0))
                    );
                    T.engine.add(o),
                      o.on("pointerdown", function (e) {
                        o.kill();
                      });
                  }
                  var i = T.pixelToTileCoords(r.pos);
                  (T.players = T.players.filter(function (e) {
                    return e.id != r.id;
                  })),
                    (T.enemies = T.enemies.filter(function (e) {
                      return e.id != r.id;
                    })),
                    (T.map_data[i.x][i.y].character = void 0),
                    T.players.length <= 0 &&
                      (console.log("Game over!"), T.gameOver());
                }
                t.spendAttack(),
                  console.log(
                    t.id +
                      " attacking " +
                      r.id +
                      " at " +
                      T.pixelToTileCoords(r.pos) +
                      ", its health is now " +
                      r.health
                  );
              }),
              (T.moveToThenAttack = function (e, t, r, n) {
                var o = T.pixelToTileCoords(e.pos),
                  i = T.getAttackStagingPoint(o, r, e, n);
                return T.moveCharacter(o, i, e).then(function () {
                  return T.attack(e, t);
                });
              }),
              (T.generateOverlay = function (t) {
                var r = T.getPossibleMoves(t, T.enemies);
                (T.moveOverlay = r.allMoves.map(function (n) {
                  var o,
                    i = T.tileToPixelCoords(n),
                    a = new e.Actor({
                      x: i.x + 2,
                      y: i.y + 2,
                      width: d.TILE_SIZE - 4,
                      height: d.TILE_SIZE - 4,
                      color:
                        ((o = n),
                        r.innerMoves.some(function (e) {
                          return e.equals(o);
                        })
                          ? e.Color.Blue
                          : e.Color.Orange),
                      opacity: 0.5,
                    });
                  return (
                    a.on("pointerdown", function (t) {
                      if (
                        t.button == e.Input.PointerButton.Left &&
                        T.selectedPlayer &&
                        T.selectedPlayer.controllable
                      ) {
                        var r = T.pixelToTileCoords(T.selectedPlayer.pos);
                        T.moveCharacter(r, n, T.selectedPlayer),
                          T.deselectPlayer();
                      }
                    }),
                    (a.onPostDraw = function (r, o) {
                      if (
                        T.engine.input.pointers.primary.isActorAliveUnderPointer(
                          a
                        )
                      )
                        for (
                          var i = T.pixelToTileCoords(t.pos),
                            s = T.pathfind(i, n)
                              .map(T.tileToPixelCoords)
                              .map(function (e) {
                                return e.sub(a.pos);
                              }),
                            l = 0;
                          l < s.length - 1;
                          l++
                        )
                          e.Util.DrawUtil.line(
                            r,
                            e.Color.White,
                            s[l].x,
                            s[l].y,
                            s[l + 1].x,
                            s[l + 1].y,
                            5
                          );
                    }),
                    T.add(a),
                    a
                  );
                })),
                  (T.attackOverlay = r.attackableEnemies.map(function (n) {
                    var o = n.enemy,
                      i = n.enemyPos,
                      a = T.tileToPixelCoords(i),
                      s = new e.Actor({
                        x: a.x + 2,
                        y: a.y + 2,
                        width: d.TILE_SIZE - 4,
                        height: d.TILE_SIZE - 4,
                        color: e.Color.Red,
                        opacity: 0.5,
                      });
                    return (
                      s.on("pointerdown", function (t) {
                        t.button == e.Input.PointerButton.Left &&
                          T.selectedPlayer &&
                          T.selectedPlayer.controllable &&
                          (T.moveToThenAttack(
                            T.selectedPlayer,
                            o,
                            i,
                            r.innerMoves
                          ),
                          T.deselectPlayer());
                      }),
                      (s.onPostDraw = function (n, o) {
                        if (
                          T.engine.input.pointers.primary.isActorAliveUnderPointer(
                            s
                          )
                        )
                          for (
                            var a = T.pixelToTileCoords(t.pos),
                              l = T.getAttackStagingPoint(
                                a,
                                i,
                                t,
                                r.innerMoves
                              ),
                              u = T.pathfind(a, l)
                                .map(T.tileToPixelCoords)
                                .map(function (e) {
                                  return e.sub(s.pos);
                                }),
                              c = 0;
                            c < u.length - 1;
                            c++
                          )
                            e.Util.DrawUtil.line(
                              n,
                              e.Color.White,
                              u[c].x,
                              u[c].y,
                              u[c + 1].x,
                              u[c + 1].y,
                              5
                            );
                      }),
                      T.add(s),
                      s
                    );
                  }));
              }),
              (T.getTilesWithinDist = function (t, r) {
                if (r <= 0) return [];
                var n = new Array(),
                  o = new Array(),
                  i = [
                    e.Vector.Up,
                    e.Vector.Down,
                    e.Vector.Left,
                    e.Vector.Right,
                  ];
                o.push({ point: t, dist: r });
                for (
                  var a = function () {
                    var e = o.shift();
                    if ((n.push(e), 0 == e.dist)) return "continue";
                    i.map(function (t) {
                      return e.point.add(t);
                    })
                      .filter(function (e) {
                        return (
                          !h[T.terrain_data[e.x][e.y]].solid &&
                          !T.map_data[e.x][e.y].character
                        );
                      })
                      .filter(function (e) {
                        return !n.some(function (t) {
                          return t.point.equals(e);
                        });
                      })
                      .filter(function (e) {
                        return !o.some(function (t) {
                          return t.point.equals(e);
                        });
                      })
                      .forEach(function (t) {
                        o.push({ point: t, dist: e.dist - 1 });
                      });
                  };
                  o.length > 0;

                )
                  a();
                return (
                  n.shift(),
                  n.map(function (e) {
                    return e.point;
                  })
                );
              }),
              (T.deselectPlayer = function () {
                T.moveOverlay.forEach(function (e) {
                  e.off("pointerdown"), (e.enableCapturePointer = !1), e.kill();
                }),
                  (T.moveOverlay = []),
                  T.attackOverlay.forEach(function (e) {
                    e.off("pointerdown"),
                      (e.enableCapturePointer = !1),
                      e.kill();
                  }),
                  (T.attackOverlay = []),
                  (T.selectedPlayer = void 0);
              }),
              (T.nextTurnButtonClick = function (e) {
                var t = e;
                console.log("next turn button clicked!"),
                  T.nextTurnButton.contains(t.screenPos.x, t.screenPos.y) &&
                    T.nextTurn();
              }),
              (T.nextTurn = function () {
                var e, t;
                T.playerTurn && T.deselectPlayer(),
                  (T.playerTurn = !T.playerTurn),
                  console.log(
                    "next turn: " + (T.playerTurn ? "player" : "enemy")
                  ),
                  T.playerTurn
                    ? (T.players.forEach(function (e) {
                        return e.nextTurn();
                      }),
                      (T.nextTurnButton.visible = !0),
                      T.nextTurnButton.on("pointerdown", T.nextTurnButtonClick),
                      null === (e = T.playerPhaseIndicator) ||
                        void 0 === e ||
                        e.actions.fade(1, 500).fade(0.001, 500))
                    : ((T.nextTurnButton.visible = !1),
                      T.nextTurnButton.off("pointerdown"),
                      T.enemyTurn(),
                      T.enemies.forEach(function (e) {
                        return e.nextTurn();
                      }),
                      null === (t = T.enemyPhaseIndicator) ||
                        void 0 === t ||
                        t.actions.fade(1, 500).fade(0.001, 500)),
                  console.log(T.enemyPhaseIndicator, T.playerPhaseIndicator),
                  console.log("finshed nextTurn function");
              }),
              (T.enemyTurn = function () {
                var e = 0,
                  t = T.enemies.slice().filter(function (e) {
                    return T.players.some(function (t) {
                      return p(t.pos, e.pos) < 10 * d.TILE_SIZE;
                    });
                  });
                console.log("moving " + t.length + " this turn");
                !(function r() {
                  console.log("moving enemy #" + (e + 1)),
                    e < t.length
                      ? (T.calculateEnemyMove(t[e]).then(r), e++)
                      : T.nextTurn();
                })();
              }),
              (T.calculateEnemyMove = function (e) {
                var t = T.pixelToTileCoords(e.pos),
                  r = T.getPossibleMoves(e, T.players),
                  n = r.innerMoves,
                  o = r.allMoves,
                  a = r.attackableEnemies;
                if (a.length > 0) {
                  var s = a.sort(function (e, r) {
                    return p(e.enemyPos, t) - p(r.enemyPos, t);
                  })[0];
                  return T.moveToThenAttack(e, s.enemy, s.enemyPos, n);
                }
                var l = T.players.map(function (e) {
                  return { player: e, playerPos: T.pixelToTileCoords(e.pos) };
                });
                l.sort(function (e, r) {
                  return p(e.playerPos, t) - p(r.playerPos, t);
                });
                for (
                  var u = function (r) {
                      if (
                        (o.sort(function (e, t) {
                          return p(e, r.playerPos) - p(t, r.playerPos);
                        }),
                        o[0])
                      ) {
                        var n = T.pathfind(t, o[0])[
                          e.cClass.moveRange.inner + e.cClass.moveRange.outer
                        ];
                        if (n) return { value: T.moveCharacter(t, n, e) };
                      }
                    },
                    c = 0,
                    h = l;
                  c < h.length;
                  c++
                ) {
                  var d = u((s = h[c]));
                  if ("object" === i(d)) return d.value;
                }
                return T.moveCharacter(t, t, e);
              }),
              (T.depth = v),
              (T.level_depth_label = new e.Label()),
              (T.level_depth_label.fontSize = 25),
              (T.level_depth_label.color = e.Color.White),
              (T.level_depth_label.pos = new e.Vector(15, 40)),
              (T.level_depth_label.text = "Depth: " + v),
              (T.stairLocation = f),
              (l.backgroundColor = e.Color.Black),
              (T.terrain_data = u),
              (T.tilemap = new e.TileMap(
                0,
                0,
                d.TILE_SIZE,
                d.TILE_SIZE,
                u.length,
                u[0].length
              )),
              (T.map_data = new Array(T.terrain_data.length)
                .fill(null)
                .map(function () {
                  return Array.from(
                    { length: T.terrain_data[0].length },
                    function () {
                      return { character: void 0 };
                    }
                  );
                })),
              (T.tilesheet = new e.SpriteSheet({
                image: n.Resources.TileTexture,
                spWidth: d.TILE_SIZE,
                spHeight: d.TILE_SIZE,
                rows: n.Resources.TileTexture.height / d.TILE_SIZE,
                columns: n.Resources.TileTexture.width / d.TILE_SIZE,
              })),
              T.tilemap.registerSpriteSheet("tile", T.tilesheet),
              y.forEach(T.spawnCharacter),
              (T.engine = l),
              (T.path_finder = new r.AStarFinder()),
              (T.playerTurn = !0),
              T
            );
          }
          return (
            l(d, a),
            (d.prototype.showTutorialOverlay = function (t, r, n, o) {
              var i, a;
              void 0 === o && (o = !0),
                this.tutorialOverlay &&
                  (null === (i = this.tutorialOverlay) ||
                    void 0 === i ||
                    i.off("pointerdown"),
                  null === (a = this.tutorialOverlay) ||
                    void 0 === a ||
                    a.kill()),
                (this.tutorialOverlay = this.generateTextOverlay(
                  u(t, ["", "Click on this box to continue"]),
                  r.clone()
                )),
                this.tutorialOverlay.pos.subEqual(
                  (0, e.vec)(0, this.tutorialOverlay.height)
                ),
                this.tutorialOverlay.on("pointerdown", n),
                this.add(this.tutorialOverlay),
                o && (this.camera.pos = r.clone());
            }),
            (d.prototype.createSkipTutorialButton = function () {
              var t = this;
              this.skipTutorialButton = new e.ScreenElement({
                x: 10,
                y: this.engine.drawHeight - 40,
                width: n.Resources.SkipTutorialTexture.width,
                height: 30,
              });
              var r = new e.SpriteSheet(
                n.Resources.SkipTutorialTexture,
                1,
                2,
                n.Resources.SkipTutorialTexture.width,
                30
              );
              return (
                this.skipTutorialButton.addDrawing("normal", r.getSprite(0)),
                this.skipTutorialButton.addDrawing("hovered", r.getSprite(1)),
                this.skipTutorialButton.setDrawing("normal"),
                this.skipTutorialButton.on("pointerenter", function () {
                  var e;
                  null === (e = t.skipTutorialButton) ||
                    void 0 === e ||
                    e.setDrawing("hovered");
                }),
                this.skipTutorialButton.on("pointerleave", function () {
                  var e;
                  null === (e = t.skipTutorialButton) ||
                    void 0 === e ||
                    e.setDrawing("normal");
                }),
                this.skipTutorialButton.on("pointerdown", function () {
                  t.tutorialOverlay && t.endTutorial();
                }),
                this.skipTutorialButton
              );
            }),
            (d.prototype.endTutorial = function () {
              var e, t, r, n, o;
              null === (e = this.tutorialOverlay) ||
                void 0 === e ||
                e.off("pointerdown"),
                null === (t = this.tutorialOverlay) || void 0 === t || t.kill(),
                null === (r = this.skipTutorialButton) ||
                  void 0 === r ||
                  r.off("pointerdown"),
                null === (n = this.skipTutorialButton) ||
                  void 0 === n ||
                  n.kill(),
                this.playerTurn &&
                  (null === (o = this.playerPhaseIndicator) ||
                    void 0 === o ||
                    o.actions.fade(1, 500).fade(0.001, 500));
            }),
            Object.defineProperty(d.prototype, "characters", {
              get: function () {
                return u(this.enemies, this.players);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (d.prototype.onInitialize = function (t) {
              var r = this,
                o = new e.ScreenElement({ x: 0, y: 0 });
              o.add(this.level_depth_label),
                t.add(o),
                t.add(this.tilemap),
                (this.cursor = new e.Actor({
                  x: 0,
                  y: 0,
                  width: n.Resources.Cursor.width,
                  height: n.Resources.Cursor.height,
                })),
                this.cursor.addDrawing(n.Resources.Cursor.asSprite()),
                (this.cursor.visible = !1),
                this.add(this.cursor),
                this.characters.forEach(function (e) {
                  t.add(e);
                }),
                this.syncTerrainData(),
                (this.nextTurnButton = new e.ScreenElement({
                  x: t.drawWidth - 100,
                  y: t.drawHeight - 40,
                  width: 90,
                  height: 30,
                }));
              var i = new e.SpriteSheet(
                n.Resources.NextTurnTexture,
                1,
                2,
                90,
                30
              );
              this.nextTurnButton.addDrawing("normal", i.getSprite(0)),
                this.nextTurnButton.addDrawing("hovered", i.getSprite(1)),
                this.nextTurnButton.setDrawing("normal"),
                this.nextTurnButton.on("pointerenter", function () {
                  var e;
                  null === (e = r.nextTurnButton) ||
                    void 0 === e ||
                    e.setDrawing("hovered");
                }),
                this.nextTurnButton.on("pointerleave", function () {
                  var e;
                  null === (e = r.nextTurnButton) ||
                    void 0 === e ||
                    e.setDrawing("normal");
                }),
                this.nextTurnButton.on("pointerdown", this.nextTurnButtonClick),
                this.add(this.nextTurnButton),
                this.engine.input.pointers.primary.on("down", this.onClick),
                this.engine.input.keyboard.on("press", function (t) {
                  switch (t.key) {
                    case e.Input.Keys.A:
                      r.camera.vel.x = -d.CAMERA_SPEED;
                      break;
                    case e.Input.Keys.D:
                      r.camera.vel.x = d.CAMERA_SPEED;
                      break;
                    case e.Input.Keys.W:
                      r.camera.vel.y = -d.CAMERA_SPEED;
                      break;
                    case e.Input.Keys.S:
                      r.camera.vel.y = d.CAMERA_SPEED;
                  }
                }),
                this.engine.input.keyboard.on("release", function (t) {
                  switch (t.key) {
                    case e.Input.Keys.A:
                    case e.Input.Keys.D:
                      r.camera.vel.x = 0;
                      break;
                    case e.Input.Keys.W:
                    case e.Input.Keys.S:
                      r.camera.vel.y = 0;
                  }
                }),
                1 == this.depth && this.launchTutorial(),
                n.MusicResources.DarkHollows.isPlaying() ||
                  ((n.MusicResources.DarkHollows.loop = !0),
                  n.MusicResources.DarkHollows.play()),
                console.log("about to add indicators"),
                (this.playerPhaseIndicator = new e.ScreenElement({
                  x: 0,
                  y: 240 - n.Resources.PlayerPhase.height / 2,
                  width: n.Resources.PlayerPhase.width,
                  height: n.Resources.PlayerPhase.height,
                })),
                this.playerPhaseIndicator.addDrawing(n.Resources.PlayerPhase),
                this.add(this.playerPhaseIndicator),
                (this.playerPhaseIndicator.opacity = 0.001),
                (this.enemyPhaseIndicator = new e.ScreenElement({
                  x: 0,
                  y: 240 - n.Resources.EnemyPhase.height / 2,
                  width: n.Resources.EnemyPhase.width,
                  height: n.Resources.EnemyPhase.height,
                })),
                this.enemyPhaseIndicator.addDrawing(n.Resources.EnemyPhase),
                this.add(this.enemyPhaseIndicator),
                (this.enemyPhaseIndicator.opacity = 0.001),
                console.log(
                  "initalize over",
                  this.playerPhaseIndicator,
                  this.enemyPhaseIndicator
                );
            }),
            (d.prototype.onPostUpdate = function () {
              var e = this.pixelToTileCoords(
                this.engine.input.pointers.primary.lastWorldPos
              );
              this.cursor &&
              this.terrain_data[e.x] &&
              this.terrain_data[e.x][e.y]
                ? ((this.cursor.visible = !0),
                  (this.cursor.pos = this.tileToPixelCoords(e)))
                : this.cursor && (this.cursor.visible = !1);
            }),
            (d.prototype.syncTerrainData = function () {
              var t = this;
              this.tilemap.data.forEach(function (r, n) {
                r.clearSprites();
                var o = Math.floor(n / t.tilemap.cols),
                  i = n % t.tilemap.cols;
                switch (t.terrain_data[i][o]) {
                  case s.WALL:
                    r.solid = h[s.WALL].solid;
                    var a = 0;
                    t.terrain_data[i][o + 1] &&
                      t.terrain_data[i][o + 1] == s.FLOOR &&
                      (a = 1),
                      r.pushSprite(new e.TileSprite("tile", a));
                    break;
                  case s.FLOOR:
                    r.solid = h[s.FLOOR].solid;
                    var l = [2, 4, 5, 6, 7, 8];
                    (a = l[Math.floor(Math.random() * l.length)]),
                      r.pushSprite(new e.TileSprite("tile", a));
                    break;
                  case s.STAIR:
                    (r.solid = h[s.STAIR].solid),
                      r.pushSprite(new e.TileSprite("tile", 3));
                    break;
                  case s.NONE:
                    (r.solid = h[s.NONE].solid),
                      r.pushSprite(new e.TileSprite("tile", 0));
                }
              });
            }),
            (d.prototype.goToLevel = function (e) {
              this.engine.input.pointers.primary.off("down", this.onClick),
                this.engine.add("test_level", e),
                this.engine.goToScene("test_level");
            }),
            (d.prototype.pathfind = function (t, n) {
              for (var o = [], i = 0; i < this.terrain_data.length; i++) {
                o.push([]);
                for (var a = 0; a < this.terrain_data[i].length; a++)
                  h[this.terrain_data[a][i]].solid ||
                  (this.map_data[a][i].character &&
                    (t.x != a || t.y != i) &&
                    (n.x != a || n.y != i))
                    ? o[i].push(1)
                    : o[i].push(0);
              }
              return this.path_finder
                .findPath(t.x, t.y, n.x, n.y, new r.Grid(o))
                .map(function (t) {
                  return new e.Vector(t[0], t[1]);
                });
            }),
            (d.prototype.pixelToTileCoords = function (t) {
              var r = t
                .scale(1 / d.TILE_SIZE)
                .add((0, e.vec)(this.tilemap.x, this.tilemap.y));
              return (0, e.vec)(Math.floor(r.x), Math.floor(r.y));
            }),
            (d.prototype.gameOver = function () {
              var t = this,
                r = new e.Loader();
              for (var i in n.GameOverResources)
                r.addResource(n.GameOverResources[i]);
              (r.suppressPlayButton = !0),
                (r.logo = ""),
                (r.backgroundColor = "black");
              var a = new e.Actor({ x: 360, y: 240, width: 720, height: 480 });
              a.addDrawing("title", n.GameOverResources.end.asSprite()),
                a.on("pointerdown", function () {
                  a.off("pointerdown"),
                    t.engine.add("level_1", (0, o.generateLevel)(t.engine, 1)),
                    t.engine.goToScene("level_1");
                });
              var s = new e.Label("Click Anywhere to Try Again");
              (s.fontSize = 20),
                (s.fontFamily = "serif"),
                (s.color = e.Color.White),
                (s.pos = (0, e.vec)(
                  360 - s.getTextWidth(this.engine.ctx) / 2,
                  450
                )),
                s.actions.blink(500, 500).repeatForever();
              var l = new e.Scene(this.engine);
              l.add(a),
                l.add(s),
                this.engine.start(r).then(function () {
                  t.goToLevel(l);
                });
            }),
            (d.prototype.getAttackStagingPoint = function (e, t, r, n) {
              var o = e;
              return (
                p(t, e) != r.cClass.attack.range &&
                  (o = n
                    .filter(function (e) {
                      return p(e, t) <= r.cClass.attack.range;
                    })
                    .sort(function (t, r) {
                      return p(t, e) - p(r, e);
                    })
                    .shift()),
                o
              );
            }),
            (d.prototype.createStatOverlay = function (t) {
              this.statOverlay && this.statOverlay.kill(),
                (this.statOverlay = this.generateTextOverlay(
                  t.getStats(),
                  t.pos.add((0, e.vec)(1.75 * d.TILE_SIZE, 0))
                )),
                this.add(this.statOverlay);
            }),
            (d.TILE_SIZE = 30),
            (d.CAMERA_SPEED = 200),
            d
          );
        })(e.Scene);
        exports.Level = d;
      },
      {
        excalibur: "jZN7",
        "./character": "T3UV",
        pathfinding: "VWUg",
        "./resources": "x5mp",
        "./index": "B6dB",
      },
    ],
    eV2W: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.getRandomInt = a),
          (exports.Dungeon = void 0);
        var t = require("excalibur"),
          e = require("./level"),
          n = function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var o = Array(t),
              r = 0;
            for (e = 0; e < n; e++)
              for (var i = arguments[e], l = 0, h = i.length; l < h; l++, r++)
                o[r] = i[l];
            return o;
          },
          o = 9,
          r = (function () {
            return function () {
              this.type = "any";
            };
          })(),
          i = (function () {
            return function () {
              this.type = "floor";
            };
          })(),
          l = (function () {
            return function () {
              this.type = "wall";
            };
          })(),
          h = (function () {
            return function (t) {
              (this.type = "connecter"), (this.width = t);
            };
          })();
        function a(t, e) {
          return Math.floor(Math.random() * (e - t + 1) + t);
        }
        function p(e, n, o) {
          for (var r = [], i = 0; i < n; i++)
            for (var l = 0; l < o; l++) r.push(new t.Vector(i, l));
          return new Array(e).fill(0).map(function () {
            return r.splice(a(0, r.length - 1), 1)[0];
          });
        }
        var c = (function () {
            function t(t, e, n, o) {
              (this.left = t),
                (this.top = e),
                (this.right = n),
                (this.bottom = o);
            }
            return (
              (t.prototype.asCell2dArray = function () {
                for (var t = [], n = 0; n < o; n++) {
                  t.push([]);
                  for (var r = 0; r < o; r++) t[n].push(e.CellType.WALL);
                }
                if ("connecter" === this.left.type)
                  for (
                    r = Math.ceil(o / 2 - this.left.width);
                    r < Math.floor(o / 2 + this.left.width);
                    r++
                  )
                    for (n = 0; n < o / 2; n++) t[n][r] = e.CellType.FLOOR;
                if ("connecter" === this.top.type)
                  for (
                    n = Math.ceil(o / 2 - this.top.width);
                    n < Math.floor(o / 2 + this.top.width);
                    n++
                  )
                    for (r = 0; r < o / 2; r++) t[n][r] = e.CellType.FLOOR;
                if ("connecter" === this.right.type)
                  for (
                    r = Math.ceil(o / 2 - this.right.width);
                    r < Math.floor(o / 2 + this.right.width);
                    r++
                  )
                    for (n = (o - 1) / 2; n < o; n++)
                      t[n][r] = e.CellType.FLOOR;
                if ("connecter" === this.bottom.type)
                  for (
                    n = Math.ceil(o / 2 - this.bottom.width);
                    n < Math.floor(o / 2 + this.bottom.width);
                    n++
                  )
                    for (r = (o - 1) / 2; r < o; r++)
                      t[n][r] = e.CellType.FLOOR;
                return t;
              }),
              t
            );
          })(),
          s = (function () {
            function t(t, e, n, o) {
              (this.finalRoom = !1),
                (this.left = t),
                (this.top = e),
                (this.right = n),
                (this.bottom = o);
            }
            return (
              (t.prototype.asCell2dArray = function () {
                var t = [];
                if (
                  "wall" === this.left.type &&
                  "wall" === this.top.type &&
                  "wall" === this.right.type &&
                  "wall" === this.bottom.type
                ) {
                  for (var n = 0; n < o; n++) {
                    t.push([]);
                    for (var r = 0; r < o; r++) t[n].push(e.CellType.WALL);
                  }
                  return t;
                }
                for (n = 0; n < o; n++) {
                  t.push([]);
                  for (r = 0; r < o; r++) t[n].push(e.CellType.FLOOR);
                }
                if ("wall" === this.left.type || "connecter" === this.left.type)
                  for (r = 0; r < o; r++) t[0][r] = e.CellType.WALL;
                if ("wall" === this.top.type || "connecter" === this.top.type)
                  for (n = 0; n < o; n++) t[n][0] = e.CellType.WALL;
                if (
                  "wall" === this.right.type ||
                  "connecter" === this.right.type
                )
                  for (r = 0; r < o; r++) t[o - 1][r] = e.CellType.WALL;
                if (
                  "wall" === this.bottom.type ||
                  "connecter" === this.bottom.type
                )
                  for (n = 0; n < o; n++) t[n][o - 1] = e.CellType.WALL;
                if ("connecter" === this.left.type)
                  for (
                    r = Math.ceil(o / 2 - this.left.width);
                    r < Math.floor(o / 2 + this.left.width);
                    r++
                  )
                    t[0][r] = e.CellType.FLOOR;
                if ("connecter" === this.top.type)
                  for (
                    n = Math.ceil(o / 2 - this.top.width);
                    n < Math.floor(o / 2 + this.top.width);
                    n++
                  )
                    t[n][0] = e.CellType.FLOOR;
                if ("connecter" === this.right.type)
                  for (
                    r = Math.ceil(o / 2 - this.right.width);
                    r < Math.floor(o / 2 + this.right.width);
                    r++
                  )
                    t[o - 1][r] = e.CellType.FLOOR;
                if ("connecter" === this.bottom.type)
                  for (
                    n = Math.ceil(o / 2 - this.bottom.width);
                    n < Math.floor(o / 2 + this.bottom.width);
                    n++
                  )
                    t[n][o - 1] = e.CellType.FLOOR;
                return (
                  this.finalRoom &&
                    (t[(o - 1) / 2][(o - 1) / 2] = e.CellType.STAIR),
                  t
                );
              }),
              t
            );
          })();
        function u(t, e) {
          var n = [new i(), new l(), new h(a(1, 2))];
          return "any" === t.type ? n[a(e ? 0 : 1, 2)] : t;
        }
        function f(t, e, n, o) {
          return [t, e, n, o].every(function (t) {
            return "floor" !== t.type;
          }) && Math.random() > 0.5
            ? new c(u(t), u(e), u(n), u(o))
            : new s(u(t, !0), u(e, !0), u(n, !0), u(o, !0));
        }
        var y = (function () {
            function t(t, e, n) {
              (this.parent_map = t), (this.x = e), (this.y = n);
            }
            return (
              (t.prototype.left = function () {
                try {
                  return this.parent_map[this.x - 1][this.y];
                } catch (t) {
                  return null;
                }
              }),
              (t.prototype.top = function () {
                try {
                  return this.parent_map[this.x][this.y - 1];
                } catch (t) {
                  return null;
                }
              }),
              (t.prototype.right = function () {
                try {
                  return this.parent_map[this.x + 1][this.y];
                } catch (t) {
                  return null;
                }
              }),
              (t.prototype.bottom = function () {
                try {
                  return this.parent_map[this.x][this.y + 1];
                } catch (t) {
                  return null;
                }
              }),
              t
            );
          })(),
          v = (function () {
            function t(t) {
              (this.map = []), (this.center = [t, t]);
              for (var e = 0; e < 2 * t + 1; e++) {
                this.map.push([]);
                for (var n = 0; n < 2 * t + 1; n++)
                  this.map[e].push(new y(this.map, e, n));
              }
            }
            return (
              (t.prototype.getCenterChunk = function () {
                return this.map[this.center[0]][this.center[1]];
              }),
              t
            );
          })(),
          d = (function () {
            function c(e) {
              var r = this;
              (this.getstairLocation = function () {
                return (0, t.vec)(r.next_level_chunk.y, r.next_level_chunk.x)
                  .scale(o)
                  .add(t.Vector.One.scale((o - 1) / 2));
              }),
                (this.map = new v(e)),
                (this.size = e),
                this.resolveMap(this.map.getCenterChunk());
              var i = n(
                this.getRoomChunksFromOuterLayer(0),
                this.getRoomChunksFromOuterLayer(1)
              );
              this.player_spawn_chunk = i.splice(a(0, i.length - 1), 1)[0];
              var l = new t.Vector(
                  this.player_spawn_chunk.x,
                  this.player_spawn_chunk.y
                ),
                h = i.sort(function (e, n) {
                  var o,
                    r,
                    i,
                    h,
                    a,
                    p,
                    c,
                    s,
                    u = new t.Vector(e.x, e.y).distance(l),
                    f = new t.Vector(n.x, n.y).distance(l),
                    y = 0,
                    v = 0;
                  return (
                    "floor" ===
                      (null === (o = e.connectable) || void 0 === o
                        ? void 0
                        : o.left.type) && (y -= 1),
                    "floor" ===
                      (null === (r = e.connectable) || void 0 === r
                        ? void 0
                        : r.top.type) && (y -= 1),
                    "floor" ===
                      (null === (i = e.connectable) || void 0 === i
                        ? void 0
                        : i.right.type) && (y -= 1),
                    "floor" ===
                      (null === (h = e.connectable) || void 0 === h
                        ? void 0
                        : h.bottom.type) && (y -= 1),
                    "floor" ===
                      (null === (a = n.connectable) || void 0 === a
                        ? void 0
                        : a.left.type) && (v -= 1),
                    "floor" ===
                      (null === (p = n.connectable) || void 0 === p
                        ? void 0
                        : p.top.type) && (v -= 1),
                    "floor" ===
                      (null === (c = n.connectable) || void 0 === c
                        ? void 0
                        : c.right.type) && (v -= 1),
                    "floor" ===
                      (null === (s = n.connectable) || void 0 === s
                        ? void 0
                        : s.bottom.type) && (v -= 1),
                    v + f - (y + u)
                  );
                });
              (this.next_level_chunk = h[0]),
                (this.next_level_chunk.connectable.finalRoom = !0);
            }
            return (
              (c.prototype.resolveMap = function (t) {
                var e,
                  n,
                  o,
                  p,
                  c,
                  u,
                  y,
                  v,
                  d = new Set(),
                  m = [new i(), new h(a(1, 2))];
                t.connectable = new s(
                  m[a(0, 1)],
                  m[a(0, 1)],
                  m[a(0, 1)],
                  m[a(0, 1)]
                );
                for (var w = [t]; w.length; ) {
                  var b = w.shift();
                  if (!d.has(b)) {
                    d.add(b);
                    var g = b.left(),
                      C = b.top(),
                      L = b.right(),
                      _ = b.bottom();
                    if (!b.connectable) {
                      var x = g
                          ? (null ===
                              (e = null == g ? void 0 : g.connectable) ||
                            void 0 === e
                              ? void 0
                              : e.right) || new r()
                          : new l(),
                        M = C
                          ? (null ===
                              (n = null == C ? void 0 : C.connectable) ||
                            void 0 === n
                              ? void 0
                              : n.bottom) || new r()
                          : new l(),
                        O = L
                          ? (null ===
                              (o = null == L ? void 0 : L.connectable) ||
                            void 0 === o
                              ? void 0
                              : o.left) || new r()
                          : new l(),
                        T = _
                          ? (null ===
                              (p = null == _ ? void 0 : _.connectable) ||
                            void 0 === p
                              ? void 0
                              : p.top) || new r()
                          : new l();
                      b.connectable = f(x, M, O, T);
                    }
                    g &&
                      "wall" !==
                        (null === (c = b.connectable) || void 0 === c
                          ? void 0
                          : c.left.type) &&
                      w.push(g),
                      C &&
                        "wall" !==
                          (null === (u = b.connectable) || void 0 === u
                            ? void 0
                            : u.top.type) &&
                        w.push(C),
                      L &&
                        "wall" !==
                          (null === (y = b.connectable) || void 0 === y
                            ? void 0
                            : y.right.type) &&
                        w.push(L),
                      _ &&
                        "wall" !==
                          (null === (v = b.connectable) || void 0 === v
                            ? void 0
                            : v.bottom.type) &&
                        w.push(_);
                  }
                }
              }),
              (c.prototype.asCell2dArray = function () {
                for (var t, n = [], r = 0; r < 2 * this.size + 1; r++) {
                  for (var i = 0; i < o; i++) n.push([]);
                  for (var l = 0; l < 2 * this.size + 1; l++) {
                    for (i = 0; i < o; i++)
                      for (var h = 0; h < o; h++)
                        n[r * o + h].push(e.CellType.WALL);
                    var a =
                      null === (t = this.map.map[r][l].connectable) ||
                      void 0 === t
                        ? void 0
                        : t.asCell2dArray();
                    if (a)
                      for (i = 0; i < o; i++)
                        for (h = 0; h < o; h++)
                          n[r * o + i][l * o + h] = a[i][h];
                  }
                }
                var p = [];
                for (r = 0; r < n[0].length; r++) {
                  p.push([]);
                  for (l = 0; l < n.length; l++) p[r][l] = n[l][r];
                }
                return p;
              }),
              (c.prototype.getRoomChunksFromOuterLayer = function (t) {
                for (var e = 2 * this.size + 1, n = [], o = t; o < e - t; o++)
                  this.map.map[o][t].connectable instanceof s &&
                    n.push(this.map.map[o][t]),
                    this.map.map[o][e - (t + 1)].connectable instanceof s &&
                      n.push(this.map.map[o][e - (t + 1)]);
                for (var r = t + 1; r < e - (t + 1); r++)
                  this.map.map[t][r].connectable instanceof s &&
                    n.push(this.map.map[t][r]),
                    this.map.map[e - (t + 1)][r].connectable instanceof s &&
                      n.push(this.map.map[e - (t + 1)][r]);
                return n;
              }),
              (c.prototype.getPlayerSpawnPoints = function (e) {
                var n = p(e, o - 2, o - 2);
                return new Array(e)
                  .fill(
                    new t.Vector(
                      this.player_spawn_chunk.x * o,
                      this.player_spawn_chunk.y * o
                    )
                  )
                  .map(function (e, o) {
                    return new t.Vector(e.y + 1 + n[o].y, e.x + 1 + n[o].x);
                  });
              }),
              (c.prototype.getEnemySpawnPoints = function (e, n, r) {
                for (var i = 2 * this.size + 1, l = [], h = 0; h < i; h++)
                  for (var c = 0; c < i; c++)
                    this.map.map[h][c].connectable instanceof s &&
                      this.map.map[h][c] !== this.player_spawn_chunk &&
                      Math.random() > 1 - e &&
                      l.push(this.map.map[h][c]);
                return l.map(function (e) {
                  return p(a(n, r), o - 2, o - 2).map(function (n) {
                    return new t.Vector(e.y * o + n.y + 1, e.x * o + n.x + 1);
                  });
                });
              }),
              c
            );
          })();
        exports.Dungeon = d;
      },
      { excalibur: "jZN7", "./level": "pDJl" },
    ],
    B6dB: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.generateLevel = s),
          (exports.levelLoader = void 0);
        var e = require("excalibur"),
          n = require("./dungeon"),
          r = require("./resources"),
          t = require("./level"),
          a = require("./character"),
          o = new e.Engine({ viewport: { width: 720, height: 480 } }),
          i = new e.Loader();
        for (var l in ((exports.levelLoader = i), r.Resources))
          i.addResource(r.Resources[l]);
        function s(e, r, o) {
          var i = new n.Dungeon(1),
            l = [];
          if (o) {
            var s = i.getPlayerSpawnPoints(o.length);
            o.forEach(function (e, n) {
              l.push({
                alignment: t.CharacterAlignment.PLAYER,
                class: e.class,
                spawnTile: s[n],
                exp: e.exp,
              });
            });
          } else {
            var c = i.getPlayerSpawnPoints(3);
            l.push({
              alignment: t.CharacterAlignment.PLAYER,
              class: new a.Bow(!0),
              spawnTile: c[0],
            }),
              l.push({
                alignment: t.CharacterAlignment.PLAYER,
                class: new a.Sword(!0),
                spawnTile: c[1],
              }),
              l.push({
                alignment: t.CharacterAlignment.PLAYER,
                class: new a.Magic(!0),
                spawnTile: c[2],
              });
          }
          var u = i.getEnemySpawnPoints(1, 2, 3),
            d = 2 * (r - 1);
          return (
            u.forEach(function (e) {
              var r = [
                new a.Sword(!1).levelUp(d + (0, n.getRandomInt)(0, 1)),
                new a.Sword(!1).levelUp(d),
                new a.Bow(!1).levelUp(d + (0, n.getRandomInt)(0, 1)),
                new a.Bow(!1).levelUp(d),
                new a.Magic(!1).levelUp(d + (0, n.getRandomInt)(0, 1)),
                new a.Magic(!1).levelUp(d),
              ];
              e.forEach(function (e) {
                return l.push({
                  alignment: t.CharacterAlignment.ENEMY,
                  class: r.splice((0, n.getRandomInt)(0, r.length - 1), 1)[0],
                  spawnTile: e,
                });
              });
            }),
            new t.Level(e, i.asCell2dArray(), l, r, i.getstairLocation())
          );
        }
        (i.suppressPlayButton = !0),
          (i.logo = ""),
          (i.backgroundColor = "black"),
          (document.oncontextmenu = function () {
            return !1;
          });
        var c = new e.Loader();
        for (var l in r.MainMenuResources)
          c.addResource(r.MainMenuResources[l]);
        (c.suppressPlayButton = !0),
          (c.logo = ""),
          (c.backgroundColor = "black");
        var u = new e.Actor({ x: 360, y: 240, width: 720, height: 480 });
        u.addDrawing("title", r.MainMenuResources.title.asSprite()),
          u.on("pointerdown", function () {
            u.off("pointerdown"),
              o.start(i).then(function () {
                o.add("level_1", s(o, 1)), o.goToScene("level_1");
              });
          });
        var d = new e.Label("Click Anywhere to Start");
        (d.fontSize = 20),
          (d.fontFamily = "serif"),
          (d.color = e.Color.White),
          (d.pos = (0, e.vec)(360 - d.getTextWidth(o.ctx) / 2, 450)),
          d.actions.blink(500, 500).repeatForever();
        var p = new e.Scene(o);
        p.add(u),
          p.add(d),
          (p.onInitialize = function () {
            r.MusicResources.Title.play();
          }),
          Object.values(r.MusicResources).forEach(function (e) {
            return c.addResource(e);
          }),
          o.start(c).then(function () {
            o.add("main_menu", p), o.goToScene("main_menu");
          });
      },
      {
        excalibur: "jZN7",
        "./dungeon": "eV2W",
        "./resources": "x5mp",
        "./level": "pDJl",
        "./character": "T3UV",
      },
    ],
  },
  {},
  ["B6dB"],
  null
);
//# sourceMappingURL=src.e1676e55.js.map
