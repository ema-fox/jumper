"use strict";
var slice = ((function  () {
    return ((function slice (xs, start, end) {
    return ((((([].slice).call)(xs, start, end))))
}))
})());
var list = ((function  () {
    return ((function list () {
    var xs_g1, g_g0_g2;
    return (((g_g0_g2 = arguments), ((xs_g1 = (slice(g_g0_g2, 0, ((g_g0_g2.length) - 0)))), xs_g1)))
}))
})());
"((function  () {\n    return ((function mac (name) {\n    var argsnbody_g4, g_g3_g5;\n    return (((g_g3_g5 = arguments), ((argsnbody_g4 = (slice(g_g3_g5, 1, ((g_g3_g5.length) - 0)))), (list((\"assign-mac\"), name, (((list((\"fun\"), name)).concat)(argsnbody_g4)))))))\n}))\n})())";
"((function  () {\n    return ((function def (name) {\n    var argsnbody_g7, g_g6_g8;\n    return (((g_g6_g8 = arguments), ((argsnbody_g7 = (slice(g_g6_g8, 1, ((g_g6_g8.length) - 0)))), (list((\"assign\"), name, (((list((\"fun\"), name)).concat)(argsnbody_g7)))))))\n}))\n})())";
var idfn = ((function  () {
    return ((function idfn (x) {
    return ((x))
}))
})());
var cat = ((function  () {
    return ((function cat () {
    return ((((([].concat).apply)([], arguments))))
}))
})());
var join = ((function  () {
    return ((function join (xs, x) {
    return ((((([].join).call)(xs, x))))
}))
})());
var str = ((function  () {
    return ((function str () {
    var xs_g10, g_g9_g11;
    return (((g_g9_g11 = arguments), ((xs_g10 = (slice(g_g9_g11, 0, ((g_g9_g11.length) - 0)))), (join(xs_g10, (""))))))
}))
})());
var alist = ((function  () {
    return ((function alist (x) {
    return (((x ? ((x.constructor) === Array) : undefined)))
}))
})());
var astr = ((function  () {
    return ((function astr (x) {
    return ((((typeof(x)) === ("string"))))
}))
})());
var anumber = ((function  () {
    return ((function anumber (x) {
    return ((((typeof(x)) === ("number"))))
}))
})());
var afunction = ((function  () {
    return ((function afunction (x) {
    return ((((typeof(x)) === ("function"))))
}))
})());
var apply = ((function  () {
    return ((function apply (f) {
    var argsa_g13, argsb_g14, g_g12_g15;
    return (((g_g12_g15 = arguments), ((argsb_g14 = (g_g12_g15[((g_g12_g15.length) - 1)])), ((argsa_g13 = (slice(g_g12_g15, 1, ((g_g12_g15.length) - 1)))), ((f.apply)(null, (cat(argsa_g13, argsb_g14))))))))
}))
})());
var apply_method = ((function  () {
    return ((function apply_method (f, o) {
    var argsa_g17, argsb_g18, g_g16_g19;
    return (((g_g16_g19 = arguments), ((argsb_g18 = (g_g16_g19[((g_g16_g19.length) - 1)])), ((argsa_g17 = (slice(g_g16_g19, 2, ((g_g16_g19.length) - 1)))), ((f.apply)(o, (cat(argsa_g17, argsb_g18))))))))
}))
})());
"((function  () {\n    return ((function $br () {\n    var body_g21, g_g20_g22;\n    return (((g_g20_g22 = arguments), ((body_g21 = (slice(g_g20_g22, 0, ((g_g20_g22.length) - 0)))), (list((\"fun\"), (\"\"), (list((\"_\"))), body_g21)))))\n}))\n})())";
var map1 = ((function  () {
    return ((function map1 (f, xs) {
    return ((((([].map).call)(xs, (function  (_) {
    return (((f(_))))
})))))
}))
})());
var map = ((function  () {
    return ((function map (f) {
    var g_g24_g25, i_g26, ys_g27, length_g28, xss_g29, g_g23_g30;
    return (((g_g23_g30 = arguments), ((xss_g29 = (slice(g_g23_g30, 1, ((g_g23_g30.length) - 0)))), (((g_g24_g25 = ((xss_g29.length) === 1)), (((alist(g_g24_g25)) && ((g_g24_g25.length) === 0)) ? false : ((g_g24_g25 === 0) ? true : g_g24_g25))) ? (map1(f, (xss_g29[0]))) : ((length_g28 = (apply((Math.min), (map1((function  (_) {
    return (((_.length)))
}), xss_g29))))), ((ys_g27 = []), ((i_g26 = 0), (function () {while ((i_g26 < length_g28)) {
    ((ys_g27.push)((apply(f, (map1((function  (_) {
    return (((_[i_g26])))
}), xss_g29)))))), (++i_g26);
}}())), ys_g27))))))
}))
})());
var sfy = ((function  () {
    return ((function sfy (x) {
    var g_g31_g35, g_g32_g36, g_g33_g37, g_g34_g38;
    return (((((g_g31_g35 = (x === null)), (((alist(g_g31_g35)) && ((g_g31_g35.length) === 0)) ? false : ((g_g31_g35 === 0) ? true : g_g31_g35))) ? ("null") : (((g_g32_g36 = (x === undefined)), (((alist(g_g32_g36)) && ((g_g32_g36.length) === 0)) ? false : ((g_g32_g36 === 0) ? true : g_g32_g36))) ? ("undefined") : (((g_g33_g37 = (alist(x))), (((alist(g_g33_g37)) && ((g_g33_g37.length) === 0)) ? false : ((g_g33_g37 === 0) ? true : g_g33_g37))) ? (str(("("), (join((map(sfy, x)), (" "))), (")"))) : (((g_g34_g38 = ((typeof(x)) === ("object"))), (((alist(g_g34_g38)) && ((g_g34_g38.length) === 0)) ? false : ((g_g34_g38 === 0) ? true : g_g34_g38))) ? ((JSON.stringify)(x)) : (str(x))))))))
}))
})());
var prn = ((function  () {
    return ((function prn (a) {
    var as_g40, g_g39_g41;
    return (((g_g39_g41 = arguments), ((as_g40 = (slice(g_g39_g41, 1, ((g_g39_g41.length) - 0)))), (apply_method((console.log), console, (sfy(a)), (map(sfy, as_g40)))), a)))
}))
})());
var mapcat = ((function  () {
    return ((function mapcat (f) {
    var xss_g43, g_g42_g44;
    return (((g_g42_g44 = arguments), ((xss_g43 = (slice(g_g42_g44, 1, ((g_g42_g44.length) - 0)))), (apply(cat, (apply(map, f, xss_g43)))))))
}))
})());
var quote = ((function  () {
    return ((function quote (a) {
    return ((((JSON.stringify)(a))))
}))
})());
var catmac = ((function  () {
    return ((function catmac (xs) {
    var g_g45_g48;
    return (((((g_g45_g48 = ((xs.every)((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("list")))))
})))), (((alist(g_g45_g48)) && ((g_g45_g48.length) === 0)) ? false : ((g_g45_g48 === 0) ? true : g_g45_g48))) ? (cat((["list"]), (mapcat((function  (sub_g46) {
    var __g49, ys_g50, g_g47_g51;
    return ((((g_g47_g51 = sub_g46), ((ys_g50 = (slice(g_g47_g51, 1, ((g_g47_g51.length) - 0)))), ((__g49 = (g_g47_g51[0])), ys_g50)))))
}), xs)))) : (cat((["cat"]), xs)))))
}))
})());
var runqq = ((function  () {
    return ((function runqq (a) {
    var g_g52_g55, g_g53_g56, g_g54_g57;
    return (((((g_g52_g55 = (alist(a))), (((alist(g_g52_g55)) && ((g_g52_g55.length) === 0)) ? false : ((g_g52_g55 === 0) ? true : g_g52_g55))) ? (((g_g53_g56 = ((a[0]) === (",@"))), (((alist(g_g53_g56)) && ((g_g53_g56.length) === 0)) ? false : ((g_g53_g56 === 0) ? true : g_g53_g56))) ? (a[1]) : (((g_g54_g57 = ((a[0]) === (","))), (((alist(g_g54_g57)) && ((g_g54_g57.length) === 0)) ? false : ((g_g54_g57 === 0) ? true : g_g54_g57))) ? (list(("list"), (a[1]))) : (list(("list"), (catmac((map(runqq, a)))))))) : (cat((["list"]), (quote(a)))))))
}))
})());
"((function  () {\n    return ((function $qq (a) {\n    var g_g58_g59, xs_g60;\n    return ((((xs_g60 = (runqq(a))), (((g_g58_g59 = ((alist(xs_g60)) && ((xs_g60[0]) === (\"list\")))), (((alist(g_g58_g59)) && ((g_g58_g59.length) === 0)) ? false : ((g_g58_g59 === 0) ? true : g_g58_g59))) ? (xs_g60[1]) : (list((\"get\"), xs_g60, 0))))))\n}))\n})())";
"((function  () {\n    return ((function fn (args) {\n    var body_g62, g_g61_g63;\n    return (((g_g61_g63 = arguments), ((body_g62 = (slice(g_g61_g63, 1, ((g_g61_g63.length) - 0)))), (cat((list(\"fun\")), (list(\"\")), (list(args)), body_g62)))))\n}))\n})())";
"((function  () {\n    return ((function when (cond) {\n    var body_g65, g_g64_g66;\n    return (((g_g64_g66 = arguments), ((body_g65 = (slice(g_g64_g66, 1, ((g_g64_g66.length) - 0)))), (list(\"if\", cond, (cat((list(\"do\")), body_g65)))))))\n}))\n})())";
"((function  () {\n    return ((function land () {\n    var g_g68_g70, g_g69_g71, xs_g72, g_g67_g73;\n    return (((g_g67_g73 = arguments), ((xs_g72 = (slice(g_g67_g73, 0, ((g_g67_g73.length) - 0)))), (((g_g68_g70 = ((xs_g72.length) === 0)), (((alist(g_g68_g70)) && ((g_g68_g70.length) === 0)) ? false : ((g_g68_g70 === 0) ? true : g_g68_g70))) ? true : (((g_g69_g71 = ((xs_g72.length) === 1)), (((alist(g_g69_g71)) && ((g_g69_g71.length) === 0)) ? false : ((g_g69_g71 === 0) ? true : g_g69_g71))) ? (xs_g72[0]) : (list(\"if\", (xs_g72[0]), (cat((list(\"land\")), (slice(xs_g72, 1)))))))))))\n}))\n})())";
var subsname = ((function  () {
    return ((function subsname (name, sub, code) {
    var g_g74_g77, g_g75_g78, g_g76_g79;
    return (((((g_g74_g77 = (alist(code))), (((alist(g_g74_g77)) && ((g_g74_g77.length) === 0)) ? false : ((g_g74_g77 === 0) ? true : g_g74_g77))) ? (((g_g75_g78 = ((code[0]) === ("."))), (((alist(g_g75_g78)) && ((g_g75_g78.length) === 0)) ? false : ((g_g75_g78 === 0) ? true : g_g75_g78))) ? (cat((list(".")), (list((subsname(name, sub, (code[1]))))), (slice(code, 2)))) : (map((function  (x) {
    return (((subsname(name, sub, x))))
}), code))) : (((g_g76_g79 = (code === name)), (((alist(g_g76_g79)) && ((g_g76_g79.length) === 0)) ? false : ((g_g76_g79 === 0) ? true : g_g76_g79))) ? sub : code))))
}))
})());
var first = ((function  () {
    return ((function first (sub_g80) {
    var a_g82, __g83, g_g81_g84;
    return ((((g_g81_g84 = sub_g80), ((__g83 = (g_g81_g84[1])), ((a_g82 = (g_g81_g84[0])), a_g82)))))
}))
})());
var second = ((function  () {
    return ((function second (sub_g85) {
    var __g87, a_g88, g_g86_g89;
    return ((((g_g86_g89 = sub_g85), ((a_g88 = (g_g86_g89[1])), ((__g87 = (g_g86_g89[0])), a_g88)))))
}))
})());
"((function  () {\n    return ((function with_ (bindings) {\n    var g_g91_g92, body_g93, g_g90_g94;\n    return (((g_g90_g94 = arguments), ((body_g93 = (slice(g_g90_g94, 1, ((g_g90_g94.length) - 0)))), (((g_g91_g92 = ((bindings.length) === 0)), (((alist(g_g91_g92)) && ((g_g91_g92.length) === 0)) ? false : ((g_g91_g92 === 0) ? true : g_g91_g92))) ? (cat((list(\"do\")), body_g93)) : (list(\"let\", (first(bindings)), (second(bindings)), (cat((list(\"with\")), (list((slice(bindings, 2)))), body_g93))))))))\n}))\n})())";
"((function  () {\n    return ((function aif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function awhen (expr) {\n    var then_g96, g_g95_g97;\n    return (((g_g95_g97 = arguments), ((then_g96 = (slice(g_g95_g97, 1, ((g_g95_g97.length) - 0)))), (list(\"aif\", expr, (cat((list(\"do\")), then_g96)))))))\n}))\n})())";
"((function  () {\n    return ((function afn (args) {\n    var body_g99, g_g98_g100;\n    return (((g_g98_g100 = arguments), ((body_g99 = (slice(g_g98_g100, 1, ((g_g98_g100.length) - 0)))), (cat((list(\"fun\")), (list(\"self\")), (list(args)), body_g99)))))\n}))\n})())";
"((function  () {\n    return ((function awhile (cond) {\n    var body_g102, g_g101_g103;\n    return (((g_g101_g103 = arguments), ((body_g102 = (slice(g_g101_g103, 1, ((g_g101_g103.length) - 0)))), (list(\"let\", \"it\", \"undefined\", (cat((list(\"while\")), (list((list(\"=\", \"it\", cond)))), body_g102)))))))\n}))\n})())";
var listify = ((function  () {
    return ((function listify (x) {
    var g_g104_g105;
    return (((((g_g104_g105 = (alist(x))), (((alist(g_g104_g105)) && ((g_g104_g105.length) === 0)) ? false : ((g_g104_g105 === 0) ? true : g_g104_g105))) ? x : (list(x)))))
}))
})());
"((function  () {\n    return ((function w$suniq (names) {\n    var body_g107, g_g106_g108;\n    return (((g_g106_g108 = arguments), ((body_g107 = (slice(g_g106_g108, 1, ((g_g106_g108.length) - 0)))), (cat((list(\"with\")), (list((mapcat((function  (_) {\n    return (((list(_, (list(\"gensym\", (list(\"'\", _))))))))\n}), (listify(names)))))), body_g107)))))\n}))\n})())";
"((function  () {\n    return ((function zap (f, place) {\n    var args_g110, g_g109_g111;\n    return (((g_g109_g111 = arguments), ((args_g110 = (slice(g_g109_g111, 2, ((g_g109_g111.length) - 0)))), (list(\"=\", place, (cat((list(f)), (list(place)), args_g110)))))))\n}))\n})())";
var pair = ((function  () {
    return ((function pair (xs) {
    var g_g112_g113, i_g114, ys_g115;
    return ((((ys_g115 = []), ((i_g114 = 0), ((function () {while ((i_g114 < (xs.length))) {
    (((g_g112_g113 = ((i_g114 + 1) < (xs.length))), (((alist(g_g112_g113)) && ((g_g112_g113.length) === 0)) ? false : ((g_g112_g113 === 0) ? true : g_g112_g113))) ? ((ys_g115.push)((list((xs[i_g114]), (xs[(i_g114 + 1)]))))) : ((ys_g115.push)((list((xs[i_g114])))))), (i_g114 = (i_g114 + 2));
}}()), ys_g115)))))
}))
})());
"((function  () {\n    return ((function case_ (expr) {\n    var g_g118, args_g119, g_g116_g120;\n    return (((g_g116_g120 = arguments), ((args_g119 = (slice(g_g116_g120, 1, ((g_g116_g120.length) - 0)))), ((g_g118 = (gensym((\"g\")))), ((list(\"let\", g_g118, expr, (cat((list(\"if\")), (mapcat((function  (_) {\n    var g_g117_g121;\n    return (((((g_g117_g121 = ((_.length) === 2)), (((alist(g_g117_g121)) && ((g_g117_g121.length) === 0)) ? false : ((g_g117_g121 === 0) ? true : g_g117_g121))) ? (list((list(\"is\", g_g118, (list(\"'\", (_[0]))))), (_[1]))) : _)))\n}), (pair(args_g119)))))))))))))\n}))\n})())";
"((function  () {\n    return ((function dbg () {\n    var g_g123, xs_g124, g_g122_g125;\n    return (((g_g122_g125 = arguments), ((xs_g124 = (slice(g_g122_g125, 0, ((g_g122_g125.length) - 0)))), ((g_g123 = (gensym((\"g\")))), ((list(\"let\", g_g123, xs_g124, (list(\"prn\", (list(\"'\", xs_g124)), (list(\"'\", \":\")), g_g123)), g_g123)))))))\n}))\n})())";
"((function  () {\n    return ((function lor () {\n    var g_g127_g128, g_g129, xs_g130, g_g126_g131;\n    return (((g_g126_g131 = arguments), ((xs_g130 = (slice(g_g126_g131, 0, ((g_g126_g131.length) - 0)))), (((g_g127_g128 = xs_g130), (((alist(g_g127_g128)) && ((g_g127_g128.length) === 0)) ? false : ((g_g127_g128 === 0) ? true : g_g127_g128))) ? ((g_g129 = (gensym((\"g\")))), ((list(\"let\", g_g129, (xs_g130[0]), (list(\"if\", g_g129, g_g129, (cat((list(\"lor\")), (slice(xs_g130, 1)))))))))) : null))))\n}))\n})())";
"((function  () {\n    return ((function do1 (x) {\n    var g_g133, xs_g134, g_g132_g135;\n    return (((g_g132_g135 = arguments), ((xs_g134 = (slice(g_g132_g135, 1, ((g_g132_g135.length) - 0)))), ((g_g133 = (gensym((\"g\")))), ((cat((list(\"let\")), (list(g_g133)), (list(x)), xs_g134, (list(g_g133)))))))))\n}))\n})())";
"((function  () {\n    return ((function w$sres (init) {\n    var body_g137, g_g136_g138;\n    return (((g_g136_g138 = arguments), ((body_g137 = (slice(g_g136_g138, 1, ((g_g136_g138.length) - 0)))), (cat((list(\"let\")), (list(\"res\")), (list(init)), body_g137, (list(\"res\")))))))\n}))\n})())";
var list2obj = ((function  () {
    return ((function list2obj (args) {
    var res_g141;
    return ((((res_g141 = ((Object.create)(null))), (map((function  (sub_g139) {
    var k_g142, v_g143, g_g140_g144;
    return ((((g_g140_g144 = sub_g139), ((v_g143 = (g_g140_g144[1])), ((k_g142 = (g_g140_g144[0])), ((res_g141[k_g142]) = v_g143))))))
}), args)), res_g141)))
}))
})());
"((function  () {\n    return ((function obj () {\n    var args_g148, g_g145_g149;\n    return (((g_g145_g149 = arguments), ((args_g148 = (slice(g_g145_g149, 0, ((g_g145_g149.length) - 0)))), (list(\"list2obj\", (cat((list(\"list\")), (map((function  (sub_g146) {\n    var k_g150, v_g151, g_g147_g152;\n    return ((((g_g147_g152 = sub_g146), ((v_g151 = (g_g147_g152[1])), ((k_g150 = (g_g147_g152[0])), (list(\"list\", (list(\"'\", k_g150)), v_g151)))))))\n}), (pair(args_g148)))))))))))\n}))\n})())";
"((function  () {\n    return ((function each_from_while (starti, iv, xs, cond) {\n    var g_g154_g155, gxs_g156, v_g157, i_g158, body_g159, g_g153_g160;\n    return (((g_g153_g160 = arguments), ((body_g159 = (slice(g_g153_g160, 4, ((g_g153_g160.length) - 0)))), ((i_g158 = null), ((v_g157 = null), ((gxs_g156 = (gensym(xs))), ((((g_g154_g155 = (alist(iv))), (((alist(g_g154_g155)) && ((g_g154_g155.length) === 0)) ? false : ((g_g154_g155 === 0) ? true : g_g154_g155))) ? ((i_g158 = (first(iv))), (v_g157 = (second(iv)))) : ((i_g158 = (gensym(i_g158))), (v_g157 = iv))), (list(\"with\", (list(i_g158, starti, gxs_g156, xs)), (subsname(v_g157, (list(\"get\", gxs_g156, i_g158)), (cat((list(\"while\")), (list((list(\"and\", (list(\"<\", i_g158, (list(\".\", gxs_g156, \"length\")))), cond)))), body_g159, (list((list(\"++\", i_g158)))))))), i_g158)))))))))\n}))\n})())";
"((function  () {\n    return ((function each_while (iv, xs, cond) {\n    var body_g162, g_g161_g163;\n    return (((g_g161_g163 = arguments), ((body_g162 = (slice(g_g161_g163, 3, ((g_g161_g163.length) - 0)))), (cat((list(\"each-from-while\")), (list(0)), (list(iv)), (list(xs)), (list(cond)), body_g162)))))\n}))\n})())";
"((function  () {\n    return ((function each (iv, xs) {\n    var body_g165, g_g164_g166;\n    return (((g_g164_g166 = arguments), ((body_g165 = (slice(g_g164_g166, 2, ((g_g164_g166.length) - 0)))), (cat((list(\"each-while\")), (list(iv)), (list(xs)), (list(\"true\")), body_g165)))))\n}))\n})())";
var range = ((function  () {
    return ((function range (end) {
    var i_g167, res_g168;
    return ((((res_g168 = []), ((i_g167 = 0), ((function () {while ((i_g167 < end)) {
    ((res_g168.push)(i_g167)), (++i_g167);
}}()), res_g168)))))
}))
})());
var testify = ((function  () {
    return ((function testify (test) {
    var g_g169_g170;
    return (((((g_g169_g170 = (afunction(test))), (((alist(g_g169_g170)) && ((g_g169_g170.length) === 0)) ? false : ((g_g169_g170 === 0) ? true : g_g169_g170))) ? test : (function  (_) {
    return (((test === _)))
}))))
}))
})());
"((function  () {\n    return ((function no (x) {\n    return (((list(\"if\", x, \"false\", \"true\"))))\n}))\n})())";
var index_by = ((function  () {
    return ((function index_by (test, xs) {
    var g_g172_g174, g_g173_g175, xs_g171_g176, i_g177, index_g178, f_g179;
    return ((((f_g179 = (testify(test))), ((index_g178 = false), (((i_g177 = 0), ((xs_g171_g176 = xs), ((function () {while (((i_g177 < (xs_g171_g176.length)) && (((g_g172_g174 = index_g178), (((alist(g_g172_g174)) && ((g_g172_g174.length) === 0)) ? false : ((g_g172_g174 === 0) ? true : g_g172_g174))) ? false : true))) {
    (((g_g173_g175 = (f_g179((xs_g171_g176[i_g177])))), (((alist(g_g173_g175)) && ((g_g173_g175.length) === 0)) ? false : ((g_g173_g175 === 0) ? true : g_g173_g175))) ? (index_g178 = i_g177) : null), (++i_g177);
}}()), i_g177))), index_g178)))))
}))
})());
var find = ((function  () {
    return ((function find (test, xs) {
    var g_g180_g181, it_g182;
    return ((((it_g182 = (index_by(test, xs))), (((g_g180_g181 = it_g182), (((alist(g_g180_g181)) && ((g_g180_g181.length) === 0)) ? false : ((g_g180_g181 === 0) ? true : g_g180_g181))) ? (xs[it_g182]) : undefined))))
}))
})());
var split_by = ((function  () {
    return ((function split_by (f, xs) {
    var g_g183_g184, i_g185;
    return ((((i_g185 = (index_by(f, xs))), (((g_g183_g184 = (i_g185 === false)), (((alist(g_g183_g184)) && ((g_g183_g184.length) === 0)) ? false : ((g_g183_g184 === 0) ? true : g_g183_g184))) ? (list(xs, [])) : (list((slice(xs, 0, i_g185)), (slice(xs, i_g185))))))))
}))
})());
var some = ((function  () {
    return ((function some (test, xs) {
    var g_g188_g190, g_g189_g191, it_g192, xs_g186_g193, _g187_g194, res_g195, f_g196;
    return ((((f_g196 = (testify(test))), ((res_g195 = false), (((_g187_g194 = 0), ((xs_g186_g193 = xs), ((function () {while (((_g187_g194 < (xs_g186_g193.length)) && (((g_g188_g190 = res_g195), (((alist(g_g188_g190)) && ((g_g188_g190.length) === 0)) ? false : ((g_g188_g190 === 0) ? true : g_g188_g190))) ? false : true))) {
    ((it_g192 = (f_g196((xs_g186_g193[_g187_g194])))), (((g_g189_g191 = it_g192), (((alist(g_g189_g191)) && ((g_g189_g191.length) === 0)) ? false : ((g_g189_g191 === 0) ? true : g_g189_g191))) ? (res_g195 = it_g192) : undefined)), (++_g187_g194);
}}()), _g187_g194))), res_g195)))))
}))
})());
var all = ((function  () {
    return ((function all (test, xs) {
    var f_g197;
    return ((((f_g197 = (testify(test))), (!((some((function  (_) {
    return (((!((f_g197(_))))))
}), xs)))))))
}))
})());
var iso = ((function  () {
    return ((function iso (x, y) {
    return ((((x === y) || ((alist(x)) && (alist(y)) && ((x.length) === (y.length)) && (all(true, (map(iso, x, y))))))))
}))
})());
"((function  () {\n    return ((function callback (to, from) {\n    var body_g199, g_g198_g200;\n    return (((g_g198_g200 = arguments), ((body_g199 = (slice(g_g198_g200, 2, ((g_g198_g200.length) - 0)))), (cat(to, (list((cat((list(\"fn\")), (list(from)), body_g199)))))))))\n}))\n})())";
var sqrt = ((function  () {
    return ((Math.sqrt))
})());
var $st$st = ((function  () {
    return ((Math.pow))
})());
var tau = ((function  () {
    return (((Math.PI) * 2))
})());
var plus = ((function  () {
    return ((function plus (pa, pb) {
    return (((list(((pa[0]) + (pb[0])), ((pa[1]) + (pb[1]))))))
}))
})());
var mul = ((function  () {
    return ((function mul (pa, x) {
    return (((list(((pa[0]) * x), ((pa[1]) * x)))))
}))
})());
var on_circle = ((function  () {
    return ((function on_circle (x) {
    return (((list(((Math.sin)(x)), ((Math.cos)(x))))))
}))
})());
var distance = ((function  () {
    return ((function distance (sub_g201, sub_g202) {
    var pa0_g205, pa1_g206, g_g204_g207, pb0_g208, pb1_g209, g_g203_g210;
    return ((((g_g203_g210 = sub_g202), ((pb1_g209 = (g_g203_g210[1])), ((pb0_g208 = (g_g203_g210[0])), ((g_g204_g207 = sub_g201), ((pa1_g206 = (g_g204_g207[1])), ((pa0_g205 = (g_g204_g207[0])), (sqrt((($st$st((pb0_g208 - pa0_g205), 2)) + ($st$st((pb1_g209 - pa1_g206), 2)))))))))))))
}))
})());
var plus = ((function  () {
    return ((function plus (sub_g211, sub_g212) {
    var pa0_g215, pa1_g216, g_g214_g217, pb0_g218, pb1_g219, g_g213_g220;
    return ((((g_g213_g220 = sub_g212), ((pb1_g219 = (g_g213_g220[1])), ((pb0_g218 = (g_g213_g220[0])), ((g_g214_g217 = sub_g211), ((pa1_g216 = (g_g214_g217[1])), ((pa0_g215 = (g_g214_g217[0])), (list((pa0_g215 + pb0_g218), (pa1_g216 + pb1_g219)))))))))))
}))
})());
var ngbroffsets = ((function  () {
    return ((list((list(1, 0)), (list(0, 1)), (list(-1, 0)), (list(0, -1)))))
})());
var chunk_size = ((function  () {
    return (100)
})());
var fruit_color = ((function  () {
    return (("#ee5511"))
})());
var rand = ((function  () {
    return ((function rand (start, end) {
    return ((((((Math.random)()) * (end - start)) + start)))
}))
})());
var mutate = ((function  () {
    return ((function mutate (x, s) {
    return (((x + (rand((-1 * s), s)))))
}))
})());
var confine = ((function  () {
    return ((function confine (start, x, end) {
    return ((((Math.max)(start, ((Math.min)(x, end))))))
}))
})());
var rand_color = ((function  () {
    return ((function rand_color (xs, ys) {
    return (((str(("rgb("), (join((map((function  (x, y) {
    return ((((Math.floor)((rand(x, y))))))
}), xs, ys)), (", "))), (")")))))
}))
})());
var chunk_number = ((function  () {
    return ((function chunk_number (x) {
    return (((x - (x % chunk_size))))
}))
})());
var drawp = ((function  () {
    return ((function drawp (ctx, sub_g221) {
    var p0_g223, p1_g224, g_g222_g225;
    return ((((g_g222_g225 = sub_g221), ((p1_g224 = (g_g222_g225[1])), ((p0_g223 = (g_g222_g225[0])), ((ctx.fillRect)(p0_g223, p1_g224, 1, 1)))))))
}))
})());
var hills_around = ((function  () {
    return ((function hills_around (hills, p0) {
    var cn_g226;
    return ((((cn_g226 = (chunk_number(p0))), (mapcat((function  (_) {
    return ((((hills[_]) || [])))
}), (list((cn_g226 - chunk_size), cn_g226, (cn_g226 + chunk_size))))))))
}))
})());
var hills_between = ((function  () {
    return ((function hills_between (hills, pa0, pb0) {
    var end_g227, start_g228, res_g229, res_g230, i_g231, ca_g232;
    return ((((ca_g232 = ((chunk_number(pa0)) - chunk_size)), ((i_g231 = ca_g232), ((res_g230 = []), ((function () {while ((i_g231 < (chunk_size + pb0))) {
    ((res_g230.push)(((hills[i_g231]) || []))), (i_g231 = (i_g231 + chunk_size));
}}()), ((res_g229 = (apply(cat, res_g230))), ((start_g228 = (index_by((function  (_) {
    return (((pa0 < ((_.geom)[1]))))
}), res_g229))), ((end_g227 = (index_by((function  (_) {
    return (((pb0 < ((_.geom)[0]))))
}), res_g229))), ((slice(res_g229, start_g228, end_g227))))))))))))
}))
})());
var draw_hills = ((function  () {
    return ((function draw_hills (ctx, hills, p0, space) {
    var h_g243, foo_g233_g244, _g234_g245, tp_g246, $d$kget$kfoo_g235$k_g236$ktrees_g237_g247, _g238_g248, h_g249, $d$kget$kfoo_g235$k_g236$kfruits_g239_g250, _g240_g251, bla_g241_g252, _g242_g253, bla_g254, foo_g235_g255, _g236_g256, foo_g257;
    return ((((foo_g257 = (hills_between(hills, (p0 - space), (p0 + space)))), ((_g234_g245 = 0), ((foo_g233_g244 = foo_g257), ((function () {while (((_g234_g245 < (foo_g233_g244.length)) && true)) {
    ((ctx.fillStyle) = ((foo_g233_g244[_g234_g245]).color)), ((h_g243 = ((foo_g233_g244[_g234_g245]).geom)), ((ctx.fillRect)((h_g243[0]), (h_g243[2]), ((h_g243[1]) - (h_g243[0]) - -0.09), 50))), (++_g234_g245);
}}()), _g234_g245))), ((ctx.strokeStyle) = ("#447711")), ((ctx.lineWidth) = 0.3), ((ctx.lineCap) = ("round")), ((_g236_g256 = 0), ((foo_g235_g255 = foo_g257), ((function () {while (((_g236_g256 < (foo_g235_g255.length)) && true)) {
    ((h_g249 = ((foo_g235_g255[_g236_g256]).geom)), ((ctx.beginPath)()), ((ctx.moveTo)((h_g249[0]), (h_g249[2]))), ((ctx.lineTo)((h_g249[1]), (h_g249[2]))), ((ctx.stroke)()), ((_g238_g248 = 0), (($d$kget$kfoo_g235$k_g236$ktrees_g237_g247 = ((foo_g235_g255[_g236_g256]).trees)), ((function () {while (((_g238_g248 < ($d$kget$kfoo_g235$k_g236$ktrees_g237_g247.length)) && true)) {
    ((tp_g246 = (($d$kget$kfoo_g235$k_g236$ktrees_g237_g247[_g238_g248]).p)), ((ctx.fillStyle) = ("#553311")), ((ctx.fillRect)((tp_g246 - 1), (h_g249[2]), 2, -10)), ((ctx.fillStyle) = (($d$kget$kfoo_g235$k_g236$ktrees_g237_g247[_g238_g248]).color)), ((ctx.beginPath)()), ((ctx.arc)(tp_g246, ((h_g249[2]) - 10), 5, 0, 6)), ((ctx.fill)())), (++_g238_g248);
}}()), _g238_g248)))), ((ctx.fillStyle) = fruit_color), ((_g240_g251 = 0), (($d$kget$kfoo_g235$k_g236$kfruits_g239_g250 = ((foo_g235_g255[_g236_g256]).fruits)), ((function () {while (((_g240_g251 < ($d$kget$kfoo_g235$k_g236$kfruits_g239_g250.length)) && true)) {
    ((ctx.fillRect)(((($d$kget$kfoo_g235$k_g236$kfruits_g239_g250[_g240_g251])[0]) - 0.5), ((($d$kget$kfoo_g235$k_g236$kfruits_g239_g250[_g240_g251])[1]) - 0.5), 1, 1)), (++_g240_g251);
}}()), _g240_g251))), ((ctx.fillStyle) = ("#eeaa11")), ((bla_g254 = ((foo_g235_g255[_g236_g256]).enemies)), ((_g242_g253 = 0), ((bla_g241_g252 = bla_g254), ((function () {while (((_g242_g253 < (bla_g241_g252.length)) && true)) {
    ((ctx.fillRect)((((bla_g241_g252[_g242_g253])[0]) - 0.5), ((bla_g241_g252[_g242_g253])[1]), 1, -1)), (++_g242_g253);
}}()), _g242_g253)))), (++_g236_g256);
}}()), _g236_g256))))))
}))
})());
"((function  () {\n    return ((function w$sctx (ctx) {\n    var body_g259, g_g258_g260;\n    return (((g_g258_g260 = arguments), ((body_g259 = (slice(g_g258_g260, 1, ((g_g258_g260.length) - 0)))), (cat((list(\"do\")), (list((list((list(\".\", ctx, \"save\")))))), body_g259, (list((list((list(\".\", ctx, \"restore\")))))))))))\n}))\n})())";
var draw_scene = ((function  () {
    return ((function draw_scene (ctx, sub_g261, pos) {
    var grad_g263, cam_g264, hs0_g265, hs1_g266, hs2_g267, g_g262_g268;
    return ((((g_g262_g268 = sub_g261), ((hs2_g267 = (g_g262_g268[2])), ((hs1_g266 = (g_g262_g268[1])), ((hs0_g265 = (g_g262_g268[0])), (((ctx.save)()), ((grad_g263 = ((ctx.createLinearGradient)(0, 0, 0, 600))), ((grad_g263.addColorStop)(0, ("#113355"))), ((grad_g263.addColorStop)(0.3, ("#2277aa"))), ((grad_g263.addColorStop)(1, ("#bb4466"))), ((ctx.fillStyle) = grad_g263)), ((ctx.fillRect)(0, 0, 800, 600)), ([[".","ctx","scale"],0.2,0.2]), ([[".","ctx","translate"],1600,1200]), (["=",[".","ctx","strokeStyle"],["'","#000000"]]), (["=",[".","ctx","lineWidth"],8]), ([[".","ctx","strokeRect"],0,0,800,600]), ((cam_g264 = (plus(pos, ([0,-2])))), (((ctx.save)()), ((ctx.scale)(8, 8)), ((ctx.translate)((((cam_g264[0]) * -1) - -48), (((cam_g264[1]) * -1) - -32))), (draw_hills(ctx, hs0_g265, (pos[0]), 52)), ((ctx.restore)())), (((ctx.save)()), ((ctx.fillStyle) = ("rgba(50, 200, 230, .2)")), ((ctx.fillRect)(0, 0, 800, 600)), ((ctx.restore)())), (((ctx.save)()), ((ctx.scale)(16, 16)), ((ctx.translate)((((cam_g264[0]) * -1) - -24), (((cam_g264[1]) * -1) - -16))), (draw_hills(ctx, hs1_g266, (pos[0]), 27)), ((ctx.restore)())), (((ctx.save)()), ((ctx.fillStyle) = ("rgba(50, 200, 230, .2)")), ((ctx.fillRect)(0, 0, 800, 600)), ((ctx.restore)())), (((ctx.save)()), ((ctx.scale)(32, 32)), ((ctx.translate)((((cam_g264[0]) * -1) - -12), (((cam_g264[1]) * -1) - -8))), (draw_hills(ctx, hs2_g267, (pos[0]), 15)), ((ctx.fillStyle) = ("rgb(50, 20, 23)")), ((ctx.fillRect)(((pos[0]) - 0.5), (pos[1]), 1, -1)), ((ctx.restore)()))), ((ctx.restore)()))))))))
}))
})());
var hill_at = ((function  () {
    return ((function hill_at (p0, hills) {
    return (((find((function  (_) {
    var g2_g270_g271, g1_g269_g272;
    return ((((g1_g269_g272 = ((_.geom)[0])), ((g2_g270_g271 = p0), (((g1_g269_g272 < g2_g270_g271) && (g2_g270_g271 < ((_.geom)[1]))))))))
}), (hills_around(hills, p0))))))
}))
})());
var floor_at = ((function  () {
    return ((function floor_at (p0, hills) {
    return ((((((hill_at(p0, hills)) || (list2obj((list((list(("geom"), ([0,0,0])))))))).geom)[2])))
}))
})());
var popas = ((function  () {
    return ([])
})());
var play_pop = ((function  () {
    return ((function play_pop () {
    var g_g275_g279, g_g276_g280, popas_g273_g281, _g274_g282, g_g278_g283, g_g277_g284, popa_g285, played_g286;
    return ((((played_g286 = false), ((_g274_g282 = 0), ((popas_g273_g281 = popas), ((function () {while (((_g274_g282 < (popas_g273_g281.length)) && (((g_g275_g279 = played_g286), (((alist(g_g275_g279)) && ((g_g275_g279.length) === 0)) ? false : ((g_g275_g279 === 0) ? true : g_g275_g279))) ? false : true))) {
    (((g_g276_g280 = ((popas_g273_g281[_g274_g282]).ended)), (((alist(g_g276_g280)) && ((g_g276_g280.length) === 0)) ? false : ((g_g276_g280 === 0) ? true : g_g276_g280))) ? ((((popas_g273_g281[_g274_g282]).play)()), (played_g286 = true)) : null), (++_g274_g282);
}}()), _g274_g282))), (((g_g277_g284 = (((g_g278_g283 = played_g286), (((alist(g_g278_g283)) && ((g_g278_g283.length) === 0)) ? false : ((g_g278_g283 === 0) ? true : g_g278_g283))) ? false : true)), (((alist(g_g277_g284)) && ((g_g277_g284.length) === 0)) ? false : ((g_g277_g284 === 0) ? true : g_g277_g284))) ? ((popa_g285 = (new Audio((str(("assets/pop"), ((Math.floor)((rand(1, 4)))), (".ogg")))))), ((popa_g285.play)()), ((popas.push)(popa_g285)), (prn(("new")))) : null))))
}))
})());
var do_fruits = ((function  () {
    return ((function do_fruits (p, hills) {
    var g_g289_g290, it_g291, hills_around$khills$kget$kp$k0_g287_g292, _g288_g293, res_g294;
    return ((((res_g294 = 0), ((_g288_g293 = 0), ((hills_around$khills$kget$kp$k0_g287_g292 = (hills_around(hills, (p[0])))), ((function () {while (((_g288_g293 < (hills_around$khills$kget$kp$k0_g287_g292.length)) && true)) {
    ((it_g291 = (index_by((function  (_) {
    return ((((distance(_, p)) < 1.4)))
}), ((hills_around$khills$kget$kp$k0_g287_g292[_g288_g293]).fruits)))), (((g_g289_g290 = it_g291), (((alist(g_g289_g290)) && ((g_g289_g290.length) === 0)) ? false : ((g_g289_g290 === 0) ? true : g_g289_g290))) ? ((play_pop()), ((((hills_around$khills$kget$kp$k0_g287_g292[_g288_g293]).fruits).splice)(it_g291, 1)), (++res_g294)) : undefined)), (++_g288_g293);
}}()), _g288_g293))), res_g294)))
}))
})());
var make_hills = ((function  () {
    return ((function make_hills (behind) {
    var g_g295_g301, g_g296_g302, g_g297_g303, g_g298_g304, g_g299_g305, g_g300_g306, hill_g307, tree_g308, geom2_g309, bias_g310, offset_g311, left_g312, i_g313, treenes_g314, pbla_g315, hills_g316;
    return ((((hills_g316 = (list2obj((list((list((0), (list((list2obj((list((list(("geom"), ([0,6,0]))), (list(("color"), (rand_color(([100,40,10]), ([200,140,50]))))), (list(("trees"), [])), (list(("fruits"), [])), (list(("enemies"), []))))))))))))))), ((pbla_g315 = ([6,0])), ((treenes_g314 = (rand(0, 1))), ((i_g313 = 0), ((function () {while ((i_g313 < 400)) {
    ((left_g312 = (pbla_g315[0])), ((offset_g311 = (pbla_g315[1])), ((bias_g310 = (((g_g295_g301 = behind), (((alist(g_g295_g301)) && ((g_g295_g301.length) === 0)) ? false : ((g_g295_g301 === 0) ? true : g_g295_g301))) ? (((g_g296_g302 = ((floor_at(left_g312, behind)) < offset_g311)), (((alist(g_g296_g302)) && ((g_g296_g302.length) === 0)) ? false : ((g_g296_g302 === 0) ? true : g_g296_g302))) ? -1 : 1) : 0)), ((geom2_g309 = (list(left_g312, (left_g312 + ((Math.floor)((rand(2, 22))))), (offset_g311 + bias_g310 + ((Math.floor)((rand(-5, 6)))))))), ((tree_g308 = (((g_g297_g303 = ((rand(0, 1)) < treenes_g314)), (((alist(g_g297_g303)) && ((g_g297_g303.length) === 0)) ? false : ((g_g297_g303 === 0) ? true : g_g297_g303))) ? (list2obj((list((list(("p"), (rand((left_g312 + 1), ((geom2_g309[1]) - 1))))), (list(("color"), (rand_color(([20,100,20]), ([90,250,90]))))))))) : null)), ((hill_g307 = (list2obj((list((list(("geom"), geom2_g309)), (list(("color"), (rand_color(([100,40,10]), ([200,140,50]))))), (list(("trees"), (((g_g298_g304 = tree_g308), (((alist(g_g298_g304)) && ((g_g298_g304.length) === 0)) ? false : ((g_g298_g304 === 0) ? true : g_g298_g304))) ? (list(tree_g308)) : []))), (list(("fruits"), (((g_g299_g305 = tree_g308), (((alist(g_g299_g305)) && ((g_g299_g305.length) === 0)) ? false : ((g_g299_g305 === 0) ? true : g_g299_g305))) ? (map((function  (_) {
    return (((plus((list((tree_g308.p), ((geom2_g309[2]) - 10))), (mul((on_circle(((_ / 11) * tau))), 3))))))
}), (range(11)))) : []))), (list(("enemies"), (((g_g300_g306 = (0.8 < ((Math.random)()))), (((alist(g_g300_g306)) && ((g_g300_g306.length) === 0)) ? false : ((g_g300_g306 === 0) ? true : g_g300_g306))) ? (list((list((rand(left_g312, (geom2_g309[1]))), (geom2_g309[2]), 1)))) : [])))))))), ((treenes_g314 = (confine(-0.5, (mutate(treenes_g314, 0.1)), 2))), ("Have to name geom2 with a 2 so that delet doesn't rename the geom attr above"), (pbla_g315 = (list((geom2_g309[1]), (geom2_g309[2])))), ((hills_g316[(chunk_number(left_g312))]) = ((function  (x) {
    return (((cat((x || []), (list(hill_g307))))))
})((hills_g316[(chunk_number(left_g312))])))), (++i_g313))))))));
}}()), hills_g316)))))))
}))
})());
var now = ((function  () {
    return ((function now () {
    return (((+(new(Date)))))
}))
})());
var stroke_fill_text = ((function  () {
    return ((function stroke_fill_text (ctx, s, p) {
    return ((((ctx.strokeText)(s, (p[0]), (p[1]))), ((ctx.fillText)(s, (p[0]), (p[1])))))
}))
})());
"((function  () {\n    return ((function transfer (src, dst, amt) {\n    var g_g317;\n    return ((((g_g317 = (gensym((\"g\")))), ((list(\"let\", g_g317, (list((list(\".\", \"Math\", \"min\")), src, amt)), (list(\"zap\", \"-\", src, g_g317)), (list(\"zap\", \"+\", dst, g_g317))))))))\n}))\n})())";
var game_over = ((function  () {
    return ((function game_over (ctx, sub_g318, nfruits) {
    var points_g327, last_g328, pos0_g329, g_g319_g330;
    return ((((g_g319_g330 = sub_g318), ((pos0_g329 = (g_g319_g330[0])), ((last_g328 = (now())), ((points_g327 = 0), (((function frame () {
    var g_g320_g331, g_g321_g332, g_g322_g333, g_g323_g334, g2_g326_g335, g1_g325_g336, g_g324_g337, foo_g338, dur_g339, t_g340;
    return ((((t_g340 = (now())), ((dur_g339 = (t_g340 - last_g328)), ((foo_g338 = (0.1 * dur_g339)), ((((g_g320_g331 = (0 < pos0_g329)), (((alist(g_g320_g331)) && ((g_g320_g331.length) === 0)) ? false : ((g_g320_g331 === 0) ? true : g_g320_g331))) ? ((g_g321_g332 = ((Math.min)(pos0_g329, foo_g338))), (pos0_g329 = (pos0_g329 - g_g321_g332)), (points_g327 = (points_g327 + g_g321_g332))) : (((g_g322_g333 = (0 < nfruits)), (((alist(g_g322_g333)) && ((g_g322_g333.length) === 0)) ? false : ((g_g322_g333 === 0) ? true : g_g322_g333))) ? (((g_g323_g334 = ((Math.min)(nfruits, foo_g338))), (nfruits = (nfruits - g_g323_g334)), (points_g327 = (points_g327 + g_g323_g334)))) : null)), ((ctx.fillRect)(0, 0, 800, 600)), (((ctx.save)()), ((ctx.fillStyle) = ("#ffcc33")), ((ctx.strokeStyle) = ("#000000")), ((ctx.font) = ("40px sans-serif")), ((ctx.lineWidth) = 2), (stroke_fill_text(ctx, (str(("position: "), ((Math.floor)(pos0_g329)))), ([50,250]))), (stroke_fill_text(ctx, (str(("fruits: "), ((Math.floor)(nfruits)))), ([50,300]))), (stroke_fill_text(ctx, (str(("points: "), ((Math.floor)(points_g327)))), ([50,350]))), ((ctx.font) = ("80px sans-serif")), (stroke_fill_text(ctx, ("Game Over"), ([50,150]))), ((ctx.restore)())), (last_g328 = t_g340), (((g_g324_g337 = ((g1_g325_g336 = 0), ((g2_g326_g335 = pos0_g329), (((g1_g325_g336 === g2_g326_g335) && (g2_g326_g335 === nfruits)))))), (((alist(g_g324_g337)) && ((g_g324_g337.length) === 0)) ? false : ((g_g324_g337 === 0) ? true : g_g324_g337))) ? null : (requestAnimationFrame(frame)))))))))
})()))))))))
}))
})());
((function  () {
    return ((((jQuery()).ready)((function  (_) {
    var posm_g373, music_g374, landaudio_g375, jumpaudio_g376, deathaudio_g377, right_g378, left_g379, gravity_g380, nfruits_g381, bla_g382, highest_g383, pos_g384, starth_g385, jumpstart_g386, scene_g387, hills1_g388, hills0_g389, last_g390, counter_g391, times_g392, ctx_g393, canvas_g394, canvases_g395;
    return ((((canvases_g395 = (jQuery(("#graph")))), ((canvas_g394 = (canvases_g395[0])), ((ctx_g393 = ((canvas_g394.getContext)(("2d")))), ((times_g392 = []), ((counter_g391 = 0), ((last_g390 = (now())), ((hills0_g389 = (make_hills())), ((hills1_g388 = (make_hills(hills0_g389))), ((scene_g387 = (list(hills0_g389, hills1_g388, (make_hills(hills1_g388))))), ((jumpstart_g386 = false), ((starth_g385 = (((scene_g387[2])[0])[0])), ((pos_g384 = (list((1 + ((starth_g385.geom)[0])), ((starth_g385.geom)[2])))), ((highest_g383 = 100), ((bla_g382 = []), ((nfruits_g381 = 0), ((gravity_g380 = 0.15), ((left_g379 = false), ((right_g378 = false), ((deathaudio_g377 = (new Audio(("assets/impactcrunch03.ogg")))), ((jumpaudio_g376 = (new Audio(("assets/jump.ogg")))), ((landaudio_g375 = (new Audio(("assets/jumpland.ogg")))), ((music_g374 = (new Audio(("assets/dream-journey.ogg")))), ((posm_g373 = ([0,0])), (((music_g374.loop) = true), ((music_g374.play)()), ((deathaudio_g377.preload) = ("auto")), (((jQuery(document)).keydown)((function  (e) {
    var g_g342_g396, g_g344_g397, g_g343_g398, g_g345_g399, g_g346_g400, g_g341_g401;
    return ((((g_g341_g401 = ((String.fromCharCode)((e.which)))), (((g_g342_g396 = (g_g341_g401 === ("W"))), (((alist(g_g342_g396)) && ((g_g342_g396.length) === 0)) ? false : ((g_g342_g396 === 0) ? true : g_g342_g396))) ? (((g_g343_g398 = ((((g_g344_g397 = jumpstart_g386), (((alist(g_g344_g397)) && ((g_g344_g397.length) === 0)) ? false : ((g_g344_g397 === 0) ? true : g_g344_g397))) ? false : true) && ((floor_at((pos_g384[0]), (scene_g387[2]))) <= (pos_g384[1])))), (((alist(g_g343_g398)) && ((g_g343_g398.length) === 0)) ? false : ((g_g343_g398 === 0) ? true : g_g343_g398))) ? (((jumpaudio_g376.play)()), ((posm_g373[1]) = -20), (gravity_g380 = 0.03), (jumpstart_g386 = (e.timeStamp))) : null) : (((g_g345_g399 = (g_g341_g401 === ("A"))), (((alist(g_g345_g399)) && ((g_g345_g399.length) === 0)) ? false : ((g_g345_g399 === 0) ? true : g_g345_g399))) ? (left_g379 = true) : (((g_g346_g400 = (g_g341_g401 === ("D"))), (((alist(g_g346_g400)) && ((g_g346_g400.length) === 0)) ? false : ((g_g346_g400 === 0) ? true : g_g346_g400))) ? (right_g378 = true) : null))))))
}))), (((jQuery(document)).keyup)((function  (e) {
    var g_g348_g402, g_g349_g403, g_g350_g404, g_g347_g405;
    return ((((g_g347_g405 = ((String.fromCharCode)((e.which)))), (((g_g348_g402 = (g_g347_g405 === ("W"))), (((alist(g_g348_g402)) && ((g_g348_g402.length) === 0)) ? false : ((g_g348_g402 === 0) ? true : g_g348_g402))) ? ((gravity_g380 = 0.09), (jumpstart_g386 = false)) : (((g_g349_g403 = (g_g347_g405 === ("A"))), (((alist(g_g349_g403)) && ((g_g349_g403.length) === 0)) ? false : ((g_g349_g403 === 0) ? true : g_g349_g403))) ? (left_g379 = false) : (((g_g350_g404 = (g_g347_g405 === ("D"))), (((alist(g_g350_g404)) && ((g_g350_g404.length) === 0)) ? false : ((g_g350_g404 === 0) ? true : g_g350_g404))) ? (right_g378 = false) : null))))))
}))), ((function frame () {
    var g_g352_g406, g_g351_g407, g_g354_g408, g_g353_g409, g_g355_g410, g_g356_g411, floating_g412, g_g357_g413, floor_g414, g2_g366_g415, g1_g365_g416, g_g364_g417, new0_g418, $d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419, _g363_g420, hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421, _g361_g422, scene_g358_g423, _g359_g424, dur_g425, t_g426, g_g371_g427, $d$kget$khills_around$kget$kscene$k2$kget$kpos$k0_g367$k_g368$kenemies_g369_g428, _g370_g429, hills_around$kget$kscene$k2$kget$kpos$k0_g367_g430, _g368_g431, g_g372_g432, lose_g433;
    return ((((t_g426 = (now())), ((dur_g425 = (t_g426 - last_g390)), (((posm_g373[0]) = (((g_g351_g407 = (left_g379 && (((g_g352_g406 = right_g378), (((alist(g_g352_g406)) && ((g_g352_g406.length) === 0)) ? false : ((g_g352_g406 === 0) ? true : g_g352_g406))) ? false : true))), (((alist(g_g351_g407)) && ((g_g351_g407.length) === 0)) ? false : ((g_g351_g407 === 0) ? true : g_g351_g407))) ? -0.01 : (((g_g353_g409 = (right_g378 && (((g_g354_g408 = left_g379), (((alist(g_g354_g408)) && ((g_g354_g408.length) === 0)) ? false : ((g_g354_g408 === 0) ? true : g_g354_g408))) ? false : true))), (((alist(g_g353_g409)) && ((g_g353_g409.length) === 0)) ? false : ((g_g353_g409 === 0) ? true : g_g353_g409))) ? 0.01 : 0))), (((g_g355_g410 = ((pos_g384[1]) <= (floor_at(((pos_g384[0]) + (dur_g425 * (posm_g373[0]))), (scene_g387[2]))))), (((alist(g_g355_g410)) && ((g_g355_g410.length) === 0)) ? false : ((g_g355_g410 === 0) ? true : g_g355_g410))) ? (((pos_g384[0]) = ((pos_g384[0]) + ((posm_g373[0]) * dur_g425)))) : null), ((floor_g414 = (floor_at((pos_g384[0]), (scene_g387[2])))), ((floating_g412 = ((pos_g384[1]) < floor_g414)), ((pos_g384[1]) = ((Math.min)(((pos_g384[1]) + (0.001 * (posm_g373[1]) * dur_g425)), floor_g414))), (((g_g356_g411 = (floating_g412 && ((pos_g384[1]) === floor_g414))), (((alist(g_g356_g411)) && ((g_g356_g411.length) === 0)) ? false : ((g_g356_g411 === 0) ? true : g_g356_g411))) ? ((landaudio_g375.play)()) : null)), (((g_g357_g413 = ((pos_g384[1]) < floor_g414)), (((alist(g_g357_g413)) && ((g_g357_g413.length) === 0)) ? false : ((g_g357_g413 === 0) ? true : g_g357_g413))) ? ((posm_g373[1]) = ((posm_g373[1]) + (gravity_g380 * dur_g425))) : ((posm_g373[1]) = 0))), ((_g359_g424 = 0), ((scene_g358_g423 = scene_g387), ((function () {while (((_g359_g424 < (scene_g358_g423.length)) && true)) {
    ((_g361_g422 = 0), ((hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421 = (hills_around((scene_g358_g423[_g359_g424]), (pos_g384[0])))), ((function () {while (((_g361_g422 < (hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421.length)) && true)) {
    ((_g363_g420 = 0), (($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419 = ((hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421[_g361_g422]).enemies)), ((function () {while (((_g363_g420 < ($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419.length)) && true)) {
    ((new0_g418 = ((($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419[_g363_g420])[0]) + (dur_g425 * 0.001 * (($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419[_g363_g420])[2])))), (((g_g364_g417 = ((g1_g365_g416 = (((hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421[_g361_g422]).geom)[0])), ((g2_g366_g415 = new0_g418), (((g1_g365_g416 < g2_g366_g415) && (g2_g366_g415 < (((hills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360_g421[_g361_g422]).geom)[1]))))))), (((alist(g_g364_g417)) && ((g_g364_g417.length) === 0)) ? false : ((g_g364_g417 === 0) ? true : g_g364_g417))) ? ((($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419[_g363_g420])[0]) = new0_g418) : ((($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419[_g363_g420])[2]) = ((($d$kget$khills_around$kget$kscene_g358$k_g359$kget$kpos$k0_g360$k_g361$kenemies_g362_g419[_g363_g420])[2]) * -1)))), (++_g363_g420);
}}()), _g363_g420))), (++_g361_g422);
}}()), _g361_g422))), (++_g359_g424);
}}()), _g359_g424))), (nfruits_g381 = (nfruits_g381 + (do_fruits(pos_g384, (scene_g387[2]))))), (highest_g383 = ((Math.min)(highest_g383, (pos_g384[1])))), (draw_scene(ctx_g393, scene_g387, pos_g384)), ((ctx_g393.fillStyle) = ("#000000")), ((times_g392[counter_g391]) = dur_g425), (++counter_g391), (counter_g391 = (counter_g391 % 30)), (((ctx_g393.save)()), ((ctx_g393.fillStyle) = ("#ffcc33")), ((ctx_g393.strokeStyle) = ("#441100")), ((ctx_g393.font) = ("40px sans-serif")), ((ctx_g393.lineWidth) = 2), ((ctx_g393.strokeText)(nfruits_g381, 50, 40)), ((ctx_g393.fillText)(nfruits_g381, 50, 40)), ((ctx_g393.restore)())), ((ctx_g393.fillText)((apply((Math.max), times_g392)), 50, 50)), ((ctx_g393.fillText)((apply((Math.min), times_g392)), 50, 60)), (last_g390 = t_g426)))), ((lose_g433 = false), ((_g368_g431 = 0), ((hills_around$kget$kscene$k2$kget$kpos$k0_g367_g430 = (hills_around((scene_g387[2]), (pos_g384[0])))), ((function () {while (((_g368_g431 < (hills_around$kget$kscene$k2$kget$kpos$k0_g367_g430.length)) && true)) {
    ((_g370_g429 = 0), (($d$kget$khills_around$kget$kscene$k2$kget$kpos$k0_g367$k_g368$kenemies_g369_g428 = ((hills_around$kget$kscene$k2$kget$kpos$k0_g367_g430[_g368_g431]).enemies)), ((function () {while (((_g370_g429 < ($d$kget$khills_around$kget$kscene$k2$kget$kpos$k0_g367$k_g368$kenemies_g369_g428.length)) && true)) {
    (((g_g371_g427 = ((distance(pos_g384, ($d$kget$khills_around$kget$kscene$k2$kget$kpos$k0_g367$k_g368$kenemies_g369_g428[_g370_g429]))) < 1)), (((alist(g_g371_g427)) && ((g_g371_g427.length) === 0)) ? false : ((g_g371_g427 === 0) ? true : g_g371_g427))) ? ((lose_g433 = true)) : null), (++_g370_g429);
}}()), _g370_g429))), (++_g368_g431);
}}()), _g368_g431))), (((g_g372_g432 = lose_g433), (((alist(g_g372_g432)) && ((g_g372_g432.length) === 0)) ? false : ((g_g372_g432 === 0) ? true : g_g372_g432))) ? (((deathaudio_g377.play)()), (game_over(ctx_g393, pos_g384, nfruits_g381))) : (requestAnimationFrame(frame))))))
})(last_g390))))))))))))))))))))))))))))
}))))
})());
