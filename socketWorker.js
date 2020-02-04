const mongoose = require('mongoose');
// In Prod, this is taken from config
mongoose.connect('mongodb://srv/verbUser', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./models/User');

function socketWorker(io, socket) {
  socket.on('userData', (data) => {
    
    const userDb = await getUser(data);
    io.to('room').emit('data', userDb);
  });
}

function getUser(data) {
  User.findOne({ id: data.id })
    .exec()
    .then(user => {
      return user;
    })
    .catch(err => {
      // log it appropriately
      throw Error(err);
    });
}

module.exports = socketWorker;