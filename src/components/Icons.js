import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses, faMessage, faMicrophone, faUtensils, faUser} from '@fortawesome/free-solid-svg-icons'
import "../components/Icons.css"

const iconNames = [faUtensils, faChampagneGlasses, faMessage, faUser, faMicrophone]


function Icons() {
  return (
    <div className='icons'>
       
        {iconNames.map((icon, index) => (
             <div className='icon-container'>
            <FontAwesomeIcon key={index} icon={icon} className="itself"/>
            </div>
        ))}
       
       

    </div>
  )
}

export default Icons