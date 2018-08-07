const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    set: (v) => bcrypt.hashSync(v, 12),
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

const create = ({ name, email, password }) => {
  const user = new User({ name, email, password });
  return user.save();
};

const findByEmail = (email, select) => {
  return User.findOne({ email }).select(select);
};

const getById = (_id) => {
  return User.find({ _id });
};

module.exports = {
  create,
  findByEmail,
  getById,
};
