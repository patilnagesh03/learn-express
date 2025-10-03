import express from "express";
import { productsController } from "../controllers/products.js";
import { getproductsDataByparam } from "../controllers/getProductDataByparam.js";
import { servicesController } from "../controllers/services.js";

import { getAllData } from "../controllers/getAllData.js";
import { getDataByParam } from "../controllers/getDataByParam.js";

export const app_route = express.Router();

app_route.get("/products", productsController);
app_route.get("/products/:fields/:term", getproductsDataByparam);
app_route.get("/services", servicesController);

app_route.get("/startups", getAllData);
app_route.get("/startups/:fields/:term", getDataByParam);
