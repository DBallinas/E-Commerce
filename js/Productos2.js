function agregaProducto(elemento){
  const itemHTML =  
                   `<div class="col" id="tamañocarrusel">
                  <div class="card h-100">
                      
                  <img  src="${elemento.Img}" class="d-block w-100" alt="...">
                
                    <div class="card-body">
                      <h5 class="card-title">${elemento.nombre}</h5>
                      <p class="card-text">${elemento.Descripcion}</p>
                     </div>
                      <div class="card-footer">
                         <div class="d-flex justify-content-between align-items-center">
                         <div class="btn-group">
                           <button type="button" class="btn btn-sm btn-outline-szecondary">Agregar al carrito</button>
                         </div>
                         <small class="text-muted">$${elemento.precio}</small>
                       </div>
                     
                    </div>
                  </div>
                 </div>
                  `;
                  const lista = document.getElementById("list-items");
                  lista.innerHTML += itemHTML;
              }

      datos=JSON.parse(localStorage.getItem("Productoscargados"));

      datos.forEach(elemento => {
        agregaProducto(elemento);
      });