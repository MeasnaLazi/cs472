const express= require("express");
const app= express();
const router= require("./router/index");

app.use(express.static("./public"));

app.use(router);

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(500).send(err.message);;
    }
    res.status(500).send(err);
});

app.listen(3000, () => {
    console.log("Server start at port: 3000");
});