//class Foo {
//    save(callback: Function): void {
//        //Do the save
//        var result: number = 42; //We get a number from the save operation
//        //Can I at compile-time ensure the callback accepts a single parameter of type number somehow?
//        callback(result);
//    }
//}
//var foo = new Foo();
//var callback = (result: string): void => {
//    alert(result);
//}
//foo.save(callback);
$(function () {
    var a = new Foo();
    var x = function (value) {
        alert(value);
    };
    a.save(x);
    console.log(x);
});
var Foo = (function () {
    function Foo() {
    }
    // Equivalent
    Foo.prototype.save = function (callback) {
        callback(42);
    };
    return Foo;
})();
;
//# sourceMappingURL=delegate.js.map