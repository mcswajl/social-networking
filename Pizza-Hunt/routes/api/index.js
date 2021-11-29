const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/thoughts', thought-routes);
router.use('/users', user-routes);

module.exports = router;
