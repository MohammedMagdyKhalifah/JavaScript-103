console.log("-------------------------------------------------------")
console.log("test\n")
let st = "I Love JavaScript"
let regex = /JavaScript/;
let containRegex = regex.test(regex);
console.log("st =  " + st)
console.log("Regex = " + regex)
console.log("Does the string contain 'JavaScript'? " + containRegex)

console.log("-------------------------------------------------------")
console.log("replace\n")
let st2 = "I Love JavaScript"
let regex2 = /JavaScript/;
let replacRegex = st2.replace(regex, "Java");
console.log("st2 =  " + st2)
console.log("Regex = " + regex2)
console.log("After replace: " + replacRegex)

console.log("-------------------------------------------------------")
console.log("Search\n")
let st3 = "I Love JavaScript"
let position = st3.search(/JavaScript/)
console.log("st3 =  " + st3)
console.log("Position of 'JavaScript': "+position)

console.log("-------------------------------------------------------")
console.log("Match\n")
let st4 = `RegExr was created by gskinner.com.
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.
Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.`

let ands = st4.match(/and/g)
console.log("st4 =  " + st4 +"\n")
console.log(`Found ${ands.length} instances of "and":`)
