import React, { useState } from 'react'
import "./style.css";

function AccessDeniedUi() {
    return (
        <div className='main-access-div'>
            <div className='sub-access-div'>
                <h1>Access Denied</h1>
            </div>
        </div>
    )
}

function RestrictUser({ children }) {
    const [accessGranted, setAccessGranted] = useState(true)
    function block_blacklist_countries() {
        // Blacklist countries
        const blacklist_countries = [
            "PK", // Pakistan
        ]

        // Detecting the users country
        function get_country_code(api_url) {
            fetch(api_url, { method: 'GET' })
                .then(response => response.json()) // Getting ip info as json
                .then(result => {
                    if (blacklist_countries.includes(result.country)) { // If my ip country code is in blacklist
                        console.log('Access Denied')
                        setAccessGranted(false)
                    }
                })
                .catch(error => console.log('error', error))
        }

        // Getting country code from third party api
        get_country_code("https://get.geojs.io/v1/ip/country.json")
    }
    block_blacklist_countries();



    return accessGranted ? children : <AccessDeniedUi />;
}

export default RestrictUser