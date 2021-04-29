const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/booster", require("./controllers/booster"));

app.listen(PORT, console.log(`API on ${PORT}`));