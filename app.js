const express = require("express")

//I'm creating a server named app
const app = express();

//Mkaing everything inside the public folder available
app.use(express.static("public"));

//http://localhost/home
app.get("/home", (request, response) => {
    response.sendFile(__dirname + "/views/home.html")
});

app.get("/about", (request, response) => {
   response.sendFile(__dirname + "/views/about.html");
});

app.get("/work", (request, response) => {
    response.sendFile(__dirname + "/views/work.html");
 });

 app.get("/gallery", (request, response) => {
    response.sendFile(__dirname + "/views/gallery.html");
 });


app.listen(4000, () => console.log("listening on port 4000"));