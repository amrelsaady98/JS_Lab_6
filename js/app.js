// Task #01, #02 ----------------------------------------------------
const USER_NAME_KEY = 'user-name';
const PASSWORD_KEY = 'password';


let userNameInput = document.getElementById('user-name-input');
let passwordInput = document.getElementById('password-input');
let saveLoginCheckbox = document.getElementById('save-login-checkbox');
let loginButton = document.getElementById('login-button');

initUserData();

loginButton.addEventListener('click', e => {

  if (saveLoginCheckbox.checked) {

    localStorage.setItem(USER_NAME_KEY, userNameInput.value);
    //TODO: encrypt password in localStorage;
    localStorage.setItem(PASSWORD_KEY, passwordInput.value);
  } else {
    localStorage.clear();
  }
})

function initUserData() {
  if (localStorage.getItem(USER_NAME_KEY) !== 'undefined') {
    userNameInput.value = localStorage.getItem(USER_NAME_KEY);
    // TODO: Decrypt saved data
    passwordInput.value = localStorage.getItem(PASSWORD_KEY);
  }
}

// Task #03 -------------------------------------------------------
let studentData = {
  di: 0,
  name: "Amr El-Saady",
  age: 26,
  address: {
    gov: "Minia",
    city: "Maghagha",
    streat: "Al-Adle st."
  },
  skills: ["", "", ""],
  isLeader: true,

}
// Task #04 ---------------------------------------------------------

let studentData_1 = {
  di: 0,
  name: "Amr El-Saady",
  age: 26,
  address: {
    gov: "Minia",
    city: "Maghagha",
    streat: "Al-Adle st."
  },
  skills: ["Skill_1", "Skill_2", "Skill_3", ""],
  isLeader: true,

}
let studentData_2 = {
  di: 0,
  name: "Assem",
  age: 26,
  address: null,
  skills: ["Skill_1", "Skill_2", "Skill_3", ""],
  isLeader: true,

}
let studentData_3 = {
  di: 0,
  name: "Abdul-Rahman",
  age: 26,
  address: {
    gov: "Minia",
    city: "Maghagha",
    streat: "Al-Adle st."
  },
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4",],
  isLeader: true,
}
let allStudentsData = [
  studentData_1, studentData_2, studentData_3
]

for (let item of allStudentsData) {
  console.log(item.name + " --> " + item.skills.join(" "));
}
// Task #05 ----------------------------------------------------------

let xhttp = new XMLHttpRequest();
xhttp.open("GET", `https://reqres.in/api/users/1`, true);
xhttp.send();

xhttp.onreadystatechange = function () {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    let jsonResponse = JSON.parse(xhttp.responseText);
    console.log(jsonResponse);
//     document.body.innerHTML += `
// <div class="user-card">
//     <img src="${jsonResponse["data"]["avatar"]}" alt="user-avatar" style="border-radius: 50%">
//     <span>${jsonResponse["data"]["first_name"]} ${jsonResponse["data"]["last_name"]} </span>
// </div>
//         `;
  }
}
let xhttp_2 = new XMLHttpRequest;
xhttp_2.open("GET", `https://reqres.in/api/users`, true);
xhttp_2.send();
xhttp_2.onreadystatechange = function () {
  if (xhttp_2.readyState === 4 && xhttp_2.status === 200) {
    let jsonResponse = JSON.parse(xhttp_2.responseText);
    console.log(jsonResponse);
    let usersListOptions;
    for (let item of jsonResponse["data"]) {
      usersListOptions += "<option>" + item["first_name"] + item["last_name"] + "</option>>";
    }
    // document.body.innerHTML += `
    // <div class="users-card" style="margin-top: 12px">
    //   <select name="users" style="padding:8px">
    //       ${usersListOptions}
    //   </select>
    // </div>`;
  }
}

// Task #06 -----------------------------------------------------------

