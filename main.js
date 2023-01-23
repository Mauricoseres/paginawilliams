function login () {
var user, password

user = document.getElementById("usuario").value;
password = document.getElementById("contrasena").value;

if(user == "mesaoperativa" && password == "123.0"){
window.location = "index2.html";
    
}
else{
    alert("Usuario o Password incorrectos")

}


}