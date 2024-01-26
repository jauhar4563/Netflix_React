import React, { useEffect, useState } from 'react';
import axios  from '../../axios';
import YouTube from 'react-youtube';
import {API_KEY,IMG_URL} from '../../constants/constant'
import './rowpost.css'

function Rowpost(props) {
    const [ movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState()
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response?.data?.results)
        })
    },[]);
    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:1,
        }
    }
    const handleMovie = (id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US'`).then((response)=>{
            if(response?.data?.results[0]){
                setUrlId(response?.data?.results[0])
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props?.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${IMG_URL+obj.backdrop_path}`}
            alt="Poster" />
            )}
            
        </div>
       {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default Rowpost