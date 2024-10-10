import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import itemRoutes from './routes/item.route.js';

dotenv.config();

const app = express();
// Middleware
app.use(cors())
app.use(express.json());

//Routes
app.use("/api", itemRoutes);

app.get("/", (req, res) => {
    res.send("API IS RUNNING")
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is runnig on port ${PORT}`);
    });
});


//gu123