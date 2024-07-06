import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from '../app.js'
dotenv.config({
  path: "./.env.dev",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });