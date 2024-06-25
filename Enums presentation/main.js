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
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin"; // values assign krdi inko.   
})(Roles || (Roles = {}));
var user1 = {
    email: "yousra@gmail.com",
    password: "qhon",
    roles: Roles.admin
};
var user2 = {
    email: "niba@gmail.com",
    password: "patanhiqhon",
    roles: Roles.user
};
//..............................................................................................................................
// ________________________________________________  Another Example: __________________________________________________________
var Students;
(function (Students) {
    Students[Students["yousra"] = 0] = "yousra";
    Students[Students["niba"] = 1] = "niba";
    Students[Students["maria"] = 2] = "maria";
    Students[Students["azaan"] = 3] = "azaan";
    Students[Students["ahsen"] = 4] = "ahsen";
})(Students || (Students = {}));
//const student : Students = Students.niba        //  first variable. 
var student = Students['maria']; //  we get index number 
//  hum esay bhi likh sakty hyn both methos are correct
//console.log(student) ;                          //  output is 1 coz index number of niba is 1 . 
// then we make second variable: 
var test = Students[0]; // we get value (name) with the help of index number.
console.log(test);
//............................................................................................................................
// 4: enums define index.
(function (Students) {
    Students[Students["yousra1"] = 23] = "yousra1";
    Students[Students["Abeera"] = 24] = "Abeera";
    Students[Students["Hassan"] = 25] = "Hassan";
})(Students || (Students = {}));
var student1 = Students['Abeera'];
console.log(student1);
//............................................................................................................................
// lets we create function:
(function (Students) {
    Students["Azaan"] = "azan";
    Students["Ahsen"] = "ahsen";
})(Students || (Students = {}));
function f1(p) {
    return p;
}
console.log(f1(Students.Azaan));
