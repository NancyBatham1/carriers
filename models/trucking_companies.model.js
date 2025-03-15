import { DataTypes } from "sequelize";
import sequelize from "./../config/dbConnection.js";

// Define the TruckingCompany model
const TruckingCompany = sequelize.define(
  "TruckingCompany",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = Default, 1 = Region, 2 = Shipment",
    },
  },
  {
    tableName: "trucking_companies",
    timestamps: false, // Assuming no timestamp columns (createdAt, updatedAt)
  }
);

export default TruckingCompany;
