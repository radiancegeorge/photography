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
            fontSize: '20px'
        }}>
            <span><FontAwesomeIcon icon={faBasketballBall} /></span>
            <div style = {{
                fontSize: '15px',
                color: 'black',
                marginTop: '20px',
                textAlign: 'center'
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
            }).catch(err=>{
                if(err) setSrc({
                  loading: <div className = 'loading'>An error occured</div>,
                  data: []
                })
            })
        })
    }, [url])


    return(
       <section >
           <div style = {{
               padding: '20px',
                textAlign: 'center',
                fontWeight: 600,
                background: 'lightgrey'
           }}>
               Gallery
           </div>
            <div className='gallery'>
                {src.data.map((img, key) => (
                    <Images key={key} src={img} alt={key} />
                ))}
                {src.loading}
            </div>
       </section>
    )
}
export default Gallery;