// VAMOS POR EL ELEMENTO QUE CONTIENE LA CATEGORIA DE CALZADO EN EL HTML
let catCalzado=document.getElementById("warning-outlined");

// CUANDO ES SELECCIONADO SE MUESTRA EL SIGUIENTE EVENTO CON LA CATEGORIA DE CALZADO
catCalzado.addEventListener("click",(event)=>{
  event.preventDefault();
  document.getElementById("Productos").innerHTML="";


        let Categoria="Calzado";
        console.log(Categoria)

// CREAMOS LA FUNCION AÑADIR PRODUCTOS QUE SERAN LLAMADOS EN EL HTML Y RELLENADOS AUTOMATICAMENTE
    function addItem(item){
    console.log(Categoria);
    if(Categoria==item.categoria)
    {
      console.log(item.categoria);
    const itemHTML =     `
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

// DEFINIMOS A QUE ID SE VAN A INSERTAR Y DECIMOS QUE HAGA UN + EN CADA TARJETA PARA QUE NO SE SOBREESCRIBAN
    const itemsContainer = document.getElementById("Productos");
    itemsContainer.innerHTML += itemHTML;
}
}//add

// LISTA JSON DE DONDE CARGAMOS LOS PRODUCTOS Y SUS TAGS PARA SER LLAMADOS

addItem({'name':'Tenis Nike Air Max Excee de hombre',
'img1':'https://ss203.liverpool.com.mx/xl/1114316682_2p.jpg',
'description':'Tenis de running para velocidad y estabilidad. Aíslate de las distracciones. Cuando te exiges al máximo solo piensas en tus movimientos y tu respiración. Nada más. Todo lo trivial desaparece. Muévete rápido. Muévete despacio. Lo importante es moverte. Toma el control con estos tenis de running adidas. Su diseño liviano con amortiguación está listo para acompañarte en tu próxima salida.',
'precio':'2,099',
'categoria':'Calzado',
'id':'11'});

addItem({'name':'Tenis New Balance para hombre',
'img1':'https://ss237.liverpool.com.mx/xl/1114252145.jpg',
'description':`Camina por las calles de la ciudad con un estilo único y la mejor comodidad. Su diseño es ideal para dar soporte y un ajuste a la medida mientras recorres nuevos caminos. Plantilla Memory Foam Proporciona mayor amortiguación en cada paso que das.
<ul>
<li>Cuello y lengüeta acolchados y resistentes para que puedas ponértelos fácilmente.</li>
<li>Modelo: 894046NVY</li>
<li>Plantilla Memory Foam </li>
</ul>`,
'precio':'1,749',
'categoria':'Calzado',
'id':'12'});

addItem({'name':'Tenis ADIDAS Racer TR21 para hombre',
'img1':'https://ss237.liverpool.com.mx/xl/1116106928.jpg',
'description':`COMODIDAD VERSÁTIL Y AMORTIGUACIÓN FLEXIBLE. Por nuevos comienzos.Marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature.Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave.Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso. Diseño simple La malla acolchada se coloca en el antepié y a lo largo del cuello para brindar una sensación de comodidad.`,
'precio':'1,259',
'categoria':'Calzado',
'id':'13'});

addItem({'name':'Tenis Puma BMW X-Ray Speed para hombre',
'img1':'https://ss237.liverpool.com.mx/xl/1113821871.jpg',
'description':'te brinda la máxima simplicidad. Confeccionado con al menos un 20% de contenido reciclado, este modelo no pasa ningún detalle por alto.Ligereza.Ventilación.Cómodidad.Son solo palabras.Este calzado es todo lo que necesitas. Beneficios - La parte superior está diseñada con materiales que se estiran y envuelven el pie para brindar una sensación personalizada que se adapta rápidamente. - La entresuela y la suela de espuma ofrecen una amortiguación ligera. El cuello acolchado de corte low luce elegante y se siente genial.',
'precio':'2,159',
'categoria':'Calzado',
'id':'14'});

addItem({'name':'Tenis Reebok Casual Rider V Negro',
'img1':'http://drive.google.com/uc?export=view&id=1TuZAdzXR0yMyQ0eUJRW2E_kibUL9PAAK',
'description':'El estilo del running de los años 90 se combina con detalles modernos en los tenis Rider V. Perfectos para lucir impecable en cualquier lugar y a todas horas gracias a su diseño actual que hacen de este par algo único en tu guardarropa. Tecnología FuelFoam Se compone de una entresuela que te proporciona una capacidad de respuesta óptima con cada paso. Detalles • Forro textil con capacidad de transpirar la humedad y que posee gran durabilidad. • Cierre con cordones para un ajuste cómodo y personalizado. • Corte bajo para mayor libertad de movimiento. • Suela de caucho resistente a la abrasión. • Modelo: GZ3112 • Color: Negro. Acerca de Reebok Reebok te brinda gran variedad de prendas para que puedas comenzar una vida activa y saludable, combinando lo último en moda con un rendimiento óptimo, revolucionando totalmente la manera de practicar tu deporte favorito.',
'precio':'1,119',
'categoria':'Calzado',
'id':'15'});

}); //Enviar

/*G-SPORTS TODOS LOS DERECHOS RESERVADOS 2022*/