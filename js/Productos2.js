<<<<<<< HEAD
function addItem(item){

    const itemHTML =     `  <div class="col" id="tamañocarrusel">
    <div class="card h-100">
        
    <img src="${item.imgsData}" class="d-block w-100" alt="...">
  
      <div class="card-body">
        <h5 class="card-title">${item.nombre}</h5>
        <p class="card-text">${item.Descripcion}</p>
       </div>
        <div class="card-footer">
           <div class="d-flex justify-content-between align-items-center">
           <div class="btn-group">
             <button type="button" class="btn btn-sm btn-outline-szecondary">Agregar al carrito</button>
           </div>
           <small class="text-muted">$${item.precio}</small>
         </div>
       
      </div>
    </div>
   </div>
`;

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Polainas Wilson 4lbs Unisex',
    'img1':'http://drive.google.com/uc?export=view&id=1k1HGhKaj_UyEg301AF0qwG7I9SQwFwrw',
    'description':'Las Polainas Wilson tienen el peso extra para seguir fortaleciendo tus piernas y justo en los momentos de mayor intensidad. Cuenta con un diseño espectacular para amoldarse encima de los tobillos con comodidad. Guarda el equilibrio en la postura del avión para trabajar la fuerza en tus piernas al elevarlas, se sujetan de manera perfecta por un sistema de velcro para hacer los movimientos de mayor agilidad en tus prácticas deportivas.',
    'precio':'459.00'});



=======
>>>>>>> 36510b3151935d6835f33de7c32997c597dd9711

let datos=[];



    let bodyTabla=document.getElementById("list-items");
   

    window.addEventListener("load", function() {
        
        if(localStorage.getItem("Productoscargados")!=null)
        {
            datos=JSON.parse(localStorage.getItem("Productoscargados"));
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
                           <button type="button" class="btn btn-sm btn-outline-szecondary">Agregar al carrito</button>
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



      