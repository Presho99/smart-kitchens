import React, {useState, useEffect} from 'react'
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/Review.css'



function Review({activeIndex, foodsData, currentColor}) {
    const [activeTab, setActiveTab] = useState('Overview')
   
    

  

    // useEffect(() => {
    //     const colorChangeInterval = setInterval(() => {
    //         setCurrentColor(getRandomColor())
    //     }, 3000)
    //     return () => clearInterval(colorChangeInterval)
    // }, [])

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
        <div className='rating'>
            <div className='rating-box' style={{backgroundColor: currentColor}}>
                <div className='number'>
                    <h2>{foodsData[activeIndex]?.rating}</h2>
                </div>
                
            </div>
            <div className='bio-box'>
                <h3>{foodsData[activeIndex]?.chef}</h3>
                <p></p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Review