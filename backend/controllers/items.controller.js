const db = require('../db/db');

class ItemsController {
  async getItems(req, res) {
    const items = await db.query('SELECT * FROM items');
    res.json(items.rows);
  }
}

module.exports = new ItemsController();
