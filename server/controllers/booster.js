const router = require("express").Router();
const packager = require("../app/packager");

router.post("/", (req, res) => {
  console.log(req.body.name);
  let booster = packager.getBooster(req.body.name);
  console.log(booster);

  res.json(booster.map(c => ({
      name:c.chain[0].cardId,
      id:c.chain[0].cardId,
      desc: "Un description !!! Ain't nobody got time for that",
      fingerprint: c.chain[c.chain.length-1].hash
    })
  ));
})

router.get("/", (req,res) => {
  res.json({left: packager.getQteLeft()});
})

module.exports = router;