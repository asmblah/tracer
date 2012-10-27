define([
    "vendor/chai/chai",
    "js/Tracer",
    "js/Trace"
], function (
    chai,
    Tracer,
    Trace
) {
    "use strict";

    var expect = chai.expect;

    describe("Tracer", function () {
        var tracer;

        beforeEach(function () {
            tracer = new Tracer();
        });

        describe("trace()", function () {
            it("should return a Trace object", function () {
                expect(tracer.trace()).to.be.instanceOf(Trace);
            });
        });
    });
});
