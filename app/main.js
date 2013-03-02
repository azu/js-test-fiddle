var app = {};
(function util() {
    function post_to_url(path, params, method) {
        method = method || "post"; // Set method to post by default, if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", params[key]);

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
    }

    app.postToURL = post_to_url;
})();

jQuery(function ($) {
    var elemIDs = ["qunit", "jasmine", "mocha", "busterjs"];
    var units = {
        "qunit": {
            "html": $("#template-qunit-html").html(),
            "js": $("#template-qunit-js").html(),
            "resources": ["http://code.jquery.com/qunit/qunit-git.js", "http://code.jquery.com/qunit/qunit-git.css"]
        },
        "jasmine": {
            "html": $("#template-jasmine-html").val(),
            "js": $("#template-jasmine-js").html(),
            "js_wrap": "l",//=> onload - Post API does not implement…
            "resources": [
                "http://pivotal.github.com/jasmine/lib/jasmine.css"
            ]
        },
        "mocha": {
            "html": '<div id="mocha"></div>',
            "js": $("#template-mocha-js").html(),
            "js_wrap": "l",//=> onload - Post API does not implement…
            "resources": [
                "https://raw.github.com/LearnBoost/expect.js/master/expect.js",
                "https://raw.github.com/visionmedia/mocha/master/mocha.js",
                "http://visionmedia.github.com/mocha/example/mocha.css" // https://raw.github.com/visionmedia/mocha/master/mocha.css is doesn't work…
            ]
        },
        "busterjs": {
            "js": $("#template-busterjs-js").html(),
            "js_wrap": "l",//=> onload - Post API does not implement…
            "resources": [
                "http://cdn.busterjs.org/releases/latest/buster-test.js",
                "http://cdn.busterjs.org/releases/latest/buster-test.css",
            ]
        }
    };
    $(elemIDs).each(function (idx, elem) {
        var APIEndPoint = "http://jsfiddle.net/api/post/library/pure/";
        var unit = units[elem];
        var findElement = $.find("#" + elem);
        $(findElement).on("click", function (evt) {
            app.postToURL(APIEndPoint, unit, "POST");
        });
    });
});