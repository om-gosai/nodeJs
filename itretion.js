// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// let heros = ["flash","superman","batman"]

// let arr = 0;

// while (arr < heros.length) {
//     console.log(`value is = ${heros[arr]}`);
//     arr = arr+1
// }


const map = new Map ()
map.set('In','india')
map.set('Ar','africa')
map.set('AM','america')
map.set('gm','germany')

for (const key in  map) {
    // console.log(key);
    
}

let coding = ["js","ruby","paython","C++"]

coding.forEach( (item) => {
    // console.log(item);
    
});

coding.forEach( function (val){
    // console.log(val);
    
});

function printMe (item){
    // console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    // console.log(item,index,arr);
    
});


const myArray = [1,2,3,4,5,6,7,8,9,10]


const newArray = myArray.filter( (num)=>{
    return num>4
} )

console.log(newArray);
