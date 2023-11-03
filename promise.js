
console.log("-------------------------------------------------------")
console.log("ASynchronous  promise \n")
let newUser = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const userInfo = {
            name:"Mohammed Khalifah",
            age:1
        }
        resolve(userInfo)
         
    },3000)
})
let addNewUser = userInfo =>{
    let userAge = userInfo.age
    let adultAge;
    if(userAge>=18){
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    }else{
        // عشان يعمل ايرور لو كان اصغر
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }
     
}
newUser
    .then(addNewUser)
    .then(res =>{
        console.log(`** User Info received **`)
        console.log(res)
    })
    .catch(err => {
        console.log(err.message )
    })
    // لازم اعمل كاتش للريجيكت
