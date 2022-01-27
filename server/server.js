import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import chalk from "chalk";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectdb from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config();

connectdb();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// middlewares
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(
  port,
  console.log(chalk.magenta(
    `Server running in ${process.env.NODE_ENV} mode on port: ${port}`
  )
  ));
