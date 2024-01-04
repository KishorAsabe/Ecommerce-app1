import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

//configure env
dotenv.config();
//port
const PORT = process.env.PORT || 8080;


//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(
	cors({
		origin:"https://ecommerce-app1-vert.vercel.app/",
		credentials:true,
	})
)
app.use(morgan("dev"));
app.use(express.json());



//rotes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});


app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
