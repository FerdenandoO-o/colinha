const express = require("express");
const mongoose = require('mongoose');
const cors = require ("cors");
const routes = require("./routes");

mongoose.connect("mongodb://localhost:27017/CestaBasica",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true
});
;
const server = express();
server.use(express.json());
server.use(cors());

server.use(routes);
server.listen(3333);