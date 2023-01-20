import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import categoryRouter from './routes/category.route.js';
import brandRouter from './routes/brand.route.js';
import productRouter from './routes/product.route.js'
import userRouter from './routes/user.route.js'
import cartRouter from './routes/cart.route.js'
import orderRouter from './routes/order.route.js'
import cors from "cors";
import path from 'path';
const app = express();

app.use(express.static(path.join(process.cwd(),"public")));
app.use(express.static('images'));

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://chetanmalviya9:Chetan%40123@cluster0.uwyx1lm.mongodb.net/reactProductApp?retryWrites=true&w=majority", err => {
    if (err)
        console.log(err);
    else {
        app.use(cors())
        console.log("mongodb connected");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/user",userRouter);
        app.use("/category",categoryRouter);
        app.use("/brand",brandRouter);
        app.use("/product",productRouter);
        app.use("/cart",cartRouter);
        app.use("/order",orderRouter);

        app.listen(3000, () => {
            console.log("server started at 3000 http://localhost:3000");
        })
    }
});