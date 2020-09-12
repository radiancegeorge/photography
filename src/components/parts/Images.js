import React from 'react';

const Images = (props)=>{
    return(
        <div style = {{
            maxWidth: '400px'
        }}>
            <img src = {props.src} alt = {props.alt} style = {{
                width: '100%'
            }}/>
        </div>
    )
}

export default Images