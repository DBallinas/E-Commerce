
let datos=[];



    let bodyTabla=document.getElementById("list-items");
   

    window.addEventListener("load", function() {
        
        if(localStorage.getItem("elementosTabla")!=null)
        {
            datos=JSON.parse(localStorage.getItem("elementosTabla"));
            datos.forEach(element =>
              {
                  bodyTabla.innerHTML += `<div class="col" id="tamañocarrusel">
                  <div class="card h-100">
                      
                  <img  src="${element.Img}" class="d-block w-100" alt="...">
                
                    <div class="card-body">
                      <h5 class="card-title">${element.nombre}</h5>
                      <p class="card-text">${element.Descripcion}</p>
                     </div>
                      <div class="card-footer">
                         <div class="d-flex justify-content-between align-items-center">
                         <div class="btn-group">
                           <button type="button" class="btn btn-sm btn-outline-success">Agregar al carrito</button>
                         </div>
                         <small class="text-muted">$${element.precio}</small>
                       </div>
                     
                    </div>
                  </div>
                 </div>
                  `;
              });
        }
  
      });//window



      