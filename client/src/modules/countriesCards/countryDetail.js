import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryDetail } from '../../redux/actions';


function CountryDetail({ match, country, getCountryDetail }) {
console.log(country)
    useEffect(() => {
        
        getCountryDetail(match.match.params.id)
    })

    return (
        <div>
            <div>
                <h1>{country.name} ({country.id})</h1>
            </div>
            <div>
                <img src={country.flag} alt="Imagen de bandera rota" />
            </div>
            <p>Capital:{country.capital}</p>
            <p>Region:{country.region}</p>
            <p>Subregion:{country.subregion}</p>
            <p>Area:{country.area}km²</p>
            <p>Population:{country.Population}</p>
            <p>Ativities:{' '}
                <div>
                    {
                        country.Ativities ? country.Ativities.map((activity) => <span>{activity.name}</span>) : null
                    }
                </div>
            </p>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        country: state.country,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCountryDetail: (countryId) => dispatch(getCountryDetail(countryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail)