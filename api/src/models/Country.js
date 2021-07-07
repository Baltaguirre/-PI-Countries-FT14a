const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Id: {                       // (Código de 3 letras) 
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    Flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Subregion: {
      type: DataTypes.INTEGER,
      
    },
    Area: {
      type: DataTypes.INTEGER,
      
    },
    Population: {
      type: DataTypes.INTEGER,
      
    },
  });
};
