let myString: string;
let myNum: number;
let myBool: boolean;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;
let strNumTuple: [string, number];

/*
let myVoid: void = undefined;
let myNull: void = undefined;
let myUndefined: void = undefined;
*/

let myVoid: void = null;
let myNull: void = null;
let myUndefined: void = null;

myString = 'Hello world!';
myString = 'Hello'.slice(0, 3);
myNum = 27;
myBool = false;

strArr = ['Hello', 'World'];
numArr = [1, 2, 3];
boolArr = [true, false, true];
strNumTuple = ['Hello', 3];

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(strArr);
console.log(numArr);
console.log(boolArr);
console.log(strNumTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
