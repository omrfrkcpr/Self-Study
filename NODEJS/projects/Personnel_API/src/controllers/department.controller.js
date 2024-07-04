"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const DepartmentModel = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "List Departments"
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
    // const departments = await res.getModelList(DepartmentModel)
    const data = await res.getModelList(DepartmentModel);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(DepartmentModel),
      data,
    });
  },
  create: async (req, res) => {
    /*
      #swagger.tags = ["Departments"]
      #swagger.summary = "Create Department"
      #swagger.parameters["body"] = {
      in: "body",
      required : true,
      schema:{
        name:"Test Department"
        }
      }
    */
    const data = await DepartmentModel.create(req.body);
    res.status(201).send({
      error: false,
      message: "New Department successfully created",
      data,
    });
  },
  read: async (req, res) => {
    /*
    #swagger.tags = ["Departments"]
    #swagger.summary = "Get Single Department"
    */
    const data = await DepartmentModel.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
    #swagger.tags = ["Departments"]
    #swagger.summary = "Update Department"
    #swagger.parameters["body"] = {
      in: "body",
      required : true,
      schema:{
      name:"Updated Test Department"
    }
    */
    const data = await DepartmentModel.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true, // model optionslarimiza gore tekrar validate eder. By default false
      }
    );
    res.status(202).send({
      error: false,
      message: "Department successfully updated",
      data,
      newData: await DepartmentModel.findOne({ _id: req.params.id }),
    });
  },
  destroy: async (req, res) => {
    /*
    #swagger.tags = ["Departments"]
    #swagger.summary = "Delete Department"
    */
    const data = await DepartmentModel.deleteOne({ _id: req.params.id });
    if (data.deletedCount) {
      res.status(201).send({
        error: false,
        message: "Department successfully deleted",
      });
    } else {
      res.status(404).send({
        error: true,
        message: "Department not found",
      });
    }
  },
  personnels: async (req, res) => {
    /*
    #swagger.tags = ["Departments"]
    #swagger.summary = "Personnels of Department"
    */
    const PersonnelModel = require("../models/personnel.model");
    const data = await res.getModelList(
      PersonnelModel,
      {
        departmentId: req.params.id,
      },
      "departmentId"
    );
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(PersonnelModel, {
        departmentId: req.params.id,
      }),
      data,
    });
  },
};
