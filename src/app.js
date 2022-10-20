const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

require('../db/connection')

app.use(express.json())
// const User = require('../model/userSchema')
const port = process.env.PORT || 3000;
//for using the static pages || public static path
const static_path = path.join(__dirname ,"../public");
const template_path = path.join(__dirname ,"../templates/views");
const partials_path = path.join(__dirname ,"../templates/partials");
app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

//Router Files
app.use(require('../router/auth'));
//if this port no is working then goto this or goto other
// app.get(route,callback)

//listen(port) enviroment variable
//  ` means template literals 
app.listen(port, ()=>{
    console.log(`Listing to port 3000`)
})
