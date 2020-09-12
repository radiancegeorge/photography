import React from 'react';

const Footer = ()=>{
    return(
        <footer style={{
            position: 'absolute',
            width: '100%',
            bottom: '0',
            backgroundColor: 'lightgrey'
        }}>
            <div style = {{
                padding: '20px',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center'
            }}>
                &copy;copyright {new Date().getFullYear()}
            </div>
        </footer>
    )
};
export default Footer