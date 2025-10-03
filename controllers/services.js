import { servicesData } from "../servicesData.js";
export const servicesController = (req, res) => {
  res.json(servicesData);
};
