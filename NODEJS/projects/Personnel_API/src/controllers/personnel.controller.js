"use strict";
/* ------------------------------------------ */
/*          EXPRESS - Personnel API           */
/* ------------------------------------------ */

const PersonnelModel = require("../models/personnel.model");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(PersonnelModel, {}, "departmentId");
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(PersonnelModel),
      data,
    });
  },
  create: async (req, res) => {
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
    const data = await PersonnelModel.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
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
    const data = await PersonnelModel.deleteOne({ _id: req.params.id });
    if (data.deletedCount) {
      res.status(201).send({
        error: false,
        message: "Personnel successfully deleted",
      });
    }
  },
};
