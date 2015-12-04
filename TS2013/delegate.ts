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

$(function() {
    var a = new Foo();
    var x: INumberCallback = function(value: number) {
        alert(value);
    };
    a.save(x);
    console.log(x);
});

interface INumberCallback {
    (n: number): any;
}

class Foo {
    // Equivalent
    save(callback: INumberCallback): void {
        callback(42);
    }
};

