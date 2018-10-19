((initFunctions = {})=>{
  const initializedModules = {}
  function require(path) {
    if (initializedModules[path]) {
      return initializedModules[path].exports
    }
    let initFunction = initFunctions[path]
    if (!initFunction) {
      throw Error(`no module for path ${path}`)
    }
    let module = {
      path,
      initFunction,
      exports: {}
    }
    module.initFunction(module, module.exports, require)
    initializedModules[path] = module
    return module.exports
  }
  require.register = function register(path, initFunction) {
    initFunctions[path] = initFunction
  }
  window.require = require
})()