/* ================================
   MOTOR PROFESIONAL ANGaPo v2
================================ */

let quiz = [];
let current = 0;
let correct = 0;
let wrong = 0;
let answers = [];
let incorrectList = [];
let preguntasOriginales = [];
let tiempoTotal = 0;
let intervaloTiempo = null;

/* ========= OBTENER EXAMEN ========= */
const params = new URLSearchParams(window.location.search);
const examenID = params.get("examen");

if (!examenID && typeof preguntas === "undefined") {
    // esperar si es demo
    console.log("Modo demo detectado");
}

/* ========= CARGAR PREGUNTAS DINÁMICAMENTE ========= */
if(examenID){

    const script = document.createElement("script");
    script.src = `js/examen${examenID}.js`;
    document.body.appendChild(script);

    script.onload = () => {
        prepararSelector();
        restaurarProgreso();
    };

}else{

    // modo DEMO
    console.log("Modo DEMO activo");
    prepararSelector();

}

/* ========= PREPARAR SELECTOR ========= */
function prepararSelector() {

    if (typeof preguntas === "undefined") {
        alert("Error cargando preguntas");
        return;
    }

    document.getElementById("title").innerText = tituloExamen;

    preguntasOriginales = [...preguntas];

    mostrarSelectorPreguntas();
}

/* ========= MOSTRAR SELECTOR ========= */
function mostrarSelectorPreguntas() {

    const quizArea = document.getElementById("quizArea");

    quizArea.innerHTML = `
        <div class="card">
            <h3>Configurar examen</h3>

            <p>Total disponibles: 
                <strong>${preguntasOriginales.length}</strong>
            </p>

            <p>
                ¿Cuántas preguntas deseas presentar?
            </p>

            <input type="number" 
                   id="cantidadPreguntas"
                   min="1"
                   max="${preguntasOriginales.length}"
                   value="${preguntasOriginales.length}"
                   style="padding:8px; width:100px;">

            <br><br>

            <button class="btn-finish" onclick="iniciarExamenAleatorio()">
                Iniciar examen
            </button>
        </div>
    `;
}
/* ========= INICIAR EXAMEN ALEATORIO========= */
function iniciarExamenAleatorio() {

    let cantidad = parseInt(
        document.getElementById("cantidadPreguntas").value
    );

    if (isNaN(cantidad) || cantidad < 1) {
        alert("Cantidad inválida");
        return;
    }

    if (cantidad > preguntasOriginales.length) {
        alert("No puedes seleccionar más del total disponible");
        return;
    }

    // 🔀 Mezclar todas primero
    let copia = [...preguntasOriginales];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    // 🎯 Tomar solo la cantidad solicitada
    quiz = copia.slice(0, cantidad);
// ⏱ 1 minuto por pregunta
tiempoTotal = cantidad * 60;

    resetState();

    document.getElementById("quizArea").innerHTML = `
        <button class="btn-finish" onclick="finishExam()">
            Finalizar examen
        </button>
<div style="margin:10px 0; font-size:18px;">
⏱ Tiempo restante: <span id="timer"></span>
</div>

        <div class="card" id="questionBox"></div>
        <div id="optionsBox"></div>

        <div class="info">
            ✅ Correctas: <span id="ok">0</span><br>
            ❌ Incorrectas: <span id="bad">0</span><br>
            ⏳ Faltantes: <span id="left">${quiz.length}</span>
        </div>

        <button class="btn-primary hidden" id="nextBtn" onclick="nextQuestion()">
            Siguiente
        </button>
    `;

    shuffleOptions();
    loadQuestion();
    iniciarTemporizador();
}

/* ========= INICIAR EXAMEN ========= */
function iniciarExamen() {

    if (typeof preguntas === "undefined") {
        alert("Error cargando preguntas");
        return;
    }

    document.getElementById("title").innerText = tituloExamen;

    quiz = [...preguntas];

    shuffleQuestions();
    shuffleOptions();
    loadQuestion();
}

/* ========= CARGAR PREGUNTA ========= */
function loadQuestion() {

    let q = quiz[current];

document.getElementById("questionBox").innerHTML =
`
<div style="font-size:13px; opacity:.8; margin-bottom:5px;">
Pregunta ${current + 1} / ${quiz.length}
</div>

<b>${q.art ?? ""}</b>

<br><br>

${q.q}
`;

    let optionsBox = document.getElementById("optionsBox");
    optionsBox.innerHTML = "";

    q.o.forEach((opt, i) => {
        let btn = document.createElement("button");
        btn.className = "option";
        btn.innerText = opt;
        btn.onclick = () => answer(i, btn);
        optionsBox.appendChild(btn);
    });

    updateInfo();
    updateProgress();
}

/* ========= RESPONDER ========= */
function answer(i, btn) {

    let q = quiz[current];
    answers[current] = i;

    document.querySelectorAll(".option").forEach(b => b.disabled = true);

    if (i === q.a) {
        btn.classList.add("correct");
        correct++;
    } else {
        btn.classList.add("incorrect");
        document.querySelectorAll(".option")[q.a].classList.add("correct");
        wrong++;
        incorrectList.push(q);
    }
guardarProgreso();

    document.getElementById("nextBtn").classList.remove("hidden");
}

/* ========= SIGUIENTE ========= */
function nextQuestion() {
    if (current < quiz.length - 1) {
        current++;
        loadQuestion();
        document.getElementById("nextBtn").classList.add("hidden");
    } else {
        finishExam();
    }
}

/* ========= ACTUALIZAR INFO ========= */
function updateInfo() {
    document.getElementById("ok").innerText = correct;
    document.getElementById("bad").innerText = wrong;
    document.getElementById("left").innerText =
        quiz.length - (correct + wrong);
}

