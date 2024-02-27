import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// const port = process.env.PORT || 5000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server listening on ${process.env.PORT}`);
    })
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });
