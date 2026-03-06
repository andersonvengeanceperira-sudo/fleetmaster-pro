function login(){

let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]")

let user = usuarios.find(u => u.email === email && u.senha === senha)

if(user){

window.location="dashboard.html"

}else{

alert("Usuário não encontrado")

}

}
