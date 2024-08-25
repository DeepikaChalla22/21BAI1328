const express = require('express');
const cors = require('cors');

const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

app.use(cors());

const bfhlRoute = require('./routes/bfhlRoute');
app.use('/api', bfhlRoute);

const path = require("path");
__dirname = path.resolve();
// render deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));