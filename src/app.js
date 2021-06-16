// Módulos
const express = require('express');
const app = express();
const path = require('path')

//Server Start
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),()=> console.log("Server on http://localhost:"+ app.get("port")));

// Public Acces
app.use(express.static(path.resolve(__dirname,"../public")));

//View Engine
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./views"));

// Rutas
const mainRouter = require('./routes/mainRouter');
app.use(mainRouter); 


