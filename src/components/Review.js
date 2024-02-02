import React, {useState} from 'react'
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/Review.css'

function Review() {
    const [activeTab, setActiveTab] = useState('Overview')

    const handleTabClick = (tab) => {
        setActiveTab(tab)
    }
  return (
    <div className='review'>
    <div className='review-nav'>
        <FontAwesomeIcon className='review-icon' icon={faMagnifyingGlass}/>
        <FontAwesomeIcon className='review-icon' icon={faBars}/>
    </div>
    <div className='review-box'>
        <div className='box-nav'>
            <p className={activeTab === 'Overview' ? 'active' : ''} onClick={() => handleTabClick('Overview')}>Overview </p>
            <p className={activeTab ==='Ingredients' ? 'active' : ''} onClick={() => handleTabClick('Ingredients')}>Ingredients </p>
        </div>
    </div>

    </div>
  )
}

export default Review