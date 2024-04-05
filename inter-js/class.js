//// CLASS IS COLLECTION OF FUNCTION

class className {
    constructor (name) {
        this.name1 = name;
    }
    class1 () {
        console.log('Hi Lian ' + this.name1)
    }
    class2 () {
        console.log('Hi Martin')
    }
    class3 () {
        console.log('Hi Angelin')
    }
}

//// CLASS is call like this

let xname = new className('Matteo');
let xname1 = new className('Agassi');

xname.class1();
// xname.class2();
// xname.class3();

xname1.class1();