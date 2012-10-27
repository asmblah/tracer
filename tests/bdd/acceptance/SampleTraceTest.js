define([
    "vendor/chai/chai",
    "js/Tracer"
], function (
    chai,
    Tracer
) {
    "use strict";

    var expect = chai.expect;

    describe("Sample trace sessions", function () {
        var tracer;

        beforeEach(function () {
            tracer = new Tracer();
        });

        it("should return one rule for an element with only inline styles", function () {
            var el = document.createElement("div"),
                trace;

            el.style.color = "red";
            trace = tracer.trace(el);

            expect(trace.getRules().length).to.equal(1);
        });

        it("should return text colour 'red' for an element with inline 'color' property set to 'red'", function () {
            var el = document.createElement("div"),
                trace;

            el.style.color = "red";
            trace = tracer.trace(el);

            expect(trace.getRules()[0].getStyle("color")).to.equal("red");
        });
    });
});
