// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nobmre;
console.log(listaAmigos);

function agregarAmigo(){
    nombre = document.getElementById("amigo");

    if (!(nombre.value.trim() === "")) {
        console.log(nombre.value);
        listaAmigos.push(nombre.value);
        console.log(listaAmigos);
        document.getElementById("amigo").value = "";

    }else{
        alert("Por favor, inserte un nombre.");

    }
    
}