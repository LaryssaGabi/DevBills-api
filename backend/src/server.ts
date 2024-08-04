import 'dotenv/config'
import express, { json } from "express";
import { routes } from "./routes";
import { setupMongo } from "./database";
import { errorHandle } from './middlewares/error-handler.middleware';


setupMongo().then(() => {
  const app = express();
  const port = 3333;

  app.use(json());
  app.use(routes);
  app.use(errorHandle)

  app.listen(port, () => {
    console.log(`🚀 App is running at port ${port}!`);
  });

})

