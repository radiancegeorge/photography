import React, {useState, useEffect} from 'react';
import '../../styles/animatedNames.css'

const AnimatedName = (props)=>{
    const name = props.details.name,
    occupation = props.details.occupation,
    [animateText, change] = useState({
        playIn: 'play-in',
        playOut: 'play-out',
        condition: false
    });
   

    useEffect(()=>{
        setTimeout(() => {
            change({
                playIn: 'play-in',
                playOut: 'play-out',
                condition: !animateText.condition
            });
        }, 10000);
    }, [animateText.condition])
    
     
    return(
        <div style={{
            padding: '20px',
        }}>
            <p style={{
                position: 'relative'
            }} className = {
                animateText.condition === false ? animateText.playIn : animateText.playOut
            }>
                HI! I AM <span> {name}</span>
            </p>
            <p style={{
                position: 'relative'
            }} className={
                animateText.condition === false ? animateText.playOut : animateText.playIn
            }>
                And I am a <span> {occupation} </span>
            </p>
        </div>
    )
};

export default AnimatedName;