function iniciar(tipo){

// limpiar sesión anterior
localStorage.clear()

// datos del evaluado

let nombre = document.getElementById("nombre").value
let edad = document.getElementById("edad").value
let sexo = document.getElementById("sexo").value

if(nombre === "" || edad === ""){
alert("Complete los datos del evaluado")
return
}

// fecha automática

let fecha = new Date().toLocaleDateString()

localStorage.setItem("nombre",nombre)
localStorage.setItem("edad",edad)
localStorage.setItem("sexo",sexo)

localStorage.setItem("fecha",fecha)

// tipo de test

localStorage.setItem("tipoTest",tipo)

// tiempo según test

if(tipo === "mmpi2"){
localStorage.setItem("tiempo",5400)
}

if(tipo === "rf"){
localStorage.setItem("tiempo",3000)
}

if(tipo === "agp"){
localStorage.setItem("tiempo",600)
}

// iniciar examen

window.location="examen.html"

}