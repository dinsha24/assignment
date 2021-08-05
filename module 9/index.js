let downloaded=true;
let fetchSomeData=new Promise((resolve,reject)=>{
    if(!downloaded){
        reject("error fetching the data")
        
    }
    else{
        resolve({
            
            message: "congratulations"
        })
    }

})
fetchSomeData.then(fetchedData=>{
    console.log("then:",fetchedData);

}).catch(err =>{
    console.log("catch:",err);
})