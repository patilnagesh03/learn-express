import { startups } from "../data.js";

export const getDataByParam = (req, res) => {
  const { fields, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(fields)) {
    return res
      .status(400)
      .json(
        'Endpoint not allowed. Please use only "country", "continent", "industry"'
      );
  }

  const FilteredData = startups.filter(
    (startup) => startup[fields].toLowerCase() === term.toLowerCase()
  );
  res.json(FilteredData);
};
