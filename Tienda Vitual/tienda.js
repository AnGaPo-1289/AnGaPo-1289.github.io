let numero="525548152810";

fetch("productos.json")
.then(res=>res.json())
.then(data=>{

let tienda=document.querySelector(".tienda");

data.forEach(p=>{

let etiquetaHTML="";

if(p.etiqueta){
etiquetaHTML=`<span class="etiqueta ${p.etiqueta}">${p.etiqueta.toUpperCase()}</span>`;
}

let producto=`

<div class="producto">

${etiquetaHTML}

<img src="${p.imagen}">

<h3 class="titulo">${p.titulo}</h3>

<div class="precio">$${p.precio}</div>

<div class="stock">Piezas: ${p.stock}</div>

<a class="boton whatsapp" target="_blank">
Apartar por WhatsApp
</a>

</div>

`;

tienda.innerHTML+=producto;

});

iniciarFunciones();

});

function iniciarFunciones(){

document.querySelectorAll(".producto").forEach(producto=>{

let titulo=producto.querySelector(".titulo").innerText;
let precio=producto.querySelector(".precio").innerText;
let stock=producto.querySelector(".stock").innerText;

let mensaje="Hola quiero apartar "+titulo+" "+precio;

let url="https://wa.me/"+numero+"?text="+encodeURIComponent(mensaje);

let boton=producto.querySelector(".whatsapp");

boton.href=url;

if(stock.includes("0")){

producto.style.opacity="0.6";
boton.innerText="Producto agotado";
boton.style.background="gray";
boton.style.pointerEvents="none";

let etiqueta=document.createElement("span");

etiqueta.className="etiqueta agotado";
etiqueta.innerText="AGOTADO";

producto.appendChild(etiqueta);

}

});

}