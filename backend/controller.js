'use strict';

const site = [
  {
    "name": "site 1",
    "speed": 8.5,
    "temperature": 20,
    "active power": 5.5,
    "percentage active": 20,
    "turbine event": "NC"
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