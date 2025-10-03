import { productData } from "../productsData.js";
export const productsController = (req, res) => {
  res.json(productData);
};
