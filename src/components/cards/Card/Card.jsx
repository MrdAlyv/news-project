import React, { useState } from 'react'
import axios from 'axios'
import './Card.css'
const Card = () => {

    const [data, setData] = useState("")


    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.npoint.io/28d8d790105050200e23')
            const fetchData = response.data.articles
            setData(fetchData)
        } catch (error) {
            console.error('error:', error);
        }
    };

    fetchNews()
    return (
        <div className='card'>
            {data && data.map((item, index) => (

                <div key={index}>
                    <img src={item.urlToImage} alt="card-image" className='card-image' />
                    <h4 className='card-title'>{item.title}</h4>
                    <p className='card-text' >{item.description}</p>
                    <a className='card-subtitle' href={item.url} target="_blank" rel="noopener noreferrer">Read More</a><br /><br />
                </div>
            ))}
        </div >
    )
}
export default Card;



