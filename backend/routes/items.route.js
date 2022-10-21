const Router = require('express');

const router = new Router();
const itemsController = require('../controllers/items.controller');

router.get('/items', itemsController.getItems);
module.exports = router;
