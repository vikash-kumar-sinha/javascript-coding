const name="vikash"
const id=1
//old way
console.log("my name is "+name+" and my id is "+id)

//new way

console.log(`my name is ${name.toUpperCase()} and my id is ${id}`)

console.log(name.charAt(2))

//one more way to declare strings
const anotherString = new String('vikash kumar sinha')//datatype=>object
//above method adds some more properties to the string which are rarely used
console.log(anotherString.length)
console.log(anotherString.toUpperCase())
console.log(anotherString.charAt(2))
console.log(anotherString.indexOf('h'))

const newString= anotherString.substring(0,4)//(start,end) and if start>end then swap them, if we give -ve values then it automatically converts it into 0
const newString2= anotherString.substring(4,0)//start>end then it makes (0,4)
const newString3= anotherString.substring(-3,4)// it makes(0,4)


console.table([newString,newString2,newString3])

const anotherNewString= anotherString.slice(0,4)
const anotherNewString2= anotherString.slice(4,0)//gives empty string does not swap like substring
const anotherNewString3= anotherString.slice(-4,-1)//it is taking from reverse end not converting into zero
console.table([anotherNewString,anotherNewString2,anotherNewString3])