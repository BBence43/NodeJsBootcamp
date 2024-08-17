const mongoose = require('mongoose');
const dotnev = require('dotenv');
dotnev.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB, {}).then((con) => {
  console.log('DB connection succesful!');
});

// START SERVER
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
