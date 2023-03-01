'use strict';

const SnackModel = require('../models/snack');


const createSnack = async (req, res, next) => {
  try {
    const data = req.body;
    const newSnack = await SnackModel.create(data);
    res.status(200).json(newSnack);
  } catch (e) { next(e.message); }
};

const getSnacks = async (req, res) => {
  const snacks = await SnackModel.find({});
  res.status(200).json(snacks);
};

const getSnack = async (req, res) => {
  const id = req.params.id;
  const snacks = await SnackModel.find({ _id: id });
  res.status(200).json(snacks[0]);
};


const deleteSnack = async (req, res) => {
  const id = req.params.id;
  await SnackModel.deleteOne({ _id: id });
  res.sendStatus(200);
};

const updateSnack = async (req, res) => {
  const id = req.params.id;
  const updatedSnack = await SnackModel.findByIdAndUpdate(id, req.body, {new: true});
  res.status(202).send(updatedSnack);
};

module.exports = {
  createSnack,
  getSnacks,
  getSnack,
  deleteSnack,
  updateSnack,
};
