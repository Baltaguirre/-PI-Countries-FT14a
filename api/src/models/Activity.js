const { DataTypes } = require('sequelize');
const {v4 : uuidv4} = require('uuid')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('activity', {
    Id :{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    Name:{
      type: DataTypes.STRING,
    },
    Dificulty :{
      type: DataTypes.INTEGER,   //(Entre 1 y 5)
     
    },                                            
    Duration: {
      type: DataTypes.INTEGER,
    
    },
    Season:{
      type: DataTypes.STRING,    //(Verano, Otoño, Invierno o Primavera)
      
    }, 
  });
};
