define([
    "js/util",
    "js/Trace"
], function (
    util,
    Trace
) {
    "use strict";

    function Tracer() {

    }

    util.extend(Tracer.prototype, {
        trace: function (el) {
            return new Trace();
        }
    });

    return Tracer;
});
