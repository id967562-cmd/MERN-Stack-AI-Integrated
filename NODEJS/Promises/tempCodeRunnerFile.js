//doTask1(function (result1) {
//     doTask2(result1, function (result2) {
//         doTask3(result2, function (result3) {
//             console.log("All tasks done");
//         });
//     });
// });

//Fake Async Task
function waitTwoSeconds(){
    return new Promise(function(resolve,reject){  //I'm going to do some work.I don't have the final result yet,
                                             //but I'will give you the result later.
                                             
        setTimeout(() => {    //wait for approx 2 sec then call resolve()
            resolve("Done Waiting");
        }, 2000);
    });
}

console.log("Start");

waitTwoSeconds()
     .then(function(message){
        console.log(message);  // "Done waiting"
     })
     .catch(function(message){
        console.log("Something went wrong");
     });

console.log("End");