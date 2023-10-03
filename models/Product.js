const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    //creates columns in a table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      // does not alow null values
      allowNull: false,
      validate: {
        // validate value is a decimal
      isDecimal: true }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // set default value of 10
      defaultValue: 10,
      // valudate value is numeric 
      isNumeric: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      // REFERENCES Category(id)
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
