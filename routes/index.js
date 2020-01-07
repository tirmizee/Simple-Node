const rootRoutes = require('./root_routes');
const userRoutes = require('./user_routes');
module.exports = (app) => {
    rootRoutes(app);
    userRoutes(app);
}