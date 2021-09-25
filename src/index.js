const express = require("express")
const morgan = require("morgan")
const handlebars = require("express-handlebars")
const path = require("path")
const app = express()
const route = require("./routes")
const port = 3000;
const db = require("./config/db")

db.connect()

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
  })
);
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources", "views"))
// app.use(morgan('combined'))

route(app)

app.listen(port, () => console.log(`app listeing port: ${port}`))
