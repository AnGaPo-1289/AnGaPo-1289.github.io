const tituloExamen = "01 - Código de Justicia Militar";

const preguntas = [
{
  art: "Art. 269",
  q: "¿A partir de qué distancia se considera desertor un oficial que se separa del campamento, en tiempo de paz?",
  o: ["Más de 30 kilómetros","Más de 40 kilómetros","Más de 20 kilómetros","Más de 10 kilómetros"],
  a: 1
},
{
  art: "Art. 255",
  q: "¿Qué distancia del campamento en tiempo de paz configura deserción sin permiso del superior que tenga facultad para concederlo?",
  o: ["Más de cinco kilómetros","Más de treinta kilómetros","Más de veinte kilómetros","Más de diez kilómetros"],
  a: 2
},
{
  art: "Art. 266",
  q: "Para personal de clases y marinería, ¿cómo se considera la deserción durante faenas posteriores a un naufragio, cuando se ausente dos días sin permiso del superior?",
  o: ["Como deserción fuera de actos del servicio","Como desertor en campaña","Como desertor en tiempo de paz","Como desertor frente al enemigo"],
  a: 3
},
{
  art: "Art. 255",
  q: "¿Cuántas horas tiene el personal de tropa para justificar su falta a la revista de administración?",
  o: ["Doce horas","Cuarenta y ocho horas","Setenta y dos horas","Veinticuatro horas"],
  a: 3
},
{
  art: "Art. 301",
  q: "¿Qué delito comete el personal subordinado que no ejecute o no respete una orden del superior, la modifique de propia autoridad o se extralimite al ejecutarla?",
  o: ["Desobediencia","Abuso de autoridad","Falta de consideración","Insubordinación"],
  a: 0
},
{
  art: "Art. 255",
  q: "¿Cuántos días consecutivos de inasistencia a las listas de diana y retreta constituyen deserción?",
  o: ["Cinco días consecutivos","Un día completo","Tres días consecutivos","Dos días consecutivos"],
  a: 2
},
{
  art: "Art. 255",
  q: "¿Cuándo se entiende realizada la deserción del personal de tropa que no estuviere en servicio por faltar a la revista de administración?",
  o: ["Cuando se presenta después de cuarenta y ocho horas","Cuando falta dos días consecutivos","Cuando falta una sola vez sin aviso previo","Cuando falta sin motivo legítimo y no se presenta a justificar dentro de las veinticuatro horas siguientes"],
  a: 3
},
{
  art: "Art. 283",
  q: "¿Qué delito comete el personal que con palabras, ademanes, señas, gestos o de cualquier otra manera falte al respeto o sujeción debidos a un superior?",
  o: ["Insubordinación","Falta de consideración","Abuso de autoridad","Desobediencia"],
  a: 0
},
{
  art: "Art. 256",
  q: "¿Qué sanción recibe el personal de tropa que es aprehendido tras desertar?",
  o: ["Cambio de adscripción","Prisión en cuartel o buque y destino a policía u obras militares","Prisión en un cuartel o buque sin perjuicio del servicio","Suspensión temporal de su cargo"],
  a: 1
},
{
  art: "Art. 263",
  q: "¿Cómo se sanciona al soldado que deserta antes de cumplir cuatro meses de instrucción contados desde el día en que haya sentado plaza en su corporación?",
  o: ["Con destitución del cargo","Con el mínimo de la pena correspondiente","Con el máximo de la pena","Con destitución del empleo"],
  a: 1
},
{
  art: "Art. 264",
  q: "¿Qué sanción adicional reciben sargentos y cabos que desertan en campaña?",
  o: ["Cambio de unidad o dependencia","Se convoca al consejo de honor","Destitución del empleo","Baja sin goce de beneficios"],
  a: 2
},
{
  art: "Art. 259",
  q: "¿En qué caso se reducirá la pena a un mes de prisión al soldado que incurra en una deserción estipulada en el articulo 256?",
  o: [
    "Cuando en su defensa acredite que no le fueron leídas las disposiciones penales relativas a la deserción",
    "Cuando se presente voluntariamente dentro de los primeros ocho días",
    "Cuando la deserción sea individual",
    "Cuando haya transcurrido más de ocho días sin agravantes"
  ],
  a: 0
},
{
  art: "Art. 297",
  q: "¿Qué delito comete quien insulte a una persona subordinada o procure inducirle a una acción degradante o a una infracción legal?",
  o: ["Abuso de autoridad","Insubordinación","Falta de consideración","Desobediencia"],
  a: 0
},
{
  art: "Art. 258",
  q: "¿Qué consecuencia adicional se impone a sargentos y cabos aprehendidos por deserción?",
  o: ["Destitución de su empleo","Cambio de unidad, dependencia o instalación","Prisión en un cuartel o buque con perjuicio del servicio","Suspensión temporal del cargo"],
  a: 0
},
{
  art: "Art. 293",
  q: "¿Qué delito comete la persona militar que trate al personal subordinado de un modo contrario a las prescripciones legales?",
  o: ["Abuso de autoridad","Insubordinación","Desobediencia","Falta de consideración"],
  a: 0
},
{
  art: "Art. 259",
  q: "De conformidad con el artículo 259, ¿en qué supuesto se excluye el beneficio de no imposición de pena?",
  o: ["Que el inculpado se haya presentado voluntariamente ante la autoridad","Que no exista reincidencia en la conducta","Que el responsable carezca de antecedentes disciplinarios","Que la deserción haya sido realizada por tres o más individuos reunidos"],
  a: 3
},
{
  art: "Art. 256",
  q: "¿Qué sanción corresponde al personal de tropa que se presenta voluntariamente dentro de ocho días?",
  o: ["Serán destituidos de sus respectivos empleos","Prisión en un cuartel o buque sin perjuicio del servicio","Destitución inmediata del cargo","Suspensión definitiva del mando"],
  a: 1
},
{
  art: "Art. 264",
  q: "¿Qué ocurre con la pena cuando la deserción se comete en campaña?",
  o: ["Se duplican los términos de la prisión","Se le impone el máximo correctivo disciplinario","Se convoca al consejo de honor","Causa baja inmediatamente"],
  a: 0
},
{
art:"Art. 101",
q:"Delito que se comete con el ánimo de causar daño o de violar la ley.",
o:[
"Intencional",
"No intencional",
"Imprudente",
"Accidental"
],
a:0
},

{
art:"Art. 101",
q:"Delito el que se comete por imprevisión, negligencia, impericia, falta de reflexión o de cuidado y que causa igual daño que un delito.",
o:[
"Intencional",
"Imprudencial",
"Accidental",
"No letal"
],
a:1
},

{
art:"Art. 103",
q:"Para que la imprudencia sea punible, se necesita que se consume, y que no sea tan leve que, si fuere delito...",
o:[
"Accidental",
"No letal",
"Intencional",
"No intencional"
],
a:2
},

{
art:"Art. 106",
q:"Consiste en ejecutar uno o más hechos encaminados directa e inmediatamente a la consumación, pero sin llegar al acto que la constituye si esos hechos dan a conocer por sí solos o acompañados de algunos indicios cuál es el delito que el agente tenía intención de perpetrar.",
o:[
"El frustrado",
"El culpable",
"El sospechoso",
"El Conato"
],
a:3
},

{
art:"Art. 106",
q:"Es aquel en que el agente llega hasta el último acto en que debía realizarse la consumación, si ésta no se verifica por tratarse de un delito irrealizable por imposible.",
o:[
"El frustrado",
"El culpable",
"El conato",
"El sopechoso"
],
a:0
},

{
art:"Art. 107",
q:"Siempre que el condenado por sentencia ejecutoria cometa un nuevo delito, si no ha transcurrido, desde el cumplimiento de la condena, desde que la quebrantare o desde su indulto, por gracia, un término igual al de la prescripción de la pena se le llamará?",
o:[
"Acumulación",
"Reincidencia",
"Persistencia",
"Agregación"
],
a:1
},

{
art:"Art. 108",
q:"Siempre que alguno es juzgado a la vez por varios delitos ejecutados en actos distintos, se le llamará...",
o:[
"Reincidencia",
"Persistencia",
"Agregación",
"Acumulación"
],
a:3
},

{
art:"Art. 109",
q:"Los que lo conciben, resuelven cometerlo, lo preparan y ejecutan, ya sea por sí mismos o por medio de otros a quienes compelen o inducen a delinquir",
o:[
"Cómplices de un delito",
"Autores de un delito",
"Sospechosos de un delito",
"Preparadores de un delito"
],
a:1
},

{
art:"Art. 111",
q:"Son los que ayudan a los autores de un delito en los preparativos de éste, proporcionándoles los instrumentos, armas u otros medios adecuados para cometerlo, o dándoles instrucciones para este fin.",
o:[
"Cómplices",
"Autores",
"Sopechosos",
"Culpables"
],
a:0
},

{
art:"Art. 116",
q:"Son los que sin previo concierto con los delincuentes, los favorecen auxiliandolos, procurandolos y ocultando los...",
o:[
"Cómplices",
"Encubridores",
"Culpables",
"Ayudantes"
],
a:1
},

{
art:"Art. 128",
q:"Consiste en la privación de la libertad desde dieciséis días a sesenta años, sin que este segundo término pueda ser aumentado ni aún por causa de acumulación o de reincidencia.",
o:[
"Pena de prisión",
"Consejos de honor",
"Privatización de la libertad",
"Arresto militar"
],
a:0
}
];
