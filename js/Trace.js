define([
    "js/util"
], function (
    util
) {
    "use strict";

    function Trace() {
        this.rules = [];
    }

    util.extend(Trace.prototype, {
        addRule: function (rule) {
            this.rules.push(rule);
        },

        getRules: function () {
            return this.rules.slice().sort(function (rule1, rule2) {
                return rule1.getSpecificity() - rule2.getSpecificity();
            });
        }
    });

    return Trace;
});
