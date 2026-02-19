const express = require("express")
const path = require("path")
const cookieParser = require('cookie-parser');

const {mongoDbConnection} = require("./connection")
const links = require('./model/linkSchema')
const {restricToLoggedInUserOnly, checkAuth} = require("./middleware/auth")

const routes = require('./routes/linkRoutes');
const staticRoutes = require("./routes/staticRouter")
const userRoutes = require("./routes/user")

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cookieParser())

// Database
mongoDbConnection("mongodb://localhost:27017/urlShortener")

//Routes
app.use("/url",restricToLoggedInUserOnly, routes);
app.use("/user", userRoutes)
app.use("/",checkAuth, staticRoutes);

app.listen(3000, (req, res)=>{
    console.log("Server Started at port 3000");
    console.log("http://localhost:3000/");
})