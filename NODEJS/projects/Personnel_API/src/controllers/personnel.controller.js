"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const PersonnelModel = require("../models/personnel.model");

module.exports = {
  list: async (req, res) => {
    /*
    #swagger.tags = ["Personnels"]
    #swagger.summary = "List Personnels"
    #swagger.description =  `
      You can send query with endpoint for filter[], search[], sort[], page and limit.
        <ul> Examples:
          <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
          <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
          <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
          <li>URL/?<b>page=2&limit=1</b></li>
      </ul>
    `
    */
    const data = await res.getModelList(PersonnelModel, {}, "departmentId");
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(PersonnelModel),
      data,
    });
  },
  create: async (req, res) => {
    /*
    #swagger.tags = ["Personnels"]
    #swagger.summary = "Create Personnel"
    #swagger.parameters["body"] = {
      in: "body",
      required : true,
      schema:{
        departmentId: "6683b940f9519afe092acaf6",
        username:"exampleUser",
        password: "Example@123",
        firstName: "Example",
        lastName: "User",
        phone: "123456789",
        email: "exampleUser@example.com",
        title: "Example",
        salary: 2500,
      }
    }
    */
    const isLead = req.body?.isLead || false;
    let isUpdated;
    if (isLead) {
      isUpdated = await PersonnelModel.updateMany(
        {
          departmentId: req.body.departmentId,
          isLead: true,
        },
        { isLead: false }
      );
    }
    const data = await PersonnelModel.create(req.body);
    res.status(201).send({
      error: false,
      message:
        isUpdated.modifiedCount > 0
          ? "Old lead informations are updated and new personnel successfully created"
          : "New personnel successfully created",
      data,
    });
  },
  read: async (req, res) => {
    /*
    #swagger.tags = ["Personnels"]
    #swagger.summary = "Get Single Personnel"
    */
    const data = await PersonnelModel.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
    #swagger.tags = ["Personnels"]
    #swagger.summary = "Update Personnel"
    #swagger.parameters["body"] = {
      in: "body",
      required : true,
      schema:{
        departmentId: "6683b940f9519afe092acaf6",
        username:"exampleUser2",
        password: "Example@123",
        firstName: "Updated",
        lastName: "User",
        phone: "123456789",
        email: "exampleUser@example.com",
        title: "Example",
        salary: 2500,
      }
    }
    */
    if (!req.user.isAdmin) {
      //^ 1. Method
      // //* If user is not admin, then user can only update firstName, lastName, email, phone, description
      // req.body.isAdmin = false; // personnels are not allowed to update your status as a Admin. Their status can not be admin (always false)
      // delete req.body.isLead;
      // delete req.body.isActive;
      // delete req.body.salary;
      // delete req.body.title;
      // delete req.body.startedAt;

      //^ 2. Method
      // * If user is not admin, then user can only update certain fields
      const allowedFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "description",
      ];
      const forbiddenFields = [
        "isAdmin",
        "isLead",
        "isActive",
        "salary",
        "title",
        "startedAt",
      ];

      // Ensure the user cannot set themselves as admin
      req.body.isAdmin = false;

      // Remove forbidden fields
      forbiddenFields.forEach((field) => delete req.body[field]);

      // Remove any fields that are not allowed
      Object.keys(req.body).forEach((field) => {
        if (!allowedFields.includes(field)) {
          delete req.body[field];
        }
      });
    }

    const isLead = req.body?.isLead || false;
    if (isLead) {
      const { departmentId } = await PersonnelModel.findOne({
        _id: req.params.id,
      });
      await PersonnelModel.updateMany(
        {
          departmentId,
          isLead: true,
        },
        { isLead: false }
      );
    }

    const data = await PersonnelModel.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true, // model optionslarimiza gore tekrar validate eder. By default false
      }
    );
    res.status(202).send({
      error: false,
      message: "Personnel successfully updated",
      data,
      newData: await PersonnelModel.findOne({ _id: req.params.id }),
    });
  },
  destroy: async (req, res) => {
    /*
    #swagger.tags = ["Personnels"]
    #swagger.summary = "Delete Personnel"
    */
    const data = await PersonnelModel.deleteOne({ _id: req.params.id });
    if (data.deletedCount) {
      res.status(201).send({
        error: false,
        message: "Personnel successfully deleted",
      });
    }
  },
};
