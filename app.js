const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})

app.get("/login_request", (req, res)=>{
    res.render("login_request");
})

app.get("/regular_schedule", (req, res)=>{
    res.render("regular_schedule");
})

app.post("/login_request", (req, res)=>{
    console.log(req.body);
    res.send("Request processing");
})

app.get("/biometric", (req, res)=>{
    res.render("biometric");
})

app.get("/complaint", (req, res)=>{
    res.render("complaint");
})

app.listen(3000, ()=>{
    console.log("App running on port 3000");
})





