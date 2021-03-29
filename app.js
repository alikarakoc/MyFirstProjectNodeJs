const express = require("express");
var exphbs = require("express-handlebars");

const app = express();

//app.set("view engine", "ejs");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
//app.enable("view cache");

app.listen(3000);

app.get("/anasayfa", function (req, res) {
  res.render("home", { title: "Anasayfa", active: { anasayfa: true } });
});
app.get("/hakkimda", function (req, res) {
  res.render("hakkimda", { title: "Hakkımda", active: { hakkimda: true } });
});

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.use((req, res) => {
  res.status(404).render("404", { title: "Sayfa Bulunamadı" });
});

/*app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});*/
