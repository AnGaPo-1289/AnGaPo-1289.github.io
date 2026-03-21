let numero="525548152810";

let productosGlobal=[];
let carrito=JSON.parse(localStorage.getItem("carrito")) || [];

/* =========================
   CARGAR PRODUCTOS
========================= */

fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTfh5UJ3bIKg7-C8bcMz4KxV-tWnJW7KryK6e8hp4yPwaSrCxmpzEuQp3jbhnQLBYAbSFJh5UMSbADW/pub?gid=0&single=true&output=csv")
.then(res=>res.text())
.then(data=>{

let filas=data.split("\n").slice(1);

productosGlobal=filas.map(fila=>{

let c=fila.split(",");

return{
titulo:c[0],
precio:Number(c[1]),
stock:Number(c[2]),
imagen:c[3],
etiqueta:c[4],
categoria:c[5] ? c[5].replace("\r","") : ""
};

});

mostrarProductos(productosGlobal);
actualizarContadores(productosGlobal);
generarCategorias(productosGlobal);
actualizarCarrito();

document
.getElementById("buscador")
.addEventListener("keyup",buscar);

});

/* =========================
   MOSTRAR PRODUCTOS
========================= */

function mostrarProductos(lista){

let tienda=document.querySelector(".tienda");
tienda.innerHTML="";

lista.forEach(p=>{

let etiquetaHTML="";

if(p.etiqueta){
etiquetaHTML=`<span class="etiqueta ${p.etiqueta}">
${p.etiqueta.toUpperCase()}
</span>`;
}

let producto=`

<div class="producto">

${etiquetaHTML}

<img src="${p.imagen}" onclick="verImagen('${p.imagen}')">

<h3 class="titulo">${p.titulo}</h3>

<div class="categoria">${p.categoria}</div>

<div class="precio">$${p.precio}</div>

<div class="stock">Piezas: ${p.stock}</div>

<button class="boton carrito" 
${p.stock==0 ? "disabled style='background:#ccc;cursor:not-allowed'" : ""}
onclick="agregarCarrito('${p.titulo}',${p.precio},this)">
${p.stock==0 ? "Sin stock" : "Agregar al carrito"}
</button>

</div>
`;

tienda.innerHTML+=producto;

});

iniciarFunciones();
}

/* =========================
   MARCAR AGOTADOS
========================= */

function iniciarFunciones(){

document.querySelectorAll(".producto").forEach(producto=>{

let stock=producto.querySelector(".stock").innerText;

if(stock.includes("0")){

producto.style.opacity="0.6";

let etiqueta=document.createElement("span");

etiqueta.className="etiqueta agotado";
etiqueta.innerText="AGOTADO";

producto.appendChild(etiqueta);

}

});

}

/* =========================
   BUSCADOR
========================= */

function buscar(){

let texto=document
.getElementById("buscador")
.value
.toLowerCase();

let filtrados=productosGlobal.filter(p=>
p.titulo.toLowerCase().includes(texto) ||
p.categoria.toLowerCase().includes(texto)
);

mostrarProductos(filtrados);

}

/* =========================
   FILTROS
========================= */

function filtrar(tipo){

let filtrados=[];

if(tipo=="todos") filtrados=productosGlobal;
if(tipo=="oferta") filtrados=productosGlobal.filter(p=>p.etiqueta=="oferta");
if(tipo=="nuevo") filtrados=productosGlobal.filter(p=>p.etiqueta=="nuevo");
if(tipo=="agotado") filtrados=productosGlobal.filter(p=>p.stock==0);
if(tipo=="usado") filtrados=productosGlobal.filter(p=>p.etiqueta=="usado");
if(tipo=="rebaja") filtrados=productosGlobal.filter(p=>p.etiqueta=="rebaja");

mostrarProductos(filtrados);

}

/* =========================
   CONTADORES
========================= */

function actualizarContadores(lista){

let total=lista.length;
let ofertas=lista.filter(p=>p.etiqueta=="oferta").length;
let nuevos=lista.filter(p=>p.etiqueta=="nuevo").length;
let usados=lista.filter(p=>p.etiqueta=="usado").length;
let rebajas=lista.filter(p=>p.etiqueta=="rebaja").length;
let agotados=lista.filter(p=>p.stock==0).length;

document.getElementById("btnTodos").innerText="Todos ("+total+")";
document.getElementById("btnOfertas").innerText="🔥 Ofertas ("+ofertas+")";
document.getElementById("btnNuevos").innerText="🆕 Nuevos ("+nuevos+")";
document.getElementById("btnUsados").innerText="🟡 Usados ("+usados+")";
document.getElementById("btnRebaja").innerText="🟠 Rebajas ("+rebajas+")";
document.getElementById("btnAgotados").innerText="❌ Agotados ("+agotados+")";

}

