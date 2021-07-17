import React from 'react';
import { connect } from 'react-redux';
import { getCountries, postActivity } from '../../redux/actions';
import { useState, useEffect } from 'react'
import { validate } from '../../utils/index'



function ActivityPost({ countries, activityPost, getAllCountries }) {
  const [input, setInput] = useState({
    name: '',
    dificulty: '',               // 1 a 5
    duration: '',
    season: '',
    countries: [],                 //otoño, invierno, primavera, verano
  });

  const [errors, setErrors] = useState({
    name: '',
    duration: '',
    countries: '',
  })
  
  useEffect(() => {
    getAllCountries()
    
  },[])

//mis handlers
  function handleInputChange(event) {
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value
    }))
    
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  function handleCountriesSelection(event) {
    if (event.target.value === "") {
      setErrors({ 
        ...errors, 
        countries: "Debes elegir uno o varios paises " });
      return;
    }
    setErrors({ 
      ...errors, 
      countries: "" });
    const countryExists = input.countries.find(
      (item) => item === event.target.innerText
    );

    if (!countryExists) {

      setInput({
        ...input,
        countries: [...input.countries, event.target.value],
      });
    }
  }

 function handleSubmit(event){
  event.preventDefault();
  activityPost(input)
  console.log(input)
} 

 

  //render
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Actividad:</label>
        <input className={errors.name && 'danger'}
          name="name"
          type="text"
          value={input.name}
          onChange={handleInputChange}
          placeholder="Nombre" />
        {errors.name && (
          <p className="danger">{errors.name}</p>
        )}
      </div>
      <div>
        <label>Temporada:</label>
        <select onChange={handleInputChange} name="season">
          <option value={input.season} >
            {"Elegir"}
          </option>
          <option value="verano">Verano</option>
          <option value="otoño">Otoño</option>
          <option value="invierno">Invierno</option>
          <option value="primavera">Primavera</option>
          <option value="allseasons">Todo el año</option>
        </select>
      </div>

      <div>
        <label>Dificultad:</label>
        <select onChange={handleInputChange} name="dificulty">
          <option value={input.dificulty} >
            {"Elegir"}
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

      </div>

      <div>
        <label>Duración:</label>
        <input className={errors.duration && 'danger'}
          name="duration"
          type="number"
          value={input.duration}
          onChange={handleInputChange}
          placeholder="En horas" />
        {errors.duration && (
          <p className="danger">{errors.duration}</p>
        )}
      </div>
      <label>País:</label>
      <select onChange={handleCountriesSelection}>
              <option value="" >
                Elige tu País o Países!
              </option>
              {countries &&
                countries.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
            </select>
      <input
        name="countries"
        type="text"
        value={input.countries}
        onChange={handleInputChange}
        placeholder="País" />

      <input type="submit" value="Submit" />

    </form>
  )
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    countries: state.countries,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    activityPost: (activity) => dispatch(postActivity(activity)),
    getAllCountries: () => dispatch(getCountries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPost)