const express = require("express")
const morgan = require("morgan")
const handlebars = require("express-handlebars")
const methodOverride = require("method-override")
const path = require("path")
const app = express()
const route = require("./routes")
const port = process.env.PORT || 5000;
const db = require("./config/db")
const sortMiddleware = require("./middlewares/sortMiddleware")

db.connect()
app.use(express.static(path.join(__dirname, "public", "")))
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    helpers: {
      sum: (number1, number2) => number1 + number2,
      sortable: (column, sort)=>{
        const iconSort = column === sort.column? sort.type : 'default'
        const icons = {
            default: "oi oi-elevator",
            desc: "oi oi-sort-descending",
            asc: "oi oi-sort-ascending"
        }
        const types = {
            default: "desc",
            desc: "asc",
            asc: "desc"
        }
        const icon = icons[iconSort]
        const type = types[sort.type]
        return `<a href="/me/stored/post/?_sort&column=${column}&type=${type}"><span class="${icon}"></span></a> `
      }
    }
  }),
 
);
app.use(sortMiddleware)
app.use(express.urlencoded())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "resources", "views"))
// app.use(morgan('combined'))
app.use(methodOverride("_method"))
route(app)

app.listen(port, () => console.log(`app listeing port: ${port}`))
