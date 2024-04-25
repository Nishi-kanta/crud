const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require('./src/routes/userRoutes');

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
