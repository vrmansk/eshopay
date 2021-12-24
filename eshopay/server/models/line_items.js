const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('line_items', {
    lite_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lite_cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lite_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lite_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lite_total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    lite_status: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    lite_order_name: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'line_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "line_items_pkey",
        unique: true,
        fields: [
          { name: "lite_prod_id" },
          { name: "lite_cart_id" },
        ]
      },
    ]
  });
};
