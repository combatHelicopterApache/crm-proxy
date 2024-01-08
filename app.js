require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware =  require('./middlewares/authMiddleware')
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    '/',
    authMiddleware,
)

app.use(
    "/api/v1",
    require("./routes/leadRoutes")
);



const serverStart = async () => {
    const PORT = process.env.PORT || 8000;
    try {
        app.listen(PORT, () => console.log(` ⚡️ Started at port ${PORT}`));
    } catch (e) {
        console.log("Server Error", e.message);
        process.exit(1);
    }
};

serverStart();
