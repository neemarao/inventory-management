import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
// import productRouter from "./routes/productRoute.js";
import productRouter from "./routes/productRoute.js";
import customerRouter from "./routes/customerRoute.js";
import discountRouter from "./routes/discountRoute.js";
import financeRouter from "./routes/financeRoute.js";
import bannerRouter from "./routes/bannerRoute.js";
import suppliersRouter from "./routes/suppliersRoute.js";

import { connectDb } from './config/db.js';
import { createProduct } from './controllers/productController.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use("/product", productRouter)
app.use("/customer", customerRouter)
app.use("/discount", discountRouter)
app.use("/finance", financeRouter)
app.use("/banner", bannerRouter)
app.use("/suppliers", suppliersRouter)




app.get('/home', (req, res) => {

    res.send("Hello World");
})



connectDb()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});