const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
 const authMiddleware = require("./middlewares/auth");

//post: guardar, get: pegar, put:alterar, delete:excluir

routes.post("/sessions", SessionController.store);
routes.get('/users', UserController.list);
routes.get('/users/:email',UserController.index)
routes.put('/userId/:id',UserController.update);
routes.post("/users", UserController.store);

routes.use(authMiddleware);
routes.delete("/users/:id", UserController.destroy);
routes.get("/teste", (req, res) => res.json({ok: true}));

module.exports = routes;

