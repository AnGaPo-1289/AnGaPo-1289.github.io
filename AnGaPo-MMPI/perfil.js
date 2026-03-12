mostrarDatos()

function mostrarDatos(){

let nombre = localStorage.getItem("nombre")
let edad = localStorage.getItem("edad")
let sexo = localStorage.getItem("sexo")
let fecha = localStorage.getItem("fecha")

let html = `
<b>Nombre:</b> ${nombre} <br>
<b>Edad:</b> ${edad} <br>
<b>Sexo:</b> ${sexo} <br>
<b>Fecha:</b> ${fecha}
`

document.getElementById("datosPaciente").innerHTML = html

}

let respuestas = JSON.parse(localStorage.getItem("respuestas")) || {}
let resultado = {}

calcularEscalas()



function calcularEscalas(){

for(let i=0;i<escalas.length;i++){

let escala = escalas[i]

let info = escala[0]
let nombre = info[1]

let preguntasV = escala[1] || []
let preguntasF = escala[2] || []

let puntuacion = 0

preguntasV.forEach(p=>{
if(respuestas[p] === true){
puntuacion++
}
})

preguntasF.forEach(p=>{
if(respuestas[p] === false){
puntuacion++
}
})

resultado[nombre] = puntuacion

}

aplicarCorreccionK()

resultado["VRIN"] = calcularVRIN()
resultado["TRIN"] = calcularTRIN()

mostrarResultados()
evaluarValidez()
dibujarPerfil()
interpretarPerfil()
codigoPerfil()
evaluarAptitud()
detectarManipulacion()
detectarPerfilDominante()
detectarOmisiones()

}



function aplicarCorreccionK(){

let K = resultado["K"] || 0



for(let i=0;i<escalas.length;i++){

let escala = escalas[i]
let info = escala[0]
let nombre = info[1]

if(escala[3]){

let factorK = escala[3]

resultado[nombre] += K * factorK

}

}


}

function calcularVRIN(){

if(typeof rin === "undefined") return 0

let vrin = 0
let pares = rin[0][1]

pares.forEach(par=>{

let p1 = par[0]
let r1 = par[1]

let p2 = par[2]
let r2 = par[3]

let valor = par[4]

let resp1 = respuestas[p1]
let resp2 = respuestas[p2]

if(resp1 !== undefined && resp2 !== undefined){

if((resp1 === (r1==="T")) && (resp2 === (r2==="T"))){
vrin += valor
}

}

})

return vrin

}

function calcularTRIN(){

if(typeof rin === "undefined") return 0

let trin = 0
let pares = rin[1][1]

pares.forEach(par=>{

let p1 = par[0]
let r1 = par[1]

let p2 = par[2]
let r2 = par[3]

let valor = par[4]

let resp1 = respuestas[p1]
let resp2 = respuestas[p2]

if(resp1 !== undefined && resp2 !== undefined){

if((resp1 === (r1==="T")) && (resp2 === (r2==="T"))){
trin += valor
}

}

})

return trin

}

function mostrarResultados(){

let html = "<h2>Resultados MMPI</h2>"

let principales = [
"L","F","K",
"Hs","D","Hy","Pd","Mf","Pa","Pt","Sc","Ma","Si",
"VRIN","TRIN"
]

principales.forEach(e=>{
html += e + " : " + (resultado[e] || 0) + "<br>"
})

document.getElementById("resultado").innerHTML = html

}

function evaluarValidez(){

let Fb = resultado["Fb"] || 0
let Fp = resultado["Fp"] || 0
let FBS = resultado["FBS"] || 0
let S = resultado["S"] || 0
let L = resultado["L"] || 0
let F = resultado["F"] || 0
let VRIN = resultado["VRIN"] || 0
let TRIN = resultado["TRIN"] || 0

let mensaje = ""

if(Fp > 10){
mensaje = "⚠️ Posible simulación de psicopatología (Fp alto)"
}

else if(Fb > 10){
mensaje = "⚠️ Inconsistencia en segunda mitad del test (Fb alto)"
}

else if(FBS > 10){
mensaje = "⚠️ Posible exageración de síntomas somáticos (FBS alto)"
}

else if(S > 12){
mensaje = "⚠️ Presentación excesivamente favorable (S alto)"
}

else if(VRIN > 8){
mensaje = "⚠️ Perfil inválido: respuestas inconsistentes (VRIN)"
}

else if(TRIN > 8){
mensaje = "⚠️ Perfil inválido: patrón repetitivo (TRIN)"
}

else if(F > 15){
mensaje = "⚠️ Perfil posiblemente exagerado (F alto)"
}

else if(L > 12){
mensaje = "⚠️ Perfil defensivo (L alto)"
}

else{
mensaje = "Perfil válido"
}

let div = document.createElement("div")
div.style.marginTop="20px"
div.innerHTML = "<b>Validez del Test:</b> " + mensaje

document.body.appendChild(div)

}

function convertirTscore(raw){

return Math.round(50 + (raw - 5) * 5)

}

