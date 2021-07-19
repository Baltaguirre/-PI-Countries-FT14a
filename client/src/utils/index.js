 export async function countriesOrder(orderTarget, criteria) {

    let orderedCountries
    if (criteria.name === 'Ascendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
        )

    if (criteria.name === 'Descendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0),
        )

    if (criteria.population === 'Ascendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.population > b.population ? 1 : a.population < b.population ? -1 : 0),
        )

    if (criteria.population === 'Descendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.population < b.population ? 1 : a.population > b.population ? -1 : 0),
        )

    if (criteria.continent === 'Ascendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.continent > b.continent ? 1 : a.continent < b.continent ? -1 : 0),
        )

    if (criteria.continent === 'Descendent')
        orderedCountries = orderTarget.sort((a, b) => (
            a.continent < b.continent ? 1 : a.continent > b.continent ? -1 : 0),
        )


    return orderedCountries;

}

export async function filterContinentActivity(orderTarget, criteria) {
let filteredCountries;
if (criteria.continent){
  filteredCountries = orderTarget.filter((countries) => 
    countries.continent.includes(criteria.continent)
  )
} else {
  if (criteria.activities){
    filteredCountries = orderTarget.filter((country) =>
    country.activities.filter((activity) => activity.name === criteria.activities).length)
    }
}
return filteredCountries;
}  

export function validate(input) {
    let errors = {}
    if (!input.difficulty) {
      errors.difficulty = 'Se requiere un nivel de dificultad'
    } else if (/^[0-5]$/.test(input.difficulty)) {
      errors.difficulty = 'Solo debes ingresar numeros del 1 al 5'
    };
    if (!input.name) {
      errors.name = 'Se requiere un nombre de actividad'
    };
    if (!input.season) {
      errors.season = 'Se requiere un nombre de temporada'
    };
    if (!input.duration) {
      errors.duration = 'Se requiere duración de actividad en horas'
      } else if(input.duration > 24 || input.duration < 1) {
        errors.duration= 'La duración debe ser entre 1 y 24!'
      }
    if (!input.country) {
      errors.country = 'Se requiere al menos un nombre de país'
    }
    return errors
  }