const dotnev = require('dotenv');

dotnev.config({ path: './config.env' });

const app = require('./app');
// START SERVER
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
