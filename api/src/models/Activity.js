const { DataTypes } = require('sequelize');
const {v4 : uuidv4} = require('uuid')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('activity', {
    id :{
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
    },
    name:{
      type: DataTypes.STRING,
    },
    dificulty :{
      type: DataTypes.INTEGER,   //(Entre 1 y 5)
     
    },                                            
    duration: {
      type: DataTypes.INTEGER,
    
    },
    season:{
      type: DataTypes.STRING,    //(Verano, Otoño, Invierno o Primavera)
      
    }, 
  });
};
