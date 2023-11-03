console.log("-------------------------------------------------------")
console.log("ASynchronous\n")
console.log(1)
console.log(2)
// دالة تأخير الوقت بناء على طلبنا
setTimeout(() => {
    console.log(3)
},3000)
console.log(4)
console.log(5)

