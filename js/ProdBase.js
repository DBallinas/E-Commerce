let productos;
// Aquí se debe cambiar el URL del servicio en el BackEnd
const URL_MAIN ='http://localhost:8080/api/productos/';
function addItems(Productos) {
    fetch(URL_MAIN, {
        method: 'get'
    }).then(function(response) {
        response.json().then(function (json) {
            console.log(json);
            console.log(json.length);
            productos=json;
            Array.from(json).forEach((p, index) => {
                Productos.innerHTML += `

                <div class="col" id="tamañocarrusel">
                  <div class="card h-100">
                      
                  <img  src="${p.url_imagen}" class="d-block w-100" alt="...">
                
                    <div class="card-body">
                      <h5 class="card-title">${p.nombre}</h5>
                      <p class="card-text">${p.descripcion}</p>
                     </div>
                      <div class="card-footer">
                      <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-success" id="btn${p.id}">Agregar al carrito</button>
           </div>
                         <small class="text-muted">$${p.precio}</small>
                       </div>
                     
                    </div>
                  </div>
                 </div>
                `;
            }); // foreach
        });//then
    }).catch(function(err) {
        console.log(err);
    });
    console.log(document.getElementById("Productos"));
   
}// addItems

window.addEventListener("load", function (){
    let div = document.getElementById("Productos");
    addItems(div);
   
});

function view(index) {
    // console.log(index);
    // console.table(productos[index]);
    document.getElementById("productTitleModal").innerHTML=productos[index].nombre;
    document.getElementById("productBodyModal").innerHTML=`${productos[index].descripcion}  <img class="bd-placeholder-img card-img-top" role="img" src="img/${productos[index].url_imagen}" />
    <strong>$ ${productos[index].price} MXN<strong>`;
    $("#productModal").modal("show");
}// view

/////// El siguiente código agrega un nuevo producto mediante un POST
// const data =     {nombre: "Cuaderno doble raya",
//     descripcion: "Cuaderno doble raya Norma",
//     price: 56.0,
//     url_imagen: "cuadernodobleraya.jpg"
// };

// fetch(URL_MAIN, {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });