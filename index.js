import "dotenv/config";
import express from "express";
import sequelize from "./config/dbConnection.js";
import Carrier from "./models/carrier.model.js";
import TruckingCompany from "./models/trucking_companies.model.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.FRONT_URL,
    methods: ["POST", "PUT", "PATCH", "DELETE", "GET"],
    credentials: true,
  })
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", async (req, res) => {
  ///// raw query
  // const users = await sequelize.query('SELECT * FROM `carriers` limit 10', {
  //   type: QueryTypes.SELECT,
  // });

  ///// ORM query
  const users = await Carrier.findAll({
    limit: 10,
  });

  res.json({ msg: "i m working", data: users });
});

app.get("/trucking-companies", async (req, res) => {
  const users = await TruckingCompany.findAll({
    limit: 10,
  });

  res.json({ data: users });
});

app.listen(process.env.PORT, () => {
  console.log("running");
});
