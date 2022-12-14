var models = require("../models/index");
const axios = require("axios");

module.exports = {
  async fetchApiQuotes(req, res) {
    let favo = [true, false];
    let obj = {
      quote: "",
      favorites: favo[Math.round(Math.random())],
    };
    let data = await axios({
      method: "GET",
      url: `https://api.kanye.rest/`,
    });

    if (data) {
      obj.quote = data.data.quote;
      try {
        await models.Quote.create(obj);
        res.status(201).json(obj);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  },
  async getAllQuotes(req, res) {
    let quotesNoFav = await models.Quote.findAll({
      where: {
        favorites: false,
      },
    });
    let favorites = await models.Quote.findAll({
      where: {
        favorites: true,
      },
    });
    await res.status(200).json({ quotes: quotesNoFav, favorites: favorites });
  },

  async postQuotes(req, res) {
    let obj = {
      quote: req.body.quote,
      favorites: req.body.favorites,
    };
    try {
      let data = await models.Quote.create(obj);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: "data can't be add" });
    }
  },

  async updateQuotes(req, res) {
    let id = req.params.id;
    const checkId = await models.Quote.findOne({
      where: {
        id,
      },
    });
    let updateData = {
      favorites: req.body.favorites,
    };
    try {
      if (checkId) {
        await models.Quote.update(updateData, { where: { id } });
        res.status(201).json({ messsage: "data has been updated" });
      } else {
        res.status(404).json({
          message: "data  not found",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async deleteQuotes(req, res) {
    let id = req.params.id;
    const checkId = await models.Quote.findOne({
      where: {
        id,
      },
    });
    try {
      if (checkId) {
        await models.Quote.destroy({ where: { id } });
        res.status(201).json({ message: "Data has been removed" });
      } else {
        res.status(404).json({
          message: "data not found",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
