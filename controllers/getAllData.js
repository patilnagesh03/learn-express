import { startups } from "../data.js"

export const getAllData = (rea,res)=>{
    res.json(startups);
}