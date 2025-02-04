// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nobmre;

function agregarAmigo(){
    nombre = document.getElementById("amigo");

    if (!(nombre.value.trim() === "")) {
        //Agergamos el nombre
        console.log(nombre.value);
        listaAmigos.push(nombre.value);
        console.log(listaAmigos);
        document.getElementById("amigo").value = "";
        agregarNombres();

    }else{
        alert("Por favor, inserte un nombre.");

    }
    
}

function agregarNombres(){
    //Listamos los nombres
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        const li =  document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo(){
    if (!(listaAmigos.length === 0)) {
        let amigo = Math.floor(Math.random() * listaAmigos.length);
        console.log(listaAmigos[amigo]);

        const result = document.getElementById("resultado");
        result.innerHTML = listaAmigos[amigo];

    } else {
        alert("Por favor, inserte nombres a sortear");
    }
}

