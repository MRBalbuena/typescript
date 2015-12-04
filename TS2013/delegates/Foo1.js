$(function () {
    var f1 = new Foo1();
});
var Foo1 = (function () {
    function Foo1() {
        var f2 = new Foo2('Marcelo');
        f2.getName();
    }
    // Equivalent
    Foo1.prototype.save = function (callback) {
        callback(42);
    };
    return Foo1;
})();
;
//# sourceMappingURL=Foo1.js.map