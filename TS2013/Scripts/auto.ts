class AutoEngine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}

class Auto {
    private _basePrice: number;
    private _autoEngine: AutoEngine;
    make: string;
    model: string;
    accesssoryList: string;

    constructor(basePrice: number, autoEngine: AutoEngine, make: string, model: string) {
        this.autoEngine = autoEngine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
    }

    calculateTotal(): number {
        var taxRate = .08;
        return this.basePrice + (taxRate * this.basePrice);
    }

    addAccessories(...accessories: Accessory[]) {
        this.accesssoryList = '';
        
    }

    getAccessoryList(): string {
        return this.accesssoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get autoEngine(): AutoEngine {
        return this._autoEngine;
    }

    set autoEngine(value: AutoEngine) {
        if (value == undefined) throw 'Please supply an engine';
        this._autoEngine = value;
    }
}

class Truck extends Auto {
    bedLength: string;
    fourByFour: boolean;

    constructor(basePrice: number, autoEngine: AutoEngine, make: string, model: string,
        bedLength: string, fourByFour: boolean) {
        super(basePrice, autoEngine, make, model);
        this.bedLength = bedLength;
        this.fourByFour = fourByFour;
    }
}

window.onload = function() {
    var truck = new Truck(40000, new AutoEngine(300, 'V8'), 'Ford', 'S-Max', 'Long Bed', true);
    //alert(truck.autoEngine.engineType);
    //alert(truck.bedLength);
    //alert(truck.calculateTotal().toString());

    truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
    truck.autoEngine.start((status: boolean, engineType: string) => {
        alert(engineType + ' was started');
    });
}

