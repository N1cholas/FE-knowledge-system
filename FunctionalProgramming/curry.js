const createCurry = fn => {
  const curry = (...args) => {
    if (args.length >= args) {
      fn.apply(null, args)
    } else {
      return (...nextArgs) => curry(args.concat(nextArgs))
    }
  }
}

// practice
// add(1)(2)(3) 6
// add(1, 2, 3)(4) 10
// add(1)(2)(3)(4)(5) 15
const add = (...args) => {
  const _args = []

  const _add = (...nextArgs) => {
    _args.push(...nextArgs)
    return _add
  }

  _add.valueOf = () => _args.reduce((p, c) => p + c)

  return _add(...args)
}
