import React, {useState, useEffect} from 'react'
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/Review.css'

const getRandomColor = () => {
    const colors = ['#F5CE64', '#FAAA67', '#F7B0BC', '#BBCBA1']
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

function Review() {
    const [activeTab, setActiveTab] = useState('Overview')
    const [currentColor, setCurrentColor] = useState(getRandomColor())
    

  

    useEffect(() => {
        const colorChangeInterval = setInterval(() => {
            setCurrentColor(getRandomColor())
        }, 3000)
        return () => clearInterval(colorChangeInterval)
    }, [])

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
            <div className='rating-box' style={{backgroundColor: getRandomColor()}}>
                <div className='number'>
                    <h2></h2>
                </div>
                
            </div>
        </div>
    </div>

    </div>
  )
}

export default Review