const Upload = async (data)=>{
    if(data.length !== 0){
        const push = await fetch('http://localhost:4000/uploads', {
            method: 'post',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const response =  await push.status;
        return response
    }else{
        return null
    }
}
export default Upload;