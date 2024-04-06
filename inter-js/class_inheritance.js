class user {
    constructor (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    //// GETTER
    getusername () {
        return `UserName is ${this.fname} ${this.lname}`;
    }
    //// SETTER
    setusername (newName) {
        this.fname = newName;
    }
}

//// INHERITANCE
class customer extends user {

}

let user1 = new user('Lian','Matteo');
user1.setusername('Mottu')
xname = user1.getusername();
console.log(xname);

let customer1 = new customer('Martin','Angelin');
cname = customer1.getusername();
console.log(cname);