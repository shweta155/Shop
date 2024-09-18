import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/AuthRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/CategoryRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
// config env file
dotenv.config();

// databse connect
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", ProductRoutes);
// home route
app.get("/", (req, res) => {
  res.send("express server is running");
});
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;
app.listen(PORT || 8080, () => {
  console.log(
    `server running on ${DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
