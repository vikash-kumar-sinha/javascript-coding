// two types of data types in javaScript
//1. primitive(7 types) => String,Number,Boolean,null,undefined,Symbol,BigInt
//2.non-primitive(refrence type)=>array,objects,functons

//symbol gives unique values
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id == anotherId);//false 

const bigIntNumber=12345678952n;

const arrVariable=["1","2"] //datatype=> object
const myObj={
    id:1,
    name:"vikash"
} // data type=>object

const myFunObj= function(){console.log("hello world")}; //datatype =>function Object
