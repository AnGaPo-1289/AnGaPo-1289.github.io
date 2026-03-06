const tituloExamen = "Demo AnGaPo";

/* ===== PREGUNTAS DEMO ===== */

let preguntas = [

{
art: "Art. 269",
q: "¿A partir de qué distancia se considera desertor un oficial que se separa del campamento, en tiempo de paz?",
o: ["Más de 30 kilómetros","Más de 40 kilómetros","Más de 20 kilómetros","Más de 10 kilómetros"],
a: 1
},

{
art: "Art. 8o Bis",
q: "¿Quién puede otorgar o negar permisos de adquisición y licencias de portación de armas automáticas calibre 7.62 mm?",
o: ["La Defensa Nacional","La Guardia Nacional","La Secretaría","El Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública"],
a: 2
},

{
art: "Art. 26",
q: "¿Qué pasa si no se exhibe la licencia ante la autoridad?",
o: ["Se hará acreedor a realizar trabajos sociales","Se hace acreedor a una multa de quince días de sueldo","Se presume que carece de autorización","Se otorga prórroga por quince días naturales"],
a: 2
},

{
art: "Art. 53",
q: "Desarrollan sus acciones de Defensa Nacional en forma conjunta y se mantienen unidas en una sola Dependencia.",
o: ["El Ejército y la Marina","El Ejército y F.A.M.","El Ejército y Guardia Nacional","La Guardia Nacional y la S.S.C."],
a: 1
},

{
art: "Art. 64",
q: "Las grandes unidades de vuelo, son...",
o: ["Las Zonas y Regiones","Las bases y escuadrones","Los grupos, las alas y las divisiones","Las escuadrillas y escuadrones"],
a: 2
},

{
art: "Art. 21",
q: "Es la prestación económica a que tienen derecho los militares y sus familiares en una sola exhibición.",
o: ["Pensión derivada del servicio activo","Haber de retiro por antigüedad","Seguro institucional de retiro","Compensación conforme a la Ley"],
a: 3
},

{
art: "Art. 24",
q: "Es causa de retiro:",
o: ["Llegar a la edad límite que fija la Ley","Cambio definitivo de adscripción","Asignación temporal de servicio","Licencia ordinaria autorizada"],
a: 0
},

{
art:"Art. 2o",
q:"El buen comportamiento del militar tiene como propósito jurídico:",
o:[
"Facilitar el ascenso por antigüedad",
"Fortalecer la confianza del pueblo en el Ejto., F.A. y G.N.",
"Evitar sanciones disciplinarias internas",
"Incrementar la autoridad del mando territorial"
],
a:1
},

{
art:"Art. 3o",
q:"Según el Artículo 3o., la disciplina militar tiene como bases fundamentales:",
o:[
"La jerarquía y la subordinación absoluta",
"La autoridad operativa y el mando estratégico",
"La obediencia y un alto concepto del honor, justicia y moral",
"La antigüedad y la especialidad técnica"
],
a:2
},

{
art:"Art. 274",
q:"¿Dependen de un particular contexto socioeconómico, político y cultural?:",
o:[
"papeles sociales construidos para la mujer y el hombre con base en su sexo",
"atribuciones sociales",
"brechas de equidad de género",
"estereotipos de género"
],
a:0
},

{
art:"Art. 274",
q:"¿Son el conjunto de ideas, creencias y atribuciones que construyen el significado de lo femenino y masculino?:",
o:[
"papeles sociales construidos para la mujer y el hombre con base en su sexo",
"atribuciones sociales",
"brechas de equidad de género",
"estereotipos de género"
],
a:0
}

];

/* ===== MEZCLAR PREGUNTAS ===== */

preguntas = preguntas.sort(() => Math.random() - 0.5);

/* ===== LIMITAR A 15 ===== */

preguntas = preguntas.slice(0,15);