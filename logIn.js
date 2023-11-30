const users = [
  {
    id: 1,
    username: "admin",
    password: 4321,
    name: "Joakim",
    number: 112
  },
  {
    id: 2,
    username: "sara",
    password: 2345,
    name: "Sara",
    number: 112
  }
]
function ValidLogin(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username & users[i].password === password) {
      return true;
    }
  }
  return false;
}
let username = "admin"
let password = 4321

if (ValidLogin(username, password)) {
  console.log("Welcome", username)
}
else {
  console.log("Login in failed")
}



