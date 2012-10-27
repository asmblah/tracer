define([
    "vendor/chai/chai",
    "js/Rule"
], function (
    chai,
    Rule
) {
    "use strict";

    var expect = chai.expect;

    describe("Rule", function () {
        describe("getSpecificity()", function () {
            // See http://www.w3.org/TR/CSS21/cascade.html#specificity

            it("should return [1,0,0,0] for a rule with no selector (inline styles)", function () {
                var rule = new Rule();
                expect(rule.getSpecificity()).to.equal([1,0,0,0]);
            });

            it("should return [0,1,0,0] for a rule with a selector with one ID attribute", function () {
                var rule = Rule.parse("#fred");
                expect(rule.getSpecificity()).to.equal([0,1,0,0]);
            });

            it("should return [0,2,0,0] for a rule with a selector with two ID attributes", function () {
                var rule = Rule.parse("#fred");
                expect(rule.getSpecificity()).to.equal([0,2,0,0]);
            });

            it("should return [0,10,0,0] for a rule with a selector with ten ID attributes", function () {
                var rule = Rule.parse("#a #b #c #d #e #f #g #h #i #j");
                expect(rule.getSpecificity()).to.equal([0,10,0,0]);
            });

            it("should return [0,0,1,0] for a rule with a selector with one class attribute", function () {
                var rule = Rule.parse(".class");
                expect(rule.getSpecificity()).to.equal([0,0,1,0]);
            });

            it("should return [0,0,1,0] for a rule with a selector with one element-attribute attribute", function () {
                var rule = Rule.parse("[data-role=page]");
                expect(rule.getSpecificity()).to.equal([0,0,1,0]);
            });

            it("should return [0,0,1,0] for a rule with a selector with one pseudo-class attribute", function () {
                var rule = Rule.parse(":hover");
                expect(rule.getSpecificity()).to.equal([0,0,1,0]);
            });

            it("should return [0,0,0,1] for a rule with a selector with one element attribute", function () {
                var rule = Rule.parse("article");
                expect(rule.getSpecificity()).to.equal([0,0,0,1]);
            });

            it("should return [0,0,0,1] for a rule with a selector with one pseudo-element attribute", function () {
                var rule = Rule.parse("::after");
                expect(rule.getSpecificity()).to.equal([0,0,0,1]);
            });
        });

        describe("getStyle()", function () {
            it("should return null if the style is not defined in this rule", function () {
                var rule = new Rule();
                expect(rule.getStyle("azimuth")).to.equal(null);
            });
        });
    });
});
