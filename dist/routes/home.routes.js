import express, {} from "express";
const home = express.Router();
home.get("/", (req, res) => res.send("Home desde Routes"));
export default home;
//# sourceMappingURL=home.routes.js.map