import React, {useState, useEffect} from 'react'
import { faMagnifyingGlass, faBars, faThumbsUp, faThumbsDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/Review.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function Review({activeIndex, foodsData, currentColor}) {
    const [activeTab, setActiveTab] = useState('Overview')
    const [likeWidth, setLikeWidth] = useState(50)
    const [likeText, setLikeText] = useState(`${Math.floor(Math.random() * (101 -36 + 1))+ 36} Likes`)
    const [likesVisible,setLikesVisible] = useState(false)
    const [thumbColor, setThumbColor] = useState('#fff')
   
    
const handleLikeClick = () => {
    setLikeWidth(150)
    setLikeText(`${Math.floor(Math.random() * (101 -36 + 1)) + 36}  Likes`)
    setLikesVisible(true)
    setThumbColor((prevColor) => (prevColor === '#000' ? '#fff' : '#000'))
    setTimeout(() => {
        setLikeWidth(50)
        setLikesVisible(false)
    }, 1000)

    toast.success('Added to liked recipes', {
        position: "top-right",
        autoClose:1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}
   

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
                <FontAwesomeIcon icon={faStar}/>
                
            </div>
            <div className='bio-box'>
                <h3>{foodsData[activeIndex]?.chef}</h3>
                <p>{foodsData[activeIndex]?.location}</p>
                <div className='desc'>
                    <p>{foodsData[activeIndex]?.bio}</p>
                </div>
            </div>
            <div className='thumb-box'> 
                <div className='like' onClick={handleLikeClick} style={{width: `${likeWidth}px`}}>
                    <FontAwesomeIcon icon={faThumbsUp} className="thumbs" style={{color: thumbColor}}/>
                    {likesVisible && <span className='like-text'>{likeText}</span>}
                </div>
                <div className='unlike'>
                    <FontAwesomeIcon icon={faThumbsDown} className="thumbs"/>
                </div>

            </div>
        </div>
    </div>
<ToastContainer/>
    </div>
  )
}

export default Review