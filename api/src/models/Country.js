const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    id: {                       // (Código de 3 letras) 
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    subregion: {
      type: DataTypes.STRING,
      
    },
    area: {
      type: DataTypes.INTEGER,
      
    },
    population: {
      type: DataTypes.INTEGER,
      
    },
  });
};
