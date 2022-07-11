// CREAMOS LA FUNCION AÑADIR PRODUCTOS QUE SERAN LLAMADOS EN EL HTML Y RELLENADOS AUTOMATICAMENTE
function agregaProducto(elemento){
// DEFINIMOS EL CUERPO DEL HTML
  const itemHTML =  
                   `
                   <div class="col">
                   <div class="card h-100"  id="card">
                     <img src="${elemento.Img}" class="card-img-top" alt="..." id="cardproducto">
                     <div class="card-body">
                       <h5 class="card-title">${elemento.nombre}</h5>
                       <p class="card-text" id="precio">$${elemento.precio}</p>
                     </div>
                     <a href="#" id="addcart"><i class="bi bi-cart-plus-fill"> Agregar al carrito</i></a>
                   </div>
                 </div>
                  `;
                  const lista = document.getElementById("Productos");
                  lista.innerHTML += itemHTML;
              }

// LISTA JSON DE DONDE CARGAMOS LOS PRODUCTOS Y SUS TAGS PARA SER LLAMADOS
      datos=JSON.parse(localStorage.getItem("Productoscargados"));

      datos.forEach(elemento => {
        agregaProducto(elemento);
      });
/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/