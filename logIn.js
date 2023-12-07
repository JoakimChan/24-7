//Lägg till Trevor Clarkson - mäklare 

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
  },
  {
    id: 3,
    username: "adminTrevor",
    password: 5787,
    name: "Trevor Clarkson",
    number: 112
  }
]
export default function login(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username & users[i].password === password) {
      return true;
    }
  }
  return false;
}
let username = "admin"
let password = 4321

if (login(username, password)) {
  console.log("Welcome", username)
}
else {
  console.log("Login in failed")
}



