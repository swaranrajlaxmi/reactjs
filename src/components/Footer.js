import React from "react"
import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import GithubIcon from "../images/gitHub-icon.png"

export default function Footer() {
    return (
        <div className="Footer--div">
            <div>
                <i style={{backgroundImage: `url(${TwitterIcon})`}} className="email--icon"></i>
            </div>
            <div>
                <i style={{backgroundImage: `url(${FacebookIcon})`}} className="--icon"></i>
            </div>
            <div>
                <i style={{backgroundImage: `url(${InstagramIcon})`}} className="instagram--icon"></i>
            </div>
            <div>
                <i style={{backgroundImage: `url(${GithubIcon})`}} className="github--icon"></i>
            </div>
        </div>
        
    )
}