const jserver = require("json-server");
const server = jserver.create()
const router = jserver.router("db.json")
const mware = jserver.defaults()
const port = process.env.PORT || 3000;


server.use(mware)
server.use(router)

server.listen(port)