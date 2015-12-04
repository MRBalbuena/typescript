var Foo2 = (function () {
    function Foo2(name) {
        console.log("Foo2 constructor");
        this._name = name;
    }
    Foo2.prototype.getName = function () {
        console.log("Foo2.getName()");
        return this._name;
    };
    return Foo2;
})();
//# sourceMappingURL=Foo2.js.map