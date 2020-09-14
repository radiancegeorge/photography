const compress = async (e)=>{
    FileList.prototype.map = Array.prototype.map;
    FileList.prototype.indexOf = Array.prototype.indexOf;
    const files = e.target.files;
    const promise = await new Promise((resolve, reject)=>{
        const subData = []
// eslint-disable-next-line
        files.map(file => {

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (image) => {
                const result = image.target.result;
                const img = document.createElement('img');
                img.src = result;
                img.onload = (image)=>{
                   const canvas = document.createElement('canvas') ;
                   canvas.width = 1200;
                   canvas.ratio = canvas.width / image.target.width;
                   canvas.height = image.target.height * canvas.ratio;
                   const ctx = canvas.getContext('2d');
                   ctx.drawImage(image.target, 0, 0, canvas.width, canvas.height);
                   const data = ctx.canvas.toDataURL('image/jpeg', 0.5);
                    subData.push(data);
                }
            }
            
        });
        setInterval(() => {
            if(subData.length === files.length){
                resolve(subData)
                clearInterval()
            }
        }, 1000);
    });
    const result = await promise;
    return result
}
export default compress;