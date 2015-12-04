/// <reference path="scripts/typings/jquery/jquery.d.ts" />

$(function() {
    var calc = new Calculator('x', 'y', 'output');
});

class Calculator {
    private x: JQuery;
    private y: JQuery;
    private output: JQuery;

    constructor(xId: string, yId: string, outputId: string) {
        this.x = $('#' + xId);
        this.y = $('#' + yId);
        this.output = $('.' + outputId);
        this.wireEvents();
    }

    wireEvents() {
        $("#add").on('click', event => {
            this.output.html(
                this.add(parseInt(this.x.val()), parseInt(this.y.val())).toString()
            );
        });
        $("#substract").on('click', event => {
            this.output.html(
                this.substract(parseInt(this.x.val()), parseInt(this.y.val())).toString()
                );
        });
        $("#divide").on('click', event => {
            this.output.html(
                this.divide(parseInt(this.x.val()), parseInt(this.y.val())).toString()
                );
        });
        $("#multiply").on('click', event => {
            this.output.html(
                this.multiply(parseInt(this.x.val()), parseInt(this.y.val())).toString()
                );
        });
    }

    add(x: number, y: number) {
        return x + y;
    }

    substract(x: number, y: number) {
        return x - y;
    }
    divide(x: number, y: number) {
        return x - y;
    }
    multiply(x: number, y: number) {
        return x - y;
    }
}