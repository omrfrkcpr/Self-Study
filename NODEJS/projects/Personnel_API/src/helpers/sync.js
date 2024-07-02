"use strict";

/* ---------------------------------- */
/*       EXPRESS - PERSONNEL API      */
/* ---------------------------------- */

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE */
  const { mongoose } = require("../configs/dbConnection");
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* REMOVE DATABASE */

  /* Department & Personnel */
  const DepartmentModel = require("../models/department.model");
  const PersonnelModel = require("../models/personnel.model");
  const departments = [
    "FullStack Department",
    "DevOps Department",
    "CyberSec Department",
  ];
  departments.forEach((value) => {
    // DepartmentModel.create:
    DepartmentModel.create({ name: value }).then((department) => {
      console.log("- Department Added.");
      // PersonnelModel.create:
      for (let i in [...Array(10)]) {
        PersonnelModel.create({
          departmentId: department._id,
          username: "test" + (value[0] + i),
          password: "1234",
          firstName: "firstName",
          lastName: "lastName",
          phone: "123456789",
          email: "test" + (value[0] + i) + "@site.com",
          title: "title",
          salary: 2500,
          description: "description",
          isActive: true,
          isAdmin: false,
          isLead: false,
          startedAt: "2023-10-15 13:14:15",
        });
      }
      console.log("- Personnels Added.");
    });
  });
  /* Department & Personnel */
  console.log("Synchronized");
};
