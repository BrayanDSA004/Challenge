let listaAmigos = [];
let nobmre;

function agregarAmigo(){
    nombre = document.getElementById("amigo");

    if (!(nombre.value.trim() === "")) {
        //Agergamos el nombre
        listaAmigos.push(nombre.value);
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

    //Ciclo para generar elemento de cada nombre añadido
    for (let i = 0; i < listaAmigos.length; i++) {
        const li =  document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo(){
    //verificación de lista vacia
    if (!(listaAmigos.length === 0)) {
        //Formula para generar indice aleatorio
        let amigo = Math.floor(Math.random() * listaAmigos.length);

        const result = document.getElementById("resultado");
        result.innerHTML = listaAmigos[amigo];

    } else {
        alert("Por favor, inserte nombres a sortear");
    }
}

