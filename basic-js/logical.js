//// && - Both side should be TRUE  
//// || - Atleast one side should be TRUE

let loggedin= true;
let payment= false;

if (loggedin && payment) {
    console.log("Welcome to JS");
}
else {
    console.log("Buy the package");
}

let glogin = false;
let fblogin = false;

if (glogin || fblogin) {
    console.log("login successfully");
}
else {
    console.log("login your account")
}