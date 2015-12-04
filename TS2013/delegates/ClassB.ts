import classA = require('./ClassA');

var result: string = classA.getText("Marcelo");

export function getClassBString(value: string): string {
    alert("ClassB - Hello " + value);
    return "ClassB - Hello " + value;
};