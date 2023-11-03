console.log("-------------------------------------------------------")
console.log("Destructuring\n")
let ages = [25,30,32]
let [fristAge , secondAge , thirdAge] = ages;
console.log(fristAge , secondAge , thirdAge)

console.log("-------------------------------------------------------")
console.log("undefined Destructuring\n")
let colors = ["red","green"]
let [fristColor,secondColor,thirdColor] = colors
console.log(fristColor , secondColor , thirdColor)

console.log("-------------------------------------------------------")
console.log("Destructuring Default value\n")
let colors2 = ["red","green"]
let [fristColor2,secondColor2,thirdColor2="blue"] = colors2
console.log(fristColor2 , secondColor2 , thirdColor2)

console.log("-------------------------------------------------------")
console.log("Destructuring تجاهل قيم\n")
let colors3 = ["red","green","blue","black"]
let [fristColor3,secondColor3,,fourthColor3] = colors3
console.log(colors3)
console.log(fristColor3 , secondColor3 , fourthColor3)

console.log("-------------------------------------------------------")
console.log("Destructuring Nested array\n")
let numbers = [1,2,[3,4]]
let [a,b,[c,d]]=numbers
console.log(numbers)
console.log(a,b,c,d)

console.log("-------------------------------------------------------")
console.log("Destructuring swap\n")
let x = 10, y = 20;
console.log(`x = ${x}  y = ${y}`);
[x,y] = [y,x];
console.log(`x = ${x}  y = ${y}`);

console.log("-------------------------------------------------------")
console.log("Lvalue Rvalue\n");
let colors4 = ['red','green'];
[colors4[0],colors4[1]]=["blue" , "black" , "white"];
console.log(colors4);

console.log("-------------------------------------------------------")
console.log("Destructuring Object\n")
let student = {
    name : "Mohammed Khalifah",
    Age : 25
}
let {name:yourName,Age:yourAge} = student;
console.log(student)
console.log(yourName , yourAge )

console.log("-------------------------------------------------------")
console.log("Destructuring Object with same name\n")
let student1 = {
    name : "Mohammed Magdy Khalifah",
    age : 28,
    gender: true
}
let {name,age,gender} = student1;
console.log(student1);
console.log(name , age,gender);

console.log("-------------------------------------------------------")
console.log("Destructuring Object with same name but name Repeated\n")
let student2 = {
    name : "Khalifah",
    age : 21,
    gender: true
};
// لازم اعمل القويسين عشان ما يعملهاش على انها بلوك
({name,age,gender} = student2);
console.log(student2)
console.log(name , age,gender)

console.log("-------------------------------------------------------")
console.log("Destructuring Nested Object\n")
let student3 = {
    name:{
        fristName:"Mohammed",
        lastName:"Khalifah"
    },
    age:21

};
let {name:{lastName}} = student3;
console.log(student3);
console.log(lastName);

console.log("-------------------------------------------------------");
console.log("Destructuring String Key\n");
let student4 = {
    name : {
        fristName: "Mohammed",
        lastName: "khalifah"
    },
    "my age":25
};

console.log(student4);
console.log(student4["my age"]);

console.log("-------------------------------------------------------");
console.log("Destructuring  Rest declaration\n");
let numbers2 = [1,2,3,4,5];
// تجميع
let [frist,second,...others]=numbers2;
console.log(frist,second,others);

console.log("-------------------------------------------------------");
console.log("Destructuring  Spread Operator\n");
let frist2 = [1,2,3];
let second2 = [4,5];
let third2 = [frist2,second2];
console.log(third2);
third2 = [...frist2,...second2]
console.log(third2);

console.log("-------------------------------------------------------");
console.log("Destructuring  Spread Operator و Rest Declaration\n");
function sum(fristNum,secondNum,...others){
    console.log(...others);
    return fristNum+secondNum;
};
console.log(sum(1,2,60,80,75))

console.log("-------------------------------------------------------");
console.log("Destructuring  \n");
let numbers3  = [1,2]
let [frist3,second3,...others2]= numbers3;
console.log(frist3,second3,others2)

console.log("-------------------------------------------------------");
console.log("Destructuring  \n");
let student5 = {
    name: "salam",
    age: 25,
    gender:"male"
}
let {name:name6,...others3} = student5;
// حيعامل الباقي على انه اوبجكت
console.log(name6,others3);

console.log("-------------------------------------------------------");
console.log("Destructuring عمل Destrcturing على Object يحتوي على قيم افتراضية \n");
let student6 = {
    name: "sami",
    age: 18,

}
let {name:name8, nickname="unknown"}=student6;
console.log(name8,nickname);