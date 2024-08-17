const fs = require('fs');
const mongoose = require('mongoose');
const dotnev = require('dotenv');
const Tour = require('./../../models/tourModel');

dotnev.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB, {}).then((con) => {
  console.log('DB connection succesful!');
});

//READ json file
const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/tours-simple.json`,
    'utf-8',
  ),
);
//Import data into database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data succesfully loaded');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

//DELETE all data from collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data succesfully deleted');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
}
if (process.argv[2] === '--delete') {
  deleteData();
}
