let tipo = localStorage.getItem("tipoTest")


// Protección si alguien entra directo
if(!tipo){
window.location = "index.html"
}

let respuestas = {}
let actual = 0

let preguntas = questions.map((texto,i)=>({
id:i+1,
texto:texto
}))

// seleccionar tipo de test

if(tipo === "rf"){
preguntas = preguntas.slice(0,338)
}

if(tipo === "agp"){
preguntas = preguntas.slice(0,50)
}


// Iniciar examen

mostrar()
iniciarCronometro()


// Mostrar pregunta

function mostrar(){

if(!preguntas[actual]) return

document.getElementById("pregunta").innerText =
preguntas[actual].texto


// PROGRESO

let progreso = document.getElementById("progreso")

let porcentaje = Math.round(((actual+1)/preguntas.length)*100)

progreso.innerHTML =
"Pregunta " + (actual+1) + " de " + preguntas.length +
"<br><div style='width:100%;background:#ddd;height:20px;border-radius:10px'>" +
"<div style='width:"+porcentaje+"%;background:#4caf50;height:20px;border-radius:10px'></div>" +
"</div>" +
porcentaje + "%"

}


// Guardar respuesta

function responder(valor){

respuestas[preguntas[actual].id] = valor

actual++

if(actual < preguntas.length){

mostrar()

}else{

localStorage.setItem("respuestas", JSON.stringify(respuestas))

window.location = "resultados.html"

}

}


// Botón Anterior

function anterior(){

if(actual > 0){

actual--

mostrar()

}

}


// Cronómetro

function iniciarCronometro(){

let tiempo = parseInt(localStorage.getItem("tiempo"))

if(!tiempo) return

let intervalo = setInterval(()=>{

let minutos = Math.floor(tiempo/60)
let segundos = tiempo % 60

document.getElementById("cronometro").innerText =
"Tiempo restante: " +
String(minutos).padStart(2,'0') + ":" +
String(segundos).padStart(2,'0')

tiempo--

if(tiempo < 0){

clearInterval(intervalo)

alert("Tiempo terminado")

localStorage.setItem("respuestas", JSON.stringify(respuestas))

window.location = "resultados.html"

}

},1000)

}