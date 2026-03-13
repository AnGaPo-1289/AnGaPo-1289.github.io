let numero="525548152810";

let productosGlobal=[];
let carrito=[];

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

document
.getElementById("buscador")
.addEventListener("keyup",buscar);

});

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

<button class="boton carrito" onclick="agregarCarrito('${p.titulo}',${p.precio},this)">
Agregar al carrito
</button>

</div>
`;

tienda.innerHTML+=producto;

});

iniciarFunciones();

}

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

function buscar(){

let texto=document
.getElementById("buscador")
.value
.toLowerCase();

let filtrados=productosGlobal.filter(p=>
p.titulo.toLowerCase().includes(texto)
);

mostrarProductos(filtrados);

}

function filtrar(tipo){

let filtrados=[];

if(tipo=="todos"){
filtrados=productosGlobal;
}

if(tipo=="oferta"){
filtrados=productosGlobal.filter(p=>p.etiqueta=="oferta");
}

if(tipo=="nuevo"){
filtrados=productosGlobal.filter(p=>p.etiqueta=="nuevo");
}

if(tipo=="agotado"){
filtrados=productosGlobal.filter(p=>p.stock==0);
}

mostrarProductos(filtrados);

}

function actualizarContadores(lista){

let total=lista.length;

let ofertas=lista.filter(p=>p.etiqueta=="oferta").length;

let nuevos=lista.filter(p=>p.etiqueta=="nuevo").length;

let agotados=lista.filter(p=>p.stock==0).length;

document.getElementById("btnTodos").innerText="Todos ("+total+")";
document.getElementById("btnOfertas").innerText="🔥 Ofertas ("+ofertas+")";
document.getElementById("btnNuevos").innerText="🆕 Nuevos ("+nuevos+")";
document.getElementById("btnAgotados").innerText="❌ Agotados ("+agotados+")";

}

function generarCategorias(productos){

let contenedor=document.getElementById("categorias");

let categorias=[...new Set(productos.map(p=>p.categoria).filter(c=>c))];

contenedor.innerHTML="";

let botonTodos=`<button onclick="filtrarCategoria('todos')">Todos</button>`;

contenedor.innerHTML+=botonTodos;

categorias.forEach(c=>{

let boton=`<button onclick="filtrarCategoria('${c}')">${c}</button>`;

contenedor.innerHTML+=boton;

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

function agregarCarrito(nombre,precio,boton){

animarAlCarrito(boton);

carrito.push({
nombre:nombre,
precio:precio
});

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

function actualizarCarrito(){

let contador=document.getElementById("contadorCarrito");
let items=document.getElementById("itemsCarrito");
let totalHTML=document.getElementById("totalCarrito");

if(contador){
contador.innerText=carrito.length;
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
${p.nombre}
<span>$${p.precio}</span>
</div>

<span class="eliminar" onclick="eliminarProducto(${index})">❌</span>

`;

items.appendChild(div);

total+=p.precio;

});

if(totalHTML){
totalHTML.innerText=total;
}

}

function eliminarProducto(index){

carrito.splice(index,1);

actualizarCarrito();

}

function buscarImagen(nombre){

let prod=productosGlobal.find(p=>p.titulo==nombre);

return prod ? prod.imagen : "";

}

function enviarPedido(){

if(carrito.length==0){
alert("Tu carrito está vacío");
return;
}

let mensaje="Hola quiero pedir:%0A%0A";

let total=0;

carrito.forEach(p=>{

mensaje+=`• ${p.nombre} $${p.precio}%0A`;

total+=p.precio;

});

mensaje+=`%0ATotal: $${total}`;

let url=`https://wa.me/${numero}?text=${mensaje}`;

window.open(url);

}

function toggleCarrito(){

let carritoDiv=document.getElementById("carritoLista");

if(carritoDiv.style.display=="block"){
carritoDiv.style.display="none";
}else{
carritoDiv.style.display="block";
}

}

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

setTimeout(()=>{
clon.remove();
},800);

}
function verImagen(src){

let modal=document.getElementById("modal");
let imagen=document.getElementById("imagenGrande");

imagen.src=src;

modal.style.display="flex";

}
/* cerrar imagen grande */

document.getElementById("modal").onclick=function(){

this.style.display="none";

}
