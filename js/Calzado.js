function addItem(item){

  const itemHTML =     `  <div class="col">
  <div class="card h-100">
   
    <img src="${item.img1}" class="card-img-top" alt="..." width="100px" height="250px" >
    <img src="${item.img2}" class="card-img-top" alt="..." width="100px" height="250px" >
    <img src="${item.img3}" class="card-img-top" alt="..." width="100px" height="250px" >
    
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
     </div>
      <div class="card-footer">
         <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
           <button type="button" class="btn btn-sm btn-outline-secondary">Agregar al carrito</button>
         </div>
         <small class="text-muted">$${item.precio}</small>
       </div>
     
    </div>
  </div>
 </div>
`



  const itemsContainer = document.getElementById("list-items");
  itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Tenis Adidas Ultimashow Hombre Fx3624',
  'img1':'',
  'img2':'',
  'img3':'',
  'description':'Tenis de running para velocidad y estabilidad. Aíslate de las distracciones. Cuando te exiges al máximo solo piensas en tus movimientos y tu respiración. Nada más. Todo lo trivial desaparece. Muévete rápido. Muévete despacio. Lo importante es moverte. Toma el control con estos tenis de running adidas. Su diseño liviano con amortiguación está listo para acompañarte en tu próxima salida.',
  'precio':'1,169'});
  
addItem({'name':'Tenis Skechers Casual Dynamight 2.0 Azul',
  'img1':'',
  'img2':'',
  'img3':'',
  'description':`Camina por las calles de la ciudad con un estilo único y la mejor comodidad usando los tenis Dynamight 2.0 Skechers. Su diseño es ideal para dar soporte y un ajuste a la medida mientras recorres nuevos caminos. Plantilla Memory Foam Proporciona mayor amortiguación en cada paso que das.
  <ul>
  <li>Cuello y lengüeta acolchados y resistentes para que puedas ponértelos fácilmente.</li>
  <li>Modelo: 894046NVY</li>
  <li>Plantilla Memory Foam </li>
</ul>`,
  'precio':'2934'});

addItem({'name':'Tenis Running Para Hombre Nike Revolution 6 Next Nature',
'img1':'',
'img2':'',
'img3':'',
  'description':`COMODIDAD VERSÁTIL Y AMORTIGUACIÓN FLEXIBLE. Por nuevos comienzos.Marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature.Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave.Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso. Diseño simple La malla acolchada se coloca en el antepié y a lo largo del cuello para brindar una sensación de comodidad.`,
  'precio':'1,119'});

addItem({'name':'Tenis Mujer Nike Tanjun',
'img1':'',
'img2':'',
'img3':'',
  'description':'El Nike Tanjun te brinda la máxima simplicidad. Confeccionado con al menos un 20% de contenido reciclado, este modelo no pasa ningún detalle por alto.Ligereza.Ventilación.Cómodidad.Son solo palabras.Este calzado es todo lo que necesitas. Beneficios - La parte superior está diseñada con materiales que se estiran y envuelven el pie para brindar una sensación personalizada que se adapta rápidamente. - La entresuela y la suela de espuma ofrecen una amortiguación ligera. El cuello acolchado de corte low luce elegante y se siente genial.',
  'precio':'1,239'})

addItem({'name':'Tenis Reebok Casual Rider V Negro',
'img1':'',
'img2':'',
'img3':'',
  'description':'El estilo del running de los años 90 se combina con detalles modernos en los tenis Rider V. Perfectos para lucir impecable en cualquier lugar y a todas horas gracias a su diseño actual que hacen de este par algo único en tu guardarropa. Tecnología FuelFoam Se compone de una entresuela que te proporciona una capacidad de respuesta óptima con cada paso. Detalles • Forro textil con capacidad de transpirar la humedad y que posee gran durabilidad. • Cierre con cordones para un ajuste cómodo y personalizado. • Corte bajo para mayor libertad de movimiento. • Suela de caucho resistente a la abrasión. • Modelo: GZ3112 • Color: Negro. Acerca de Reebok Reebok te brinda gran variedad de prendas para que puedas comenzar una vida activa y saludable, combinando lo último en moda con un rendimiento óptimo, revolucionando totalmente la manera de practicar tu deporte favorito.',
  'precio':'1,119'});



    