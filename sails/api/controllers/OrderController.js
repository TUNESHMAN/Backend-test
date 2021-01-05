
module.exports = {
  getProtectedOrder: async function (req, res) {
    const dbValue = await orders.find();
    return res.status(200).json({ data: dbValue });
  },
  postProtectedOrder: async function (req, res) {
    const { id, name, qty } = req.body;
    await orders.create({ id, name, qty });
    return res.ok();
  },
  updateProtectedOrder: async function (req, res) {
    const { name, qty } = req.body;
    const { id } = req.params;
    await orders.update({ id }).set({ name, qty });
    return res.ok();
  },
};
