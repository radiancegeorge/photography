import React, {useEffect, useState} from 'react';
import Images from '../parts/Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import '../../styles/gallery.css';
import { useParams } from 'react-router-dom';

// import {useParams} from 'react-router-dom';
const Gallery = ()=>{
    const { id } = useParams();
    // alert(id)
    const [num, change] = useState(1);
    // console.log(num)
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
    let url = `http://localhost:4000/get_images/${num}`;
    useEffect(()=>{
        console.log('something')

        fetch(url).then(res=>{
            const response = res.json();
            response.then(res=>{
                if(res.max > src.data.length){
                    const promise = new Promise((resolve, reject) => {
                        const temp = src.data;
                        res.toBeSent.forEach(item => {
                            temp.push(item);
                            if (src.data.length === temp.length) {
                                resolve(temp)
                            }   
                        })
                    });
                    promise.then(res => {
                        setSrc({
                            data: res,
                            loading: null
                        });
                    })
                }
                
            }).catch(err=>{
                if(err) setSrc({
                  loading: <div className = 'loading'>An error occured</div>,
                  data: []
                })
            })
            
        });
        if (id) {
            window.addEventListener('scroll', () => {
                const scroll = document.documentElement.clientHeight + (window.pageYOffset || document.documentElement.scrollTop);
                const windowHeight = document.documentElement.offsetHeight
                if (scroll >= windowHeight) {
                    change(num + 1);
                    window.removeEventListener('scroll', () => {
                        alert('removed')
                    })
                }

            })
        }
    }, [url, src.data, id, num]);

    
    return(
       <section style={{
           paddingBottom: '60px'
       }}>
            <div style={{
                padding: '10px',
                textAlign: 'center',
                margin: '10px 0',
                // backgroundColor: 'purple',
                fontSize: '18px',
                color: "purple",
                fontWeight: 600,
                boxShadow: '1px 4px 5px lightgrey'
            }}>
               Gallery
           </div>
            <div className='gallery'>
                {src.data.map((img, key) => (
                    <Images key={key} src={img.photo} alt={img.name} />
                ))}
                {src.loading}
            </div>
       </section>
    )
}
export default Gallery;