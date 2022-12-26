import React from "react"


export default function Card(props) {
    
    return (
        <div className="container">
            <img src={props.imageUrl} className="card--image" />
            <div className="container--right">

                <div className="location">
                    <img src="../images/location-icon.png" className="location--icon" />
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl} className="location--link">View on Google Maps</a>
                </div>

                <div className="travel--place">
                    <h1>{props.title}</h1>
                </div>

                <div className="travel--date">
                    <h4>{props.startDate} - {props.endDate}</h4>
                </div>

                <div className="travel--description">
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}