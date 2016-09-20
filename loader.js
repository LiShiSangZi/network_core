/**
 * @func load modules dynamically
 */

module.exports = function(configs, path) {
  const modules = {};
  if (!CONFIG.configs.renderer) { // Do not load modules in server-end
    configs.modules.forEach((m) => {
      m.items.forEach((n) => {
        modules[n] = require('client/applications/admin/modules/' + n + '/model');
      });
    });
  }
  return {
    configs: configs,
    modules: modules
  }
};
