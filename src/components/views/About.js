import React from 'react';
const About = ()=>{
    return(
        <div id = 'about' style={{
            padding: '20px 0'
        }}>
            <div style ={{
                padding: '10px',
                textAlign: 'center',
                margin: '10px 0',
                // backgroundColor: 'purple',
                fontSize: '18px',
                color: "purple",
                fontWeight: 600,
                boxShadow: '1px 4px 5px lightgrey'
            }}>
                About
            </div>
            <div style ={{
                padding: '0 10px 40px 10px'
            }}>
                <h3>
                    Some Heading
                </h3>
                <p style={{
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    fontSize: '15px'
                }}>
                    A really good writting about my self.
                    i am such a cool guy, well if you dont know me, then you are missing a lot
                </p>
                <h3>
                    Some Heading
                </h3>
                <p style={{
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    fontSize: '15px'
                }}>
                    A really good writting about my self.
                    i am such a cool guy, well if you dont know me, then you are missing a lot
                </p>
                <h3>
                    Some Heading
                </h3>
                <p style={{
                    wordWrap: 'break-word',
                    wordBreak: 'break-word',
                    fontSize: '15px'
                }}>
                    A really good writting about my self.
                    i am such a cool guy, well if you dont know me, then you are missing a lot
                </p>
            </div>
        </div>
    )
};
export default About;