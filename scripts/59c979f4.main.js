var app={};!function(){function a(a,b,c){c=c||"post";var d=document.createElement("form");d.setAttribute("method",c),d.setAttribute("action",a),d.setAttribute("target","_blank");for(var e in b)if(b.hasOwnProperty(e)){var f=document.createElement("input");f.setAttribute("type","hidden"),f.setAttribute("name",e),"resources"===e?f.setAttribute("value",b[e].join(",")):f.setAttribute("value",b[e]),d.appendChild(f)}document.body.appendChild(d),d.submit()}app.postToURL=a}(),jQuery(function(a){var b=["qunit","jasmine","mocha-bdd","busterjs"],c={qunit:{html:a("#template-qunit-html").html(),js:a("#template-qunit-js").html(),wrap:"l",resources:["http://code.jquery.com/qunit/qunit-git.js","http://code.jquery.com/qunit/qunit-git.css"]},jasmine:{js:a("#template-jasmine-js").html(),wrap:"l",resources:["http://sukima.github.com/jasmine-all/jasmine-all-min.js"]},"mocha-bdd":{html:'<div id="mocha"></div>',js:a("#template-mocha-bdd-js").html(),wrap:"l",resources:["https://raw.github.com/LearnBoost/expect.js/master/expect.js","https://raw.github.com/visionmedia/mocha/master/mocha.js","http://visionmedia.github.com/mocha/example/mocha.css"]},busterjs:{js:a("#template-busterjs-js").html(),wrap:"l",resources:["http://cdn.busterjs.org/releases/latest/buster-test.js","http://cdn.busterjs.org/releases/latest/buster-test.css"]}};a(b).each(function(b,d){var e="http://jsfiddle.net/api/post/library/pure/",f=c[d],g=a.find("#"+d);a(g).on("click",function(){app.postToURL(e,f,"POST")})})});