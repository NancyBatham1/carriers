import { DataTypes } from "sequelize";
import sequelize from "./../config/dbConnection.js";

const Carrier = sequelize.define(
  "Carrier",
  {
    id: {
      type: DataTypes.INTEGER(20),
      primaryKey: true,
      allowNull: false,
    },
    addDate: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    authorizedForHire: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    carrierOperation: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    dotNumber: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    driverTotal: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    emailAddress: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    exemptForHire: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    fax: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    federalGovernment: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    hmFlag: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    indianTribe: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    legalName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    localGovernment: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mailingCity: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mailingCountry: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mailingState: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mailingStreet: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mailingZip: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mcs150Date: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    mcs150Mileage: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    mcs150MileageYear: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    migrant: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    nbrPowerUnit: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    oicState: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    opOther: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    pcFlag: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phyCity: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phyCountry: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phyState: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phyStreet: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    phyZip: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    privateOnly: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    privatePassengerBusiness: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    privatePassengerNonBusiness: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    privateProperty: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    recentMileage: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    recentMileageYear: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    stateGovernment: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    telephone: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    usMail: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    vmtSourceId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    updatedAt: {
      type: DataTypes.TIME,
      defaultValue: null,
    },
    dbaName: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
  },
  {
    tableName: "carriers",
    timestamps: false, // If you don't have createdAt/updatedAt columns
  }
);

export default Carrier;