function dibujarPerfil(){

let canvas = document.getElementById("grafica")
if(!canvas) return

let ctx = canvas.getContext("2d")

ctx.clearRect(0,0,canvas.width,canvas.height)

let escalasClinicas = [
"1-Hs","2-D","3-Hy","4-Pd","5-Mf",
"6-Pa","7-Pt","8-Sc","9-Ma","0-Si"
]

let mapaEscalas = {
"1-Hs":"Hs","2-D":"D","3-Hy":"Hy","4-Pd":"Pd",
"5-Mf":"Mf","6-Pa":"Pa","7-Pt":"Pt",
"8-Sc":"Sc","9-Ma":"Ma","0-Si":"Si"
}

let valores = escalasClinicas.map(e => resultado[mapaEscalas[e]] || 0)

let ancho = canvas.width
let alto = canvas.height
let margen = 60

let pasoX = (ancho - margen*2) / (escalasClinicas.length - 1)

let min = 30
let max = 120

function convertirY(valor){

let rango = max - min
let porcentaje = (valor - min) / rango

return alto - (porcentaje * (alto - margen*2)) - margen

}

ctx.strokeStyle = "#ccc"

for(let t=30;t<=120;t+=10){

let y = convertirY(t)

ctx.beginPath()
ctx.moveTo(margen,y)
ctx.lineTo(ancho-margen,y)
ctx.stroke()

ctx.fillText(t,margen-35,y+4)

}

let y65 = convertirY(65)

ctx.strokeStyle = "red"
ctx.lineWidth = 2

ctx.beginPath()
ctx.moveTo(margen,y65)
ctx.lineTo(ancho-margen,y65)
ctx.stroke()

ctx.strokeStyle = "blue"
ctx.lineWidth = 2

ctx.beginPath()

for(let i=0;i<valores.length;i++){

let x = margen + (i * pasoX)
let score = convertirTscore(valores[i])
let y = convertirY(score)

if(i === 0){
ctx.moveTo(x,y)
}else{
ctx.lineTo(x,y)
}

ctx.fillStyle="blue"

ctx.beginPath()
ctx.arc(x,y,4,0,Math.PI*2)
ctx.fill()

}

ctx.stroke()

ctx.fillStyle="black"

for(let i=0;i<escalasClinicas.length;i++){

let x = margen + (i * pasoX)
ctx.fillText(escalasClinicas[i],x-10,alto-20)

}

}

function interpretarPerfil(){

let texto = []

let D = resultado["D"] || 0
let Pt = resultado["Pt"] || 0
let Pa = resultado["Pa"] || 0
let Sc = resultado["Sc"] || 0
let Pd = resultado["Pd"] || 0
let Ma = resultado["Ma"] || 0
let Hs = resultado["Hs"] || 0
let Hy = resultado["Hy"] || 0

if(D >= 7){
texto.push("Escala 2 elevada → Depresión")
}

if(Pt >= 7){
texto.push("Escala 7 elevada → Ansiedad")
}

if(Pa >= 7){
texto.push("Escala 6 elevada → Suspiciousness / pensamiento paranoide")
}

if(Sc >= 7){
texto.push("Escala 8 elevada → Pensamiento extraño o desorganizado")
}

if(D >= 7 && Pt >= 7){
texto.push("Perfil 2-7 → Depresión ansiosa")
}

if(Pd >= 7 && Ma >= 7){
texto.push("Perfil 4-9 → Conducta antisocial")
}

if(Pa >= 7 && Sc >= 7){
texto.push("Perfil 6-8 → Tendencias paranoides")
}

if(Hs >= 7 && Hy >= 7){
texto.push("Perfil 1-3 → Conversión somática")
}

if(Sc >= 7 && Ma >= 7){
texto.push("Perfil 8-9 → Activación psicótica")
}

if(D >= 7 && Sc >= 7){
texto.push("Perfil 2-8 → Depresión severa")
}

if(texto.length === 0){
texto.push("Perfil dentro de rangos normales.")
}

let div = document.createElement("div")
div.style.marginTop="30px"

div.innerHTML = "<h3>Interpretación del perfil</h3>" + texto.join("<br>")

document.body.appendChild(div)

}


function detectarPerfilDominante(){

let escalasClinicas = [
"Hs","D","Hy","Pd","Mf","Pa","Pt","Sc","Ma","Si"
]

let lista = []

escalasClinicas.forEach(e=>{

let raw = resultado[e] || 0
let t = convertirTscore(raw)

lista.push({
escala:e,
t:t
})

})

lista.sort((a,b)=> b.t - a.t)

let primera = lista[0]
let segunda = lista[1]

let mapa = {
"Hs":"1",
"D":"2",
"Hy":"3",
"Pd":"4",
"Mf":"5",
"Pa":"6",
"Pt":"7",
"Sc":"8",
"Ma":"9",
"Si":"0"
}

let codigo = mapa[primera.escala] + "-" + mapa[segunda.escala]

let div = document.createElement("div")

div.style.marginTop="30px"

div.innerHTML = `
<h3>Perfil Clínico Dominante</h3>
<b>${codigo}</b>
`

document.body.appendChild(div)

}


