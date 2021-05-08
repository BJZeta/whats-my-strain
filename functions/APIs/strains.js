const { db } = require("../util/admin");

exports.getAllStrains = (req, res) => {
  db.collection("strains")
    .orderBy("name", "desc")
    .get()
    .then((data) => {
      let strains = [];
      data.forEach((item) => {
        strains.push({
          strainId: item.id,
          name: item.data().name,
          type: item.data().type,
          feelings: item.data().feelings,
        });
      });
      return res.json(strains);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
