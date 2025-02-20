const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const router = require("./routes/index");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
    origin: "http://localhost:3000",  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,  
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("hello from server");
});

connectDB();

app.listen(PORT, () => {
    console.log(`server is runnung on ${PORT}`);
});
