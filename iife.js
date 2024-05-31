

// iife: Immediately Invoked Function Expression


// (function (a,b){
//     console.log(a+b);
// })(10,20)


//(()=>{
//     console.log("Hello World")
// })()


// var a  = 10


// function hello(){
//     a = 10
// }

(()=>{
    if(10>5){
        var secret = "12345"
        console.log("inside", secret)
    }
})()

console.log("outside", secret) 


