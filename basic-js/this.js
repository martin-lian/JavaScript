//// OBJECT CAN USE TO STORE MULTIPLE DATAS IN ONE VARIABLE. OBJECT SYMBOL IS - {}
let myObj = {
    title: 'Personal Data',
    name: 'Martin J',
    age: '29',
    sex: 'Male',
    dob: '19-01-1995',
    salary: 15000,
    
    address: function() {
         console.log('No. 32 Convent Street,Crawford,Trichy-12')
    },

    education: function(data) {
        console.log(data);
    },

    newSalary: function(newSal) {
        this.salary=newSal;  // this KEYWORD is only use inside the METHOD
    }

}

myObj.newSalary('20000');
console.log(`${myObj.title} - My Name Is ${myObj.name}`);
console.log(`This Is My Salary ${myObj.salary}`);

// myObj.address();
// myObj.education('M.C.A.');