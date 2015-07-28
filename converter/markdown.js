 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

var parseCode = function(str) {
  var codeRegExp = /```(.*?)```/;
  var stra = [];
  while ((stra = codeRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<code>' + stra[1] + '</code>');
  }
  return str;
 }

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHeadline(str);
    str = parseCode(str);
    return str;
  }
};

module.exports = markdown;
