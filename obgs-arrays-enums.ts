//const person://{
//     name : string,
//     age : number


// } ={

// const person :{
//     name :string,
//     age : number,
//     hobbies : string[],
//     role : [number,string];

// } = {
//      name : 'Max',
//      age : 30,
//      hobbies : ['sports','cricket'],
//      role : [1,'111']
//  }

enum Role {ADMIN=10, READ_ONLY, AUTHOR};
const person = {
     name : 'Max',
     age : 30,
     hobbies : ['sports','cricket'],
     role : Role.ADMIN
 }


 //person.role.push('admin');
 //console.log(person.role);
 //person.role = [234 ,'111'];
 
const myArra = [1,2,3,4,];

let favAc: string[];
favAc = ["cricket"];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}


if(person.role === Role.ADMIN){
    console.log("is ADMIN");
    console.log(person.role);
    
    
}



