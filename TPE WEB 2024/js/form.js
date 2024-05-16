"use strict"

let form = document.querySelector("#form");
form.addEventListener("submit", registrar);

function registrar(e){
    e.preventDefault();
    let formData = new FormData(form);

    let email = formData.get('email');
    let nombre = formData.get("nombre");
    let apellido = formData.get("apellido");
    let contraseña = formData.get("password");

    console.log(email, nombre, apellido, contraseña);
}