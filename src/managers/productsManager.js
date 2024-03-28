const productsModel = require('../models/productsModel');

const getPriceByProductName = async (productName, userId) => {
  console.log("params: ");
  console.log("productName: ", productName);
  console.log("userId: ", userId);

  const price = await productsModel.aggregate([
    { $match: {
      nombre: { $eq: productName }
    }},
    { $lookup: {
      from: "users",
      pipeline: [
        { $match: {
          id: { $eq: userId },
          "metadata.precios_especiales.nombre_producto": { $in: [productName]}
        }},
        { $addFields: {
          precios_especiales: {
            $filter: {
              input: "$metadata.precios_especiales",
              as: "price",
              cond: {
                $eq: ["$$price.nombre_producto", productName]
              }
            }
          }
        }},
        { $project: {
          precios_especiales: { $arrayElemAt: ["$precios_especiales", 0]},
          _id: 0
        }}
      ],
      as: "user"
    }},
    { $set: {
      user: { $arrayElemAt: ["$user", 0]}
    }},
    { $project: {
      precio: { $ifNull: [
        "$user.precios_especiales.precio_especial_personal",
        "$precio_base"
      ]},
      nombre: 1,
    }}
  ]);

  return price;
}

module.exports = {
  getPriceByProductName,
}