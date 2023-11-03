
console.log("-------------------------------------------------------")
console.log("ASynchronous  callback \n")
console.log("Start")
function userInfo(name, callback){
    setTimeout( () => {
        console.log(`** User Info received **`)
        // return name;
        callback(name)
    },3000)
}
let userName = userInfo("Mohammed Khalifah",name => {
    console.log("your name is "+ name)
})
console.log("End")