/* =========================
   CATEGORIAS
========================= */

function generarCategorias(productos){

let contenedor=document.getElementById("categorias");

let categorias=[...new Set(productos.map(p=>p.categoria).filter(c=>c))];

contenedor.innerHTML="";
contenedor.innerHTML+=`<button onclick="filtrarCategoria('todos')">Todos</button>`;

categorias.forEach(c=>{
contenedor.innerHTML+=`<button onclick="filtrarCategoria('${c}')">${c}</button>`;
});

}

function filtrarCategoria(cat){

if(cat=="todos"){
mostrarProductos(productosGlobal);
return;
}

let filtrados=productosGlobal.filter(p=>p.categoria==cat);
mostrarProductos(filtrados);

}

/* =========================
   CARRITO (MEJORADO)
========================= */

function agregarCarrito(nombre,precio,boton){

animarAlCarrito(boton);

// buscar si ya existe
let existente = carrito.find(p => p.nombre === nombre);

if(existente){
existente.cantidad++;
}else{
carrito.push({
nombre:nombre,
precio:precio,
cantidad:1
});
}

guardarCarrito();
actualizarCarrito();

boton.innerText="✔ Agregado";
boton.style.background="#2ecc71";
boton.style.transform="scale(1.1)";

setTimeout(()=>{
boton.innerText="Agregar al carrito";
boton.style.background="#25D366";
boton.style.transform="scale(1)";
},1500);

}

/* =========================
   ACTUALIZAR CARRITO
========================= */

function actualizarCarrito(){

let contador=document.getElementById("contadorCarrito");
let items=document.getElementById("itemsCarrito");
let totalHTML=document.getElementById("totalCarrito");

if(contador){
contador.innerText=carrito.reduce((acc,p)=>acc+p.cantidad,0);
}

if(!items) return;

items.innerHTML="";
let total=0;

carrito.forEach((p,index)=>{

let imagen=buscarImagen(p.nombre);

let div=document.createElement("div");
div.className="item-carrito";

div.innerHTML=`

<img src="${imagen}" class="mini-img">

<div class="info">
${p.nombre} x${p.cantidad}
<span>$${p.precio * p.cantidad}</span>
</div>

<span class="eliminar" onclick="eliminarProducto(${index})">❌</span>
`;

items.appendChild(div);

total += p.precio * p.cantidad;

});

if(totalHTML){
totalHTML.innerText=total;
}

}

/* =========================
   ELIMINAR
========================= */

function eliminarProducto(index){
carrito.splice(index,1);
guardarCarrito();
actualizarCarrito();
}

/* =========================
   GUARDAR CARRITO
========================= */

function guardarCarrito(){
localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* =========================
   UTILIDADES
========================= */

function buscarImagen(nombre){
let prod=productosGlobal.find(p=>p.titulo==nombre);
return prod ? prod.imagen : "";
}

/* =========================
   ENVIAR PEDIDO
========================= */

function enviarPedido(){

if(carrito.length==0){
alert("Tu carrito está vacío");
return;
}

let mensaje="🛒 *Pedido*%0A%0A";
let total=0;

carrito.forEach(p=>{
mensaje+=`• ${p.nombre} x${p.cantidad} = $${p.precio * p.cantidad}%0A`;
total+=p.precio * p.cantidad;
});

mensaje+=`%0ATotal: $${total}`;

let url=`https://wa.me/${numero}?text=${mensaje}`;
window.open(url);

}

/* =========================
   UI
========================= */

function toggleCarrito(){

let carritoDiv=document.getElementById("carritoLista");

carritoDiv.style.display =
carritoDiv.style.display=="block" ? "none" : "block";

}

/* =========================
   ANIMACION
========================= */

function animarAlCarrito(boton){

let producto=boton.closest(".producto");
let imagen=producto.querySelector("img");

let clon=imagen.cloneNode();

let rect=imagen.getBoundingClientRect();

clon.style.position="fixed";
clon.style.left=rect.left+"px";
clon.style.top=rect.top+"px";
clon.style.width="80px";
clon.style.transition="all 0.8s ease";
clon.style.zIndex="999";

document.body.appendChild(clon);

let carritoIcon=document.querySelector(".carrito-barra");
let destino=carritoIcon.getBoundingClientRect();

setTimeout(()=>{
clon.style.left=destino.left+"px";
clon.style.top=destino.top+"px";
clon.style.width="20px";
clon.style.opacity="0";
},10);

setTimeout(()=>{clon.remove();},800);

}

/* =========================
   MODAL IMAGEN
========================= */

function verImagen(src){

let modal=document.getElementById("modal");
let imagen=document.getElementById("imagenGrande");

imagen.src=src;
modal.style.display="flex";

}

document.getElementById("modal").onclick=function(){
this.style.display="none";
};