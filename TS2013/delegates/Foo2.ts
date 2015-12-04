class Foo2 {

    private _name: string;

    constructor(name: string) {
        console.log("Foo2 constructor");
        this._name = name;
    }

    getName(): string {
        console.log("Foo2.getName()");
        return this._name;
    }
} 