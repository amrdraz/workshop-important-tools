((init_functions = {}, entry)=>{
  const module_cache = {}

  function require(name) {
    if (module_cache[name]) {
      return module_cache.exports
    }

    let init_function = init_functions[name]
    let module = module_cache[name] = {
      name,
      init_function,
      exports: {}
    }
    return module.exports = init_functions[name](module, module.exports, require)
  }

  require.register = function (name, fn) {
    init_functions[name] = fn
  }
  if (entry) {
    require(entry)
  }
  window.require = require
})({})