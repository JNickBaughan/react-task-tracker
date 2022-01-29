import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;

const server = express();

const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(...middlewares);

server.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
