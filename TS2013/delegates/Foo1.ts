$(function() {
    var f1 = new Foo1();
});


interface INumberCallback {
    (n: number): any;
}

class Foo1 {
    // Equivalent
    save(callback: INumberCallback): void {
        callback(42);
    }

    constructor() {
        var f2: Foo2 = new Foo2('Marcelo');
        f2.getName();
    }
}; 