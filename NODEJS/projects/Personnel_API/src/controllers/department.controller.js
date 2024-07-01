"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const DepartmentModel = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    // const departments = await res.getModelList(DepartmentModel)
    const data = await res.getModelList(DepartmentModel);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(DepartmentModel),
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
  destroy: async (req, res) => {
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
