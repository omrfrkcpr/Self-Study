"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const DepartmentModel = require("../models/department.model");

module.exports.departmentController = {
  list: async (req, res) => {
    // const departments = await res.getModelList(Department)
    const data = await res.getModelList(DepartmentModel);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Department),
      data,
    });
  },
  create: async (req, res) => {
    const data = await DepartmentModel.create(req.body);
    res.status(201).send({
      error: false,
      message: "Department successfully created",
      data,
    });
  },
  read: async (req, res) => {
    const data = await DepartmentModel.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await DepartmentModel.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true, // model optionslarimiza gore tekrar validate eder. By default false
      }
    );
    res.stauts(202).send({
      error: false,
      message: "Department successfully updated",
      data,
      newData: await DepartmentModel.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await DepartmentModel.deleteOne({ _id: req.params.id });
    res.status(data.deletedCount > 0 ? 201 : 404).send({
      error: !data.deletedCount,
      message: "Department successfully deleted",
    });
  },
};
