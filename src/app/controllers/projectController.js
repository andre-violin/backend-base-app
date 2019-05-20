const list = (req, res) => {
  res.send({ ok: true, user: req.userId });
};

module.exports = {
  list
};
