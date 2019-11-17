const express = require("express");
const router = express.Router();

const User = require("../database/schemas/UserSchema");
const mongoose = require('mongoose')

module.exports.getAllUsers = async () => {
  allUsersData = await User.find({}, function(err, users) {
    if (err) {
      return err;
    } else {
      console.log(users);
      return users;
    }
  });

  return allUsersData;
};

module.exports.getUserByID = async function(id) {
  UserData = await User.findById(id, function(err, user) {
    if (err) {
      return err;
    } else {
      console.log(user);
      return user;
    }
  });

  return UserData;
};

module.exports.getUserByUserID = async function(id) {
  UserData = await User.find({ UserID: id }, function(err, user) {
    if (err) {
      return err;
    } else {
      console.log(user);
      return user;
    }
  });

  return UserData;
};

module.exports.setUserByID = async function(id, obj) {
  console.log(obj);
  update = await User.findByIdAndUpdate(id, obj, { upsert: true }, function(
    err
  ) {
    if (err) return "error";
    return { message: "Task updated successfuly" };
  });

  return update;
};

