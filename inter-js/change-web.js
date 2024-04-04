// let myTag = document.querySelector('p');
// myTag.textContent = 'Changed In JS'


// let myTag = document.querySelectorAll('p');
// myTag.forEach ((page) => page.textContent =  'JS In Loop')

// ////REMOVE TAGS
// let myTag = document.querySelectorAll('p');
// myTag.forEach ((page) => page.remove())

////CREATE TAGS
// let newTag = document.createElement('p');
// newTag.textContent = 'Created With JS'
// document.querySelector('body').appendChild(newTag);

//// INPUT TRACKING TYPE 1
// document.querySelector('#idtwo').addEventListener('input', (eve) => console.log(eve.target.value));


//// INPUT TRACKING TYPE 2
function search() {
    let myVal = document.getElementById('idtwo').value 
    console.log(myVal);
}
