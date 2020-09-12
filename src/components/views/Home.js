import React from 'react';
import bgImage from '../../bg.jpg';
import AnimatedName from '../parts/AnimatedName'

 const Home = ()=>{
     const detail = {
         name: 'Radiance Obi',
         occupation: 'Photographer'
     }
    return(
        <div>
            <section className= 'jumbotron' style ={{
                backgroundImage: `url(${bgImage})`,
                padding: '10px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'

            }}>
                <AnimatedName details = {detail} />
            </section>
        </div>
    )
}
export default Home;