
//______________________________________________ Enums: _______________________________________________________________//


// 1: (enums the set of value) when you want to represent a set of related values.
// 2: choose one value from multiple options.
// 3: enums return index.
// 4: enums define index.
// 5: enums return value.

// Syntax: enum Roles {
//          user , 
//          admin
//        }

//___________________________________________ Real Life Example : _____________________________________________________________
// for eg 1 website hy , website ka 1 admin hota hy , or 1 user hota hy , means k website is like proprerty k isky 2 options hyn.
//_____________________________________________________________________________________________________________________________

enum Roles {           // when enums constants are not explictlt assigned numeric values they r automatically assigned incremental 
    user = "user",    // numeric values starting from zero. and then increment hota rahega (0 , 1 , 2, .....) 
    admin = "admin"    // values assign krdi inko.   
}

type LoginDetais = {
    name?: string;      // name ki need nhi hy it does not matter k mentiond hy ya nhi.
    email: string;
    password: string;
    role: Roles         // pehly hmny esay likha tha role: [user , admin] but ye error dega so we use enums. 
}                       // Roles type hy so usko yha define krdiya. 

const user1 = {
    email: "yousra@gmail.com",
    password: "qhon",
    roles: Roles.admin
}

const user2 = {
    email: "niba@gmail.com",
    password: "patanhiqhon",
    roles: Roles.user
}

//..............................................................................................................................

// ________________________________________________  Another Example: __________________________________________________________

enum Students {
    yousra,
    niba,
    maria,
    azaan,
    ahsen,
}
//const student : Students = Students.niba        //  first variable. 
const student: Students = Students['maria']      //  we get index number 
//  hum esay bhi likh sakty hyn both methos are correct
//console.log(student) ;                          //  output is 1 coz index number of niba is 1 . 


// then we make second variable: 

const test: string = Students[0]             // we get value (name) with the help of index number.
console.log(test);

//............................................................................................................................

// 4: enums define index.

enum Students {
    yousra1 = 23, // yha hum index ko remove krky values bhi day sakty hyn. like: yousra1 = "yousra"
    Abeera,      // outpot is 24 (value increment krdi) .
    Hassan,
}
const student1: Students = Students['Abeera'];
console.log(student1);

//............................................................................................................................

// lets we create function:

enum Students {
    Azaan = "azan",
    Ahsen = "ahsen"
}
function f1(p: string) {
    return p
}
console.log(f1(Students.Azaan)); // we get value(azan) .

//..............................................................................................................................
