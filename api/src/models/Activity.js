const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    Id :{
      primaryKey : true,
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    Name:{type: DataTypes.STRING,
      allowNull: false,
     
    },
    Dificulty :{type: DataTypes.INTEGER,   //(Entre 1 y 5)
      allowNull: false,
      unique: true,
    },                                            
    Duration: {type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    Season:{type: DataTypes.STRING,    //(Verano, Otoño, Invierno o Primavera)
      allowNull: false,
      unique: true,
    }, 
  });
};
