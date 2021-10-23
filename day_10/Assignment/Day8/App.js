var users = [
  {
    name: "Aashish Katwal",
    age: 21,
    favSubj: "Computer Science",
    gender: "male",
  },
  {
    name: "Sasim Poudel",
    age: 4,
    favSubj: "Math",
    gender: "male",
  },
  {
    name: "Shradha Khatiwada",
    age: 21,
    favSubj: "Literature",
    gender: "female",
  },
  {
    name: "Anju Katwal",
    age: 25,
    favSubj: "Math",
    gender: "female",
  },
];

let favMath = users.filter(users => users.favSubj == "Math");
let greaterThan20 = users.filter(users => users.age > 20);

document.write("<h3><br/>Users Array List:</h3>");
for(let i = 0; i< users.length; i++){
    document.write("Name: ", users[i].name, "<br/>Age: ", users[i].age, "<br/>Favourite Subject: ", users[i].favSubj, "<br/>Gender: ", users[i].gender, "<br/><hr/>");
}

document.write("<h3>People with 'Math' as their favourite Subject:</h3>");
for(let i = 0; i< favMath.length; i++){
    document.write("Name: ", favMath[i].name, "<br/>Age: ", favMath[i].age, "<br/>Favourite Subject: ", favMath[i].favSubj, "<br/>Gender: ", favMath[i].gender, "<br/><hr/>");
}

document.write("<h3>People who are over 20:</h3>");
for(let i = 0; i< greaterThan20.length; i++){
    document.write("Name: ", greaterThan20[i].name, "<br/>Age: ", greaterThan20[i].age, "<br/>Favourite Subject: ", greaterThan20[i].favSubj, "<br/>Gender: ", greaterThan20[i].gender, "<br/><hr/>");
}