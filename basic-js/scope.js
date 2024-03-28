//// Inside the statement {} - Is called SCOPE

let name1='text-1'
const name2='text-2'
var name3='text-3' ////golobal scope

if (true) {
   
    var name5='text-5'
    name5='text changed'
    console.log(name1);

    // console.log(name4);
    console.log(name5);
}


console.log(name5);