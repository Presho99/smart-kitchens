import React, {useEffect, useState} from 'react'
import '../components/List.css'

function List() {
    const [foodsData, setFoodsData] = useState([])

    useEffect(() => {
        fetch('https://presho99.github.io/skfoods/foods')
        .then(response => response.json())
        .then(data => setFoodsData(data.foodsData))
        .catch(error => console.error('Error fetching data:', error))
    }, [])
  return (
    <div className='list'>
        <ul>
            {foodsData.map((food) => (
                <li key={food.id}>
                    <img src={food.avatar} className="image"/>
                    <p>{food.name}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List