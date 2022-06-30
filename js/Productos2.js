function addItem(item){

    const itemHTML =     `  <div class="col" id="tamañocarrusel">
    <div class="card h-100">
        
    <img src="${item.img1}" class="d-block w-100" alt="...">
  
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
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




let datos=[];

let imageFile = document.getElementById('imageFile');
let store = {'names':[], 'data': []};

let totalEnProductos=0;
    let bodyTabla=document.getElementById("list-items");
   


    window.addEventListener("load", function() {
        
        if(localStorage.getItem("elementosTabla")!=null)
        {
            datos=JSON.parse(localStorage.getItem("elementosTabla"));
            datos.forEach(element =>
              {
                  bodyTabla.innerHTML += `<div class="col" id="tamañocarrusel">
                  <div class="card h-100">
                      
                  <img id="imageFile" src="${imgsData.data.value}" class="d-block w-100" alt="...">
                
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
  
        for(let i=0;i<localStorage.length;i++)
        {
            console.log(i+": "+localStorage.key(i)+":"+localStorage.getItem(localStorage.key(i)));
        }
      }
  );

  //previewFile(id imagen, input type file , textArea);
  function previewFile(img, inputFile, input) {
    let preview = document.getElementById(img);
    let file    = document.getElementById(inputFile).files[0];
    let reader  = new FileReader();

    reader.addEventListener("load", function () {
      console.log(store.data.length);
      store.data[store.data.length] = reader.result;
      store.names[store.names.length] =file.name;
      console.table(store);
      document.getElementById(input).value = reader.result;
        preview.src = reader.result;
      localStorage.setItem("imgsData", JSON.stringify(store));
      fillSelect();
      }, false);
    
      if (file) {
        reader.readAsDataURL(file);
      }// file
  }// previewFile 

  selectImages.addEventListener("change", function(){
    imageFile.src = store.data[selectImages.options[selectImages.selectedIndex].value];
  });

      