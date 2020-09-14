import React from 'react';

const Images = (props)=>{
    return(
        <div style = {{
            maxWidth: '400px',
            boxShadow: '4px 4px 5px lightgrey',
            padding: '2px',
            marginBottom: 5

        }}>
            <img src = {props.src} alt = {props.alt} style = {{
                width: '100%',
                cursor: 'pointer'
            }}/>
        </div>
    )
}

export default Images