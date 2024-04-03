//// 1ST METHOD
// function hello(name) {
//     return `Hello ${name}`
// }
// console.log(hello('Lian'));


//// 2ND METHOD
// let xname = function (name) {
//     return `Hello ${name}`
// }
// console.log(xname('Lian'));

//// ARROW FUNCTION METHOD
// let xname = (name) => {
//     return `Hello ${name}`
// }
// console.log(xname('Lian'));

let todos = [{
    title: 'Complete JS',
    isDone: true
},{
    title: 'Web Developement',
    isDone: false
},{
    title: 'GitHub',
    isDone: true
}]

let filter = todos.filter((xname) => xname.isDone === true)
console.log(filter);
