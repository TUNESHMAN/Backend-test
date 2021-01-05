// const orders = require("../models/orders")

module.exports = {
  getOrder: function (req, res) {
    return res.json({ order: `Hello world` });
  },
  postOrder: async function (req, res) {
    const { id, name, qty } = req.body;
    await orders.create({ id, name, qty });
    return res.ok();
  },
  updateOrder: async function (req, res) {
    const { id, name, qty } = req.body;
    if (id) {
      await orders.update({}).set({ id, name, qty });
      return res.ok();
    } else {
    }
  },

  // getProtectedQuote: function(req, res) {
  //     return res.json({ quote: quoter.getRandomOne() });
  // }
};
