const express = require("express");
const cors = require("cors");
const auth = require("./auth/auth");
const router = require("./routes/index");
const exceptionHandler = require("./exception/exception_handler");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({limit: '2mb'}));
app.use(express.static("../uploads"));
app.use(auth);
app.use(router);
app.use(exceptionHandler);

app.listen(PORT, () => {
    console.log("Server start at port: " + PORT);
});
