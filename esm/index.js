import unique from '@ungap/template-literal';

export default function (template) {
  var length = arguments.length;
  var args = [unique(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};