function detectarOmisiones(){

let totalPreguntas = preguntas.length
let respondidas = 0

for(let r in respuestas){

if(respuestas[r] === true || respuestas[r] === false){
respondidas++
}

}

let omitidas = totalPreguntas - respondidas

let div = document.createElement("div")
div.style.marginTop="30px"

if(omitidas > 30){

div.innerHTML = `
<h3>Control de Respuestas</h3>
<b style="color:red">Perfil inválido</b><br>
Preguntas sin responder: ${omitidas}
`

}else{

div.innerHTML = `
<h3>Control de Respuestas</h3>
Preguntas sin responder: ${omitidas}
`

}

document.body.appendChild(div)

}

function codigoPerfil(){

let escalasPerfil = [
{num:"1",escala:"Hs"},
{num:"2",escala:"D"},
{num:"3",escala:"Hy"},
{num:"4",escala:"Pd"},
{num:"5",escala:"Mf"},
{num:"6",escala:"Pa"},
{num:"7",escala:"Pt"},
{num:"8",escala:"Sc"},
{num:"9",escala:"Ma"},
{num:"0",escala:"Si"}
]

let elevadas = []

escalasPerfil.forEach(e=>{

let valor = resultado[e.escala] || 0
let score = convertirTscore(valor)

if(score >= 65){
elevadas.push(e.num)
}

})

let div = document.createElement("div")
div.style.marginTop="20px"

if(elevadas.length>0){
div.innerHTML = "<b>Código del perfil:</b> " + elevadas.join("-")
}
else{
div.innerHTML = "<b>Código del perfil:</b> Sin elevaciones clínicas"
}

document.body.appendChild(div)

}
function evaluarAptitud(){

let motivos = []

let D = convertirTscore(resultado["D"] || 0)
let Sc = convertirTscore(resultado["Sc"] || 0)
let Pa = convertirTscore(resultado["Pa"] || 0)
let Pd = convertirTscore(resultado["Pd"] || 0)
let Pt = convertirTscore(resultado["Pt"] || 0)

if(D >= 65){
motivos.push("Depresión elevada (Escala 2)")
}

if(Sc >= 65){
motivos.push("Pensamiento extraño (Escala 8)")
}

if(Pa >= 65){
motivos.push("Paranoia elevada (Escala 6)")
}

if(Pd >= 70){
motivos.push("Conducta antisocial (Escala 4)")
}

if(Pt >= 70){
motivos.push("Ansiedad severa (Escala 7)")
}

let div = document.createElement("div")
div.style.marginTop="30px"

if(motivos.length > 0){

div.innerHTML = `
<h3>Evaluación de Aptitud</h3>
<b style="color:red">NO APTO</b><br><br>
Motivos:<br>
${motivos.join("<br>")}
`

}else{

div.innerHTML = `
<h3>Evaluación de Aptitud</h3>
<b style="color:green">APTO</b>
`

}

document.body.appendChild(div)

}

function detectarManipulacion(){

let L = convertirTscore(resultado["L"] || 0)
let F = convertirTscore(resultado["F"] || 0)
let K = convertirTscore(resultado["K"] || 0)
let Fp = convertirTscore(resultado["Fp"] || 0)
let S = convertirTscore(resultado["S"] || 0)

let alerta = []

if(L >= 65){
alerta.push("Posible intento de mostrarse excesivamente virtuoso (L alto)")
}

if(K >= 70){
alerta.push("Perfil defensivo, posible ocultamiento de problemas (K alto)")
}

if(F >= 90){
alerta.push("Respuestas extremadamente inusuales (F muy alto)")
}

if(Fp >= 70){
alerta.push("Posible simulación de psicopatología (Fp alto)")
}

if(S >= 70){
alerta.push("Deseabilidad social extrema (S alto)")
}

let div = document.createElement("div")
div.style.marginTop="30px"

if(alerta.length > 0){

div.innerHTML = `
<h3>Control de Manipulación del Test</h3>
<b style="color:red">ALERTA</b><br><br>
Posibles indicadores:<br>
${alerta.join("<br>")}
`

}else{

div.innerHTML = `
<h3>Control de Manipulación del Test</h3>
<b style="color:green">Sin indicios de manipulación</b>
`

}

document.body.appendChild(div)

}



function generarPDF(){

const { jsPDF } = window.jspdf

let doc = new jsPDF()

let nombre = localStorage.getItem("nombre")
let edad = localStorage.getItem("edad")
let sexo = localStorage.getItem("sexo")
let fecha = localStorage.getItem("fecha")

doc.setFontSize(16)
doc.text("Evaluación Psicológica MMPI",20,20)

doc.setFontSize(12)

doc.text("Nombre: " + nombre,20,40)
doc.text("Edad: " + edad,20,50)
doc.text("Sexo: " + sexo,20,60)
doc.text("Fecha: " + fecha,20,70)

let y = 90

doc.text("Resultados:",20,y)

for(let e in resultado){

y += 8
doc.text(e + " : " + resultado[e],20,y)

}

doc.save("Informe_MMPI.pdf")

}