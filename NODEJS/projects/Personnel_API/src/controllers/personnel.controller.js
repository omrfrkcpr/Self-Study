"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const PersonnelModel = require("../models/personnel.model");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(PersonnelModel);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(PersonnelModel),
      data,
    });
  },
  create: async (req, res) => {
    const isLead = req.body?.isLead || false;
    if (isLead) {
      await PersonnelModel.updateMany(
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
      message: "Personnel successfully created",
      data,
    });
  },
  read: async (req, res) => {
    const data = await PersonnelModel.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
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
    res.stauts(202).send({
      error: false,
      message: "Personnel successfully updated",
      data,
      newData: await PersonnelModel.findOne({ _id: req.params.id }),
    });
  },
  destroy: async (req, res) => {
    const data = await PersonnelModel.deleteOne({ _id: req.params.id });
    if (data.deletedCount) {
      res.status(201).send({
        error: false,
        message: "Personnel successfully deleted",
      });
    }
  },
};
