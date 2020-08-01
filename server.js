console.log("server");
const express = require("express");
const datastore = require("nedb");
require("dotenv").config();
const app = express();
app.listen(process.env.PORT, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(
    express.json({
        limit: "1mb",
    })
);
const database = new datastore("database.db");
database.loadDatabase();

app.get("/api", (Request, Response) => {
    console.log("responded");
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        Response.json(data);
    });
});