
const cors = require("cors");

const express = require("express");
const app = express();


app.use(cors());


app.use(express.json());

const postsRoutes = require("../routes/postRoutes");
app.use(postsRoutes);

app.listen(3000, () => console.log("SERVIDOR ENCENDIDO en el puerto 3000"));