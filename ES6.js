const arr3 = ["hey", "hello", "wassup", "goodmorning", "hi", "howdy"]
const arr = [1, 2, 3];
const arr2 = [...arr];
const EXARRAY = [55,69];

function xyz ( x,y,...z){
    console.log ( x ,z)
    console.log (z)
}
xyz(...arr3,arr)

// console.log (arr2);
const arrow =( x, y, z)=>{
    // console.log (x, y, z)

};
arrow( 2,...arr,...EXARRAY);
console.log ( 2,...arr, ...EXARRAY)
 

function abc(a,c,...b) {
    console.log (a)
    console.log (b)
    console.log (c)
  }
  abc(arr,arr3,arr2)
