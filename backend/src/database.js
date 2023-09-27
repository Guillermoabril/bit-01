const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_DB)
  .then((db) => console.log('Success! Database connected.'))
  .catch((err) => console.log(`Fail! Database isn't connected`));