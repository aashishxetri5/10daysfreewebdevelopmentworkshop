var userData = [
  {
    user: null,
    fullname: null,
    favFoods: [],
  },
  {
    user: null,
    fullname: null,
    favFoods: [],
  },
  {
    user: null,
    fullname: null,
    favFoods: [],
  },
];

function formValidation() {
  var fav1 = document.myForm.fav1.value;
  var fav2 = document.myForm.fav2.value;
  var fav3 = document.myForm.fav3.value;

  if (
    (fav1 == null || fav1 == "") &&
    (fav2 == null || fav2 == "") &&
    (fav3 == null || fav3 == "")
  ) {
    document.getElementById("error-msg").innerHTML =
      "Favourite Food input fields can't be empty⚠!!";
    return false;
  } else {
    document.getElementById("error-msg").innerHTML = "";
    return true;
  }
}

function takeValues() {
  if (formValidation()) {
    let pos;
    var user = document.myForm.users.value;
    if (user === "User A") {
      pos = 0;
    } else if (user === "User B") {
      pos = 1;
    } else if (user === "User C") {
      pos = 2;
    }

    userData[pos].user = user;
    userData[pos].fullname = document.myForm.fullname.value;
    userData[pos].favFoods[0] = document.myForm.fav1.value;
    userData[pos].favFoods[1] = document.myForm.fav2.value;
    userData[pos].favFoods[2] = document.myForm.fav3.value;

    document.getElementById("form").reset();
    displayValues();
  }
}

function displayValues() {
var htmlCodes = "";
  for (let pos = 0; pos < 3; pos++) {
    if (
      userData[pos].user != null &&
      userData[pos].fullname != null &&
      userData[pos].favFoods[0] != undefined &&
      userData[pos].favFoods[1] != undefined &&
      userData[pos].favFoods[2] != undefined
    ) {
      htmlCodes =
        htmlCodes +

        `<span>` + userData[pos].user + `</span>
        <ul>
    <li><b>Full Name:</b> ` +
        userData[pos].fullname +
        `</li>
    <li><b>Fav. Food1:</b> ` +
        userData[pos].favFoods[0] +
        `</li>
    <li><b>Fav. Food2:</b> ` +
        userData[pos].favFoods[1] +
        `</li>
    <li><b>Fav. Food3:</b> ` +
        userData[pos].favFoods[2] +
        `</li>
    </ul>`;
    }
    document.querySelector(".display").innerHTML = htmlCodes;
  }
}
