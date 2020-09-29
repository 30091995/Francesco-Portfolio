import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer (){
    return (
        <div className="sticky-footer border-up background-white" >
            <div className="light-grey" style={{paddingLeft: "30px",paddingTop: "20px"}}> © Francesco Saccone</div>
            <div className="light-grey" style={{paddingRight: "30px", paddingTop: "20px"}}>
                <a  href="https://www.facebook.com/profile.php?id=100008975043399"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a>
                <a  href="https://github.com/30091995"><FontAwesomeIcon icon={faGithubSquare} size="lg"/></a>
                <a href="https://www.linkedin.com/in/sacconefrancesco/"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
            </div>
        </div>
    )
}

export default Footer