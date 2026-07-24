const express = require("express");
const cors = require("cors");

const config = require("./config");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", auditRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Page Pulse API 🚀"
    });
});

app.listen(config.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${config.PORT}`);
});