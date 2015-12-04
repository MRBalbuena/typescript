define(["require", "exports", './ClassA'], function (require, exports, classA) {
    var result = classA.getText("Marcelo");
    function getClassBString(value) {
        alert("ClassB - Hello " + value);
        return "ClassB - Hello " + value;
    }
    exports.getClassBString = getClassBString;
    ;
});
//# sourceMappingURL=ClassB.js.map