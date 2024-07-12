import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import logger from './utils/logger.js';
import morgan from 'morgan';

const morganFormat = ':method :url :status :response-time ms';
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000/',
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.json({limit: "100kb"}))
app.use(express.urlencoded({extended: true, limit: "100kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(morgan(morganFormat, {
  stream: {
    write: (message) => {
      const logObject = {
        method: message.split(' ')[0],
        url: message.split(' ')[1],
        status: message.split(' ')[2],
        responseTime: message.split(' ')[3],

      };
      logger.info(JSON.stringify(logObject));
    }
  }
}));


// routes import

import healthCheck from "./routes/health.routes.js"
import productRoutes from './routes/product.routes.js';




//routes declarations

app.use("/",healthCheck)
app.use('/api/products', productRoutes);




export {app}