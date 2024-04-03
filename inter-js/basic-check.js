//// MDN JAVASCRIPT STRING

let mail = 'martin@gmail.com'
let pass = '123 '

function mailcheck (user) {
    if (user.includes('@')) {
        return true;
    } else {
        return false;
    }
}
console.log(mailcheck(mail));

function passcheck (pword) {
    if (pword.includes('1234') && (pword > 6)) {
        return true;
    } else {
        return false;
    }
}
console.log(passcheck(pass));