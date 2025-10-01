import express from "express";
import { startups } from "./data.js";

// const celebrity = {
//   name: "Akshay kumar",
//   mob: 78468793978,
// };
const app = express();

app.get("/api", (req, res) => {
  let FilteredData = startups;

  const { industry, country, continent, is_seeking_funding, has_mvp } =
    req.query;

  if (industry) {
    FilteredData = FilteredData.filter(
      (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
    );
  }

  if (country) {
    FilteredData = FilteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }

  if (continent) {
    FilteredData = FilteredData.filter(
      (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (is_seeking_funding) {
    FilteredData = FilteredData.filter(
      (startup) =>
        startup.is_seeking_funding ===
        JSON.parse(is_seeking_funding.toLowerCase())
    );
  }

  if (has_mvp) {
    FilteredData = FilteredData.filter(
      (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
    );
  }

  res.json(FilteredData);
});

app.get("/api/:fields/:term", (req, res) => {
  const { fields, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (!allowedFields.includes(fields)) {
    return res
      .status(400)
      .json({
        message:
          "Search field not allowed. Please use only 'country', 'continent', 'industry'",
      });
  }

  const FilteredData = startups.filter(
    (startup) => startup[fields].toLowerCase() === term.toLowerCase()
  );

  res.json(FilteredData);
});

app.listen(8000, () => "Listning 8000");
