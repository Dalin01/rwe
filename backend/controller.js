'use strict';

const site = [
  {
    "name": "site 1",
    "speed": 8.5,
    "temperature": 20,
    "power": 5.5,
    "percentage": 20,
    "event": "NC"
  }
]

exports.getAll = async (req, res) => {
  try {
    res.status(200).json(site);
  } catch (e) {
    console.error(e);
    res.status(200);
  }
};