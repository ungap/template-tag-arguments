'use strict';
const unique = (require('@ungap/template-literal'));

Object.defineProperty(exports, '__esModule', {value: true}).default = function (template) {
  var length = arguments.length;
  var args = [unique(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};
