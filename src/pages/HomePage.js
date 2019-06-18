import React from 'react'
import { Link } from 'react-router-dom'
import SearchAppBar from '../components/Header'
// import home_page from '../assets/img/'

const logoText = {
    color:"white", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)",
    fontStyle: "italic",
    fontSize: "600%",
    textAlign: 'center'
}

const logoIcon = {
    height: '12%', 
    width: "12%", 
    webkitFilter: "invert(70%)"
}

const imgStyle = {
    objectFit: "contain", 
    width: "100%", 
    height: "100%"
}

export default function HomePage (props) {
    
    const filePath = require('../assets/img/home_page.jpg')
    const iconPath = require('../assets/icons/hexagon.png')
    
    return(
        <div>
            <div>
                <SearchAppBar />
            </div>
                <div style={{backgroundSize: "contain"}}>
                    <img src={filePath} alt={"home page"} style={imgStyle}/>
                    <div style={logoText}>
                    <img src={iconPath} style={logoIcon} alt={"logo"}/>
                    {" shift"}
                </div>
            </div>

        </div>
    )
}