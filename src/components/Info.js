import React from "react"
import profilePhoto from "../images/profile-photo.png"
import emailIcon from "../images/email-icon.png"
import linkedInIcon from "../images/linkedIn-icon.png"

export default function Info(){
    return (
        <div>
            <img src={profilePhoto} alt="Profile Photo" className="profile--photo"/>
            <div className="body--div">
                <h1 className="info--name">Aparna Sharma</h1>
                <h3 className="info--profile">Frontend Developer</h3> 
                <h5 className="info--site">aparnasharma.website</h5>
                <div>
                    <button className="email--button">
                        <i style={{
                            backgroundImage: `url(${emailIcon})`
                        }} className="email--icon"></i>
                        <span className="email--span">Email</span>  
                    </button>
                    <button className="linkedin--button">
                        <i style={{
                            backgroundImage: `url(${linkedInIcon})`
                        }} className="linkedin--icon"></i>
                        <span className="linkedin--span">LinkedIn</span>  
                    </button>
                </div> 
            </div> 
        </div>
    )
}
