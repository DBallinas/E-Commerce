function agregaProducto(elemento){
  const itemHTML =  
                   `
                   <div class="col">
                   <div class="card h-100"  id="card">
                     <img src="${item.img1}" class="card-img-top" alt="..." id="cardproducto">
                     <div class="card-body">
                       <h5 class="card-title">${item.name}</h5>
                       <p class="card-text" id="precio">$${item.precio}</p>
                     </div>
                     <a href="#" id="addcart"><i class="bi bi-cart-plus-fill"> Agregar al carrito</i></a>
                   </div>
                 </div>
                  `;
                  const lista = document.getElementById("Productos");
                  lista.innerHTML += itemHTML;
              }

      datos=JSON.parse(localStorage.getItem("Productoscargados"));

      datos.forEach(elemento => {
        agregaProducto(elemento);
      });