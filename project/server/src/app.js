const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const { Exeption } = require("./exception/exceptions");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {

    console.log("err: " + err);

    if (err instanceof Exeption) {
        res.status(err.code).json(err.toJson());
    } else {
        res.status(500).json(err);
    }
});

app.listen(PORT, () => {
    console.log("Server start at port: " + PORT);
});
