let datos = [];

// COMPROBACION DE CAMPOS LLENADOS CORRECTAMENTE Y ALERTAS EN CASO INCORRECTO
let btnfake1=document.getElementById("btnfake1");
btnfake1.addEventListener("click",(event)=>{
    event.preventDefault();

// CONTADOR DE PRODUCTOS REGISTRADOS Y ALMACENADOS EN LOCAL STORAGE

//JSON PRODUCTOS
let elemento=`{"id":1, 
    "nombre": "Polainas Wilson 4lbs Unisex", 
    "precio":"459.00",
    "description":"Las Polainas Wilson tienen el peso extra para seguir fortaleciendo tus piernas y justo en los momentos de mayor intensidad. Cuenta con un diseño espectacular para amoldarse encima de los tobillos con comodidad. Guarda el equilibrio en la postura del avión para trabajar la fuerza en tus piernas al elevarlas, se sujetan de manera perfecta por un sistema de velcro para hacer los movimientos de mayor agilidad en tus prácticas deportivas.",
    "Img":"http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw",
}`;

// GUARDAMOS EN LOCAL STORAGE EL JSON Y EN CONSOLA IMPRIME LOS DATOS
datos = JSON.parse(localStorage.getItem("ProductosCarrito"));
datos.push(JSON.parse(elemento));
localStorage.setItem("ProductosCarrito", JSON.stringify(datos));
console.log(datos);

// ALERTA ANIMADA DE REGISTRO EXITOSO
Swal.fire({
  icon: 'success',
  title: '¡AGREGADO CORRECTAMENTE!',
  showConfirmButton: false,
  timer: 2000
})


});



/*
function addItem(item){

    const itemHTML =     `  <div class="col d-flex justify-content-around mt-4">
    <img class="fotos"
      src="${item.img1}"
      width="80px">
    <div class="ms-5 mt-3">
      <h6>${item.name}</h6>
    </div>
    <div class="ms-5 mt-3">
        <input id=${item.name} type="number" value=${item.cantidad} class="form-control">
    </div>
    <div class="ms-5 mt-3">
      <h6 class="mt-2">$${item.precio}</h6>
    </div>
  </div>
`;

    const itemsContainer = document.getElementById("lista");
    itemsContainer.innerHTML += itemHTML;

}


let carrito = [
  {
  'name':'Polainas Wilson 4lbs Unisex',
  'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
  'cantidad': '1',
  'precio':'420'},
  {
  'name':'Ligas Larga de Tensión Wilson',
    'img1':'http://drive.google.com/uc?export=view&id=1T_TB0qYH9hEf5S5QaQHEE6dwdwO1C1jt',
    'cantidad': '1',
    'precio':'200'}
]

carrito.forEach(element => {
  addItem(element)
});


document.getElementById('comprar').addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    imageUrl: 'https://drive.google.com/uc?export=view&id=13-aMfa2IqZ33nGEExl5e5gP6bw46TSeJ',
    imageHeight: 400,
    title: 'Vendido!',
    imageAlt: 'A tall image'
    
    
  })
})
      */