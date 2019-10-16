import express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.set("port", port);

app.get("/", (req, res) => {
    res.send("hello world")
});

app.listen(port, () => {
    console.log(`app started at port ${port}`);
});