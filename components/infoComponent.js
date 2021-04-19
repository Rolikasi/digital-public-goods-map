import React, { useRef, useState, useEffect } from 'react';

export default function InfoComponent(props) {
    console.log('info', props.selectedGood)

    return (
        
        <div>
            
            <div>{props.selectedGood.name}</div>
            {(props.selectedGood.locations) &&
            <div><ul>Deployment countries</ul> {Object.values(props.selectedGood.locations.deploymentCountries).map(country => {
                return(
                <li key={"deploy-" + country}>{country}</li>
                )
            })}</div>}
            {(props.selectedGood.locations) &&
            <div><ul>Development countries</ul> {Object.values(props.selectedGood.locations.developmentCountries).map(country => {
                return(
                <li key={"develop-" + country}>{country}</li>
                )
            })}</div>
            }
        </div>
    )

}