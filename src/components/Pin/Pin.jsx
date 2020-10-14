import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import "./Pin.scss"

const Pin = () => {
    return(
        <div>
            <FontAwesomeIcon icon={faMapPin}  className="pin-container"/>
        </div>
    )
}

export default Pin;