/*Prior to ES6, an object literal is a collection of name-value pairs*/
/*creating object literal from local variable*/
/*using local variable as property vlaue
let name="amit kumar";
let hobby="cricket";
//creating an obj
let person={
            name:name,
            hobby:hobby  //here value is same as local variable variable
};
/*ES6 allows you to eliminate the duplication when a property of an object is the same as the local variable name by including the name without a colon and value.like this-*/
/*let person={
    name,
    hobby  //just mention the property name
};

console.log(person);*/

/*Computed property name*/

/*using local variable as  property name */
/*in ES6 The square brackets allow you to use the string literals and variables as the property names.*/

/*let n="name";
let person={
           [n]:"amitkrsrs", //here property name is same as local variable
           course:"BBA"
};
console.log(person);
*/

/*we can do computation on property name as well*/
/*let n="student";
let person={
           [n + "name"]:"amitkrsrs", //here property name is same as local variable
           course:"BBA"
};
console.log(person);*/
/*
let n="student";
let person={
           [n + "name"]:"amitkrsrs", //here property name is same as local variable
           course:"BBA",
           detail : function(){
               return (`${this.studentname} and he is studying ${this.course}`)
           }
};
console.log(person);
console.log(person.detail());
*/
//object literal--new function syntax
/*
let n="student";
let person={
           [n + "name"]:"amitkrsrs", //here property name is same as local variable
           course:"BBA",
           detail(){
               return (`${this.studentname} and he is studying ${this.course}`)
           }
};
console.log(person);
console.log(person["detail"]()); //function calling
*/
/*
let person={
           name:"amitkrsrs", //here property name is same as local variable
           course:"BBA",
           detail(){
            console.log(this.name); //displaying property value
            console.log(this.course);
        }
};
person.detail();
*/

//returning object
/*
let fname="amit";
let lname="kumar";
let course="btech";
function show (faname,lname,course){
    return {fname,lname,course}  //this will retuen an object
}
console.log(show(fname,lname,course));
*/
let fname="amit";
let lname="kumar";
let course="btech";
function show (fname,lname,course){
    let fullname="fname"+""+"lname";
    return {fullname,course};  //this will retuen an object.curly braces means we r returning obj
}
//console.log(show(fname,lname,course));
let obj=show(fname,lname,course);
console.log(obj.fullname);
