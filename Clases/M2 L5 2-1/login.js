const  usuarioValido = "A";
const contraseñaValida = "1234";

usuario = window.prompt("Ingerese su usuario")
contraseña = window.prompt("ingrese su contraseña")

if(usuario===usuarioValido && contraseña===contraseñaValida){
    console.log("bienvenido a la pagina0")
}
else{
    console.log("credenciales no validas")
}