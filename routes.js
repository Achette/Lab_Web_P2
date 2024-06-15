const klawSync = require('klaw-sync');

const plugins = {
    name: 'routes',
    version: '1',
    register: async(server, options) => {
        
        const routes = [];
        klawSync(options.routesBaseDir, {nodir: true}).filter((file) => {
            return (file.path.indexOf('-routes.js') > 1);
        }).forEach((_file) => {
            const routeObject = {
                plugin: require(_file.path),
                options: {
                    config: options.config
                }
            };
            routes.push(routeObject);
        });

        await server.register(routes);
    }
}

module.exports = plugins;