import React, {useState} from 'react';
import compress from './ImageCompress';
import Upload from './Upload';
import modal from './modal'
const Admin = ()=>{
    const wait = <div style = {modal}>
        Please wait...
    </div>
    const [images, mount] = useState([])
    const [loading, mountLoading] = useState(null)
    return(

        <div style= {modal}>
            <div style={{
                display: "flex",
                flexFlow: 'column',
                alignItems: "center",
                justifyContent: "center",
            }}>
                <input type = 'file' multiple accept = 'image/jpeg' onChange ={ (e)=>{
                    //loading enters here
                    mountLoading(wait)
                    const data = compress(e);
                    data.then(photos=>{
                        console.log(photos.length)
                        mount(photos);
                        //loading leaves here
                        mountLoading(null)
                    })
                }}/>
                <button style={{
                    display: 'block',
                    padding: '20px',
                    margin: '20px auto',
                    backgroundColor: 'purple',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                }} 
                onClick = {
                    ()=>{
                        //output please wait for upload
                        mountLoading(wait)
                        const result = Upload(images);
                        result.then(res=>{
                            console.log(res)
                            if(res === null){
                                //find a way to output please select an image
                            }else if(res === 200){
                                //completed upload;
                                //output successful
                                mountLoading(null)

                                mount([]);
                                window.location.href = '/admin';
                                
                            }
                        })
                    }
                }>UPLOAD</button>
                <div className='display' style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}>
                    {
                        images.map((image, key)=>(
                           <div key = {key} style={{
                                flexBasis: '32%'
                           }}>
                                <img src= {image} alt= {key} style = {{
                                    width: '100%',
                                }}/>
                           </div> 
                        ))
                    }
                </div>

            </div>
            {loading}
        </div>
        
    )
}

export default Admin;