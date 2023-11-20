import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const app = express()
const port = 3000 ||  process.env.PORT

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../public')))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, '../views'));

app.get("/",(req,res) => {
    res.render('home')
})

app.listen(port,() => {
    console.log(`server running on port ${port}`)
})

