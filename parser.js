#!/usr/bin/js

var webPage = require('webpage');
var page = webPage.create();

var system = require('system');
var args = system.args;

var urlForParse = args[1];
page.open(urlForParse, function (status) {
  var selector = args[2] ? args[2] : body;

  var content = page.evaluate(function(contentSelector) {
    return $(contentSelector).text();
  }, selector);

  var deleteAscii = content.replace(/[^А-Яа-яA-Za-z\s]|[\n\t]/gim, ' ');
  console.log(deleteAscii);
  phantom.exit();
});
