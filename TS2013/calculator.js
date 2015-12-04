/// <reference path="scripts/typings/jquery/jquery.d.ts" />
$(function () {
    var calc = new Calculator('x', 'y', 'output');
});
var Calculator = (function () {
    function Calculator(xId, yId, outputId) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('.' + outputId);
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        $("#add").on('click', function (event) {
            _this.output.html(_this.add(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $("#substract").on('click', function (event) {
            _this.output.html(_this.substract(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $("#divide").on('click', function (event) {
            _this.output.html(_this.divide(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
        $("#multiply").on('click', function (event) {
            _this.output.html(_this.multiply(parseInt(_this.x.val()), parseInt(_this.y.val())).toString());
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.substract = function (x, y) {
        return x - y;
    };
    Calculator.prototype.divide = function (x, y) {
        return x - y;
    };
    Calculator.prototype.multiply = function (x, y) {
        return x - y;
    };
    return Calculator;
})();
//# sourceMappingURL=calculator.js.map