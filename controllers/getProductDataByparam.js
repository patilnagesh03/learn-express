import { productData } from "../productsData.js";

export const getproductsDataByparam = (req, res) => {
  const allowedFields = ["category", "name", "price"];
  const { fields, term } = req.params;
  if (!allowedFields.includes(fields)) {
    return res
      .status(400)
      .json("Endpoint not allowed. Please use only 'category', 'name'");
  }
  let filteredProducts = [];

  if (fields === "price") {
    const mxPrice = Number(term);
    if (isNaN(mxPrice)) {
      return res.status(400).json("Price must be a valid number");
    }
    filteredProducts = productData.filter(
      (product) => product[fields] <= mxPrice
    );
  } else {
    filteredProducts = productData.filter(
      (product) => product[fields].toLowerCase() === term.toLowerCase()
    );
  }

  res.json(filteredProducts);
};
