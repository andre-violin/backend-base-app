const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // entender requisições em .json
app.use(bodyParser.urlencoded({ extended: false })); // fazer o decode de parâmetros enviados via url

app.use("/auth", require("./app/routes/authRouter"));
app.use("/project", require("./app/routes/projectRouter"));

app.listen(3000);
