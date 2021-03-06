import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));
const colors = require('colors');


const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

//API ESTATICA
// app.get("/api/products/:id", (req, res) => {
//         const productId = req.params.id;
//       const product =  data.products.find(x=>x._id === productId);
//       if(product)
//       res.send(product);
//       else
//       res.status(404).send({msg: "Producto no Encontrado. "});
// });

// app.get("/api/products", (req, res) => {

//         res.send(data.products);
// });

app.listen(5000, () => {console.log("Servidor conectado en el puerto http://localhost:5000".rainbow)});