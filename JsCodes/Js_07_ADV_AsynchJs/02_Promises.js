// const demoPromise = new Promise(function(resolve,reject){
//     console.log("Preparing Task TO Execute");
    
//      setTimeout(function(){
//         console.log("Task Execution is started "); 
//         resolve() 
//      },4000);

// });
// demoPromise.then(function(){
//     console.log("Task successfully Executed ");
    
// });

//----------------------------------------------------------------------------------------------------------------------------------------------

// new Promise(function(resolve,reject){
//     console.log("Preparing Task TO Execute");
    
//      setTimeout(function(){
//         console.log("Task Execution is started "); 
//         resolve("Promise Resolve SuccessFully") 
//      },4000);

// }).then(function(message){
//     console.log("Task successfully Executed ");
//     console.log(message);
    
// });


//---------------------------------------------------------------------------------------------------------------------------------------------

// let promiseThree = new Promise(function(resolve,reject){
//    setTimeout(function(){
//     let error=false;
//     if(!error){
//      resolve("Promise Successfully resolved ");
//     }else{
//      reject("Promise is Rejected ");
//     }
//    },3000);
  
// });

// promiseThree.then(function(msg){
//     return msg
//     //.then chaining
// }).then(function(msg1){
//     console.log(msg1);
//  }).catch(function(msg){
//    console.log(msg);
//  })


//---------------------------------------------------------------------------------------------------------------------------------------------
//fetch 

//  fetch('https://api.github.com/users/hiteshchoudhary')
//  .then((response)=>{
//     return response.json();
//  })
//  .then((response)=>{
//     console.log(response);
//  })
//  .catch((err)=>{
//     console.log(err);
//  })

//----------------------------------------------------------------------------------------------------------------------------------------------
 //async await 

async function getData(){
    try{
       let response= await fetch('https://api.github.com/users/hiteshchoudhary');
       const data= await response.json();
       console.log(data);
       console.log(data.name);
    }catch(error){
      console.log(error);
    }
}
getData();

