const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Id: {                       // (Código de 3 letras) 
      primaryKey: true,
      type: DataTypes.UUID,
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
      allowNull: false,
    },
    Area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
