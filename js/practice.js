// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {name:"john",
            surname:"smith",
};

user.name = "Pete";
delete user.name;

console.log(user);

function isEmpty(obj){
    for(let key in obj){
        if(key)return false;
    }return true;
}

let schedule = {};

// console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let total = 0;
  for(let key in salaries){
    total+=salaries[key];
  };

  console.log(total);


function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === "number") obj[key] *= 2;
        }
}

  // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  console.log(menu);
  // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };