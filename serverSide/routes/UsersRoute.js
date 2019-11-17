const express = require("express");
const UsersModel = require("../models/UsersModel");
const router = express.Router();
const user = require("../database/schemas/UserSchema");
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))



router.route("/").get(function(req, res) {
  UsersModel.getAllUsers().then(allUsers => {
    res.json(allUsers);
  });
});

router.route("/:id").get(function(req, res) {
  UsersModel.getUserByID(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.route("/userID/:id").get(function(req, res) {
  UsersModel.getUserByUserID(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.route("/:id").put(function(req, res) {
  console.log(req.body);

  UsersModel.setUserByID(req.params.id, {
    Name: req.body.Name,
    Email: req.body.Email,
    Street: req.body.Street,
    Suite: req.body.Suite,
    City: req.body.City,
    Zipcode: req.body.Zipcode,
    lat: req.body.lat,
    lng: req.body.lng,
    Phone: req.body.Phone,
    Website: req.body.Website,
    CompanyName: req.body.CompanyName,
    CatchPhrase: req.body.CatchPhrase,
    BS: req.body.BS
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});



router.route("/edit/:id").put(function(req, res) {
  const id = req.params.id
  let data = req.body
  var body = req
  console.log(req.body);
  user.findOneAndUpdate({ UserID: id }, data, { upsert: true }, function (err, doc) {
     // console.log(doc);
      return (doc);
  }).then(function (data) {
      res.send(
        "ok"
      )
  })
})

module.exports = router;
