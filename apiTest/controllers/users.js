var express = require("express");
var router = express.Router();
var models = require("../models/index");
const secretKey = "aldi";
var jwt = require("jsonwebtoken");
const helpers = require("../helpers/util");

module.exports = {
  async register(req, res, next) {
    models.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function (user) {
        res.status(201).json({ user });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  },
  async login(req, res, next) {
    models.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then(function (user) {
        if (!user)
          return res.json({
            success: false,
            message: "Authentication failed. User not found.",
          });

        user.validatePassword(req.body.password, function (err, match) {
          if (err || !match)
            return res.json({
              success: false,
              message: "Authentication failed. Wrong password.",
            });
          const payload = {
            admin: user.admin,
          };
          var token = jwt.sign(
            {
              nama: user.nama,
              id: user.id,
            },
            secretKey,
            { expiresIn: 60 * 60 }
          );
          console.log(token);
          // return the information including token as JSON
          res.json({
            success: true,
            message: "Enjoy your token!",
            token: token,
          });
        });
      })
      .catch((err) => {
        console.log(err);
        return res.json({
          success: false,
          message: "Authentication failed.",
        });
      });
  },
};
