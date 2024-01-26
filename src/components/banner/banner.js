import React, { useEffect, useState } from 'react'
import {API_KEY,IMG_URL} from '../../constants/constant'
import axios  from '../../axios'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response?.data?.results[0])
        })
    },[])
  return (
    <div
    style={{backgroundImage:`url(${IMG_URL+movie?.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner