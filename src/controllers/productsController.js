const productsModel = require('../models/productsModel');
const productsManager = require("../managers/productsManager");

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find({
      existencia: { $gt: 0 }
    });

    return res.status(200).send(products);
  } catch(error) {
    console.error('[Get Products error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' });
  }
};

getProductPrice = async (req, res) => {
  try {
    const { userId, productName } = req.params;

    if (!userId, !productName) return res.status(400).send({ error: 'Empty params' });

    const productNameDecode = decodeURIComponent(productName);

    const price = await productsManager.getPriceByProductName(productNameDecode, +userId);

    return res.status(200).send(price);
  } catch(error) {
    console.error('[Get price error]: ', error);
    return res.status(400).send({ error: error?.message ?? 'Internal Server Error' });
  }
}

module.exports = {
  getProducts,
  getProductPrice
}