'use strict';

exports.getAll = async (req, res) => {
  try {
    // database
    res.status(200).json(topics);
  } catch (e) {
    console.error(e);
    res.status(200);
  }
};