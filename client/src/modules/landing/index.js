import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <Link to='/home'>
                <h1>Bienvenidos a la Country App!</h1>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}