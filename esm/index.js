import unique from '@ungap/template-literal';

export default function (template) {
  var length = arguments.length;
  var args = [unique(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};

/**
 * best benchmark goes here
 * https://jsperf.com/tta-bench
 * I should probably have an @ungap/template-literal-es too
export default (...args) => {
  args[0] = unique(args[0]);
  return args;
};
 */