let MyTodos = [];

MyTodos.push('Go To College');
MyTodos.push('Go To School');
MyTodos.push('Go To Trip');
MyTodos.push('Go To Gym');
MyTodos.push('Go To Work');

// let findtodo = function(list, search) {
//     let result = list.findIndex(function(xname) {
//         return xname.toLowerCase() == search.toLowerCase()
//     })
//     return result;
// }
// console.log(findtodo(MyTodos, 'gO To gYm'));

let findtodo = function(list, search) {
    let result = list.find(function(xname) {
        return xname.toLowerCase() == search.toLowerCase()
    })
    return result;
}
console.log(findtodo(MyTodos, 'gO To gYm'));