/* ========= BARRA PROGRESO ========= */
function updateProgress(){

    let pct = ((current + 1) / quiz.length) * 100;

    const bar = document.getElementById("progressBar");

    bar.style.width = pct + "%";

    if(pct < 40){
        bar.style.background = "#ef4444"; // rojo
    }
    else if(pct < 80){
        bar.style.background = "#eab308"; // amarillo
    }
    else{
        bar.style.background = "#22c55e"; // verde
    }

}

/* ========= FINALIZAR ========= */
function finishExam(forzado = false) {

    if(!forzado){

    let respondidas = correct + wrong;
    let total = quiz.length;

    if(respondidas < total){
        if(!confirm(`Has respondido ${respondidas} de ${total} preguntas.\n¿Deseas finalizar de todos modos?`)){
            return;
        }
    } else {
        if(!confirm("¿Seguro que deseas finalizar el examen?")){
            return;
        }
    }
}

// confirmación inteligente
clearInterval(intervaloTiempo);

    document.getElementById("quizArea").classList.add("hidden");
    document.getElementById("resultArea").classList.remove("hidden");

    let total = quiz.length;
    let pct = Math.round((correct / total) * 100);
    let cal = (pct / 10).toFixed(1);

    let box = document.getElementById("resultBox");
    box.innerHTML = `
        Calificación: <h1>${cal}</h1>
        Porcentaje: ${pct}%
    `;

    box.className = "result-box";
    if (cal >= 8) box.classList.add("aprobado");
    else if (cal >= 6) box.classList.add("regular");
    else box.classList.add("reprobado");

    mostrarRevision();
    guardarEstadisticas(total, pct);
    localStorage.removeItem("progresoExamen"); // 🔥 limpiar progreso
}

/* ========= MOSTRAR REVISION ========= */
function mostrarRevision() {

    let review = "";

    quiz.forEach((q, i) => {
        review += `
        <div class="review">
            <b>${i + 1}. ${q.q}</b><br>
            ✅ Respuesta correcta: ${q.o[q.a]}
        </div>`;
    });

    document.getElementById("review").innerHTML = review;
}

/* ========= GUARDAR ESTADÍSTICAS ========= */
function guardarEstadisticas(total, pct) {

    let usuario = localStorage.getItem("usuarioActivo");
    let historial = JSON.parse(localStorage.getItem("estadisticas")) || {};

    if (!historial[usuario]) historial[usuario] = [];

    historial[usuario].push({
        examen: tituloExamen,
        fecha: new Date().toLocaleString(),
        puntaje: correct,
        total: total,
        porcentaje: pct
    });

    localStorage.setItem("estadisticas", JSON.stringify(historial));
}

/* ========= REPETIR INCORRECTAS ========= */
function repeatIncorrect() {

    if (incorrectList.length === 0) {
        alert("No hay preguntas incorrectas.");
        return;
    }

    quiz = [...incorrectList];
    incorrectList = [];
    resetState();

    document.getElementById("resultArea").classList.add("hidden");
    document.getElementById("quizArea").classList.remove("hidden");

    shuffleQuestions();
    shuffleOptions();
    loadQuestion();
}

/* ========= RESETEAR ========= */
function resetState() {
    current = 0;
    correct = 0;
    wrong = 0;
    answers = [];
}

/* ========= MEZCLAR ========= */
function shuffleQuestions() {
    for (let i = quiz.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
}

function shuffleOptions() {
    quiz.forEach(p => {
        const correctText = p.o[p.a];
        for (let i = p.o.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [p.o[i], p.o[j]] = [p.o[j], p.o[i]];
        }
        p.a = p.o.indexOf(correctText);
    });
}

/* ========= VOLVER ========= */
function goBack() {
    window.location.href = "examen.html";
}

/* ========= TEMPORIZADOR ========= */
function iniciarTemporizador(){

    const timerElement = document.getElementById("timer");

    intervaloTiempo = setInterval(()=>{

        let minutos = Math.floor(tiempoTotal / 60);
        let segundos = tiempoTotal % 60;

        timerElement.innerText =
            `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

        tiempoTotal--;

        if(tiempoTotal < 0){
            clearInterval(intervaloTiempo);
            alert("Tiempo agotado");
            finishExam(true);
        }

    },1000);
}
function guardarProgreso(){

    const progreso = {
        quiz,
        current,
        correct,
        wrong,
        answers,
        incorrectList,
        tiempoTotal
    };

    localStorage.setItem("progresoExamen", JSON.stringify(progreso));

}
function restaurarProgreso(){

    let data = localStorage.getItem("progresoExamen");

    if(!data) return;

    let progreso = JSON.parse(data);

    quiz = progreso.quiz;
    current = progreso.current;
    correct = progreso.correct;
    wrong = progreso.wrong;
    answers = progreso.answers;
    incorrectList = progreso.incorrectList;
    tiempoTotal = progreso.tiempoTotal;

    document.getElementById("quizArea").innerHTML = `
        <button class="btn-finish" onclick="finishExam()">
            Finalizar examen
        </button>

        <div style="margin:10px 0; font-size:18px;">
        ⏱ Tiempo restante: <span id="timer"></span>
        </div>

        <div class="card" id="questionBox"></div>
        <div id="optionsBox"></div>

        <div class="info">
            ✅ Correctas: <span id="ok">${correct}</span><br>
            ❌ Incorrectas: <span id="bad">${wrong}</span><br>
            ⏳ Faltantes: <span id="left">${quiz.length - (correct + wrong)}</span>
        </div>

        <button class="btn-primary hidden" id="nextBtn" onclick="nextQuestion()">
            Siguiente
        </button>
    `;

    loadQuestion();
    iniciarTemporizador();
}
