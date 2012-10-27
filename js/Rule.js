define([
    "js/util"
], function (
    util
) {
    "use strict";

    function Rule() {

    }

    util.extend(Rule, {
        parse: function () {
            return new Rule();
        }
    });

    util.extend(Rule.prototype, {
        getSpecificity: function () {

        },

        getStyle: function (name) {

        }
    });

    return Rule;
});
