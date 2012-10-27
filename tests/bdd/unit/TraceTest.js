define([
    "vendor/chai/chai",
    "js/Rule",
    "js/Trace"
], function (
    chai,
    Rule,
    Trace
) {
    "use strict";

    var expect = chai.expect;

    describe("Trace", function () {
        var trace;

        beforeEach(function () {
            trace = new Trace();
        });

        describe("addRule()", function () {
            it("should add the rule to the trace", function () {
                var rule = new Rule();
                trace.addRule(rule);

                expect(trace.getRules()[0]).to.equal(rule);
            });
        });

        describe("getRules()", function () {
            it("should return all rules added to the trace", function () {
                var rule1 = new Rule(),
                    rule2 = new Rule();
                trace.addRule(rule1);
                trace.addRule(rule2);

                expect(trace.getRules()).to.deep.equal([rule1, rule2]);
            });

            it("should sort the rules returned in order of specificity", function () {
                var rule1 = Rule.parse("div"),
                    rule2 = Rule.parse("article section div"),
                    rule3 = Rule.parse("section div"),
                    rules;
                trace.addRule(rule1);
                trace.addRule(rule2);
                trace.addRule(rule3);

                rules = trace.getRules()
                expect(rules[0]).to.equal(rule2);
                expect(rules[1]).to.equal(rule3);
                expect(rules[2]).to.equal(rule1);
            });

            it("should always return the rules in the same order");
        });
    });
});
