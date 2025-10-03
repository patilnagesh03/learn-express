import { productData } from "../productsData.js";

export const getproductsDataByparam = (req, res) => {
  const allowedFields = ["category", "name"];
  const { fields, term } = req.params;
  if (!allowedFields.includes(fields)) {
    return res
      .status(400)
      .json("Endpoint not allowed. Please use only 'category', 'name'");
  }
  const filteredProducts = productData.filter(
    (product) => product[fields].toLowerCase() === term.toLowerCase()
  );
  res.json(filteredProducts);
};
