const studentRouter = require("./routes/student_router");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/students", studentRouter);
app.use("*", (req, res, next) => {
    res.status(404).json({ message: "Not Found!" });
});

app.use((err, req, res, next) => {
    res.status(err.code).json({ message: err.message });
});

app.listen(3000, () => {
    console.log("Server start at port 3000!");
});