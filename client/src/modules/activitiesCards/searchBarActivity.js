import React from 'react';
import { useState } from 'react';
import { getActivity } from '../../redux/actions.js';
import { connect } from 'react-redux';
import ActivityName from './activityName'

function SearchBarActivity({ activity, getActivity }) {
    const [formActualState, setFormActualState] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)
    const [activityNameButtonClose, setActivityNameButtonClose] = useState(true)

    function handleActivityNameButtonClose(){
        setActivityNameButtonClose(false)
    }

    function handleButtonClick() {
        setButtonClicked(true)
        setActivityNameButtonClose(true)
    }
    function handleChange(event) {
        setFormActualState(event.target.value)
    }

    function handleSubmit(event) {
        getActivity(formActualState)
        event.preventDefault()
    }

   

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name (ex: Ski, Rappel...)"
                    value={formActualState}
                    onChange={handleChange}
                ></input>

                <button
                    onClick={() => handleButtonClick()}
                    type="submit">BUSCAR ACTIVIDAD!
                </button>
                {buttonClicked ? <ActivityName
                    name={activity.name}
                    duration={activity.duration}
                    dificulty={activity.dificulty}
                    season={activity.season}
                    countries={activity.countries}
                    onClose={handleActivityNameButtonClose}
                    activityNameButtonClose={activityNameButtonClose}
                /> : null }

            </form>
        </div>


    )
}


const mapStateToProps = (state) => {
    return {
        activity: state.activity,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getActivity: name => {
            dispatch(getActivity(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBarActivity)