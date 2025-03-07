const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("promise");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("resolved");
    
})