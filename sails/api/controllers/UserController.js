
module.exports = {
  register: async function (req, res) {
    const { id, email, password } = req.body;
    await users.create({ id, email, password });
    // var token = jwt.sign({ id, email }, 'secretkey');
    const token = jwToken.issue({id, email});
    return res.json({
      message: "Success", token: token
    });
  }
};
