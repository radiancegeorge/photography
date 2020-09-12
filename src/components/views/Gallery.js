import React, {useEffect, useState} from 'react';
import Images from '../parts/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import '../../styles/gallery.css';
const Gallery = ()=>{
    const [src, setSrc] = useState({
        data: [],
        loading: <div className = 'loading' style={{
            color: 'red', 
            fontSize: '50px'
        }}>
            <span><FontAwesomeIcon icon={faBasketballBall} /></span>
            <div style = {{
                fontSize: '15px',
                color: 'black',
                marginTop: '20px'
            }}>Loading...</div>
                </div>
    })
    let url = 'http://localhost:4000/get_images';
    useEffect(()=>{

        fetch(url).then(res=>{
            // setSrc({
            //     loading: <div>Loading...</div>,
            //     data: []
            // })
            const response = res.json();
            response.then(res=>{
                setSrc({
                    data: res,
                    loading: null

                })
            })
        })
    }, [url])


    return(
        <div className = 'gallery'>
            {src.data.map((img, key)=>(
                <Images key = {key} src = {img} alt = {key}/>
            ))}
            {src.loading}
        </div>
    )
}
export default Gallery;